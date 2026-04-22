"use client";

import Link from "next/link";
import { useTranslation } from "@/lib/LocaleContext";
import { siteContent } from "@/data/content";
import BrandMark from "@/components/ui/BrandMark";

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-white relative overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 py-16 md:py-20">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-10 md:gap-8 mb-16">
          <div>
            <Link href="/" className="inline-flex items-center gap-2.5 mb-5">
              <BrandMark color="#ffffff" size={28} />
              <span className="font-lyon text-lg font-bold tracking-tight">
                {t("Maatouk Studio", "ستوديو معتوق")}
              </span>
            </Link>
            <p className="text-sm text-white/60 leading-relaxed max-w-xs">
              {t(
                "A bilingual design studio for brand identities, motion, and digital products.",
                "استوديو تصميم ثنائي اللغة للهويات البصرية والموشن والمنتجات الرقمية."
              )}
            </p>
          </div>

          <div>
            <h4 className="text-[11px] uppercase tracking-[0.2em] font-semibold text-white/50 mb-5">
              {t("Studio", "الاستوديو")}
            </h4>
            <ul className="space-y-3 text-sm">
              {Object.entries(siteContent.nav).map(([key, val]) => (
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

          <div>
            <h4 className="text-[11px] uppercase tracking-[0.2em] font-semibold text-white/50 mb-5">
              {t("Connect", "تواصل")}
            </h4>
            <ul className="space-y-3 text-sm">
              {["Instagram", "Behance", "Vimeo", "LinkedIn"].map((s) => (
                <li key={s}>
                  <a
                    href="#"
                    className="text-white/80 hover:text-brand-green transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] uppercase tracking-[0.2em] font-semibold text-white/50 mb-5">
              {t("Get in touch", "تواصل معنا")}
            </h4>
            <a
              href={`mailto:${siteContent.contact.email}`}
              className="text-brand-green hover:text-white transition-colors text-sm font-medium block mb-3"
            >
              {siteContent.contact.email}
            </a>
            <p className="text-xs text-white/50 leading-relaxed">
              {t("Response within 24 hours", "الرد خلال ٢٤ ساعة")}
            </p>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-8 border-t border-white/10 text-xs text-white/50">
          <p>
            © {year} {t("Maatouk Studio. All rights reserved.", "ستوديو معتوق. جميع الحقوق محفوظة.")}
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
