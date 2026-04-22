"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslation } from "@/lib/LocaleContext";
import { siteContent, caseStudies } from "@/data/content";
import { fadeUp, staggerContainer } from "@/lib/animations";
import SectionLabel from "@/components/ui/SectionLabel";

export default function WorkSection() {
  const { t } = useTranslation();
  const featured = [...caseStudies]
    .filter((c) => c.featured)
    .sort((a, b) => a.order - b.order)
    .slice(0, 4);

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
          {featured.map((project, i) => (
            <motion.div
              key={project.slug}
              variants={fadeUp}
              className={i === 0 ? "md:col-span-2" : ""}
            >
              <Link
                href={`/work/${project.slug}`}
                className="group relative block focus:outline-none focus-visible:outline-2 focus-visible:outline-brand-blue focus-visible:outline-offset-4"
              >
                <div
                  className={`relative overflow-hidden ${
                    i === 0 ? "aspect-[2/1]" : "aspect-[4/3]"
                  }`}
                  style={{ backgroundColor: project.color }}
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
                        {project.tags.slice(0, 2).map((tag, ti) => (
                          <span
                            key={ti}
                            className="text-[10px] uppercase tracking-[0.2em] font-medium text-white/70 border border-white/20 px-2.5 py-1"
                          >
                            {t(tag.en, tag.ar)}
                          </span>
                        ))}
                      </div>
                      <span className="text-xs text-white/50 font-medium shrink-0">
                        {project.year}
                      </span>
                    </div>

                    <div>
                      <h3
                        className={`font-lyon font-bold tracking-tight mb-3 ${
                          i === 0
                            ? "text-4xl md:text-6xl lg:text-7xl"
                            : "text-2xl md:text-3xl"
                        }`}
                      >
                        {t(project.title.en, project.title.ar)}
                      </h3>
                      <p className="text-sm text-white/70 max-w-xl leading-relaxed line-clamp-2">
                        {t(project.shortDescription.en, project.shortDescription.ar)}
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
          ))}
        </motion.div>
      </div>
    </section>
  );
}
