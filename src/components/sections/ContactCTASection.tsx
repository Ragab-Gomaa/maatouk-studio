"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/lib/LocaleContext";
import Button from "@/components/ui/Button";

export default function ContactCTASection() {
  const { t, locale } = useTranslation();

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
          {/* Ambient glows */}
          <div
            className="absolute top-[-120px] right-[-100px] w-[460px] h-[460px] rounded-full bg-brand-green/30 blur-3xl pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-[-120px] left-[-80px] w-[400px] h-[400px] rounded-full bg-white/10 blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-10 lg:gap-16 p-10 md:p-16 lg:p-20 items-end">
            {/* Left: pill + headline */}
            <div>
              <div className="inline-flex items-center gap-2 pl-2 pr-4 py-1 bg-white/10 rounded-full text-[11px] uppercase tracking-[0.2em] font-semibold text-white/85 mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-green" />
                {t("Let's talk", "لنتحدث")}
              </div>

              <h2
                className={`font-lyon font-bold tracking-[-0.035em] text-4xl md:text-6xl lg:text-[5rem] ${
                  locale === "ar" ? "leading-[1.2]" : "leading-[0.95]"
                }`}
              >
                {t("Your next project,", "مشروعك القادم،")}
                <br />
                <span className="text-brand-green italic">
                  {t("starts with a message.", "يبدأ برسالة.")}
                </span>
              </h2>
            </div>

            {/* Right: description + CTAs + pledge */}
            <div className="space-y-7 md:space-y-8">
              <p className="text-base md:text-lg text-white/80 leading-relaxed max-w-md">
                {t(
                  "Tell us about the idea and the timeline. We'll come back with a clear plan.",
                  "حدّثنا عن الفكرة والتوقيت. نعود إليك بخطّةٍ واضحة."
                )}
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <Button href="/contact" variant="dark" size="lg" withArrow>
                  {t("Start your project", "ابدأ مشروعك")}
                </Button>
                <Button
                  href="mailto:hello@maatouk.studio"
                  variant="ghost"
                  size="lg"
                  external
                  className="text-white/85 hover:text-white hover:bg-white/10"
                >
                  hello@maatouk.studio
                </Button>
              </div>

              <div className="pt-6 border-t border-white/15">
                <p className="text-sm text-white/70 leading-relaxed max-w-md">
                  {t(
                    "One project at a time, with full focus. We reply within 24 hours.",
                    "مشروعٌ واحد في كلّ مرّة، بتركيزٍ كامل. نردّ خلال ٢٤ ساعة."
                  )}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
