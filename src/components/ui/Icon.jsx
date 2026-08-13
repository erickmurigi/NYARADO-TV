const paths = {
  rings: (
    <>
      <circle cx="9" cy="14" r="5" />
      <circle cx="16" cy="14" r="5" />
      <path d="M12 5.5V9" strokeLinecap="round" />
    </>
  ),
  cake: (
    <>
      <path d="M4 21h16v-6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v6Z" />
      <path d="M4 15v-1a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v1" />
      <path d="M9 11V8M12 11V8M15 11V8" strokeLinecap="round" />
      <path d="M12 4v1.5" strokeLinecap="round" />
      <circle cx="12" cy="3" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  briefcase: (
    <>
      <rect x="3" y="8" width="18" height="12" rx="2" />
      <path d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <path d="M3 13h18" />
    </>
  ),
  clapperboard: (
    <>
      <path d="M4 8.5 5 5h14l1 3.5" />
      <rect x="4" y="8.5" width="16" height="11" rx="1.5" />
      <path d="m6 8.5 1.5-3.3M11 8.5l1.5-3.3M16 8.5l1.5-3.3" />
    </>
  ),
  play: (
    <>
      <polygon points="9,7 18,12 9,17" fill="currentColor" stroke="none" />
    </>
  ),
  camera: (
    <>
      <path d="M4 8h3l1.5-2h7L17 8h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z" />
      <circle cx="12" cy="14" r="3.5" />
    </>
  ),
};

export default function Icon({ name, className = "w-6 h-6" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name] ?? paths.camera}
    </svg>
  );
}
