"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/lib/LocaleContext";
import { siteContent } from "@/data/content";
import { fadeUp, staggerContainer } from "@/lib/animations";
import BrandMark from "@/components/ui/BrandMark";

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <>
      {/* Hero */}
      <section className="pt-40 md:pt-48 pb-16 md:pb-24 bg-surface relative overflow-hidden">
        <div className="absolute top-20 right-10 md:right-20 opacity-[0.03] hidden md:block">
          <BrandMark color="#0029D6" size={500} />
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-8 md:px-12 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="w-2 h-2 rotate-45 bg-brand-blue" />
              <span className="text-xs font-medium uppercase tracking-[0.25em] text-brand-blue">
                {t("About", "عنّا")}
              </span>
              <span className="h-px w-12 bg-brand-blue/20" />
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-lyon font-bold tracking-tight mb-8 max-w-4xl leading-[0.95]">
              {t("Studio built on", "استوديو مبني على")}
              <br />
              <span className="text-brand-blue">
                {t("craft and conviction.", "الحرفية والقناعة.")}
              </span>
            </h1>
            <p className="text-lg md:text-xl text-black/50 max-w-3xl leading-relaxed">
              {t(siteContent.about.intro.en, siteContent.about.intro.ar)}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-[1440px] mx-auto px-8 md:px-12 lg:px-20">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-2 h-2 rotate-45 bg-brand-blue" />
              <span className="text-xs font-medium uppercase tracking-[0.25em] text-black/40">
                {t("Our values", "قيمنا")}
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-lyon font-bold tracking-tight">
              {t("What drives the work", "ما يحرك العمل")}
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-16"
          >
            {siteContent.about.values.map((value, i) => (
              <motion.div key={i} variants={fadeUp} className="group">
                <span className="text-6xl font-lyon font-bold text-black/[0.06] block mb-6">
                  0{i + 1}
                </span>
                <div className="w-8 h-0.5 bg-brand-blue mb-6 group-hover:w-16 transition-all duration-500" />
                <h3 className="text-xl font-lyon font-bold mb-3">
                  {t(value.title.en, value.title.ar)}
                </h3>
                <p className="text-black/50 leading-relaxed">
                  {t(value.desc.en, value.desc.ar)}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Studio Photo Placeholder */}
      <section className="bg-surface-low">
        <div className="max-w-[1440px] mx-auto px-8 md:px-12 lg:px-20 py-20">
          <div className="aspect-[21/9] bg-surface-container flex items-center justify-center">
            <div className="text-center">
              <BrandMark color="#0029D6" size={60} className="mx-auto mb-4 opacity-20" />
              <p className="text-black/30 text-sm">
                {t("Studio photograph placeholder", "عنصر نائب لصورة الاستوديو")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-[1440px] mx-auto px-8 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-lyon font-bold tracking-tight mb-8">
                {t("Our approach", "منهجنا")}
              </h2>
              <div className="space-y-6 text-black/50 leading-relaxed text-lg">
                <p>
                  {t(
                    "We believe the best creative work happens when strategy and craft are inseparable. Every project starts with deep understanding — of the business, the audience, and the market landscape.",
                    "نؤمن بأن أفضل عمل إبداعي يحدث عندما تكون الاستراتيجية والحرفية لا ينفصلان. كل مشروع يبدأ بفهم عميق — للعمل والجمهور والمشهد السوقي."
                  )}
                </p>
                <p>
                  {t(
                    "We don't chase trends. We build systems that endure. Our work is designed to scale, evolve, and maintain its integrity across every touchpoint.",
                    "لا نلاحق الاتجاهات. نبني أنظمة تدوم. عملنا مصمم ليتوسع ويتطور ويحافظ على سلامته عبر كل نقطة اتصال."
                  )}
                </p>
              </div>
            </motion.div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex items-center"
            >
              <div className="w-full bg-brand-blue p-12 md:p-16 text-white">
                <blockquote className="text-2xl md:text-3xl font-lyon font-bold leading-snug mb-6">
                  {t(
                    '"Good design is good business. Great design is ',
                    '"التصميم الجيد هو عمل جيد. التصميم العظيم هو '
                  )}
                  <span className="text-brand-green">
                    {t("unfair advantage.", "ميزة غير عادلة.")}
                  </span>
                  {'"'}
                </blockquote>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rotate-45 bg-brand-green" />
                  <span className="text-white/50 text-sm font-bold uppercase tracking-[0.15em]">
                    {t("Studio philosophy", "فلسفة الاستوديو")}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
