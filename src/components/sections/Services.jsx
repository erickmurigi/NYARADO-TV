import { services } from "../../config/siteContent";
import SectionHeading from "../ui/SectionHeading";
import RevealOnScroll from "../ui/RevealOnScroll";
import Icon from "../ui/Icon";

export default function Services() {
  return (
    <section id="services" className="bg-cream-50 py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <RevealOnScroll>
          <SectionHeading
            timecode="00:00:12:00"
            label="What we shoot"
            title="Coverage built around your event."
            description="Every package is tailored — but here's how most of our work breaks down."
          />
        </RevealOnScroll>

        <div className="mt-16 grid sm:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <RevealOnScroll key={service.code} delay={i * 80}>
              <div className="group relative h-full rounded-2xl border border-plum-900/10 bg-white/60 p-8 hover:border-gold-500/50 hover:shadow-xl hover:shadow-plum-900/5 transition-all duration-300">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-plum-950 text-gold-400 flex items-center justify-center group-hover:bg-ember-500 group-hover:text-cream-50 transition-colors">
                    <Icon name={service.icon} className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-xs text-plum-900/30 tracking-widest">
                    {service.code}
                  </span>
                </div>

                <p className="font-mono text-xs tracking-widest uppercase text-teal-500 mb-2">
                  {service.label}
                </p>
                <h3 className="font-display text-2xl font-medium text-plum-950 mb-3">
                  {service.title}
                </h3>
                <p className="text-plum-900/70 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
