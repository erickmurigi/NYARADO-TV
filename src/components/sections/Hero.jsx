import { business } from "../../config/siteContent";
import RecIndicator from "../ui/RecIndicator";
import Icon from "../ui/Icon";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[92vh] flex items-center overflow-hidden bg-plum-950 pt-24 pb-16"
    >
      {/* Decorative background: soft radial glow + vignette */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(212,169,59,0.14),_transparent_55%),radial-gradient(ellipse_at_bottom_left,_rgba(31,122,108,0.14),_transparent_50%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 film-perforation text-cream-100 opacity-[0.04]"
      />

      <div className="relative max-w-7xl mx-auto w-full px-5 sm:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <RecIndicator light />
            <span className="font-mono text-xs tracking-widest text-cream-100/50 uppercase">
              {business.location} — Event Video Coverage
            </span>
          </div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-medium leading-[1.05] text-cream-50 text-balance">
            Cinematic coverage for the days you'll{" "}
            <span className="italic text-gold-400">replay</span> forever.
          </h1>

          <p className="mt-6 text-lg text-cream-100/70 max-w-lg">
            Nyarado TV shoots weddings, birthdays, and milestone events across
            Nairobi — delivering highlight reels and full cinematic edits
            that feel like film, not footage.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 font-mono text-xs tracking-widest uppercase rounded-full bg-gold-500 text-plum-950 px-7 py-4 hover:bg-gold-400 transition-colors"
            >
              Check Availability
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center gap-2 font-mono text-xs tracking-widest uppercase rounded-full border border-cream-100/30 text-cream-50 px-7 py-4 hover:border-cream-100/70 transition-colors"
            >
              <Icon name="play" className="w-4 h-4" />
              View Our Work
            </a>
          </div>
        </div>

        {/* Viewfinder-style placeholder frame for a hero reel/photo */}
        <div className="relative aspect-[4/5] lg:aspect-[3/4] w-full max-w-md mx-auto lg:max-w-none">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-plum-700 via-plum-800 to-plum-950 border border-cream-100/10 overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-cream-50/10 backdrop-blur-sm flex items-center justify-center border border-cream-100/20">
                <Icon name="play" className="w-8 h-8 text-cream-50 ml-1" />
              </div>
            </div>
            <div className="absolute top-5 left-5 flex items-center gap-2">
              <RecIndicator light />
            </div>
            <div className="absolute bottom-5 left-5 font-mono text-xs text-cream-100/50 tracking-widest">
              00:00:00:00
            </div>
            <div className="absolute bottom-5 right-5 font-mono text-xs text-cream-100/50 tracking-widest">
              4K / 24FPS
            </div>
          </div>

          {/* Viewfinder corner brackets */}
          {["top-3 left-3 border-t border-l", "top-3 right-3 border-t border-r", "bottom-3 left-3 border-b border-l", "bottom-3 right-3 border-b border-r"].map(
            (pos) => (
              <span
                key={pos}
                aria-hidden="true"
                className={`absolute w-6 h-6 border-gold-400/70 ${pos}`}
              />
            ),
          )}
        </div>
      </div>
    </section>
  );
}
