"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "@/lib/LocaleContext";

interface LivePreviewProps {
  url: string;
  title: string;
  label?: string;
}

/**
 * LivePreview embeds a live site inside a realistic laptop-style browser chrome.
 * The iframe loads on demand (after user clicks "Load preview") to avoid
 * expensive third-party loading on page mount. Users always have a clear
 * "Open site" escape hatch.
 */
export default function LivePreview({ url, title, label }: LivePreviewProps) {
  const { t } = useTranslation();
  const [loaded, setLoaded] = useState(false);

  const displayUrl = url.replace(/^https?:\/\//, "").replace(/\/$/, "");

  return (
    <div className="relative">
      {label && (
        <div className="flex items-center gap-3 mb-4">
          <span className="w-2 h-2 rotate-45 bg-brand-blue" />
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-blue">
            {label}
          </span>
        </div>
      )}

      {/* Browser chrome wrapper */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="relative bg-surface border border-black/[0.08] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.15)] overflow-hidden"
      >
        {/* Browser bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-black/[0.06] bg-white">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#FF5F57]" aria-hidden="true" />
            <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" aria-hidden="true" />
            <span className="w-3 h-3 rounded-full bg-[#28C840]" aria-hidden="true" />
          </div>
          <div className="flex-1 mx-3 md:mx-6">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-black/[0.04] rounded text-xs font-medium text-black/60">
              <svg className="w-3 h-3 shrink-0 text-black/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <rect x="3" y="11" width="18" height="11" rx="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              <span className="truncate">{displayUrl}</span>
            </div>
          </div>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium text-brand-blue hover:text-brand-blue-dark transition-colors whitespace-nowrap hidden sm:inline-flex items-center gap-1.5 focus:outline-none focus-visible:outline-2 focus-visible:outline-brand-blue focus-visible:outline-offset-2"
            aria-label={t(`Open ${title} in new tab`, `افتح ${title} في تبويب جديد`)}
          >
            {t("Open site", "فتح الموقع")}
            <svg className="w-3 h-3 rtl-flip" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M7 17L17 7M7 7h10v10" />
            </svg>
          </a>
        </div>

        {/* Preview area */}
        <div className="relative aspect-[16/10] md:aspect-[16/9] bg-surface-low overflow-hidden">
          {!loaded ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-brand-blue/10 flex items-center justify-center">
                <svg className="w-7 h-7 text-brand-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <rect x="3" y="5" width="18" height="14" rx="1" />
                  <path d="M3 9h18" />
                  <circle cx="7" cy="7" r="0.5" fill="currentColor" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-black/80 mb-1">
                  {t("Live preview available", "معاينة مباشرة متوفرة")}
                </p>
                <p className="text-xs text-black/50 max-w-sm">
                  {t(
                    "Click to load an embedded live view of the site. The preview stays in sync with the live deployment.",
                    "اضغط لتحميل معاينة مباشرة للموقع. المعاينة تبقى متزامنة مع النسخة اللايف."
                  )}
                </p>
              </div>
              <div className="flex flex-wrap gap-3 justify-center">
                <button
                  onClick={() => setLoaded(true)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-blue text-white text-sm font-medium hover:bg-brand-blue-dark transition-colors focus:outline-none focus-visible:outline-2 focus-visible:outline-brand-blue focus-visible:outline-offset-2"
                >
                  {t("Load preview", "تحميل المعاينة")}
                </button>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-black/15 text-black/70 text-sm font-medium hover:border-brand-blue hover:text-brand-blue transition-colors"
                >
                  {t("Or visit site", "أو زيارة الموقع")}
                  <svg className="w-3 h-3 rtl-flip" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M7 17L17 7M7 7h10v10" />
                  </svg>
                </a>
              </div>
            </div>
          ) : (
            <iframe
              src={url}
              title={`Live preview of ${title}`}
              className="absolute inset-0 w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer"
              sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
            />
          )}
        </div>
      </motion.div>

      <p className="mt-3 text-xs text-black/40 text-center">
        {t(
          "Live view updates automatically with the deployed site",
          "المعاينة المباشرة تتحدث تلقائياً مع الموقع اللايف"
        )}
      </p>
    </div>
  );
}
