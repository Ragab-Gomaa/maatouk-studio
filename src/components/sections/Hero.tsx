"use client";

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
        className="absolute top-0 end-0 w-[65%] aspect-square rounded-[20px] overflow-hidden studio-card"
      >
        <CornerLabel text={t("Branding", "الهوية البصرية")} tone="blue" />
        <BrandingAnimation />
      </motion.div>

      {/* ── Card 2 — Motion (middle, aligned to start) ── */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="absolute top-[32%] start-0 w-[65%] aspect-square rounded-[20px] overflow-hidden studio-card bg-ink"
      >
        <CornerLabel text={t("Motion", "تصميم الحركة")} tone="dark" />
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
  tone: "blue" | "dark" | "light";
}) {
  const palette = {
    blue: "bg-brand-blue-soft text-brand-blue",
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

function BrandingAnimation() {
  return (
    <div className="absolute inset-0 bg-brand-blue-soft/50">
      <svg viewBox="0 0 200 200" className="w-full h-full" aria-hidden="true">
        <line x1="30" y1="100" x2="170" y2="100" stroke="rgba(0,41,214,0.08)" strokeWidth="0.5" />
        <line x1="100" y1="30" x2="100" y2="170" stroke="rgba(0,41,214,0.08)" strokeWidth="0.5" />

        <motion.circle
          cx="100" cy="100" r="42"
          stroke="#0029D6" strokeWidth="6" strokeLinecap="round" fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 1, 0] }}
          transition={{ duration: 5, times: [0, 0.55, 0.75, 1], repeat: Infinity, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: "100px 100px", rotate: "-90deg" }}
        />

        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 5, repeat: Infinity, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: "100px 100px" }}
        >
          <g transform="translate(100 58)">
            <circle cx="0" cy="0" r="7" fill="#0029D6" />
            <circle cx="0" cy="0" r="2.5" fill="#3CFFC5" />
          </g>
        </motion.g>

        <g fill="#0029D6" opacity="0.25">
          <rect x="28" y="28" width="4" height="1" />
          <rect x="28" y="28" width="1" height="4" />
          <rect x="169" y="28" width="4" height="1" />
          <rect x="172" y="28" width="1" height="4" />
          <rect x="28" y="172" width="4" height="1" />
          <rect x="28" y="169" width="1" height="4" />
          <rect x="169" y="172" width="4" height="1" />
          <rect x="172" y="169" width="1" height="4" />
        </g>
      </svg>
    </div>
  );
}

function MotionAnimation() {
  return (
    <div className="absolute inset-0 bg-ink overflow-hidden">
      {[0, 1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20"
          initial={{ width: 40, height: 40, opacity: 0 }}
          animate={{ width: 220, height: 220, opacity: [0, 0.55, 0] }}
          transition={{ duration: 3.4, delay: i * 0.85, repeat: Infinity, ease: "easeOut" }}
        />
      ))}

      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] h-[150px]"
        animate={{ rotate: 360 }}
        transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-brand-green shadow-[0_0_10px_rgba(60,255,197,0.6)]" />
      </motion.div>

      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          animate={{ scale: [0.95, 1.05, 0.95] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
          className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-[0_8px_24px_-6px_rgba(60,255,197,0.5)]"
        >
          <svg viewBox="0 0 24 24" className="w-4 h-4 text-ink ml-0.5" aria-hidden="true">
            <polygon points="7,4 20,12 7,20" fill="currentColor" />
          </svg>
        </motion.div>
      </div>

      {/* Waveform along the bottom */}
      <div className="absolute bottom-3 left-3 right-3 flex items-end gap-0.5 h-3">
        {[0.3, 0.7, 0.5, 0.9, 0.45, 0.75, 0.6, 0.85, 0.35, 0.65, 0.5, 0.8].map((h, i) => (
          <motion.span
            key={i}
            className="flex-1 bg-white/30 rounded-full"
            animate={{ height: [`${h * 60}%`, `${(1 - h) * 60 + 20}%`, `${h * 60}%`] }}
            transition={{ duration: 1.5 + i * 0.1, repeat: Infinity, ease: "easeInOut", delay: i * 0.08 }}
          />
        ))}
      </div>
    </div>
  );
}

/**
 * DigitalAnimation — v4
 *
 * Narrative: a code editor opens. Short, readable JSX types in line by
 * line. A prominent Run button pulses and is pressed. A "Compiling…"
 * strip flashes. The editor cross-fades into a browser window which
 * builds its own interior. A cursor clicks the primary CTA and a
 * "Shipped" badge confirms the deploy.
 *
 * 9s loop — slow enough to actually read the code.
 */
function DigitalAnimation() {
  const DURATION = 9;

  // Keyframe times (fraction of DURATION)
  const t = {
    editorIn: 0.03,
    line1: 0.08,
    line2: 0.17,
    line3: 0.26,
    line4: 0.35,
    readHold: 0.50,
    runPulse: 0.53,
    runPressed: 0.58,
    compilingStart: 0.58,
    compilingEnd: 0.66,
    crossfadeStart: 0.64,
    browserIn: 0.68,
    navIn: 0.70,
    headlineIn: 0.74,
    ctaIn: 0.80,
    cardsIn: 0.84,
    cursorMove: 0.89,
    cursorClick: 0.93,
    hold: 0.96,
    fade: 0.98,
  };

  return (
    <div className="absolute inset-0 bg-gradient-to-br from-surface-low via-surface-raised to-surface-low overflow-hidden">
      {/* Dotted grid background */}
      <div
        className="absolute inset-0 opacity-[0.35] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(0,41,214,0.08) 1px, transparent 1px)",
          backgroundSize: "14px 14px",
        }}
        aria-hidden="true"
      />

      {/*
        All overlays sit *below* the corner label by starting at top-12
        (the label is ~26px tall at top-3). This way the label never
        covers the editor/browser chrome or code lines.
      */}

      {/* ══════ CODE EDITOR ══════ */}
      <motion.div
        className="absolute start-3 end-3 top-12 bottom-3 rounded-[6px] bg-ink overflow-hidden shadow-[0_10px_30px_-8px_rgba(0,0,0,0.3)]"
        style={{ direction: "ltr" }}
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{
          opacity: [0, 1, 1, 1, 0],
          scale: [0.97, 1, 1, 1, 0.98],
        }}
        transition={{
          duration: DURATION,
          times: [0, t.editorIn, t.compilingStart, t.crossfadeStart, t.browserIn],
          repeat: Infinity,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {/* Editor chrome */}
        <div className="flex items-center justify-between px-2 py-1 bg-white/[0.05] border-b border-white/10">
          <div className="flex items-center gap-[3px]">
            <span className="w-[5px] h-[5px] rounded-full bg-[#FF5F57]" />
            <span className="w-[5px] h-[5px] rounded-full bg-[#FEBC2E]" />
            <span className="w-[5px] h-[5px] rounded-full bg-[#28C840]" />
          </div>
          <span className="text-[7px] font-mono text-white/40">Hero.jsx</span>
          {/* Run button — prominent, readable */}
          <motion.span
            className="inline-flex items-center gap-1 px-1.5 py-[2px] rounded-[3px] bg-brand-green text-ink text-[7px] font-bold uppercase tracking-wider"
            initial={{ opacity: 0, scale: 1 }}
            animate={{
              opacity: [0, 0, 1, 1, 1, 1, 0],
              scale: [1, 1, 1, 1, 1.15, 0.9, 1],
            }}
            transition={{
              duration: DURATION,
              times: [0, t.editorIn - 0.01, t.editorIn + 0.02, t.runPulse - 0.005, t.runPulse, t.runPressed, t.crossfadeStart],
              repeat: Infinity,
            }}
          >
            <svg width="5" height="5" viewBox="0 0 10 10" fill="currentColor">
              <polygon points="2.5,1 8,5 2.5,9" />
            </svg>
            <span>Run</span>
          </motion.span>
        </div>

        {/* Code body */}
        <div className="flex p-2 font-mono text-[9px] leading-[1.8]">
          {/* Line numbers */}
          <div className="flex flex-col items-end pe-2 text-white/25 select-none font-mono">
            {[1, 2, 3, 4].map((n) => (
              <span key={n}>{n}</span>
            ))}
          </div>

          {/* Code lines */}
          <div className="flex-1">
            {[
              {
                segs: [
                  { c: "white", t: "<" },
                  { c: "#60D4FF", t: "Hero" },
                  { c: "white", t: ">" },
                ],
                time: t.line1,
              },
              {
                segs: [
                  { c: "white", t: "  <" },
                  { c: "#FFD580", t: "h1" },
                  { c: "white", t: ">" },
                  { c: "#3CFFC5", t: "Studio" },
                  { c: "white", t: "</" },
                  { c: "#FFD580", t: "h1" },
                  { c: "white", t: ">" },
                ],
                time: t.line2,
              },
              {
                segs: [
                  { c: "white", t: "  <" },
                  { c: "#FFD580", t: "Button" },
                  { c: "white", t: " />" },
                ],
                time: t.line3,
              },
              {
                segs: [
                  { c: "white", t: "</" },
                  { c: "#60D4FF", t: "Hero" },
                  { c: "white", t: ">" },
                ],
                time: t.line4,
              },
            ].map((line, i) => (
              <motion.div
                key={i}
                className="relative whitespace-pre"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0, 1, 1, 0] }}
                transition={{
                  duration: DURATION,
                  times: [0, line.time - 0.015, line.time, t.crossfadeStart, t.browserIn],
                  repeat: Infinity,
                }}
              >
                {line.segs.map((seg, si) => (
                  <span key={si} style={{ color: seg.c }}>
                    {seg.t}
                  </span>
                ))}
              </motion.div>
            ))}

            {/* Typing cursor (persistent blink) */}
            <motion.span
              className="inline-block w-[4px] h-[10px] bg-white/80 ms-0.5 align-middle"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Running indicator strip */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 flex items-center gap-1 px-2 py-1 bg-brand-green/20 border-t border-brand-green/40 text-[7px] font-bold tracking-wider uppercase text-brand-green"
          initial={{ y: 12, opacity: 0 }}
          animate={{
            y: [12, 12, 0, 0, 12],
            opacity: [0, 0, 1, 1, 0],
          }}
          transition={{
            duration: DURATION,
            times: [0, t.compilingStart - 0.01, t.compilingStart, t.compilingEnd - 0.005, t.compilingEnd],
            repeat: Infinity,
          }}
        >
          <span className="w-1 h-1 rounded-full bg-brand-green animate-pulse" />
          <span>Compiling…</span>
        </motion.div>
      </motion.div>

      {/* ══════ BROWSER ══════ */}
      <motion.div
        className="absolute start-3 end-3 top-12 bottom-3 rounded-[6px] bg-white border border-black/[0.08] shadow-[0_10px_30px_-8px_rgba(0,41,214,0.15)] overflow-hidden"
        style={{ direction: "ltr" }}
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{
          opacity: [0, 0, 1, 1, 0],
          scale: [0.96, 0.96, 1, 1, 0.96],
        }}
        transition={{
          duration: DURATION,
          times: [0, t.crossfadeStart, t.browserIn, t.fade, 1],
          repeat: Infinity,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {/* Chrome */}
        <div className="flex items-center gap-1 px-2 py-1 bg-surface-low border-b border-black/[0.06]">
          <span className="w-[5px] h-[5px] rounded-full bg-[#FF5F57]" />
          <span className="w-[5px] h-[5px] rounded-full bg-[#FEBC2E]" />
          <span className="w-[5px] h-[5px] rounded-full bg-[#28C840]" />
          <div className="flex-1 mx-2 h-[11px] rounded-sm bg-white border border-black/[0.05] flex items-center px-1.5 gap-1">
            <span className="w-1 h-1 rounded-full bg-brand-green" />
            <span className="text-[6px] font-mono text-ink-whisper">studio.com</span>
          </div>
        </div>

        {/* Content */}
        <div className="relative h-full p-2">
          {/* Nav */}
          <motion.div
            className="flex items-center justify-between mb-2.5"
            initial={{ opacity: 0, y: -3 }}
            animate={{
              opacity: [0, 0, 1, 1, 0],
              y: [-3, -3, 0, 0, -3],
            }}
            transition={{
              duration: DURATION,
              times: [0, t.navIn - 0.01, t.navIn, t.fade, 1],
              repeat: Infinity,
            }}
          >
            <div className="w-5 h-1.5 bg-ink rounded-sm" />
            <div className="flex gap-1">
              <span className="w-3 h-1 bg-ink/25 rounded-sm" />
              <span className="w-3 h-1 bg-ink/25 rounded-sm" />
              <span className="w-3 h-1 bg-ink/25 rounded-sm" />
            </div>
          </motion.div>

          {/* Headline */}
          <div className="space-y-0.5 mb-2">
            <motion.div
              className="h-1.5 bg-ink rounded-sm"
              initial={{ width: 0 }}
              animate={{ width: ["0%", "0%", "80%", "80%", "0%"] }}
              transition={{
                duration: DURATION,
                times: [0, t.headlineIn - 0.01, t.headlineIn + 0.02, t.fade, 1],
                repeat: Infinity,
                ease: [0.22, 1, 0.36, 1],
              }}
            />
            <motion.div
              className="h-1.5 bg-brand-blue rounded-sm"
              initial={{ width: 0 }}
              animate={{ width: ["0%", "0%", "55%", "55%", "0%"] }}
              transition={{
                duration: DURATION,
                times: [0, t.headlineIn + 0.01, t.headlineIn + 0.03, t.fade, 1],
                repeat: Infinity,
                ease: [0.22, 1, 0.36, 1],
              }}
            />
          </div>

          {/* Subtext */}
          <motion.div
            className="space-y-0.5 mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0, 1, 1, 0] }}
            transition={{
              duration: DURATION,
              times: [0, t.headlineIn + 0.02, t.headlineIn + 0.04, t.fade, 1],
              repeat: Infinity,
            }}
          >
            <div className="h-[3px] w-full bg-ink/15 rounded-sm" />
            <div className="h-[3px] w-2/3 bg-ink/15 rounded-sm" />
          </motion.div>

          {/* CTAs */}
          <div className="flex gap-1 mb-2">
            <motion.div
              className="relative h-[11px] bg-brand-blue rounded-full overflow-visible"
              initial={{ opacity: 0, width: 0 }}
              animate={{
                opacity: [0, 0, 1, 1, 0],
                width: ["0px", "0px", "30px", "30px", "0px"],
              }}
              transition={{
                duration: DURATION,
                times: [0, t.ctaIn - 0.01, t.ctaIn + 0.02, t.fade, 1],
                repeat: Infinity,
              }}
            >
              <motion.span
                className="absolute inset-0 rounded-full bg-brand-green/30"
                initial={{ opacity: 0, scale: 1 }}
                animate={{
                  opacity: [0, 0, 0, 0.7, 0, 0],
                  scale: [1, 1, 1, 1.6, 2, 2],
                }}
                transition={{
                  duration: DURATION,
                  times: [0, t.cursorClick - 0.005, t.cursorClick, t.cursorClick + 0.01, t.cursorClick + 0.05, 1],
                  repeat: Infinity,
                }}
              />
            </motion.div>
            <motion.div
              className="h-[11px] bg-ink/10 rounded-full"
              initial={{ opacity: 0, width: 0 }}
              animate={{
                opacity: [0, 0, 1, 1, 0],
                width: ["0px", "0px", "20px", "20px", "0px"],
              }}
              transition={{
                duration: DURATION,
                times: [0, t.ctaIn, t.ctaIn + 0.03, t.fade, 1],
                repeat: Infinity,
              }}
            />
          </div>

          {/* Cards */}
          <div className="grid grid-cols-3 gap-1">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="aspect-[4/3] bg-gradient-to-br from-brand-blue/20 to-brand-blue/5 rounded-sm"
                initial={{ opacity: 0, y: 3 }}
                animate={{
                  opacity: [0, 0, 1, 1, 0],
                  y: [3, 3, 0, 0, 3],
                }}
                transition={{
                  duration: DURATION,
                  times: [0, t.cardsIn + i * 0.01, t.cardsIn + i * 0.01 + 0.02, t.fade, 1],
                  repeat: Infinity,
                }}
              />
            ))}
          </div>
        </div>
      </motion.div>

      {/* ── Animated cursor — during browser phase ── */}
      <motion.div
        className="absolute z-30"
        style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.15))" }}
        initial={{ opacity: 0, left: "45%", top: "70%" }}
        animate={{
          opacity: [0, 0, 0, 1, 1, 1, 0, 0],
          left: ["45%", "45%", "45%", "45%", "20%", "20%", "20%", "20%"],
          top: ["70%", "70%", "70%", "70%", "52%", "52%", "52%", "52%"],
          scale: [1, 1, 1, 1, 1, 0.85, 0.85, 0.85],
        }}
        transition={{
          duration: DURATION,
          times: [0, t.browserIn, t.cursorMove - 0.03, t.cursorMove, t.cursorClick - 0.01, t.cursorClick + 0.005, t.hold, 1],
          repeat: Infinity,
          ease: [0.22, 1, 0.36, 1],
        }}
        aria-hidden="true"
      >
        <svg width="14" height="14" viewBox="0 0 18 18" fill="none">
          <path
            d="M2 2 L2 13 L5.5 10 L7.8 14.5 L10 13.2 L7.8 8.8 L12.5 8.8 Z"
            fill="#ffffff"
            stroke="#0029D6"
            strokeWidth="1.2"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>

      {/* ── "Shipped" badge ── */}
      <motion.div
        className="absolute bottom-[4%] start-[6%] inline-flex items-center gap-1 px-2 py-1 rounded-full bg-brand-green text-ink shadow-md z-30"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: [0, 0, 0, 0, 1, 1, 0, 0],
          scale: [0.8, 0.8, 0.8, 0.8, 1, 1, 0.9, 0.8],
        }}
        transition={{
          duration: DURATION,
          times: [0, 0.3, t.cursorClick - 0.01, t.cursorClick + 0.01, t.cursorClick + 0.02, t.hold, t.fade, 1],
          repeat: Infinity,
          ease: [0.22, 1, 0.36, 1],
        }}
        aria-hidden="true"
      >
        <svg width="8" height="8" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2.5 6.5l2.5 2.5 5-6" />
        </svg>
        <span className="text-[7px] font-bold uppercase tracking-wider">Shipped</span>
      </motion.div>
    </div>
  );
}
