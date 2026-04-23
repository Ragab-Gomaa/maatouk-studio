"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/lib/LocaleContext";

type Client = {
  name: string;
  nameAr: string;
  logo: string;
  ratio: number;
};

const clients: Client[] = [
  { name: "Dolcebello", nameAr: "دولشي بيلو", logo: "/images/logos/clients/dolcebello.svg", ratio: 820 / 270 },
  { name: "Nobles Catering", nameAr: "نوبلز كاترينج", logo: "/images/logos/clients/nobles-catering.svg", ratio: 1080 / 387 },
  { name: "Royal Catering", nameAr: "رويال كاترينج", logo: "/images/logos/clients/royal-catering.svg", ratio: 1 },
  { name: "Forkpos", nameAr: "فوركبوس", logo: "/images/logos/clients/forkpos.svg", ratio: 113 / 36 },
];

export default function ClientsSection() {
  const { t } = useTranslation();

  return (
    <section className="pt-2 md:pt-4 pb-10 md:pb-14 bg-surface">
      <div className="max-w-[1320px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="studio-card rounded-[28px] md:rounded-[36px] p-8 md:p-12 lg:p-14">
          <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12 mb-10 md:mb-12">
            <div className="flex items-center gap-3 shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
              <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-ink-muted">
                {t("Selected clients", "عملاء مختارون")}
              </span>
            </div>
            <div className="hidden md:block flex-1 h-px bg-black/[0.08]" />
            <p className="text-sm md:text-base text-ink-soft max-w-sm">
              {t(
                "Brands that trusted us to shape their most important moments.",
                "علامات وثقت بنا لتشكيل أهم لحظاتها."
              )}
            </p>
          </div>

          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08 } },
            }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4"
          >
            {clients.map((c) => {
              // Wide, horizontal logos (text + mark side by side) stay modest in height.
              // Square / tall logos scale up so they read at a similar optical weight.
              const sizeClass =
                c.ratio > 2.5
                  ? "h-10 md:h-11 max-w-[180px]"
                  : c.ratio > 1.3
                  ? "h-11 md:h-12 max-w-[150px]"
                  : "h-14 md:h-16 max-w-[120px]";
              return (
                <motion.li
                  key={c.name}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.5 }}
                  className="group relative rounded-2xl bg-surface-low hover:bg-white flex items-center justify-center h-24 md:h-28 transition-colors duration-500 px-6"
                  aria-label={t(c.name, c.nameAr)}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={c.logo}
                    alt={`${c.name} logo`}
                    className={`w-full ${sizeClass} object-contain transition-opacity duration-500 group-hover:opacity-0`}
                    style={{ filter: "grayscale(1) opacity(0.55)" }}
                    loading="lazy"
                  />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={c.logo}
                    alt=""
                    aria-hidden="true"
                    className={`absolute w-full ${sizeClass} object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none px-6`}
                    loading="lazy"
                  />
                </motion.li>
              );
            })}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
