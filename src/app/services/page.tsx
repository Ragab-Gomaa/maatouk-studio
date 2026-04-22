"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/lib/LocaleContext";
import { siteContent } from "@/data/content";
import { fadeUp, staggerContainer } from "@/lib/animations";
import Button from "@/components/ui/Button";

export default function ServicesPage() {
  const { t } = useTranslation();

  return (
    <>
      {/* Hero */}
      <section className="pt-40 md:pt-48 pb-16 md:pb-24 bg-surface">
        <div className="max-w-[1440px] mx-auto px-8 md:px-12 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="w-2 h-2 rotate-45 bg-brand-blue" />
              <span className="text-xs font-medium uppercase tracking-[0.25em] text-brand-blue">
                {t("Services", "الخدمات")}
              </span>
              <span className="h-px w-12 bg-brand-blue/20" />
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-lyon font-bold tracking-tight leading-[0.95] mb-6">
              {t(siteContent.services.headline.en, siteContent.services.headline.ar)
                .split("\n")
                .map((line, i) => (
                  <span key={i} className="block">{line}</span>
                ))}
            </h1>
            <p className="text-lg text-black/50 max-w-2xl leading-relaxed">
              {t(siteContent.services.sub.en, siteContent.services.sub.ar)}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-8 md:px-12 lg:px-20">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="space-y-32"
          >
            {siteContent.services.items.map((service, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24"
              >
                <div>
                  <span className="text-8xl md:text-9xl font-lyon font-bold text-black/[0.04] block mb-4">
                    0{i + 1}
                  </span>
                  <h2 className="text-4xl md:text-5xl font-lyon font-bold tracking-tight mb-6">
                    {t(service.title.en, service.title.ar)}
                  </h2>
                  <p className="text-lg text-black/50 leading-relaxed">
                    {t(service.desc.en, service.desc.ar)}
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-full">
                    <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-black/30 mb-8">
                      {t("Capabilities", "القدرات")}
                    </h3>
                    <ul className="space-y-0">
                      {t(service.capabilities.en, service.capabilities.ar).map(
                        (cap: string, j: number) => (
                          <li
                            key={j}
                            className="flex items-center gap-4 text-black/70 py-5 border-b border-black/[0.06] last:border-0"
                          >
                            <span className="w-1.5 h-1.5 rotate-45 bg-brand-blue shrink-0" />
                            <span className="text-base font-medium">{cap}</span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
                {i < siteContent.services.items.length - 1 && (
                  <div className="lg:col-span-2 border-t border-black/[0.06]" />
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-32 text-center"
          >
            <h3 className="text-3xl md:text-4xl font-lyon font-bold tracking-tight mb-8">
              {t("Have a project in mind?", "لديك مشروع في ذهنك؟")}
            </h3>
            <Button href="/contact" variant="primary" size="lg" withArrow>
              {t("Let's talk", "لنتحدث")}
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
