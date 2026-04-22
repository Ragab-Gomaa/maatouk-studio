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
    <section className="relative overflow-hidden bg-surface pt-28 md:pt-36 lg:pt-40 pb-20 md:pb-28">
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

      {/* ── Card 3 — Digital (bottom, aligned to end) ── */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.7 }}
        className="absolute bottom-0 end-0 w-[65%] aspect-square rounded-[20px] overflow-hidden studio-card"
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
 * BrandingAnimation — the BrandMark identity reveal on a full brand-blue
 * canvas. Guidelines fade in, construction accents mark the anchor
 * points in brand-green, then the 4 diamond triangles assemble in
 * white, finishing with a wordmark reveal below. Loops every 9s.
 */
function BrandingAnimation() {
  const DURATION = 9;

  return (
    <div
      className="absolute inset-0 bg-brand-blue overflow-hidden"
      style={{ direction: "ltr" }}
    >
      {/* Soft green wash that breathes */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: [
            "radial-gradient(circle at 50% 55%, rgba(60,255,197,0.16) 0%, transparent 60%)",
            "radial-gradient(circle at 50% 55%, rgba(60,255,197,0.28) 0%, transparent 55%)",
            "radial-gradient(circle at 50% 55%, rgba(60,255,197,0.16) 0%, transparent 60%)",
          ],
        }}
        transition={{ duration: DURATION, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      />

      {/* Subtle white dot grid */}
      <div
        className="absolute inset-0 opacity-[0.18] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.95) 0.7px, transparent 0.7px)",
          backgroundSize: "13px 13px",
        }}
        aria-hidden="true"
      />

      {/* Corner construction markers — cinema-slate style */}
      {[
        "top-3 left-3 border-t border-l",
        "top-3 right-3 border-t border-r",
        "bottom-3 left-3 border-b border-l",
        "bottom-3 right-3 border-b border-r",
      ].map((cls, i) => (
        <motion.div
          key={i}
          className={`absolute w-2 h-2 border-brand-green/80 ${cls}`}
          animate={{ opacity: [0, 1, 1, 0.3] }}
          transition={{
            duration: DURATION,
            times: [0, 0.15, 0.82, 1],
            delay: i * 0.05,
            repeat: Infinity,
          }}
          aria-hidden="true"
        />
      ))}

      {/* Mark construction canvas */}
      <div className="absolute inset-0 flex items-center justify-center pt-5 pb-6">
        <svg
          viewBox="0 0 120 120"
          className="w-[58%] h-[58%]"
          aria-hidden="true"
        >
          {/* Guidelines — cross + bounding circle */}
          <motion.g
            stroke="white"
            strokeWidth="0.3"
            fill="none"
            animate={{ opacity: [0, 0.5, 0.5, 0] }}
            transition={{
              duration: DURATION,
              times: [0, 0.15, 0.82, 0.95],
              repeat: Infinity,
            }}
          >
            <line x1="60" y1="14" x2="60" y2="106" strokeDasharray="2 2" />
            <line x1="14" y1="60" x2="106" y2="60" strokeDasharray="2 2" />
            <circle cx="60" cy="60" r="36" strokeDasharray="2 2" />
          </motion.g>

          {/* Anchor points in brand-green */}
          {[
            { x: 60, y: 24 },
            { x: 96, y: 60 },
            { x: 60, y: 96 },
            { x: 24, y: 60 },
          ].map((p, i) => (
            <motion.circle
              key={i}
              cx={p.x}
              cy={p.y}
              r="1.8"
              fill="#3CFFC5"
              animate={{
                opacity: [0, 1, 1, 0],
                scale: [0.3, 1, 1, 0.3],
              }}
              transition={{
                duration: DURATION,
                times: [0.12 + i * 0.03, 0.22 + i * 0.03, 0.8, 0.92],
                repeat: Infinity,
              }}
              style={{ transformOrigin: `${p.x}px ${p.y}px` }}
            />
          ))}

          {/* BrandMark — 4 triangles of the diamond assemble */}
          {[
            { d: "M60 24 L96 60 L60 60 Z", delay: 0.32 },
            { d: "M96 60 L60 96 L60 60 Z", delay: 0.4 },
            { d: "M60 96 L24 60 L60 60 Z", delay: 0.48 },
            { d: "M24 60 L60 24 L60 60 Z", delay: 0.56 },
          ].map((piece, i) => (
            <motion.path
              key={i}
              d={piece.d}
              fill="white"
              animate={{
                opacity: [0, 0, 1, 1, 0.15],
                scale: [0.3, 0.3, 1, 1, 0.85],
              }}
              transition={{
                duration: DURATION,
                times: [0, piece.delay, piece.delay + 0.06, 0.84, 0.96],
                repeat: Infinity,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{ transformOrigin: "60px 60px" }}
            />
          ))}

          {/* Center signature glow — brand-green ping */}
          <motion.circle
            cx="60"
            cy="60"
            r="2.2"
            fill="#3CFFC5"
            animate={{
              opacity: [0, 0, 1, 0.6, 1, 0],
              scale: [0, 0, 1, 1.6, 1, 0],
            }}
            transition={{
              duration: DURATION,
              times: [0, 0.65, 0.7, 0.78, 0.85, 0.95],
              repeat: Infinity,
            }}
            style={{
              transformOrigin: "60px 60px",
              filter: "drop-shadow(0 0 5px rgba(60,255,197,0.9))",
            }}
          />
        </svg>
      </div>

      {/* Wordmark reveal — letters stagger in once the mark is built */}
      <motion.div
        className="absolute inset-x-0 bottom-3.5 flex items-center justify-center gap-[1.5px] text-[9px] font-lyon font-bold tracking-[0.38em] text-white uppercase"
        animate={{ opacity: [0, 0, 1, 1, 0] }}
        transition={{
          duration: DURATION,
          times: [0, 0.68, 0.78, 0.9, 0.97],
          repeat: Infinity,
        }}
      >
        {"Maatouk".split("").map((ch, i) => (
          <motion.span
            key={i}
            animate={{ y: [6, 0], opacity: [0, 1] }}
            transition={{
              duration: 0.32,
              delay: 0.3 + i * 0.045,
              repeat: Infinity,
              repeatDelay: DURATION - 0.32 - 0.045 * 7 - 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="inline-block"
          >
            {ch}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
}

/**
 * MotionAnimation — a compact video player. Inside the screen: a scene
 * that plays on a 8s loop — morphing brand shape, a pulsing halo, a
 * title reveal, plus corner markers like a cinema slate. Below the
 * screen: a progress bar that fills in sync with the scene and a
 * running timecode so the whole thing reads as a live reel.
 */
function MotionAnimation() {
  const DURATION = 8;

  return (
    <div className="absolute inset-0 bg-ink overflow-hidden">
      {/* Player body — fills the card below the corner label */}
      <div
        className="absolute start-3 end-3 top-12 bottom-3 rounded-[8px] bg-black border border-white/[0.1] overflow-hidden flex flex-col shadow-[0_14px_32px_-10px_rgba(60,255,197,0.18)]"
        style={{ direction: "ltr" }}
      >
        {/* Top status strip — Reel marker + live timecode */}
        <div className="relative shrink-0 flex items-center justify-between px-2 py-1 text-[6px] font-mono uppercase tracking-[0.15em] text-white/55 bg-gradient-to-b from-white/[0.04] to-transparent z-10">
          <span className="flex items-center gap-1">
            <span className="w-1 h-1 rounded-full bg-brand-green animate-pulse" />
            <span className="font-semibold">Reel · 2026</span>
          </span>
          <span className="tabular-nums">REC 4K · 24p</span>
        </div>

        {/* Scene — the motion graphic playing inside */}
        <div className="relative flex-1 overflow-hidden">
          {/* Moving color wash background */}
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                "radial-gradient(circle at 30% 40%, rgba(0,41,214,0.45) 0%, transparent 55%)",
                "radial-gradient(circle at 70% 60%, rgba(60,255,197,0.28) 0%, transparent 55%)",
                "radial-gradient(circle at 40% 70%, rgba(0,41,214,0.45) 0%, transparent 55%)",
                "radial-gradient(circle at 30% 40%, rgba(0,41,214,0.45) 0%, transparent 55%)",
              ],
            }}
            transition={{ duration: DURATION, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Halo rings */}
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand-green/30"
              initial={{ width: 24, height: 24, opacity: 0 }}
              animate={{
                width: [24, 150],
                height: [24, 150],
                opacity: [0, 0.55, 0],
              }}
              transition={{
                duration: 3.2,
                delay: i * 1.05,
                repeat: Infinity,
                ease: "easeOut",
              }}
            />
          ))}

          {/* Center morphing shape — the "brand animating" moment */}
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            animate={{ rotate: [0, 45, 90, 180, 270, 360] }}
            transition={{ duration: DURATION, repeat: Infinity, ease: [0.45, 0, 0.55, 1] }}
          >
            <motion.div
              className="w-10 h-10 bg-white"
              animate={{
                borderRadius: ["16px", "50%", "2px", "50%", "16px"],
                backgroundColor: ["#ffffff", "#3CFFC5", "#ffffff", "#0029D6", "#ffffff"],
                scale: [1, 1.12, 0.95, 1.12, 1],
              }}
              transition={{ duration: DURATION, repeat: Infinity, ease: "easeInOut" }}
              style={{ boxShadow: "0 10px 30px -6px rgba(60,255,197,0.5)" }}
            />
          </motion.div>

          {/* Title reveal — letters stagger */}
          <motion.div
            className="absolute inset-x-0 bottom-3 flex items-center justify-center gap-[2px] text-[9px] font-lyon font-bold tracking-[0.35em] text-white/90 uppercase"
            animate={{ opacity: [0, 0, 1, 1, 0] }}
            transition={{
              duration: DURATION,
              times: [0, 0.2, 0.35, 0.85, 0.95],
              repeat: Infinity,
            }}
          >
            {"Studio".split("").map((ch, i) => (
              <motion.span
                key={i}
                animate={{ y: [6, 0], opacity: [0, 1] }}
                transition={{
                  duration: 0.35,
                  delay: 0.3 + i * 0.05,
                  repeat: Infinity,
                  repeatDelay: DURATION - 0.35 - 0.05 * 6 - 0.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="inline-block"
              >
                {ch}
              </motion.span>
            ))}
          </motion.div>

          {/* Cinema-slate corner markers */}
          {[
            "top-1.5 left-1.5 border-t border-l",
            "top-1.5 right-1.5 border-t border-r",
            "bottom-1.5 left-1.5 border-b border-l",
            "bottom-1.5 right-1.5 border-b border-r",
          ].map((cls, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 border-brand-green/70 ${cls}`}
              aria-hidden="true"
            />
          ))}
        </div>

        {/* Bottom controls — timeline, timecode, small control icons */}
        <div className="shrink-0 px-2 pt-1 pb-1.5 bg-gradient-to-t from-black via-black/90 to-black/30 backdrop-blur-sm">
          {/* Progress bar with scrubber */}
          <div className="relative h-[2px] bg-white/10 rounded-full mb-1.5 overflow-visible">
            <motion.div
              className="absolute inset-y-0 start-0 bg-brand-green rounded-full"
              animate={{ width: ["0%", "100%"] }}
              transition={{ duration: DURATION, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 w-[7px] h-[7px] rounded-full bg-brand-green shadow-[0_0_8px_rgba(60,255,197,0.9)]"
              style={{ marginLeft: -3.5 }}
              animate={{ left: ["0%", "100%"] }}
              transition={{ duration: DURATION, repeat: Infinity, ease: "linear" }}
            />
          </div>

          {/* Controls row */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              {/* Pause icon — because it's playing */}
              <div className="flex items-center gap-[1.5px]">
                <span className="w-[2px] h-[7px] bg-white rounded-sm" />
                <span className="w-[2px] h-[7px] bg-white rounded-sm" />
              </div>
              <TimeCode duration={DURATION} />
            </div>
            <div className="flex items-center gap-1.5 text-white/40">
              {/* Volume */}
              <svg width="9" height="9" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
                <path d="M4 4h2l2-2v8l-2-2H4V4z" />
              </svg>
              {/* Fullscreen */}
              <svg width="9" height="9" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
                <path d="M2 4V2h2M10 4V2H8M2 8v2h2M10 8v2H8" />
              </svg>
            </div>
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
