// ─────────────────────────────────────────────────────────────────────────
// SITE CONTENT — single source of truth for all editable copy & data.
// Everything marked "PLACEHOLDER" below must be replaced with real business
// details before this site goes live. See README.md for the full checklist.
// ─────────────────────────────────────────────────────────────────────────

export const business = {
  name: "Nyarado TV",
  tagline: "Cinematic coverage for the days you'll replay forever.",
  // PLACEHOLDER — replace with real contact details
  phone: "+254 700 000 000",
  phoneHref: "tel:+254700000000",
  email: "hello@nyarado.tv",
  location: "Nairobi, Kenya",
  serviceArea: "Serving Nairobi & surrounding counties — available for travel countrywide",
};

// PLACEHOLDER — replace with real social handles / URLs
export const socials = [
  { label: "Instagram", handle: "@nyarado.tv", href: "https://instagram.com/" },
  { label: "Facebook", handle: "Nyarado TV", href: "https://facebook.com/" },
  { label: "TikTok", handle: "@nyarado.tv", href: "https://tiktok.com/" },
];

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const services = [
  {
    code: "01",
    title: "Weddings",
    label: "FULL DAY COVERAGE",
    description:
      "From bridal prep to the last dance — multi-camera coverage, drone footage, and a cinematic highlight reel you'll want to watch every anniversary.",
    icon: "rings",
  },
  {
    code: "02",
    title: "Birthdays & Milestones",
    label: "CELEBRATION EDITS",
    description:
      "Milestone birthdays, graduations, baby showers, send-offs — coverage that captures the speeches, the surprises, and the room full of people who love you.",
    icon: "cake",
  },
  {
    code: "03",
    title: "Corporate & Community",
    label: "EVENT DOCUMENTATION",
    description:
      "Conferences, launches, church and community events. Clean, professional footage delivered fast — recap videos, testimonials, and b-roll.",
    icon: "briefcase",
  },
  {
    code: "04",
    title: "Custom Coverage",
    label: "TELL US YOUR STORY",
    description:
      "Got something that doesn't fit a category? Reach out — we tailor crew size, shot list, and turnaround to whatever your event needs.",
    icon: "clapperboard",
  },
];

// PLACEHOLDER — replace with real portfolio thumbnails / video embeds.
// `videoUrl` can point to a YouTube/Vimeo embed URL or a hosted MP4 later.
export const portfolioItems = [
  { id: 1, title: "Amara & Kevin", category: "Weddings", timecode: "00:03:42:10", videoUrl: null },
  { id: 2, title: "The Otieno Family Reunion", category: "Birthdays", timecode: "00:02:15:04", videoUrl: null },
  { id: 3, title: "Safaricom Devs Summit", category: "Corporate", timecode: "00:04:58:21", videoUrl: null },
  { id: 4, title: "Wanjiru's 50th", category: "Birthdays", timecode: "00:01:47:12", videoUrl: null },
  { id: 5, title: "Njoroge & Faith", category: "Weddings", timecode: "00:05:03:08", videoUrl: null },
  { id: 6, title: "Karibu Community Fair", category: "Corporate", timecode: "00:03:21:17", videoUrl: null },
  { id: 7, title: "Achieng & David", category: "Weddings", timecode: "00:04:11:02", videoUrl: null },
  { id: 8, title: "Baby Zawadi's Send-Off", category: "Birthdays", timecode: "00:02:39:19", videoUrl: null },
];

export const portfolioFilters = ["All", "Weddings", "Birthdays", "Corporate"];

// PLACEHOLDER — sample rates only, confirm real pricing before launch
export const pricingTiers = [
  {
    name: "Essential",
    code: "EP.01",
    price: "45,000",
    unit: "KES / event",
    description: "Solo shooter coverage for smaller, intimate gatherings.",
    features: [
      "Up to 4 hours coverage",
      "1 videographer",
      "3–5 min highlight reel",
      "Delivery in 2 weeks",
    ],
    featured: false,
  },
  {
    name: "Signature",
    code: "EP.02",
    price: "95,000",
    unit: "KES / event",
    description: "Our most-booked package — full coverage with cinematic edit.",
    features: [
      "Up to 8 hours coverage",
      "2 videographers + drone",
      "5–8 min cinematic highlight",
      "Full ceremony edit included",
      "Delivery in 10 days",
    ],
    featured: true,
  },
  {
    name: "Cinematic",
    code: "EP.03",
    price: "180,000",
    unit: "KES / event",
    description: "Full production treatment for weddings and flagship events.",
    features: [
      "Full day + rehearsal coverage",
      "3+ crew, drone & gimbal",
      "Feature-length cinematic film",
      "Same-day teaser edit",
      "Delivery in 7 days",
    ],
    featured: false,
  },
];

// PLACEHOLDER — replace with real client quotes, names, and event types
export const testimonials = [
  {
    quote:
      "They captured moments we didn't even know happened — my grandmother crying during the vows, my nephew sneaking cake. Watching it back felt like reliving the whole day.",
    name: "Wanjiku M.",
    event: "Wedding, Karen",
  },
  {
    quote:
      "Professional, unobtrusive, and the final edit had our whole team in tears (the good kind). Turnaround was faster than promised.",
    name: "Brian O.",
    event: "Corporate Conference, Nairobi CBD",
  },
  {
    quote:
      "My mum's 60th birthday video is now a family heirloom. The way they cut the speeches together with the dancing — chef's kiss.",
    name: "Faith A.",
    event: "60th Birthday, Runda",
  },
];

export const eventTypes = [
  "Wedding",
  "Birthday / Milestone",
  "Corporate Event",
  "Community Event",
  "Other",
];
