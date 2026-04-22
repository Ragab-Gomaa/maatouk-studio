"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslation } from "@/lib/LocaleContext";
import type { CaseStudy } from "@/data/content";
import { DualMockup } from "./DeviceMockup";

interface ProjectHeroProps {
  project: CaseStudy;
}

/**
 * ProjectHero — the editorial opening for a case study. Uses the project's
 * own palette and typography so every case study feels like its own world.
 */
export default function ProjectHero({ project }: ProjectHeroProps) {
  const { t } = useTranslation();
  const { palette } = project;

  return (
    <section
      className="relative pt-32 md:pt-40 pb-24 md:pb-32 overflow-hidden"
      style={{
        backgroundColor: palette.background,
        color: palette.ink,
      }}
    >
      {/* Subtle pattern */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          color: palette.primary,
          backgroundImage:
            "url('/images/patterns/pattern-disciplines.svg')",
          backgroundSize: "200px",
          backgroundRepeat: "repeat",
        }}
        aria-hidden="true"
      />

      {/* Soft vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(1200px 400px at 80% 20%, ${palette.primary}14, transparent)`,
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-20">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 text-xs mb-10"
        >
          <Link
            href="/work"
            className="opacity-60 hover:opacity-100 transition-opacity uppercase tracking-[0.25em] font-medium"
            style={{ color: palette.ink }}
          >
            {t("Work", "أعمال")}
          </Link>
          <span style={{ color: palette.ink, opacity: 0.4 }} aria-hidden="true">
            /
          </span>
          <span
            className="uppercase tracking-[0.25em] font-medium opacity-60"
            style={{ color: palette.ink }}
          >
            {t(project.category.en, project.category.ar)}
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1.2fr] gap-10 lg:gap-16 items-center">
          {/* ─── Left: Editorial title block ─── */}
          <div>
            {/* Year mark */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center gap-4 mb-6"
            >
              <span
                className="font-lyon text-[10px] uppercase tracking-[0.3em] font-medium"
                style={{ color: palette.primary }}
              >
                Project № {String(project.order).padStart(2, "0")}
              </span>
              <span
                className="h-px w-12"
                style={{ backgroundColor: palette.primary, opacity: 0.6 }}
                aria-hidden="true"
              />
              <span
                className="text-xs opacity-60 font-medium"
                style={{ color: palette.ink }}
              >
                {project.year}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-lyon font-bold tracking-[-0.02em] mb-6 text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] leading-[0.92]"
              style={{ color: palette.ink }}
            >
              {t(project.title.en, project.title.ar)}
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base md:text-lg leading-relaxed max-w-lg"
              style={{ color: palette.inkSoft }}
            >
              {t(project.shortDescription.en, project.shortDescription.ar)}
            </motion.p>

            {/* Tag pills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap gap-2 mt-8"
            >
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-[10px] uppercase tracking-[0.2em] font-medium px-3 py-1.5 border"
                  style={{
                    borderColor: `${palette.ink}25`,
                    color: palette.inkSoft,
                  }}
                >
                  {t(tag.en, tag.ar)}
                </span>
              ))}
            </motion.div>
          </div>

          {/* ─── Right: Dual mockup composition ─── */}
          {project.shots?.desktopHome && project.shots?.mobileHome && (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.0, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <DualMockup
                desktopSrc={project.shots.desktopHome}
                mobileSrc={project.shots.mobileHome}
                desktopAlt={`${project.title.en} — desktop view`}
                mobileAlt={`${project.title.en} — mobile view`}
                laptopVariant="dark"
              />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
