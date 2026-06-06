"use client";

import { useEffect } from "react";
import Image from "next/image";
import type { Work } from "@/lib/works";

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
  const open = index !== null;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") onNav(((index! + 1) % works.length));
      else if (e.key === "ArrowLeft")
        onNav(((index! - 1) + works.length) % works.length);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, index, works.length, onClose, onNav]);

  if (index === null) return null;
  const work = works[index];

  return (
    <div
      className={`fixed inset-0 z-[80] flex items-center justify-center transition-opacity duration-500 ${
        open ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      role="dialog"
      aria-modal="true"
      aria-label={`${work.title} project`}
    >
      <div
        className="absolute inset-0 bg-black/85 backdrop-blur-sm"
        onClick={onClose}
      />

      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute right-6 top-6 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/30 text-white transition-all hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] md:right-10 md:top-10"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
          <line x1="1" y1="1" x2="13" y2="13" />
          <line x1="13" y1="1" x2="1" y2="13" />
        </svg>
      </button>

      <button
        type="button"
        onClick={() => onNav(((index - 1) + works.length) % works.length)}
        aria-label="Previous project"
        className="absolute left-2 top-1/2 z-10 hidden -translate-y-1/2 text-[11px] text-white/60 transition-colors hover:text-[var(--color-accent)] md:left-10 md:block"
      >
        ← Prev
      </button>
      <button
        type="button"
        onClick={() => onNav((index + 1) % works.length)}
        aria-label="Next project"
        className="absolute right-2 top-1/2 z-10 hidden -translate-y-1/2 text-[11px] text-white/60 transition-colors hover:text-[var(--color-accent)] md:right-10 md:block"
      >
        Next →
      </button>

      <div
        key={work.slug}
        className={`relative z-[1] mx-6 my-20 w-full max-w-[1100px] transition-all duration-700 md:mx-10 ${
          open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
        }`}
      >
        <div className="relative aspect-[16/10] overflow-hidden bg-[var(--color-bg-elevated)]">
          <Image
            src={work.image}
            alt={work.title}
            fill
            sizes="(min-width: 1280px) 1100px, 90vw"
            className="object-cover"
            priority
          />
        </div>

        <div className="mt-6 flex flex-col gap-3 md:mt-8 md:flex-row md:items-end md:justify-between md:gap-8">
          <div className="flex flex-col gap-1">
            <span className="text-[11px] text-white/40">
              {work.category} · {work.year}
            </span>
            <h3 className="font-serif text-[40px] leading-[1] text-white md:text-[64px]">
              {work.title}
            </h3>
          </div>
          <div className="flex flex-col items-start gap-1 md:items-end">
            <span className="text-[11px] text-white/40">
              Client
            </span>
            <span className="text-[15px] text-white/85">{work.client}</span>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between md:mt-8">
          <span className="text-[11px] text-white/40">
            {String(index + 1).padStart(2, "0")} / {String(works.length).padStart(2, "0")}
          </span>
          <span className="hidden text-[11px] text-white/40 md:inline">
            Press ESC to close
          </span>
        </div>
      </div>
    </div>
  );
}
