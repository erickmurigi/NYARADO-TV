export default function RecIndicator({ className = "", light = false }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 font-mono text-xs tracking-widest ${
        light ? "text-cream-100" : "text-plum-900"
      } ${className}`}
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-rec-pulse rounded-full bg-ember-500" />
      </span>
      REC
    </span>
  );
}
