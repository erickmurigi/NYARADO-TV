import { useEffect, useState } from "react";
import { business, navLinks } from "../../config/siteContent";
import { useScrollSpy } from "../../hooks/useScrollSpy";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useScrollSpy(navLinks.map((l) => l.href.slice(1)));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-plum-950/90 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-5 sm:px-8 h-16 sm:h-20">
        <a
          href="#top"
          className="flex items-center gap-2.5 font-display text-xl sm:text-2xl font-semibold text-cream-50"
        >
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-ember-500 animate-rec-pulse" />
          {business.name}
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeId === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                className={`font-mono text-xs tracking-widest uppercase transition-colors ${
                  isActive
                    ? "text-gold-400"
                    : "text-cream-100/70 hover:text-cream-50"
                }`}
              >
                {link.label}
              </a>
            );
          })}
          <a
            href="#contact"
            className="font-mono text-xs tracking-widest uppercase rounded-full bg-gold-500 text-plum-950 px-5 py-2.5 hover:bg-gold-400 transition-colors"
          >
            Check Availability
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          className="md:hidden flex flex-col justify-center gap-1.5 w-10 h-10 items-center"
          aria-label="Open menu"
        >
          <span className="w-6 h-0.5 bg-cream-50" />
          <span className="w-6 h-0.5 bg-cream-50" />
          <span className="w-4 h-0.5 bg-cream-50 self-start ml-2" />
        </button>
      </nav>

      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        activeId={activeId}
      />
    </header>
  );
}
