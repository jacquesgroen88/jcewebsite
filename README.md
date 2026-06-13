# JCE Media — Agency Website

Marketing site for **JCE Media** (Duel Digital (Pty) Ltd), live at **[jcemedia.com](https://jcemedia.com)**.

## Stack

- **React 19** + **TypeScript**
- **Vite 6** (build + dev server)
- **Tailwind CSS 3** (PostCSS build — config in `tailwind.config.js`, global styles in `index.css`)
- **lucide-react** (icons)

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
```

## Build

```bash
npm run build      # outputs to dist/  (fingerprinted bundles in dist/_assets/)
npm run preview    # serve the production build locally
```

## Deploy

Auto-deploys to Netlify from the `main` branch. Build settings live in
[`netlify.toml`](./netlify.toml) (build command, SPA redirect, headers, caching).

## Structure

```
index.html          # app shell (fonts, meta, #root)
index.tsx           # React entry — mounts App, imports index.css
App.tsx             # hash-based page switching + layout
index.css           # Tailwind directives + global keyframes & component classes
tailwind.config.js  # theme tokens (colors, fonts, animations)
constants.tsx       # site content: services, case studies, stats, logos
types.ts            # shared TypeScript types
components/          # Navbar, Hero, Services, Projects, Stats, Footer, etc.
pages/              # Services, About, Contact, GTM onboarding/thank-you
public/             # static assets (images, logo, /omnicom client portal)
```
