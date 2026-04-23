"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/lib/LocaleContext";
import ContactCTASection from "@/components/sections/ContactCTASection";

const values = [
  {
    title: { en: "Intentional design", ar: "تصميم مقصود" },
    body: {
      en: "Every pixel, every frame, every line of code serves a clear purpose. We don't decorate — we solve.",
      ar: "كلّ بكسل، كلّ إطار، وكلّ سطرِ كودٍ يخدم هدفاً واضحاً. نحن لا نُزَيِّن — نحلّ.",
    },
  },
  {
    title: { en: "Strategic thinking", ar: "تفكير استراتيجي" },
    body: {
      en: "Form without purpose is just decoration. We start with why — before we decide how.",
      ar: "الشكلُ بلا هدفٍ مجرّد زينة. نبدأ دائماً بسؤال: لماذا؟ قبل أن نقرّر كيف.",
    },
  },
  {
    title: { en: "Relentless craft", ar: "حِرفةٌ لا تهاون فيها" },
    body: {
      en: "The details others skip over are the ones we linger on. The difference between good and great lives in the margins.",
      ar: "التفاصيل التي يتجاوزها الآخرون هي التي نتوقّف عندها. الفرق بين الجيد والعظيم يسكن في الهوامش.",
    },
  },
];

export default function AboutPage() {
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
              {t("The studio", "الاستوديو")}
            </span>
            <h1
              className={`font-lyon font-bold tracking-[-0.035em] text-ink max-w-4xl ${
                locale === "ar"
                  ? "text-5xl md:text-7xl lg:text-[6rem] leading-[1.2]"
                  : "text-[2rem] md:text-[2.75rem] lg:text-[3.25rem] xl:text-[3.5rem] leading-[1.05]"
              }`}
            >
              {t("A studio built on", "استوديو مبنيٌّ على")}
              <br />
              <span className="text-brand-blue">
                {t("craft and conviction.", "الحِرفة والقناعة.")}
              </span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-ink-soft max-w-3xl leading-relaxed text-pretty">
              {t(
                "Maatouk Studio works across identity, motion, and digital products. We build brands that hold together — from the first sketch to the last line of code. We take on a limited number of projects each year, and give each one our full focus.",
                "ستوديو معتوق يعمل في الهويّة البصريّة، الموشن، والمنتجات الرقميّة. نبني علاماتٍ متماسكة — من أوّل رسمةٍ إلى آخر سطرِ كود. نأخذ عدداً محدوداً من المشاريع سنويّاً، ونمنح كلّ مشروعٍ كامل تركيزنا."
              )}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 md:py-16 bg-surface-low">
        <div className="max-w-[1320px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="flex items-center gap-3 mb-12 md:mb-16">
            <span className="kicker">
              {t("Our values", "قيمنا")}
            </span>
            <span className="h-px flex-1 bg-black/[0.08]" />
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.12 } },
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6"
          >
            {values.map((v, i) => (
              <motion.article
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6 }}
                className="studio-card rounded-[24px] p-8 md:p-10"
              >
                <div className="font-lyon text-3xl md:text-4xl font-bold text-brand-blue mb-8">
                  0{i + 1}
                </div>
                <h3 className="font-lyon font-bold text-2xl md:text-[1.75rem] tracking-[-0.02em] mb-4 leading-tight">
                  {t(v.title.en, v.title.ar)}
                </h3>
                <p className="text-sm md:text-base text-ink-soft leading-relaxed">
                  {t(v.body.en, v.body.ar)}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-12 md:py-16 bg-surface">
        <div className="max-w-[1320px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
            >
              <span className="kicker-pill mb-6">
                <span className="kicker-pill-dot" />
                {t("Our approach", "منهجنا")}
              </span>
              <h2
                className={`font-lyon font-bold tracking-[-0.03em] text-4xl md:text-5xl mb-8 ${
                  locale === "ar" ? "leading-[1.25]" : "leading-[0.95]"
                }`}
              >
                {t("Strategy and craft,", "الاستراتيجيّة والحِرفة،")}
                <br />
                <span className="text-brand-blue">
                  {t("inseparable.", "لا تنفصلان.")}
                </span>
              </h2>
              <div className="space-y-5 text-base md:text-lg text-ink-soft leading-relaxed max-w-lg">
                <p>
                  {t(
                    "The best creative work happens when strategy and craft arrive together — not one after the other. Every project starts with a deep read of the business, the audience, and the market.",
                    "العمل الإبداعي الجيّد يولد حين تتكامل الاستراتيجيّة والحِرفة — لا حين تتفرّقان. نبدأ كلّ مشروعٍ بقراءةٍ عميقة: العمل، الجمهور، والسوق."
                  )}
                </p>
                <p>
                  {t(
                    "We don't chase trends. We build systems that last — systems that grow with the brand and keep their integrity across every touchpoint.",
                    "لا نلاحق الموضة. نبني أنظمةً تدوم — تنمو مع العلامة، وتحافظ على انسجامها في كلّ نقطة تواصل."
                  )}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="flex items-center"
            >
              <div className="w-full rounded-[32px] bg-brand-blue text-white p-12 md:p-16 relative overflow-hidden">
                <div
                  className="absolute top-[-80px] right-[-80px] w-[300px] h-[300px] rounded-full bg-brand-green/25 blur-3xl pointer-events-none"
                  aria-hidden="true"
                />
                <span
                  className="relative font-lyon text-[8rem] md:text-[10rem] leading-none text-white/15 select-none block -mt-4"
                  aria-hidden="true"
                >
                  &ldquo;
                </span>
                <blockquote
                  className={`relative font-lyon font-bold text-2xl md:text-3xl lg:text-[2.25rem] tracking-[-0.02em] -mt-20 ${
                    locale === "ar" ? "leading-[1.4]" : "leading-[1.2]"
                  }`}
                >
                  {t(
                    "Good design is good business. Great design is ",
                    "التصميم الجيّد عملٌ ناجح. التصميم العظيم "
                  )}
                  <span className="text-brand-green">
                    {t("unfair advantage.", "تفوّقٌ لا يُضاهى.")}
                  </span>
                </blockquote>
                <div className="relative mt-10 text-[12px] font-semibold text-white/60">
                  {t("Studio philosophy", "فلسفة الاستوديو")}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <ContactCTASection />
    </>
  );
}
