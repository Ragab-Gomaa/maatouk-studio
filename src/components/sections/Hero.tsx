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
              {t(
                "A bilingual design studio for brand identities, motion, and digital products. We design the whole thing, under one roof — from first sketch to shipped product.",
                "استوديو تصميم ثنائي اللغة للهويات البصرية والموشن والمنتجات الرقمية. نصمّم العمل بالكامل تحت سقف واحد — من أول رسمة إلى آخر تسليم."
              )}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="flex flex-wrap items-center gap-3 mb-8 md:mb-10"
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

          {/* ── Right: Composed Disciplines Mark ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex items-center justify-center lg:justify-end"
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
    <div className="relative w-full max-w-[380px] sm:max-w-[440px] lg:max-w-[460px] aspect-[5/6] mx-auto lg:ml-auto">
      {/* ── Card 1 — Branding (top, aligned to end) ── */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="absolute top-0 end-0 w-[70%] aspect-square rounded-[22px] overflow-hidden studio-card"
      >
        <CornerLabel text={t("Branding", "الهوية البصرية")} tone="blue" />
        <BrandingAnimation />
      </motion.div>

      {/* ── Card 2 — Motion (middle, aligned to start) ── */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="absolute top-[30%] start-0 w-[70%] aspect-square rounded-[22px] overflow-hidden studio-card bg-ink"
      >
        <CornerLabel text={t("Motion", "تصميم الحركة")} tone="dark" />
        <MotionAnimation />
      </motion.div>

      {/* ── Card 3 — Digital (bottom, aligned to end) ── */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.7 }}
        className="absolute bottom-0 end-0 w-[70%] aspect-square rounded-[22px] overflow-hidden studio-card"
      >
        <CornerLabel text={t("Digital", "المنتجات الرقمية")} tone="light" />
        <DigitalAnimation />
      </motion.div>

      {/* Floating signature diamond */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1.0, type: "spring" }}
        className="absolute top-[46%] start-[46%] w-3 h-3 rotate-45 bg-brand-green shadow-[0_6px_16px_-4px_rgba(60,255,197,0.7)] z-20"
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

function DigitalAnimation() {
  return (
    <div className="absolute inset-0 bg-surface-raised overflow-hidden">
      {/* Code panel */}
      <div className="absolute top-3 end-3 w-[60%] aspect-[8/5] rounded-md bg-ink p-2 shadow-lg">
        <div className="flex items-center gap-1 mb-1.5">
          <span className="w-1 h-1 rounded-full bg-white/20" />
          <span className="w-1 h-1 rounded-full bg-white/20" />
          <span className="w-1 h-1 rounded-full bg-white/20" />
        </div>
        <div className="space-y-0.5 font-mono text-[7px] leading-relaxed">
          {[
            { color: "#60D4FF", text: "<div" },
            { color: "#3CFFC5", text: ".brand" },
            { color: "white", text: ">" },
            { color: "#FFD580", text: "Studio" },
            { color: "white", text: "</div>" },
          ].map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0, 1, 1, 0] }}
              transition={{
                duration: 5,
                times: [0, 0.05 + i * 0.06, 0.08 + i * 0.06, 0.7, 0.9],
                repeat: Infinity,
              }}
              style={{ color: line.color }}
            >
              {line.text}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Browser mockup emerges */}
      <motion.div
        className="absolute bottom-3 start-3 w-[72%] aspect-[5/3] rounded-md bg-white border border-black/[0.08] shadow-xl overflow-hidden"
        initial={{ opacity: 0, y: 6, scale: 0.96 }}
        animate={{ opacity: [0, 0, 1, 1, 0], y: [6, 6, 0, 0, 6], scale: [0.96, 0.96, 1, 1, 0.96] }}
        transition={{ duration: 5, times: [0, 0.45, 0.55, 0.85, 1], repeat: Infinity, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex items-center gap-0.5 px-1.5 py-1 bg-surface-low border-b border-black/[0.06]">
          <span className="w-1 h-1 rounded-full bg-black/15" />
          <span className="w-1 h-1 rounded-full bg-black/15" />
          <span className="w-1 h-1 rounded-full bg-black/15" />
        </div>
        <div className="p-1.5 space-y-1">
          <div className="h-1.5 w-3/4 bg-brand-blue rounded-sm" />
          <div className="h-[3px] w-full bg-ink/15 rounded-sm" />
          <div className="h-[3px] w-2/3 bg-ink/15 rounded-sm" />
          <div className="pt-0.5 flex gap-1">
            <div className="h-2 w-5 bg-brand-blue rounded-full" />
            <div className="h-2 w-4 bg-ink/10 rounded-full" />
          </div>
        </div>
      </motion.div>

      {/* Arrow accent */}
      <motion.div
        className="absolute left-1/2 top-[52%] -translate-x-1/2 -translate-y-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0, 0.6, 0.6, 0] }}
        transition={{ duration: 5, times: [0, 0.4, 0.55, 0.6, 0.65], repeat: Infinity }}
        aria-hidden="true"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0029D6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M13 5l7 7-7 7" />
        </svg>
      </motion.div>
    </div>
  );
}
