# Nyarado TV — Marketing Website

A single-page marketing site for Nyarado TV, an event video coverage
business in Nairobi, Kenya. Built with React, Vite, and Tailwind CSS as a
static site — no backend required.

## Stack

- React 19 + Vite
- Tailwind CSS v4
- No external UI/animation libraries — reveal-on-scroll and reduced-motion
  handling are small custom hooks (`src/hooks`)

## Running locally

```bash
npm install
npm run dev      # start dev server
npm run build    # production build to dist/
npm run preview  # preview the production build locally
```

Deploys as-is to Vercel, Netlify, or any static host — `npm run build`
produces a `dist/` folder ready to upload.

## Before going live: content checklist

**Everything below lives in one file: [`src/config/siteContent.js`](src/config/siteContent.js).**
Edit that file and the whole site updates — no need to touch components.

| What | Where in `siteContent.js` |
|---|---|
| Phone number, email, location | `business` object |
| Instagram / Facebook / TikTok links | `socials` array |
| Service descriptions | `services` array |
| Portfolio videos/photos | `portfolioItems` array — see below |
| Pricing figures | `pricingTiers` array (currently sample KES rates) |
| Testimonial quotes & names | `testimonials` array (currently placeholder quotes) |
| Booking form event types | `eventTypes` array |

### Swapping in real portfolio media

Each entry in `portfolioItems` currently renders as a styled placeholder
frame (`src/components/sections/PortfolioCard.jsx`). To use real media:

1. Add a thumbnail image or hosted video URL to the relevant item in
   `portfolioItems` (e.g. add a `thumbnail` or `videoUrl` field).
2. In `PortfolioCard.jsx`, replace the placeholder `<div>` block with an
   `<img>` (lazy-loaded via `loading="lazy"`) or a `<video>`/embed using
   that field.

### Contact form behavior

The contact form (`src/components/sections/Contact.jsx`) does client-side
validation, then opens a pre-filled `mailto:` draft addressed to
`business.email` — no backend needed for v1.

To wire it to a real form service instead (e.g.
[Formspree](https://formspree.io/)):

1. Replace the body of `handleSubmit` in `Contact.jsx` with a `fetch()`
   POST to your form endpoint.
2. Keep the existing `validate()` function — it already covers required
   fields and email format.

## Project structure

```
src/
├── config/
│   └── siteContent.js       # all editable copy & placeholder data
├── components/
│   ├── layout/               # Navbar, MobileMenu, Footer
│   ├── ui/                   # small reusable primitives (RecIndicator,
│   │                          # Timecode, SectionHeading, RevealOnScroll, Icon)
│   └── sections/              # one file per page section
├── hooks/
│   ├── useReducedMotion.js   # respects prefers-reduced-motion
│   └── useScrollSpy.js       # active nav-link tracking on scroll
├── App.jsx                    # assembles all sections
└── index.css                  # Tailwind import, theme tokens, fonts
```

## Design notes

- Palette and font tokens are defined in the `@theme` block at the top of
  `src/index.css` (deep plum, cream, gold, ember, teal; Fraunces / Inter /
  JetBrains Mono).
- Motion respects `prefers-reduced-motion` globally (see `index.css` and
  `useReducedMotion.js`) — reveal animations are skipped entirely for users
  who request reduced motion.
