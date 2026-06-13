# JCE Media Website — Work Log

## 2026-06-13 — Prototype → kinetic, on-brand, lead-capturing site

Owner: Jacques Groenewald · all changes live on https://jcemedia.com

### Shipped (commits, newest first)
- `e79bae7` Trigger redeploy to pick up GHL env vars
- `133fa35` Signature scroll motion + micro-interactions (hero parallax, Reveal scroll-ins, magnetic CTAs, animated nav underline, film grain)
- `6c79c25` Wire contact form to GoHighLevel via Netlify function
- `31e80e0` Add 8 brand-generated service images; elevate BrandVisual (image mode)
- `e72c299` Fix dead About buttons, CTA redundancy (footer CTA home-only), stat conflicts; add WhatsApp
- `ccb5417` Visual system (Space Grotesk, disciplined blue palette, removed all Unsplash stock), copy overhaul, accessibility pass
- `16ed662` Remove custom cursor + Projects scroll-pinning (per Jacques); drop GSAP (-45kb)
- `5ab9652` Phase 4: Lenis smooth scroll, scroll choreography, Framer page transitions
- `9da6e79` Kinetic living-system node-network hero (HeroCanvas)
- `f3ffa46` Fix mobile nav (overlay was trapped by nav backdrop-filter) + hero sizing
- `9cd898a` Phase 1: production build foundation (Tailwind/PostCSS, bundled React, netlify.toml) + path-based routing

### Key decisions
- Art direction: **Kinetic / Immersive**; hero concept = **living-system node network**.
- Magnetic custom cursor and GSAP pinned-horizontal Projects scroll were built, then **removed** (Jacques disliked both). Projects is now a native horizontal swipe; GSAP dropped entirely.
- Stats canon (no fact-checking, Jacques's call): **282,000+ leads · $15M ad budgets · 416% ROI** — reconciled everywhere.
- Owner name corrected portfolio-wide to **Jacques Groenewald**.

### Contact form
Live and verified end-to-end (test lead created in GHL, then deleted). `netlify/functions/contact.js` → GHL contact + note. Requires Netlify env vars `GHL_PIT` and `GHL_LOCATION_ID` (set). Env-var changes need a redeploy to take effect.

### Open backlog (by impact)
1. Real proof — testimonials + real client logos (Trusted-By strip is still Ensinger ×6).
2. Dedicated `/work` case-studies page.
3. Dead footer links (all `href="#"`).
4. SEO depth — schema, sitemap, per-page OG images.
5. Real Lighthouse pass (motion stack ~155kb gzip; framer-motion → View Transitions swap candidate).
6. Insights/blog.
7. Optional: editorial mixed-case heading pass; GHL opportunity creation + auto-reply on form submit.
