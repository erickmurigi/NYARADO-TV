import Timecode from "./Timecode";

export default function SectionHeading({
  timecode,
  label,
  title,
  description,
  align = "left",
  dark = false,
}) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      <div
        className={`flex items-center gap-3 mb-4 font-mono text-xs tracking-widest ${
          align === "center" ? "justify-center" : ""
        }`}
      >
        {timecode && <Timecode>{timecode}</Timecode>}
        <span className={dark ? "text-cream-200/40" : "text-plum-900/30"}>
          —
        </span>
        <span
          className={`uppercase ${dark ? "text-cream-200/70" : "text-plum-900/60"}`}
        >
          {label}
        </span>
      </div>
      <h2
        className={`font-display text-4xl sm:text-5xl font-medium text-balance ${
          dark ? "text-cream-50" : "text-plum-950"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 max-w-2xl text-lg ${
            align === "center" ? "mx-auto" : ""
          } ${dark ? "text-cream-200/70" : "text-plum-900/70"}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
