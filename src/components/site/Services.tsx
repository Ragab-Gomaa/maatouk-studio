"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { works } from "@/lib/works";
import { useReveal } from "@/lib/useReveal";
import { useLang } from "@/components/i18n/LangProvider";

type Category = "Branding" | "Digital" | "Motion";

const SLIDE_MS = 500;

export function Services() {
  const { copy } = useLang();
  const reveal = useReveal<HTMLDivElement>();
  const [hovered, setHovered] = useState<number | null>(null);

  const services: { name: string; blurb: string; category: Category }[] = [
    { name: copy.services.items.branding.name, blurb: copy.services.items.branding.blurb, category: "Branding" },
    { name: copy.services.items.digital.name, blurb: copy.services.items.digital.blurb, category: "Digital" },
    { name: copy.services.items.motion.name, blurb: copy.services.items.motion.blurb, category: "Motion" },
  ];

  return (
    <section
      id="services"
      ref={reveal.ref}
      className={`reveal-up relative w-full bg-[var(--color-bg)] py-14 md:py-20 ${
        reveal.visible ? "is-visible" : ""
      }`}
    >
      <div className="mx-auto w-full max-w-[1600px] px-6 md:px-14">
        <div className="mb-8 flex items-end justify-between md:mb-12">
          <span className="text-[11px] text-white/55 md:text-[12px]">
            {copy.services.label}
          </span>
          <span className="hidden text-[12px] text-white/55 md:inline">
            {copy.services.tagline}
          </span>
        </div>

        <div className="grid grid-cols-1 gap-0 overflow-hidden border-y border-[var(--color-line)] md:grid-cols-3">
          {services.map((service, i) => {
            const projects = works.filter((w) => w.category === service.category);
            return (
              <ServiceCard
                key={service.category}
                index={i}
                name={service.name}
                blurb={service.blurb}
                projects={projects}
                hovered={hovered === i}
                onEnter={() => setHovered(i)}
                onLeave={() => setHovered(null)}
                isLast={i === services.length - 1}
                projectsLabel={copy.services.projects}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  index,
  name,
  blurb,
  projects,
  hovered,
  onEnter,
  onLeave,
  isLast,
  projectsLabel,
}: {
  index: number;
  name: string;
  blurb: string;
  projects: { slug: string; image: string; title: string }[];
  hovered: boolean;
  onEnter: () => void;
  onLeave: () => void;
  isLast: boolean;
  projectsLabel: string;
}) {
  const [slide, setSlide] = useState(0);
  const timerRef = useRef<number | null>(null);
  const headingReveal = useReveal<HTMLHeadingElement>({ threshold: 0.3 });
  const hasProjects = projects.length > 0;

  useEffect(() => {
    if (!hovered || projects.length < 2) return;
    timerRef.current = window.setInterval(() => {
      setSlide((s) => (s + 1) % projects.length);
    }, SLIDE_MS);
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [hovered, projects.length]);

  useEffect(() => {
    if (!hovered) setSlide(0);
  }, [hovered]);

  const onMouseMoveCard = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const mx = ((e.clientX - rect.left) / rect.width) * 100;
    const my = ((e.clientY - rect.top) / rect.height) * 100;
    e.currentTarget.style.setProperty("--mx", `${mx}%`);
    e.currentTarget.style.setProperty("--my", `${my}%`);
  };

  return (
    <div
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onMouseMove={onMouseMoveCard}
      className={`spotlight-card glow-accent group relative flex min-h-[460px] flex-col justify-between overflow-hidden border-b border-[var(--color-line)] p-6 transition-all duration-700 last:border-b-0 md:min-h-[640px] md:border-b-0 md:p-10 ${
        isLast ? "" : "md:border-r"
      } ${hovered && hasProjects ? "bg-black is-hot" : hovered ? "is-hot" : "bg-transparent"}`}
    >
      <div
        className={`pointer-events-none absolute inset-0 z-0 transition-opacity duration-700 ${
          hovered && hasProjects ? "opacity-100" : "opacity-0"
        }`}
        aria-hidden
      >
        {projects.map((project, j) => (
          <div
            key={project.slug}
            className={`absolute inset-0 transition-opacity duration-500 ease-out ${
              j === slide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={project.image}
              alt=""
              fill
              sizes="(min-width: 768px) 33vw, 100vw"
              className="object-cover"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/35" />
      </div>

      <div className="relative z-10 flex items-start justify-between">
        <span className="text-[11px] text-white/55 md:text-[12px]">
          0{index + 1}
        </span>
        <span
          className={`text-[11px] transition-all duration-500 md:text-[12px] ${
            hovered && hasProjects
              ? "translate-x-0 text-[var(--color-accent)] opacity-100"
              : "translate-x-2 opacity-0"
          }`}
        >
          ↗ {projects.length} {projectsLabel}
        </span>
      </div>

      <div className="relative z-10 flex-1 flex items-center justify-center md:py-6">
        <h3
          ref={headingReveal.ref}
          className="origin-center rotate-0 font-serif whitespace-nowrap text-[44px] leading-[0.95] text-white md:-rotate-90 md:text-[64px] lg:text-[80px]"
        >
          {name.split("").map((ch, k) => (
            <span
              key={k}
              className={`letter inline-block ${headingReveal.visible ? "is-on" : ""}`}
              style={{ transitionDelay: `${k * 55}ms` }}
            >
              {ch}
            </span>
          ))}
        </h3>
      </div>

      <div className="relative z-10">
        <p
          className={`max-w-[28ch] text-[13px] leading-[1.55] transition-colors duration-500 md:text-[15px] ${
            hovered ? "text-white/90" : "text-white/65"
          }`}
        >
          {blurb}
        </p>
      </div>
    </div>
  );
}
