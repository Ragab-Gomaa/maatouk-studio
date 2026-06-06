"use client";

import { useEffect, useState } from "react";

const nav = [
  { label: "Home", href: "#top" },
  { label: "Works", href: "#works" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [active, setActive] = useState("#top");
  const [scrolled, setScrolled] = useState(false);
  const [hoverIdx, setHoverIdx] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const ids = nav.map((n) => n.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[var(--color-bg)]/80 backdrop-blur-md"
            : "bg-gradient-to-b from-black/70 to-transparent"
        }`}
      >
        <div
          className={`mx-auto flex w-full max-w-[1600px] items-center justify-between px-6 transition-all duration-500 md:px-14 ${
            scrolled ? "py-4" : "py-5 md:py-7"
          }`}
        >
          <a
            href="#top"
            aria-label="Maatouk Studio — home"
            onClick={() => setMenuOpen(false)}
            className="group flex items-center gap-2.5 md:gap-3"
          >
            <svg
              viewBox="0 0 473.71 473.15"
              className="h-5 w-5 text-white transition-transform duration-700 group-hover:rotate-180 md:h-6 md:w-6"
              fill="currentColor"
              aria-hidden
            >
              <rect x="34.89" y="34.6" width="167.08" height="167.08" transform="rotate(-45 118.43 118.14)" />
              <polygon points="356.84 1.55 355.28 0 353.73 1.55 236.85 1.55 236.85 118.78 237.77 118.78 355.28 236.29 472.79 118.78 473.71 118.78 473.71 1.55 356.84 1.55" />
              <polygon points="236.57 355 118.43 236.85 .28 355 1.2 355.92 0 355.92 0 473.15 118.43 473.15 118.43 473.15 118.43 473.15 236.85 473.15 236.85 355.92 235.66 355.92 236.57 355" />
              <rect x="271.74" y="271.46" width="167.08" height="167.08" transform="rotate(-45 355.28 355)" />
            </svg>
            <span className="font-serif whitespace-nowrap text-[18px] leading-none text-white md:text-[22px]">
              Maatouk Studio
            </span>
          </a>

          <nav className="hidden md:block">
            <ul
              className="flex items-center gap-10 text-[14px]"
              onMouseLeave={() => setHoverIdx(null)}
            >
              {nav.map((item, i) => {
                const isActive = active === item.href;
                const isHover = hoverIdx === i;
                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onMouseEnter={() => setHoverIdx(i)}
                      className="group relative inline-block py-1 transition-colors"
                    >
                      <span
                        className={`relative z-10 transition-colors ${
                          isHover
                            ? "text-[var(--color-accent)]"
                            : isActive
                            ? "text-[var(--color-accent)]"
                            : "text-white/85"
                        }`}
                      >
                        {item.label}
                      </span>
                      <span
                        className={`absolute -bottom-0.5 left-0 h-px bg-[var(--color-accent)] transition-all duration-500 ease-out ${
                          isHover ? "w-full" : "w-0"
                        }`}
                      />
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <a
            href="#contact"
            className="group hidden items-center gap-2 text-[14px] text-white/85 transition-colors hover:text-[var(--color-accent)] md:inline-flex"
          >
            <span className="inline-block transition-transform duration-500 group-hover:translate-x-1">
              →
            </span>
            Start a project
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className={`relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-[5px] md:hidden ${
              menuOpen ? "menu-open" : ""
            }`}
          >
            <span className="menu-line menu-line-1 block h-px w-6 origin-center" />
            <span className="menu-line menu-line-2 block h-px w-6 origin-center" />
            <span className="menu-line menu-line-3 block h-px w-6 origin-center" />
          </button>
        </div>
      </header>

      <div
        className={`menu-overlay fixed inset-0 z-40 flex flex-col md:hidden ${
          menuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        style={{
          clipPath: menuOpen
            ? "circle(150% at 100% 0%)"
            : "circle(0% at 100% 0%)",
          transition: "clip-path 700ms cubic-bezier(0.65, 0, 0.35, 1)",
        }}
        aria-hidden={!menuOpen}
      >
        <nav className="flex flex-1 flex-col justify-center px-8 pt-24 pb-12">
          <ul className="flex flex-col gap-6">
            {nav.map((item, i) => (
              <li
                key={item.href}
                className={menuOpen ? "menu-item" : ""}
                style={menuOpen ? { animationDelay: `${150 + i * 70}ms` } : undefined}
              >
                <a
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="group flex items-baseline gap-4"
                >
                  <span className="text-[11px] text-white/40">
                    0{i + 1}
                  </span>
                  <span className="font-serif text-[44px] leading-[1] text-white transition-colors group-hover:text-[var(--color-accent)]">
                    {item.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <div
            className={`mt-16 flex flex-col gap-4 ${menuOpen ? "menu-item" : ""}`}
            style={menuOpen ? { animationDelay: "600ms" } : undefined}
          >
            <span className="text-[11px] text-white/40">
              Get in touch
            </span>
            <a
              href="mailto:hello@maatouk-studio.com"
              className="text-[16px] text-white/85"
            >
              hello@maatouk-studio.com
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
