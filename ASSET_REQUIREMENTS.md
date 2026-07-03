# Closing Gap Studio Assets

Main website assets live in:

`public/assets/closing-gap/`

## Logo and Icons

| File | Purpose |
| --- | --- |
| `cg-logo-transparent.png` | Full logo used in the website. |
| `cg-logo-icon.png` | Header icon and square brand mark. |
| `brand-logo-light.webp` | Social preview image for dark backgrounds. |
| `brand-logo.webp` | Compressed logo variant. |
| `brand-logo-transparent.png` | High-resolution transparent logo. |
| `apple-touch-icon.png` | Mobile app/home-screen icon. |
| `favicon-transparent.png` | Transparent favicon source. |

Root favicon files:

- `public/favicon.ico`
- `public/favicon.png`
- `public/favicon.svg`

## Gallery

Poster gallery images live in:

`public/assets/closing-gap/gallery/`

The current gallery includes 21 optimized WebP poster files named `poster-01-...webp` through `poster-21-...webp`.

## Notes

- Keep uploaded gallery images optimized as WebP when possible.
- Avoid committing `dist/`, `release/`, `.vercel/`, or `node_modules/`.
- Add new gallery images under `public/assets/closing-gap/gallery/` and update `galleryItems` in `src/App.tsx`.
