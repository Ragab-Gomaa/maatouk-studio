"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslation } from "@/lib/LocaleContext";
import { siteContent } from "@/data/content";
import BrandMark from "@/components/ui/BrandMark";

const WHATSAPP_URL = "https://wa.me/201064889808";

type Social = {
  name: string;
  href: string;
  label: { en: string; ar: string };
  icon: React.ReactNode;
};

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069M12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0m0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324M12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8m6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881" />
  </svg>
);

const BehanceIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-[19px] h-[19px]" aria-hidden="true">
    <path d="M6.938 4.503c.702 0 1.34.06 1.92.188.577.13 1.07.33 1.485.61.41.28.733.65.96 1.12.225.47.34 1.05.34 1.73 0 .74-.17 1.36-.507 1.86-.338.5-.837.9-1.502 1.22.906.26 1.576.72 2.022 1.37.448.66.665 1.44.665 2.36 0 .75-.13 1.39-.41 1.93-.28.55-.67 1-1.16 1.35-.48.348-1.05.6-1.67.767-.61.174-1.26.26-1.94.26H0V4.503h6.938zm-.46 5.995c.57 0 1.04-.135 1.41-.407.368-.27.55-.72.55-1.32 0-.337-.065-.624-.177-.83-.117-.207-.274-.367-.476-.48-.207-.11-.438-.187-.7-.23-.257-.04-.53-.06-.8-.06H3.266v3.33h3.22l-.002-.003zm.175 6.32c.302 0 .593-.03.874-.088.27-.06.52-.16.72-.303.2-.14.36-.34.48-.59.115-.25.17-.58.17-.97 0-.76-.217-1.3-.646-1.62-.43-.332-1.012-.498-1.734-.498H3.264v4.067h3.393l-.004.002zM15.2 16.518c.44.43 1.09.648 1.92.648.6 0 1.115-.15 1.542-.44.437-.3.71-.62.81-.96h2.705c-.43 1.337-1.097 2.29-1.978 2.87-.88.58-1.952.87-3.19.87-.85 0-1.632-.15-2.318-.42-.687-.28-1.266-.68-1.75-1.18-.48-.51-.85-1.12-1.11-1.82-.26-.708-.384-1.47-.384-2.31 0-.82.13-1.57.4-2.272.27-.702.63-1.31 1.122-1.822.475-.51 1.05-.92 1.72-1.22.67-.3 1.41-.44 2.22-.44.905 0 1.69.175 2.362.527.675.35 1.215.82 1.625 1.412.41.59.71 1.25.87 2.002.16.74.21 1.52.15 2.33h-7.628c0 .84.234 1.612.675 2.043l.004.003zm3.376-5.55c-.35-.386-.97-.592-1.69-.592-.473 0-.865.08-1.178.24-.313.158-.568.36-.762.59-.193.23-.326.484-.397.725-.074.25-.12.458-.134.64h4.728c-.064-.742-.316-1.226-.664-1.614v.01zm-4.253-5.83h5.906v1.44h-5.906V5.14z" />
  </svg>
);

const VimeoIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]" aria-hidden="true">
    <path d="M23.977 6.416c-.105 2.338-1.739 5.543-4.894 9.609-3.268 4.247-6.026 6.37-8.29 6.37-1.409 0-2.578-1.294-3.553-3.881L5.322 11.4C4.603 8.816 3.834 7.522 3.01 7.522c-.179 0-.806.378-1.881 1.132L0 7.197c1.185-1.044 2.351-2.084 3.501-3.128C5.08 2.701 6.266 1.984 7.055 1.91c1.867-.18 3.016 1.1 3.447 3.838.465 2.953.789 4.789.971 5.507.539 2.45 1.131 3.674 1.776 3.674.502 0 1.256-.796 2.265-2.385 1.004-1.589 1.54-2.797 1.612-3.628.144-1.371-.395-2.061-1.614-2.061-.574 0-1.167.121-1.777.391 1.186-3.868 3.434-5.757 6.762-5.637 2.473.06 3.628 1.664 3.493 4.797" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125m1.782 13.019H3.555V9h3.564v11.452M22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]" aria-hidden="true">
    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23-1.48 0-2.93-.39-4.19-1.15l-.3-.17-3.12.82.83-3.04-.2-.32a8.188 8.188 0 0 1-1.26-4.38c.01-4.54 3.7-8.24 8.25-8.24M8.53 7.33c-.16 0-.43.06-.66.31-.22.25-.87.86-.87 2.07 0 1.22.89 2.39 1 2.56.14.17 1.76 2.67 4.25 3.73.59.27 1.05.42 1.41.53.59.19 1.13.16 1.56.1.48-.07 1.46-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.07-.1-.23-.16-.48-.27-.25-.14-1.47-.74-1.69-.82-.23-.08-.4-.12-.56.12-.17.25-.64.81-.78.97-.15.17-.29.19-.53.07-.26-.13-1.06-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.12-.24-.01-.39.11-.5.11-.11.27-.29.37-.44.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43-.14 0-.3-.01-.47-.01" />
  </svg>
);

const socials: Social[] = [
  {
    name: "Instagram",
    href: "#",
    label: { en: "Instagram", ar: "انستغرام" },
    icon: <InstagramIcon />,
  },
  {
    name: "Behance",
    href: "#",
    label: { en: "Behance", ar: "بيهانس" },
    icon: <BehanceIcon />,
  },
  {
    name: "Vimeo",
    href: "#",
    label: { en: "Vimeo", ar: "فيميو" },
    icon: <VimeoIcon />,
  },
  {
    name: "LinkedIn",
    href: "#",
    label: { en: "LinkedIn", ar: "لينكدإن" },
    icon: <LinkedInIcon />,
  },
  {
    name: "WhatsApp",
    href: WHATSAPP_URL,
    label: { en: "WhatsApp", ar: "واتساب" },
    icon: <WhatsAppIcon />,
  },
];

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="pt-4 md:pt-6 pb-10 md:pb-14 bg-surface">
      <div className="max-w-[1320px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-[36px] md:rounded-[48px] bg-ink text-white overflow-hidden"
        >
          {/* Colour splashes */}
          <div
            className="absolute top-[-140px] right-[6%] w-[520px] h-[520px] rounded-full bg-brand-blue/[0.22] blur-3xl pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-[-160px] left-[4%] w-[460px] h-[460px] rounded-full bg-brand-green/[0.14] blur-3xl pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute top-[40%] left-[38%] w-[320px] h-[320px] rounded-full bg-brand-blue/[0.08] blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 p-10 md:p-14 lg:p-16">
            {/* Top row — brand + availability */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 md:gap-10 mb-12 md:mb-14">
              <div className="max-w-lg">
                <Link href="/" className="inline-flex items-center gap-3 mb-6">
                  <BrandMark color="#ffffff" size={36} />
                  <span className="font-lyon text-2xl md:text-3xl font-bold tracking-tight">
                    {t("Maatouk Studio", "ستوديو معتوق")}
                  </span>
                </Link>
                <p className="font-lyon text-lg md:text-[1.4rem] font-bold tracking-[-0.02em] leading-tight">
                  {t(
                    "Brands that move culture — identity, motion, and digital.",
                    "علاماتٌ تُحرّك الثقافة — هويّة، موشن، ومنتج رقمي."
                  )}
                </p>
              </div>

              <div className="inline-flex items-center gap-2.5 pl-2.5 pr-4 py-2 rounded-full border border-white/15 bg-white/[0.04] text-[11px] uppercase tracking-[0.2em] font-semibold text-white/80 self-start shrink-0">
                <span className="relative flex items-center justify-center w-2 h-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-60 animate-ping" />
                  <span className="relative inline-flex w-2 h-2 rounded-full bg-brand-green" />
                </span>
                {t("Open for new projects", "متاحون لمشاريع جديدة")}
              </div>
            </div>

            <div className="h-px bg-white/10 mb-10 md:mb-12" />

            {/* Middle row — studio links + social icons */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              {/* Studio nav */}
              <nav aria-label={t("Studio pages", "صفحات الاستوديو")}>
                <ul className="flex flex-wrap items-center gap-x-7 gap-y-3 text-sm">
                  {Object.entries(siteContent.nav)
                    .filter(([key]) => key !== "contact")
                    .map(([key, val]) => (
                      <li key={key}>
                        <Link
                          href={`/${key}`}
                          className="text-white/75 hover:text-brand-green transition-colors focus:outline-none focus-visible:outline-2 focus-visible:outline-brand-green focus-visible:outline-offset-2 rounded-sm"
                        >
                          {t(val.en, val.ar)}
                        </Link>
                      </li>
                    ))}
                </ul>
              </nav>

              {/* Social icons */}
              <ul className="flex items-center gap-2.5">
                {socials.map((s) => (
                  <li key={s.name}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={t(s.label.en, s.label.ar)}
                      className="group w-10 h-10 rounded-full border border-white/12 bg-white/[0.04] hover:bg-white/[0.08] hover:border-white/25 flex items-center justify-center text-white/70 hover:text-brand-green transition-all duration-300 focus:outline-none focus-visible:outline-2 focus-visible:outline-brand-green focus-visible:outline-offset-2"
                    >
                      {s.icon}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="h-px bg-white/10 mt-10 md:mt-12 mb-6 md:mb-8" />

            {/* Bottom legal */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-white/50">
              <p>
                © {year}{" "}
                {t(
                  "Maatouk Studio. All rights reserved.",
                  "ستوديو معتوق. جميع الحقوق محفوظة."
                )}
              </p>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-green" />
                <span>{t("Crafted with intention", "صُنع بعناية")}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
