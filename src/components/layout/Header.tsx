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
            className={`flex items-center justify-between gap-4 transition-all duration-500 rounded-full ps-10 sm:ps-12 pe-2.5 ${
              scrolled
                ? "bg-surface-raised/95 backdrop-blur-md shadow-[0_6px_24px_rgba(18,18,20,0.08)] py-3"
                : "bg-surface-raised/90 backdrop-blur-md shadow-[0_2px_12px_rgba(18,18,20,0.04)] py-4"
            }`}
            aria-label={t("Primary navigation", "التنقل الرئيسي")}
          >
            {/* ── Rotating mark + horizontal logo wordmark ── */}
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

            {/* ── Desktop nav — character stagger hover with accent diamond ── */}
            <div className="hidden lg:flex items-center gap-1 relative">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                const label = t(link.label.en, link.label.ar);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={`group/link relative inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-[14px] font-medium overflow-hidden focus:outline-none focus-visible:outline-2 focus-visible:outline-brand-blue focus-visible:outline-offset-2 ${
                      active ? "text-white" : "text-ink-muted"
                    }`}
                  >
                    {active && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 bg-ink rounded-full -z-10"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}

                    {/* Character-stagger hover effect: each letter cross-fades from
                        its current position to a copy lifted in from below. */}
                    <span className="relative inline-flex overflow-hidden leading-none">
                      {label.split("").map((char, i) => {
                        const delay = `${i * 22}ms`;
                        return (
                          <span
                            key={i}
                            className="relative inline-block"
                            style={{ transitionDelay: delay }}
                          >
                            {/* Original letter */}
                            <span
                              className="inline-block transition-transform duration-400 ease-[cubic-bezier(0.77,0,0.175,1)] group-hover/link:-translate-y-full"
                              style={{ transitionDelay: delay }}
                            >
                              {char === " " ? " " : char}
                            </span>
                            {/* Duplicate underneath that slides up on hover */}
                            <span
                              aria-hidden="true"
                              className={`absolute inset-0 inline-block translate-y-full transition-transform duration-400 ease-[cubic-bezier(0.77,0,0.175,1)] group-hover/link:translate-y-0 ${
                                active ? "text-white" : "text-brand-blue font-semibold"
                              }`}
                              style={{ transitionDelay: delay }}
                            >
                              {char === " " ? " " : char}
                            </span>
                          </span>
                        );
                      })}
                    </span>

                    {/* Accent diamond — fades/scales in next to the label */}
                    {!active && (
                      <span
                        className="inline-block w-1 h-1 rotate-45 bg-brand-blue opacity-0 scale-0 group-hover/link:opacity-100 group-hover/link:scale-100 transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] delay-[120ms]"
                        aria-hidden="true"
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* ── Right actions ── */}
            <div className="flex items-center gap-2">
              <LanguageToggle
                locale={locale}
                onToggle={toggleLocale}
                className="hidden sm:inline-flex"
              />

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
                <LanguageToggle locale={locale} onToggle={toggleLocale} />
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/**
 * LanguageToggle — a two-state pill with an ink indicator that slides
 * between EN and AR. Active state is rendered white-on-ink, inactive is a
 * muted label. A shared layoutId animates the indicator between positions.
 */
function LanguageToggle({
  locale,
  onToggle,
  className = "",
}: {
  locale: "en" | "ar";
  onToggle: () => void;
  className?: string;
}) {
  return (
    <button
      onClick={onToggle}
      aria-label={`Switch language to ${locale === "en" ? "Arabic" : "English"}`}
      className={`relative inline-flex items-center p-1 rounded-full bg-black/[0.04] hover:bg-black/[0.07] transition-colors duration-300 focus:outline-none focus-visible:outline-2 focus-visible:outline-brand-blue focus-visible:outline-offset-2 ${className}`}
      style={{ direction: "ltr" }}
    >
      {/* EN slot */}
      <span
        className={`relative px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wide transition-colors duration-300 ${
          locale === "en" ? "text-white" : "text-ink-whisper"
        }`}
      >
        {locale === "en" && (
          <motion.span
            layoutId="lang-indicator"
            className="absolute inset-0 bg-ink rounded-full -z-10"
            transition={{ type: "spring", stiffness: 400, damping: 32 }}
          />
        )}
        <span className="relative">EN</span>
      </span>

      {/* AR slot */}
      <span
        className={`relative px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wide transition-colors duration-300 ${
          locale === "ar" ? "text-white" : "text-ink-whisper"
        }`}
      >
        {locale === "ar" && (
          <motion.span
            layoutId="lang-indicator"
            className="absolute inset-0 bg-ink rounded-full -z-10"
            transition={{ type: "spring", stiffness: 400, damping: 32 }}
          />
        )}
        <span className="relative" style={{ fontFamily: "var(--font-mizan)" }}>
          AR
        </span>
      </span>
    </button>
  );
}
