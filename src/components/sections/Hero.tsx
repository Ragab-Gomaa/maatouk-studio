"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/lib/LocaleContext";
import Button from "@/components/ui/Button";

/**
 * Hero — "Modern Studio" aesthetic. Confident, spacious, no featured project.
 * A bold bilingual headline, a stats pill row for credibility, two CTAs, and
 * a composed disciplines mark on the right that signals what the studio does
 * without showing any client work.
 */
export default function Hero() {
  const { t, locale } = useTranslation();

  const stats = [
    { value: "03", label: { en: "Disciplines", ar: "تخصصات" } },
    { value: "AR·EN", label: { en: "Bilingual", ar: "ثنائي اللغة" } },
    { value: "01", label: { en: "Studio team", ar: "فريق واحد" } },
  ];

  return (
    <section className="relative overflow-hidden bg-surface pt-28 md:pt-36 lg:pt-40 pb-20 md:pb-28">
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
        <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_1fr] gap-12 lg:gap-20 items-center">
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

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-lyon font-bold tracking-[-0.035em] leading-[0.92] text-[2.75rem] sm:text-[3.75rem] md:text-[5rem] lg:text-[6rem] xl:text-[6.75rem] text-ink mb-6"
            >
              {locale === "ar" ? (
                <>
                  <span className="block">علامات</span>
                  <span className="block">
                    <span className="text-brand-blue italic">تبدأ </span>
                    بالحركة.
                  </span>
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
              className="text-base md:text-lg text-ink-soft max-w-xl leading-relaxed mb-10"
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
              className="flex flex-wrap items-center gap-3 mb-12 md:mb-14"
            >
              <Button href="/contact" variant="primary" size="lg" withArrow>
                {t("Start a project", "ابدأ مشروعك")}
              </Button>
              <Button href="/work" variant="secondary" size="lg">
                {t("Explore work", "استكشف أعمالنا")}
              </Button>
            </motion.div>

            {/* Stats row */}
            <motion.dl
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="grid grid-cols-3 gap-4 sm:gap-8 max-w-md"
            >
              {stats.map((s, i) => (
                <div
                  key={i}
                  className={`${
                    i < stats.length - 1
                      ? "pr-3 sm:pr-8 border-r border-black/[0.08]"
                      : ""
                  }`}
                >
                  <dt className="text-[10px] uppercase tracking-[0.15em] font-semibold text-ink-whisper mb-1.5">
                    {t(s.label.en, s.label.ar)}
                  </dt>
                  <dd className="font-lyon text-xl md:text-2xl font-bold text-ink">
                    {s.value}
                  </dd>
                </div>
              ))}
            </motion.dl>
          </div>

          {/* ── Right: Composed Disciplines Mark ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
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
 * DisciplinesMark — a single composed graphic signaling the three disciplines:
 * a stacked card composition with a Type glyph (Branding), a Motion ring,
 * and a Window frame (Digital). Lives on a soft surface, not a full panel.
 */
function DisciplinesMark() {
  return (
    <div className="relative w-full max-w-[380px] md:max-w-[440px] aspect-square">
      {/* ── Card 1 — Typography (Branding) ── */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="absolute top-0 left-0 w-[58%] aspect-[4/5] studio-card overflow-hidden"
      >
        <div className="absolute top-3 left-3 z-10 pill bg-brand-blue-soft text-brand-blue !py-1 !px-2.5 text-[10px] uppercase tracking-[0.15em] font-semibold">
          <span className="diamond !w-1 !h-1" />
          I · Type
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Latin + Arabic glyph duet */}
          <div className="relative flex items-end gap-1">
            <span
              className="font-lyon text-[10rem] md:text-[12rem] leading-[0.8] font-bold text-ink"
              style={{ fontFamily: "var(--font-lyon)" }}
            >
              A
            </span>
            <span
              className="text-[7rem] md:text-[8rem] leading-none font-bold text-brand-blue mb-2"
              style={{ fontFamily: "var(--font-mizan), serif" }}
            >
              أ
            </span>
          </div>
        </div>
        {/* Baseline tick */}
        <div className="absolute bottom-4 left-4 right-4 h-px bg-black/10" aria-hidden="true" />
      </motion.div>

      {/* ── Card 2 — Motion ── */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.55 }}
        className="absolute top-[18%] right-0 w-[54%] aspect-square studio-card overflow-hidden bg-ink !text-white"
      >
        <div className="absolute top-3 left-3 z-10 pill bg-brand-green/15 text-brand-green !py-1 !px-2.5 text-[10px] uppercase tracking-[0.15em] font-semibold">
          <span className="diamond !w-1 !h-1" />
          II · Motion
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          {/* Concentric rings */}
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="absolute rounded-full border border-white/25"
              initial={{ width: 40, height: 40, opacity: 0 }}
              animate={{
                width: 140 + i * 45,
                height: 140 + i * 45,
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: 2.8,
                delay: i * 0.6,
                repeat: Infinity,
                ease: "easeOut",
              }}
            />
          ))}
          {/* Orbit */}
          <motion.div
            className="absolute w-[150px] h-[150px]"
            animate={{ rotate: 360 }}
            transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-brand-green" />
          </motion.div>
          {/* Center play */}
          <div className="relative z-10 w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-[0_10px_30px_-5px_rgba(60,255,197,0.5)]">
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-ink ml-0.5" aria-hidden="true">
              <polygon points="8,5 18,12 8,19" fill="currentColor" />
            </svg>
          </div>
        </div>
      </motion.div>

      {/* ── Card 3 — Digital ── */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.7 }}
        className="absolute bottom-0 left-[12%] w-[60%] aspect-[5/3] studio-card overflow-hidden bg-surface-raised"
      >
        <div className="absolute top-3 left-3 z-10 pill bg-brand-green-soft text-ink !py-1 !px-2.5 text-[10px] uppercase tracking-[0.15em] font-semibold">
          <span className="diamond !w-1 !h-1 bg-brand-green-dim" />
          III · Digital
        </div>

        <div className="absolute inset-0 p-4 pt-10 flex flex-col">
          {/* Browser chrome */}
          <div className="flex items-center gap-1 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-black/15" />
            <span className="w-1.5 h-1.5 rounded-full bg-black/15" />
            <span className="w-1.5 h-1.5 rounded-full bg-black/15" />
          </div>
          {/* Page mock */}
          <div className="flex-1 flex flex-col justify-end gap-1.5">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "55%" }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="h-3 bg-brand-blue rounded-sm"
            />
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "85%" }}
              transition={{ duration: 0.8, delay: 1.15 }}
              className="h-1.5 bg-ink/15 rounded-sm"
            />
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "70%" }}
              transition={{ duration: 0.8, delay: 1.25 }}
              className="h-1.5 bg-ink/15 rounded-sm"
            />
            <div className="flex gap-1.5 mt-1.5">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.4, delay: 1.4 }}
                className="h-6 w-16 bg-brand-blue rounded-full"
              />
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.4, delay: 1.5 }}
                className="h-6 w-12 bg-ink/10 rounded-full"
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating accent diamond */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1.2, type: "spring" }}
        className="absolute top-[45%] right-[50%] translate-x-1/2 w-3 h-3 rotate-45 bg-brand-green shadow-[0_6px_16px_-4px_rgba(60,255,197,0.7)]"
        aria-hidden="true"
      />
    </div>
  );
}
