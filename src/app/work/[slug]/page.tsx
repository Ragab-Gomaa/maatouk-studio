"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { useTranslation } from "@/lib/LocaleContext";
import { caseStudies, motionProjects } from "@/data/content";
import Button from "@/components/ui/Button";

export default function ProjectPage() {
  const params = useParams();
  const { t } = useTranslation();
  const slug = params.slug as string;

  const caseStudy = caseStudies.find((c) => c.slug === slug);
  const motionProject = motionProjects.find((m) => m.slug === slug);

  if (!caseStudy && !motionProject) {
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

  if (motionProject) {
    return (
      <>
        <section
          className="pt-28 md:pt-32 pb-12 md:pb-16 relative overflow-hidden bg-ink text-white"
          style={{ backgroundColor: motionProject.color }}
        >
          <div className="max-w-[1320px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] font-semibold mb-10 text-white/70 hover:text-white transition-colors"
            >
              <svg
                className="w-3.5 h-3.5 rotate-180 rtl-flip"
                viewBox="0 0 14 14"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M3 7h8M8 4l3 3-3 3" />
              </svg>
              {t("All work", "كل الأعمال")}
            </Link>

            <div className="flex items-center gap-3 mb-6">
              <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-brand-green">
                № {String(motionProject.order).padStart(2, "0")}
              </span>
              <span className="h-px w-8 bg-brand-green/40" />
              <span className="text-[11px] opacity-70 font-medium">
                {t("Motion Design", "موشن جرافيك")} · {motionProject.year}
              </span>
            </div>

            <h1 className="font-lyon font-bold tracking-[-0.03em] leading-[0.92] text-5xl md:text-7xl lg:text-[7rem] mb-4">
              {t(motionProject.title.en, motionProject.title.ar)}
            </h1>
            <p className="text-sm md:text-base uppercase tracking-[0.2em] text-white/60 mb-8">
              {t(motionProject.client.en, motionProject.client.ar)}
            </p>
            <p className="text-lg md:text-xl max-w-2xl leading-relaxed text-white/75 mb-12">
              {t(motionProject.description.en, motionProject.description.ar)}
            </p>

            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl max-w-5xl bg-black">
              <iframe
                src={`https://player.vimeo.com/video/${motionProject.vimeoId}?title=0&byline=0&portrait=0`}
                className="absolute inset-0 w-full h-full"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title={motionProject.title.en}
              />
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-surface text-center">
          <div className="flex flex-wrap gap-3 justify-center">
            <Button
              href={`https://vimeo.com/${motionProject.vimeoId}`}
              variant="primary"
              size="md"
              withArrow
              external
            >
              {t("Watch on Vimeo", "شاهد على Vimeo")}
            </Button>
            <Button href="/work" variant="secondary" size="md">
              {t("Back to work", "العودة للأعمال")}
            </Button>
          </div>
        </section>
      </>
    );
  }

  // Case study page
  const project = caseStudy!;
  return (
    <>
      <section
        className="pt-28 md:pt-32 pb-12 md:pb-16 relative overflow-hidden"
        style={{
          backgroundColor: project.palette.background,
          color: project.palette.ink,
        }}
      >
        <div className="max-w-[1320px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] font-semibold mb-10"
            style={{ color: project.palette.inkSoft }}
          >
            <svg
              className="w-3.5 h-3.5 rotate-180 rtl-flip"
              viewBox="0 0 14 14"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M3 7h8M8 4l3 3-3 3" />
            </svg>
            {t("All work", "كل الأعمال")}
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <span
              className="text-[10px] uppercase tracking-[0.25em] font-semibold"
              style={{ color: project.palette.primary }}
            >
              № {String(project.order).padStart(2, "0")}
            </span>
            <span
              className="h-px w-8"
              style={{ backgroundColor: project.palette.primary, opacity: 0.4 }}
            />
            <span className="text-[11px] opacity-60 font-medium">
              {t(project.category.en, project.category.ar)} · {project.year}
            </span>
          </div>

          <h1 className="font-lyon font-bold tracking-[-0.03em] leading-[0.92] text-5xl md:text-7xl lg:text-[7rem] mb-6 max-w-4xl">
            {t(project.title.en, project.title.ar)}
          </h1>
          <p
            className="text-lg md:text-xl max-w-2xl leading-relaxed mb-10"
            style={{ color: project.palette.inkSoft }}
          >
            {t(project.shortDescription.en, project.shortDescription.ar)}
          </p>

          {project.shots?.desktopHome && (
            <div className="rounded-2xl overflow-hidden shadow-2xl max-w-4xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.shots.desktopHome}
                alt={project.title.en}
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          )}
        </div>
      </section>

      <section className="py-12 md:py-16 bg-surface text-center">
        <p className="text-ink-soft mb-6 max-w-xl mx-auto px-6">
          {t(
            "Full case study content coming soon. Visit the live site in the meantime.",
            "محتوى دراسة الحالة الكاملة قريباً. زُر الموقع اللايف في غضون ذلك."
          )}
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Button
            href={project.liveUrl}
            variant="primary"
            size="md"
            withArrow
            external
          >
            {t("Visit live site", "زيارة الموقع اللايف")}
          </Button>
          <Button href="/work" variant="secondary" size="md">
            {t("Back to work", "العودة للأعمال")}
          </Button>
        </div>
      </section>
    </>
  );
}
