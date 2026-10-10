// Payfast ITN (instant transaction notification) for the workshop.
// Payfast posts here server-to-server after a payment. We check the signature,
// confirm the notification with Payfast, check the amount, then mark the buyer
// as paid in GoHighLevel. A GHL workflow on the "paid" tag sends the Zoom link.
import { payfastConfig, signature, paramStringAll, EVENT } from '../lib/payfast.js';

const GHL = 'https://services.leadconnectorhq.com';
const ok = () => ({ statusCode: 200, body: 'OK' });
const ghlHeaders = (pit) => ({
  Authorization: `Bearer ${pit}`, Version: '2021-07-28', 'Content-Type': 'application/json', Accept: 'application/json',
});

// Keep Payfast's field order exactly as received.
export const parsePairs = (body) =>
  String(body || '').split('&').filter(Boolean).map((kv) => {
    const i = kv.indexOf('=');
    const k = decodeURIComponent((i < 0 ? kv : kv.slice(0, i)).replace(/\+/g, ' '));
    const v = i < 0 ? '' : decodeURIComponent(kv.slice(i + 1).replace(/\+/g, ' '));
    return [k, v];
  });

export const handler = async (event) => {
  // Payfast must always get a 200, or it retries. Failures are logged, not returned.
  if (event.httpMethod !== 'POST') return { statusCode: 405, body: 'Method not allowed' };
  const pf = payfastConfig();
  const raw = event.isBase64Encoded ? Buffer.from(event.body || '', 'base64').toString('utf8') : event.body;
  const pairs = parsePairs(raw);
  const d = Object.fromEntries(pairs);

  // 1. Signature
  if (signature(pairs, pf.passphrase, { includeEmpty: true }) !== d.signature) {
    console.error('ITN signature mismatch', d.m_payment_id);
    return ok();
  }
  // 2. Merchant
  if (String(d.merchant_id) !== String(pf.merchantId)) {
    console.error('ITN merchant mismatch', d.m_payment_id);
    return ok();
  }
  // 3. Confirm with Payfast
  try {
    const res = await fetch(pf.validateUrl, {
      method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: paramStringAll(pairs),
    });
    const text = (await res.text()).trim();
    if (text !== 'VALID') { console.error('ITN not VALID', d.m_payment_id, text); return ok(); }
  } catch (e) {
    console.error('ITN validate failed', d.m_payment_id, e?.message);
    return ok();
  }
  // 4. Amount and status
  const review = d.custom_str2 === 'review';
  const expected = EVENT.seat + (review ? EVENT.review : 0);
  if (Math.abs(parseFloat(d.amount_gross) - expected) > 0.01) {
    console.error('ITN amount mismatch', d.m_payment_id, d.amount_gross, expected);
    return ok();
  }
  if (d.payment_status !== 'COMPLETE') return ok();

  // 5. Mark paid in GHL
  const pit = process.env.GHL_PIT;
  const locationId = process.env.GHL_LOCATION_ID;
  if (!pit || !locationId) { console.error('ITN: GHL not configured', d.m_payment_id); return ok(); }

  const code = d.custom_str4 || EVENT.code;
  const consent = d.custom_str3 === 'consent-yes';
  const tags = ['Workshop Buyer', `${code}-paid`, consent ? 'jce-consent-yes' : 'jce-consent-customer-only',
    ...(review ? [`${code}-plan-review`] : [])];
  try {
    const res = await fetch(`${GHL}/contacts/`, {
      method: 'POST', headers: ghlHeaders(pit),
      body: JSON.stringify({ firstName: d.name_first, lastName: d.name_last, name: `${d.name_first} ${d.name_last}`.trim(),
        email: d.email_address, companyName: d.custom_str1, locationId, source: 'jcemedia.com/workshop', tags }),
    });
    const j = await res.json().catch(() => ({}));
    const cid = j?.contact?.id || j?.meta?.contactId;
    if (!cid) { console.error('ITN: no GHL contact', d.m_payment_id, res.status); return ok(); }
    if (!res.ok) {
      await fetch(`${GHL}/contacts/${cid}/tags`, { method: 'POST', headers: ghlHeaders(pit), body: JSON.stringify({ tags }) });
    }
    const note = [
      'WORKSHOP PAYMENT (Payfast)',
      `Event: ${code}`,
      `Paid: R${d.amount_gross} (fee R${d.amount_fee}, net R${d.amount_net})`,
      `Plan review: ${review ? 'YES, deliver within 5 working days' : 'no'}`,
      `Business: ${d.custom_str1}`,
      `Payfast payment id: ${d.pf_payment_id} · our id: ${d.m_payment_id}`,
      consent
        ? 'MARKETING CONSENT: YES (ticked at checkout).'
        : 'MARKETING CONSENT: not ticked. Customer: event messages plus similar JCE services with an opt-out only.',
    ].join('\n');
    await fetch(`${GHL}/contacts/${cid}/notes`, { method: 'POST', headers: ghlHeaders(pit), body: JSON.stringify({ body: note }) });
  } catch (e) {
    console.error('ITN: GHL write failed', d.m_payment_id, e?.message);
  }
  return ok();
};
