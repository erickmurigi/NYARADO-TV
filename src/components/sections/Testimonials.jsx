import { testimonials } from "../../config/siteContent";
import SectionHeading from "../ui/SectionHeading";
import RevealOnScroll from "../ui/RevealOnScroll";
import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-plum-900 py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <RevealOnScroll>
          <SectionHeading
            timecode="00:01:02:00"
            label="Kind words"
            title="From the people who lived it."
            align="center"
            dark
          />
        </RevealOnScroll>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <RevealOnScroll key={t.name} delay={i * 100}>
              <TestimonialCard testimonial={t} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
