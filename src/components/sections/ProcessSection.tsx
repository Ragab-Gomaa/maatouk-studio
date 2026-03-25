"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/lib/LocaleContext";
import { siteContent } from "@/data/content";
import { fadeUp, staggerContainer } from "@/lib/animations";
import SectionLabel from "@/components/ui/SectionLabel";

export default function ProcessSection() {
  const { t } = useTranslation();

  return (
    <section className="py-24 md:py-36 bg-white relative overflow-hidden">
      {/* Large decorative number */}
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 text-[40rem] font-lyon font-bold text-black/[0.015] leading-none hidden xl:block select-none pointer-events-none">
        04
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-8 md:px-12 lg:px-20">
        <div className="mb-16 md:mb-24">
          <SectionLabel>{t("Process", "المنهجية")}</SectionLabel>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl md:text-6xl lg:text-7xl font-lyon font-bold tracking-tight mt-6 mb-6"
          >
            {t(siteContent.process.headline.en, siteContent.process.headline.ar)}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-lg text-black/50 max-w-xl leading-relaxed"
          >
            {t(siteContent.process.sub.en, siteContent.process.sub.ar)}
          </motion.p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {siteContent.process.steps.map((step, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="group relative p-8 md:p-10 bg-surface border border-black/[0.06] hover:shadow-md transition-all duration-500"
            >
              {/* Step number */}
              <div className="text-5xl md:text-6xl font-lyon font-bold text-brand-blue/10 group-hover:text-brand-blue/20 transition-colors duration-500 mb-6">
                {step.num}
              </div>

              {/* Diamond accent */}
              <div className="w-2 h-2 rotate-45 bg-brand-blue mb-5" />

              <h3 className="text-xl font-lyon font-bold mb-3 group-hover:text-brand-blue transition-colors duration-300">
                {t(step.title.en, step.title.ar)}
              </h3>

              <p className="text-sm text-black/50 leading-relaxed">
                {t(step.desc.en, step.desc.ar)}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
