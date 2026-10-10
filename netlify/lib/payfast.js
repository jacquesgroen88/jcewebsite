// Shared Payfast helpers for the workshop checkout and its ITN handler.
// Credentials come from Netlify env vars and never reach the browser:
//   PAYFAST_MERCHANT_ID, PAYFAST_MERCHANT_KEY, PAYFAST_PASSPHRASE
//   PAYFAST_MODE = "live" (default) or "sandbox"
//   Sandbox testing uses your own sandbox account if PAYFAST_SANDBOX_MERCHANT_ID,
//   PAYFAST_SANDBOX_MERCHANT_KEY and PAYFAST_SANDBOX_PASSPHRASE are set.
import crypto from 'node:crypto';

export const SANDBOX = {
  merchantId: '10000100',
  merchantKey: '46f0cd694581a',
  passphrase: 'jt7NOE43FZPn',
};

export const payfastConfig = () => {
  const mode = (process.env.PAYFAST_MODE || 'live').toLowerCase();
  const sandbox = mode === 'sandbox';
  const cfg = sandbox
    ? {
        merchantId: process.env.PAYFAST_SANDBOX_MERCHANT_ID || SANDBOX.merchantId,
        merchantKey: process.env.PAYFAST_SANDBOX_MERCHANT_KEY || SANDBOX.merchantKey,
        passphrase: process.env.PAYFAST_SANDBOX_PASSPHRASE ?? SANDBOX.passphrase,
      }
    : {
        merchantId: process.env.PAYFAST_MERCHANT_ID,
        merchantKey: process.env.PAYFAST_MERCHANT_KEY,
        passphrase: process.env.PAYFAST_PASSPHRASE || '',
      };
  const host = sandbox ? 'https://sandbox.payfast.co.za' : 'https://www.payfast.co.za';
  return {
    ...cfg,
    sandbox,
    configured: Boolean(cfg.merchantId && cfg.merchantKey),
    processUrl: `${host}/eng/process`,
    validateUrl: `${host}/eng/query/validate`,
  };
};

// Payfast's encoding: like PHP urlencode — spaces as "+", uppercase hex.
export const pfEncode = (v) =>
  encodeURIComponent(String(v).trim())
    .replace(/%20/g, '+')
    .replace(/[!'()*~]/g, (c) => '%' + c.charCodeAt(0).toString(16).toUpperCase());

// Field string in the order given, skipping empty values and the signature.
export const paramString = (pairs) =>
  pairs
    .filter(([k, v]) => k !== 'signature' && v !== undefined && v !== null && String(v).trim() !== '')
    .map(([k, v]) => `${k}=${pfEncode(v)}`)
    .join('&');

// ITN: every field Payfast posted, in the order received, INCLUDING empty ones.
export const paramStringAll = (pairs) =>
  pairs.filter(([k]) => k !== 'signature').map(([k, v]) => `${k}=${pfEncode(v ?? '')}`).join('&');

export const signature = (pairs, passphrase, { includeEmpty = false } = {}) => {
  let s = includeEmpty ? paramStringAll(pairs) : paramString(pairs);
  if (passphrase) s += `&passphrase=${pfEncode(passphrase)}`;
  return crypto.createHash('md5').update(s).digest('hex');
};

// The current workshop run. Change these lines for the next one.
export const EVENT = {
  code: 'opgp-2026-10-15',
  name: 'One-Page Growth Plan Workshop, Thu 15 Oct 2026, 19:00',
  seat: 297,
  review: 497,
};
