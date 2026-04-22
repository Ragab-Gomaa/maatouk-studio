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
 * LivePreview — one clean browser-chromed iframe. The case study tells the
 * story visually via mockups and screenshots above; this is the "experience
 * it live" moment at the bottom of the page.
 */
export default function LivePreview({ url, title, label }: LivePreviewProps) {
  const { t } = useTranslation();
  const [loaded, setLoaded] = useState(false);

  const displayUrl = url.replace(/^https?:\/\//, "").replace(/\/$/, "");

  return (
    <div className="relative">
      {label && (
        <div className="flex items-center gap-3 mb-5">
          <span className="w-2 h-2 rotate-45 bg-brand-blue" />
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-blue">
            {label}
          </span>
        </div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
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
              <svg
                className="w-3 h-3 shrink-0 text-black/40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
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
            aria-label={t(
              `Open ${title} in new tab`,
              `افتح ${title} في تبويب جديد`
            )}
          >
            {t("Open site", "فتح الموقع")}
            <svg
              className="w-3 h-3 rtl-flip"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M7 17L17 7M7 7h10v10" />
            </svg>
          </a>
        </div>

        <div className="relative aspect-[16/10] bg-surface-low overflow-hidden">
          {!loaded ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-brand-blue"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden="true"
                >
                  <polygon points="6,4 20,12 6,20" fill="currentColor" />
                </svg>
              </div>
              <p className="text-sm text-black/60 max-w-sm">
                {t(
                  "Want to try it live? Load the site inside this page.",
                  "عايز تجربه لايف؟ حمّل الموقع داخل هذه الصفحة."
                )}
              </p>
              <button
                onClick={() => setLoaded(true)}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-blue text-white text-sm font-medium hover:bg-brand-blue-dark transition-colors focus:outline-none focus-visible:outline-2 focus-visible:outline-brand-blue focus-visible:outline-offset-2"
              >
                {t("Load live preview", "تحميل المعاينة")}
              </button>
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
    </div>
  );
}
