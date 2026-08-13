import { useEffect } from "react";
import { navLinks, socials } from "../../config/siteContent";

export default function MobileMenu({ open, onClose, activeId }) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div
      className={`md:hidden fixed inset-0 z-50 transition-opacity duration-300 ${
        open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className="absolute inset-0 bg-plum-950/70 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        className={`absolute top-0 right-0 h-full w-72 max-w-[85vw] bg-plum-900 shadow-2xl transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 h-16">
          <span className="font-mono text-xs tracking-widest text-cream-100/60 uppercase">
            Menu
          </span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="text-cream-50 text-2xl leading-none w-10 h-10 flex items-center justify-center"
          >
            &times;
          </button>
        </div>

        <nav className="flex flex-col gap-1 px-6 mt-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={onClose}
              className={`font-display text-2xl py-3 border-b border-cream-100/10 ${
                activeId === link.href.slice(1)
                  ? "text-gold-400"
                  : "text-cream-50"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="px-6 mt-8">
          <a
            href="#contact"
            onClick={onClose}
            className="block text-center font-mono text-xs tracking-widest uppercase rounded-full bg-gold-500 text-plum-950 px-5 py-3 hover:bg-gold-400 transition-colors"
          >
            Check Availability
          </a>
        </div>

        <div className="absolute bottom-8 left-6 flex gap-4">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-xs tracking-widest text-cream-100/50 hover:text-cream-50 uppercase"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
