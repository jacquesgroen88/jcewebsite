// One-Page Growth Plan workshop checkout (jcemedia.com/workshop).
// Validates the form, records the lead in GoHighLevel as "checkout started",
// and returns the signed Payfast fields the browser posts to Payfast.
import { payfastConfig, signature, EVENT } from '../lib/payfast.js';

const GHL = 'https://services.leadconnectorhq.com';
const SITE = 'https://jcemedia.com';


const json = (statusCode, obj) => ({
  statusCode,
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(obj),
});
const clip = (v, n = 120) => String(v || '').trim().slice(0, n);
const ghlHeaders = (pit) => ({
  Authorization: `Bearer ${pit}`, Version: '2021-07-28', 'Content-Type': 'application/json', Accept: 'application/json',
});

export const normalisePhone = (raw) => {
  const d = String(raw || '').replace(/\D/g, '');
  if (d.startsWith('27') && d.length === 11) return `0${d.slice(2)}`;
  if (d.startsWith('0') && d.length === 10) return d;
  return d;
};

export const handler = async (event) => {
  if (event.httpMethod !== 'POST') return json(405, { error: 'Method not allowed' });

  const pf = payfastConfig();
  if (!pf.configured) return json(503, { error: 'Payments are not open yet. Please WhatsApp us on 079 512 4292 to reserve a seat.' });

  let d;
  try { d = JSON.parse(event.body || '{}'); } catch { return json(400, { error: 'Invalid request.' }); }
  if (d.company_website) return json(200, { ok: true, honeypot: true });

  const first = clip(d.first_name, 60);
  const last = clip(d.last_name, 60);
  const email = clip(d.email, 200);
  const cell = normalisePhone(d.phone);
  const business = clip(d.business, 160);
  const review = d.plan_review === 'yes';
  const consent = d.marketing_consent === 'yes';

  if (!first || !last) return json(400, { error: 'Please add your first name and surname.' });
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return json(400, { error: 'Please check your email address.' });
  if (cell && !/^0\d{9}$/.test(cell)) return json(400, { error: 'Please check your WhatsApp number, for example 082 123 4567.' });
  if (!business) return json(400, { error: 'Please add your business name.' });

  const amount = (EVENT.seat + (review ? EVENT.review : 0)).toFixed(2);
  const id = `${EVENT.code}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`;

  // Best-effort CRM record so an abandoned checkout can still be followed up once.
  const pit = process.env.GHL_PIT;
  const locationId = process.env.GHL_LOCATION_ID;
  if (pit && locationId) {
    try {
      const tags = ['Workshop Lead', `${EVENT.code}-checkout-started`];
      const res = await fetch(`${GHL}/contacts/`, {
        method: 'POST', headers: ghlHeaders(pit),
        body: JSON.stringify({ firstName: first, lastName: last, name: `${first} ${last}`, email,
          ...(cell ? { phone: `+27${cell.slice(1)}` } : {}), companyName: business, locationId,
          source: 'jcemedia.com/workshop', tags }),
      });
      const j = await res.json().catch(() => ({}));
      const cid = j?.contact?.id || j?.meta?.contactId;
      if (!res.ok && cid) {
        await fetch(`${GHL}/contacts/${cid}/tags`, { method: 'POST', headers: ghlHeaders(pit), body: JSON.stringify({ tags }) });
      }
    } catch { /* never block a payment on the CRM */ }
  }

  // Field order matters for the signature: it must match Payfast's documented order.
  const pairs = [
    ['merchant_id', pf.merchantId],
    ['merchant_key', pf.merchantKey],
    ['return_url', `${SITE}/workshop/thanks/?r=${review ? 1 : 0}`],
    ['cancel_url', `${SITE}/workshop/?cancelled=1`],
    ['notify_url', `${SITE}/.netlify/functions/workshop-itn`],
    ['name_first', first],
    ['name_last', last],
    ['email_address', email],
    ['cell_number', cell],
    ['m_payment_id', id],
    ['amount', amount],
    ['item_name', review ? 'One-Page Growth Plan Workshop + Plan Review' : 'One-Page Growth Plan Workshop'],
    ['item_description', EVENT.name],
    ['custom_str1', business],
    ['custom_str2', review ? 'review' : 'seat'],
    ['custom_str3', consent ? 'consent-yes' : 'consent-no'],
    ['custom_str4', EVENT.code],
  ];
  const fields = Object.fromEntries(pairs.filter(([, v]) => String(v ?? '').trim() !== ''));
  fields.signature = signature(pairs, pf.passphrase);

  return json(200, { ok: true, action: pf.processUrl, fields, sandbox: pf.sandbox });
};
