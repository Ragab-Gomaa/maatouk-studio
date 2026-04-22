"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/lib/LocaleContext";
import Button from "@/components/ui/Button";

/**
 * Hero — "Triptych". A magazine-cover layout: centered editorial headline
 * above a trio of art plates, each an original composition representing
 * one of the studio's three disciplines (typography/branding, motion,
 * digital). No featured project. No panel cycling. Three pieces of art
 * sitting side-by-side — the cover spread.
 */
export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-[100svh] flex flex-col overflow-hidden bg-surface pt-20 md:pt-24 pb-10 md:pb-14">
      {/* Top row — tiny masthead */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-20 pt-4 md:pt-6 grid grid-cols-3 items-center text-[10px] uppercase tracking-[0.3em] text-black/50 font-medium"
      >
        <span className="inline-flex items-center gap-2 justify-start">
          <span className="w-1.5 h-1.5 rotate-45 bg-brand-blue" />
          <span className="hidden sm:inline">
            {t("Volume", "مجلّد")} 01
          </span>
        </span>
        <span className="text-center">
          <span className="font-lyon tracking-[0.3em]">MAATOUK</span>
          <span className="hidden sm:inline"> · {t("Studio", "استوديو")}</span>
        </span>
        <span className="text-right tabular-nums">
          {new Date().getFullYear()}
        </span>
      </motion.div>

      {/* ─── Headline block ─── */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-20 pt-10 md:pt-14 lg:pt-16">
        <div className="text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-3 mb-5 md:mb-7"
          >
            <span className="h-px w-8 bg-brand-blue/40" />
            <span className="text-[10px] md:text-xs uppercase tracking-[0.35em] text-brand-blue font-medium">
              {t("Three disciplines · One studio", "ثلاث تخصصات · استوديو واحد")}
            </span>
            <span className="h-px w-8 bg-brand-blue/40" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-lyon font-bold tracking-[-0.025em] leading-[0.9] text-[2.75rem] sm:text-[3.75rem] md:text-[5rem] lg:text-[6.5rem] xl:text-[7.5rem] text-black"
          >
            {t("Designing the", "نصمّم")}
            <br />
            <span className="italic text-brand-blue">
              {t("artifacts", "الأعمال")}
            </span>{" "}
            {t("of modern brands.", "للعلامات الحديثة.")}
          </motion.h1>
        </div>
      </div>

      {/* ─── Triptych ─── */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-20 flex-1 flex items-center pt-10 md:pt-14">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
          }}
          className="w-full grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4"
        >
          <Plate
            numeral="I"
            title={{ en: "Branding", ar: "هوية بصرية" }}
            subtitle={{ en: "Identity & type", ar: "هوية وطباعة" }}
          >
            <BrandingPlate />
          </Plate>

          <Plate
            numeral="II"
            title={{ en: "Motion", ar: "تصميم حركة" }}
            subtitle={{ en: "Moving image", ar: "صورة متحركة" }}
            inverted
          >
            <MotionPlate />
          </Plate>

          <Plate
            numeral="III"
            title={{ en: "Digital", ar: "رقمي" }}
            subtitle={{ en: "Websites & platforms", ar: "مواقع ومنصات" }}
          >
            <DigitalPlate />
          </Plate>
        </motion.div>
      </div>

      {/* ─── Bottom row ─── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-20 pt-10 md:pt-14 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 items-center"
      >
        <p className="font-lyon text-lg md:text-xl text-black/70 max-w-xl leading-relaxed">
          {t(
            "A Gulf-based studio designing branding, motion, and digital products — bilingual by craft, end-to-end by choice.",
            "استوديو خليجي يصمّم الهوية والحركة والمنتجات الرقمية — ثنائي اللغة بالحرفية، شامل بالاختيار."
          )}
        </p>
        <div className="flex flex-wrap gap-3">
          <Button href="/work" variant="primary" size="md" withArrow>
            {t("View our work", "شاهد أعمالنا")}
          </Button>
          <Button href="/contact" variant="secondary" size="md">
            {t("Start a project", "ابدأ مشروعك")}
          </Button>
        </div>
      </motion.div>
    </section>
  );
}

/* ─────────────────── Plate (discipline card) ─────────────────── */

function Plate({
  numeral,
  title,
  subtitle,
  children,
  inverted = false,
}: {
  numeral: string;
  title: { en: string; ar: string };
  subtitle: { en: string; ar: string };
  children: React.ReactNode;
  inverted?: boolean;
}) {
  const { t } = useTranslation();

  return (
    <motion.article
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`relative aspect-[4/5] md:aspect-[3/4] overflow-hidden group border border-black/[0.08] ${
        inverted ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {/* Top meta line */}
      <div
        className={`absolute top-0 left-0 right-0 flex items-center justify-between px-5 md:px-6 pt-4 md:pt-5 text-[10px] uppercase tracking-[0.25em] font-medium z-20 ${
          inverted ? "text-white/50" : "text-black/45"
        }`}
      >
        <span className="font-lyon">No. {numeral}</span>
        <span>{t("Plate", "لوحة")}</span>
      </div>

      {/* Art canvas */}
      <div className="absolute inset-0 flex items-center justify-center">
        {children}
      </div>

      {/* Bottom caption */}
      <div
        className={`absolute bottom-0 left-0 right-0 px-5 md:px-6 pb-4 md:pb-5 z-20 ${
          inverted ? "text-white" : "text-black"
        }`}
      >
        <div
          className={`text-[10px] uppercase tracking-[0.25em] font-medium mb-1 ${
            inverted ? "text-brand-green" : "text-brand-blue"
          }`}
        >
          {t(subtitle.en, subtitle.ar)}
        </div>
        <div className="font-lyon text-xl md:text-2xl lg:text-3xl font-bold tracking-tight leading-none">
          {t(title.en, title.ar)}
        </div>
      </div>
    </motion.article>
  );
}

/* ─────────────────── Plate 1 — Branding (typography) ─────────────────── */

function BrandingPlate() {
  return (
    <svg
      viewBox="0 0 300 400"
      className="w-[85%] h-[85%]"
      aria-hidden="true"
    >
      {/* Construction baseline marks */}
      <motion.line
        x1="20" y1="220" x2="280" y2="220"
        stroke="rgba(0,41,214,0.12)" strokeWidth="0.8"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      />
      <motion.line
        x1="20" y1="130" x2="280" y2="130"
        stroke="rgba(0,41,214,0.08)" strokeWidth="0.6" strokeDasharray="4 4"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      />

      {/* Arabic ك — anchor letterform */}
      <motion.text
        x="150" y="220"
        textAnchor="middle"
        fontSize="200"
        fill="#0029D6"
        style={{
          fontFamily: '"Mizan", "Traditional Arabic", serif',
          fontWeight: 700,
        }}
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        ك
      </motion.text>

      {/* Latin Aa specimen below */}
      <motion.text
        x="150" y="300"
        textAnchor="middle"
        fontSize="58"
        fill="#111"
        style={{ fontFamily: "var(--font-lyon), Georgia, serif", fontWeight: 700 }}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        Aa
      </motion.text>

      {/* Size measurement tick */}
      <motion.g
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 1.0 }}
      >
        <line x1="275" y1="130" x2="275" y2="220" stroke="rgba(0,41,214,0.3)" strokeWidth="0.6" />
        <line x1="270" y1="130" x2="280" y2="130" stroke="rgba(0,41,214,0.3)" strokeWidth="0.6" />
        <line x1="270" y1="220" x2="280" y2="220" stroke="rgba(0,41,214,0.3)" strokeWidth="0.6" />
        <text
          x="285" y="178"
          fontSize="10"
          fill="rgba(0,41,214,0.5)"
          style={{ fontFamily: "var(--font-lyon)" }}
        >
          1em
        </text>
      </motion.g>

      {/* Corner diamond */}
      <motion.rect
        x="40" y="335" width="10" height="10" transform="rotate(45 45 340)"
        fill="#3CFFC5"
        initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 1.1 }}
      />
    </svg>
  );
}

/* ─────────────────── Plate 2 — Motion (frame stack) ─────────────────── */

function MotionPlate() {
  return (
    <svg
      viewBox="0 0 300 400"
      className="w-[85%] h-[85%]"
      aria-hidden="true"
    >
      {/* Film strip frames on left */}
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.rect
          key={`hole-l-${i}`}
          x="18" y={70 + i * 55}
          width="6" height="10"
          fill="rgba(255,255,255,0.25)"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.3 + i * 0.05 }}
        />
      ))}
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.rect
          key={`hole-r-${i}`}
          x="276" y={70 + i * 55}
          width="6" height="10"
          fill="rgba(255,255,255,0.25)"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.4 + i * 0.05 }}
        />
      ))}

      {/* Three motion frames stacked */}
      {[0, 1, 2].map((i) => {
        const y = 90 + i * 80;
        return (
          <motion.g
            key={i}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
          >
            <rect
              x="40" y={y}
              width="220" height="60"
              fill="rgba(60,255,197,0.08)"
              stroke="rgba(60,255,197,0.35)"
              strokeWidth="0.8"
            />
            {/* Frame content — progressive shape */}
            <circle
              cx={80 + i * 45} cy={y + 30}
              r={8 + i * 6}
              fill="#3CFFC5"
              opacity={0.9 - i * 0.2}
            />
            {/* Motion blur trails */}
            {[0, 1, 2].map((j) => (
              <circle
                key={j}
                cx={80 + i * 45 - (j + 1) * 10}
                cy={y + 30}
                r={(8 + i * 6) * (1 - j * 0.25)}
                fill="#3CFFC5"
                opacity={0.2 - j * 0.05}
              />
            ))}
          </motion.g>
        );
      })}

      {/* Timecode */}
      <motion.text
        x="150" y="325"
        textAnchor="middle"
        fontSize="11"
        fill="rgba(60,255,197,0.7)"
        style={{ fontFamily: "ui-monospace, monospace", letterSpacing: "0.25em" }}
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.9 }}
      >
        00 : 00 : 24 : 09
      </motion.text>

      {/* Play button */}
      <motion.g
        initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1.0, type: "spring" }}
        style={{ transformOrigin: "150px 350px" }}
      >
        <circle cx="150" cy="350" r="14" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.4)" strokeWidth="0.8" />
        <polygon points="145,343 158,350 145,357" fill="#3CFFC5" />
      </motion.g>
    </svg>
  );
}

/* ─────────────────── Plate 3 — Digital (UI fragment) ─────────────────── */

function DigitalPlate() {
  return (
    <svg
      viewBox="0 0 300 400"
      className="w-[85%] h-[85%]"
      aria-hidden="true"
    >
      {/* Window chrome */}
      <motion.rect
        x="30" y="80"
        width="240" height="260"
        fill="white"
        stroke="rgba(0,0,0,0.08)" strokeWidth="1"
        rx="4"
        initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      />
      <motion.rect
        x="30" y="80"
        width="240" height="28"
        fill="rgba(0,0,0,0.03)"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.4 }}
      />
      {[0, 1, 2].map((i) => (
        <motion.circle
          key={i}
          cx={45 + i * 12} cy="94" r="3.5"
          fill={i === 0 ? "#FF5F57" : i === 1 ? "#FEBC2E" : "#28C840"}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.5 + i * 0.05 }}
        />
      ))}

      {/* Content lines */}
      <motion.rect
        x="50" y="130" width="120" height="12" fill="#0029D6"
        initial={{ width: 0 }} animate={{ width: 120 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      />
      <motion.rect
        x="50" y="152" width="180" height="3" fill="rgba(0,0,0,0.12)"
        initial={{ width: 0 }} animate={{ width: 180 }}
        transition={{ duration: 0.5, delay: 0.85 }}
      />
      <motion.rect
        x="50" y="162" width="150" height="3" fill="rgba(0,0,0,0.12)"
        initial={{ width: 0 }} animate={{ width: 150 }}
        transition={{ duration: 0.5, delay: 0.95 }}
      />
      <motion.rect
        x="50" y="172" width="100" height="3" fill="rgba(0,0,0,0.12)"
        initial={{ width: 0 }} animate={{ width: 100 }}
        transition={{ duration: 0.5, delay: 1.05 }}
      />

      {/* Cards grid */}
      {[0, 1, 2, 3].map((i) => {
        const col = i % 2;
        const row = Math.floor(i / 2);
        return (
          <motion.rect
            key={i}
            x={50 + col * 105} y={200 + row * 60}
            width="100" height="52"
            fill="rgba(0,41,214,0.08)"
            stroke="rgba(0,41,214,0.15)" strokeWidth="0.6"
            initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 1.1 + i * 0.08 }}
          />
        );
      })}

      {/* Code bracket above window */}
      <motion.text
        x="150" y="64"
        textAnchor="middle"
        fontSize="22"
        fill="#0029D6"
        style={{ fontFamily: "ui-monospace, monospace", fontWeight: 700 }}
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        &lt;/&gt;
      </motion.text>

      {/* Small green accent chip */}
      <motion.rect
        x="230" y="128" width="30" height="16" rx="2"
        fill="#3CFFC5"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 1.3 }}
      />
    </svg>
  );
}
