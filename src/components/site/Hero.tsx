"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { heroWorks } from "@/lib/works";
import { useLang } from "@/components/i18n/LangProvider";

const DEFAULT_DURATION = 7_000;
const FADE_MS = 1200;

export function Hero() {
  const { copy } = useLang();
  const [index, setIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [tick, setTick] = useState(0);
  const [playMotion, setPlayMotion] = useState(true);
  const timerRef = useRef<number | null>(null);
  const fadeRef = useRef<number | null>(null);
  const indexRef = useRef(0);

  const total = heroWorks.length;

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPlayMotion(!mq.matches);
    const onChange = () => setPlayMotion(!mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const goTo = useCallback(
    (nextRaw: number) => {
      const clamped = ((nextRaw % total) + total) % total;
      if (clamped === indexRef.current) return;
      setPrevIndex(indexRef.current);
      indexRef.current = clamped;
      setIndex(clamped);
      setTick((t) => t + 1);
      setTransitioning(true);
      if (fadeRef.current) window.clearTimeout(fadeRef.current);
      fadeRef.current = window.setTimeout(() => setTransitioning(false), FADE_MS);
    },
    [total]
  );

  const next = useCallback(() => goTo(indexRef.current + 1), [goTo]);
  const prev = useCallback(() => goTo(indexRef.current - 1), [goTo]);

  // Auto-advance using each slide's own dwell time.
  useEffect(() => {
    if (timerRef.current) window.clearTimeout(timerRef.current);
    const duration = heroWorks[index].heroDuration ?? DEFAULT_DURATION;
    timerRef.current = window.setTimeout(() => goTo(indexRef.current + 1), duration);
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, [index, goTo]);

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
    if (Math.abs(dx) > 56) {
      if (dx < 0) next();
      else prev();
    }
    touchStartX.current = null;
  };

  const current = heroWorks[index];
  const currentDuration = current.heroDuration ?? DEFAULT_DURATION;

  return (
    <section
      id="top"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      className="relative h-[100svh] w-full overflow-hidden bg-[var(--color-bg)]"
    >
      {heroWorks.map((w, i) => {
        const isActive = i === index;
        // Keep the outgoing slide's video mounted through the fade so it never
        // swaps to its poster (the brief first-frame flash you saw).
        const showVideo =
          playMotion && !!w.heroVideo && (isActive || (transitioning && i === prevIndex));
        return (
          <div
            key={w.slug}
            className={`absolute inset-0 transition-opacity duration-[1200ms] ease-out ${
              isActive ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={!isActive}
          >
            {showVideo ? (
              <video
                key={`vid-${w.slug}`}
                className="absolute inset-0 h-full w-full object-cover"
                src={w.heroVideo}
                poster={w.image}
                autoPlay
                muted
                playsInline
                preload="auto"
                ref={(el) => {
                  if (el) el.muted = true;
                }}
              />
            ) : (
              <Image
                src={w.image}
                alt={w.title}
                fill
                priority={i === 0}
                sizes="100vw"
                className="object-cover"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/80" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
          </div>
        );
      })}

      <div className="hero-noise" aria-hidden />
      <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,transparent_55%,rgba(0,0,0,0.55)_100%)]" />

      <button
        type="button"
        onClick={prev}
        data-cursor="prev"
        tabIndex={-1}
        aria-label={copy.hero.prev}
        className="absolute inset-y-0 left-0 z-10 w-1/4"
      />
      <button
        type="button"
        onClick={next}
        data-cursor="next"
        tabIndex={-1}
        aria-label={copy.hero.next}
        className="absolute inset-y-0 right-0 z-10 w-1/4"
      />

      <div className="pointer-events-none absolute inset-x-0 top-20 z-20 flex items-center justify-between px-6 md:hidden">
        <span className="text-[10px] text-white/70">
          {current.category} · {current.year}
        </span>
        <span className="text-[10px] text-white/70">
          {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 px-6 pb-8 md:px-14 md:pb-14">
        <div className="mx-auto flex w-full max-w-[1600px] items-end justify-between gap-4 md:gap-8">
          <div className="flex flex-col gap-2">
            <span
              key={`cat-${index}-${tick}`}
              className="reveal-up is-visible hidden text-[12px] text-white/75 md:inline"
              style={{ transitionDelay: "60ms" }}
            >
              {current.category} · {current.year}
            </span>
            <h1 className="font-serif text-[40px] leading-[1.05] text-white sm:text-[56px] md:text-[88px] lg:text-[112px]">
              <span key={`title-${index}-${tick}`} className="reveal-line-wrap is-visible">
                <span className="reveal-line" style={{ transitionDelay: "120ms" }}>
                  {current.title}
                </span>
              </span>
            </h1>
            <span
              key={`client-${index}-${tick}`}
              className="reveal-up is-visible text-[13px] text-white/80 md:text-[15px]"
              style={{ transitionDelay: "260ms" }}
            >
              {current.kind === "client" ? current.client : copy.work.concept}
            </span>
          </div>

          <div className="hidden flex-col items-end gap-2 md:flex md:gap-3">
            <span className="font-serif text-[36px] leading-none text-white">
              {String(index + 1).padStart(2, "0")}{" "}
              <span className="text-white/55">/ {String(total).padStart(2, "0")}</span>
            </span>
            <div className="h-px w-48 bg-white/25">
              <div
                key={tick}
                className="hero-progress h-full w-full bg-[var(--color-accent)]"
                style={{ animationDuration: `${currentDuration}ms` }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 md:hidden">
        {heroWorks.map((w, i) => (
          <button
            key={w.slug}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`${w.title} (${i + 1}/${total})`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index ? "w-6 bg-[var(--color-accent)]" : "w-1.5 bg-white/40"
            }`}
          />
        ))}
      </div>

      <div className="pointer-events-none absolute bottom-3 left-1/2 z-20 hidden -translate-x-1/2 md:block">
        <div className="scroll-cue flex flex-col items-center gap-2.5 text-[10px] text-white/70">
          <span>{copy.hero.scroll}</span>
          <svg width="18" height="28" viewBox="0 0 18 28" fill="none" aria-hidden className="text-white/70">
            <rect x="1" y="1" width="16" height="26" rx="8" stroke="currentColor" strokeWidth="1.3" />
            <circle className="scroll-wheel" cx="9" cy="7.5" r="1.7" fill="currentColor" />
          </svg>
        </div>
      </div>
    </section>
  );
}
