import { useState } from "react";
import { portfolioItems, portfolioFilters } from "../../config/siteContent";
import SectionHeading from "../ui/SectionHeading";
import RevealOnScroll from "../ui/RevealOnScroll";
import PortfolioCard from "./PortfolioCard";

export default function Portfolio() {
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === filter);

  return (
    <section id="portfolio" className="bg-plum-950 py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <RevealOnScroll>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8">
            <SectionHeading
              timecode="00:00:28:00"
              label="Selected work"
              title="A few frames from the archive."
              dark
            />

            <div className="flex flex-wrap gap-2">
              {portfolioFilters.map((f) => (
                <button
                  key={f}
                  type="button"
                  onClick={() => setFilter(f)}
                  className={`font-mono text-xs tracking-widest uppercase rounded-full px-4 py-2 border transition-colors ${
                    filter === f
                      ? "bg-gold-500 text-plum-950 border-gold-500"
                      : "border-cream-100/20 text-cream-100/60 hover:border-cream-100/50 hover:text-cream-50"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filtered.map((item, i) => (
            <RevealOnScroll key={item.id} delay={(i % 4) * 80}>
              <PortfolioCard item={item} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
