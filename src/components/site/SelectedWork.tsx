"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { works, type Work } from "@/lib/works";
import { useReveal } from "@/lib/useReveal";
import { useLang } from "@/components/i18n/LangProvider";
import { Statement } from "@/components/ui/Statement";
import { WorkLightbox } from "./WorkLightbox";
import { WebsiteViewer } from "./WebsiteViewer";

const motionWorks = works.filter((w) => w.type !== "website");
const websiteWorks = works.filter((w) => w.type === "website");

export function SelectedWork() {
  const { copy } = useLang();
  const head = useReveal<HTMLDivElement>();
  const statement = useReveal<HTMLHeadingElement>();
  const [videoIdx, setVideoIdx] = useState<number | null>(null);
  const [siteIdx, setSiteIdx] = useState<number | null>(null);

  const openWork = (work: Work) => {
    if (work.type === "website") {
      setSiteIdx(websiteWorks.findIndex((s) => s.slug === work.slug));
    } else {
      setVideoIdx(motionWorks.findIndex((m) => m.slug === work.slug));
    }
  };

  return (
    <section
      id="works"
      className="relative w-full bg-[var(--color-bg)] py-14 md:py-20"
    >
      <div className="mx-auto w-full max-w-[1600px] px-6 md:px-14">
        <div
          ref={head.ref}
          className={`reveal-up mb-8 flex items-end justify-between md:mb-12 ${
            head.visible ? "is-visible" : ""
          }`}
        >
          <span className="text-[11px] text-white/55 md:text-[12px]">
            {copy.work.label}
          </span>
          <span className="hidden text-[12px] text-white/55 md:inline">
            {works.length} {copy.work.projects}
          </span>
        </div>

        <h2
          ref={statement.ref}
          className={`reveal mx-auto mb-10 max-w-[18ch] text-center font-serif text-[34px] leading-[1.05] text-white sm:text-[44px] md:mb-16 md:text-[80px] lg:text-[100px] ${
            statement.visible ? "is-visible" : ""
          }`}
        >
          <Statement segments={copy.work.statement} />
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {works.map((work, i) => (
            <WorkCard
              key={work.slug}
              work={work}
              index={i}
              conceptLabel={copy.work.concept}
              onOpen={() => openWork(work)}
            />
          ))}
        </div>

        <div className="mt-12 flex justify-center md:mt-16">
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 border border-white/30 px-6 py-3 text-[13px] text-white/90 transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] md:text-[14px]"
          >
            {copy.work.cta}
            <span className="inline-block transition-transform duration-500 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>

      <WorkLightbox
        works={motionWorks}
        index={videoIdx}
        onClose={() => setVideoIdx(null)}
        onNav={(i) => setVideoIdx(i)}
      />
      <WebsiteViewer
        sites={websiteWorks}
        index={siteIdx}
        onClose={() => setSiteIdx(null)}
        onNav={(i) => setSiteIdx(i)}
      />
    </section>
  );
}

function WorkCard({
  work,
  index,
  conceptLabel,
  onOpen,
}: {
  work: Work;
  index: number;
  conceptLabel: string;
  onOpen: () => void;
}) {
  const reveal = useReveal<HTMLButtonElement>();
  const tiltRef = useRef<HTMLDivElement | null>(null);
  const isWebsite = work.type === "website";

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = tiltRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rotY = (px - 0.5) * 8;
    const rotX = (0.5 - py) * 6;
    el.style.transform = `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
  };
  const onLeave = () => {
    const el = tiltRef.current;
    if (!el) return;
    el.style.transform = "perspective(900px) rotateX(0) rotateY(0)";
  };

  return (
    <button
      ref={reveal.ref}
      type="button"
      onClick={onOpen}
      data-cursor="view"
      aria-label={`${work.title} — ${work.category}`}
      className={`reveal-up group block text-left ${index % 5 === 0 ? "lg:col-span-2" : ""} ${
        reveal.visible ? "is-visible" : ""
      }`}
      style={{ transitionDelay: `${(index % 3) * 80}ms` }}
    >
      <div
        ref={tiltRef}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className="relative aspect-video overflow-hidden bg-[#0c0c0c] transition-transform duration-500 ease-out"
        style={{ transformStyle: "preserve-3d" }}
      >
        <Image
          src={work.image}
          alt={work.title}
          fill
          sizes="(min-width: 1024px) 50vw, (min-width: 640px) 50vw, 100vw"
          className={`transition-transform duration-[1400ms] ease-out group-hover:scale-[1.03] ${
            isWebsite ? "object-contain" : "object-cover group-hover:scale-[1.05]"
          }`}
        />
        <div className="absolute inset-0 bg-black/30 transition-opacity duration-700 group-hover:bg-black/10" />

        {/* Affordance — ↗ for live sites, ▶ for video work */}
        <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 bg-black/30 text-white opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:scale-100 group-hover:opacity-100 md:scale-75">
          {isWebsite ? (
            <svg width="17" height="17" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
              <path d="M4.5 11.5L11.5 4.5M6 4.5h5.5V10" />
            </svg>
          ) : (
            <svg width="16" height="18" viewBox="0 0 16 18" fill="currentColor" aria-hidden>
              <path d="M0 1.2v15.6c0 .9 1 1.5 1.8 1l13-7.8c.7-.5.7-1.6 0-2L1.8.2C1 -.3 0 .3 0 1.2z" />
            </svg>
          )}
        </span>

        {work.kind === "concept" && (
          <span className="absolute left-3 top-3 rounded-full border border-white/30 bg-black/40 px-2.5 py-1 text-[10px] text-white/85 backdrop-blur-sm">
            {conceptLabel}
          </span>
        )}
      </div>
      <div className="mt-3 flex items-baseline justify-between gap-4 md:mt-4">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h3 className="font-serif text-[20px] text-white transition-colors duration-300 group-hover:text-[var(--color-accent)] md:text-[26px]">
            {work.title}
          </h3>
          <span className="text-[11px] text-white/55 md:text-[12px]">
            {work.kind === "client" ? work.client : work.category}
          </span>
        </div>
        <span className="text-[11px] text-white/55 md:text-[12px]">
          {work.year}
        </span>
      </div>
    </button>
  );
}
