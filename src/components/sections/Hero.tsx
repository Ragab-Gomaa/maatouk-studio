"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "@/lib/LocaleContext";
import Button from "@/components/ui/Button";

/**
 * Hero — two columns: text block + a composed Disciplines Mark on the
 * side. The Mark is three equal-sized cards arranged in a diagonal
 * cascade so they feel like one artefact, not a stacked list.
 */
export default function Hero() {
  const { t, locale } = useTranslation();

  return (
    <section className="relative overflow-hidden bg-surface pt-28 md:pt-32 lg:pt-36 pb-12 md:pb-16">
      <div
        className="absolute top-[-200px] right-[-150px] w-[500px] h-[500px] rounded-full bg-brand-blue/[0.08] blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] rounded-full bg-brand-green/[0.08] blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1320px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* ── Left: text ── */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 bg-surface-raised border border-black/[0.06] rounded-full shadow-sm mb-4"
            >
              <span className="relative flex w-2 h-2" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-50 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-green" />
              </span>
              <span className="text-[12px] text-ink-muted font-medium tracking-[-0.01em]">
                {t(
                  "Small studio, big details",
                  "استوديو صغير، تفاصيل كبيرة"
                )}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className={`font-lyon font-bold tracking-[-0.035em] text-[2.75rem] sm:text-[3.75rem] md:text-[5rem] lg:text-[5.75rem] xl:text-[6.5rem] text-ink mb-6 ${locale === "ar" ? "leading-[1.15]" : "leading-[0.92]"}`}
            >
              {locale === "ar" ? (
                <>
                  <span className="block">نصمّم هويّات</span>
                  <span className="block text-brand-blue">تُحرّك الثقافة.</span>
                </>
              ) : (
                <>
                  <span className="block">We design brands</span>
                  <span className="block">
                    that <span className="text-brand-blue italic">move </span>
                    culture.
                  </span>
                </>
              )}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-base md:text-lg text-ink-soft max-w-xl leading-relaxed mb-8"
            >
              <span className="block">
                {t(
                  "Brand identity, motion, and digital products — under one roof.",
                  "هويّة، موشن، ومنتجات رقميّة — تحت سقفٍ واحد."
                )}
              </span>
              <span className="block mt-1">
                {t(
                  "From first idea to final delivery.",
                  "من أوّل فكرةٍ إلى آخر تسليم."
                )}
              </span>
            </motion.p>

            {/* ── Tablet-only inline mark — renders between
                description and CTA so the hero still closes with the
                buttons. Hidden on phones (< sm) where the composed
                pattern doesn't translate, and on lg+ where it moves
                to the right column. */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="hidden sm:flex lg:hidden items-center justify-center mb-8"
            >
              <ComposedMark />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="flex flex-wrap items-center gap-3"
            >
              <Button href="/contact" variant="primary" size="lg" withArrow>
                {t("Start a project", "ابدأ مشروعك")}
              </Button>
              <Button href="/work" variant="secondary" size="lg">
                {t("See our work", "شاهد أعمالنا")}
              </Button>
            </motion.div>
          </div>

          {/* ── Right: Desktop-only composed mark ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex items-center justify-center"
          >
            <ComposedMark />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/**
 * ComposedMark — three equal-sized cards cascading diagonally. They feel
 * like one composed artefact even though each is the same size. Labels
 * sit as small corner pills so they're never covered by an overlapping
 * card.
 */
function ComposedMark() {
  const { t } = useTranslation();

  return (
    <div className="relative w-full max-w-[300px] sm:max-w-[340px] lg:max-w-[380px] aspect-[5/6] mx-auto">
      {/* ── Card 1 — Branding (top, aligned to end) ── */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="absolute top-0 end-0 w-[65%] aspect-square rounded-[20px] overflow-hidden studio-card bg-brand-blue"
      >
        <CornerLabel text={t("Branding", "هويّة بصريّة")} tone="on-blue" />
        <BrandingAnimation />
      </motion.div>

      {/* ── Card 2 — Motion (middle, aligned to start) ── */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="absolute top-[26%] start-0 w-[65%] aspect-square rounded-[20px] overflow-hidden studio-card bg-ink"
      >
        <CornerLabel text={t("Motion Graphics", "الموشن جرافيك")} tone="dark" />
        <MotionAnimation />
      </motion.div>

      {/* ── Card 3 — Digital (bottom, nudged visually leftward) ── */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.7 }}
        className="absolute bottom-0 end-0 w-[65%] aspect-square rounded-[20px] overflow-hidden studio-card -translate-x-[22%]"
      >
        <CornerLabel text={t("Digital", "منتجات رقميّة")} tone="light" />
        <DigitalAnimation />
      </motion.div>

    </div>
  );
}


/* ─────────────────── Corner label pill ─────────────────── */

function CornerLabel({
  text,
  tone,
}: {
  text: string;
  tone: "on-blue" | "dark" | "light";
}) {
  const { locale } = useTranslation();

  const palette = {
    "on-blue": "bg-white text-brand-blue",
    dark: "bg-white/10 text-white",
    light: "bg-surface-low text-ink-muted",
  }[tone];

  // Arabic: drop uppercase + tracking (they break ligatures); bump
  // weight so the shorter character count still reads at small size.
  const typography =
    locale === "ar"
      ? "text-[11px] font-bold"
      : "text-[10px] uppercase tracking-[0.2em] font-semibold";

  return (
    <div className="absolute top-3 start-3 z-20">
      <span className={`pill !py-1 !px-2.5 ${typography} ${palette}`}>
        {text}
      </span>
    </div>
  );
}

/* ─────────────────── Animations ─────────────────── */

/**
 * BrandingAnimation — a Photoshop-style workspace. Dark chrome with
 * the Ps badge + menu bar + file tab, a vertical tools rail on the
 * left, a grey canvas in the middle with an artboard containing the
 * Maatouk mark inside a marching-ants selection, and a layers panel
 * on the right with three layer rows (Accent / Mark selected /
 * Background). Mirrors the tool-aesthetic of the Motion (After
 * Effects) and Digital (browser) cards.
 */
function BrandingAnimation() {
  return (
    <div
      className="absolute inset-0 overflow-hidden"
      style={{
        direction: "ltr",
        background:
          "linear-gradient(135deg, #001A8A 0%, #000B3A 55%, #0A0A14 100%)",
      }}
    >
      {/* Photoshop panel — dark workspace */}
      <div
        className="absolute start-3 end-3 top-12 bottom-3 rounded-[6px] bg-[#1E1E1E] border border-black/40 overflow-hidden flex flex-col"
        style={{ boxShadow: "0 14px 32px -10px rgba(0,0,0,0.55)" }}
      >
        {/* ── Top menu bar ── */}
        <div className="shrink-0 h-[13px] flex items-center gap-1.5 px-1.5 bg-[#2B2B2B] border-b border-black/50">
          {/* Ps logo badge */}
          <div
            className="w-[10px] h-[10px] rounded-[2px] flex items-center justify-center shrink-0"
            style={{ backgroundColor: "#001E36" }}
          >
            <span
              className="text-[6px] font-bold leading-none"
              style={{
                color: "#31A8FF",
                fontFamily:
                  "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
              }}
            >
              Ps
            </span>
          </div>
          {/* Menu items */}
          <div className="flex items-center gap-[5px] text-[5px] font-medium text-white/65">
            <span>File</span>
            <span>Edit</span>
            <span>Image</span>
            <span>Layer</span>
            <span>Select</span>
            <span>View</span>
          </div>
        </div>

        {/* ── File tab row ── */}
        <div className="shrink-0 h-[11px] flex items-stretch bg-[#353535] border-b border-black/50">
          <div className="flex items-center gap-1 px-1.5 bg-[#1E1E1E] border-r border-black/50">
            <span className="text-[4.5px] text-white/40 leading-none">▣</span>
            <span className="text-[5px] font-mono text-white/85 leading-none">
              maatouk-type.psd
            </span>
            <span className="text-[6px] text-white/35 leading-none">×</span>
          </div>
        </div>

        {/* ── Main workspace: tools | canvas | layers ── */}
        <div className="flex-1 flex min-h-0">
          {/* Tools rail (left) */}
          <div className="w-[15px] shrink-0 bg-[#2B2B2B] border-r border-black/50 flex flex-col items-center py-1 gap-[5px]">
            {/* Move arrow — selected */}
            <div className="w-[11px] h-[11px] rounded-[1px] bg-white/15 flex items-center justify-center">
              <svg width="7" height="7" viewBox="0 0 8 8" aria-hidden="true">
                <path d="M1 0.5 L1 7 L3 5 L4.5 7.5 L5.5 7 L4 4.5 L6.5 4.5 Z" fill="white" />
              </svg>
            </div>
            {/* Marquee (dashed square) */}
            <div
              className="w-[9px] h-[9px]"
              style={{
                border: "1px dashed rgba(255,255,255,0.7)",
                borderRadius: "0.5px",
              }}
            />
            {/* Type tool — T */}
            <span className="text-[8px] font-bold text-white/70 leading-none font-lyon">
              T
            </span>
            {/* Brush */}
            <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
              <path
                d="M1 9 L3 7 M2 8 L4 6 M3 5 L8 1 L9 2 L5 7 Z"
                stroke="rgba(255,255,255,0.75)"
                strokeWidth="1"
                fill="none"
                strokeLinecap="round"
              />
              <path d="M5 7 L8 1 L9 2 L5 7 Z" fill="rgba(255,255,255,0.75)" />
            </svg>
            {/* Eyedropper */}
            <svg width="9" height="9" viewBox="0 0 10 10" aria-hidden="true">
              <circle cx="7.5" cy="2.5" r="1.5" fill="#0029D6" stroke="white" strokeWidth="0.5" />
              <line x1="6.3" y1="3.7" x2="1" y2="9" stroke="rgba(255,255,255,0.75)" strokeWidth="1" strokeLinecap="round" />
            </svg>
            {/* Pen tool — angled nib */}
            <svg width="9" height="9" viewBox="0 0 10 10" aria-hidden="true">
              <path
                d="M5 1 L8 4 L5 9 L2 4 Z"
                fill="none"
                stroke="rgba(255,255,255,0.75)"
                strokeWidth="0.8"
                strokeLinejoin="round"
              />
              <circle cx="5" cy="4.5" r="0.8" fill="rgba(255,255,255,0.75)" />
            </svg>
          </div>

          {/* Canvas area */}
          <div className="flex-1 relative bg-[#4A4A4A] flex items-center justify-center overflow-hidden">
            {/* Top ruler */}
            <div className="absolute top-0 left-0 right-0 h-[8px] bg-[#2B2B2B] border-b border-black/50 flex items-end overflow-hidden">
              {Array.from({ length: 18 }).map((_, i) => (
                <div
                  key={i}
                  className={`flex-1 border-l border-white/15 ${i % 5 === 0 ? "h-[3.5px]" : "h-[2px]"}`}
                  aria-hidden="true"
                />
              ))}
            </div>
            {/* Left ruler */}
            <div className="absolute top-0 bottom-0 left-0 w-[8px] bg-[#2B2B2B] border-r border-black/50 flex flex-col items-end overflow-hidden">
              {Array.from({ length: 14 }).map((_, i) => (
                <div
                  key={i}
                  className={`flex-1 border-t border-white/15 ${i % 5 === 0 ? "w-[3.5px]" : "w-[2px]"}`}
                  aria-hidden="true"
                />
              ))}
            </div>

            {/* Artboard area */}
            <div className="relative ms-1 mt-1">
              {/* Artboard — a mini brand-guidelines page */}
              <div
                className="relative bg-white flex flex-col overflow-hidden"
                style={{
                  width: "92px",
                  height: "92px",
                  boxShadow:
                    "0 6px 18px rgba(0,0,0,0.5), 0 0 0 1px rgba(0,0,0,0.25)",
                }}
              >
                {/* Top: tiny specimen header */}
                <div className="shrink-0 flex items-center justify-between px-1.5 pt-1">
                  <span className="text-[4px] font-mono text-ink/50 tracking-[0.15em] uppercase">
                    Typography
                  </span>
                  <span className="text-[4px] font-mono text-ink/35 tracking-wider">
                    01 / 04
                  </span>
                </div>

                {/* Typography specimen — hand-drawn wavy headline + body lines */}
                <div className="flex-1 flex flex-col justify-center px-1.5 gap-[3px]">
                  {/* Display headline — bold wavy stroke */}
                  <WavyLine width={70} strokeWidth={1.8} color="#121214" />
                  {/* Body copy lines — thinner wavy strokes with varied widths */}
                  <div className="flex flex-col gap-[2px] mt-[1px]">
                    <WavyLine width={80} strokeWidth={0.9} color="#121214" opacity={0.35} />
                    <WavyLine width={74} strokeWidth={0.9} color="#121214" opacity={0.35} />
                    <WavyLine width={56} strokeWidth={0.9} color="#121214" opacity={0.35} />
                  </div>
                </div>

                {/* Divider */}
                <div className="shrink-0 h-px bg-black/10 mx-1.5" />

                {/* Pantone-style palette row */}
                <div className="shrink-0 px-1.5 pt-1 pb-1">
                  <div className="flex items-center justify-between mb-0.5">
                    <span className="text-[4px] font-mono text-ink/50 tracking-[0.15em] uppercase">
                      Palette
                    </span>
                    <span className="text-[4px] font-mono text-ink/35 tracking-wider">
                      ISO
                    </span>
                  </div>
                  <div className="flex gap-[1.5px]">
                    {[
                      { color: "#0029D6", code: "072" },
                      { color: "#3CFFC5", code: "354" },
                      { color: "#FBF9F5", code: "000" },
                      { color: "#121214", code: "BLK" },
                    ].map((c, i) => (
                      <div key={i} className="flex-1 flex flex-col">
                        <div
                          className="w-full h-[11px] rounded-[1px]"
                          style={{
                            backgroundColor: c.color,
                            boxShadow: "inset 0 0 0 0.5px rgba(0,0,0,0.1)",
                          }}
                        />
                        <span className="text-[3.5px] font-mono text-ink/55 tracking-wide text-center mt-[1px] leading-none">
                          {c.code}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Marching-ants selection around the artboard */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  border: "1px dashed white",
                  boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.35)",
                }}
                aria-hidden="true"
              />

              {/* Tiny size label above */}
              <span className="absolute -top-[8px] left-0 text-[4.5px] font-mono text-white/60 tracking-wider">
                Brand Guidelines · Pg 01
              </span>
            </div>
          </div>

          {/* Layers panel (right) */}
          <div className="w-[66px] shrink-0 bg-[#2B2B2B] border-l border-black/50 flex flex-col min-h-0">
            {/* Panel header */}
            <div className="shrink-0 flex items-center justify-between px-1.5 py-1 bg-[#353535] border-b border-black/50">
              <span className="text-[5px] font-semibold text-white/85 tracking-[0.12em] uppercase">
                Layers
              </span>
              <span className="text-[5px] text-white/40">3</span>
            </div>

            {/* Layer list */}
            <div className="flex-1 flex flex-col overflow-hidden">
              {/* Top: Shadow */}
              <div className="flex items-center gap-1 px-1.5 py-1 border-b border-black/30 hover:bg-white/5">
                <EyeIcon />
                <div className="w-[9px] h-[9px] rounded-[1px] bg-brand-green shrink-0 border border-white/20" />
                <span className="text-[5.5px] text-white/80 truncate">Shadow</span>
              </div>
              {/* Middle: Type (selected) */}
              <div
                className="flex items-center gap-1 px-1.5 py-1 border-b border-black/30"
                style={{
                  backgroundColor: "rgba(0, 41, 214, 0.28)",
                  boxShadow: "inset 0 0 0 1px rgba(0, 41, 214, 0.65)",
                }}
              >
                <EyeIcon highlighted />
                <div className="w-[9px] h-[9px] rounded-[1px] bg-brand-blue shrink-0 border border-white/20 flex items-center justify-center">
                  <span className="text-[5px] font-lyon font-bold text-white leading-none">
                    T
                  </span>
                </div>
                <span className="text-[5.5px] text-white font-medium truncate">
                  Type
                </span>
              </div>
              {/* Bottom: Background */}
              <div className="flex items-center gap-1 px-1.5 py-1 hover:bg-white/5">
                <EyeIcon />
                <div className="w-[9px] h-[9px] rounded-[1px] bg-white shrink-0 border border-white/20" />
                <span className="text-[5.5px] text-white/80 truncate">
                  Background
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * WavyLine — a hand-drawn-feeling squiggle, used inside the Branding
 * artboard to stand in for text. The viewBox matches the target
 * width in pixels so strokes render at a consistent weight without
 * distortion.
 */
function WavyLine({
  width,
  strokeWidth,
  color,
  opacity = 1,
}: {
  width: number;
  strokeWidth: number;
  color: string;
  opacity?: number;
}) {
  const midY = strokeWidth + 1.2;
  const height = midY * 2;
  const wavelength = 9;
  const amplitude = 1.4;
  const segments = Math.max(3, Math.round(width / wavelength));
  const step = width / segments;

  let d = `M 0 ${midY}`;
  for (let i = 1; i <= segments; i++) {
    const x = i * step;
    if (i === 1) {
      const cx = step / 2;
      const cy = midY - amplitude;
      d += ` Q ${cx} ${cy}, ${x} ${midY}`;
    } else {
      d += ` T ${x} ${midY}`;
    }
  }

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      aria-hidden="true"
      style={{ opacity }}
    >
      <path
        d={d}
        stroke={color}
        strokeWidth={strokeWidth}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Tiny eye icon for the Photoshop layers panel */
function EyeIcon({ highlighted = false }: { highlighted?: boolean }) {
  const color = highlighted ? "white" : "rgba(255,255,255,0.55)";
  return (
    <svg width="8" height="8" viewBox="0 0 10 10" aria-hidden="true" className="shrink-0">
      <path
        d="M1 5 C 2.5 2.5, 7.5 2.5, 9 5 C 7.5 7.5, 2.5 7.5, 1 5 Z"
        fill="none"
        stroke={color}
        strokeWidth="0.9"
      />
      <circle cx="5" cy="5" r="1.3" fill={color} />
    </svg>
  );
}

/**
 * MotionAnimation — an After Effects-style composition panel. A small
 * preview thumbnail sits beside transport controls; below, a timeline
 * with a time ruler and four layer rows, each sprinkled with keyframe
 * diamonds. A brand-green playhead scrubs across the timeline in sync
 * with DURATION, and every keyframe pulses when the playhead passes
 * over it. Loops every 8s.
 */
function MotionAnimation() {
  const DURATION = 8;

  // Layers with keyframe positions (0..1 along timeline) — 3 rows only
  const layers: { name: string; color: string; keys: number[] }[] = [
    { name: "Shape", color: "#3CFFC5", keys: [0.05, 0.3, 0.55, 0.8] },
    { name: "Scale", color: "#0029D6", keys: [0.15, 0.42, 0.7, 0.92] },
    { name: "Rotate", color: "#3CFFC5", keys: [0.08, 0.35, 0.6, 0.86] },
  ];

  const LABEL_COL = 30; // percent of timeline container taken by layer labels

  return (
    <div className="absolute inset-0 bg-ink overflow-hidden">
      {/* Composition panel — sits below the corner label, fills the card */}
      <div
        className="absolute start-3 end-3 top-12 bottom-3 rounded-[8px] bg-[#121212] border border-white/[0.08] overflow-hidden flex flex-col shadow-[0_14px_32px_-10px_rgba(60,255,197,0.18)]"
        style={{ direction: "ltr" }}
      >
        {/* Top strip — composition name + live timecode */}
        <div className="relative shrink-0 flex items-center justify-between px-2 py-1 text-[6px] font-mono uppercase tracking-[0.15em] text-white/55 bg-white/[0.04] border-b border-white/[0.06]">
          <span className="flex items-center gap-1">
            <span className="w-1 h-1 rounded-full bg-brand-green animate-pulse" />
            <span className="font-semibold">Comp 01 · 2026</span>
          </span>
          <TimeCode duration={DURATION} />
        </div>

        {/* Large composition preview — full width, visually prominent */}
        <div className="shrink-0 relative w-full aspect-[16/7] bg-black overflow-hidden border-b border-white/[0.06]">
          {/* Subtle backdrop grid */}
          <div
            className="absolute inset-0 opacity-[0.06] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
              backgroundSize: "12px 12px",
            }}
            aria-hidden="true"
          />
          {/* Morphing shape — the 'composition' content */}
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8"
            animate={{
              rotate: [0, 90, 180, 270, 360],
              borderRadius: ["4px", "50%", "4px", "50%", "4px"],
              backgroundColor: [
                "#3CFFC5",
                "#ffffff",
                "#0029D6",
                "#ffffff",
                "#3CFFC5",
              ],
              scale: [1, 1.15, 1, 1.15, 1],
            }}
            transition={{
              duration: DURATION,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ boxShadow: "0 4px 20px rgba(60,255,197,0.55)" }}
          />
          {/* Corner safe-area brackets */}
          {[
            "top-1 left-1 border-t-[1.5px] border-l-[1.5px]",
            "top-1 right-1 border-t-[1.5px] border-r-[1.5px]",
            "bottom-1 left-1 border-b-[1.5px] border-l-[1.5px]",
            "bottom-1 right-1 border-b-[1.5px] border-r-[1.5px]",
          ].map((cls, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 border-white/35 ${cls}`}
              aria-hidden="true"
            />
          ))}
        </div>

        {/* Transport + meta strip */}
        <div className="shrink-0 relative flex items-center px-2 py-1 border-b border-white/[0.06]">
          {/* Left meta */}
          <span className="text-[5.5px] font-mono text-white/45 tabular-nums">
            1920×1080
          </span>
          {/* Centered transport controls — visible even when Digital card overlaps the edges */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-1.5">
            {/* Stop */}
            <span className="w-[6px] h-[6px] bg-white/50 rounded-[1px]" />
            {/* Play — brand-green triangle, glowing */}
            <motion.span
              className="inline-block"
              animate={{ opacity: [1, 0.75, 1] }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                width: 0,
                height: 0,
                borderLeft: "8px solid #3CFFC5",
                borderTop: "5px solid transparent",
                borderBottom: "5px solid transparent",
                filter: "drop-shadow(0 0 5px rgba(60,255,197,0.6))",
              }}
            />
            {/* Pause */}
            <span className="flex items-center gap-[1.5px]">
              <span className="w-[1.5px] h-[6px] bg-white/50" />
              <span className="w-[1.5px] h-[6px] bg-white/50" />
            </span>
          </div>
          {/* Right meta */}
          <span className="ms-auto text-[5.5px] font-mono text-white/45 tabular-nums">
            24fps
          </span>
        </div>

        {/* Timeline section */}
        <div className="relative flex-1 flex flex-col">
          {/* Time ruler */}
          <div className="shrink-0 relative h-3 bg-white/[0.02] border-b border-white/[0.06]">
            <div
              className="absolute inset-y-0 right-0"
              style={{ left: `${LABEL_COL}%` }}
            >
              {[0, 2, 4, 6, 8].map((s) => (
                <div
                  key={s}
                  className="absolute inset-y-0 w-[1px] bg-white/10"
                  style={{ left: `${(s / 8) * 100}%` }}
                >
                  <span className="text-[4.5px] font-mono text-white/40 absolute top-[1px] ps-[2px] tabular-nums">
                    {s}s
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Layers */}
          <div className="flex-1 relative">
            {layers.map((layer, i) => (
              <div
                key={i}
                className="flex items-center border-b border-white/[0.04]"
                style={{ height: `${100 / layers.length}%` }}
              >
                {/* Layer label */}
                <div
                  className="shrink-0 ps-1.5 text-[5.5px] font-mono text-white/65 truncate flex items-center gap-1"
                  style={{ width: `${LABEL_COL}%` }}
                >
                  <span
                    className="w-[4px] h-[4px] rounded-[1px]"
                    style={{ backgroundColor: layer.color }}
                  />
                  <span>{layer.name}</span>
                </div>
                {/* Timeline track */}
                <div className="flex-1 relative h-full">
                  <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 h-[1px] bg-white/10" />
                  {layer.keys.map((t, j) => (
                    <motion.div
                      key={j}
                      className="absolute top-1/2 -translate-y-1/2 rotate-45"
                      style={{
                        left: `${t * 100}%`,
                        marginLeft: -3,
                        width: 6,
                        height: 6,
                        backgroundColor: layer.color,
                        boxShadow: `0 0 5px ${layer.color}70`,
                      }}
                      animate={{ scale: [1, 1.8, 1] }}
                      transition={{
                        duration: 0.45,
                        delay: t * DURATION,
                        repeat: Infinity,
                        repeatDelay: DURATION - 0.45,
                        ease: "easeOut",
                      }}
                    />
                  ))}
                </div>
              </div>
            ))}

            {/* Playhead — sweeps from the left edge of the timeline to the end */}
            <motion.div
              className="absolute top-0 bottom-0 w-[1px] bg-brand-green z-10 pointer-events-none"
              style={{ boxShadow: "0 0 5px rgba(60,255,197,0.9)" }}
              animate={{ left: [`${LABEL_COL}%`, "100%"] }}
              transition={{
                duration: DURATION,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <div
                className="absolute -top-1 -translate-x-1/2 w-0 h-0"
                style={{
                  borderLeft: "3px solid transparent",
                  borderRight: "3px solid transparent",
                  borderTop: "4px solid #3CFFC5",
                }}
                aria-hidden="true"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * TimeCode — mm:ss counter that loops with the scene. Client-only so
 * the mount timestamp becomes the loop's zero point.
 */
function TimeCode({ duration }: { duration: number }) {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTick((n) => n + 1), 1000);
    return () => clearInterval(id);
  }, []);
  const secs = tick % duration;
  const mm = Math.floor(secs / 60)
    .toString()
    .padStart(1, "0");
  const ss = (secs % 60).toString().padStart(2, "0");
  const total = `0:${duration.toString().padStart(2, "0")}`;
  return (
    <span className="text-[6px] font-mono text-white/60 tabular-nums">
      {mm}:{ss} / {total}
    </span>
  );
}

/**
 * DigitalAnimation — v6
 *
 * Much simpler now: a clean browser window that never leaves, with a
 * real-looking page scrolling inside on an infinite loop. No code
 * editor phase, no Run button, no cursor theatre — just a live product
 * that feels alive. The content has a hero, a card grid, a stats
 * band, and a testimonial row, duplicated so the scroll seams are
 * invisible.
 */
function DigitalAnimation() {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-brand-blue-soft/30 via-surface-raised to-surface-low overflow-hidden">
      {/* Soft dotted background */}
      <div
        className="absolute inset-0 opacity-[0.28] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(0,41,214,0.1) 1px, transparent 1px)",
          backgroundSize: "13px 13px",
        }}
        aria-hidden="true"
      />

      {/* Browser window — sits below the corner label, fills the card */}
      <div
        className="absolute start-3 end-3 top-12 bottom-3 rounded-[8px] bg-white border border-black/[0.08] shadow-[0_14px_32px_-10px_rgba(0,41,214,0.16)] overflow-hidden flex flex-col"
        style={{ direction: "ltr" }}
      >
        {/* Chrome */}
        <div className="flex items-center gap-1 px-2 py-1.5 bg-surface-low border-b border-black/[0.06] shrink-0">
          <span className="w-[5px] h-[5px] rounded-full bg-[#FF5F57]" />
          <span className="w-[5px] h-[5px] rounded-full bg-[#FEBC2E]" />
          <span className="w-[5px] h-[5px] rounded-full bg-[#28C840]" />
          <div className="flex-1 mx-2 h-[11px] rounded-sm bg-white border border-black/[0.05] flex items-center px-1.5 gap-1">
            <span className="relative flex w-1 h-1 shrink-0" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-60 animate-ping" />
              <span className="relative inline-flex rounded-full h-1 w-1 bg-brand-green" />
            </span>
            <span className="text-[6px] font-mono text-ink-whisper">studio.com</span>
          </div>
        </div>

        {/* Scrolling page content — duplicated for seamless loop */}
        <div className="relative flex-1 overflow-hidden">
          <motion.div
            className="absolute inset-x-0 top-0"
            animate={{ y: ["0%", "-50%"] }}
            transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
          >
            {[0, 1].map((loop) => (
              <div key={loop} className="p-2 space-y-3">
                {/* § Hero */}
                <section>
                  <div className="h-1 w-6 bg-brand-blue rounded-full mb-1.5" />
                  <div className="h-2 w-full bg-ink rounded-sm mb-0.5" />
                  <div className="h-2 w-3/5 bg-brand-blue rounded-sm mb-1.5" />
                  <div className="h-[3px] w-5/6 bg-ink/20 rounded-sm mb-0.5" />
                  <div className="h-[3px] w-2/3 bg-ink/20 rounded-sm mb-2" />
                  <div className="flex gap-1">
                    <div className="h-3 w-12 bg-brand-blue rounded-full" />
                    <div className="h-3 w-8 rounded-full border border-ink/20 bg-white" />
                  </div>
                </section>

                {/* § Feature card grid */}
                <section>
                  <div className="h-1 w-5 bg-brand-green-dim rounded-full mb-1.5" />
                  <div className="h-1.5 w-2/3 bg-ink rounded-sm mb-1.5" />
                  <div className="grid grid-cols-3 gap-1">
                    {[0, 1, 2].map((i) => (
                      <div
                        key={i}
                        className="aspect-[3/4] rounded-[3px] bg-gradient-to-br from-brand-blue/25 to-brand-blue/5"
                      >
                        <div className="h-1 w-3/4 bg-white/40 rounded-sm mx-auto mt-[55%]" />
                      </div>
                    ))}
                  </div>
                </section>

                {/* § Stats band */}
                <section className="bg-ink rounded-[4px] p-2">
                  <div className="grid grid-cols-3 gap-1.5 text-white">
                    {["10+", "95%", "24h"].map((n, i) => (
                      <div key={i} className={i < 2 ? "border-e border-white/15 pe-1.5" : ""}>
                        <div className="font-lyon font-bold text-[10px] leading-none mb-1">{n}</div>
                        <div className="h-[2px] w-3/4 bg-brand-green/60 rounded-full" />
                      </div>
                    ))}
                  </div>
                </section>

                {/* § Quote / pull-text */}
                <section>
                  <div className="h-1 w-5 bg-brand-blue rounded-full mb-1.5" />
                  <div className="h-[3px] w-full bg-ink/20 rounded-sm mb-0.5" />
                  <div className="h-[3px] w-11/12 bg-ink/20 rounded-sm mb-0.5" />
                  <div className="h-[3px] w-2/3 bg-ink/20 rounded-sm" />
                </section>

                {/* § Footer */}
                <section className="pt-1.5 border-t border-black/[0.06]">
                  <div className="flex items-center justify-between">
                    <div className="h-1.5 w-6 bg-ink rounded-sm" />
                    <div className="flex gap-1">
                      <div className="w-1 h-1 rounded-full bg-ink/30" />
                      <div className="w-1 h-1 rounded-full bg-ink/30" />
                      <div className="w-1 h-1 rounded-full bg-ink/30" />
                    </div>
                  </div>
                </section>
              </div>
            ))}
          </motion.div>

          {/* Top/bottom fade masks so the scroll seam reads as a real scroll */}
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-4 bg-gradient-to-b from-white to-transparent z-10"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-4 bg-gradient-to-t from-white to-transparent z-10"
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  );
}
