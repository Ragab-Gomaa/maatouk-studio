"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/lib/LocaleContext";
import { siteContent } from "@/data/content";
import { fadeUp, staggerContainer } from "@/lib/animations";
import SectionLabel from "@/components/ui/SectionLabel";
import DiamondDivider from "@/components/ui/DiamondDivider";

const serviceIcons = [
  <svg key="brand" viewBox="0 0 64 64" className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="8" y="8" width="20" height="20" transform="rotate(45 18 18)" />
    <rect x="36" y="36" width="20" height="20" transform="rotate(45 46 46)" />
    <path d="M18 32v14M32 18h14" />
  </svg>,
  <svg key="motion" viewBox="0 0 64 64" className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="32" cy="32" r="24" />
    <polygon points="26,20 48,32 26,44" fill="currentColor" stroke="none" />
  </svg>,
  <svg key="web" viewBox="0 0 64 64" className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="6" y="10" width="52" height="40" rx="2" />
    <line x1="6" y1="22" x2="58" y2="22" />
    <circle cx="14" cy="16" r="2" fill="currentColor" />
    <circle cx="22" cy="16" r="2" fill="currentColor" />
    <rect x="14" y="30" width="20" height="12" rx="1" />
  </svg>,
];

export default function ServicesSection() {
  const { t } = useTranslation();

  return (
    <section className="py-24 md:py-36 bg-white relative">
      <div className="max-w-[1440px] mx-auto px-8 md:px-12 lg:px-20">
        <div className="mb-16 md:mb-24">
          <SectionLabel>{t("What we do", "ما نقدمه")}</SectionLabel>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl md:text-6xl lg:text-7xl font-lyon font-bold tracking-tight mt-6 mb-6"
          >
            {t(siteContent.services.headline.en, siteContent.services.headline.ar)
              .split("\n")
              .map((line, i) => (
                <span key={i} className="block">{line}</span>
              ))}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-lg text-black/50 max-w-2xl leading-relaxed"
          >
            {t(siteContent.services.sub.en, siteContent.services.sub.ar)}
          </motion.p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        >
          {siteContent.services.items.map((service, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="group relative p-8 md:p-10 bg-surface border border-black/[0.06] hover:border-brand-blue/30 hover:shadow-lg transition-all duration-500"
            >
              {/* Number */}
              <div className="text-xs font-bold text-black/10 tracking-wider mb-8">
                0{i + 1}
              </div>

              {/* Icon */}
              <div className="text-brand-blue mb-6">
                {serviceIcons[i]}
              </div>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-lyon font-bold mb-4 group-hover:text-brand-blue transition-colors duration-300">
                {t(service.title.en, service.title.ar)}
              </h3>

              {/* Description */}
              <p className="text-black/50 leading-relaxed mb-8 text-[15px]">
                {t(service.desc.en, service.desc.ar)}
              </p>

              {/* Capabilities */}
              <ul className="space-y-2.5">
                {t(service.capabilities.en, service.capabilities.ar).map(
                  (cap: string, j: number) => (
                    <li key={j} className="flex items-center gap-2.5 text-sm text-black/40">
                      <span className="w-1.5 h-1.5 rotate-45 bg-brand-blue shrink-0" />
                      {cap}
                    </li>
                  )
                )}
              </ul>

              {/* Bottom accent on hover */}
              <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-brand-blue group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 text-center">
          <a
            href="/services"
            className="inline-flex items-center gap-3 px-8 py-4 bg-brand-blue text-white text-base font-medium hover:bg-brand-blue-dark transition-colors duration-300"
          >
            {t("Explore all services", "استكشف جميع الخدمات")}
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </a>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-8 md:px-12 lg:px-20 mt-24">
        <DiamondDivider />
      </div>
    </section>
  );
}
