"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslation } from "@/lib/LocaleContext";
import { caseStudies } from "@/data/content";
import Button from "@/components/ui/Button";
import { LaptopMockup, PhoneMockup } from "@/components/case-study/DeviceMockup";

/**
 * Hero — an editorial homepage opener. A typographic manifesto on the left,
 * a featured-work mockup composition on the right. No cycling panel, no
 * decorative motion noise — just the studio stating its position and one
 * well-chosen piece of work.
 */
export default function Hero() {
  const { t } = useTranslation();

  // Feature the strongest project
  const featured = caseStudies.find((c) => c.slug === "dolcebello") ?? caseStudies[0];

  return (
    <section className="relative min-h-[100svh] flex flex-col justify-between overflow-hidden bg-surface pt-24 md:pt-28 pb-10 md:pb-14">
      {/* Subtle pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] text-brand-blue pointer-events-none"
        style={{
          backgroundImage: 'url("/images/patterns/pattern-disciplines.svg")',
          backgroundSize: "200px",
          backgroundRepeat: "repeat",
        }}
        aria-hidden="true"
      />

      {/* Masthead strip */}
      <motion.div
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 lg:px-20 w-full hidden md:flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-black/45 font-medium"
      >
        <span>Maatouk Studio · {new Date().getFullYear()}</span>
        <span className="hidden lg:inline">
          {t("Branding · Motion · Digital", "هوية · حركة · رقمي")}
        </span>
        <span>{t("Based worldwide", "من أي مكان")}</span>
      </motion.div>

      {/* ── Main content ── */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 lg:px-20 my-auto py-8 md:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-14 items-center">
          {/* Typographic block */}
          <div>
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center gap-3 mb-5 md:mb-7"
            >
              <span className="w-2 h-2 rotate-45 bg-brand-blue" />
              <span className="text-[10px] md:text-xs font-medium uppercase tracking-[0.3em] text-brand-blue">
                {t("A creative studio", "استوديو إبداعي")}
              </span>
              <span className="h-px w-8 md:w-12 bg-brand-blue/20" />
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-lyon font-bold tracking-[-0.025em] leading-[0.95] text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5.25rem] xl:text-[6rem] text-black mb-5 md:mb-8"
            >
              {t("Design that", "تصميم")}
              <br />
              <span className="text-brand-blue">
                {t("earns trust.", "يكسب الثقة.")}
              </span>
            </motion.h1>

            {/* Lede */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base md:text-lg lg:text-xl text-black/60 max-w-xl leading-relaxed mb-7 md:mb-10"
            >
              {t(
                "Maatouk Studio designs branding, motion, and digital products for brands that want to outlast the trend cycle — bilingual by craft, Gulf by origin.",
                "استوديو معتوق يصمّم الهويات البصرية والحركة والمنتجات الرقمية لعلامات تتجاوز دورة الترند — ثنائية اللغة بالحرفية، خليجية بالهوية."
              )}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap gap-3 md:gap-4"
            >
              <Button href="/work" variant="primary" size="lg" withArrow>
                {t("View our work", "شاهد أعمالنا")}
              </Button>
              <Button href="/contact" variant="secondary" size="lg">
                {t("Start a project", "ابدأ مشروعك")}
              </Button>
            </motion.div>
          </div>

          {/* Featured work mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.0, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <Link
              href={`/work/${featured.slug}`}
              aria-label={t(
                `View the ${featured.title.en} case study`,
                `عرض دراسة حالة ${featured.title.ar}`
              )}
              className="group block focus:outline-none focus-visible:outline-2 focus-visible:outline-brand-blue focus-visible:outline-offset-4"
            >
              {/* Feature label */}
              <div className="flex items-center gap-3 mb-5 justify-start lg:justify-end">
                <span
                  className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-blue"
                >
                  {t("Featured work", "عمل مختار")}
                </span>
                <span className="h-px w-10 bg-brand-blue/25" />
                <span className="text-[10px] uppercase tracking-[0.25em] font-medium text-black/50">
                  {featured.year}
                </span>
              </div>

              {/* Mockup composition */}
              {featured.shots?.desktopHome && (
                <div className="relative">
                  <LaptopMockup
                    src={featured.shots.desktopHome}
                    alt={`${featured.title.en} — live site`}
                    variant="dark"
                    className="transition-transform duration-700 group-hover:scale-[1.01]"
                  />
                  {featured.shots.mobileHome && (
                    <div className="absolute -bottom-6 -right-3 md:-right-6 w-[34%] sm:w-[28%] min-w-[110px] max-w-[180px] transition-transform duration-700 group-hover:-translate-y-2">
                      <PhoneMockup
                        src={featured.shots.mobileHome}
                        alt={`${featured.title.en} — mobile`}
                        width={180}
                        className="!w-full"
                      />
                    </div>
                  )}
                </div>
              )}

              {/* Project label under mockup */}
              <div className="mt-10 md:mt-12 flex items-center justify-between gap-4">
                <div>
                  <div className="text-xl md:text-2xl font-lyon font-bold">
                    {t(featured.title.en, featured.title.ar)}
                  </div>
                  <div className="text-xs md:text-sm text-black/50 mt-1">
                    {t(featured.category.en, featured.category.ar)}
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-brand-blue font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {t("Open case", "افتح الحالة")}
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
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Bottom caption row */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="relative z-10 max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 lg:px-20 w-full hidden lg:flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-black/40 font-medium"
      >
        <div className="flex items-center gap-3">
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-8 border border-black/15 rounded-full flex items-start justify-center p-1"
            aria-hidden="true"
          >
            <div className="w-1 h-2 bg-black/25 rounded-full" />
          </motion.div>
          <span>{t("Scroll", "مرر")}</span>
        </div>
        <span className="tabular-nums">
          {caseStudies.length} {t("projects", "مشاريع")}
        </span>
      </motion.div>
    </section>
  );
}
