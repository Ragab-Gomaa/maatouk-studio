"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useTranslation } from "@/lib/LocaleContext";
import { siteContent } from "@/data/content";
import Button from "@/components/ui/Button";

const navLinks = [
  { href: "/work", label: siteContent.nav.work },
  { href: "/services", label: siteContent.nav.services },
  { href: "/about", label: siteContent.nav.about },
  { href: "/contact", label: siteContent.nav.contact },
];

export default function Header() {
  const { locale, toggleLocale, t } = useTranslation();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "pt-3" : "pt-5"
        }`}
      >
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
          <nav
            className={`flex items-center justify-between gap-4 transition-all duration-500 rounded-full px-6 sm:px-8 ${
              scrolled
                ? "bg-surface-raised/95 backdrop-blur-md shadow-[0_6px_24px_rgba(18,18,20,0.08)] py-3"
                : "bg-surface-raised/90 backdrop-blur-md shadow-[0_2px_12px_rgba(18,18,20,0.04)] py-4"
            }`}
            aria-label={t("Primary navigation", "التنقل الرئيسي")}
          >
            {/* ── Logo ── */}
            <Link
              href="/"
              className="flex items-center gap-2.5 md:gap-3 shrink-0 group focus:outline-none focus-visible:outline-2 focus-visible:outline-brand-blue focus-visible:outline-offset-4 rounded-full"
              aria-label={t("Maatouk Studio — Home", "ستوديو معتوق — الرئيسية")}
            >
              <span className="block transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:rotate-180">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/logos/mark-blue.svg"
                  alt=""
                  className="w-6 h-6 md:w-[26px] md:h-[26px] block"
                />
              </span>
              <span
                className={`hidden sm:inline-block font-bold tracking-[-0.01em] text-ink leading-none ${
                  locale === "ar"
                    ? "font-mizan text-[17px] md:text-[18px]"
                    : "font-lyon text-[16px] md:text-[17px]"
                }`}
              >
                {t("Maatouk Studio", "ستوديو معتوق")}
              </span>
            </Link>

            {/* ── Desktop nav — pill hover + sliding active indicator ── */}
            <div className="hidden lg:flex items-center gap-1 relative">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={`relative px-4 py-2 rounded-full text-[14px] font-medium transition-colors duration-300 focus:outline-none focus-visible:outline-2 focus-visible:outline-brand-blue focus-visible:outline-offset-2 ${
                      active
                        ? "text-white"
                        : "text-ink-muted hover:text-ink hover:bg-black/[0.04]"
                    }`}
                  >
                    {active && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 bg-ink rounded-full -z-10"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                    <span className="relative">{t(link.label.en, link.label.ar)}</span>
                  </Link>
                );
              })}
            </div>

            {/* ── Right actions ── */}
            <div className="flex items-center gap-4 md:gap-5">
              <LanguageSwitch locale={locale} onToggle={toggleLocale} />

              <div className="hidden lg:block">
                <Button href="/contact" variant="primary" size="sm" withArrow>
                  {t("Start a project", "ابدأ مشروعك")}
                </Button>
              </div>

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden w-10 h-10 rounded-full flex items-center justify-center border border-black/[0.08] hover:border-brand-blue/40 transition-colors focus:outline-none focus-visible:outline-2 focus-visible:outline-brand-blue focus-visible:outline-offset-2"
                aria-label={menuOpen ? t("Close menu", "إغلاق") : t("Open menu", "فتح القائمة")}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
              >
                <div className="flex flex-col gap-1">
                  <motion.span
                    animate={menuOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
                    className="w-4 h-0.5 bg-ink block rounded-full"
                  />
                  <motion.span
                    animate={menuOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
                    className="w-4 h-0.5 bg-ink block rounded-full"
                  />
                </div>
              </button>
            </div>
          </nav>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-surface flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-6 md:gap-8">
              {navLinks.map((link, i) => {
                const active = isActive(link.href);
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.07, duration: 0.5 }}
                  >
                    <Link
                      href={link.href}
                      aria-current={active ? "page" : undefined}
                      onClick={() => setMenuOpen(false)}
                      className={`font-lyon text-4xl md:text-5xl font-bold transition-colors ${
                        active ? "text-brand-blue" : "text-ink hover:text-brand-blue"
                      }`}
                    >
                      {t(link.label.en, link.label.ar)}
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.5 }}
                className="mt-4"
              >
                <Button href="/contact" variant="primary" size="lg" withArrow onClick={() => setMenuOpen(false)}>
                  {t("Start a project", "ابدأ مشروعك")}
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.55 }}
                className="mt-6"
              >
                <LanguageSwitch locale={locale} onToggle={toggleLocale} />
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/**
 * LanguageSwitch — a quiet typographic link that shows the abbreviated
 * target language (AR / EN). Minimal: globe icon + 2-letter code + a subtle
 * color shift on hover.
 */
function LanguageSwitch({
  locale,
  onToggle,
}: {
  locale: "en" | "ar";
  onToggle: () => void;
}) {
  const target = locale === "en" ? "AR" : "EN";

  return (
    <button
      onClick={onToggle}
      className="group inline-flex items-center gap-1.5 text-[13px] font-semibold tracking-wide text-ink-whisper hover:text-ink transition-colors duration-300 focus:outline-none focus-visible:outline-2 focus-visible:outline-brand-blue focus-visible:outline-offset-4 rounded-sm py-1"
      aria-label={`Switch language to ${locale === "en" ? "Arabic" : "English"}`}
      style={{ direction: "ltr" }}
    >
      <svg
        className="w-3.5 h-3.5 text-ink-whisper group-hover:text-ink transition-colors duration-300"
        viewBox="0 0 14 14"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        aria-hidden="true"
      >
        <circle cx="7" cy="7" r="5.5" />
        <path d="M1.5 7h11" />
        <path d="M7 1.5c1.6 2 2.5 3.8 2.5 5.5S8.6 10.5 7 12.5M7 1.5c-1.6 2-2.5 3.8-2.5 5.5S5.4 10.5 7 12.5" />
      </svg>
      <span>{target}</span>
    </button>
  );
}
