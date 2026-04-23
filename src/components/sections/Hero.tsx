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
 * BrandingAnimation — an artist's palette with a paintbrush held
 * diagonally over it. The paint tip cycles through 5 dollop colors
 * in sync with each dollop's pulse, and a paint drop falls from the
 * tip mid-loop. Flat-illustration style using positioned divs (no
 * SVG) for reliable rendering. Loops every 10s.
 */
function BrandingAnimation() {
  const DURATION = 10;

  // 5 dollops on the palette (positioned as % of the palette container)
  const dollops = [
    { left: "22%", top: "24%", color: "#0029D6" }, // brand blue
    { left: "42%", top: "14%", color: "#3CFFC5" }, // brand green
    { left: "62%", top: "24%", color: "#FFD23F" }, // yellow
    { left: "32%", top: "56%", color: "#FF4A6B" }, // pink
    { left: "56%", top: "62%", color: "#8B5CFF" }, // purple
  ];

  // Paint-tip color cycles — holds each color for 1/5 of the loop
  const tipColorKeys = dollops.map((d) => d.color);
  const tipColorTimes = dollops.map((_, i) => i / dollops.length);

  return (
    <div
      className="absolute inset-0 bg-brand-blue overflow-hidden"
      style={{ direction: "ltr" }}
    >
      {/* Grid background */}
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
            "radial-gradient(circle at 50% 60%, rgba(60,255,197,0.08) 0%, transparent 55%)",
            "radial-gradient(circle at 50% 60%, rgba(60,255,197,0.2) 0%, transparent 55%)",
            "radial-gradient(circle at 50% 60%, rgba(60,255,197,0.08) 0%, transparent 55%)",
          ],
        }}
        transition={{ duration: DURATION, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      />

      {/* Stage — the palette sits in the lower center */}
      <div className="absolute inset-0 flex items-end justify-center pt-8 pb-4 px-3">
        <div className="relative w-[82%] aspect-[5/3]">
          {/* ── Palette oval ── */}
          <div
            className="absolute inset-0 rounded-[50%] bg-[#F3E4CC]"
            style={{
              boxShadow:
                "0 10px 24px rgba(0,0,0,0.22), inset 0 -4px 8px rgba(180,150,100,0.25), inset 0 3px 6px rgba(255,255,255,0.5)",
            }}
          />
          {/* Top highlight on palette */}
          <div
            className="absolute rounded-full bg-white/50 pointer-events-none"
            style={{
              left: "12%",
              top: "6%",
              width: "60%",
              height: "8%",
              filter: "blur(2px)",
            }}
          />
          {/* Thumb hole — matches card bg, looks like a real cutout */}
          <div
            className="absolute rounded-[50%] bg-brand-blue"
            style={{
              left: "6%",
              top: "38%",
              width: "13%",
              height: "22%",
              boxShadow:
                "inset 0 2px 3px rgba(0,0,0,0.4), 0 1px 0 rgba(255,255,255,0.3)",
            }}
          />

          {/* ── Paint dollops ── */}
          {dollops.map((d, i) => (
            <div
              key={`dollop-${i}`}
              className="absolute"
              style={{
                left: d.left,
                top: d.top,
                width: "16%",
                height: "22%",
              }}
            >
              {/* Ripple ring — pulses when tip matches this color */}
              <motion.div
                className="absolute inset-0 rounded-[50%] border"
                style={{ borderColor: d.color }}
                animate={{
                  opacity: [0, 0.7, 0],
                  scale: [1, 1.8, 2.2],
                }}
                transition={{
                  duration: 1.2,
                  delay: (i / dollops.length) * DURATION,
                  repeat: Infinity,
                  repeatDelay: DURATION - 1.2,
                  ease: "easeOut",
                }}
              />
              {/* Dollop base */}
              <motion.div
                className="absolute inset-0 rounded-[50%]"
                style={{
                  backgroundColor: d.color,
                  boxShadow:
                    "0 2px 4px rgba(0,0,0,0.25), inset 1px 2px 2px rgba(255,255,255,0.35)",
                }}
                animate={{
                  scale: [1, 1.18, 1],
                }}
                transition={{
                  duration: 0.8,
                  delay: (i / dollops.length) * DURATION,
                  repeat: Infinity,
                  repeatDelay: DURATION - 0.8,
                  ease: "easeInOut",
                }}
              />
              {/* Glossy highlight */}
              <div
                className="absolute rounded-full bg-white/55 pointer-events-none"
                style={{
                  left: "22%",
                  top: "18%",
                  width: "30%",
                  height: "22%",
                  filter: "blur(0.5px)",
                }}
              />
            </div>
          ))}

          {/* ── Brush — diagonal, static position, over top-right dollop ── */}
          <div
            className="absolute pointer-events-none"
            style={{
              left: "28%",
              top: "-60%",
              width: "80%",
              height: "10%",
              transform: "rotate(35deg)",
              transformOrigin: "left center",
            }}
          >
            {/* Wooden handle */}
            <div
              className="absolute rounded-full"
              style={{
                left: "0%",
                top: "30%",
                width: "60%",
                height: "40%",
                background:
                  "linear-gradient(to bottom, #D4A574 0%, #C69264 40%, #A67544 100%)",
                boxShadow: "0 1px 2px rgba(0,0,0,0.3)",
              }}
            />
            {/* Handle tail cap */}
            <div
              className="absolute rounded-full"
              style={{
                left: "-2%",
                top: "25%",
                width: "6%",
                height: "50%",
                background: "#8F5F38",
              }}
            />
            {/* Silver ferrule */}
            <div
              className="absolute rounded-[2px]"
              style={{
                left: "58%",
                top: "18%",
                width: "14%",
                height: "64%",
                background:
                  "linear-gradient(to bottom, #E5E8ED 0%, #C4C8CE 50%, #9AA0A8 100%)",
                boxShadow: "0 1px 2px rgba(0,0,0,0.25)",
              }}
            />
            {/* Ferrule crimp lines */}
            <div
              className="absolute"
              style={{
                left: "60%",
                top: "22%",
                width: "10%",
                height: "1px",
                background: "#6B7078",
              }}
            />
            <div
              className="absolute"
              style={{
                left: "60%",
                top: "75%",
                width: "10%",
                height: "1px",
                background: "#6B7078",
              }}
            />
            {/* Bristles — tapered */}
            <div
              className="absolute"
              style={{
                left: "72%",
                top: "10%",
                width: "22%",
                height: "80%",
                background:
                  "linear-gradient(to right, #F0DCB6 0%, #E5CFA3 60%, #D9C08A 100%)",
                clipPath: "polygon(0% 0%, 100% 30%, 100% 70%, 0% 100%)",
              }}
            />
            {/* Paint tip — color cycles through dollop colors */}
            <motion.div
              className="absolute rounded-full"
              style={{
                left: "90%",
                top: "18%",
                width: "14%",
                height: "64%",
                filter: "drop-shadow(0 2px 3px rgba(0,0,0,0.3))",
              }}
              animate={{
                backgroundColor: [...tipColorKeys, tipColorKeys[0]],
              }}
              transition={{
                duration: DURATION,
                times: [...tipColorTimes, 1],
                repeat: Infinity,
              }}
            />
          </div>

          {/* ── Paint drop — falls from brush tip periodically ── */}
          <motion.div
            className="absolute rounded-full"
            style={{
              left: "75%",
              top: "-18%",
              width: "4%",
              height: "6%",
            }}
            animate={{
              backgroundColor: [...tipColorKeys, tipColorKeys[0]],
              opacity: [0, 0, 1, 1, 0, 0],
              y: [0, 0, 0, 14, 24, 24],
            }}
            transition={{
              duration: DURATION,
              times: [0, 0.45, 0.5, 0.62, 0.7, 1],
              repeat: Infinity,
              ease: "easeIn",
            }}
          />
        </div>
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
        <div className="shrink-0 flex items-center justify-between gap-2 px-2.5 py-1.5 border-b border-white/[0.06]">
          <div className="flex items-center gap-2">
            {/* Stop */}
            <span className="w-[9px] h-[9px] bg-white/70 rounded-[1.5px]" />
            {/* Play — brand-green triangle, glowing */}
            <motion.span
              className="inline-block"
              animate={{ opacity: [1, 0.7, 1], scale: [1, 1.08, 1] }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                width: 0,
                height: 0,
                borderLeft: "12px solid #3CFFC5",
                borderTop: "7.5px solid transparent",
                borderBottom: "7.5px solid transparent",
                filter: "drop-shadow(0 0 6px rgba(60,255,197,0.75))",
              }}
            />
            {/* Pause */}
            <span className="flex items-center gap-[2.5px]">
              <span className="w-[2.5px] h-[10px] bg-white/70 rounded-[1px]" />
              <span className="w-[2.5px] h-[10px] bg-white/70 rounded-[1px]" />
            </span>
          </div>
          <div className="flex items-center gap-2 text-[6.5px] font-mono text-white/50 tabular-nums">
            <span>1920×1080</span>
            <span className="text-white/25">·</span>
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
