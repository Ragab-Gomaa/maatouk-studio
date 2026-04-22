"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslation } from "@/lib/LocaleContext";
import { caseStudies } from "@/data/content";
import { fadeUp, staggerContainer } from "@/lib/animations";
import LivePreview from "@/components/case-study/LivePreview";
import FeatureGrid from "@/components/case-study/FeatureGrid";
import TechStackBar from "@/components/case-study/TechStackBar";
import StatsBlock from "@/components/case-study/StatsBlock";
import NarrativeBlock from "@/components/case-study/NarrativeBlock";
import Button from "@/components/ui/Button";

export default function CaseStudyPage() {
  const params = useParams();
  const { t, locale } = useTranslation();
  const slug = params.slug as string;
  const project = caseStudies.find((c) => c.slug === slug);

  if (!project) {
    return (
      <section className="min-h-screen flex items-center justify-center pt-40">
        <div className="text-center">
          <h1 className="text-4xl font-lyon font-bold mb-4">
            {t("Project not found", "المشروع غير موجود")}
          </h1>
          <Button href="/work" variant="primary" size="md">
            {t("Back to work", "العودة للأعمال")}
          </Button>
        </div>
      </section>
    );
  }

  // Next project (circular)
  const idx = caseStudies.findIndex((c) => c.slug === project.slug);
  const next =
    caseStudies.filter((c) => c.featured)[
      (caseStudies.filter((c) => c.featured).findIndex((c) => c.slug === project.slug) + 1) %
        caseStudies.filter((c) => c.featured).length
    ] ?? caseStudies[(idx + 1) % caseStudies.length];

  const onLight = project.onColor !== "dark";
  const heroTextClass = onLight ? "text-white" : "text-black";
  const heroMutedClass = onLight ? "text-white/60" : "text-black/60";
  const heroSubtleClass = onLight ? "text-white/40" : "text-black/40";

  return (
    <>
      {/* ─── Hero ─── */}
      <section
        className="relative pt-32 md:pt-40 pb-20 md:pb-28 overflow-hidden"
        style={{ backgroundColor: project.color }}
      >
        {/* Decorative pattern */}
        <div
          className={`absolute inset-0 opacity-[0.06] ${heroTextClass} pointer-events-none`}
          style={{
            backgroundImage: "url('/images/patterns/pattern-disciplines.svg')",
            backgroundSize: "180px",
            backgroundRepeat: "repeat",
          }}
          aria-hidden="true"
        />

        <div className={`relative z-10 max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-20 ${heroTextClass}`}>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Breadcrumb */}
            <motion.div variants={fadeUp} className="flex items-center gap-2 text-xs mb-8">
              <Link
                href="/work"
                className={`${heroMutedClass} hover:${heroTextClass} transition-colors uppercase tracking-[0.2em] font-medium`}
              >
                {t("Work", "أعمال")}
              </Link>
              <span className={heroSubtleClass} aria-hidden="true">/</span>
              <span className={`${heroMutedClass} uppercase tracking-[0.2em] font-medium`}>
                {t(project.category.en, project.category.ar)}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              variants={fadeUp}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] font-lyon font-bold tracking-tight leading-[0.95] mb-6 max-w-4xl"
            >
              {t(project.title.en, project.title.ar)}
            </motion.h1>

            {/* Short description */}
            <motion.p
              variants={fadeUp}
              className={`text-lg md:text-xl ${heroMutedClass} max-w-2xl leading-relaxed mb-12`}
            >
              {t(project.shortDescription.en, project.shortDescription.ar)}
            </motion.p>

            {/* Meta grid */}
            <motion.div
              variants={fadeUp}
              className={`grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 pt-10 border-t ${
                onLight ? "border-white/15" : "border-black/15"
              }`}
            >
              <div>
                <div className={`text-[10px] uppercase tracking-[0.2em] font-bold mb-2 ${heroSubtleClass}`}>
                  {t("Client", "العميل")}
                </div>
                <div className={`text-sm md:text-base font-medium ${heroTextClass}`}>
                  {t(project.client.en, project.client.ar)}
                </div>
              </div>
              <div>
                <div className={`text-[10px] uppercase tracking-[0.2em] font-bold mb-2 ${heroSubtleClass}`}>
                  {t("Year", "السنة")}
                </div>
                <div className={`text-sm md:text-base font-medium ${heroTextClass}`}>
                  {project.year}
                </div>
              </div>
              <div>
                <div className={`text-[10px] uppercase tracking-[0.2em] font-bold mb-2 ${heroSubtleClass}`}>
                  {t("Type", "النوع")}
                </div>
                <div className={`text-sm md:text-base font-medium ${heroTextClass}`}>
                  {t(project.category.en, project.category.ar)}
                </div>
              </div>
              <div>
                <div className={`text-[10px] uppercase tracking-[0.2em] font-bold mb-2 ${heroSubtleClass}`}>
                  {t("Live Site", "الموقع")}
                </div>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-sm md:text-base font-medium inline-flex items-center gap-1.5 ${heroTextClass} hover:opacity-80 transition-opacity`}
                >
                  <span className="truncate max-w-[140px]">
                    {project.liveUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                  </span>
                  <svg className="w-3 h-3 rtl-flip shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M7 17L17 7M7 7h10v10" />
                  </svg>
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── Summary ─── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-20">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="text-xl md:text-2xl lg:text-3xl font-lyon text-black/85 leading-[1.4] max-w-4xl"
          >
            {t(project.summary.en, project.summary.ar)}
          </motion.p>
        </div>
      </section>

      {/* ─── Live Preview ─── */}
      <section className="py-10 md:py-14 bg-surface">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-20">
          <LivePreview
            url={project.liveUrl}
            title={project.title.en}
            label={t("Live Preview", "معاينة مباشرة")}
          />
        </div>
      </section>

      {/* ─── Challenge & Approach ─── */}
      {(project.challenge || project.approach) && (
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-20 space-y-20 md:space-y-24">
            {project.challenge && (
              <NarrativeBlock
                label={t("The Challenge", "التحدي")}
                heading={{
                  en: "Why this project existed.",
                  ar: "لماذا وُجد هذا المشروع.",
                }}
                body={project.challenge}
              />
            )}
            {project.approach && (
              <NarrativeBlock
                label={t("Our Approach", "منهجنا")}
                heading={{
                  en: "How we solved it.",
                  ar: "كيف حللناه.",
                }}
                body={project.approach}
              />
            )}
          </div>
        </section>
      )}

      {/* ─── Features ─── */}
      <section className="py-20 md:py-28 bg-surface">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-20">
          <FeatureGrid
            features={project.features}
            label={t("What's inside", "ما بالداخل")}
            heading={{
              en: "The features that power the experience.",
              ar: "المميزات التي تصنع التجربة.",
            }}
          />
        </div>
      </section>

      {/* ─── Tech Stack & Stats ─── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-20 space-y-16">
          <TechStackBar stack={project.techStack} />
          {project.stats && project.stats.length > 0 && (
            <StatsBlock stats={project.stats} color="dark" />
          )}
        </div>
      </section>

      {/* ─── Next Project ─── */}
      <section className="py-20 md:py-28 bg-surface-low border-t border-black/[0.06]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-20">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-black/40 mb-3">
                {t("Next project", "المشروع التالي")}
              </div>
              <Link
                href={`/work/${next.slug}`}
                className="inline-flex items-center gap-4 group"
              >
                <span className="text-3xl md:text-5xl font-lyon font-bold text-black group-hover:text-brand-blue transition-colors">
                  {t(next.title.en, next.title.ar)}
                </span>
                <svg
                  className="w-6 h-6 md:w-8 md:h-8 text-brand-blue rtl-flip transition-transform duration-500 group-hover:translate-x-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <Button href="/work" variant="secondary" size="md">
              {t("All projects", "كل المشاريع")}
            </Button>
          </div>
          {/* locale marker to avoid unused warning */}
          <span className="sr-only">{locale}</span>
        </div>
      </section>
    </>
  );
}
