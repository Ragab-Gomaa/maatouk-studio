"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/lib/LocaleContext";
import Button from "@/components/ui/Button";

const values = [
  {
    title: { en: "Intentional design", ar: "تصميم مقصود" },
    body: {
      en: "Every pixel, frame, and line of code serves a purpose. We don't decorate — we solve.",
      ar: "كل بكسل، إطار، وسطر كود يخدم هدفاً. لا نزيّن — بل نحلّ.",
    },
  },
  {
    title: { en: "Strategic thinking", ar: "تفكير استراتيجي" },
    body: {
      en: "Beautiful design that doesn't perform is just decoration. We start with why before touching how.",
      ar: "التصميم الجميل الذي لا يؤدي وظيفته هو مجرد زخرفة. نبدأ بالسبب قبل الأسلوب.",
    },
  },
  {
    title: { en: "Relentless craft", ar: "حرفية لا تهاون فيها" },
    body: {
      en: "We obsess over details others overlook. The difference between good and great lives in the margins.",
      ar: "نهتم بالتفاصيل التي يتجاهلها الآخرون. الفرق بين الجيد والعظيم يكمن في الهوامش.",
    },
  },
];

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <>
      {/* Hero */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-20 bg-surface relative overflow-hidden">
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
            <span className="inline-flex items-center gap-2 pl-2 pr-4 py-1 bg-surface-raised rounded-full border border-black/[0.06] text-[11px] uppercase tracking-[0.2em] font-semibold text-ink-muted mb-6 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
              {t("The studio", "الاستوديو")}
            </span>
            <h1 className="font-lyon font-bold tracking-[-0.035em] leading-[0.92] text-5xl md:text-7xl lg:text-[5.5rem] text-ink max-w-4xl">
              {t("A studio built on", "استوديو مبني على")}
              <br />
              <span className="text-brand-blue italic">
                {t("craft and conviction.", "الحرفية والقناعة.")}
              </span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-ink-soft max-w-3xl leading-relaxed">
              {t(
                "Maatouk Studio is a bilingual design studio working across branding, motion, and digital products. We build brands that hold together — from the first logo sketch to the last line of code. We design in Arabic and English at the same time, because our clients live in both, and because a brand that only works in one language isn't finished yet.",
                "ماتوك استوديو تصميم ثنائي اللغة يعمل في الهوية البصرية والموشن والمنتجات الرقمية. نبني علامات متماسكة — من أول رسمة للشعار إلى آخر سطر كود. نصمّم بالعربية والإنكليزية في الوقت نفسه، لأنّ عملاءنا يعيشون في اللغتين، ولأنّ الهوية التي تعمل بلغة واحدة فقط لم تكتمل بعد."
              )}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-surface-low">
        <div className="max-w-[1320px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="flex items-center gap-3 mb-12 md:mb-16">
            <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-ink-muted">
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
            className="grid grid-cols-1 md:grid-cols-3 gap-5"
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
      <section className="py-20 md:py-28 bg-surface">
        <div className="max-w-[1320px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-flex items-center gap-2 pl-2 pr-4 py-1 bg-surface-raised rounded-full border border-black/[0.06] text-[11px] uppercase tracking-[0.2em] font-semibold text-ink-muted mb-6 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
                {t("Our approach", "منهجنا")}
              </span>
              <h2 className="font-lyon font-bold tracking-[-0.03em] text-4xl md:text-5xl leading-[0.95] mb-8">
                {t("Strategy and craft,", "استراتيجية وحرفية،")}
                <br />
                <span className="text-brand-blue italic">
                  {t("inseparable.", "لا تنفصلان.")}
                </span>
              </h2>
              <div className="space-y-5 text-base md:text-lg text-ink-soft leading-relaxed max-w-lg">
                <p>
                  {t(
                    "We believe the best creative work happens when strategy and craft are inseparable. Every project starts with deep understanding — of the business, the audience, and the market.",
                    "نؤمن بأن أفضل عمل إبداعي يحدث عندما تكون الاستراتيجية والحرفية لا ينفصلان. كل مشروع يبدأ بفهم عميق — للعمل والجمهور والسوق."
                  )}
                </p>
                <p>
                  {t(
                    "We don't chase trends. We build systems that endure. Our work is designed to scale, evolve, and hold its integrity across every touchpoint.",
                    "لا نلاحق الاتجاهات. نبني أنظمة تدوم. عملنا مصمم ليتوسع ويتطور ويحافظ على سلامته عبر كل نقطة اتصال."
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
                <blockquote className="relative font-lyon font-bold text-2xl md:text-3xl lg:text-[2.25rem] leading-[1.2] tracking-[-0.02em] -mt-20">
                  {t(
                    "Good design is good business. Great design is ",
                    "التصميم الجيد هو عمل جيد. التصميم العظيم هو "
                  )}
                  <span className="text-brand-green italic">
                    {t("unfair advantage.", "ميزة غير عادلة.")}
                  </span>
                </blockquote>
                <div className="relative mt-10 text-[10px] uppercase tracking-[0.25em] font-semibold text-white/60">
                  {t("Studio philosophy", "فلسفة الاستوديو")}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-surface-low text-center">
        <Button href="/contact" variant="primary" size="lg" withArrow>
          {t("Start a project", "ابدأ مشروعك")}
        </Button>
      </section>
    </>
  );
}
