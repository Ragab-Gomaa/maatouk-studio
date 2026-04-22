"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/lib/LocaleContext";
import Button from "@/components/ui/Button";

/**
 * Hero — structured as two stacked bands:
 *
 *   1) Top band: status pill · big headline · lede · CTAs · real-feature row
 *   2) Bottom band: three equal discipline cards, each with an animation
 *      that literally shows the craft (brush drawing, video playing,
 *      code → interface).
 *
 * No featured project. No filler stats. The cards carry the message that the
 * studio does three things, each well.
 */
export default function Hero() {
  const { t, locale } = useTranslation();

  const features: { value: string; label: { en: string; ar: string } }[] = [
    { value: "24h", label: { en: "Response time", ar: "وقت الاستجابة" } },
    { value: t("In-house", "داخلي"), label: { en: "End-to-end delivery", ar: "تسليم شامل" } },
    { value: "AR · EN", label: { en: "First-class bilingual", ar: "ثنائي اللغة" } },
  ];

  return (
    <section className="relative overflow-hidden bg-surface pt-28 md:pt-36 lg:pt-40 pb-14 md:pb-20">
      {/* Ambient color glows */}
      <div
        className="absolute top-[-200px] right-[-150px] w-[500px] h-[500px] rounded-full bg-brand-blue/[0.08] blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] rounded-full bg-brand-green/[0.08] blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1320px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        {/* ──── Top band: text ──── */}
        <div className="max-w-4xl">
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
            className="font-lyon font-bold tracking-[-0.035em] leading-[0.92] text-[3rem] sm:text-[4rem] md:text-[5.5rem] lg:text-[6.5rem] xl:text-[7.5rem] text-ink mb-8"
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
            className="text-base md:text-lg lg:text-xl text-ink-soft max-w-2xl leading-relaxed mb-10"
          >
            {t(
              "A bilingual design studio for brand identities, motion, and digital products. We design the whole thing, under one roof — from first sketch to shipped product.",
              "استوديو تصميم ثنائي اللغة للهويات البصرية والموشن والمنتجات الرقمية. نصمّم العمل بالكامل تحت سقف واحد — من أول رسمة إلى آخر تسليم."
            )}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="flex flex-wrap items-center gap-3 mb-10 md:mb-12"
          >
            <Button href="/contact" variant="primary" size="lg" withArrow>
              {t("Start a project", "ابدأ مشروعك")}
            </Button>
            <Button href="/work" variant="secondary" size="lg">
              {t("Explore work", "استكشف أعمالنا")}
            </Button>
          </motion.div>

          {/* Real feature row — genuine commitments */}
          <motion.dl
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="flex flex-wrap items-baseline gap-5 md:gap-8 pt-6 border-t border-black/[0.08]"
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

        {/* ──── Bottom band: three equal discipline cards ──── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 mt-14 md:mt-20"
        >
          <DisciplineCard
            label={{ en: "Branding", ar: "الهوية البصرية" }}
            caption={{ en: "Identity systems", ar: "أنظمة الهوية" }}
            variant="branding"
          />
          <DisciplineCard
            label={{ en: "Motion", ar: "تصميم الحركة" }}
            caption={{ en: "Brands in motion", ar: "علامات تتحرّك" }}
            variant="motion"
          />
          <DisciplineCard
            label={{ en: "Digital", ar: "المنتجات الرقمية" }}
            caption={{ en: "Shipped products", ar: "منتجات تُطلَق" }}
            variant="digital"
          />
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────── Discipline Cards ─────────────────── */

function DisciplineCard({
  label,
  caption,
  variant,
}: {
  label: { en: string; ar: string };
  caption: { en: string; ar: string };
  variant: "branding" | "motion" | "digital";
}) {
  const { t } = useTranslation();

  return (
    <article className="group relative rounded-[24px] md:rounded-[28px] overflow-hidden studio-card aspect-[4/5] md:aspect-[5/6] flex flex-col">
      {/* Animation canvas */}
      <div className="relative flex-1 overflow-hidden">
        {variant === "branding" && <BrandingAnimation />}
        {variant === "motion" && <MotionAnimation />}
        {variant === "digital" && <DigitalAnimation />}
      </div>

      {/* Label footer */}
      <div className="px-6 md:px-7 py-5 md:py-6 border-t border-black/[0.05] bg-surface-raised">
        <h3 className="font-lyon text-xl md:text-2xl font-bold tracking-[-0.01em] text-ink mb-1">
          {t(label.en, label.ar)}
        </h3>
        <p className="text-sm text-ink-soft">
          {t(caption.en, caption.ar)}
        </p>
      </div>
    </article>
  );
}

/**
 * BrandingAnimation — a brush dot traces a circular path, drawing the
 * stroke behind it. Loops forever.
 */
function BrandingAnimation() {
  return (
    <div className="absolute inset-0 bg-brand-blue-soft/50">
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full"
        aria-hidden="true"
      >
        {/* Baseline guides */}
        <line x1="30" y1="100" x2="170" y2="100" stroke="rgba(0,41,214,0.08)" strokeWidth="0.5" />
        <line x1="100" y1="30" x2="100" y2="170" stroke="rgba(0,41,214,0.08)" strokeWidth="0.5" />

        {/* Circular stroke being drawn */}
        <motion.circle
          cx="100"
          cy="100"
          r="48"
          stroke="#0029D6"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0, rotate: -90 }}
          animate={{ pathLength: [0, 1, 1, 0] }}
          transition={{
            duration: 5,
            times: [0, 0.55, 0.75, 1],
            repeat: Infinity,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{ transformOrigin: "100px 100px", rotate: "-90deg" }}
        />

        {/* Brush head — travels around the circle */}
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 5, repeat: Infinity, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: "100px 100px" }}
        >
          <g transform="translate(100 52)">
            {/* Brush circle */}
            <circle cx="0" cy="0" r="8" fill="#0029D6" />
            <circle cx="0" cy="0" r="3" fill="#3CFFC5" />
          </g>
        </motion.g>

        {/* Corner tick accents — construction marks */}
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

/**
 * MotionAnimation — play button in centre, pulsing rings, orbiting dot,
 * abstract "video playing" feel.
 */
function MotionAnimation() {
  return (
    <div className="absolute inset-0 bg-ink overflow-hidden">
      {/* Pulsing rings */}
      {[0, 1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20"
          initial={{ width: 40, height: 40, opacity: 0 }}
          animate={{
            width: 260,
            height: 260,
            opacity: [0, 0.55, 0],
          }}
          transition={{
            duration: 3.4,
            delay: i * 0.85,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Orbiting dot */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] h-[180px]"
        animate={{ rotate: 360 }}
        transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-brand-green shadow-[0_0_12px_rgba(60,255,197,0.6)]" />
      </motion.div>

      {/* Scanning wave */}
      <svg
        viewBox="0 0 200 200"
        className="absolute inset-0 w-full h-full"
        aria-hidden="true"
      >
        <motion.path
          d="M 20 140 Q 50 125 80 140 T 140 140 T 180 140"
          stroke="rgba(60,255,197,0.35)"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 1, 0] }}
          transition={{
            duration: 4,
            times: [0, 0.5, 0.75, 1],
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </svg>

      {/* Play glyph */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0.95 }}
          animate={{ scale: [0.95, 1.05, 0.95] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
          className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white flex items-center justify-center shadow-[0_10px_30px_-8px_rgba(60,255,197,0.5)]"
        >
          <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-7 md:h-7 text-ink ml-1" aria-hidden="true">
            <polygon points="7,4 20,12 7,20" fill="currentColor" />
          </svg>
        </motion.div>
      </div>

      {/* Timecode strip at top */}
      <div className="absolute top-4 left-5 right-5 flex items-center justify-between text-[10px] font-mono tracking-wider text-white/50">
        <span className="tabular-nums">00:02:14</span>
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse" />
          <span>REC</span>
        </span>
      </div>

      {/* Waveform bars at bottom */}
      <div className="absolute bottom-5 left-5 right-5 flex items-end gap-1 h-5">
        {[0.3, 0.7, 0.5, 0.9, 0.45, 0.75, 0.6, 0.85, 0.35, 0.65, 0.5, 0.8, 0.4].map((h, i) => (
          <motion.span
            key={i}
            className="flex-1 bg-white/35 rounded-full"
            animate={{ height: [`${h * 60}%`, `${(1 - h) * 60 + 20}%`, `${h * 60}%`] }}
            transition={{
              duration: 1.5 + i * 0.1,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.08,
            }}
          />
        ))}
      </div>
    </div>
  );
}

/**
 * DigitalAnimation — code lines type in, then collapse into a live-looking
 * browser window with the result rendered. Cycles.
 */
function DigitalAnimation() {
  return (
    <div className="absolute inset-0 bg-surface-raised overflow-hidden">
      {/* Split: Code on top-left, Browser on bottom-right */}

      {/* Code panel */}
      <div className="absolute top-5 start-5 w-[60%] rounded-lg bg-ink p-3 shadow-lg">
        <div className="flex items-center gap-1 mb-2">
          <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
          <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
          <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
        </div>
        <div className="space-y-1.5 font-mono text-[9px] leading-relaxed">
          {[
            { color: "#60D4FF", text: "<div" },
            { color: "#3CFFC5", text: ".brand" },
            { color: "white", text: ">" },
            { color: "#FFD580", text: "Studio" },
            { color: "white", text: "</div>" },
          ].map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: [0, 0, 1, 1, 0] }}
              transition={{
                duration: 5,
                times: [0, 0.05 + i * 0.08, 0.1 + i * 0.08, 0.7, 0.9],
                repeat: Infinity,
              }}
              style={{ color: line.color }}
            >
              {line.text}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Browser mockup — emerges */}
      <motion.div
        className="absolute bottom-5 end-5 w-[72%] aspect-[5/3] rounded-lg bg-white border border-black/[0.08] shadow-xl overflow-hidden"
        initial={{ opacity: 0, y: 8, scale: 0.96 }}
        animate={{
          opacity: [0, 0, 1, 1, 0],
          y: [8, 8, 0, 0, 8],
          scale: [0.96, 0.96, 1, 1, 0.96],
        }}
        transition={{
          duration: 5,
          times: [0, 0.45, 0.55, 0.85, 1],
          repeat: Infinity,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {/* Chrome */}
        <div className="flex items-center gap-1 px-2.5 py-1.5 bg-surface-low border-b border-black/[0.06]">
          <span className="w-1.5 h-1.5 rounded-full bg-black/15" />
          <span className="w-1.5 h-1.5 rounded-full bg-black/15" />
          <span className="w-1.5 h-1.5 rounded-full bg-black/15" />
        </div>
        {/* Content */}
        <div className="p-2.5 space-y-1.5">
          <div className="h-2 w-3/4 bg-brand-blue rounded-sm" />
          <div className="h-1 w-full bg-ink/15 rounded-sm" />
          <div className="h-1 w-2/3 bg-ink/15 rounded-sm" />
          <div className="pt-1 flex gap-1">
            <div className="h-3.5 w-9 bg-brand-blue rounded-full" />
            <div className="h-3.5 w-7 bg-ink/10 rounded-full" />
          </div>
        </div>
      </motion.div>

      {/* Arrow connecting code → browser */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0, 0.6, 0.6, 0] }}
        transition={{
          duration: 5,
          times: [0, 0.4, 0.55, 0.6, 0.65],
          repeat: Infinity,
        }}
        aria-hidden="true"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0029D6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M13 5l7 7-7 7" />
        </svg>
      </motion.div>
    </div>
  );
}
