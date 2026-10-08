// Business X-Ray request handler (jcemedia.com/xray) — forwards requests into
// GoHighLevel as a tagged contact with the answers attached as a note.
// Same env vars as contact.js (GHL_PIT, GHL_LOCATION_ID). Optional:
// XRAY_PIPELINE_ID + XRAY_STAGE_ID also open an opportunity in the Blueprint
// pipeline once that pipeline exists.

const GHL = 'https://services.leadconnectorhq.com';

const headers = (pit) => ({
  Authorization: `Bearer ${pit}`,
  Version: '2021-07-28',
  'Content-Type': 'application/json',
  Accept: 'application/json',
});

const json = (statusCode, obj) => ({
  statusCode,
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(obj),
});

const clip = (v, n = 300) => String(v || '').trim().slice(0, n);

// SA numbers: 082 123 4567 / 27821234567 / +27 82 123 4567 → +27821234567
export const normalisePhone = (raw) => {
  const digits = String(raw || '').replace(/\D/g, '');
  if (!digits) return '';
  if (digits.startsWith('27') && digits.length === 11) return `+${digits}`;
  if (digits.startsWith('0') && digits.length === 10) return `+27${digits.slice(1)}`;
  return String(raw).trim().startsWith('+') ? `+${digits}` : digits;
};

// A first read of fit from the two form answers. The full 20-point score
// (doc 03 of the Sales Blueprint) is done by a person after the X-Ray.
const SPEND = { 'Nothing yet': 0, 'Under R5,000': 1, 'R5,000 to R10,000': 2, 'R10,000 to R25,000': 3, 'More than R25,000': 4 };
const ENQ = { 'Under 20': 0, '20 to 50': 1, '50 to 150': 2, '150 to 500': 3, 'More than 500': 4, 'Not sure': 1 };
export const fitBand = (spend, enquiries) => {
  const s = (SPEND[spend] ?? 0) + (ENQ[enquiries] ?? 0);
  return s >= 5 ? 'high' : s >= 3 ? 'medium' : 'low';
};

export const handler = async (event) => {
  if (event.httpMethod !== 'POST') return json(405, { error: 'Method not allowed' });

  const pit = process.env.GHL_PIT;
  const locationId = process.env.GHL_LOCATION_ID;
  if (!pit || !locationId) return json(500, { error: 'The form is not configured yet. Please WhatsApp us on 079 512 4292.' });

  let d;
  try {
    d = JSON.parse(event.body || '{}');
  } catch {
    return json(400, { error: 'Invalid request.' });
  }

  // Honeypot — bots fill hidden fields; pretend success and drop it.
  if (d.company_website) return json(200, { ok: true });

  const name = clip(d.name, 120);
  const business = clip(d.business, 160);
  const website = clip(d.website, 300);
  const email = clip(d.email, 200);
  const phone = normalisePhone(d.phone);
  const enquiries = clip(d.enquiries, 40);
  const spend = clip(d.spend, 40);

  if (!name || !business || !website) return json(400, { error: 'Please add your name, business and website or Google listing.' });
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return json(400, { error: 'Please check your email address.' });
  if (phone.replace(/\D/g, '').length < 9) return json(400, { error: 'Please add a WhatsApp number we can send it to.' });

  const fit = fitBand(spend, enquiries);
  const [firstName, ...rest] = name.split(' ');
  const tags = ['Website Lead', 'Business X-Ray', `xray-fit-${fit}`];
  const utm = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'fbclid', 'gclid']
    .filter((k) => d[k]).map((k) => `${k}: ${clip(d[k], 200)}`);

  try {
    const contactRes = await fetch(`${GHL}/contacts/`, {
      method: 'POST',
      headers: headers(pit),
      body: JSON.stringify({
        firstName,
        lastName: rest.join(' '),
        name,
        email,
        phone,
        companyName: business,
        website,
        locationId,
        source: 'jcemedia.com/xray',
        tags,
      }),
    });
    const contactJson = await contactRes.json().catch(() => ({}));
    let contactId = contactJson?.contact?.id;

    // Duplicate email or phone → GHL returns the existing contact id in meta.
    // Tag the existing contact so the X-Ray workflow still fires.
    if (!contactRes.ok && !contactId) {
      contactId = contactJson?.meta?.contactId || contactJson?.contactId;
      if (!contactId) return json(502, { error: 'Could not submit. Please WhatsApp us on 079 512 4292.' });
      try {
        await fetch(`${GHL}/contacts/${contactId}/tags`, {
          method: 'POST', headers: headers(pit), body: JSON.stringify({ tags }),
        });
      } catch { /* ignore — the note below still records the request */ }
    }

    // The answers as a note (best-effort — the lead is already captured).
    const note = [
      'BUSINESS X-RAY REQUEST',
      `Business: ${business}`,
      `Website / listing: ${website}`,
      `WhatsApp: ${phone}`,
      `Enquiries a month: ${enquiries || 'not given'}`,
      `Marketing spend a month: ${spend || 'not given'}`,
      `First read of fit: ${fit.toUpperCase()} (full X-Ray if high or medium, light version if low)`,
      'Promised: X-Ray on WhatsApp + email within 2 working days.',
      ...(utm.length ? ['', ...utm] : []),
    ].join('\n');
    try {
      let userId;
      const usersRes = await fetch(`${GHL}/users/?locationId=${locationId}`, { headers: headers(pit) });
      const usersJson = await usersRes.json().catch(() => ({}));
      userId = usersJson?.users?.[0]?.id;
      await fetch(`${GHL}/contacts/${contactId}/notes`, {
        method: 'POST', headers: headers(pit), body: JSON.stringify({ body: note, ...(userId ? { userId } : {}) }),
      });
    } catch { /* ignore */ }

    // Optional: open an opportunity once the Blueprint pipeline exists.
    const pipelineId = process.env.XRAY_PIPELINE_ID;
    const pipelineStageId = process.env.XRAY_STAGE_ID;
    if (pipelineId && pipelineStageId) {
      try {
        await fetch(`${GHL}/opportunities/`, {
          method: 'POST',
          headers: headers(pit),
          body: JSON.stringify({
            locationId, pipelineId, pipelineStageId, contactId,
            name: `${business}: Business X-Ray`, status: 'open', source: 'jcemedia.com/xray',
          }),
        });
      } catch { /* ignore */ }
    }

    return json(200, { ok: true });
  } catch {
    return json(500, { error: 'Something went wrong. Please WhatsApp us on 079 512 4292.' });
  }
};
