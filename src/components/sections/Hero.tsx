"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "@/lib/LocaleContext";
import { siteContent } from "@/data/content";
import { fadeUp, staggerContainer } from "@/lib/animations";
import Button from "@/components/ui/Button";
import BrandMark from "@/components/ui/BrandMark";

type Discipline = {
  key: "branding" | "motion" | "web";
  label: { en: string; ar: string };
  caption: { en: string; ar: string };
};

const disciplines: Discipline[] = [
  {
    key: "branding",
    label: { en: "Branding", ar: "هوية بصرية" },
    caption: { en: "Visual Identity", ar: "الهوية البصرية" },
  },
  {
    key: "motion",
    label: { en: "Motion", ar: "تصميم حركة" },
    caption: { en: "Motion Design", ar: "تصميم الحركة" },
  },
  {
    key: "web",
    label: { en: "Websites", ar: "مواقع إلكترونية" },
    caption: { en: "Digital Experiences", ar: "تجارب رقمية" },
  },
];

/* ─────────────────── Visual Panels ─────────────────── */

function BrandingVisual() {
  return (
    <motion.div
      key="branding"
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="absolute inset-0 flex items-center justify-center"
    >
      <svg
        viewBox="0 0 320 320"
        className="absolute inset-0 w-full h-full text-white/20"
        aria-hidden="true"
      >
        <motion.line
          x1="0" y1="160" x2="320" y2="160"
          stroke="currentColor" strokeWidth="1"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        />
        <motion.line
          x1="160" y1="0" x2="160" y2="320"
          stroke="currentColor" strokeWidth="1"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ duration: 0.9, delay: 0.3 }}
        />
        <motion.circle
          cx="160" cy="160" r="100"
          stroke="currentColor" strokeWidth="1" fill="none"
          initial={{ pathLength: 0, rotate: 0 }}
          animate={{ pathLength: 1, rotate: 360 }}
          transition={{
            pathLength: { duration: 1.2, delay: 0.4 },
            rotate: { duration: 40, repeat: Infinity, ease: "linear" },
          }}
          style={{ transformOrigin: "160px 160px" }}
        />
        <motion.rect
          x="125" y="125" width="70" height="70"
          stroke="currentColor" strokeWidth="1" fill="none"
          initial={{ rotate: 0, opacity: 0 }}
          animate={{ rotate: 45, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{ transformOrigin: "160px 160px" }}
        />
      </svg>

      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative z-10"
      >
        <BrandMark color="#ffffff" size={120} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="absolute top-8 left-8 w-2.5 h-2.5 rotate-45 bg-brand-green"
      />
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ delay: 1.0 }}
        className="absolute bottom-8 right-8 w-2.5 h-2.5 rotate-45 bg-white/60"
      />
    </motion.div>
  );
}

function MotionVisual() {
  return (
    <motion.div
      key="motion"
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="absolute inset-0 flex items-center justify-center"
    >
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border border-white/30"
          initial={{ width: 80, height: 80, opacity: 0 }}
          animate={{ width: 340, height: 340, opacity: [0.6, 0] }}
          transition={{
            duration: 3,
            delay: i * 0.8,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      ))}

      <motion.div
        className="absolute w-[240px] h-[240px]"
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-brand-green" />
      </motion.div>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3, type: "spring" }}
        className="relative z-10 w-24 h-24 rounded-full bg-white flex items-center justify-center"
      >
        <svg viewBox="0 0 24 24" className="w-10 h-10 text-brand-blue ml-1.5" aria-hidden="true">
          <polygon points="7,4 20,12 7,20" fill="currentColor" />
        </svg>
      </motion.div>

      <svg
        viewBox="0 0 320 320"
        className="absolute inset-0 w-full h-full text-brand-green/50"
        aria-hidden="true"
      >
        <motion.path
          d="M 20 280 Q 60 260 100 280 T 180 280 T 260 280 T 300 280"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        />
      </svg>
    </motion.div>
  );
}

function WebVisual() {
  return (
    <motion.div
      key="web"
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="absolute inset-0 flex items-center justify-center p-10"
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative w-full max-w-[280px] bg-white/95 rounded-lg overflow-hidden shadow-2xl"
      >
        <div className="flex items-center gap-1.5 px-3 py-2.5 border-b border-black/5 bg-white">
          <div className="w-2.5 h-2.5 rounded-full bg-black/10" />
          <div className="w-2.5 h-2.5 rounded-full bg-black/10" />
          <div className="w-2.5 h-2.5 rounded-full bg-black/10" />
          <div className="flex-1 mx-2 h-4 bg-black/5 rounded" />
        </div>

        <div className="p-4 space-y-3 h-[180px]">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "60%" }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="h-3 bg-brand-blue rounded-sm"
          />
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "90%" }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="h-2 bg-black/10 rounded-sm"
          />
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "75%" }}
            transition={{ duration: 0.6, delay: 0.85 }}
            className="h-2 bg-black/10 rounded-sm"
          />

          <div className="pt-3 grid grid-cols-2 gap-2">
            {[0, 1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 1 + i * 0.1 }}
                className="aspect-square bg-gradient-to-br from-brand-blue/20 to-brand-blue/5 rounded"
              />
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 1.3 }}
        className="absolute top-10 left-10 font-mono text-brand-green text-2xl font-bold"
        aria-hidden="true"
      >
        {"</>"}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 1.4 }}
        className="absolute bottom-10 right-10 font-mono text-white/60 text-lg font-bold"
        aria-hidden="true"
      >
        {"{ }"}
      </motion.div>
    </motion.div>
  );
}

/* ─────────────────── Hero Component ─────────────────── */

export default function Hero() {
  const { t } = useTranslation();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setActive((i) => (i + 1) % disciplines.length);
    }, 4200);
    return () => clearInterval(id);
  }, [paused]);

  const current = disciplines[active];

  const renderVisual = () => {
    if (current.key === "branding") return <BrandingVisual />;
    if (current.key === "motion") return <MotionVisual />;
    return <WebVisual />;
  };

  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden bg-surface pt-24 lg:pt-28">
      <div
        className="absolute inset-0 opacity-[0.035] text-brand-blue pointer-events-none"
        style={{
          backgroundImage:
            'url("/images/patterns/pattern-disciplines.svg")',
          backgroundSize: "180px",
          backgroundRepeat: "repeat",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-20 pb-10 lg:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-8 lg:gap-14 items-center">
          {/* ─── Left: Content ─── */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="order-2 lg:order-1"
          >
            <motion.div
              variants={fadeUp}
              className="flex items-center gap-3 mb-6 md:mb-8"
            >
              <span className="w-2 h-2 rotate-45 bg-brand-blue" />
              <span className="text-[11px] md:text-xs font-medium uppercase tracking-[0.25em] text-brand-blue">
                {t("Creative Studio", "استوديو إبداعي")}
              </span>
              <span className="h-px w-8 md:w-12 bg-brand-blue/20" />
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-[2.25rem] leading-[1.05] sm:text-5xl md:text-6xl lg:text-[4.5rem] xl:text-[5rem] font-lyon font-bold tracking-tight text-black mb-5 md:mb-7"
            >
              {t(siteContent.hero.headline.en, siteContent.hero.headline.ar)
                .split("\n")
                .map((line, i) => (
                  <span key={i} className="block">
                    {i === 1 ? (
                      <span className="text-brand-blue">{line}</span>
                    ) : (
                      line
                    )}
                  </span>
                ))}
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-base md:text-lg text-black/55 max-w-xl leading-relaxed mb-7 md:mb-10"
            >
              {t(siteContent.hero.sub.en, siteContent.hero.sub.ar)}
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-wrap gap-3 md:gap-4"
            >
              <Button href="/contact" variant="primary" size="lg" withArrow>
                {t(siteContent.hero.cta.en, siteContent.hero.cta.ar)}
              </Button>
              <Button href="/work" variant="secondary" size="lg">
                {t(
                  siteContent.hero.ctaSecondary.en,
                  siteContent.hero.ctaSecondary.ar
                )}
              </Button>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="hidden lg:flex items-center gap-3 text-black/25 mt-12"
            >
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-5 h-8 border border-black/15 rounded-full flex items-start justify-center p-1"
                aria-hidden="true"
              >
                <div className="w-1 h-2 bg-black/25 rounded-full" />
              </motion.div>
              <span className="text-[11px] font-medium uppercase tracking-[0.15em]">
                {t("Scroll to explore", "مرر لاستكشاف")}
              </span>
            </motion.div>
          </motion.div>

          {/* ─── Right: Visual Panel ─── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 w-full"
          >
            <div
              className="relative aspect-square sm:aspect-[4/3] lg:aspect-square max-w-[360px] sm:max-w-[420px] lg:max-w-[460px] mx-auto lg:mx-0 lg:ml-auto"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              <div className="relative w-full h-full bg-brand-blue overflow-hidden">
                <div
                  className="absolute inset-0 opacity-10 text-white pointer-events-none"
                  style={{
                    backgroundImage:
                      'url("/images/patterns/pattern-disciplines.svg")',
                    backgroundSize: "180px",
                    backgroundRepeat: "repeat",
                  }}
                  aria-hidden="true"
                />

                <AnimatePresence mode="wait">{renderVisual()}</AnimatePresence>

                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-3">
                  <div className="min-w-0">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={current.key}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.4 }}
                      >
                        <div className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/60 mb-1">
                          0{active + 1} / 03
                        </div>
                        <div className="text-white text-lg md:text-xl font-lyon font-bold truncate">
                          {t(current.caption.en, current.caption.ar)}
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  <div
                    className="flex items-center gap-2 shrink-0"
                    role="tablist"
                    aria-label={t("Discipline selector", "محدد التخصص")}
                  >
                    {disciplines.map((d, i) => (
                      <button
                        key={d.key}
                        role="tab"
                        aria-selected={i === active}
                        aria-label={t(d.label.en, d.label.ar)}
                        onClick={() => setActive(i)}
                        className="relative w-7 h-1.5 bg-white/20 overflow-hidden transition-colors hover:bg-white/30 focus:outline-none focus-visible:outline-2 focus-visible:outline-white"
                      >
                        {i === active && (
                          <motion.div
                            layoutId="active-dot"
                            className="absolute inset-0 bg-brand-green"
                            transition={{
                              type: "spring",
                              stiffness: 300,
                              damping: 30,
                            }}
                          />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-3 -right-3 w-8 h-8 bg-brand-green rotate-45 z-20" aria-hidden="true" />
              <div className="absolute -top-2 -left-2 w-4 h-4 bg-brand-blue/10 rotate-45 z-20 hidden lg:block" aria-hidden="true" />
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-blue/20 to-transparent origin-left"
        aria-hidden="true"
      />
    </section>
  );
}
