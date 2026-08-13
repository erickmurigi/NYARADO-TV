export default function PricingCard({ tier }) {
  return (
    <div
      className={`relative rounded-2xl p-8 flex flex-col h-full ${
        tier.featured
          ? "bg-plum-950 text-cream-50 shadow-2xl shadow-plum-900/20 lg:-translate-y-4 border border-gold-500/40"
          : "bg-white/60 text-plum-950 border border-plum-900/10"
      }`}
    >
      {tier.featured && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 font-mono text-[10px] tracking-widest uppercase bg-gold-500 text-plum-950 rounded-full px-4 py-1">
          Most Booked
        </span>
      )}

      <div className="flex items-center justify-between mb-1">
        <h3 className="font-display text-2xl font-medium">{tier.name}</h3>
        <span
          className={`font-mono text-xs tracking-widest ${
            tier.featured ? "text-gold-400" : "text-plum-900/40"
          }`}
        >
          {tier.code}
        </span>
      </div>

      <p
        className={`text-sm mb-6 ${
          tier.featured ? "text-cream-100/70" : "text-plum-900/60"
        }`}
      >
        {tier.description}
      </p>

      <div className="mb-8">
        <span className="font-display text-4xl font-medium">
          KES {tier.price}
        </span>
        <span
          className={`block font-mono text-xs tracking-widest uppercase mt-1 ${
            tier.featured ? "text-cream-100/50" : "text-plum-900/40"
          }`}
        >
          sample rate / event
        </span>
      </div>

      <ul className="space-y-3 mb-8 flex-1">
        {tier.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm">
            <span
              className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${
                tier.featured ? "bg-gold-400" : "bg-ember-500"
              }`}
            />
            <span className={tier.featured ? "text-cream-100/85" : "text-plum-900/80"}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <a
        href="#contact"
        className={`text-center font-mono text-xs tracking-widest uppercase rounded-full px-5 py-3.5 transition-colors ${
          tier.featured
            ? "bg-gold-500 text-plum-950 hover:bg-gold-400"
            : "bg-plum-950 text-cream-50 hover:bg-plum-800"
        }`}
      >
        Book This Package
      </a>
    </div>
  );
}
