"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslation } from "@/lib/LocaleContext";
import { caseStudies, motionProjects } from "@/data/content";

/**
 * WorkSection — featured work as rounded mockup cards. One big primary card
 * (Dolcebello), two secondary cards (Meezan + Sandah motion). Clean, modular,
 * no editorial framing — the work speaks.
 */
export default function WorkSection() {
  const { t } = useTranslation();

  const dolcebello = caseStudies.find((c) => c.slug === "dolcebello");
  const meezan = caseStudies.find((c) => c.slug === "meezan");
  const sandah = motionProjects.find((m) => m.slug === "sandah");

  if (!dolcebello || !meezan || !sandah) return null;

  return (
    <section className="py-14 md:py-20 bg-surface-low relative">
      <div className="max-w-[1320px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
          <div>
            <span className="inline-flex items-center gap-2 pl-2 pr-4 py-1 bg-surface-raised rounded-full border border-black/[0.06] text-[11px] uppercase tracking-[0.2em] font-semibold text-ink-muted mb-5 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
              {t("Selected work", "أعمال مختارة")}
            </span>
            <h2 className="font-lyon font-bold tracking-[-0.03em] text-4xl md:text-5xl lg:text-6xl leading-[0.95] max-w-2xl">
              {t("Things we", "أعمال")}
              <br />
              <span className="text-brand-blue italic">
                {t("shipped recently.", "أطلقناها مؤخراً.")}
              </span>
            </h2>
          </div>
          <Link
            href="/work"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-blue hover:text-brand-blue-dark transition-colors self-start md:self-end focus:outline-none focus-visible:outline-2 focus-visible:outline-brand-blue focus-visible:outline-offset-2 rounded-sm"
          >
            {t("View archive", "الأرشيف الكامل")}
            <svg
              className="w-3.5 h-3.5 rtl-flip"
              viewBox="0 0 14 14"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M3 7h8M8 4l3 3-3 3" />
            </svg>
          </Link>
        </div>

        {/* Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="space-y-5 md:space-y-6"
        >
          {/* Primary: Dolcebello — large card */}
          <motion.article
            variants={{
              hidden: { opacity: 0, y: 18 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              href={`/work/${dolcebello.slug}`}
              className="group relative block overflow-hidden rounded-[28px] md:rounded-[36px] focus:outline-none focus-visible:outline-2 focus-visible:outline-brand-blue focus-visible:outline-offset-4"
              style={{ backgroundColor: dolcebello.palette.background }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-12 p-8 md:p-12 lg:p-14 items-center">
                <div style={{ color: dolcebello.palette.ink }}>
                  <div className="flex items-center gap-3 mb-6">
                    <span
                      className="text-[10px] uppercase tracking-[0.25em] font-semibold"
                      style={{ color: dolcebello.palette.primary }}
                    >
                      № 01
                    </span>
                    <span className="h-px w-8" style={{ backgroundColor: dolcebello.palette.primary, opacity: 0.4 }} />
                    <span className="text-[11px] opacity-60 font-medium">
                      {t(dolcebello.category.en, dolcebello.category.ar)} · {dolcebello.year}
                    </span>
                  </div>
                  <h3 className="font-lyon font-bold tracking-[-0.03em] leading-[0.92] text-5xl md:text-6xl lg:text-7xl mb-5">
                    {t(dolcebello.title.en, dolcebello.title.ar)}
                  </h3>
                  <p
                    className="text-base md:text-lg leading-relaxed max-w-md mb-7"
                    style={{ color: dolcebello.palette.inkSoft }}
                  >
                    {t(dolcebello.shortDescription.en, dolcebello.shortDescription.ar)}
                  </p>
                  <div
                    className="inline-flex items-center gap-2 text-sm font-medium transition-transform duration-500 group-hover:translate-x-1 rtl:group-hover:-translate-x-1"
                    style={{ color: dolcebello.palette.primary }}
                  >
                    {t("Open case study", "افتح دراسة الحالة")}
                    <svg
                      className="w-3.5 h-3.5 rtl-flip"
                      viewBox="0 0 14 14"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <path d="M3 7h8M8 4l3 3-3 3" />
                    </svg>
                  </div>
                </div>

                {dolcebello.shots?.desktopHome && (
                  <div className="relative">
                    <LaptopMockup
                      src={dolcebello.shots.desktopHome}
                      alt={`${dolcebello.title.en} — desktop`}
                    />
                    {dolcebello.shots.mobileHome && (
                      <div className="absolute -bottom-6 -right-3 w-[28%] min-w-[100px] max-w-[160px]">
                        <PhoneMockup
                          src={dolcebello.shots.mobileHome}
                          alt={`${dolcebello.title.en} — mobile`}
                        />
                      </div>
                    )}
                  </div>
                )}
              </div>
            </Link>
          </motion.article>

          {/* Secondary row: Meezan + Sandah */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {/* Meezan */}
            <motion.article
              variants={{
                hidden: { opacity: 0, y: 18 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                href={`/work/${meezan.slug}`}
                className="group relative block overflow-hidden rounded-[24px] md:rounded-[28px] h-full focus:outline-none focus-visible:outline-2 focus-visible:outline-brand-blue focus-visible:outline-offset-4"
                style={{ backgroundColor: meezan.palette.background }}
              >
                <div className="p-7 md:p-9 lg:p-10 h-full flex flex-col" style={{ color: meezan.palette.ink }}>
                  <div className="flex items-center gap-3 mb-6">
                    <span
                      className="text-[10px] uppercase tracking-[0.25em] font-semibold"
                      style={{ color: meezan.palette.primary }}
                    >
                      № 02
                    </span>
                    <span className="h-px w-6" style={{ backgroundColor: meezan.palette.primary, opacity: 0.4 }} />
                    <span className="text-[11px] opacity-60 font-medium">
                      {t(meezan.category.en, meezan.category.ar)} · {meezan.year}
                    </span>
                  </div>
                  <h3 className="font-lyon font-bold tracking-[-0.03em] leading-[0.95] text-4xl md:text-5xl mb-4">
                    {t(meezan.title.en, meezan.title.ar)}
                  </h3>
                  <p
                    className="text-sm md:text-base leading-relaxed mb-8"
                    style={{ color: meezan.palette.inkSoft }}
                  >
                    {t(meezan.shortDescription.en, meezan.shortDescription.ar)}
                  </p>
                  {meezan.shots?.desktopHome && (
                    <div className="mt-auto transition-transform duration-700 group-hover:scale-[1.02]">
                      <LaptopMockup
                        src={meezan.shots.desktopHome}
                        alt={`${meezan.title.en} — desktop`}
                      />
                    </div>
                  )}
                </div>
              </Link>
            </motion.article>

            {/* Sandah Motion */}
            <motion.article
              variants={{
                hidden: { opacity: 0, y: 18 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative block overflow-hidden rounded-[24px] md:rounded-[28px] h-full bg-ink text-white"
            >
              <div className="p-7 md:p-9 lg:p-10 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-brand-green">
                    № 03
                  </span>
                  <span className="h-px w-6 bg-brand-green/40" />
                  <span className="text-[11px] opacity-60 font-medium">
                    {t("Motion Design", "تصميم الحركة")} · {sandah.year}
                  </span>
                </div>
                <h3 className="font-lyon font-bold tracking-[-0.03em] leading-[0.95] text-4xl md:text-5xl mb-4">
                  {t(sandah.title.en, sandah.title.ar)}
                </h3>
                <p className="text-sm md:text-base text-white/70 leading-relaxed mb-8">
                  {t(sandah.description.en, sandah.description.ar)}
                </p>

                <div className="mt-auto relative aspect-video rounded-2xl overflow-hidden bg-black">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://vumbnail.com/${sandah.vimeoId}.jpg`}
                    alt={sandah.title.en}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-white/95 flex items-center justify-center shadow-xl">
                      <svg viewBox="0 0 24 24" className="w-5 h-5 text-ink ml-0.5" aria-hidden="true">
                        <polygon points="8,5 18,12 8,19" fill="currentColor" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Device mockups ─── */

function LaptopMockup({ src, alt }: { src: string; alt: string }) {
  return (
    <figure className="relative w-full">
      <div className="relative rounded-[10px] md:rounded-[14px] p-[5px] md:p-1.5 bg-[#1a1a1a] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.4)]">
        <div className="relative rounded-[4px] md:rounded-[6px] overflow-hidden bg-black aspect-[16/10]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={alt}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
        </div>
      </div>
      <div className="h-1.5 md:h-2 mx-[-3%] rounded-b bg-[#2a2a2a]" aria-hidden="true" />
      <div className="h-1 mx-[-4%] rounded-b bg-[#151515]" aria-hidden="true" />
    </figure>
  );
}

function PhoneMockup({ src, alt }: { src: string; alt: string }) {
  return (
    <figure className="relative w-full">
      <div className="relative bg-[#0b0b0d] rounded-[22px] p-[5px] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.35)] aspect-[9/19]">
        <div className="relative h-full w-full bg-black rounded-[18px] overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={alt}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
          <div
            className="absolute top-1.5 left-1/2 -translate-x-1/2 h-3.5 w-12 rounded-full bg-black z-10"
            aria-hidden="true"
          />
        </div>
      </div>
    </figure>
  );
}
