"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/lib/LocaleContext";
import Button from "@/components/ui/Button";

/**
 * ContactCTASection — the closing editorial spread that hands the visitor
 * off to the contact page. Big question on the left, pragmatic supporting
 * text + CTAs on the right, over the deep brand blue.
 */
export default function ContactCTASection() {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden bg-brand-blue text-white">
      {/* Pattern */}
      <div
        className="absolute inset-0 opacity-[0.08] text-white pointer-events-none"
        style={{
          backgroundImage:
            "url('/images/patterns/pattern-disciplines.svg')",
          backgroundSize: "220px",
          backgroundRepeat: "repeat",
        }}
        aria-hidden="true"
      />

      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(800px 400px at 85% 30%, rgba(60,255,197,0.08), transparent)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-20 py-24 md:py-36">
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-14 lg:gap-20 items-end">
          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-3 mb-8 md:mb-10">
              <span className="w-2 h-2 rotate-45 bg-brand-green" />
              <span className="text-xs font-medium uppercase tracking-[0.3em] text-brand-green">
                {t("Start a project", "ابدأ مشروعك")}
              </span>
              <span className="h-px w-12 bg-white/20" />
            </div>

            <h2 className="font-lyon font-bold tracking-[-0.02em] leading-[0.92] text-5xl md:text-7xl lg:text-[6rem] xl:text-[7rem]">
              {t("Got a brief", "عندك ملف")}
              <br />
              <span className="text-brand-green italic">
                {t("worth making?", "يستحق الصنع؟")}
              </span>
            </h2>
          </motion.div>

          {/* Body + CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="space-y-8 md:space-y-10"
          >
            <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-md">
              {t(
                "Tell us about your brand, your timeline, and what success looks like. We'll respond within 24 hours with next steps.",
                "أخبرنا عن علامتك وجدولك الزمني وكيف يبدو النجاح بالنسبة لك. سنرد خلال ٢٤ ساعة بالخطوات التالية."
              )}
            </p>

            <div className="flex flex-wrap gap-3 md:gap-4">
              <Button href="/contact" variant="accent" size="lg" withArrow>
                {t("Start a project", "ابدأ مشروعك")}
              </Button>
              <Button
                href="mailto:hello@maatouk.studio"
                variant="ghost"
                size="lg"
                className="text-white/85 hover:text-white"
                external
              >
                {t("Email directly", "راسلنا مباشرة")}
              </Button>
            </div>

            {/* Micro metadata */}
            <div className="pt-8 md:pt-10 border-t border-white/10 grid grid-cols-2 gap-5 md:gap-8">
              <div>
                <div className="text-[10px] uppercase tracking-[0.25em] font-bold text-brand-green/80 mb-2">
                  {t("Response", "الرد")}
                </div>
                <div className="text-sm md:text-base text-white/85">
                  {t("Within 24 hours", "خلال ٢٤ ساعة")}
                </div>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.25em] font-bold text-brand-green/80 mb-2">
                  {t("Engagement", "الالتزام")}
                </div>
                <div className="text-sm md:text-base text-white/85">
                  {t("Full-service partnerships", "شراكات شاملة")}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
