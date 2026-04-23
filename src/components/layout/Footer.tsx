"use client";

import Link from "next/link";
import { useTranslation } from "@/lib/LocaleContext";
import { siteContent } from "@/data/content";
import BrandMark from "@/components/ui/BrandMark";

const SOCIAL_LINKS = [
  { name: "Instagram", href: "#" },
  { name: "Behance", href: "#" },
  { name: "Vimeo", href: "#" },
  { name: "LinkedIn", href: "#" },
];

const WHATSAPP_URL = "https://wa.me/201064889808";

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-white relative overflow-hidden">
      {/* Ambient glows */}
      <div
        className="absolute top-[-10%] right-[8%] w-[500px] h-[500px] rounded-full bg-brand-blue/[0.18] blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-[-15%] left-[5%] w-[420px] h-[420px] rounded-full bg-brand-green/[0.08] blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1320px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 pt-20 md:pt-24">
        {/* Top — brand + tagline + availability */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 lg:gap-16 items-start mb-16 md:mb-20">
          <div>
            <Link href="/" className="inline-flex items-center gap-3 mb-6">
              <BrandMark color="#ffffff" size={36} />
              <span className="font-lyon text-2xl md:text-3xl font-bold tracking-tight">
                {t("Maatouk Studio", "ستوديو معتوق")}
              </span>
            </Link>
            <p className="font-lyon text-xl md:text-2xl font-bold tracking-[-0.02em] leading-tight max-w-lg">
              {t(
                "Brands that move culture — identity, motion, and digital.",
                "علاماتٌ تُحرّك الثقافة — هويّة، موشن، ومنتج رقمي."
              )}
            </p>
          </div>

          {/* Availability signal */}
          <div className="inline-flex items-center gap-2.5 pl-2.5 pr-4 py-2 rounded-full border border-white/15 bg-white/[0.04] text-[11px] uppercase tracking-[0.2em] font-semibold text-white/80 self-start lg:self-end">
            <span className="relative flex items-center justify-center w-2 h-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-60 animate-ping" />
              <span className="relative inline-flex w-2 h-2 rounded-full bg-brand-green" />
            </span>
            {t("Open for new projects", "متاحون لمشاريع جديدة")}
          </div>
        </div>

        {/* Nav columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 pb-14 md:pb-16 border-b border-white/10">
          {/* Studio pages */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.2em] font-semibold text-white/50 mb-5">
              {t("Studio", "الاستوديو")}
            </h4>
            <ul className="space-y-3 text-sm">
              {Object.entries(siteContent.nav)
                .filter(([key]) => key !== "contact")
                .map(([key, val]) => (
                  <li key={key}>
                    <Link
                      href={`/${key}`}
                      className="text-white/80 hover:text-brand-green transition-colors focus:outline-none focus-visible:outline-2 focus-visible:outline-brand-green focus-visible:outline-offset-2 rounded-sm"
                    >
                      {t(val.en, val.ar)}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          {/* Follow */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.2em] font-semibold text-white/50 mb-5">
              {t("Follow", "متابعة")}
            </h4>
            <ul className="space-y-3 text-sm">
              {SOCIAL_LINKS.map((s) => (
                <li key={s.name}>
                  <a
                    href={s.href}
                    className="group inline-flex items-center gap-1.5 text-white/80 hover:text-brand-green transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {s.name}
                    <svg
                      className="w-3 h-3 text-white/30 group-hover:text-brand-green rtl-flip transition-colors"
                      viewBox="0 0 12 12"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      aria-hidden="true"
                    >
                      <path d="M3.5 8.5L8.5 3.5M4 3.5h4.5V8" />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.2em] font-semibold text-white/50 mb-5">
              {t("Contact", "تواصل")}
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${siteContent.contact.email}`}
                  className="text-brand-green hover:text-white transition-colors font-medium"
                >
                  {siteContent.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-brand-green transition-colors"
                >
                  {t("WhatsApp", "واتساب")}
                </a>
              </li>
              <li className="pt-2 text-xs text-white/50">
                {t("Reply within 24 hours", "ردّ خلال ٢٤ ساعة")}
              </li>
            </ul>
          </div>
        </div>

        {/* Big wordmark signature */}
        <div className="py-10 md:py-14 overflow-hidden">
          <div
            className="font-lyon font-bold leading-[0.85] tracking-[-0.04em] text-white/[0.05] select-none whitespace-nowrap text-center"
            style={{ fontSize: "clamp(4.5rem, 15vw, 14rem)" }}
            aria-hidden="true"
          >
            {t("Maatouk Studio", "ستوديو معتوق")}
          </div>
        </div>

        {/* Bottom legal */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-10 text-xs text-white/50">
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
    </footer>
  );
}
