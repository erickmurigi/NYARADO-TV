export default function Timecode({ children, className = "" }) {
  return (
    <span
      className={`font-mono text-xs tracking-widest uppercase text-gold-600 ${className}`}
    >
      {children}
    </span>
  );
}
