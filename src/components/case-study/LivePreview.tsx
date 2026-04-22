"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "@/lib/LocaleContext";

interface LivePreviewProps {
  url: string;
  title: string;
  label?: string;
  showMobile?: boolean;
}

/**
 * LivePreview renders the live site in a realistic laptop browser chrome and,
 * when `showMobile` is true, a phone frame beside it. Both iframes load on
 * demand so no third-party scripts run until the user opts in.
 */
export default function LivePreview({
  url,
  title,
  label,
  showMobile = true,
}: LivePreviewProps) {
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

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className={`grid gap-5 md:gap-7 ${
          showMobile ? "grid-cols-1 xl:grid-cols-[1fr_auto]" : "grid-cols-1"
        }`}
      >
        {/* ─── Desktop Browser ─── */}
        <DesktopFrame
          url={url}
          displayUrl={displayUrl}
          title={title}
          loaded={loaded}
          onLoad={() => setLoaded(true)}
          t={t}
        />

        {/* ─── Mobile Phone ─── */}
        {showMobile && (
          <MobileFrame
            url={url}
            title={title}
            loaded={loaded}
            t={t}
          />
        )}
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

/* ─────────────────── Desktop Frame ─────────────────── */

function DesktopFrame({
  url,
  displayUrl,
  title,
  loaded,
  onLoad,
  t,
}: {
  url: string;
  displayUrl: string;
  title: string;
  loaded: boolean;
  onLoad: () => void;
  t: (en: string, ar: string) => string;
}) {
  return (
    <div className="relative bg-surface border border-black/[0.08] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.15)] overflow-hidden">
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

      {/* Preview area */}
      <div className="relative aspect-[16/10] bg-surface-low overflow-hidden">
        {!loaded ? (
          <LoadPrompt onLoad={onLoad} url={url} title={title} t={t} />
        ) : (
          <iframe
            src={url}
            title={`Desktop preview of ${title}`}
            className="absolute inset-0 w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer"
            sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
          />
        )}
      </div>
    </div>
  );
}

/* ─────────────────── Mobile Frame ─────────────────── */

function MobileFrame({
  url,
  title,
  loaded,
  t,
}: {
  url: string;
  title: string;
  loaded: boolean;
  t: (en: string, ar: string) => string;
}) {
  // Native viewport the iframe reports to the site.
  const viewport = { w: 390, h: 780 };
  // Display size of the phone frame on screen.
  const display = { w: 240, h: 480 };
  const scale = display.w / viewport.w;

  return (
    <div className="flex xl:flex-col items-center xl:items-center justify-center gap-4 pt-2 xl:pt-0">
      {/* Phone frame */}
      <div
        className="relative bg-[#0b0b0d] rounded-[32px] p-2.5 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)]"
        style={{ width: display.w + 20 }}
      >
        {/* Notch / camera pill */}
        <div
          className="absolute top-3.5 left-1/2 -translate-x-1/2 z-10 h-5 w-20 rounded-full bg-black"
          aria-hidden="true"
        />

        <div
          className="relative overflow-hidden bg-white rounded-[22px]"
          style={{ width: display.w, height: display.h }}
        >
          {loaded ? (
            <div
              style={{
                width: viewport.w,
                height: viewport.h,
                transform: `scale(${scale})`,
                transformOrigin: "top left",
              }}
            >
              <iframe
                src={url}
                title={`Mobile preview of ${title}`}
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer"
                sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
              />
            </div>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-center px-4">
              <div className="flex flex-col items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-brand-blue"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    aria-hidden="true"
                  >
                    <rect x="7" y="2" width="10" height="20" rx="2" />
                    <line x1="11" y1="18" x2="13" y2="18" />
                  </svg>
                </div>
                <p className="text-[11px] text-black/50 leading-snug">
                  {t("Mobile view", "عرض الجوال")}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Caption (visible under phone on xl, next to phone on mobile) */}
      <div className="flex xl:flex-col items-center gap-1.5 xl:gap-1">
        <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.15em] font-medium text-black/50">
          <svg
            className="w-3 h-3 text-brand-blue"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <rect x="7" y="2" width="10" height="20" rx="2" />
            <line x1="11" y1="18" x2="13" y2="18" />
          </svg>
          <span>{t("Mobile", "جوال")}</span>
        </div>
        <span className="text-[10px] text-black/35 hidden xl:block">
          iPhone · 390px
        </span>
      </div>
    </div>
  );
}

/* ─────────────────── Load Prompt ─────────────────── */

function LoadPrompt({
  onLoad,
  url,
  title,
  t,
}: {
  onLoad: () => void;
  url: string;
  title: string;
  t: (en: string, ar: string) => string;
}) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 p-6 text-center">
      <div className="w-16 h-16 rounded-full bg-brand-blue/10 flex items-center justify-center">
        <svg
          className="w-7 h-7 text-brand-blue"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
        >
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
            "Click to load an embedded live view of the site — desktop and mobile side by side.",
            "اضغط لتحميل معاينة مباشرة للموقع — إصدار سطح المكتب والجوال جنباً إلى جنب."
          )}
        </p>
      </div>
      <div className="flex flex-wrap gap-3 justify-center">
        <button
          onClick={onLoad}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-blue text-white text-sm font-medium hover:bg-brand-blue-dark transition-colors focus:outline-none focus-visible:outline-2 focus-visible:outline-brand-blue focus-visible:outline-offset-2"
        >
          {t("Load preview", "تحميل المعاينة")}
        </button>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 border border-black/15 text-black/70 text-sm font-medium hover:border-brand-blue hover:text-brand-blue transition-colors"
          aria-label={t(
            `Open ${title} in new tab`,
            `افتح ${title} في تبويب جديد`
          )}
        >
          {t("Or visit site", "أو زيارة الموقع")}
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
    </div>
  );
}
