"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/lib/LocaleContext";
import { siteContent } from "@/data/content";
import BrandMark from "@/components/ui/BrandMark";

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <section className="min-h-screen flex flex-col bg-surface">
      {/* Main content */}
      <div className="flex-1 flex items-center justify-center relative overflow-hidden">
        {/* Giant 404 background */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="text-[16rem] md:text-[24rem] font-lyon font-bold text-black/[0.03] leading-none">
            404
          </span>
        </div>

        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8"
          >
            <BrandMark color="#0029D6" size={80} className="mx-auto" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-5xl md:text-7xl font-lyon font-bold tracking-tight mb-4"
          >
            {t(siteContent.notFound.headline.en, siteContent.notFound.headline.ar)}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-black/50 mb-10 max-w-md mx-auto"
          >
            {t(siteContent.notFound.sub.en, siteContent.notFound.sub.ar)}
          </motion.p>

          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            href="/"
            className="inline-flex items-center gap-3 px-8 py-4 bg-brand-blue text-white font-medium hover:bg-brand-blue-dark transition-colors duration-300"
          >
            <svg
              className="w-4 h-4 rotate-180"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
            {t(siteContent.notFound.cta.en, siteContent.notFound.cta.ar)}
          </motion.a>
        </div>
      </div>
    </section>
  );
}
