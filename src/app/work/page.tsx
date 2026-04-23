"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslation } from "@/lib/LocaleContext";
import { caseStudies, motionProjects } from "@/data/content";
import ContactCTASection from "@/components/sections/ContactCTASection";

export default function WorkPage() {
  const { t, locale } = useTranslation();

  return (
    <>
      {/* Hero */}
      <section className="pt-28 md:pt-32 pb-10 md:pb-14 bg-surface relative overflow-hidden">
        <div
          className="absolute top-[-200px] right-[-150px] w-[500px] h-[500px] rounded-full bg-brand-blue/[0.06] blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-[1320px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="kicker-pill mb-6">
              <span className="kicker-pill-dot" />
              {t("Work", "الأعمال")}
            </span>
            <h1
              className={`font-lyon font-bold tracking-[-0.035em] text-5xl md:text-7xl lg:text-[6rem] text-ink max-w-4xl ${
                locale === "ar" ? "leading-[1.2]" : "leading-[0.95]"
              }`}
            >
              {t("Selected", "أعمالٌ")}{" "}
              <span className="text-brand-blue">
                {t("work.", "مختارة.")}
              </span>
            </h1>
            <p className="mt-6 text-base md:text-lg text-ink-soft max-w-xl leading-relaxed text-pretty">
              {t(
                "A curated selection of identity, motion, and digital work we've shipped with brands we care about.",
                "مختاراتٌ من مشاريعنا في الهويّة البصريّة، الموشن جرافيك، والمنتجات الرقميّة — أطلقناها مع علاماتٍ نعتزّ بها."
              )}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case studies */}
      <section className="py-12 md:py-16 bg-surface-low">
        <div className="max-w-[1320px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="flex items-center gap-3 mb-8 md:mb-12">
            <span className="kicker">
              {t("Case studies", "دراسات حالة")}
            </span>
            <span className="h-px flex-1 bg-black/[0.08]" />
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } },
            }}
            className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6"
          >
            {caseStudies
              .sort((a, b) => a.order - b.order)
              .map((project) => (
                <motion.article
                  key={project.slug}
                  variants={{
                    hidden: { opacity: 0, y: 16 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <Link
                    href={`/work/${project.slug}`}
                    className="group relative block overflow-hidden rounded-[24px] md:rounded-[28px] h-full focus:outline-none focus-visible:outline-2 focus-visible:outline-brand-blue focus-visible:outline-offset-4"
                    style={{ backgroundColor: project.palette.background }}
                  >
                    <div
                      className="p-7 md:p-9 lg:p-10 h-full flex flex-col"
                      style={{ color: project.palette.ink }}
                    >
                      <div className="flex items-center gap-3 mb-6">
                        <span
                          className="text-[11px] font-semibold"
                          style={{ color: project.palette.primary }}
                        >
                          № {String(project.order).padStart(2, "0")}
                        </span>
                        <span
                          className="h-px w-6"
                          style={{
                            backgroundColor: project.palette.primary,
                            opacity: 0.4,
                          }}
                        />
                        <span className="text-[11px] opacity-60 font-medium">
                          {t(project.category.en, project.category.ar)} ·{" "}
                          {project.year}
                        </span>
                      </div>

                      <h2 className="font-lyon font-bold tracking-[-0.03em] leading-[0.92] text-4xl md:text-5xl mb-4">
                        {t(project.title.en, project.title.ar)}
                      </h2>
                      <p
                        className="text-sm md:text-base leading-relaxed mb-8 flex-1"
                        style={{ color: project.palette.inkSoft }}
                      >
                        {t(
                          project.shortDescription.en,
                          project.shortDescription.ar
                        )}
                      </p>

                      {project.shots?.desktopHome && (
                        <div className="mt-auto relative rounded-xl overflow-hidden bg-black/20 aspect-[16/10]">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={project.shots.desktopHome}
                            alt={project.title.en}
                            className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                            loading="lazy"
                          />
                        </div>
                      )}
                    </div>
                  </Link>
                </motion.article>
              ))}
          </motion.div>
        </div>
      </section>

      {/* Motion */}
      <section className="py-12 md:py-16 bg-ink text-white">
        <div className="max-w-[1320px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="flex items-center gap-3 mb-8 md:mb-12">
            <span className="text-[12px] font-semibold text-white/60">
              {t("Motion work", "أعمال الموشن")}
            </span>
            <span className="h-px flex-1 bg-white/10" />
          </div>

          <h3 className="font-lyon font-bold text-2xl md:text-3xl mb-8">
            {t("Client work", "مشاريع العملاء")}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 mb-16">
            {motionProjects
              .filter((m) => m.kind === "client")
              .sort((a, b) => a.order - b.order)
              .map((m) => (
                <MotionCard
                  key={m.slug}
                  slug={m.slug}
                  vimeoId={m.vimeoId}
                  title={t(m.title.en, m.title.ar)}
                  subtitle={t(m.description.en, m.description.ar)}
                  badge={t("Client", "عميل")}
                />
              ))}
          </div>

          <h3 className="font-lyon font-bold text-2xl md:text-3xl mb-3">
            {t("Personal projects", "مشاريع شخصيّة")}
          </h3>
          <p className="text-white/55 text-sm mb-8 max-w-lg">
            {t(
              "Spec and exploration pieces. Not affiliated with the brands shown.",
              "أعمالٌ استكشافيّة وتجريبيّة — لا علاقة لنا رسميّاً بالعلامات الظاهرة فيها."
            )}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            {motionProjects
              .filter((m) => m.kind === "spec")
              .sort((a, b) => a.order - b.order)
              .map((m) => (
                <MotionCard
                  key={m.slug}
                  slug={m.slug}
                  vimeoId={m.vimeoId}
                  title={t(m.title.en, m.title.ar)}
                  subtitle={t(m.description.en, m.description.ar)}
                  badge={t("Personal", "شخصي")}
                  muted
                />
              ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <ContactCTASection />
    </>
  );
}

function MotionCard({
  slug,
  vimeoId,
  title,
  subtitle,
  badge,
  muted = false,
}: {
  slug: string;
  vimeoId: string;
  title: string;
  subtitle: string;
  badge: string;
  muted?: boolean;
}) {
  return (
    <Link
      href={`/work/${slug}`}
      className="group block rounded-2xl overflow-hidden bg-white/[0.03] border border-white/[0.08] hover:border-white/20 transition-colors focus:outline-none focus-visible:outline-2 focus-visible:outline-brand-green focus-visible:outline-offset-4"
    >
      <div className="relative aspect-video bg-black overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`https://vumbnail.com/${vimeoId}.jpg`}
          alt={title}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-14 h-14 rounded-full bg-white/95 flex items-center justify-center shadow-xl transition-transform duration-500 group-hover:scale-110">
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5 text-ink ml-0.5"
              aria-hidden="true"
            >
              <polygon points="8,5 18,12 8,19" fill="currentColor" />
            </svg>
          </div>
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h4 className="font-lyon font-bold text-lg md:text-xl leading-tight">
              {title}
            </h4>
            <p className="text-xs md:text-sm text-white/55 mt-1 line-clamp-2">
              {subtitle}
            </p>
          </div>
          <span
            className={`shrink-0 text-[11px] font-semibold px-2.5 py-1 rounded-full ${
              muted
                ? "bg-white/10 text-white/60"
                : "bg-brand-green/20 text-brand-green"
            }`}
          >
            {badge}
          </span>
        </div>
      </div>
    </Link>
  );
}
