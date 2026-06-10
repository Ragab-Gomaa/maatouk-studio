"use client";

import { useEffect, useRef } from "react";
import type { Work } from "@/lib/works";
import { watchSrc } from "@/lib/works";
import { useLang } from "@/components/i18n/LangProvider";

export function WorkLightbox({
  works,
  index,
  onClose,
  onNav,
}: {
  works: Work[];
  index: number | null;
  onClose: () => void;
  onNav: (next: number) => void;
}) {
  const { copy } = useLang();
  const open = index !== null;
  const closeRef = useRef<HTMLButtonElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") onNav((index! + 1) % works.length);
      else if (e.key === "ArrowLeft")
        onNav((index! - 1 + works.length) % works.length);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, index, works.length, onClose, onNav]);

  // Autoplay (with sound) on open / navigation — the opening click grants activation.
  useEffect(() => {
    if (!open) return;
    const v = videoRef.current;
    if (v) {
      v.currentTime = 0;
      const p = v.play();
      if (p) p.catch(() => {});
    }
  }, [open, index]);

  if (index === null) return null;
  const work = works[index];
  const titleId = "lightbox-title";

  return (
    <div
      className={`fixed inset-0 z-[80] overflow-y-auto transition-opacity duration-500 ${
        open ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
    >
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-sm"
        onClick={onClose}
      />

      <button
        ref={closeRef}
        type="button"
        onClick={onClose}
        aria-label={copy.lightbox.close}
        className="fixed right-4 top-4 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-white/40 bg-black/40 text-white backdrop-blur-sm transition-all hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] md:right-8 md:top-8"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
          <line x1="1" y1="1" x2="13" y2="13" />
          <line x1="13" y1="1" x2="1" y2="13" />
        </svg>
      </button>

      <button
        type="button"
        onClick={() => onNav((index - 1 + works.length) % works.length)}
        aria-label={copy.lightbox.prev}
        className="fixed left-3 top-1/2 z-20 hidden -translate-y-1/2 text-[11px] text-white/75 transition-colors hover:text-[var(--color-accent)] md:left-8 md:block"
      >
        ← {copy.hero.prev}
      </button>
      <button
        type="button"
        onClick={() => onNav((index + 1) % works.length)}
        aria-label={copy.lightbox.next}
        className="fixed right-3 top-1/2 z-20 hidden -translate-y-1/2 text-[11px] text-white/75 transition-colors hover:text-[var(--color-accent)] md:right-8 md:block"
      >
        {copy.hero.next} →
      </button>

      <div className="relative z-[1] flex min-h-full items-center justify-center px-6 py-16 md:px-20">
        <div
          key={work.slug}
          className={`w-full max-w-[1100px] transition-all duration-700 ${
            open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <video
            ref={videoRef}
            className="mx-auto block h-auto w-auto max-w-full bg-black"
            style={{ maxHeight: "72vh" }}
            src={watchSrc(work.slug)}
            poster={work.image}
            controls
            autoPlay
            playsInline
            preload="auto"
          />

          <div className="mt-6 flex flex-col gap-3 md:mt-8 md:flex-row md:items-end md:justify-between md:gap-8">
            <div className="flex flex-col gap-1">
              <span className="flex items-center gap-3 text-[11px] text-white/55">
                <span>{work.category} · {work.year}</span>
                {work.kind === "concept" && (
                  <span className="rounded-full border border-white/25 px-2 py-0.5 text-white/70">
                    {copy.lightbox.concept}
                  </span>
                )}
              </span>
              <h3 id={titleId} className="font-serif text-[32px] leading-[1] text-white md:text-[52px]">
                {work.title}
              </h3>
              {work.credits && (
                <span className="mt-1 text-[12px] leading-relaxed text-white/55 md:text-[13px]">
                  {work.credits}
                </span>
              )}
            </div>
            <div className="flex flex-col items-start gap-1 md:items-end">
              <span className="text-[11px] text-white/55">
                {work.kind === "client" ? copy.lightbox.client : copy.lightbox.concept}
              </span>
              <span className="text-[15px] text-white/90">
                {work.kind === "client" ? work.client : "24 ETAR Academy"}
              </span>
            </div>
          </div>

          <div className="mt-5 flex items-center justify-between md:mt-6">
            <span className="text-[11px] text-white/55">
              {String(index + 1).padStart(2, "0")} / {String(works.length).padStart(2, "0")}
            </span>
            <span className="text-[11px] text-white/55">{copy.lightbox.escHint}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
