import { pricingTiers } from "../../config/siteContent";
import SectionHeading from "../ui/SectionHeading";
import RevealOnScroll from "../ui/RevealOnScroll";
import PricingCard from "./PricingCard";

export default function Pricing() {
  return (
    <section id="pricing" className="bg-cream-100 py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <RevealOnScroll>
          <SectionHeading
            timecode="00:00:44:00"
            label="Packages"
            title="Straightforward pricing, no surprises."
            align="center"
          />
          <p className="mt-4 text-center font-mono text-xs tracking-widest uppercase text-ember-600">
            Sample rates shown — final quote confirmed after a short call
          </p>
        </RevealOnScroll>

        <div className="mt-16 grid lg:grid-cols-3 gap-6 lg:gap-4 items-stretch">
          {pricingTiers.map((tier, i) => (
            <RevealOnScroll key={tier.name} delay={i * 100}>
              <PricingCard tier={tier} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
