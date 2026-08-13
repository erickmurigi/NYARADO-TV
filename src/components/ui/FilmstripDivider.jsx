export default function FilmstripDivider({ className = "" }) {
  return (
    <div
      aria-hidden="true"
      className={`h-3 w-full film-perforation opacity-40 ${className}`}
    />
  );
}
