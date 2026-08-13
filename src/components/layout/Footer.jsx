import { business, navLinks, socials } from "../../config/siteContent";
import FilmstripDivider from "../ui/FilmstripDivider";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-plum-950 text-cream-100">
      <FilmstripDivider className="text-cream-100" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-14 grid gap-10 sm:grid-cols-3">
        <div>
          <div className="flex items-center gap-2.5 font-display text-2xl font-semibold text-cream-50">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-ember-500" />
            {business.name}
          </div>
          <p className="mt-3 text-sm text-cream-100/60 max-w-xs">
            {business.tagline}
          </p>
        </div>

        <div>
          <p className="font-mono text-xs tracking-widest uppercase text-cream-100/40 mb-4">
            Navigate
          </p>
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-cream-100/80 hover:text-gold-400 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono text-xs tracking-widest uppercase text-cream-100/40 mb-4">
            Connect
          </p>
          <ul className="space-y-2 text-sm text-cream-100/80">
            <li>
              <a href={business.phoneHref} className="hover:text-gold-400 transition-colors">
                {business.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${business.email}`} className="hover:text-gold-400 transition-colors">
                {business.email}
              </a>
            </li>
            <li className="text-cream-100/60">{business.location}</li>
          </ul>
          <div className="flex gap-4 mt-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-xs tracking-widest text-cream-100/50 hover:text-gold-400 uppercase"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-cream-100/10 px-5 sm:px-8 py-6">
        <p className="font-mono text-xs text-cream-100/40 max-w-7xl mx-auto">
          &copy; {year} {business.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
