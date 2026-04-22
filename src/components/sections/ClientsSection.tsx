"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/lib/LocaleContext";

type Client = {
  name: string;
  nameAr: string;
  logo: string;
  /** ratio = width / height of the logo artwork */
  ratio: number;
};

// Only clients we have real logos for — no placeholder wordmarks.
const clients: Client[] = [
  {
    name: "Dolcebello",
    nameAr: "دولشي بيلو",
    logo: "/images/logos/clients/dolcebello.svg",
    ratio: 820 / 270,
  },
  {
    name: "Nobles Catering",
    nameAr: "نوبلز كاترينج",
    logo: "/images/logos/clients/nobles-catering.svg",
    ratio: 1080 / 387,
  },
  {
    name: "Royal Catering",
    nameAr: "رويال كاترينج",
    logo: "/images/logos/clients/royal-catering.svg",
    ratio: 1,
  },
  {
    name: "Forkpos",
    nameAr: "فوركبوس",
    logo: "/images/logos/clients/forkpos.svg",
    ratio: 113 / 36,
  },
];

export default function ClientsSection() {
  const { t } = useTranslation();

  return (
    <section className="py-16 md:py-24 bg-white border-y border-black/[0.06]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row md:items-center gap-5 md:gap-10 mb-10 md:mb-14">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rotate-45 bg-brand-blue" />
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-blue">
              {t("Selected clients", "عملاء مختارون")}
            </span>
          </div>
          <span className="hidden md:block h-px flex-1 bg-black/10" />
          <p className="text-sm md:text-base text-black/55 max-w-md leading-relaxed">
            {t(
              "Brands that chose us to shape their most important moments.",
              "علامات اختارتنا لتشكيل أهم لحظاتها."
            )}
          </p>
        </div>

        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-black/[0.07]"
        >
          {clients.map((c) => {
            const maxWidthClass =
              c.ratio > 2.5
                ? "max-w-[180px]"
                : c.ratio > 1.3
                  ? "max-w-[150px]"
                  : "max-w-[80px]";
            return (
              <motion.li
                key={c.name}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="group relative bg-white flex items-center justify-center h-28 md:h-32 transition-colors duration-500 hover:bg-surface px-6"
                aria-label={t(c.name, c.nameAr)}
              >
                {/* Grayscale base */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={c.logo}
                  alt={`${c.name} logo`}
                  className={`w-full ${maxWidthClass} h-11 md:h-12 object-contain transition-all duration-500 group-hover:opacity-0`}
                  style={{ filter: "grayscale(1) opacity(0.5)" }}
                  loading="lazy"
                />

                {/* Colored overlay on hover */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={c.logo}
                  alt=""
                  aria-hidden="true"
                  className={`absolute w-full ${maxWidthClass} h-11 md:h-12 object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none px-6`}
                  loading="lazy"
                />
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
}
