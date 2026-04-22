"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/lib/LocaleContext";
import Button from "@/components/ui/Button";

/**
 * Hero — "Modern Studio". A confident bilingual headline, a compact stats
 * pill row that sits right under the CTAs (not orphaned at the bottom),
 * and a single composed disciplines mark on the right. No cycling, no
 * featured project, no italic on Arabic.
 */
export default function Hero() {
  const { t, locale } = useTranslation();

  const stats = [
    { value: "03", label: { en: "Disciplines", ar: "تخصصات" } },
    { value: "AR·EN", label: { en: "Bilingual", ar: "ثنائي اللغة" } },
    { value: "01", label: { en: "Studio team", ar: "فريق واحد" } },
  ];

  return (
    <section className="relative overflow-hidden bg-surface pt-28 md:pt-36 lg:pt-40 pb-20 md:pb-24">
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
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-20 items-center">
          {/* ── Left: type block ── */}
          <div>
            {/* Announcement pill */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 pl-2 pr-4 py-1.5 bg-surface-raised border border-black/[0.06] rounded-full shadow-sm mb-8"
            >
              <span className="inline-flex items-center gap-1.5 pl-2 pr-2.5 py-1 bg-brand-blue rounded-full text-white text-[10px] uppercase tracking-[0.15em] font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-green" aria-hidden="true" />
                {t("Studio", "استوديو")}
              </span>
              <span className="text-[12px] text-ink-muted font-medium">
                {t(
                  "Branding · Motion · Digital",
                  "هوية · حركة · رقمي"
                )}
              </span>
            </motion.div>

            {/* Headline — italic on Latin only; Arabic uses color alone */}
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

            {/* Lede */}
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

            {/* CTAs */}
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

            {/* Stats — compact inline row tied to the CTAs above */}
            <motion.dl
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="inline-flex items-center gap-5 md:gap-7 pt-6 md:pt-7 border-t border-black/[0.08] max-w-md"
            >
              {stats.map((s, i) => (
                <div
                  key={i}
                  className={`flex items-baseline gap-2 ${
                    i < stats.length - 1 ? "pe-5 md:pe-7 border-e border-black/[0.08]" : ""
                  }`}
                >
                  <dd className="font-lyon text-base md:text-lg font-bold text-ink">
                    {s.value}
                  </dd>
                  <dt className="text-[10px] uppercase tracking-[0.15em] font-medium text-ink-whisper">
                    {t(s.label.en, s.label.ar)}
                  </dt>
                </div>
              ))}
            </motion.dl>
          </div>

          {/* ── Right: Disciplines Mark (single composed unit) ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex items-center justify-center lg:justify-end"
          >
            <DisciplinesMark />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/**
 * DisciplinesMark — a single composed poster for the three disciplines.
 * A dominant Typography card anchors the piece; Motion and Digital sit as
 * overlapping accents. No per-card pill labels (redundant with the
 * masthead pill). The three pieces feel like one artefact, not three.
 */
function DisciplinesMark() {
  return (
    <div className="relative w-full max-w-[420px] md:max-w-[480px] aspect-[5/6]">
      {/* ── Dominant card — Typography (the anchor) ── */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="absolute inset-0 studio-card overflow-hidden"
      >
        {/* Construction baseline */}
        <div className="absolute left-8 right-8 top-[50%] h-px bg-brand-blue/[0.1]" aria-hidden="true" />
        <div className="absolute left-8 right-8 top-[66%] h-px bg-brand-blue/[0.07]" aria-hidden="true" />

        {/* Latin + Arabic glyph duet — the hero */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative flex items-end gap-2">
            <span
              className="font-lyon leading-[0.82] font-bold text-ink text-[13rem] md:text-[16rem]"
              style={{ fontFamily: "var(--font-lyon)" }}
            >
              Aa
            </span>
            <span
              className="leading-[0.82] font-bold text-brand-blue text-[10rem] md:text-[12rem] mb-2"
              style={{ fontFamily: "var(--font-mizan), serif" }}
            >
              أ
            </span>
          </div>
        </div>

        {/* Dimension tick — subtle editorial detail */}
        <div className="absolute top-5 left-5 right-5 flex items-center justify-between text-[10px] uppercase tracking-[0.25em] font-semibold text-ink-whisper">
          <span>Type</span>
          <span className="tabular-nums">01 / 03</span>
        </div>

        {/* Brand mark signature in corner */}
        <div className="absolute bottom-4 end-4 opacity-60">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/logos/mark-blue.svg"
            alt=""
            className="w-4 h-4"
            aria-hidden="true"
          />
        </div>
      </motion.div>

      {/* ── Motion accent — small overlapping chip (top-right) ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: -10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.55 }}
        className="absolute top-[-6%] start-[-8%] w-[38%] aspect-square studio-card bg-ink text-white overflow-hidden"
      >
        <div className="absolute top-3 left-4 right-4 flex items-center justify-between text-[9px] uppercase tracking-[0.25em] font-semibold text-white/60">
          <span>Motion</span>
          <span className="tabular-nums">02</span>
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          {/* Concentric rings */}
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="absolute rounded-full border border-white/25"
              initial={{ width: 30, height: 30, opacity: 0 }}
              animate={{
                width: 90 + i * 30,
                height: 90 + i * 30,
                opacity: [0, 0.55, 0],
              }}
              transition={{
                duration: 2.8,
                delay: i * 0.6,
                repeat: Infinity,
                ease: "easeOut",
              }}
            />
          ))}
          {/* Center play */}
          <div className="relative z-10 w-11 h-11 rounded-full bg-white flex items-center justify-center shadow-[0_8px_22px_-6px_rgba(60,255,197,0.55)]">
            <svg viewBox="0 0 24 24" className="w-4 h-4 text-ink ml-0.5" aria-hidden="true">
              <polygon points="8,5 18,12 8,19" fill="currentColor" />
            </svg>
          </div>
        </div>
      </motion.div>

      {/* ── Digital accent — small overlapping chip (bottom-right) ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.75 }}
        className="absolute bottom-[-5%] end-[-6%] w-[44%] aspect-[5/3] studio-card overflow-hidden bg-surface-raised"
      >
        <div className="absolute top-3 left-4 right-4 flex items-center justify-between text-[9px] uppercase tracking-[0.25em] font-semibold text-ink-whisper">
          <span>Digital</span>
          <span className="tabular-nums">03</span>
        </div>

        <div className="absolute inset-x-0 bottom-0 p-4 pt-3">
          {/* Browser dots */}
          <div className="flex items-center gap-1 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-black/15" />
            <span className="w-1.5 h-1.5 rounded-full bg-black/15" />
            <span className="w-1.5 h-1.5 rounded-full bg-black/15" />
          </div>
          {/* Page mock */}
          <div className="space-y-1.5">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "60%" }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="h-2.5 bg-brand-blue rounded-sm"
            />
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "88%" }}
              transition={{ duration: 0.8, delay: 1.15 }}
              className="h-1.5 bg-ink/15 rounded-sm"
            />
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "72%" }}
              transition={{ duration: 0.8, delay: 1.25 }}
              className="h-1.5 bg-ink/15 rounded-sm"
            />
            <div className="flex gap-1.5 mt-1.5">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.4, delay: 1.4 }}
                className="h-5 w-14 bg-brand-blue rounded-full"
              />
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.4, delay: 1.5 }}
                className="h-5 w-10 bg-ink/10 rounded-full"
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating accent diamond — unified moment */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1.0, type: "spring" }}
        className="absolute top-[48%] start-[-4%] w-3 h-3 rotate-45 bg-brand-green shadow-[0_6px_16px_-4px_rgba(60,255,197,0.7)] z-20"
        aria-hidden="true"
      />
    </div>
  );
}
