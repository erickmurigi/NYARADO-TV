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

The hero photo and portfolio thumbnails are currently **royalty-free Unsplash
stock photos** (in `public/images/`), used as placeholders because the client
has no samples yet. Portfolio titles are generic on purpose. To swap in real
work:

1. Save the new image over the existing file in `public/images/` (same name),
   or point `thumbnail` / `heroImage.src` in `siteContent.js` at a new path.
   Portfolio cards are 4:5 portrait and the hero is 3:4 — export at
   ~800×1000 / ~900×1200 as WebP or JPG to keep the page fast.
2. Update `title`, `category` and `alt` for each item to describe the real
   project. If `thumbnail` is left out, the card falls back to a plain frame.
3. Optional: add a `videoUrl` and wire it up in `PortfolioCard.jsx`.

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
