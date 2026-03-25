"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "@/lib/LocaleContext";
import { siteContent, caseStudies } from "@/data/content";
import { fadeUp, staggerContainer } from "@/lib/animations";

const filters = [
  { key: "all", en: "All", ar: "الكل" },
  { key: "branding", en: "Branding", ar: "هوية بصرية" },
  { key: "motion", en: "Motion", ar: "موشن" },
  { key: "website", en: "Websites", ar: "مواقع" },
];

export default function WorkPage() {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered = activeFilter === "all"
    ? caseStudies
    : caseStudies.filter((project) => {
        const cat = project.category.en.toLowerCase();
        if (activeFilter === "branding") return cat.includes("branding");
        if (activeFilter === "motion") return cat.includes("motion");
        if (activeFilter === "website") return cat.includes("website");
        return true;
      });

  return (
    <>
      {/* Hero */}
      <section className="pt-40 md:pt-48 pb-16 md:pb-24 bg-surface">
        <div className="max-w-[1440px] mx-auto px-8 md:px-12 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="w-2 h-2 rotate-45 bg-brand-blue" />
              <span className="text-xs font-medium uppercase tracking-[0.25em] text-brand-blue">
                {t("Portfolio", "أعمالنا")}
              </span>
              <span className="h-px w-12 bg-brand-blue/20" />
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-lyon font-bold tracking-tight leading-[0.95] mb-6">
              {t("Selected", "أعمال")}
              <br />
              <span className="text-black/30">
                {t("Work", "مختارة")}
              </span>
            </h1>
            <p className="text-lg text-black/50 max-w-2xl leading-relaxed">
              {t(siteContent.work.sub.en, siteContent.work.sub.ar)}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter + Projects Grid */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="max-w-[1440px] mx-auto px-8 md:px-12 lg:px-20">
          {/* Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-3 mb-14"
          >
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-6 py-2.5 text-sm font-medium border transition-all duration-300 ${
                  activeFilter === filter.key
                    ? "border-brand-blue bg-brand-blue text-white"
                    : "border-black/10 text-black/50 hover:border-brand-blue/30 hover:text-brand-blue"
                }`}
              >
                {t(filter.en, filter.ar)}
              </button>
            ))}
          </motion.div>

          {/* Projects */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-10"
            >
              {filtered.length > 0 ? (
                filtered.map((project) => (
                  <motion.a
                    key={project.slug}
                    href={`/work/${project.slug}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="group"
                  >
                    <div
                      className="relative aspect-[4/3] overflow-hidden mb-6"
                      style={{ backgroundColor: project.color }}
                    >
                      {/* Brand mark watermark */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg viewBox="0 0 473.71 473.15" className="w-32 h-32 text-white/10">
                          <rect fill="currentColor" x="271.74" y="271.46" width="167.08" height="167.08" transform="translate(-146.96 355.2) rotate(-45)" />
                          <polygon fill="currentColor" points="236.57 355 118.43 236.85 .28 355 1.2 355.92 0 355.92 0 473.15 118.43 473.15 118.43 473.15 118.43 473.15 236.85 473.15 236.85 355.92 235.66 355.92 236.57 355" />
                          <rect fill="currentColor" x="34.89" y="34.6" width="167.08" height="167.08" transform="translate(-48.86 118.34) rotate(-45)" />
                          <polygon fill="currentColor" points="356.84 1.55 355.28 0 353.73 1.55 236.85 1.55 236.85 118.78 237.77 118.78 355.28 236.29 472.79 118.78 473.71 118.78 473.71 1.55 356.84 1.55" />
                        </svg>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />
                    </div>

                    <div>
                      <h2 className="text-2xl md:text-3xl font-lyon font-bold group-hover:text-brand-blue transition-colors">
                        {t(project.title.en, project.title.ar)}
                      </h2>
                      <p className="text-sm text-black/40 mt-1 font-medium">
                        {t(project.category.en, project.category.ar)} — {project.year}
                      </p>
                      <p className="text-sm text-black/50 mt-3 max-w-md leading-relaxed">
                        {t(project.description.en, project.description.ar)}
                      </p>
                    </div>
                  </motion.a>
                ))
              ) : (
                <div className="md:col-span-2 py-20 text-center">
                  <span className="w-3 h-3 rotate-45 bg-black/10 inline-block mb-4" />
                  <p className="text-black/30 text-lg font-medium">
                    {t("No projects in this category yet.", "لا توجد مشاريع في هذه الفئة بعد.")}
                  </p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}
