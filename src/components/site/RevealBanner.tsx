// Brand-blue banner pinned behind the page; the content's bottom margin lets you
// scroll past the footer to uncover it (a hidden "signature" reveal).
export function RevealBanner() {
  const year = new Date().getFullYear();
  return (
    <div
      aria-hidden
      className="reveal-banner pointer-events-none fixed inset-x-0 bottom-0 z-0 flex items-center justify-center overflow-hidden bg-[var(--color-brand)]"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo/maatouk-logo-white.svg"
        alt=""
        className="w-[68%] max-w-[640px] px-6"
      />
      <span className="absolute bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-[11px] tracking-wide text-white/70">
        © {year} Maatouk Studio
      </span>
    </div>
  );
}
