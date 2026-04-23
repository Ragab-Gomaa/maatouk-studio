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

  const features: { value: string; label: { en: string; ar: string } }[] = [
    { value: "10+", label: { en: "Clients served", ar: "عميل" } },
    { value: "15+", label: { en: "Projects delivered", ar: "مشروع مُسلَّم" } },
    { value: "3+", label: { en: "Years of craft", ar: "سنوات من الحرفية" } },
  ];

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
              className="inline-flex items-center gap-2.5 px-4 py-2 bg-surface-raised border border-black/[0.06] rounded-full shadow-sm mb-8"
            >
              <span className="relative flex w-2 h-2" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-50 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-green" />
              </span>
              <span className="text-[12px] text-ink-muted font-medium tracking-[-0.01em]">
                {t(
                  "Now accepting new projects — 2026",
                  "نستقبل مشاريع جديدة — ٢٠٢٦"
                )}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-lyon font-bold tracking-[-0.035em] leading-[0.92] text-[2.75rem] sm:text-[3.75rem] md:text-[5rem] lg:text-[5.75rem] xl:text-[6.5rem] text-ink mb-6"
            >
              {locale === "ar" ? (
                <>
                  <span className="block">علامات تبدأ</span>
                  <span className="block text-brand-blue">بالحركة.</span>
                </>
              ) : (
                <>
                  <span className="block">Brands that</span>
                  <span className="block">
                    <span className="text-brand-blue italic">start </span>
                    moving.
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
                  "A bilingual design studio for brand identities, motion, and digital products.",
                  "استوديو تصميم ثنائي اللغة للهويات البصرية والموشن والمنتجات الرقمية."
                )}
              </span>
              <span className="block mt-1">
                {t(
                  "We design the whole thing, under one roof — from first sketch to shipped product.",
                  "نصمّم العمل بالكامل تحت سقف واحد — من أول رسمة إلى آخر تسليم."
                )}
              </span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="flex flex-wrap items-center gap-3 mb-5 md:mb-6"
            >
              <Button href="/contact" variant="primary" size="lg" withArrow>
                {t("Start a project", "ابدأ مشروعك")}
              </Button>
              <Button href="/work" variant="secondary" size="lg">
                {t("Explore work", "استكشف أعمالنا")}
              </Button>
            </motion.div>

            <motion.dl
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="flex flex-wrap items-baseline gap-5 md:gap-8 pt-4 md:pt-5 border-t border-black/[0.08]"
            >
              {features.map((f, i) => (
                <div key={i} className="flex items-baseline gap-2.5">
                  <dd className="font-lyon text-base md:text-lg font-bold text-brand-blue">
                    {f.value}
                  </dd>
                  <dt className="text-[11px] uppercase tracking-[0.15em] font-medium text-ink-whisper">
                    {t(f.label.en, f.label.ar)}
                  </dt>
                </div>
              ))}
            </motion.dl>
          </div>

          {/* ── Right: Composed Disciplines Mark ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex items-center justify-center"
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
        <CornerLabel text={t("Branding", "الهوية البصرية")} tone="on-blue" />
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
        <CornerLabel text={t("Digital", "المنتجات الرقمية")} tone="light" />
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
  const palette = {
    "on-blue": "bg-white text-brand-blue",
    dark: "bg-white/10 text-white",
    light: "bg-surface-low text-ink-muted",
  }[tone];

  return (
    <div className="absolute top-3 start-3 z-20">
      <span
        className={`pill !py-1 !px-2.5 text-[10px] uppercase tracking-[0.2em] font-semibold ${palette}`}
      >
        {text}
      </span>
    </div>
  );
}

/* ─────────────────── Animations ─────────────────── */

/**
 * BrandingAnimation — an artist's palette with a paintbrush that dips
 * into each color in sequence. Loops every 10s. Flat-illustration
 * style, consistent with the site's clean geometric aesthetic.
 */
function BrandingAnimation() {
  const DURATION = 10;

  // 5 paint dollops on the palette (SVG coords, viewBox 140x110)
  const dollops = [
    { cx: 54, cy: 50, color: "#0029D6" },   // brand blue
    { cx: 73, cy: 44, color: "#3CFFC5" },   // brand green
    { cx: 92, cy: 50, color: "#FFD23F" },   // yellow
    { cx: 62, cy: 70, color: "#FF4A6B" },   // pink
    { cx: 86, cy: 74, color: "#8B5CFF" },   // purple
  ];

  // Brush tip keyframes: one dip per dollop + a rest-above position
  // Brush starts above the palette, then dips each dollop, then rests.
  const restPos = { x: 100, y: 12 };
  const brushKeys = [
    restPos,
    ...dollops.flatMap((d) => [
      { x: d.cx, y: d.cy - 10 }, // hover over
      { x: d.cx, y: d.cy },      // dip
      { x: d.cx, y: d.cy - 10 }, // lift
    ]),
    restPos,
  ];
  const brushX = brushKeys.map((k) => k.x);
  const brushY = brushKeys.map((k) => k.y);

  // Paint-tip color follows whichever dollop the brush is dipping
  const tipColors = [
    "#FFFFFF",
    ...dollops.flatMap((d) => [d.color, d.color, d.color]),
    "#FFFFFF",
  ];

  // Even time distribution over the loop
  const totalKeys = brushKeys.length;
  const brushTimes = brushKeys.map((_, i) => i / (totalKeys - 1));

  return (
    <div
      className="absolute inset-0 bg-brand-blue overflow-hidden"
      style={{ direction: "ltr" }}
    >
      {/* Soft grid background */}
      <div
        className="absolute inset-0 opacity-[0.12] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.9) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.9) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
        aria-hidden="true"
      />

      {/* Breathing green wash */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: [
            "radial-gradient(circle at 50% 55%, rgba(60,255,197,0.08) 0%, transparent 55%)",
            "radial-gradient(circle at 50% 55%, rgba(60,255,197,0.2) 0%, transparent 55%)",
            "radial-gradient(circle at 50% 55%, rgba(60,255,197,0.08) 0%, transparent 55%)",
          ],
        }}
        transition={{ duration: DURATION, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      />

      {/* Top-right kit pill */}
      <motion.div
        className="absolute top-3 end-3 z-20 flex items-center gap-1 px-1.5 py-0.5 rounded-[3px] bg-white/12 backdrop-blur-sm border border-white/25"
        animate={{ opacity: [0, 1, 1, 0.3] }}
        transition={{
          duration: DURATION,
          times: [0, 0.08, 0.88, 0.98],
          repeat: Infinity,
        }}
      >
        <span className="w-[3px] h-[3px] rounded-full bg-brand-green" />
        <span className="text-[6px] font-mono uppercase tracking-[0.2em] text-white font-semibold">
          Brand · 2026
        </span>
      </motion.div>

      {/* Main illustration */}
      <div className="absolute inset-0 flex items-center justify-center pt-7 pb-3 px-3">
        <svg
          viewBox="0 0 140 110"
          className="w-full h-full"
          preserveAspectRatio="xMidYMid meet"
          aria-hidden="true"
        >
          <defs>
            {/* Thumb-hole cutout */}
            <mask id="palette-mask">
              <rect x="0" y="0" width="140" height="110" fill="white" />
              <ellipse cx="32" cy="66" rx="7.5" ry="5.5" fill="black" />
            </mask>
            {/* Soft drop shadow */}
            <filter id="palette-shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur in="SourceAlpha" stdDeviation="1.5" />
              <feOffset dx="0" dy="1.5" result="offsetblur" />
              <feComponentTransfer>
                <feFuncA type="linear" slope="0.35" />
              </feComponentTransfer>
              <feMerge>
                <feMergeNode />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* ─ Palette shape (kidney-bean) ─ */}
          <motion.g
            filter="url(#palette-shadow)"
            initial={false}
            animate={{ opacity: [0, 1, 1, 0], scale: [0.9, 1, 1, 1] }}
            transition={{
              duration: DURATION,
              times: [0, 0.06, 0.96, 1],
              repeat: Infinity,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{ transformOrigin: "70px 60px" }}
          >
            <ellipse
              cx="70"
              cy="62"
              rx="52"
              ry="28"
              fill="#F3E4CC"
              mask="url(#palette-mask)"
            />
            {/* Subtle highlight on palette */}
            <ellipse
              cx="70"
              cy="55"
              rx="42"
              ry="4"
              fill="#FFFFFF"
              opacity="0.3"
            />
            {/* Palette edge shading */}
            <ellipse
              cx="70"
              cy="62"
              rx="52"
              ry="28"
              fill="none"
              stroke="#D9C5A3"
              strokeWidth="0.8"
              mask="url(#palette-mask)"
            />
          </motion.g>

          {/* ─ Paint dollops — pop in sequentially ─ */}
          {dollops.map((d, i) => (
            <motion.g
              key={i}
              initial={false}
              animate={{
                opacity: [0, 0, 1, 1, 0],
                scale: [0, 0, 1.1, 1, 1],
              }}
              transition={{
                duration: DURATION,
                times: [
                  0,
                  0.08 + i * 0.02,
                  0.14 + i * 0.02,
                  0.95,
                  1,
                ],
                repeat: Infinity,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{ transformOrigin: `${d.cx}px ${d.cy}px` }}
            >
              {/* Dollop base — slightly irregular */}
              <ellipse cx={d.cx} cy={d.cy} rx="6.5" ry="5" fill={d.color} />
              {/* Glossy highlight */}
              <ellipse
                cx={d.cx - 1.5}
                cy={d.cy - 1.5}
                rx="2.2"
                ry="1.4"
                fill="#FFFFFF"
                opacity="0.55"
              />
            </motion.g>
          ))}

          {/* ─ Dollop ripple — wobble when brush dips ─ */}
          {dollops.map((d, i) => {
            // Each dollop's dip window in the loop
            const tStart = 1 / (totalKeys - 1) + i * (3 / (totalKeys - 1));
            const tDip = 2 / (totalKeys - 1) + i * (3 / (totalKeys - 1));
            const tEnd = 3 / (totalKeys - 1) + i * (3 / (totalKeys - 1));
            return (
              <motion.circle
                key={`ripple-${i}`}
                cx={d.cx}
                cy={d.cy}
                r="6"
                fill="none"
                stroke={d.color}
                strokeWidth="1"
                initial={false}
                animate={{
                  opacity: [0, 0, 0.6, 0, 0],
                  r: [6, 6, 11, 14, 14],
                }}
                transition={{
                  duration: DURATION,
                  times: [0, tStart, tDip, tEnd, 1],
                  repeat: Infinity,
                  ease: "easeOut",
                }}
              />
            );
          })}

          {/* ─ Paint drip — falls under brush mid-loop ─ */}
          <motion.g
            initial={false}
            animate={{
              opacity: [0, 0, 1, 1, 0, 0],
              y: [0, 0, 0, 8, 14, 14],
            }}
            transition={{
              duration: DURATION,
              times: [0, 0.45, 0.48, 0.58, 0.64, 1],
              repeat: Infinity,
              ease: "easeIn",
            }}
          >
            <circle cx="73" cy="42" r="1.4" fill="#3CFFC5" />
          </motion.g>

          {/* ─ Brush — compound group that travels between dollops ─ */}
          <motion.g
            initial={false}
            animate={{
              x: brushX,
              y: brushY,
              opacity: [0, 1, ...Array(totalKeys - 3).fill(1), 1, 0],
            }}
            transition={{
              duration: DURATION,
              times: brushTimes,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {/* Brush body — rotated so the tip points down-left to the palette */}
            <g transform="rotate(-35)">
              {/* Wooden handle */}
              <rect
                x="-34"
                y="-1.8"
                width="30"
                height="3.6"
                rx="1.2"
                fill="#C69264"
              />
              {/* Handle dark stripe */}
              <rect
                x="-34"
                y="-1.8"
                width="30"
                height="0.8"
                fill="#A67544"
              />
              {/* Handle tail tip */}
              <circle cx="-34" cy="0" r="1.8" fill="#C69264" />
              {/* Silver ferrule */}
              <rect
                x="-4.5"
                y="-2.8"
                width="5"
                height="5.6"
                rx="0.8"
                fill="#C4C8CE"
              />
              <rect
                x="-4.5"
                y="-2.8"
                width="5"
                height="1"
                fill="#E5E8ED"
              />
              <rect
                x="-4.5"
                y="1.8"
                width="5"
                height="1"
                fill="#9AA0A8"
              />
              {/* Bristles — tapered shape */}
              <path
                d="M0.5 -2.2 L8 -1 L8.5 1 L0.5 2.2 Z"
                fill="#F0DCB6"
              />
              {/* Bristle strokes */}
              <line x1="2" y1="-1.6" x2="7.5" y2="-0.6" stroke="#D9C08A" strokeWidth="0.3" />
              <line x1="2" y1="1.6" x2="7.5" y2="0.6" stroke="#D9C08A" strokeWidth="0.3" />
            </g>
            {/* Paint on the tip — color swaps as brush dips different dollops */}
            <motion.circle
              r="2.8"
              cy="0"
              cx="0"
              initial={false}
              animate={{ fill: tipColors }}
              transition={{
                duration: DURATION,
                times: brushTimes,
                repeat: Infinity,
              }}
              style={{
                transform: "translate(4px, 3.5px)",
              }}
            />
          </motion.g>
        </svg>
      </div>
    </div>
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
        <div className="shrink-0 flex items-center justify-between gap-2 px-2 py-1 border-b border-white/[0.06]">
          <div className="flex items-center gap-1.5">
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
          <div className="flex items-center gap-2 text-[5.5px] font-mono text-white/45 tabular-nums">
            <span>1920×1080</span>
            <span className="text-white/20">·</span>
            <span>24fps</span>
          </div>
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
