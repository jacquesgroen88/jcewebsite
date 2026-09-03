// AI Toolkit lead magnet handler — forwards toolkit signups into GoHighLevel.
//
// Two stages hit this same endpoint:
//   stage "subscribe"  → /toolkit/ email capture. Creates the contact, tags it
//                        for the monthly prompt drop, and unlocks the PDF.
//   stage "brandbrain" → /toolkit/thanks/ follow-up form. Adds the Brand Brain
//                        answers as a note and tags the contact for fulfilment.
//
// The GHL Private Integration Token is read from env vars (GHL_PIT,
// GHL_LOCATION_ID) and never exposed to the browser. Same vars the contact
// form already uses, so no new Netlify config is needed.

const GHL = 'https://services.leadconnectorhq.com';

const SOURCE = 'jcemedia.com AI toolkit';
const TAG_SUBSCRIBER = 'AI Toolkit';
const TAG_MONTHLY = 'Toolkit Monthly Drop';
const TAG_BRAND_BRAIN = 'Brand Brain Requested';

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

const isEmail = (v) => /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v);

// Trim and hard-cap a free-text field so a bot cannot post a novel into GHL.
const clean = (v, max = 600) => String(v || '').trim().slice(0, max);

// Create the contact, or recover the id of the existing one on a duplicate.
// GHL returns the existing contact id under meta.contactId when the email
// is already on the location.
async function upsertContact(pit, locationId, { email, name, tags }) {
  const [firstName, ...rest] = (name || '').split(' ').filter(Boolean);
  const body = {
    email,
    locationId,
    source: SOURCE,
    tags,
    ...(firstName ? { firstName, lastName: rest.join(' '), name } : {}),
  };

  const res = await fetch(`${GHL}/contacts/`, {
    method: 'POST',
    headers: headers(pit),
    body: JSON.stringify(body),
  });
  const payload = await res.json().catch(() => ({}));

  let contactId = payload?.contact?.id;
  if (contactId) return { contactId, created: true };

  contactId = payload?.meta?.contactId || payload?.contactId;
  if (!contactId) return { contactId: null, created: false };

  // Existing contact — the create call ignored our tags, so apply them now.
  // Best-effort: the lead is already captured either way.
  try {
    await fetch(`${GHL}/contacts/${contactId}`, {
      method: 'PUT',
      headers: headers(pit),
      body: JSON.stringify({ tags, ...(firstName ? { firstName, lastName: rest.join(' '), name } : {}) }),
    });
  } catch { /* ignore */ }

  return { contactId, created: false };
}

// Notes need a userId on some GHL locations. Look one up, but never block on it.
async function addNote(pit, locationId, contactId, noteBody) {
  let userId;
  try {
    const res = await fetch(`${GHL}/users/?locationId=${locationId}`, { headers: headers(pit) });
    const payload = await res.json().catch(() => ({}));
    userId = payload?.users?.[0]?.id;
  } catch { /* ignore */ }

  try {
    await fetch(`${GHL}/contacts/${contactId}/notes`, {
      method: 'POST',
      headers: headers(pit),
      body: JSON.stringify({ body: noteBody, ...(userId ? { userId } : {}) }),
    });
  } catch { /* ignore */ }
}

export const handler = async (event) => {
  if (event.httpMethod !== 'POST') return json(405, { error: 'Method not allowed' });

  const pit = process.env.GHL_PIT;
  const locationId = process.env.GHL_LOCATION_ID;
  if (!pit || !locationId) return json(500, { error: 'Signup is not configured yet.' });

  let data;
  try {
    data = JSON.parse(event.body || '{}');
  } catch {
    return json(400, { error: 'Invalid request.' });
  }

  // Honeypot — bots fill hidden fields; pretend success and drop it.
  if (data.company_website) return json(200, { ok: true });

  const email = clean(data.email, 200).toLowerCase();
  if (!isEmail(email)) return json(400, { error: 'Please enter a valid email address.' });

  const stage = data.stage === 'brandbrain' ? 'brandbrain' : 'subscribe';

  try {
    if (stage === 'subscribe') {
      const { contactId } = await upsertContact(pit, locationId, {
        email,
        tags: [TAG_SUBSCRIBER, TAG_MONTHLY],
      });
      if (!contactId) return json(502, { error: 'Could not sign you up. Please email jacques@jcemedia.com.' });
      return json(200, { ok: true });
    }

    // stage === 'brandbrain'
    const name = clean(data.name, 120);
    const business = clean(data.business);
    const customer = clean(data.customer);
    const tone = clean(data.tone);
    const goal = clean(data.goal);

    if (!business || !customer) {
      return json(400, { error: 'Tell me what you sell and who you sell it to.' });
    }

    const { contactId } = await upsertContact(pit, locationId, {
      email,
      name,
      tags: [TAG_SUBSCRIBER, TAG_MONTHLY, TAG_BRAND_BRAIN],
    });
    if (!contactId) return json(502, { error: 'Could not save that. Please email jacques@jcemedia.com.' });

    await addNote(
      pit,
      locationId,
      contactId,
      [
        'BRAND BRAIN REQUEST (from /toolkit/thanks/)',
        '',
        `Business / what they sell: ${business}`,
        `Ideal customer: ${customer}`,
        `Tone: ${tone || 'not given'}`,
        `Wants more of right now: ${goal || 'not given'}`,
      ].join('\n')
    );

    return json(200, { ok: true });
  } catch {
    return json(500, { error: 'Something went wrong. Please email jacques@jcemedia.com.' });
  }
};
