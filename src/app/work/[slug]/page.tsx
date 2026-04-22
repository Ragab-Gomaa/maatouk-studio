"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { useTranslation } from "@/lib/LocaleContext";
import { caseStudies } from "@/data/content";

import ProjectHero from "@/components/case-study/ProjectHero";
import AtAGlance from "@/components/case-study/AtAGlance";
import ProjectNarrative from "@/components/case-study/ProjectNarrative";
import FeatureSpotlight from "@/components/case-study/FeatureSpotlight";
import ColorPalette from "@/components/case-study/ColorPalette";
import TypeSpecimen from "@/components/case-study/TypeSpecimen";
import { LaptopMockup, PhoneMockup } from "@/components/case-study/DeviceMockup";
import TechStackBar from "@/components/case-study/TechStackBar";
import StatsBlock from "@/components/case-study/StatsBlock";
import LivePreview from "@/components/case-study/LivePreview";
import NextProject from "@/components/case-study/NextProject";
import Button from "@/components/ui/Button";

export default function CaseStudyPage() {
  const params = useParams();
  const { t } = useTranslation();
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

  // Next project (cycling through featured case studies)
  const featured = caseStudies.sort((a, b) => a.order - b.order);
  const idx = featured.findIndex((c) => c.slug === project.slug);
  const next = featured[(idx + 1) % featured.length];

  // First feature spotlight picks the strongest feature
  const [featA, featB, featC, ...restFeatures] = project.features;

  return (
    <>
      {/* ─── Project Hero (per-project identity) ─── */}
      <ProjectHero project={project} />

      {/* ─── At a Glance ─── */}
      <AtAGlance project={project} />

      {/* ─── Summary lead ─── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-20">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="w-2 h-2 rotate-45 bg-brand-blue" />
                <span className="text-xs font-medium uppercase tracking-[0.25em] text-brand-blue">
                  {t("Overview", "نظرة عامة")}
                </span>
              </div>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              className="text-xl md:text-2xl lg:text-[1.65rem] font-lyon text-black/85 leading-[1.4]"
            >
              {t(project.summary.en, project.summary.ar)}
            </motion.p>
          </div>
        </div>
      </section>

      {/* ─── Narrative ─── */}
      <ProjectNarrative
        challenge={project.challenge}
        approach={project.approach}
        outcome={project.outcome}
      />

      {/* ─── Feature Spotlight 1 (first feature, laptop treatment, desktop screenshot) ─── */}
      {featA && project.shots?.desktopHome && (
        <section
          className="py-20 md:py-28"
          style={{ backgroundColor: project.palette.background }}
        >
          <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-20">
            <div
              className="flex items-center gap-3 mb-10"
              style={{ color: project.palette.primary }}
            >
              <span
                className="w-2 h-2 rotate-45"
                style={{ backgroundColor: project.palette.primary }}
              />
              <span className="text-xs font-medium uppercase tracking-[0.25em]">
                {t("In detail", "في التفاصيل")}
              </span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div style={{ color: project.palette.ink }}>
                <h3
                  className="text-3xl md:text-4xl lg:text-5xl font-lyon font-bold tracking-tight leading-[1.1] mb-5"
                  style={{ color: project.palette.ink }}
                >
                  {t(featA.title.en, featA.title.ar)}
                </h3>
                <p
                  className="text-base md:text-lg leading-relaxed max-w-lg"
                  style={{ color: project.palette.inkSoft }}
                >
                  {t(featA.desc.en, featA.desc.ar)}
                </p>
              </div>
              <div>
                <LaptopMockup
                  src={project.shots.desktopInner ?? project.shots.desktopHome}
                  alt={`${project.title.en} — detail view`}
                  variant="dark"
                  className="w-full max-w-[600px] ml-auto"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ─── Color Palette & Typography ─── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-20 space-y-20 md:space-y-28">
          <ColorPalette
            palette={project.palette}
            label={t("Brand palette", "ألوان المشروع")}
          />
          <TypeSpecimen
            displayName={project.typography.displayName}
            bodyName={project.typography.bodyName}
            note={project.typography.note}
            bg={project.palette.background}
            ink={project.palette.ink}
            accent={project.palette.primary}
          />
        </div>
      </section>

      {/* ─── Feature Spotlight 2 (second feature, phone treatment, mobile screenshot) ─── */}
      {featB && project.shots?.mobileHome && (
        <section className="py-20 md:py-28 bg-surface">
          <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-20">
            <FeatureSpotlight
              label={t("Mobile experience", "تجربة الجوال")}
              title={featB.title}
              body={featB.desc}
              imageSrc={project.shots.mobileHome}
              imageAlt={`${project.title.en} — mobile view`}
              device="phone"
              reverse
            />
          </div>
        </section>
      )}

      {/* ─── Feature Spotlight 3 (third feature, editorial) ─── */}
      {featC && (
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-20">
            <FeatureSpotlight
              label={t("Experience", "التجربة")}
              title={featC.title}
              body={featC.desc}
              imageSrc={project.shots?.desktopInner ?? project.shots?.desktopHome}
              imageAlt={`${project.title.en} — context`}
              device="laptop"
            />
          </div>
        </section>
      )}

      {/* ─── Remaining features in a compact grid ─── */}
      {restFeatures.length > 0 && (
        <section className="py-20 md:py-28 bg-surface">
          <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-20">
            <div className="flex items-center gap-3 mb-10">
              <span className="w-2 h-2 rotate-45 bg-brand-blue" />
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-blue">
                {t("And more", "وأكثر")}
              </span>
            </div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.08 } },
              }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
            >
              {restFeatures.map((f, i) => (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 16 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className="p-7 md:p-8 bg-white border border-black/[0.06] hover:border-brand-blue/30 transition-colors group"
                >
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-blue/60 mb-3">
                    0{i + 4}
                  </div>
                  <h4 className="text-lg md:text-xl font-lyon font-bold mb-2.5 group-hover:text-brand-blue transition-colors leading-snug">
                    {t(f.title.en, f.title.ar)}
                  </h4>
                  <p className="text-sm text-black/60 leading-relaxed">
                    {t(f.desc.en, f.desc.ar)}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* ─── Tech Stack + Stats ─── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-20 space-y-16">
          <TechStackBar stack={project.techStack} />
          {project.stats && project.stats.length > 0 && (
            <StatsBlock stats={project.stats} color="dark" />
          )}
        </div>
      </section>

      {/* ─── Live Preview ─── */}
      <section className="py-20 md:py-28 bg-surface border-t border-black/[0.06]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-20">
          <div className="max-w-3xl mb-10 md:mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-2 h-2 rotate-45 bg-brand-blue" />
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-blue">
                {t("Experience it", "جرّبه")}
              </span>
            </div>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-lyon font-bold tracking-tight leading-[1.1]">
              {t(
                "The live product, inside this page.",
                "المنتج اللايف، داخل هذه الصفحة."
              )}
            </h3>
          </div>
          <LivePreview url={project.liveUrl} title={project.title.en} />
        </div>
      </section>

      {/* ─── Next Project ─── */}
      <NextProject next={next} />
    </>
  );
}
