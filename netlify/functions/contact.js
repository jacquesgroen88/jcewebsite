// Contact form handler — forwards website leads into GoHighLevel.
// The GHL Private Integration Token is read from env vars (GHL_PIT,
// GHL_LOCATION_ID) and never exposed to the browser.

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

export const handler = async (event) => {
  if (event.httpMethod !== 'POST') return json(405, { error: 'Method not allowed' });

  const pit = process.env.GHL_PIT;
  const locationId = process.env.GHL_LOCATION_ID;
  if (!pit || !locationId) return json(500, { error: 'Contact form is not configured yet.' });

  let data;
  try {
    data = JSON.parse(event.body || '{}');
  } catch {
    return json(400, { error: 'Invalid request.' });
  }

  // Honeypot — bots fill hidden fields; pretend success and drop it.
  if (data.company_website) return json(200, { ok: true });

  const name = (data.name || '').trim();
  const email = (data.email || '').trim();
  const subject = (data.subject || 'General Inquiry').trim();
  const message = (data.message || '').trim();

  if (!name || !email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return json(400, { error: 'Please provide a valid name and email.' });
  }

  const [firstName, ...rest] = name.split(' ');
  const lastName = rest.join(' ');

  try {
    const contactRes = await fetch(`${GHL}/contacts/`, {
      method: 'POST',
      headers: headers(pit),
      body: JSON.stringify({
        firstName,
        lastName,
        name,
        email,
        locationId,
        source: 'jcemedia.com contact form',
        tags: ['Website Lead', subject],
      }),
    });
    const contactJson = await contactRes.json().catch(() => ({}));
    let contactId = contactJson?.contact?.id;

    // Duplicate email → GHL returns the existing contact id in meta.
    if (!contactRes.ok && !contactId) {
      contactId = contactJson?.meta?.contactId || contactJson?.contactId;
      if (!contactId) return json(502, { error: 'Could not submit. Please email us instead.' });
    }

    // Attach the message as a note (best-effort — the lead is already captured).
    if (contactId && message) {
      let userId;
      try {
        const usersRes = await fetch(`${GHL}/users/?locationId=${locationId}`, { headers: headers(pit) });
        const usersJson = await usersRes.json().catch(() => ({}));
        userId = usersJson?.users?.[0]?.id;
      } catch { /* ignore */ }
      try {
        await fetch(`${GHL}/contacts/${contactId}/notes`, {
          method: 'POST',
          headers: headers(pit),
          body: JSON.stringify({ body: `Subject: ${subject}\n\n${message}`, ...(userId ? { userId } : {}) }),
        });
      } catch { /* ignore */ }
    }

    return json(200, { ok: true });
  } catch {
    return json(500, { error: 'Something went wrong. Please email us instead.' });
  }
};
