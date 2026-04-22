"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/lib/LocaleContext";
import Button from "@/components/ui/Button";

/**
 * ContactCTASection — closing. A bold bright card on the surface background,
 * centered, with a question headline and two actions.
 */
export default function ContactCTASection() {
  const { t } = useTranslation();

  return (
    <section className="py-12 md:py-16 bg-surface">
      <div className="max-w-[1320px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-[36px] md:rounded-[48px] bg-brand-blue text-white overflow-hidden"
        >
          {/* Background glow */}
          <div
            className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] rounded-full bg-brand-green/30 blur-3xl pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-[-100px] left-[-50px] w-[300px] h-[300px] rounded-full bg-white/10 blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-16 p-10 md:p-16 lg:p-20 items-end">
            <div>
              <div className="inline-flex items-center gap-2 pl-2 pr-4 py-1 bg-white/10 rounded-full text-[11px] uppercase tracking-[0.2em] font-semibold text-white/85 mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-green" />
                {t("Let's talk", "لنتحدث")}
              </div>

              <h2 className="font-lyon font-bold tracking-[-0.035em] leading-[0.92] text-5xl md:text-7xl lg:text-[6rem]">
                {t("Got a brief", "عندك ملف")}
                <br />
                <span className="text-brand-green italic">
                  {t("worth making?", "يستحق الصنع؟")}
                </span>
              </h2>
            </div>

            <div className="space-y-8 md:space-y-10">
              <p className="text-base md:text-lg text-white/80 leading-relaxed max-w-md">
                {t(
                  "Tell us what you're building. We'll respond within 24 hours with next steps.",
                  "أخبرنا بما تبنيه. نرد خلال ٢٤ ساعة بالخطوات التالية."
                )}
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <Button href="/contact" variant="dark" size="lg" withArrow>
                  {t("Start a project", "ابدأ مشروعك")}
                </Button>
                <Button
                  href="mailto:hello@maatouk.studio"
                  variant="ghost"
                  size="lg"
                  external
                  className="text-white/85 hover:text-white hover:bg-white/10"
                >
                  {t("Email us", "راسلنا")}
                </Button>
              </div>

              <dl className="grid grid-cols-2 gap-5 md:gap-6 pt-6 border-t border-white/15">
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.2em] font-semibold text-brand-green mb-1.5">
                    {t("Response", "الرد")}
                  </dt>
                  <dd className="text-sm md:text-base text-white font-medium">
                    {t("Within 24 hours", "خلال ٢٤ ساعة")}
                  </dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.2em] font-semibold text-brand-green mb-1.5">
                    {t("Engagements", "الالتزامات")}
                  </dt>
                  <dd className="text-sm md:text-base text-white font-medium">
                    {t("Full-service", "خدمة شاملة")}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
