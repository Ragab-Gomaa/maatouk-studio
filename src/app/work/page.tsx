"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "@/lib/LocaleContext";
import { siteContent, caseStudies, motionProjects } from "@/data/content";
import { fadeUp } from "@/lib/animations";
import VimeoPlayer from "@/components/case-study/VimeoPlayer";

type Filter =
  | "all"
  | "websites"
  | "ecommerce"
  | "erp"
  | "motion-client"
  | "motion-spec";

const filters: { key: Filter; label: { en: string; ar: string } }[] = [
  { key: "all", label: { en: "All", ar: "الكل" } },
  { key: "websites", label: { en: "Websites", ar: "مواقع" } },
  { key: "ecommerce", label: { en: "E-commerce", ar: "تجارة إلكترونية" } },
  { key: "erp", label: { en: "ERP / Apps", ar: "أنظمة / تطبيقات" } },
  { key: "motion-client", label: { en: "Motion — Client", ar: "موشن — عملاء" } },
  { key: "motion-spec", label: { en: "Motion — Personal", ar: "موشن — شخصي" } },
];

export default function WorkPage() {
  const { t } = useTranslation();
  const [filter, setFilter] = useState<Filter>("all");

  const visibleCaseStudies = useMemo(() => {
    if (filter === "all" || filter === "websites") {
      return [...caseStudies].sort((a, b) => a.order - b.order);
    }
    if (filter === "ecommerce") {
      return caseStudies.filter((c) => c.categories.includes("ecommerce"));
    }
    if (filter === "erp") {
      return caseStudies.filter(
        (c) => c.categories.includes("erp") || c.categories.includes("enterprise")
      );
    }
    return [];
  }, [filter]);

  const visibleMotion = useMemo(() => {
    if (filter === "all") {
      return [...motionProjects].sort((a, b) => a.order - b.order);
    }
    if (filter === "motion-client") {
      return motionProjects
        .filter((m) => m.kind === "client")
        .sort((a, b) => a.order - b.order);
    }
    if (filter === "motion-spec") {
      return motionProjects
        .filter((m) => m.kind === "spec")
        .sort((a, b) => a.order - b.order);
    }
    return [];
  }, [filter]);

  const showClientGroup = filter === "all" || filter === "motion-client";
  const showSpecGroup = filter === "all" || filter === "motion-spec";

  return (
    <>
      {/* ─── Hero ─── */}
      <section className="pt-32 md:pt-40 pb-14 md:pb-20 bg-surface relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03] text-brand-blue pointer-events-none"
          style={{
            backgroundImage: "url('/images/patterns/pattern-disciplines.svg')",
            backgroundSize: "180px",
            backgroundRepeat: "repeat",
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-6 md:mb-8">
              <span className="w-2 h-2 rotate-45 bg-brand-blue" />
              <span className="text-xs font-medium uppercase tracking-[0.25em] text-brand-blue">
                {t("Portfolio", "أعمالنا")}
              </span>
              <span className="h-px w-12 bg-brand-blue/20" />
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-lyon font-bold tracking-tight leading-[0.95] mb-6">
              {t("Selected", "أعمال")}
              <br />
              <span className="text-black/30">{t("Work", "مختارة")}</span>
            </h1>
            <p className="text-base md:text-lg text-black/55 max-w-2xl leading-relaxed">
              {t(siteContent.work.sub.en, siteContent.work.sub.ar)}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── Filter Bar ─── */}
      <section className="sticky top-20 md:top-24 z-30 bg-surface/85 backdrop-blur-md border-y border-black/[0.06]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-20 py-4 md:py-5">
          <div
            role="tablist"
            aria-label={t("Project filters", "مرشحات المشاريع")}
            className="flex gap-2 md:gap-3 overflow-x-auto -mx-6 px-6 sm:mx-0 sm:px-0"
          >
            {filters.map((f) => {
              const active = filter === f.key;
              return (
                <button
                  key={f.key}
                  role="tab"
                  aria-selected={active}
                  onClick={() => setFilter(f.key)}
                  className={`shrink-0 px-4 md:px-5 py-2 md:py-2.5 text-xs md:text-sm font-medium border transition-colors duration-300 focus:outline-none focus-visible:outline-2 focus-visible:outline-brand-blue focus-visible:outline-offset-2 ${
                    active
                      ? "border-brand-blue bg-brand-blue text-white"
                      : "border-black/15 text-black/70 hover:border-brand-blue/40 hover:text-brand-blue"
                  }`}
                >
                  {t(f.label.en, f.label.ar)}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Web Case Studies ─── */}
      {visibleCaseStudies.length > 0 && (
        <section className="py-14 md:py-20 bg-surface">
          <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-20">
            <div className="flex items-center gap-3 mb-8 md:mb-12">
              <span className="w-2 h-2 rotate-45 bg-brand-blue" />
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-blue">
                {t("Case Studies", "دراسات حالة")}
              </span>
              <span className="h-px flex-1 bg-brand-blue/10" />
            </div>

            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
            >
              <AnimatePresence mode="popLayout">
                {visibleCaseStudies.map((project, i) => (
                  <motion.div
                    key={project.slug}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5, delay: i * 0.06 }}
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
                              {project.tags.slice(0, 3).map((tag, ti) => (
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
                                  : "text-3xl md:text-4xl"
                              }`}
                            >
                              {t(project.title.en, project.title.ar)}
                            </h3>
                            <p className="text-sm md:text-base text-white/70 max-w-xl leading-relaxed">
                              {t(
                                project.shortDescription.en,
                                project.shortDescription.ar
                              )}
                            </p>
                            <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-brand-green opacity-0 group-hover:opacity-100 transition-opacity duration-500">
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
              </AnimatePresence>
            </motion.div>
          </div>
        </section>
      )}

      {/* ─── Motion Projects ─── */}
      {visibleMotion.length > 0 && (
        <section className="py-14 md:py-20 bg-black text-white">
          <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-20">
            <div className="flex items-center gap-3 mb-8 md:mb-12">
              <span className="w-2 h-2 rotate-45 bg-brand-green" />
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-green">
                {t("Motion Projects", "أعمال الموشن")}
              </span>
              <span className="h-px flex-1 bg-white/10" />
            </div>

            {/* Client work */}
            {showClientGroup &&
              visibleMotion.filter((m) => m.kind === "client").length > 0 && (
                <>
                  <h2 className="text-2xl md:text-3xl font-lyon font-bold tracking-tight mb-8">
                    {t("Client work", "أعمال عملاء")}
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                    {visibleMotion
                      .filter((m) => m.kind === "client")
                      .map((m) => (
                        <motion.div
                          key={m.slug}
                          variants={fadeUp}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true, margin: "-60px" }}
                        >
                          <VimeoPlayer
                            vimeoId={m.vimeoId}
                            title={`${m.title.en} — ${m.client.en}`}
                          />
                          <div className="mt-4 flex items-start justify-between gap-4">
                            <div>
                              <h3 className="text-lg md:text-xl font-lyon font-bold">
                                {t(m.title.en, m.title.ar)}
                              </h3>
                              <p className="text-xs md:text-sm text-white/50 mt-1">
                                {t(m.client.en, m.client.ar)} — {m.year}
                              </p>
                            </div>
                            <span className="text-[10px] uppercase tracking-[0.15em] font-bold px-2.5 py-1 border border-brand-green/40 text-brand-green shrink-0">
                              {t("Client", "عميل")}
                            </span>
                          </div>
                        </motion.div>
                      ))}
                  </div>
                </>
              )}

            {/* Personal / Spec work */}
            {showSpecGroup &&
              visibleMotion.filter((m) => m.kind === "spec").length > 0 && (
                <>
                  <div className="my-14 md:my-20 flex items-center gap-4">
                    <span className="h-px flex-1 bg-white/10" />
                    <div className="text-center max-w-xl">
                      <h2 className="text-2xl md:text-3xl font-lyon font-bold tracking-tight mb-2">
                        {t("Personal projects", "مشاريع شخصية")}
                      </h2>
                      <p className="text-[11px] md:text-sm text-white/50 leading-relaxed">
                        {t(
                          "Spec work and explorations. Not affiliated with the brands shown.",
                          "أعمال استكشافية ومشاريع تدريبية. غير مرتبطة بالعلامات التجارية الظاهرة."
                        )}
                      </p>
                    </div>
                    <span className="h-px flex-1 bg-white/10" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                    {visibleMotion
                      .filter((m) => m.kind === "spec")
                      .map((m) => (
                        <motion.div
                          key={m.slug}
                          variants={fadeUp}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true, margin: "-60px" }}
                        >
                          <VimeoPlayer
                            vimeoId={m.vimeoId}
                            title={`${m.title.en} (Personal)`}
                          />
                          <div className="mt-4 flex items-start justify-between gap-4">
                            <div>
                              <h3 className="text-lg md:text-xl font-lyon font-bold">
                                {t(m.title.en, m.title.ar)}
                              </h3>
                              <p className="text-xs md:text-sm text-white/50 mt-1">
                                {t(m.client.en, m.client.ar)} — {m.year}
                              </p>
                            </div>
                            <span className="text-[10px] uppercase tracking-[0.15em] font-bold px-2.5 py-1 border border-white/20 text-white/60 shrink-0">
                              {t("Personal", "شخصي")}
                            </span>
                          </div>
                        </motion.div>
                      ))}
                  </div>
                </>
              )}
          </div>
        </section>
      )}

      {/* ─── Empty state ─── */}
      {visibleCaseStudies.length === 0 && visibleMotion.length === 0 && (
        <section className="py-32 bg-surface text-center">
          <p className="text-black/50">
            {t(
              "No projects match this filter yet.",
              "لا توجد مشاريع تطابق هذا الفلتر بعد."
            )}
          </p>
        </section>
      )}
    </>
  );
}
