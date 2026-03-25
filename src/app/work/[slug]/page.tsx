"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { useTranslation } from "@/lib/LocaleContext";
import { caseStudies } from "@/data/content";
import { fadeUp, staggerContainer } from "@/lib/animations";

export default function CaseStudyPage() {
  const params = useParams();
  const { t } = useTranslation();
  const slug = params.slug as string;
  const project = caseStudies.find((c) => c.slug === slug);

  if (!project) {
    return (
      <section className="min-h-screen flex items-center justify-center pt-40 md:pt-48">
        <div className="text-center">
          <h1 className="text-4xl font-lyon font-bold mb-4">
            {t("Project not found", "المشروع غير موجود")}
          </h1>
          <a href="/work" className="text-brand-blue hover:underline">
            {t("Back to work", "العودة للأعمال")}
          </a>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Hero */}
      <section
        className="pt-40 md:pt-48 pb-20 md:pb-32 relative"
        style={{ backgroundColor: project.color }}
      >
        <div className="max-w-[1440px] mx-auto px-8 md:px-12 lg:px-20 text-white">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
              <span className="w-2 h-2 rotate-45 bg-white/40" />
              <span className="text-xs font-medium uppercase tracking-[0.25em] text-white/60">
                {t(project.category.en, project.category.ar)}
              </span>
              <span className="h-px w-12 bg-white/20" />
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-5xl md:text-7xl lg:text-8xl font-lyon font-bold tracking-tight mb-8"
            >
              {t(project.title.en, project.title.ar)}
            </motion.h1>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-12 text-white/60 text-sm">
              <div>
                <span className="block text-white/40 text-xs uppercase tracking-[0.15em] font-bold mb-1">
                  {t("Client", "العميل")}
                </span>
                {t(project.client.en, project.client.ar)}
              </div>
              <div>
                <span className="block text-white/40 text-xs uppercase tracking-[0.15em] font-bold mb-1">
                  {t("Year", "السنة")}
                </span>
                {project.year}
              </div>
              <div>
                <span className="block text-white/40 text-xs uppercase tracking-[0.15em] font-bold mb-1">
                  {t("Scope", "النطاق")}
                </span>
                {t(project.category.en, project.category.ar)}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-[1440px] mx-auto px-8 md:px-12 lg:px-20">
          <div className="max-w-3xl">
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-lyon font-bold tracking-tight mb-6"
            >
              {t("About this project", "عن هذا المشروع")}
            </motion.h2>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-lg text-black/50 leading-relaxed mb-12"
            >
              {t(project.description.en, project.description.ar)}
            </motion.p>
          </div>

          {/* Image placeholders */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12"
          >
            {[1, 2, 3, 4].map((num) => (
              <motion.div
                key={num}
                variants={fadeUp}
                className="aspect-[4/3] bg-surface-low flex items-center justify-center"
              >
                <span className="text-black/30 text-sm">
                  {t(`Project image ${num}`, `صورة المشروع ${num}`)}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <div className="mt-24 text-center">
            <span className="w-2 h-2 rotate-45 bg-brand-green inline-block mb-8" />
            <p className="text-sm text-black/30 uppercase tracking-[0.2em] font-bold mb-4">
              {t("Next project", "المشروع التالي")}
            </p>
            <a
              href="/work"
              className="inline-flex items-center gap-2 text-2xl font-lyon font-bold text-brand-blue hover:underline"
            >
              {t("View all work", "عرض جميع الأعمال")}
              <svg className="w-5 h-5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
