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
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
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
      <motion.header
        initial={false}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 bg-white border-b transition-shadow duration-500 ${
          scrolled
            ? "border-black/5 shadow-[0_1px_3px_rgba(0,0,0,0.06)]"
            : "border-transparent"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-20">
          <nav
            className="flex items-center justify-between h-20 md:h-24"
            aria-label={t("Primary navigation", "التنقل الرئيسي")}
          >
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group shrink-0"
              aria-label={t("Maatouk Studio — Home", "ستوديو معتوق — الرئيسية")}
            >
              <motion.div
                whileHover={{ rotate: 90 }}
                transition={{ duration: 0.4 }}
              >
                <BrandMark color="#0029D6" size={36} />
              </motion.div>
              <span className="hidden sm:block font-lyon text-lg font-bold tracking-tight text-black">
                {t("Maatouk Studio", "ستوديو معتوق")}
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={`relative text-sm font-medium transition-colors duration-300 group ${
                      active
                        ? "text-brand-blue"
                        : "text-black/75 hover:text-brand-blue"
                    }`}
                  >
                    {t(link.label.en, link.label.ar)}
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 bg-brand-blue transition-all duration-300 ${
                        active ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                );
              })}
            </div>

            {/* Right side */}
            <div className="flex items-center gap-3 md:gap-4">
              {/* Language Toggle */}
              <button
                onClick={toggleLocale}
                className="text-sm font-medium text-black/70 hover:text-brand-blue transition-colors duration-300 px-3 py-1.5 border border-black/10 hover:border-brand-blue/30 rounded-sm focus:outline-none focus-visible:outline-2 focus-visible:outline-brand-blue focus-visible:outline-offset-2"
                aria-label={`Switch to ${locale === "en" ? "Arabic" : "English"}`}
              >
                {locale === "en" ? "عربي" : "EN"}
              </button>

              {/* CTA Desktop */}
              <div className="hidden lg:block">
                <Button href="/contact" variant="primary" size="sm" withArrow>
                  {t("Start a project", "ابدأ مشروعك")}
                </Button>
              </div>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden flex flex-col gap-1.5 p-2 focus:outline-none focus-visible:outline-2 focus-visible:outline-brand-blue focus-visible:outline-offset-2"
                aria-label={
                  menuOpen
                    ? t("Close menu", "إغلاق القائمة")
                    : t("Open menu", "فتح القائمة")
                }
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
              >
                <motion.span
                  animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                  className="w-6 h-0.5 bg-black block"
                />
                <motion.span
                  animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="w-6 h-0.5 bg-black block"
                />
                <motion.span
                  animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                  className="w-6 h-0.5 bg-black block"
                />
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white flex flex-col justify-center items-center"
          >
            <nav
              className="flex flex-col items-center gap-6 md:gap-8"
              aria-label={t("Mobile navigation", "قائمة الجوال")}
            >
              {navLinks.map((link, i) => {
                const active = isActive(link.href);
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
                  >
                    <Link
                      href={link.href}
                      aria-current={active ? "page" : undefined}
                      onClick={() => setMenuOpen(false)}
                      className={`text-3xl md:text-5xl font-lyon font-bold transition-colors ${
                        active ? "text-brand-blue" : "text-black hover:text-brand-blue"
                      }`}
                    >
                      {t(link.label.en, link.label.ar)}
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="mt-4"
              >
                <Button
                  href="/contact"
                  variant="primary"
                  size="lg"
                  withArrow
                  onClick={() => setMenuOpen(false)}
                >
                  {t("Start a project", "ابدأ مشروعك")}
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
