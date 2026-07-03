# Closing Gap Studio

Premium graphic design and web design website for Closing Gap Studio.

## Pages

- `/` - Home page for the studio, services, proof section, and contact CTA.
- `/gallery` - Poster gallery with selected campaign, flyer, and poster work.
- `/gallery.html` - Direct static gallery page, also generated for compatibility.

## Tech Stack

- React
- TypeScript
- Vite
- Framer Motion
- Lucide React

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
```

The production output is generated in `dist/`.

## Vercel

This repo includes `vercel.json` with:

- Framework: Vite
- Build command: `npm run build`
- Output directory: `dist`
- Rewrite: `/gallery` to `/gallery.html`

In Vercel, import `CGSupportDesk/CG_Studio` from GitHub and keep the default project settings.
