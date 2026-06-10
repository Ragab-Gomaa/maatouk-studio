"use client";

import { useEffect } from "react";
import Image from "next/image";
import type { Work } from "@/lib/works";
import { useLang } from "@/components/i18n/LangProvider";

function hostOf(url: string): string {
  try {
    return new URL(url).host.replace(/^www\./, "");
  } catch {
    return url;
  }
}

export function WebsiteViewer({
  sites,
  index,
  onClose,
  onNav,
}: {
  sites: Work[];
  index: number | null;
  onClose: () => void;
  onNav: (next: number) => void;
}) {
  const { copy } = useLang();
  const open = index !== null;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") onNav((index! + 1) % sites.length);
      else if (e.key === "ArrowLeft") onNav((index! - 1 + sites.length) % sites.length);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, index, sites.length, onClose, onNav]);

  if (index === null) return null;
  const site = sites[index];
  const url = site.url ?? "#";
  const titleId = "site-title";

  return (
    <div
      className={`fixed inset-0 z-[80] overflow-y-auto transition-opacity duration-500 ${
        open ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
    >
      <div className="fixed inset-0 bg-black/85 backdrop-blur-sm" onClick={onClose} />

      <button
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

      {sites.length > 1 && (
        <>
          <button
            type="button"
            onClick={() => onNav((index - 1 + sites.length) % sites.length)}
            aria-label={copy.lightbox.prev}
            className="fixed left-3 top-1/2 z-20 hidden -translate-y-1/2 text-[11px] text-white/75 transition-colors hover:text-[var(--color-accent)] md:left-8 md:block"
          >
            ← {copy.hero.prev}
          </button>
          <button
            type="button"
            onClick={() => onNav((index + 1) % sites.length)}
            aria-label={copy.lightbox.next}
            className="fixed right-3 top-1/2 z-20 hidden -translate-y-1/2 text-[11px] text-white/75 transition-colors hover:text-[var(--color-accent)] md:right-8 md:block"
          >
            {copy.hero.next} →
          </button>
        </>
      )}

      <div className="relative z-[1] flex min-h-full items-center justify-center px-4 py-16 md:px-20">
        <div
          key={site.slug}
          className={`w-full max-w-[1200px] transition-all duration-700 ${
            open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          {/* Browser frame */}
          <div className="overflow-hidden rounded-xl border border-white/15 bg-[#0e0e0e] shadow-2xl shadow-black/60">
            <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-4 py-2.5">
              <span className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              </span>
              <span className="mx-auto max-w-[70%] truncate rounded-md bg-white/[0.06] px-3 py-1 text-[11px] text-white/55">
                {hostOf(url)}
              </span>
            </div>

            <div className="relative w-full bg-white" style={{ height: "68vh" }}>
              {site.embeddable ? (
                <iframe
                  key={site.slug}
                  src={url}
                  title={site.title}
                  className="absolute inset-0 h-full w-full"
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              ) : (
                <>
                  <Image src={site.image} alt={site.title} fill className="object-cover object-top" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 border border-white/40 bg-black/50 px-6 py-3 text-[13px] text-white backdrop-blur-sm transition-all hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                    >
                      {copy.work.visitSite}
                      <span>↗</span>
                    </a>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Meta */}
          <div className="mt-6 flex flex-col gap-3 md:mt-8 md:flex-row md:items-end md:justify-between md:gap-8">
            <div className="flex flex-col gap-1">
              <span className="text-[11px] text-white/55">
                {site.category} · {site.year}
              </span>
              <h3 id={titleId} className="font-serif text-[32px] leading-[1] text-white md:text-[52px]">
                {site.title}
              </h3>
              <span className="mt-1 text-[13px] text-white/55">{site.client}</span>
            </div>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-fit items-center gap-3 border border-white/40 px-6 py-3 text-[12px] text-white transition-all hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] md:text-[13px]"
            >
              {copy.work.visitSite}
              <span className="transition-transform duration-500 group-hover:translate-x-1">↗</span>
            </a>
          </div>

          <div className="mt-5 flex items-center justify-between md:mt-6">
            <span className="text-[11px] text-white/55">
              {String(index + 1).padStart(2, "0")} / {String(sites.length).padStart(2, "0")}
            </span>
            <span className="text-[11px] text-white/55">{copy.lightbox.escHint}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
