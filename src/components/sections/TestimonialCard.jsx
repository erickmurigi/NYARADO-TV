export default function TestimonialCard({ testimonial }) {
  return (
    <div className="relative rounded-2xl bg-plum-900/60 border border-cream-100/10 p-8 h-full flex flex-col">
      <span className="absolute top-4 right-5 font-mono text-[10px] tracking-widest uppercase text-ember-500/70">
        Sample quote
      </span>
      <span className="font-display text-5xl text-gold-500/40 leading-none mb-2">
        &ldquo;
      </span>
      <p className="text-cream-100/85 leading-relaxed flex-1 -mt-4">
        {testimonial.quote}
      </p>
      <div className="mt-6 pt-4 border-t border-cream-100/10">
        <p className="font-display text-lg text-cream-50">{testimonial.name}</p>
        <p className="font-mono text-xs tracking-widest uppercase text-cream-100/40 mt-0.5">
          {testimonial.event}
        </p>
      </div>
    </div>
  );
}
