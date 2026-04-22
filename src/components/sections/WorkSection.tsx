"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslation } from "@/lib/LocaleContext";
import { siteContent, caseStudies, motionProjects } from "@/data/content";
import { fadeUp, staggerContainer } from "@/lib/animations";
import SectionLabel from "@/components/ui/SectionLabel";
import VimeoPlayer from "@/components/case-study/VimeoPlayer";

export default function WorkSection() {
  const { t } = useTranslation();

  const dolcebello = caseStudies.find((c) => c.slug === "dolcebello");
  const meezan = caseStudies.find((c) => c.slug === "meezan");
  const sandah = motionProjects.find((m) => m.slug === "sandah");

  if (!dolcebello || !meezan || !sandah) return null;

  return (
    <section className="py-24 md:py-36 bg-surface relative">
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-24">
          <div>
            <SectionLabel>{t("Portfolio", "أعمالنا")}</SectionLabel>
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-4xl md:text-6xl lg:text-7xl font-lyon font-bold tracking-tight mt-6"
            >
              {t(siteContent.work.headline.en, siteContent.work.headline.ar)}
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

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
        >
          {/* ── Dolcebello — full width hero card ── */}
          <motion.div variants={fadeUp} className="md:col-span-2">
            <Link
              href={`/work/${dolcebello.slug}`}
              className="group relative block focus:outline-none focus-visible:outline-2 focus-visible:outline-brand-blue focus-visible:outline-offset-4"
            >
              <div
                className="relative overflow-hidden aspect-[2/1]"
                style={{ backgroundColor: dolcebello.color }}
              >
                <div
                  className="absolute inset-0 opacity-10 text-white pointer-events-none"
                  style={{
                    backgroundImage:
                      "url('/images/patterns/pattern-disciplines.svg')",
                    backgroundSize: "160px",
                    backgroundRepeat: "repeat",
                  }}
                  aria-hidden="true"
                />

                <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-10 text-white">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex flex-wrap gap-2">
                      {dolcebello.tags.slice(0, 2).map((tag, ti) => (
                        <span
                          key={ti}
                          className="text-[10px] uppercase tracking-[0.2em] font-medium text-white/70 border border-white/20 px-2.5 py-1"
                        >
                          {t(tag.en, tag.ar)}
                        </span>
                      ))}
                    </div>
                    <span className="text-xs text-white/50 font-medium shrink-0">
                      {dolcebello.year}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-lyon font-bold tracking-tight mb-3 text-4xl md:text-6xl lg:text-7xl">
                      {t(dolcebello.title.en, dolcebello.title.ar)}
                    </h3>
                    <p className="text-sm md:text-base text-white/75 max-w-xl leading-relaxed">
                      {t(
                        dolcebello.shortDescription.en,
                        dolcebello.shortDescription.ar
                      )}
                    </p>
                    <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-brand-green opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {t(
                        siteContent.work.viewProject.en,
                        siteContent.work.viewProject.ar
                      )}
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
                </div>

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 pointer-events-none" />
              </div>
            </Link>
          </motion.div>

          {/* ── Meezan card ── */}
          <motion.div variants={fadeUp}>
            <Link
              href={`/work/${meezan.slug}`}
              className="group relative block focus:outline-none focus-visible:outline-2 focus-visible:outline-brand-blue focus-visible:outline-offset-4"
            >
              <div
                className="relative overflow-hidden aspect-[4/3]"
                style={{ backgroundColor: meezan.color }}
              >
                <div
                  className="absolute inset-0 opacity-10 text-white pointer-events-none"
                  style={{
                    backgroundImage:
                      "url('/images/patterns/pattern-disciplines.svg')",
                    backgroundSize: "160px",
                    backgroundRepeat: "repeat",
                  }}
                  aria-hidden="true"
                />

                <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-10 text-white">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex flex-wrap gap-2">
                      {meezan.tags.slice(0, 2).map((tag, ti) => (
                        <span
                          key={ti}
                          className="text-[10px] uppercase tracking-[0.2em] font-medium text-white/70 border border-white/20 px-2.5 py-1"
                        >
                          {t(tag.en, tag.ar)}
                        </span>
                      ))}
                    </div>
                    <span className="text-xs text-white/50 font-medium shrink-0">
                      {meezan.year}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-lyon font-bold tracking-tight mb-3 text-2xl md:text-3xl lg:text-4xl">
                      {t(meezan.title.en, meezan.title.ar)}
                    </h3>
                    <p className="text-sm text-white/70 max-w-xl leading-relaxed line-clamp-2">
                      {t(
                        meezan.shortDescription.en,
                        meezan.shortDescription.ar
                      )}
                    </p>
                    <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-brand-green opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {t(
                        siteContent.work.viewProject.en,
                        siteContent.work.viewProject.ar
                      )}
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
                </div>

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 pointer-events-none" />
              </div>
            </Link>
          </motion.div>

          {/* ── Sandah motion card ── */}
          <motion.div variants={fadeUp}>
            <div className="group relative">
              <div className="relative aspect-[4/3] overflow-hidden">
                <VimeoPlayer
                  vimeoId={sandah.vimeoId}
                  title={`${sandah.title.en} — ${sandah.client.en}`}
                />
              </div>
              <div className="mt-4 flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-brand-blue border border-brand-blue/30 px-2.5 py-0.5">
                      {t("Motion", "موشن")}
                    </span>
                    <span className="text-xs text-black/40">
                      {sandah.year}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-lyon font-bold">
                    {t(sandah.title.en, sandah.title.ar)}
                  </h3>
                  <p className="text-sm text-black/55 mt-1.5 leading-relaxed">
                    {t(sandah.description.en, sandah.description.ar)}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
