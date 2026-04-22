"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { BrandingPlate, MotionPlate, DigitalPlate } from "./plates";

/**
 * V2 — "The Spread".
 * Asymmetric editorial spread — like the verso/recto pages of a print
 * magazine. Left column carries the text block with a giant left-aligned
 * headline; right column is a vertical plate-column pinned to the page's
 * right edge, numbered I–III and connected by a thin vertical rule.
 */
export default function HeroV2() {
  return (
    <section className="relative min-h-[100svh] flex flex-col overflow-hidden bg-surface">
      {/* ─── Masthead bar ─── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full border-b border-black/[0.08] pt-24 md:pt-28"
      >
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-20 pb-5 flex items-center justify-between text-[10px] uppercase tracking-[0.32em] text-black/55 font-medium">
          <span className="inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rotate-45 bg-brand-blue" />
            <span>Creative Studio &middot; Maatouk &middot; 2026</span>
          </span>
          <span className="hidden sm:inline font-lyon tracking-[0.3em]">
            Vol. 01 / No. 01
          </span>
        </div>
      </motion.div>

      {/* ─── Main grid ─── */}
      <div className="flex-1 w-full max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-20 py-12 md:py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left — the text block */}
        <div className="lg:col-span-7 xl:col-span-8">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-3 mb-6"
          >
            <span className="h-px w-8 bg-brand-blue/50" />
            <span className="text-[10px] md:text-xs uppercase tracking-[0.35em] text-brand-blue font-medium">
              Three disciplines &middot; One studio
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
            className="font-lyon font-bold tracking-[-0.04em] leading-[0.86] text-[3rem] sm:text-[4.5rem] md:text-[6rem] lg:text-[7rem] xl:text-[8.5rem] text-black text-balance"
          >
            We design
            <br />
            for brands with
            <br />
            <span className="italic text-brand-blue">something</span>
            <br />
            to say.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-x-10 gap-y-4 items-start max-w-2xl"
          >
            <div className="text-[10px] uppercase tracking-[0.3em] text-black/45 font-medium pt-2">
              Lede
            </div>
            <p className="font-lyon text-lg md:text-xl text-black/75 leading-relaxed text-pretty">
              Maatouk is an independent Gulf-based studio designing branding,
              motion, and digital products — bilingual by craft, end-to-end by
              choice.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex flex-wrap gap-3 mt-10"
          >
            <Button href="/work" variant="primary" size="md" withArrow>
              View our work
            </Button>
            <Button href="/contact" variant="secondary" size="md">
              Start a project
            </Button>
          </motion.div>
        </div>

        {/* Right — vertical plate column */}
        <div className="lg:col-span-5 xl:col-span-4 relative">
          {/* Vertical spine */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="absolute left-4 top-0 bottom-0 w-px bg-black/15 origin-top hidden lg:block"
          />

          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.18, delayChildren: 0.3 },
              },
            }}
            className="flex flex-col gap-4"
          >
            <StackPlate numeral="I" label="Branding" sub="Identity & type">
              <BrandingPlate compact />
            </StackPlate>
            <StackPlate
              numeral="II"
              label="Motion"
              sub="Moving image"
              inverted
            >
              <MotionPlate />
            </StackPlate>
            <StackPlate
              numeral="III"
              label="Digital"
              sub="Websites & platforms"
            >
              <DigitalPlate />
            </StackPlate>
          </motion.div>
        </div>
      </div>

      {/* ─── Footer strip ─── */}
      <div className="w-full border-t border-black/[0.08]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-20 py-5 flex items-center justify-between text-[10px] uppercase tracking-[0.32em] text-black/45 font-medium">
          <span>Branding / Motion / Digital</span>
          <span className="hidden sm:inline">Scroll &darr;</span>
        </div>
      </div>
    </section>
  );
}

function StackPlate({
  numeral,
  label,
  sub,
  children,
  inverted = false,
}: {
  numeral: string;
  label: string;
  sub: string;
  children: React.ReactNode;
  inverted?: boolean;
}) {
  return (
    <motion.article
      variants={{
        hidden: { opacity: 0, x: 16 },
        visible: { opacity: 1, x: 0 },
      }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`relative pl-10 lg:pl-14`}
    >
      {/* Index numeral (sits on the spine) */}
      <div
        className={`absolute left-0 top-3 lg:top-4 flex items-center justify-center w-8 h-8 font-lyon text-[11px] tracking-wider font-bold ${
          inverted ? "bg-black text-white" : "bg-white text-black"
        } border border-black/[0.08]`}
      >
        {numeral}
      </div>

      <div
        className={`relative aspect-[16/7] overflow-hidden border border-black/[0.08] ${
          inverted ? "bg-black" : "bg-white"
        }`}
      >
        <div className="absolute inset-0 flex items-center justify-center p-3">
          {children}
        </div>
      </div>

      <div className="pt-2.5 flex items-baseline justify-between gap-4">
        <div className="font-lyon text-base md:text-lg font-bold tracking-tight text-black">
          {label}
        </div>
        <div className="text-[10px] uppercase tracking-[0.25em] text-black/45 font-medium">
          {sub}
        </div>
      </div>
    </motion.article>
  );
}
