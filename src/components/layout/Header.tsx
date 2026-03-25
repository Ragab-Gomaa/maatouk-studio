"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "@/lib/LocaleContext";
import { siteContent } from "@/data/content";
import BrandMark from "@/components/ui/BrandMark";

const navLinks = [
  { href: "/work", label: siteContent.nav.work },
  { href: "/services", label: siteContent.nav.services },
  { href: "/about", label: siteContent.nav.about },
  { href: "/contact", label: siteContent.nav.contact },
];

export default function Header() {
  const { locale, toggleLocale, t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

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
        <div className="max-w-[1440px] mx-auto px-8 md:px-12 lg:px-20">
          <nav className="flex items-center justify-between h-20 md:h-24">
            {/* Logo */}
            <a
              href="/"
              className="flex items-center gap-3 group"
              aria-label="Maatouk Studio — Home"
            >
              <motion.div
                initial={false}
                whileHover={{ rotate: 90 }}
                transition={{ duration: 0.4 }}
              >
                <BrandMark
                  color={scrolled ? "#0029D6" : "#0029D6"}
                  size={36}
                />
              </motion.div>
              <span className="hidden sm:block font-lyon text-lg font-bold tracking-tight text-black">
                {t("Maatouk Studio", "ستوديو معتوق")}
              </span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative text-sm font-medium text-black/70 hover:text-brand-blue transition-colors duration-300 group"
                >
                  {t(link.label.en, link.label.ar)}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-blue transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* Right side */}
            <div className="flex items-center gap-4">
              {/* Language Toggle */}
              <button
                onClick={toggleLocale}
                className="text-sm font-medium text-black/60 hover:text-brand-blue transition-colors duration-300 px-3 py-1.5 border border-black/10 hover:border-brand-blue/30 rounded-sm"
                aria-label={`Switch to ${locale === "en" ? "Arabic" : "English"}`}
              >
                {locale === "en" ? "عربي" : "EN"}
              </button>

              {/* CTA Desktop */}
              <a
                href="/contact"
                className="hidden lg:inline-flex items-center gap-2 px-6 py-2.5 bg-brand-blue text-white text-sm font-medium hover:bg-brand-blue-dark transition-colors duration-300"
              >
                {t("Start a project", "ابدأ مشروعك")}
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </a>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden flex flex-col gap-1.5 p-2"
                aria-label="Toggle menu"
                aria-expanded={menuOpen}
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white flex flex-col justify-center items-center"
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
                  onClick={() => setMenuOpen(false)}
                  className="text-4xl md:text-5xl font-lyon font-bold text-black hover:text-brand-blue transition-colors"
                >
                  {t(link.label.en, link.label.ar)}
                </motion.a>
              ))}
              <motion.a
                href="/contact"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                onClick={() => setMenuOpen(false)}
                className="mt-4 px-10 py-4 bg-brand-blue text-white text-lg font-medium"
              >
                {t("Start a project", "ابدأ مشروعك")}
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
