"use client";

import { useEffect, useState } from "react";
import { useLang } from "@/components/i18n/LangProvider";

export function BackToTop() {
  const { copy } = useLang();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 1.2);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label={copy.a11y.backToTop}
      className={`fixed bottom-6 right-6 z-[70] flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-[var(--color-bg)]/70 text-white backdrop-blur-md transition-all duration-500 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] md:bottom-10 md:right-10 ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
        <path d="M7 12V2M3 6l4-4 4 4" />
      </svg>
    </button>
  );
}
