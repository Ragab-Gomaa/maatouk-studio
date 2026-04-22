"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/lib/LocaleContext";
import { siteContent } from "@/data/content";
import { fadeUp, staggerContainer } from "@/lib/animations";
import SectionLabel from "@/components/ui/SectionLabel";

export default function ProcessSection() {
  const { t } = useTranslation();

  return (
    <section className="py-24 md:py-36 bg-surface relative overflow-hidden">
      {/* Big decorative numeral as watermark */}
      <div className="absolute -right-10 top-1/2 -translate-y-1/2 text-[32rem] lg:text-[44rem] font-lyon font-bold text-black/[0.02] leading-none hidden xl:block select-none pointer-events-none">
        ¶
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-20">
        {/* ─── Header ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-16 items-end mb-20 md:mb-28">
          <div>
            <SectionLabel>{t("The Process", "المنهجية")}</SectionLabel>
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-4xl md:text-6xl lg:text-7xl font-lyon font-bold tracking-tight mt-6 leading-[0.95]"
            >
              {t("From insight", "من الرؤية")}
              <br />
              <span className="text-brand-blue italic">{t("to impact.", "إلى الأثر.")}</span>
            </motion.h2>
          </div>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-base md:text-lg text-black/60 leading-relaxed max-w-lg"
          >
            {t(
              "Every engagement follows the same four phases. Each phase ends with a concrete alignment before we move forward — no surprises, no drift.",
              "كل التزام يسير في أربع مراحل ثابتة. كل مرحلة تنتهي بمحاذاة ملموسة قبل التقدم — بلا مفاجآت، بلا انحراف."
            )}
          </motion.p>
        </div>

        {/* ─── Timeline ─── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="relative"
        >
          {/* Connecting timeline line */}
          <div
            className="absolute left-6 md:left-8 lg:left-[50%] lg:-translate-x-1/2 top-0 bottom-0 w-px bg-brand-blue/20"
            aria-hidden="true"
          />

          <div className="space-y-16 md:space-y-20">
            {siteContent.process.steps.map((step, i) => {
              const alignRight = i % 2 === 1;
              return (
                <motion.article
                  key={i}
                  variants={fadeUp}
                  className={`relative grid grid-cols-[auto_1fr] lg:grid-cols-[1fr_auto_1fr] gap-6 md:gap-10 items-start ${
                    alignRight ? "lg:text-right" : ""
                  }`}
                >
                  {/* Step marker — positioned on timeline */}
                  <div
                    className={`lg:col-start-2 shrink-0 flex flex-col items-center gap-3 ${
                      alignRight ? "lg:order-2" : "lg:order-2"
                    }`}
                  >
                    <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full bg-brand-blue flex items-center justify-center shrink-0">
                      <span className="font-lyon text-white font-bold text-sm md:text-base">
                        {step.num}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className={`${
                      alignRight ? "lg:col-start-3 lg:text-left" : "lg:col-start-1 lg:pr-12 lg:text-right"
                    } ${alignRight ? "lg:order-3" : "lg:order-1"}`}
                  >
                    <div
                      className={`inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] font-bold text-brand-blue/70 mb-3 ${
                        alignRight ? "" : "lg:flex-row-reverse"
                      }`}
                    >
                      <span className="h-px w-6 bg-brand-blue/30" />
                      {t(`Phase ${step.num}`, `المرحلة ${step.num}`)}
                    </div>
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-lyon font-bold tracking-tight mb-3 md:mb-4 leading-[1.05]">
                      {t(step.title.en, step.title.ar)}
                    </h3>
                    <p className="text-base md:text-lg text-black/60 leading-relaxed max-w-md lg:max-w-sm lg:inline-block">
                      {t(step.desc.en, step.desc.ar)}
                    </p>
                  </div>

                  {/* Empty cell on the opposite side for lg layout */}
                  <div
                    className={`hidden lg:block ${
                      alignRight ? "lg:col-start-1 lg:order-1" : "lg:col-start-3 lg:order-3"
                    }`}
                    aria-hidden="true"
                  />
                </motion.article>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
