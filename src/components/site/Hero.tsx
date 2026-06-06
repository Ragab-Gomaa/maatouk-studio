"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { heroWorks } from "@/lib/works";

const DURATION = 10_000;

export function Hero() {
  const [index, setIndex] = useState(0);
  const [tick, setTick] = useState(0);
  const timerRef = useRef<number | null>(null);

  const total = heroWorks.length;

  const goTo = useCallback(
    (next: number) => {
      const clamped = ((next % total) + total) % total;
      setIndex(clamped);
      setTick((t) => t + 1);
    },
    [total]
  );

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    if (timerRef.current) window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => {
      setIndex((i) => (i + 1) % total);
      setTick((t) => t + 1);
    }, DURATION);
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, [index, total]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  const touchStartX = useRef<number | null>(null);
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 40) {
      if (dx < 0) next();
      else prev();
    }
    touchStartX.current = null;
  };

  const current = heroWorks[index];

  return (
    <section
      id="top"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      className="relative h-[100svh] w-full overflow-hidden bg-[var(--color-bg)]"
    >
      {heroWorks.map((w, i) => (
        <div
          key={w.slug}
          className={`absolute inset-0 transition-opacity duration-[1200ms] ease-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={i !== index}
        >
          <Image
            key={i === index ? `kb-${tick}` : undefined}
            src={w.image}
            alt={w.title}
            fill
            priority={i === 0}
            sizes="100vw"
            className={`object-cover ${i === index ? "ken-burns" : ""}`}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
        </div>
      ))}

      <div className="hero-noise" aria-hidden />
      <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,transparent_55%,rgba(0,0,0,0.55)_100%)]" />

      <button
        type="button"
        onClick={prev}
        aria-label="Previous work"
        className="group absolute inset-y-0 left-0 z-10 w-1/4 cursor-w-resize focus:outline-none"
      >
        <span className="pointer-events-none absolute left-8 top-1/2 -translate-y-1/2 text-[12px] text-white/0 transition-all duration-500 group-hover:text-white/80 md:left-14">
          ← Prev
        </span>
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Next work"
        className="group absolute inset-y-0 right-0 z-10 w-1/4 cursor-e-resize focus:outline-none"
      >
        <span className="pointer-events-none absolute right-8 top-1/2 -translate-y-1/2 text-[12px] text-white/0 transition-all duration-500 group-hover:text-white/80 md:right-14">
          Next →
        </span>
      </button>

      <div className="pointer-events-none absolute inset-x-0 top-20 z-20 flex items-center justify-between px-6 md:hidden">
        <span className="text-[10px] text-white/55">
          {current.category} · {current.year}
        </span>
        <span className="text-[10px] text-white/55">
          {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 px-6 pb-8 md:px-14 md:pb-14">
        <div className="mx-auto flex w-full max-w-[1600px] items-end justify-between gap-4 md:gap-8">
          <div className="flex flex-col gap-2">
            <span
              key={`cat-${index}-${tick}`}
              className="reveal-up is-visible hidden text-[12px] text-white/60 md:inline"
              style={{ transitionDelay: "60ms" }}
            >
              {current.category} · {current.year}
            </span>
            <h1 className="font-serif text-[40px] leading-[1.05] text-white sm:text-[56px] md:text-[88px] lg:text-[112px]">
              <span key={`title-${index}-${tick}`} className="reveal-line-wrap is-visible">
                <span
                  className="reveal-line"
                  style={{ transitionDelay: "120ms" }}
                >
                  {current.title}
                </span>
              </span>
            </h1>
            <span
              key={`client-${index}-${tick}`}
              className="reveal-up is-visible text-[13px] text-white/70 md:text-[15px]"
              style={{ transitionDelay: "260ms" }}
            >
              {current.client}
            </span>
          </div>

          <div className="hidden flex-col items-end gap-2 md:flex md:gap-3">
            <span className="font-serif text-[36px] leading-none text-white">
              {String(index + 1).padStart(2, "0")}{" "}
              <span className="text-white/40">/ {String(total).padStart(2, "0")}</span>
            </span>
            <div className="h-px w-48 bg-white/20">
              <div key={tick} className="hero-progress h-full w-full bg-[var(--color-accent)]" />
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-3 left-1/2 z-20 hidden -translate-x-1/2 md:block">
        <div className="scroll-cue flex flex-col items-center gap-2 text-[10px] text-white/60">
          <span>Scroll</span>
          <span className="block h-6 w-px bg-white/50" />
        </div>
      </div>
    </section>
  );
}
