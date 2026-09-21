import Icon from "../ui/Icon";

const corners = [
  "top-3 left-3 border-t border-l",
  "top-3 right-3 border-t border-r",
  "bottom-3 left-3 border-b border-l",
  "bottom-3 right-3 border-b border-r",
];

export default function PortfolioCard({ item }) {
  // Shows `item.thumbnail` when provided; otherwise falls back to the plain
  // gradient frame. Set both in src/config/siteContent.js.
  return (
    <div className="group relative aspect-[4/5] rounded-xl overflow-hidden bg-gradient-to-br from-plum-800 to-plum-950 cursor-pointer">
      {item.thumbnail && (
        <img
          src={item.thumbnail}
          alt={item.alt ?? item.title}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
      )}
      {item.thumbnail && (
        <div aria-hidden="true" className="absolute inset-0 bg-plum-950/25 group-hover:bg-plum-950/10 transition-colors duration-500" />
      )}

      <div className="absolute inset-0 flex items-center justify-center opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500">
        <div className="w-14 h-14 rounded-full bg-cream-50/10 backdrop-blur-sm flex items-center justify-center border border-cream-100/20">
          <Icon name="play" className="w-6 h-6 text-cream-50 ml-0.5" />
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-plum-950/90 via-plum-950/40 to-transparent">
        <p className="font-mono text-[10px] tracking-widest text-gold-400 uppercase mb-1">
          {item.category} — {item.timecode}
        </p>
        <p className="font-display text-lg text-cream-50">{item.title}</p>
      </div>

      {corners.map((pos) => (
        <span
          key={pos}
          aria-hidden="true"
          className={`absolute w-5 h-5 border-cream-50/0 group-hover:border-cream-50/70 transition-all duration-300 ${pos}`}
        />
      ))}
    </div>
  );
}
