"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { works } from "@/lib/works";
import { useReveal } from "@/lib/useReveal";

type ServiceDef = {
  name: string;
  blurb: string;
  category: "Branding" | "Digital" | "Motion";
};

const services: ServiceDef[] = [
  {
    name: "Branding",
    category: "Branding",
    blurb:
      "Identity systems, naming, guidelines — the unmistakable craft that holds a brand together.",
  },
  {
    name: "Digital",
    category: "Digital",
    blurb:
      "Websites, products and interfaces designed and built to feel as good as they look.",
  },
  {
    name: "Motion",
    category: "Motion",
    blurb:
      "Brand films, openers and motion identities that carry the work into a moving frame.",
  },
];

const SLIDE_MS = 280;

export function Services() {
  const reveal = useReveal<HTMLDivElement>();
  const [hovered, setHovered] = useState<number | null>(null);

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
          <span className="text-[11px] text-white/40 md:text-[12px]">
            Services
          </span>
          <span className="hidden text-[12px] text-white/40 md:inline">
            What we make
          </span>
        </div>

        <div className="grid grid-cols-1 gap-0 overflow-hidden border-y border-[var(--color-line)] md:grid-cols-3">
          {services.map((service, i) => {
            const projects = works.filter(
              (w) => w.category === service.category
            );
            return (
              <ServiceCard
                key={service.name}
                index={i}
                service={service}
                projects={projects}
                hovered={hovered === i}
                onEnter={() => setHovered(i)}
                onLeave={() => setHovered(null)}
                isLast={i === services.length - 1}
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
  service,
  projects,
  hovered,
  onEnter,
  onLeave,
  isLast,
}: {
  index: number;
  service: ServiceDef;
  projects: { slug: string; image: string; title: string }[];
  hovered: boolean;
  onEnter: () => void;
  onLeave: () => void;
  isLast: boolean;
}) {
  const [slide, setSlide] = useState(0);
  const timerRef = useRef<number | null>(null);
  const headingReveal = useReveal<HTMLHeadingElement>({ threshold: 0.3 });

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
      } ${hovered ? "bg-black is-hot" : "bg-transparent"}`}
    >
      <div
        className={`pointer-events-none absolute inset-0 z-0 transition-opacity duration-700 ${
          hovered ? "opacity-100" : "opacity-0"
        }`}
        aria-hidden
      >
        {projects.map((project, j) => (
          <div
            key={project.slug}
            className={`absolute inset-0 transition-opacity duration-150 ease-out ${
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
        <span className="text-[11px] text-white/45 md:text-[12px]">
          0{index + 1}
        </span>
        <span
          className={`text-[11px] transition-all duration-500 md:text-[12px] ${
            hovered
              ? "translate-x-0 text-[var(--color-accent)] opacity-100"
              : "translate-x-2 opacity-0"
          }`}
        >
          ↗ {projects.length} projects
        </span>
      </div>

      <div className="relative z-10 flex-1 flex items-center justify-center md:py-6">
        <h3
          ref={headingReveal.ref}
          className="font-serif whitespace-nowrap text-[44px] leading-[0.95] text-white md:text-[64px] lg:text-[80px]"
          style={{
            transform: "rotate(-90deg)",
            transformOrigin: "center center",
          }}
        >
          {service.name.split("").map((ch, k) => (
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

      <div className="relative z-10 flex items-end justify-between gap-4 md:gap-6">
        <p
          className={`max-w-[28ch] text-[13px] leading-[1.55] transition-colors duration-500 md:text-[15px] ${
            hovered ? "text-white/85" : "text-white/55"
          }`}
        >
          {service.blurb}
        </p>

        {hovered && projects.length > 1 ? (
          <div className="hidden items-center gap-1.5 md:flex">
            {projects.map((_, j) => (
              <span
                key={j}
                className={`block h-px transition-all duration-300 ${
                  j === slide
                    ? "w-6 bg-[var(--color-accent)]"
                    : "w-3 bg-white/30"
                }`}
              />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
