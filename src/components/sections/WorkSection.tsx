"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslation } from "@/lib/LocaleContext";
import { siteContent, caseStudies, motionProjects } from "@/data/content";
import { fadeUp, staggerContainer } from "@/lib/animations";
import SectionLabel from "@/components/ui/SectionLabel";
import { LaptopMockup, PhoneMockup } from "@/components/case-study/DeviceMockup";
import VimeoPlayer from "@/components/case-study/VimeoPlayer";

export default function WorkSection() {
  const { t } = useTranslation();

  const dolcebello = caseStudies.find((c) => c.slug === "dolcebello");
  const meezan = caseStudies.find((c) => c.slug === "meezan");
  const sandah = motionProjects.find((m) => m.slug === "sandah");

  if (!dolcebello || !meezan || !sandah) return null;

  return (
    <section className="py-24 md:py-36 bg-surface relative">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-20">
        {/* ─── Header ─── */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20 md:mb-28">
          <div>
            <SectionLabel>{t("Selected work", "أعمال مختارة")}</SectionLabel>
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-4xl md:text-6xl lg:text-7xl font-lyon font-bold tracking-tight mt-6 leading-[0.95] max-w-2xl"
            >
              {t(
                "Three pieces we're proud of.",
                "ثلاثة أعمال نفخر بها."
              )}
            </motion.h2>
          </div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-brand-blue font-medium hover:gap-3 transition-all duration-300 shrink-0 focus:outline-none focus-visible:outline-2 focus-visible:outline-brand-blue focus-visible:outline-offset-2"
            >
              {t("View all work", "عرض جميع الأعمال")}
              <svg
                className="w-4 h-4 rtl-flip"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
              >
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </Link>
          </motion.div>
        </div>

        {/* ─── Featured Cards ─── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="space-y-16 md:space-y-24"
        >
          {/* Card 1: Dolcebello — full-bleed on its own palette */}
          <motion.article
            variants={fadeUp}
            className="overflow-hidden"
            style={{ backgroundColor: dolcebello.palette.background }}
          >
            <Link
              href={`/work/${dolcebello.slug}`}
              className="group block focus:outline-none focus-visible:outline-2 focus-visible:outline-brand-blue focus-visible:outline-offset-4"
            >
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] items-center gap-10 lg:gap-14 p-8 md:p-12 lg:p-16">
                <div style={{ color: dolcebello.palette.ink }}>
                  <div
                    className="text-[10px] uppercase tracking-[0.3em] font-bold mb-5"
                    style={{ color: dolcebello.palette.primary }}
                  >
                    № 01 · {t("Luxury E-commerce", "تجارة فاخرة")} · {dolcebello.year}
                  </div>
                  <h3 className="font-lyon font-bold tracking-tight leading-[0.95] text-5xl md:text-6xl lg:text-7xl mb-6">
                    {t(dolcebello.title.en, dolcebello.title.ar)}
                  </h3>
                  <p
                    className="text-base md:text-lg leading-relaxed max-w-md mb-7"
                    style={{ color: dolcebello.palette.inkSoft }}
                  >
                    {t(
                      dolcebello.shortDescription.en,
                      dolcebello.shortDescription.ar
                    )}
                  </p>
                  <div
                    className="inline-flex items-center gap-2 text-sm font-medium transition-transform duration-500 group-hover:translate-x-2 rtl:group-hover:-translate-x-2"
                    style={{ color: dolcebello.palette.primary }}
                  >
                    {t("Open case study", "افتح دراسة الحالة")}
                    <svg
                      className="w-4 h-4 rtl-flip"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <path d="M3 8h10M9 4l4 4-4 4" />
                    </svg>
                  </div>
                </div>
                {dolcebello.shots?.desktopHome && (
                  <div className="relative">
                    <LaptopMockup
                      src={dolcebello.shots.desktopHome}
                      alt={`${dolcebello.title.en} — desktop`}
                      variant="dark"
                    />
                    {dolcebello.shots.mobileHome && (
                      <div className="absolute -bottom-4 -right-2 w-[28%] min-w-[110px] max-w-[180px]">
                        <PhoneMockup
                          src={dolcebello.shots.mobileHome}
                          alt={`${dolcebello.title.en} — mobile`}
                          width={160}
                          className="!w-full"
                        />
                      </div>
                    )}
                  </div>
                )}
              </div>
            </Link>
          </motion.article>

          {/* Row 2: Meezan + Sandah side by side on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {/* Meezan */}
            <motion.article variants={fadeUp}>
              <Link
                href={`/work/${meezan.slug}`}
                className="group block focus:outline-none focus-visible:outline-2 focus-visible:outline-brand-blue focus-visible:outline-offset-4"
              >
                <div
                  className="relative overflow-hidden p-8 md:p-10"
                  style={{ backgroundColor: meezan.palette.background }}
                >
                  <div className="relative" style={{ color: meezan.palette.ink }}>
                    <div
                      className="text-[10px] uppercase tracking-[0.3em] font-bold mb-4"
                      style={{ color: meezan.palette.primary }}
                    >
                      № 02 · {t("ERP / Accounting", "ERP / محاسبة")} · {meezan.year}
                    </div>
                    <h3 className="font-lyon font-bold tracking-tight leading-[0.95] text-4xl md:text-5xl mb-5">
                      {t(meezan.title.en, meezan.title.ar)}
                    </h3>
                    <p
                      className="text-sm md:text-base leading-relaxed max-w-md mb-6"
                      style={{ color: meezan.palette.inkSoft }}
                    >
                      {t(
                        meezan.shortDescription.en,
                        meezan.shortDescription.ar
                      )}
                    </p>
                  </div>

                  {meezan.shots?.desktopHome && (
                    <div className="mt-2 transition-transform duration-700 group-hover:scale-[1.01]">
                      <LaptopMockup
                        src={meezan.shots.desktopHome}
                        alt={`${meezan.title.en} — desktop`}
                        variant="dark"
                      />
                    </div>
                  )}
                </div>
              </Link>
            </motion.article>

            {/* Sandah — motion */}
            <motion.article variants={fadeUp}>
              <div className="relative overflow-hidden bg-black p-8 md:p-10 h-full flex flex-col">
                <div className="text-white">
                  <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-green mb-4">
                    № 03 · {t("Motion Design", "تصميم الحركة")} · {sandah.year}
                  </div>
                  <h3 className="font-lyon font-bold tracking-tight leading-[0.95] text-4xl md:text-5xl mb-5">
                    {t(sandah.title.en, sandah.title.ar)}
                  </h3>
                  <p className="text-sm md:text-base text-white/70 leading-relaxed max-w-md mb-6">
                    {t(sandah.description.en, sandah.description.ar)}
                  </p>
                </div>

                <div className="mt-auto">
                  <VimeoPlayer
                    vimeoId={sandah.vimeoId}
                    title={`${sandah.title.en} — ${sandah.client.en}`}
                  />
                </div>
              </div>
            </motion.article>
          </div>
        </motion.div>

        {/* ─── Bottom link ─── */}
        <div className="mt-16 md:mt-24 text-center">
          <Link
            href="/work"
            className="inline-flex items-center gap-3 text-xl md:text-2xl font-lyon font-bold text-black hover:text-brand-blue transition-colors focus:outline-none focus-visible:outline-2 focus-visible:outline-brand-blue focus-visible:outline-offset-4"
          >
            {t("Explore the full archive", "استعرض الأرشيف الكامل")}
            <svg
              className="w-5 h-5 rtl-flip"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </Link>
        </div>

        {/* Preserve original viewProject text to keep translations used */}
        <span className="sr-only">
          {t(siteContent.work.viewProject.en, siteContent.work.viewProject.ar)}
        </span>
      </div>
    </section>
  );
}
