"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { BrandingPlate, MotionPlate, DigitalPlate } from "./plates";

/**
 * V3 — "The Ledger".
 * Structured three-column composition. The headline is broken into three
 * oversized display words, each sitting atop one of the three art plates
 * with a discipline caption underneath — reading like a printed index or a
 * type specimen sheet. Lede + CTAs sit as a single footer band.
 */
export default function HeroV3() {
  const columns = [
    {
      word: "Designed",
      roman: "I",
      discipline: "Branding",
      caption: "Identity systems, typography, and brand worlds.",
      plate: <BrandingPlate />,
      inverted: false,
    },
    {
      word: "With",
      roman: "II",
      discipline: "Motion",
      caption: "Brand films, animation, and kinetic type.",
      plate: <MotionPlate />,
      inverted: true,
    },
    {
      word: "Intent.",
      roman: "III",
      discipline: "Digital",
      caption: "Websites, platforms, and digital products.",
      plate: <DigitalPlate />,
      inverted: false,
    },
  ];

  return (
    <section className="relative min-h-[100svh] flex flex-col overflow-hidden bg-surface pt-24 md:pt-28">
      {/* ─── Masthead ─── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-20 flex items-center justify-between text-[10px] uppercase tracking-[0.32em] text-black/55 font-medium"
      >
        <span className="inline-flex items-center gap-2">
          <span className="w-1.5 h-1.5 rotate-45 bg-brand-blue" />
          <span>Creative Studio</span>
        </span>
        <span className="hidden md:inline font-lyon tracking-[0.3em] text-black">
          MAATOUK &middot; VOL. 01
        </span>
        <span className="tabular-nums">Issue 2026</span>
      </motion.div>

      {/* ─── Tiny opener line ─── */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="w-full max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-20 pt-10 md:pt-14"
      >
        <div className="flex items-center gap-3">
          <span className="h-px flex-1 bg-black/10" />
          <span className="text-[10px] uppercase tracking-[0.35em] text-brand-blue font-medium">
            Three disciplines &middot; One studio
          </span>
          <span className="h-px flex-1 bg-black/10" />
        </div>
      </motion.div>

      {/* ─── The Ledger — 3 columns ─── */}
      <div className="flex-1 w-full max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-20 pt-8 md:pt-12 pb-6">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.18, delayChildren: 0.3 },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 h-full"
        >
          {columns.map((col, i) => (
            <motion.article
              key={col.roman}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              className={`flex flex-col ${
                i > 0 ? "md:border-l md:border-black/[0.08] md:pl-6 lg:pl-8" : ""
              } ${i < 2 ? "md:pr-6 lg:pr-8" : ""}`}
            >
              {/* Roman numeral + discipline row */}
              <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-black/50 font-medium mb-4">
                <span className="font-lyon tracking-[0.25em]">
                  No. {col.roman}
                </span>
                <span className="text-brand-blue">{col.discipline}</span>
              </div>

              {/* Giant display word */}
              <h2
                className={`font-lyon font-bold tracking-[-0.04em] leading-[0.85] text-[3.5rem] sm:text-[5rem] md:text-[5rem] lg:text-[7rem] xl:text-[8rem] text-balance ${
                  i === 2 ? "italic text-brand-blue" : "text-black"
                }`}
              >
                {col.word}
              </h2>

              {/* Art plate */}
              <div
                className={`relative mt-5 md:mt-6 aspect-[4/5] md:aspect-[3/4] overflow-hidden border border-black/[0.08] ${
                  col.inverted ? "bg-black" : "bg-white"
                }`}
              >
                <div className="absolute inset-0 flex items-center justify-center p-4 md:p-6">
                  {col.plate}
                </div>
              </div>

              {/* Caption */}
              <p className="mt-3 md:mt-4 text-sm md:text-[15px] text-black/65 leading-relaxed max-w-xs">
                {col.caption}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>

      {/* ─── Footer band: lede + CTAs ─── */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.1 }}
        className="w-full border-t border-black/10 bg-surface-low"
      >
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-20 py-6 md:py-8 grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-6 md:gap-10 items-center">
          <div className="text-[10px] uppercase tracking-[0.3em] text-black/45 font-medium md:whitespace-nowrap">
            The Studio
          </div>
          <p className="font-lyon text-base md:text-lg text-black/75 leading-relaxed max-w-2xl text-pretty">
            Maatouk is an independent studio shaping brands, motion, and digital
            products for teams with something to say.
          </p>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <Button href="/work" variant="primary" size="md" withArrow>
              View our work
            </Button>
            <Button href="/contact" variant="secondary" size="md">
              Start a project
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
