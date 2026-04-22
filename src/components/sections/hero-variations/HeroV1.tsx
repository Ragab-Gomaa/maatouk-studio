"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { BrandingPlate, MotionPlate, DigitalPlate } from "./plates";

/**
 * V1 — "The Cover".
 * Symmetric magazine cover: masthead → giant centered headline → lede →
 * CTAs → triptych as the composed hero visual at the bottom. The art is
 * the foundation, the headline is the cover line.
 */
export default function HeroV1() {
  return (
    <section className="relative min-h-[100svh] flex flex-col overflow-hidden bg-surface pt-24 md:pt-28 pb-8">
      {/* ─── Masthead ─── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-20 grid grid-cols-3 items-center text-[10px] uppercase tracking-[0.32em] text-black/55 font-medium"
      >
        <span className="inline-flex items-center gap-2 justify-self-start">
          <span className="w-1.5 h-1.5 rotate-45 bg-brand-blue" />
          <span>Creative Studio</span>
        </span>
        <span className="justify-self-center font-lyon tracking-[0.3em] text-black">
          MAATOUK
        </span>
        <span className="justify-self-end tabular-nums">MMXXVI · 2026</span>
      </motion.div>

      {/* ─── Headline ─── */}
      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-20 pt-14 md:pt-20">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-3 mb-6 md:mb-8"
          >
            <span className="h-px w-10 bg-brand-blue/40" />
            <span className="text-[10px] md:text-xs uppercase tracking-[0.35em] text-brand-blue font-medium">
              Three disciplines &middot; One studio
            </span>
            <span className="h-px w-10 bg-brand-blue/40" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-lyon font-bold tracking-[-0.035em] leading-[0.88] text-[3rem] sm:text-[4.5rem] md:text-[6.5rem] lg:text-[8rem] xl:text-[9rem] text-black text-balance"
          >
            Brands designed
            <br />
            with <span className="italic text-brand-blue">intent.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="font-lyon text-lg md:text-xl text-black/65 max-w-2xl mx-auto mt-8 md:mt-10 leading-relaxed text-pretty"
          >
            Maatouk is an independent creative studio shaping branding, motion,
            and digital products for teams with something to say.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex flex-wrap gap-3 justify-center mt-8 md:mt-10"
          >
            <Button href="/work" variant="primary" size="md" withArrow>
              View our work
            </Button>
            <Button href="/contact" variant="secondary" size="md">
              Start a project
            </Button>
          </motion.div>
        </div>
      </div>

      {/* ─── Triptych (the composed visual) ─── */}
      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-20 flex-1 flex items-end pt-10 md:pt-14">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15, delayChildren: 0.55 },
            },
          }}
          className="w-full grid grid-cols-3 gap-3 md:gap-4"
        >
          <Plate numeral="I" label="Branding" sub="Identity & type">
            <BrandingPlate />
          </Plate>
          <Plate
            numeral="II"
            label="Motion"
            sub="Moving image"
            inverted
          >
            <MotionPlate />
          </Plate>
          <Plate
            numeral="III"
            label="Digital"
            sub="Websites & platforms"
          >
            <DigitalPlate />
          </Plate>
        </motion.div>
      </div>
    </section>
  );
}

function Plate({
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
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`relative aspect-[4/5] sm:aspect-[3/4] md:aspect-[4/5] overflow-hidden border border-black/[0.08] ${
        inverted ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div
        className={`absolute top-0 left-0 right-0 flex items-center justify-between px-4 sm:px-5 pt-4 text-[10px] uppercase tracking-[0.25em] font-medium z-20 ${
          inverted ? "text-white/55" : "text-black/50"
        }`}
      >
        <span className="font-lyon">No. {numeral}</span>
        <span>Plate</span>
      </div>

      <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6">
        {children}
      </div>

      <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-5 pb-4 z-20">
        <div
          className={`text-[10px] uppercase tracking-[0.25em] font-medium mb-1 ${
            inverted ? "text-brand-green" : "text-brand-blue"
          }`}
        >
          {sub}
        </div>
        <div className="font-lyon text-lg sm:text-xl md:text-2xl font-bold tracking-tight leading-none">
          {label}
        </div>
      </div>
    </motion.article>
  );
}
