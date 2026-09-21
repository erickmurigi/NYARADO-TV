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

// PLACEHOLDER — these are royalty-free Unsplash stock photos (files in
// public/images/), standing in until Nyarado TV supplies its own work.
// To replace one, drop a new file with the same name into public/images/, or
// point `thumbnail` at a different path. Titles are deliberately generic so
// nothing claims to be a real client. `videoUrl` can point to a YouTube/Vimeo
// embed URL or a hosted MP4 later.
export const heroImage = {
  src: "/images/hero.webp",
  alt: "A bride and groom sharing a tender kiss in a garden on their wedding day",
};

export const portfolioItems = [
  { id: 1, title: "Garden Wedding Highlights", category: "Weddings", timecode: "00:03:42:10", thumbnail: "/images/wedding-1.webp", alt: "A groom kissing his bride on the cheek in a garden", videoUrl: null },
  { id: 2, title: "Little Violinist's Birthday", category: "Birthdays", timecode: "00:02:15:04", thumbnail: "/images/birthday-1.webp", alt: "A young girl in a yellow dress playing a violin in front of a Happy Birthday neon sign", videoUrl: null },
  { id: 3, title: "Investment Panel Recap", category: "Corporate", timecode: "00:04:58:21", thumbnail: "/images/corporate-1.webp", alt: "Speakers seated at a panel discussion during a conference", videoUrl: null },
  { id: 4, title: "Traditional Wedding Film", category: "Weddings", timecode: "00:01:47:12", thumbnail: "/images/wedding-3.webp", alt: "A couple in gold traditional attire laughing together", videoUrl: null },
  { id: 5, title: "Birthday Cake Surprise", category: "Birthdays", timecode: "00:05:03:08", thumbnail: "/images/birthday-2.webp", alt: "A woman laughing as friends smear cake on her face at a birthday party", videoUrl: null },
  { id: 6, title: "Cultural Festival Dance", category: "Community", timecode: "00:03:21:17", thumbnail: "/images/community-1.webp", alt: "A dancer in colourful traditional dress at an outdoor cultural festival", videoUrl: null },
  { id: 7, title: "Boardroom Strategy Session", category: "Corporate", timecode: "00:03:14:09", thumbnail: "/images/corporate-4.webp", alt: "A team of professionals seated around a boardroom table with laptops", videoUrl: null },
  { id: 8, title: "Wedding Portrait Session", category: "Weddings", timecode: "00:04:11:02", thumbnail: "/images/wedding-2.webp", alt: "A groom kissing his bride's hand on a wooden staircase", videoUrl: null },
  { id: 9, title: "Executive Portrait Session", category: "Corporate", timecode: "00:01:36:20", thumbnail: "/images/corporate-6.webp", alt: "A man in a blue suit and tie posing for a professional portrait", videoUrl: null },
  { id: 10, title: "Graduation Day Celebration", category: "Birthdays", timecode: "00:01:58:06", thumbnail: "/images/birthday-3.webp", alt: "Young children holding Love and Unity signs at a graduation celebration", videoUrl: null },
  { id: 11, title: "Match Day Fan Zone", category: "Community", timecode: "00:03:05:23", thumbnail: "/images/community-2.webp", alt: "Cheering fans holding a Kenyan flag in a stadium", videoUrl: null },
  { id: 12, title: "Bridal Party Entrance", category: "Weddings", timecode: "00:05:27:14", thumbnail: "/images/wedding-4.webp", alt: "A groomsman dancing ahead of the bridal party at an outdoor wedding", videoUrl: null },
  { id: 13, title: "Annual Gala Dinner", category: "Corporate", timecode: "00:02:39:19", thumbnail: "/images/corporate-2.webp", alt: "A man in a black hat and glasses seated at a gala dinner table", videoUrl: null },
  { id: 14, title: "Heritage Day Celebration", category: "Community", timecode: "00:04:22:03", thumbnail: "/images/community-3.webp", alt: "Women in red traditional dress smiling and singing at a cultural ceremony", videoUrl: null },
  { id: 15, title: "Proud Family Celebration", category: "Birthdays", timecode: "00:02:08:15", thumbnail: "/images/birthday-4.webp", alt: "A smiling girl in a white dress holding a certificate between her parents in front of a balloon arch", videoUrl: null },
  { id: 16, title: "Conference Networking Night", category: "Corporate", timecode: "00:02:52:11", thumbnail: "/images/corporate-3.webp", alt: "Two smiling attendees at a networking event", videoUrl: null },
];

export const portfolioFilters = ["All", "Weddings", "Birthdays", "Corporate", "Community"];

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
