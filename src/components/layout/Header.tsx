"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useTranslation } from "@/lib/LocaleContext";
import { siteContent } from "@/data/content";
import BrandMark from "@/components/ui/BrandMark";
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
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <nav
            className={`flex items-center justify-between gap-4 transition-all duration-500 rounded-full pr-2 pl-5 md:pl-7 ${
              scrolled
                ? "bg-surface-raised/90 backdrop-blur-md shadow-md py-2"
                : "bg-surface-raised/60 backdrop-blur-sm py-2.5"
            }`}
            aria-label={t("Primary navigation", "التنقل الرئيسي")}
          >
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2.5 shrink-0"
              aria-label={t("Maatouk Studio — Home", "ستوديو معتوق — الرئيسية")}
            >
              <BrandMark color="#0029D6" size={26} />
              <span className="hidden sm:block font-lyon text-[15px] font-bold tracking-tight text-ink">
                {t("Maatouk", "ماتوك")}
              </span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                      active
                        ? "bg-ink text-white"
                        : "text-ink-muted hover:text-ink hover:bg-black/[0.04]"
                    }`}
                  >
                    {t(link.label.en, link.label.ar)}
                  </Link>
                );
              })}
            </div>

            {/* Right */}
            <div className="flex items-center gap-2">
              <button
                onClick={toggleLocale}
                className="hidden sm:inline-flex items-center justify-center w-10 h-10 rounded-full border border-black/[0.08] text-xs font-semibold text-ink-muted hover:text-brand-blue hover:border-brand-blue/30 transition-colors focus:outline-none focus-visible:outline-2 focus-visible:outline-brand-blue focus-visible:outline-offset-2"
                aria-label={`Switch to ${locale === "en" ? "Arabic" : "English"}`}
              >
                {locale === "en" ? "عربي" : "EN"}
              </button>

              <div className="hidden lg:block">
                <Button href="/contact" variant="primary" size="sm" withArrow>
                  {t("Start a project", "ابدأ مشروعك")}
                </Button>
              </div>

              {/* Mobile */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden w-10 h-10 rounded-full flex items-center justify-center border border-black/[0.08] focus:outline-none focus-visible:outline-2 focus-visible:outline-brand-blue focus-visible:outline-offset-2"
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

      {/* Mobile menu */}
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
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.55 }}
                onClick={toggleLocale}
                className="mt-6 text-sm font-medium text-ink-muted underline decoration-dotted underline-offset-4"
              >
                {locale === "en" ? "عربي" : "English"}
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
