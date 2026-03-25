"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/lib/LocaleContext";
import { siteContent } from "@/data/content";
import { fadeUp, staggerContainer, fadeIn } from "@/lib/animations";
import BrandMark from "@/components/ui/BrandMark";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative h-screen flex items-center overflow-hidden bg-surface">
      {/* Subtle pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'url("/images/patterns/pattern-2.svg")',
          backgroundSize: "120px",
          backgroundRepeat: "repeat",
        }}
      />

      {/* pt-24 to account for fixed header (h-20 md:h-24) */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-8 md:px-12 lg:px-20 pt-24 pb-8 w-full h-full flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center flex-1">
          {/* Left — Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col justify-center"
          >
            {/* Label */}
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
              <span className="w-2 h-2 rotate-45 bg-brand-blue" />
              <span className="text-xs font-medium uppercase tracking-[0.25em] text-brand-blue">
                {t("Creative Studio", "استوديو إبداعي")}
              </span>
              <span className="h-px w-12 bg-brand-blue/20" />
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-lyon font-bold tracking-tight leading-[1.05] text-black mb-5"
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

            {/* Subheadline */}
            <motion.p
              variants={fadeUp}
              className="text-base md:text-lg text-black/50 max-w-lg leading-relaxed mb-8"
            >
              {t(siteContent.hero.sub.en, siteContent.hero.sub.ar)}
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <a
                href="/contact"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-brand-blue text-white text-base font-bold hover:bg-brand-blue-dark transition-all duration-300"
              >
                {t(siteContent.hero.cta.en, siteContent.hero.cta.ar)}
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </a>
              <a
                href="/work"
                className="inline-flex items-center gap-3 px-8 py-4 border-2 border-black/10 text-black text-base font-medium hover:border-brand-blue hover:text-brand-blue transition-all duration-300"
              >
                {t(siteContent.hero.ctaSecondary.en, siteContent.hero.ctaSecondary.ar)}
              </a>
            </motion.div>
          </motion.div>

          {/* Right — Geometric Composition */}
          <div className="relative hidden lg:flex items-center justify-center">
            {/* Main composition */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7, rotate: -15 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative z-10"
            >
              <div className="relative w-[380px] h-[380px] xl:w-[420px] xl:h-[420px] flex items-center justify-center">
                {/* Blue background square — continuous slow rotation */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, rotate: 6 }}
                  animate={{ opacity: 1, scale: 1, rotate: [6, 12, 6] }}
                  transition={{
                    opacity: { duration: 1, delay: 0.2 },
                    scale: { duration: 1, delay: 0.2 },
                    rotate: { duration: 12, repeat: Infinity, ease: "easeInOut" },
                  }}
                  className="absolute inset-0 bg-brand-blue"
                />

                {/* Pattern overlay on blue — follows the square rotation */}
                <motion.div
                  animate={{ rotate: [6, 12, 6] }}
                  transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 opacity-[0.08]"
                  style={{
                    backgroundImage: 'url("/images/patterns/pattern-1-white.svg")',
                    backgroundSize: "140px",
                    backgroundRepeat: "repeat",
                  }}
                />

                {/* Brand mark centered — slow counter-rotate + pulse */}
                <motion.div
                  initial={{ opacity: 0, rotate: -45 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  transition={{ duration: 1.5, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="relative z-10"
                >
                  <motion.div
                    animate={{ scale: [1, 1.06, 1], rotate: [0, -3, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <BrandMark color="#ffffff" size={180} />
                  </motion.div>
                </motion.div>

                {/* Green accent diamond — floating up/down */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.4 }}
                  className="absolute -bottom-6 -right-6 z-20"
                >
                  <motion.div
                    animate={{ y: [0, -8, 0], rotate: [45, 50, 45] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="w-16 h-16 bg-brand-green"
                  />
                </motion.div>

                {/* Small white diamond — floating opposite direction */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.6 }}
                  className="absolute -top-4 -left-4 z-20"
                >
                  <motion.div
                    animate={{ y: [0, 6, 0], rotate: [45, 40, 45] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="w-8 h-8 bg-white border-2 border-brand-blue/20"
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* Floating accent lines — pulsing */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.8 }}
              className="absolute -right-4 top-1/4 flex flex-col gap-2"
            >
              <motion.div
                animate={{ height: [48, 32, 48] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="w-1 bg-brand-blue/20"
              />
              <motion.div
                animate={{ height: [24, 36, 24] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="w-1 bg-brand-green/40"
              />
            </motion.div>

            {/* Vertical text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2 }}
              className="absolute bottom-8 -left-8 text-xs font-bold uppercase tracking-[0.2em] text-black/20 [writing-mode:vertical-lr] rotate-180"
            >
              {t("Est. 2024", "تأسس ٢٠٢٤")}
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator — pinned to bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="flex items-center gap-3 text-black/25 pt-4 pb-2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-8 border border-black/15 rounded-full flex items-start justify-center p-1"
          >
            <div className="w-1 h-2 bg-black/25 rounded-full" />
          </motion.div>
          <span className="text-xs font-medium uppercase tracking-[0.15em]">
            {t("Scroll to explore", "مرر لاستكشاف")}
          </span>
        </motion.div>
      </div>

      {/* Bottom accent line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-blue/20 to-transparent origin-left"
      />
    </section>
  );
}
