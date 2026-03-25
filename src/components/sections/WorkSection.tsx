"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/lib/LocaleContext";
import { siteContent, caseStudies } from "@/data/content";
import { fadeUp, staggerContainer } from "@/lib/animations";
import SectionLabel from "@/components/ui/SectionLabel";

export default function WorkSection() {
  const { t } = useTranslation();
  const featured = caseStudies.filter((c) => c.featured);

  return (
    <section className="py-24 md:py-36 bg-surface relative">
      <div className="relative z-10 max-w-[1440px] mx-auto px-8 md:px-12 lg:px-20">
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
          <motion.a
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            href="/work"
            className="inline-flex items-center gap-2 text-brand-blue font-medium hover:gap-3 transition-all duration-300 shrink-0"
          >
            {t("View all work", "عرض جميع الأعمال")}
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </motion.a>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
        >
          {featured.map((project, i) => (
            <motion.a
              key={project.slug}
              href={`/work/${project.slug}`}
              variants={fadeUp}
              className={`group relative overflow-hidden ${
                i === 0 ? "md:col-span-2" : ""
              }`}
            >
              {/* Project Card */}
              <div
                className={`relative ${
                  i === 0 ? "aspect-[2/1]" : "aspect-[4/3]"
                } overflow-hidden`}
                style={{ backgroundColor: project.color }}
              >
                {/* Placeholder visual */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white/10">
                    <svg viewBox="0 0 473.71 473.15" className={`${i === 0 ? "w-64 h-64" : "w-40 h-40"}`}>
                      <rect fill="currentColor" x="271.74" y="271.46" width="167.08" height="167.08" transform="translate(-146.96 355.2) rotate(-45)" />
                      <polygon fill="currentColor" points="236.57 355 118.43 236.85 .28 355 1.2 355.92 0 355.92 0 473.15 118.43 473.15 118.43 473.15 118.43 473.15 236.85 473.15 236.85 355.92 235.66 355.92 236.57 355" />
                      <rect fill="currentColor" x="34.89" y="34.6" width="167.08" height="167.08" transform="translate(-48.86 118.34) rotate(-45)" />
                      <polygon fill="currentColor" points="356.84 1.55 355.28 0 353.73 1.55 236.85 1.55 236.85 118.78 237.77 118.78 355.28 236.29 472.79 118.78 473.71 118.78 473.71 1.55 356.84 1.55" />
                    </svg>
                  </div>
                </div>

                {/* Sample content label */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-white/20 backdrop-blur-sm text-white/80 text-xs">
                  {t("Sample project", "مشروع تجريبي")}
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500" />
              </div>

              {/* Info */}
              <div className="flex items-start justify-between gap-4 pt-5 pb-2">
                <div>
                  <h3 className="text-xl md:text-2xl font-lyon font-bold group-hover:text-brand-blue transition-colors">
                    {t(project.title.en, project.title.ar)}
                  </h3>
                  <p className="text-sm text-black/40 mt-1">
                    {t(project.category.en, project.category.ar)} — {project.year}
                  </p>
                </div>
                <div className="flex items-center gap-1 text-brand-blue opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0 mt-1 shrink-0">
                  <span className="text-sm font-medium">
                    {t(siteContent.work.viewProject.en, siteContent.work.viewProject.ar)}
                  </span>
                  <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
