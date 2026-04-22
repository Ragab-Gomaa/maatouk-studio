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
        className="absolute top-[32%] start-0 w-[65%] aspect-square rounded-[20px] overflow-hidden studio-card bg-ink"
      >
        <CornerLabel text={t("Motion Graphics", "الموشن جرافيك")} tone="dark" />
        <MotionAnimation />
      </motion.div>

      {/* ── Card 3 — Digital (bottom, nudged visually leftward) ── */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.7 }}
        className="absolute bottom-0 end-0 w-[65%] aspect-square rounded-[20px] overflow-hidden studio-card -translate-x-[9%]"
      >
        <CornerLabel text={t("Digital", "المنتجات الرقمية")} tone="light" />
        <DigitalAnimation />
      </motion.div>

      {/* Floating signature diamond */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1.0, type: "spring" }}
        className="absolute top-[47%] start-[47%] w-2.5 h-2.5 rotate-45 bg-brand-green shadow-[0_6px_14px_-4px_rgba(60,255,197,0.7)] z-20"
        aria-hidden="true"
      />
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
 * BrandingAnimation — an editorial brand-system card. Reads as a page
 * from a brand book: a type specimen of the "M" with cap/baseline
 * guides and anchor callouts, a wordmark lockup (diamond + Maatouk)
 * underneath, and the brand palette as a row of swatches at the
 * bottom. Loops every 9s on the full brand-blue canvas.
 */
function BrandingAnimation() {
  const DURATION = 9;

  return (
    <div
      className="absolute inset-0 bg-brand-blue overflow-hidden flex flex-col"
      style={{ direction: "ltr" }}
    >
      {/* Breathing green radial wash */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: [
            "radial-gradient(circle at 50% 45%, rgba(60,255,197,0.1) 0%, transparent 60%)",
            "radial-gradient(circle at 50% 45%, rgba(60,255,197,0.22) 0%, transparent 55%)",
            "radial-gradient(circle at 50% 45%, rgba(60,255,197,0.1) 0%, transparent 60%)",
          ],
        }}
        transition={{ duration: DURATION, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      />

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.12] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.95) 0.6px, transparent 0.6px)",
          backgroundSize: "13px 13px",
        }}
        aria-hidden="true"
      />

      {/* Brand-kit pill top-right */}
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

      {/* Main — typography specimen / wordmark lockup / palette stack */}
      <div className="relative flex-1 flex flex-col pt-11 pb-3 px-3 gap-1.5">
        {/* Typography specimen: big M with construction guides */}
        <div className="relative flex-1 min-h-0 flex items-center justify-center">
          <svg
            viewBox="0 0 100 68"
            className="w-full h-full"
            preserveAspectRatio="xMidYMid meet"
            aria-hidden="true"
          >
            {/* Cap / baseline guides */}
            <motion.g
              stroke="white"
              strokeWidth="0.3"
              strokeDasharray="1.5 1.5"
              fill="none"
              animate={{ opacity: [0, 0.4, 0.4, 0] }}
              transition={{
                duration: DURATION,
                times: [0, 0.08, 0.82, 0.95],
                repeat: Infinity,
              }}
            >
              <line x1="6" y1="14" x2="94" y2="14" />
              <line x1="6" y1="55" x2="94" y2="55" />
            </motion.g>

            {/* Guide labels in brand-green */}
            <motion.g
              fill="#3CFFC5"
              style={{
                fontFamily: "monospace",
                fontSize: "2.6px",
                letterSpacing: "0.08em",
              }}
              animate={{ opacity: [0, 1, 1, 0] }}
              transition={{
                duration: DURATION,
                times: [0.03, 0.13, 0.82, 0.95],
                repeat: Infinity,
              }}
            >
              <text x="4" y="13">CAP</text>
              <text x="4" y="62">BASE</text>
            </motion.g>

            {/* Measurement ticks at the top */}
            <motion.g
              stroke="#3CFFC5"
              strokeWidth="0.3"
              animate={{ opacity: [0, 0.6, 0.6, 0] }}
              transition={{
                duration: DURATION,
                times: [0.08, 0.18, 0.82, 0.95],
                repeat: Infinity,
              }}
            >
              <line x1="26" y1="11" x2="26" y2="15" />
              <line x1="74" y1="11" x2="74" y2="15" />
              <line x1="50" y1="9" x2="50" y2="14" />
            </motion.g>

            {/* The "M" — hero of the specimen */}
            <motion.text
              x="50"
              y="52"
              textAnchor="middle"
              fill="white"
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "48px",
                fontWeight: "700",
                letterSpacing: "-0.03em",
              }}
              animate={{
                opacity: [0, 0, 1, 1, 0.35],
                y: [54, 54, 52, 52, 52],
              }}
              transition={{
                duration: DURATION,
                times: [0, 0.18, 0.32, 0.82, 0.95],
                repeat: Infinity,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              M
            </motion.text>

            {/* Anchor callouts at key letter vertices */}
            {[
              { x: 26, y: 14, t: 0.2 },
              { x: 74, y: 14, t: 0.22 },
              { x: 50, y: 37, t: 0.24 },
              { x: 26, y: 55, t: 0.26 },
              { x: 74, y: 55, t: 0.28 },
            ].map((p, i) => (
              <motion.circle
                key={i}
                cx={p.x}
                cy={p.y}
                r="1"
                fill="#3CFFC5"
                animate={{ opacity: [0, 1, 1, 0], scale: [0, 1.4, 1, 0] }}
                transition={{
                  duration: DURATION,
                  times: [p.t, p.t + 0.03, 0.8, 0.92],
                  repeat: Infinity,
                }}
                style={{ transformOrigin: `${p.x}px ${p.y}px` }}
              />
            ))}
          </svg>
        </div>

        {/* Wordmark lockup — diamond + Maatouk */}
        <motion.div
          className="shrink-0 flex items-center justify-center gap-2"
          animate={{ opacity: [0, 0, 1, 1, 0] }}
          transition={{
            duration: DURATION,
            times: [0, 0.4, 0.5, 0.85, 0.95],
            repeat: Infinity,
          }}
        >
          <span
            className="w-[7px] h-[7px] rotate-45 bg-white"
            style={{ boxShadow: "0 0 6px rgba(60,255,197,0.5)" }}
            aria-hidden="true"
          />
          <span className="text-[8px] font-lyon font-bold tracking-[0.3em] text-white uppercase">
            Maatouk
          </span>
        </motion.div>

        {/* Brand palette — 4 swatches that pop in sequence */}
        <motion.div
          className="shrink-0 flex items-center justify-center gap-1.5"
          animate={{ opacity: [0, 0, 1, 1, 0] }}
          transition={{
            duration: DURATION,
            times: [0, 0.52, 0.62, 0.85, 0.95],
            repeat: Infinity,
          }}
        >
          {["bg-brand-blue", "bg-brand-green", "bg-white", "bg-ink"].map(
            (cls, i) => (
              <motion.span
                key={i}
                className={`w-[18px] h-[18px] rounded-[2px] ring-1 ring-white/35 ${cls}`}
                animate={{ scale: [0, 0, 1.25, 1, 1, 0.92] }}
                transition={{
                  duration: DURATION,
                  times: [
                    0,
                    0.55 + i * 0.02,
                    0.62 + i * 0.02,
                    0.68 + i * 0.02,
                    0.85,
                    0.95,
                  ],
                  repeat: Infinity,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{ transformOrigin: "center" }}
                aria-hidden="true"
              />
            )
          )}
        </motion.div>
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

  // Layers with keyframe positions (0..1 along timeline)
  const layers: { name: string; color: string; keys: number[] }[] = [
    { name: "Shape", color: "#3CFFC5", keys: [0.05, 0.3, 0.55, 0.8] },
    { name: "Scale", color: "#0029D6", keys: [0.15, 0.42, 0.7, 0.92] },
    { name: "Rotate", color: "#3CFFC5", keys: [0.08, 0.35, 0.6, 0.86] },
    { name: "Opacity", color: "#0029D6", keys: [0.22, 0.5, 0.78] },
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

        {/* Preview thumbnail + transport controls */}
        <div className="shrink-0 flex items-stretch gap-1.5 p-1.5 border-b border-white/[0.06]">
          {/* Mini preview */}
          <div className="relative w-[36%] aspect-video rounded-[3px] bg-black overflow-hidden border border-white/[0.06]">
            <motion.div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4"
              animate={{
                rotate: [0, 90, 180, 270, 360],
                borderRadius: ["3px", "50%", "3px", "50%", "3px"],
                backgroundColor: [
                  "#3CFFC5",
                  "#ffffff",
                  "#0029D6",
                  "#ffffff",
                  "#3CFFC5",
                ],
              }}
              transition={{
                duration: DURATION,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{ boxShadow: "0 2px 10px rgba(60,255,197,0.5)" }}
            />
            {/* Corner brackets on preview */}
            {[
              "top-0.5 left-0.5 border-t border-l",
              "top-0.5 right-0.5 border-t border-r",
              "bottom-0.5 left-0.5 border-b border-l",
              "bottom-0.5 right-0.5 border-b border-r",
            ].map((cls, i) => (
              <div
                key={i}
                className={`absolute w-1 h-1 border-white/30 ${cls}`}
                aria-hidden="true"
              />
            ))}
          </div>

          {/* Transport + meta */}
          <div className="flex-1 flex flex-col justify-between py-0.5">
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
            <div className="flex items-center justify-between text-[5.5px] font-mono text-white/45 tabular-nums">
              <span>1920×1080</span>
              <span>24fps</span>
            </div>
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
