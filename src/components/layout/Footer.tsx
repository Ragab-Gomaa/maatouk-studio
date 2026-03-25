"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/lib/LocaleContext";
import { siteContent } from "@/data/content";
import { fadeUp, staggerContainer } from "@/lib/animations";
import BrandMark from "@/components/ui/BrandMark";
import DiamondDivider from "@/components/ui/DiamondDivider";

const socialLinks = [
  { name: "Instagram", href: "#" },
  { name: "Behance", href: "#" },
  { name: "LinkedIn", href: "#" },
  { name: "X / Twitter", href: "#" },
];

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-black text-white relative overflow-hidden">
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: 'url("/images/patterns/pattern-2.svg")',
            backgroundSize: "160px",
            backgroundRepeat: "repeat",
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-8 md:px-12 lg:px-20">
        {/* CTA Strip */}
        <div className="py-20 md:py-28 text-center">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl md:text-6xl lg:text-7xl font-lyon font-bold tracking-tight mb-6"
          >
            {t("Ready to start?", "مستعد للبدء؟")}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-white/60 text-lg max-w-xl mx-auto mb-10"
          >
            {t(
              "Tell us about your next project. We'll respond within 24 hours.",
              "أخبرنا عن مشروعك القادم. سنرد خلال ٢٤ ساعة."
            )}
          </motion.p>
          <motion.a
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            href="/contact"
            className="inline-flex items-center gap-3 px-10 py-5 bg-brand-green text-black text-lg font-bold hover:bg-white transition-colors duration-300"
          >
            {t("Start a project", "ابدأ مشروعك")}
            <svg
              className="w-5 h-5"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </motion.a>
        </div>

        <DiamondDivider color="#ffffff" className="opacity-20" />

        {/* Footer Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {/* Brand */}
          <motion.div variants={fadeUp} className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <BrandMark color="#ffffff" size={32} />
              <span className="font-lyon text-lg font-bold">
                {t("Maatouk Studio", "ستوديو معتوق")}
              </span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              {t(siteContent.footer.tagline.en, siteContent.footer.tagline.ar)}
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div variants={fadeUp}>
            <h4 className="text-xs font-medium uppercase tracking-[0.2em] text-white/40 mb-5">
              {t("Navigation", "التنقل")}
            </h4>
            <ul className="space-y-3">
              {Object.entries(siteContent.nav).map(([key, val]) => (
                <li key={key}>
                  <a
                    href={`/${key === "journal" ? "#" : key}`}
                    className="text-white/70 hover:text-brand-green transition-colors duration-300 text-sm"
                  >
                    {t(val.en, val.ar)}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div variants={fadeUp}>
            <h4 className="text-xs font-medium uppercase tracking-[0.2em] text-white/40 mb-5">
              {t("Connect", "تواصل")}
            </h4>
            <ul className="space-y-3">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-brand-green transition-colors duration-300 text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={fadeUp}>
            <h4 className="text-xs font-medium uppercase tracking-[0.2em] text-white/40 mb-5">
              {t("Get in touch", "تواصل معنا")}
            </h4>
            <a
              href={`mailto:${siteContent.contact.email}`}
              className="text-brand-green hover:text-white transition-colors duration-300 text-sm font-medium"
            >
              {siteContent.contact.email}
            </a>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <p>
            {t(
              siteContent.footer.copyright.en,
              siteContent.footer.copyright.ar
            )}
          </p>
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rotate-45 bg-brand-green" />
            <span>
              {t("Crafted with intention", "صُنع بعناية")}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
