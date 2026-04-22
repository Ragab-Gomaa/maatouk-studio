"use client";

import { motion } from "framer-motion";

interface LaptopMockupProps {
  src: string;
  alt: string;
  className?: string;
  /** frame variant — "dark" (closed space grey feel) or "light" (silver) */
  variant?: "dark" | "light";
}

/**
 * LaptopMockup — a clean, editorial laptop frame with a screenshot inside.
 * The chrome is drawn with layered divs (no external image) so it stays sharp
 * at any size and doesn't depend on a bundled mockup image.
 */
export function LaptopMockup({
  src,
  alt,
  className = "",
  variant = "dark",
}: LaptopMockupProps) {
  const isDark = variant === "dark";

  return (
    <motion.figure
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`relative ${className}`}
    >
      {/* Screen (lid) */}
      <div
        className={`relative rounded-[10px] md:rounded-[14px] p-[6px] md:p-2 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.35)] ${
          isDark ? "bg-[#1a1a1a]" : "bg-[#d8d8d8]"
        }`}
      >
        {/* Bezel inner */}
        <div className={`relative rounded-[4px] md:rounded-[6px] overflow-hidden bg-black`}>
          {/* Top inset (camera) */}
          <div className="relative w-full aspect-[16/10] overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={alt}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </div>

      {/* Base bar (keyboard edge) */}
      <div className="relative">
        <div
          className={`h-1.5 md:h-2 mx-[-3%] rounded-b-[3px] ${
            isDark ? "bg-[#2a2a2a]" : "bg-[#cfcfcf]"
          }`}
        />
        <div
          className={`h-1 mx-[-4%] rounded-b-[6px] ${
            isDark ? "bg-[#151515]" : "bg-[#bcbcbc]"
          }`}
        />
        {/* Notch / hinge indicator */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 h-1 w-14 md:w-20 rounded-b-full bg-black/40"
          aria-hidden="true"
        />
      </div>

      {/* Faint floor shadow */}
      <div
        className="absolute left-[6%] right-[6%] -bottom-4 h-4 bg-black/10 blur-lg rounded-full pointer-events-none"
        aria-hidden="true"
      />
    </motion.figure>
  );
}

interface PhoneMockupProps {
  src: string;
  alt: string;
  className?: string;
  /** overall width in px; height scales proportionally (iPhone 15 aspect) */
  width?: number;
}

/**
 * PhoneMockup — a modern phone frame (iPhone 15-style) with rounded corners
 * and a dynamic-island notch. Chrome is drawn, no bundled image required.
 */
export function PhoneMockup({
  src,
  alt,
  className = "",
  width = 240,
}: PhoneMockupProps) {
  const height = width * (844 / 390); // iPhone 15 aspect

  return (
    <motion.figure
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`relative ${className}`}
      style={{ width: `${width}px` }}
    >
      {/* Outer frame */}
      <div
        className="relative bg-[#0b0b0d] rounded-[34px] p-[7px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.35)]"
        style={{ width: `${width}px`, height: `${height}px` }}
      >
        {/* Inner screen */}
        <div className="relative h-full w-full bg-black rounded-[26px] overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={alt}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />

          {/* Dynamic island notch */}
          <div
            className="absolute top-2 left-1/2 -translate-x-1/2 h-5 w-20 rounded-full bg-black z-10"
            aria-hidden="true"
          />
        </div>

        {/* Side buttons */}
        <div
          className="absolute top-20 left-[-2px] w-[3px] h-8 rounded-l bg-[#1a1a1c]"
          aria-hidden="true"
        />
        <div
          className="absolute top-32 right-[-2px] w-[3px] h-12 rounded-r bg-[#1a1a1c]"
          aria-hidden="true"
        />
      </div>

      {/* Floor shadow */}
      <div
        className="absolute left-[10%] right-[10%] -bottom-3 h-3 bg-black/15 blur-md rounded-full pointer-events-none"
        aria-hidden="true"
      />
    </motion.figure>
  );
}

/**
 * DualMockup composes a laptop and a phone into a single composition,
 * the phone slightly overlapping the bottom-right corner of the laptop.
 */
interface DualMockupProps {
  desktopSrc: string;
  mobileSrc: string;
  desktopAlt: string;
  mobileAlt: string;
  className?: string;
  laptopVariant?: "dark" | "light";
}

export function DualMockup({
  desktopSrc,
  mobileSrc,
  desktopAlt,
  mobileAlt,
  className = "",
  laptopVariant = "dark",
}: DualMockupProps) {
  return (
    <div className={`relative ${className}`}>
      <LaptopMockup src={desktopSrc} alt={desktopAlt} variant={laptopVariant} />
      <div className="absolute bottom-[-12%] right-[-2%] sm:right-[-4%] w-[26%] sm:w-[24%] min-w-[140px] max-w-[240px]">
        <PhoneMockup src={mobileSrc} alt={mobileAlt} width={220} className="!w-full" />
      </div>
    </div>
  );
}
