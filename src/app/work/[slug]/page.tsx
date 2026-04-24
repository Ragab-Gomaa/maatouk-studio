"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslation } from "@/lib/LocaleContext";
import { caseStudies, motionProjects, type CaseStudy } from "@/data/content";
import Button from "@/components/ui/Button";
import AnimatedNumber from "@/components/ui/AnimatedNumber";

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
            <BackToWork tone="dark" />

            <div className="flex items-center gap-3 mb-6">
              <span className="text-[11px] font-semibold text-brand-green">
                № {String(motionProject.order).padStart(2, "0")}
              </span>
              <span className="h-px w-8 bg-brand-green/40" />
              <span className="text-[11px] opacity-70 font-medium">
                {t("Motion Graphics", "موشن جرافيك")} · {motionProject.year}
              </span>
            </div>

            <h1 className="font-lyon font-bold tracking-[-0.03em] leading-[0.92] text-5xl md:text-7xl lg:text-[7rem] mb-4">
              {t(motionProject.title.en, motionProject.title.ar)}
            </h1>
            <p className="text-sm md:text-base text-white/60 mb-8">
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
  const sortedCaseStudies = [...caseStudies].sort((a, b) => a.order - b.order);
  const currentIndex = sortedCaseStudies.findIndex((c) => c.slug === project.slug);
  const nextCase = sortedCaseStudies[(currentIndex + 1) % sortedCaseStudies.length];

  return <CaseStudyView project={project} nextCase={nextCase} />;
}

/* ───────────────────────── Case Study View ───────────────────────── */

function CaseStudyView({
  project,
  nextCase,
}: {
  project: CaseStudy;
  nextCase: CaseStudy;
}) {
  return (
    <article style={{ backgroundColor: project.palette.background, color: project.palette.ink }}>
      <Hero project={project} />
      <MetaStrip project={project} />
      <Brief project={project} />
      <OurRead project={project} />
      <VisualSystem project={project} />
      <LiveShowcase project={project} />
      <FeatureGallery project={project} />
      <VisualWalkthrough project={project} />
      <TechnicalDepth project={project} />
      <ByTheNumbers project={project} />
      <OutcomeAndQuote project={project} />
      <Credits project={project} />
      <NextCase next={nextCase} />
    </article>
  );
}

/* ───────────────────────── Reusable bits ───────────────────────── */

function BackToWork({ tone = "light" }: { tone?: "light" | "dark" }) {
  const { t } = useTranslation();
  const cls =
    tone === "dark"
      ? "text-white/70 hover:text-white"
      : "opacity-70 hover:opacity-100";
  return (
    <Link
      href="/work"
      className={`inline-flex items-center gap-2 text-[12px] font-semibold mb-10 transition-opacity ${cls}`}
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
  );
}

function SectionKicker({
  label,
  project,
}: {
  label: string;
  project: CaseStudy;
}) {
  return (
    <div className="flex items-center gap-3 mb-8 md:mb-12">
      <span
        className="text-[11px] font-semibold tracking-[-0.005em]"
        style={{ color: project.palette.primary }}
      >
        {label}
      </span>
      <span
        className="h-px w-8"
        style={{ backgroundColor: project.palette.primary, opacity: 0.4 }}
      />
    </div>
  );
}

/* ─────────────────────────────── Hero ─────────────────────────────── */

function Hero({ project }: { project: CaseStudy }) {
  const { t, locale } = useTranslation();

  return (
    <section className="pt-28 md:pt-32 pb-14 md:pb-20 relative overflow-hidden">
      {/* Ambient glow using project's primary */}
      <div
        className="absolute top-[-200px] right-[-150px] w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none opacity-20"
        style={{ backgroundColor: project.palette.primary }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1320px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        <BackToWork tone="dark" />

        <div className="flex items-center gap-3 mb-6">
          <span
            className="text-[11px] font-semibold"
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

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className={`font-lyon font-bold tracking-[-0.035em] mb-6 max-w-4xl ${
            locale === "ar"
              ? "text-5xl md:text-7xl lg:text-[7rem] leading-[1.15]"
              : "text-[2.5rem] md:text-[3.5rem] lg:text-[5rem] xl:text-[6rem] leading-[0.95]"
          }`}
        >
          {t(project.title.en, project.title.ar)}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-base md:text-xl max-w-2xl leading-relaxed mb-12"
          style={{ color: project.palette.inkSoft }}
        >
          {t(project.shortDescription.en, project.shortDescription.ar)}
        </motion.p>

        {project.shots?.desktopHome && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl max-w-6xl mx-auto"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.shots.desktopHome}
              alt={project.title.en}
              className="w-full h-auto block"
              loading="eager"
            />
          </motion.div>
        )}
      </div>
    </section>
  );
}

/* ─────────────────────────── Meta Strip ─────────────────────────── */

function MetaStrip({ project }: { project: CaseStudy }) {
  const { t } = useTranslation();

  const items = [
    {
      label: t("Client", "العميل"),
      value: t(project.client.en, project.client.ar),
    },
    {
      label: t("Year", "السنة"),
      value: project.foundedYear
        ? `${project.year} · ${t("est.", "تأسست")} ${project.foundedYear}`
        : project.year,
    },
    {
      label: t("Scope", "النطاق"),
      value: project.scope ? t(project.scope.en, project.scope.ar) : t(project.category.en, project.category.ar),
    },
    {
      label: t("Duration", "المدّة"),
      value: project.duration ? t(project.duration.en, project.duration.ar) : "—",
    },
  ];

  return (
    <section
      className="py-10 md:py-14 border-y"
      style={{ borderColor: `${project.palette.primary}22` }}
    >
      <div className="max-w-[1320px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-8">
          {items.map((item) => (
            <div key={item.label}>
              <div
                className="text-[11px] font-semibold mb-2 uppercase tracking-wider opacity-50"
              >
                {item.label}
              </div>
              <div className="text-base md:text-lg font-medium leading-tight">
                {item.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── Brief ─────────────────────────── */

function Brief({ project }: { project: CaseStudy }) {
  const { t, locale } = useTranslation();

  if (!project.challenge) return null;

  const text = t(project.challenge.en, project.challenge.ar);
  const paragraphs = text.split("\n\n");

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-[1320px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-8 lg:gap-20">
          <div>
            <SectionKicker label={t("The brief", "السياق")} project={project} />
            <h2
              className={`font-lyon font-bold tracking-[-0.03em] max-w-md ${
                locale === "ar"
                  ? "text-3xl md:text-4xl lg:text-5xl leading-[1.25]"
                  : "text-[1.75rem] md:text-[2.25rem] lg:text-[2.75rem] leading-[1.05]"
              }`}
            >
              {t("Where they were stuck.", "أين كانوا عالقين.")}
            </h2>
          </div>
          <div className="space-y-5 text-base md:text-lg leading-relaxed max-w-2xl">
            {paragraphs.map((para, i) => (
              <p key={i} style={{ color: project.palette.inkSoft }}>
                {para}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── Our Read ─────────────────────────── */

function OurRead({ project }: { project: CaseStudy }) {
  const { t, locale } = useTranslation();

  if (!project.approach) return null;

  return (
    <section
      className="py-16 md:py-24 relative overflow-hidden"
      style={{ backgroundColor: project.palette.surface }}
    >
      <div className="max-w-[1320px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-8 lg:gap-20">
          <div>
            <SectionKicker label={t("Our read", "قراءتنا")} project={project} />
            <h2
              className={`font-lyon font-bold tracking-[-0.03em] max-w-md ${
                locale === "ar"
                  ? "text-3xl md:text-4xl lg:text-5xl leading-[1.25]"
                  : "text-[1.75rem] md:text-[2.25rem] lg:text-[2.75rem] leading-[1.05]"
              }`}
            >
              {t("How we approached it.", "كيف تعاملنا معه.")}
            </h2>
          </div>
          <div
            className="text-base md:text-lg leading-relaxed max-w-2xl"
            style={{ color: project.palette.inkSoft }}
          >
            <p>{t(project.approach.en, project.approach.ar)}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── Visual System ─────────────────────────── */

function VisualSystem({ project }: { project: CaseStudy }) {
  const { t, locale } = useTranslation();

  const swatches = [
    { name: t("Background", "الخلفية"), color: project.palette.background },
    { name: t("Surface", "السطح"), color: project.palette.surface },
    { name: t("Primary", "الأساسي"), color: project.palette.primary },
    { name: t("Accent", "اللون المساعد"), color: project.palette.accent },
    { name: t("Ink", "الحبر"), color: project.palette.ink },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-[1320px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-8 lg:gap-20 mb-12">
          <div>
            <SectionKicker label={t("Visual system", "النظام البصري")} project={project} />
            <h2
              className={`font-lyon font-bold tracking-[-0.03em] max-w-md ${
                locale === "ar"
                  ? "text-3xl md:text-4xl lg:text-5xl leading-[1.25]"
                  : "text-[1.75rem] md:text-[2.25rem] lg:text-[2.75rem] leading-[1.05]"
              }`}
            >
              {t("Foundations of the brand.", "أساسات العلامة.")}
            </h2>
          </div>
          <p
            className="text-base md:text-lg leading-relaxed max-w-2xl self-end"
            style={{ color: project.palette.inkSoft }}
          >
            {t(
              "A focused palette and a typographic pair that the storefront, the product page, and the admin dashboard all draw from — so the system reads as one voice across every screen.",
              "لوحة ألوان مركزة وزوج خطوط يستمد منهما المتجر وصفحة المنتج ولوحة الإدارة — بحيث يقرأ النظام بصوت واحد عبر كل شاشة."
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Palette */}
          <div
            className="rounded-3xl p-8 md:p-10"
            style={{ backgroundColor: project.palette.surface }}
          >
            <div className="text-[11px] font-semibold uppercase tracking-wider opacity-50 mb-6">
              {t("Color palette", "لوحة الألوان")}
            </div>
            <div className="grid grid-cols-5 gap-3">
              {swatches.map((s) => (
                <div key={s.name} className="text-center">
                  <div
                    className="w-full aspect-square rounded-2xl mb-3"
                    style={{
                      backgroundColor: s.color,
                      border: `1px solid ${project.palette.primary}22`,
                    }}
                  />
                  <div className="text-[11px] opacity-60 leading-tight">{s.name}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Typography */}
          <div
            className="rounded-3xl p-8 md:p-10"
            style={{ backgroundColor: project.palette.surface }}
          >
            <div className="text-[11px] font-semibold uppercase tracking-wider opacity-50 mb-6">
              {t("Typography", "الخطوط")}
            </div>
            <div className="space-y-6">
              <div>
                <div
                  className="font-lyon text-3xl md:text-4xl mb-1"
                  style={{ color: project.palette.ink }}
                >
                  {project.typography.displayName}
                </div>
                <div className="text-xs opacity-60">
                  {t("Display", "العرض")}
                </div>
              </div>
              <div>
                <div className="text-xl md:text-2xl mb-1">
                  {project.typography.bodyName}
                </div>
                <div className="text-xs opacity-60">
                  {t("Body", "النص")}
                </div>
              </div>
              {project.typography.note && (
                <p
                  className="text-sm leading-relaxed pt-3"
                  style={{
                    color: project.palette.inkSoft,
                    borderTop: `1px solid ${project.palette.primary}22`,
                  }}
                >
                  {t(project.typography.note.en, project.typography.note.ar)}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── Live Showcase ─────────────────────────── */

function LiveShowcase({ project }: { project: CaseStudy }) {
  const { t, locale } = useTranslation();

  if (!project.liveUrl) return null;

  const hostname = (() => {
    try {
      return new URL(project.liveUrl).hostname.replace("www.", "");
    } catch {
      return project.liveUrl;
    }
  })();

  return (
    <section
      className="py-16 md:py-24 relative overflow-hidden"
      style={{ backgroundColor: project.palette.surface }}
    >
      <div className="max-w-[1320px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-8 lg:gap-20 mb-12">
          <div>
            <SectionKicker label={t("Live", "لايف")} project={project} />
            <h2
              className={`font-lyon font-bold tracking-[-0.03em] max-w-md ${
                locale === "ar"
                  ? "text-3xl md:text-4xl lg:text-5xl leading-[1.25]"
                  : "text-[1.75rem] md:text-[2.25rem] lg:text-[2.75rem] leading-[1.05]"
              }`}
            >
              {t("See it running.", "شاهده يعمل.")}
            </h2>
          </div>
          <div className="self-end">
            <p
              className="text-base md:text-lg leading-relaxed max-w-2xl mb-6"
              style={{ color: project.palette.inkSoft }}
            >
              {t(
                "An embedded preview of the live site — interact with it directly, or open the full experience in a new tab.",
                "معاينة مدمجة للموقع الحي — تفاعل معه مباشرة، أو افتح التجربة الكاملة في تبويب جديد."
              )}
            </p>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 hover:scale-[1.02]"
              style={{
                backgroundColor: project.palette.primary,
                color: project.palette.background,
              }}
            >
              {t("Visit", "زيارة")} {hostname}
              <svg viewBox="0 0 14 14" className="w-3.5 h-3.5 rtl-flip" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M3 7h8M8 4l3 3-3 3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Browser frame with iframe */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-end">
          <BrowserFrame
            url={hostname}
            project={project}
            src={project.liveUrl}
            title={`${project.title.en} live preview`}
          />

          <PhoneFrame
            src={project.liveUrl}
            title={`${project.title.en} mobile preview`}
          />
        </div>

        <p className="text-xs text-center mt-6 opacity-50">
          {t(
            "Live preview. If the embed is blocked, use the visit button above.",
            "معاينة حيّة. إن مُنع التضمين، استخدم زر الزيارة أعلاه."
          )}
        </p>
      </div>
    </section>
  );
}

/**
 * Browser frame with a desktop-sized iframe (1440×900) scaled via CSS
 * container queries to fit the responsive container. The site renders
 * at true desktop resolution, then visually fits the frame.
 */
function BrowserFrame({
  url,
  project,
  src,
  title,
}: {
  url: string;
  project: CaseStudy;
  src: string;
  title: string;
}) {
  const FRAME_W = 1440;
  const FRAME_H = 900;

  return (
    <div
      className="rounded-2xl overflow-hidden shadow-2xl border"
      style={{ borderColor: `${project.palette.primary}22` }}
    >
      {/* Chrome bar */}
      <div
        className="px-4 py-2.5 flex items-center gap-2 border-b"
        style={{
          backgroundColor: project.palette.background,
          borderColor: `${project.palette.primary}1A`,
        }}
      >
        <span className="w-3 h-3 rounded-full bg-red-400/80" />
        <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
        <span className="w-3 h-3 rounded-full bg-green-400/80" />
        <div
          className="flex-1 mx-4 px-3 py-1 rounded text-xs text-center font-mono opacity-80"
          style={{
            backgroundColor: project.palette.surface,
            color: project.palette.inkSoft,
          }}
        >
          {url}
        </div>
        <span className="w-3 h-3 opacity-30" />
      </div>

      {/* Iframe at true desktop resolution, scaled to fit container width */}
      <div
        className="relative w-full bg-white overflow-hidden"
        style={{
          aspectRatio: `${FRAME_W} / ${FRAME_H}`,
          containerType: "inline-size",
        }}
      >
        <iframe
          src={src}
          title={title}
          loading="lazy"
          className="absolute top-0 left-0 border-0"
          style={{
            width: `${FRAME_W}px`,
            height: `${FRAME_H}px`,
            transform: `scale(calc(100cqw / ${FRAME_W}))`,
            transformOrigin: "top left",
          }}
        />
      </div>
    </div>
  );
}

/**
 * Phone frame with a mobile-sized iframe (390×844 — iPhone 14 viewport)
 * scaled down to fit a visible phone shell. The site renders at true
 * mobile resolution so the responsive layout looks like a real phone.
 */
function PhoneFrame({ src, title }: { src: string; title: string }) {
  const FRAME_W = 390; // iPhone 14 viewport width
  const FRAME_H = 844; // iPhone 14 viewport height
  const VISIBLE_W = 260;
  const SCALE = VISIBLE_W / FRAME_W;
  const VISIBLE_H = FRAME_H * SCALE;

  return (
    <div
      className="hidden lg:block relative mx-auto bg-black rounded-[36px] p-2 shadow-2xl"
      style={{
        width: `${VISIBLE_W + 16}px`,
        height: `${VISIBLE_H + 16}px`,
      }}
    >
      <div
        className="relative w-full h-full bg-white rounded-[28px] overflow-hidden"
      >
        {/* Phone notch */}
        <div
          className="absolute top-2 left-1/2 -translate-x-1/2 h-4 w-20 rounded-full bg-black z-10"
          aria-hidden="true"
        />
        <iframe
          src={src}
          title={title}
          loading="lazy"
          className="absolute top-0 left-0 border-0"
          style={{
            width: `${FRAME_W}px`,
            height: `${FRAME_H}px`,
            transform: `scale(${SCALE})`,
            transformOrigin: "top left",
          }}
        />
      </div>
    </div>
  );
}

/* ─────────────────────────── Feature Gallery ─────────────────────────── */

function FeatureGallery({ project }: { project: CaseStudy }) {
  const { t, locale } = useTranslation();

  if (!project.features?.length) return null;

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-[1320px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-8 lg:gap-20 mb-12">
          <div>
            <SectionKicker label={t("What we built", "ما بنيناه")} project={project} />
            <h2
              className={`font-lyon font-bold tracking-[-0.03em] max-w-md ${
                locale === "ar"
                  ? "text-3xl md:text-4xl lg:text-5xl leading-[1.25]"
                  : "text-[1.75rem] md:text-[2.25rem] lg:text-[2.75rem] leading-[1.05]"
              }`}
            >
              {t("The system, by feature.", "النظام، عبر الميزات.")}
            </h2>
          </div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
        >
          {project.features.map((f, i) => (
            <motion.article
              key={i}
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl p-7 md:p-8"
              style={{ backgroundColor: project.palette.surface }}
            >
              <div
                className="text-[11px] font-semibold mb-5 opacity-60"
                style={{ color: project.palette.primary }}
              >
                0{i + 1}
              </div>
              <h3 className="font-lyon font-bold text-xl md:text-2xl tracking-[-0.02em] mb-3 leading-tight">
                {t(f.title.en, f.title.ar)}
              </h3>
              <p
                className="text-sm md:text-[15px] leading-relaxed"
                style={{ color: project.palette.inkSoft }}
              >
                {t(f.desc.en, f.desc.ar)}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────── Visual Walkthrough ─────────────────────────── */

function VisualWalkthrough({ project }: { project: CaseStudy }) {
  const { t, locale } = useTranslation();

  const shots = project.shots;
  if (!shots) return null;

  const items: { src: string; caption: string }[] = [];
  if (shots.desktopHome) items.push({ src: shots.desktopHome, caption: t("Storefront", "المتجر") });
  if (shots.desktopInner) items.push({ src: shots.desktopInner, caption: t("Product page", "صفحة المنتج") });
  if (shots.extra) {
    shots.extra.forEach((e) => {
      items.push({ src: e.src, caption: t(e.caption.en, e.caption.ar) });
    });
  }

  if (!items.length) return null;

  return (
    <section
      className="py-16 md:py-24"
      style={{ backgroundColor: project.palette.surface }}
    >
      <div className="max-w-[1320px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-8 lg:gap-20 mb-12">
          <div>
            <SectionKicker label={t("Walkthrough", "جولة")} project={project} />
            <h2
              className={`font-lyon font-bold tracking-[-0.03em] max-w-md ${
                locale === "ar"
                  ? "text-3xl md:text-4xl lg:text-5xl leading-[1.25]"
                  : "text-[1.75rem] md:text-[2.25rem] lg:text-[2.75rem] leading-[1.05]"
              }`}
            >
              {t("Screen by screen.", "شاشة بشاشة.")}
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {items.map((item, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.05 }}
              className="rounded-2xl overflow-hidden bg-black/20"
            >
              <div className="aspect-[16/10]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.src}
                  alt={item.caption}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
              <figcaption
                className="px-5 py-4 text-xs opacity-60"
                style={{ backgroundColor: project.palette.background }}
              >
                {item.caption}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── Technical Depth ─────────────────────────── */

function TechnicalDepth({ project }: { project: CaseStudy }) {
  const { t, locale } = useTranslation();

  if (!project.techStack?.length && !project.architectureNotes) return null;

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-[1320px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-8 lg:gap-20 mb-12">
          <div>
            <SectionKicker label={t("Under the hood", "تحت السطح")} project={project} />
            <h2
              className={`font-lyon font-bold tracking-[-0.03em] max-w-md ${
                locale === "ar"
                  ? "text-3xl md:text-4xl lg:text-5xl leading-[1.25]"
                  : "text-[1.75rem] md:text-[2.25rem] lg:text-[2.75rem] leading-[1.05]"
              }`}
            >
              {t("How it's built.", "كيف بُني.")}
            </h2>
          </div>
          <div className="self-end">
            <p
              className="text-base md:text-lg leading-relaxed max-w-2xl"
              style={{ color: project.palette.inkSoft }}
            >
              {project.architectureNotes
                ? t(project.architectureNotes.en, project.architectureNotes.ar)
                : t(
                    "A modern, type-safe stack chosen for performance and long-term maintainability.",
                    "تكنولوجيا حديثة آمنة الأنواع، مختارة للأداء وقابلية الصيانة طويلة الأمد."
                  )}
            </p>
          </div>
        </div>

        {project.techStack?.length > 0 && (
          <div>
            <div className="text-[11px] font-semibold mb-4 opacity-50 uppercase tracking-wider">
              {t("Stack", "التقنيات")}
            </div>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3.5 py-2 rounded-full text-sm border"
                  style={{
                    borderColor: `${project.palette.primary}33`,
                    color: project.palette.ink,
                    backgroundColor: `${project.palette.primary}0D`,
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

/* ─────────────────────────── By the Numbers ─────────────────────────── */

function ByTheNumbers({ project }: { project: CaseStudy }) {
  const { t, locale } = useTranslation();

  if (!project.stats?.length) return null;

  return (
    <section
      className="py-16 md:py-24"
      style={{ backgroundColor: project.palette.surface }}
    >
      <div className="max-w-[1320px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="mb-12">
          <SectionKicker label={t("By the numbers", "بالأرقام")} project={project} />
          <h2
            className={`font-lyon font-bold tracking-[-0.03em] max-w-md ${
              locale === "ar"
                ? "text-3xl md:text-4xl lg:text-5xl leading-[1.25]"
                : "text-[1.75rem] md:text-[2.25rem] lg:text-[2.75rem] leading-[1.05]"
            }`}
          >
            {t("What it adds up to.", "ما يصل إليه.")}
          </h2>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-px rounded-3xl overflow-hidden"
          style={{ backgroundColor: `${project.palette.primary}14` }}
        >
          {project.stats.map((stat, i) => {
            const numericMatch = stat.value.match(/^(\d+)(.*)$/);
            const isNumeric = !!numericMatch;
            const numValue = isNumeric ? parseInt(numericMatch![1], 10) : 0;
            const suffix = isNumeric ? numericMatch![2] : "";

            return (
              <div
                key={i}
                className="p-8 md:p-10 lg:p-12"
                style={{ backgroundColor: project.palette.background }}
              >
                <div
                  className="font-lyon font-bold text-5xl md:text-6xl lg:text-7xl tracking-[-0.03em] leading-none mb-4 tabular-nums"
                  style={{ color: project.palette.primary }}
                >
                  {isNumeric ? (
                    <AnimatedNumber value={numValue} suffix={suffix} duration={1.6 + i * 0.1} />
                  ) : (
                    stat.value
                  )}
                </div>
                <div className="text-sm md:text-base opacity-70">
                  {t(stat.label.en, stat.label.ar)}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── Outcome + Quote ─────────────────────────── */

function OutcomeAndQuote({ project }: { project: CaseStudy }) {
  const { t, locale } = useTranslation();

  if (!project.outcome && !project.quote) return null;

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-[1320px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 lg:gap-16 items-stretch">
          {/* Outcome */}
          {project.outcome && (
            <div>
              <SectionKicker label={t("Outcome", "النتيجة")} project={project} />
              <h2
                className={`font-lyon font-bold tracking-[-0.03em] mb-6 ${
                  locale === "ar"
                    ? "text-3xl md:text-4xl lg:text-5xl leading-[1.25]"
                    : "text-[1.75rem] md:text-[2.25rem] lg:text-[2.75rem] leading-[1.05]"
                }`}
              >
                {t("What changed.", "ما الذي تغيّر.")}
              </h2>
              <p
                className="text-base md:text-lg leading-relaxed"
                style={{ color: project.palette.inkSoft }}
              >
                {t(project.outcome.en, project.outcome.ar)}
              </p>
            </div>
          )}

          {/* Quote */}
          {project.quote && (
            <motion.figure
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7 }}
              className="rounded-3xl p-8 md:p-10 lg:p-12 flex flex-col justify-between relative overflow-hidden"
              style={{ backgroundColor: project.palette.surface }}
            >
              <div
                className="absolute top-[-60px] right-[-60px] w-[240px] h-[240px] rounded-full blur-3xl opacity-20 pointer-events-none"
                style={{ backgroundColor: project.palette.primary }}
                aria-hidden="true"
              />
              <span
                className="relative font-lyon text-[6rem] md:text-[7rem] leading-none select-none block -mt-6 opacity-30"
                style={{ color: project.palette.primary }}
                aria-hidden="true"
              >
                &ldquo;
              </span>
              <blockquote
                className={`relative font-lyon font-bold tracking-[-0.02em] -mt-12 mb-8 ${
                  locale === "ar"
                    ? "text-xl md:text-2xl lg:text-[1.75rem] leading-[1.5]"
                    : "text-lg md:text-xl lg:text-[1.5rem] leading-[1.35]"
                }`}
              >
                {t(project.quote.text.en, project.quote.text.ar)}
              </blockquote>
              <figcaption className="relative">
                <div className="text-sm font-semibold">
                  {t(project.quote.author.en, project.quote.author.ar)}
                </div>
                <div className="text-xs opacity-60 mt-1">
                  {t(project.quote.role.en, project.quote.role.ar)}
                </div>
              </figcaption>
            </motion.figure>
          )}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── Credits ─────────────────────────── */

function Credits({ project }: { project: CaseStudy }) {
  const { t } = useTranslation();

  const items = [
    {
      label: t("Studio", "الاستوديو"),
      value: t("Maatouk Studio", "ستوديو معتوق"),
    },
    {
      label: t("Client", "العميل"),
      value: t(project.client.en, project.client.ar),
    },
    {
      label: t("Year", "السنة"),
      value: project.year,
    },
    {
      label: t("Discipline", "التخصّص"),
      value: t(project.category.en, project.category.ar),
    },
  ];

  return (
    <section
      className="py-12 md:py-16 border-t"
      style={{ borderColor: `${project.palette.primary}22` }}
    >
      <div className="max-w-[1320px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-8">
          {items.map((item) => (
            <div key={item.label}>
              <div className="text-[11px] font-semibold mb-2 uppercase tracking-wider opacity-50">
                {item.label}
              </div>
              <div className="text-base font-medium">{item.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── Next Case ─────────────────────────── */

function NextCase({ next }: { next: CaseStudy }) {
  const { t, locale } = useTranslation();

  return (
    <section
      className="py-16 md:py-24"
      style={{ backgroundColor: next.palette.background, color: next.palette.ink }}
    >
      <div className="max-w-[1320px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        <Link
          href={`/work/${next.slug}`}
          className="group block focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-4"
          style={{ outlineColor: next.palette.primary }}
        >
          <div className="text-[11px] font-semibold mb-6 opacity-60 uppercase tracking-wider">
            {t("Next case study", "دراسة الحالة التالية")}
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <h2
              className={`font-lyon font-bold tracking-[-0.03em] ${
                locale === "ar"
                  ? "text-4xl md:text-6xl lg:text-7xl leading-[1.15]"
                  : "text-[2.25rem] md:text-[3.5rem] lg:text-[5rem] leading-[0.95]"
              }`}
            >
              {t(next.title.en, next.title.ar)}
            </h2>
            <div
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 self-start lg:self-end"
              style={{
                backgroundColor: next.palette.primary,
                color: next.palette.background,
              }}
            >
              {t("Read case", "اقرأ الدراسة")}
              <svg viewBox="0 0 14 14" className="w-3.5 h-3.5 rtl-flip" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M3 7h8M8 4l3 3-3 3" />
              </svg>
            </div>
          </div>
          <p
            className="mt-4 text-base md:text-lg max-w-2xl"
            style={{ color: next.palette.inkSoft }}
          >
            {t(next.shortDescription.en, next.shortDescription.ar)}
          </p>
        </Link>
      </div>
    </section>
  );
}
