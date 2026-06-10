export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-[var(--color-bg)] px-8 text-center">
      <div className="flex flex-col items-center gap-6">
        <span className="text-[12px] text-white/55">
          404
        </span>
        <h1 className="font-serif text-[56px] leading-[1.05] text-white md:text-[88px]">
          Lost in the{" "}
          <span className="italic text-[var(--color-accent)]">grid</span>.
        </h1>
        <a
          href="/"
          className="group inline-flex items-center gap-3 border-b border-white/30 pb-1 text-[14px] text-white hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
        >
          Back home
          <span className="transition-transform duration-500 group-hover:translate-x-1">
            →
          </span>
        </a>
      </div>
    </main>
  );
}
