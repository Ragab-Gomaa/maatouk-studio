"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { works } from "@/lib/works";
import { useReveal } from "@/lib/useReveal";
import { WorkLightbox } from "./WorkLightbox";

export function SelectedWork() {
  const head = useReveal<HTMLDivElement>();
  const statement = useReveal<HTMLHeadingElement>();
  const [openIdx, setOpenIdx] = useState<number | null>(null);

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
          <span className="text-[11px] text-white/40 md:text-[12px]">
            Selected Work
          </span>
          <span className="hidden text-[12px] text-white/40 md:inline">
            {works.length} projects
          </span>
        </div>

        <h2
          ref={statement.ref}
          className={`reveal mx-auto mb-10 max-w-[18ch] text-center font-serif text-[34px] leading-[1.05] text-white sm:text-[44px] md:mb-16 md:text-[80px] lg:text-[100px] ${
            statement.visible ? "is-visible" : ""
          }`}
        >
          Work that{" "}
          <span className="italic text-[var(--color-accent)]">moves</span>{" "}
          the work forward.
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {works.map((work, i) => (
            <WorkCard
              key={work.slug}
              work={work}
              index={i}
              onOpen={() => setOpenIdx(i)}
            />
          ))}
        </div>

        <div className="mt-10 flex justify-center md:mt-14">
          <button
            type="button"
            onClick={() => setOpenIdx(0)}
            className="group inline-flex items-center gap-3 border-b border-white/30 pb-2 text-[13px] text-white/85 transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] md:text-[14px]"
          >
            View all works
            <span className="transition-transform duration-500 group-hover:translate-x-1">
              →
            </span>
          </button>
        </div>
      </div>

      <WorkLightbox
        works={works}
        index={openIdx}
        onClose={() => setOpenIdx(null)}
        onNav={(i) => setOpenIdx(i)}
      />
    </section>
  );
}

function WorkCard({
  work,
  index,
  onOpen,
}: {
  work: { slug: string; image: string; title: string; category: string; year: number };
  index: number;
  onOpen: () => void;
}) {
  const reveal = useReveal<HTMLButtonElement>();
  const tiltRef = useRef<HTMLDivElement | null>(null);

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
      className={`reveal-up group block text-left ${index % 5 === 0 ? "lg:col-span-2" : ""} ${
        reveal.visible ? "is-visible" : ""
      }`}
      style={{ transitionDelay: `${(index % 3) * 80}ms` }}
    >
      <div
        ref={tiltRef}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className="relative aspect-[4/3] overflow-hidden bg-[var(--color-bg-elevated)] transition-transform duration-500 ease-out"
        style={{ transformStyle: "preserve-3d" }}
      >
        <Image
          src={work.image}
          alt={work.title}
          fill
          sizes="(min-width: 1024px) 50vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.05]"
        />
        <div className="absolute inset-0 bg-black/30 transition-opacity duration-700 group-hover:bg-black/0" />
      </div>
      <div className="mt-3 flex items-baseline justify-between gap-4 md:mt-4">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h3 className="font-serif text-[20px] text-white transition-colors duration-300 group-hover:text-[var(--color-accent)] md:text-[26px]">
            {work.title}
          </h3>
          <span className="text-[11px] text-white/40 md:text-[12px]">
            {work.category}
          </span>
        </div>
        <span className="text-[11px] text-white/40 md:text-[12px]">
          {work.year}
        </span>
      </div>
    </button>
  );
}
