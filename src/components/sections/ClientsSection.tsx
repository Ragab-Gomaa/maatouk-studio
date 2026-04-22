"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/lib/LocaleContext";

type Client = {
  name: string;
  nameAr: string;
  logo: string;
  /** ratio = width / height of the logo artwork (used to keep display sizes balanced) */
  ratio: number;
};

const clients: Client[] = [
  { name: "Dolcebello", nameAr: "دولشي بيلو", logo: "/images/logos/clients/dolcebello.svg", ratio: 820 / 270 },
  { name: "Nobles Catering", nameAr: "نوبلز كاترينج", logo: "/images/logos/clients/nobles-catering.svg", ratio: 1080 / 387 },
  { name: "Royal Catering", nameAr: "رويال كاترينج", logo: "/images/logos/clients/royal-catering.svg", ratio: 1 },
  { name: "Forkpos", nameAr: "فوركبوس", logo: "/images/logos/clients/forkpos.svg", ratio: 113 / 36 },
  { name: "Meezan", nameAr: "ميزان", logo: "/images/logos/clients/meezan.svg", ratio: 1 },
];

export default function ClientsSection() {
  const { t } = useTranslation();

  return (
    <section className="py-14 md:py-20 bg-surface border-y border-black/[0.05]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-20">
        <div className="flex items-center justify-between gap-6 mb-8 md:mb-12">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rotate-45 bg-brand-blue" />
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-blue">
              {t("Selected Clients", "عملاء مختارون")}
            </span>
          </div>
          <span className="h-px flex-1 bg-black/10" />
          <span className="text-[11px] text-black/40 uppercase tracking-[0.15em] font-medium hidden sm:inline">
            {t("Trusted by", "موثوق من")}
          </span>
        </div>

        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-px bg-black/[0.06] border border-black/[0.06]"
        >
          {clients.map((c) => {
            // Aspect-based width cap: taller logos render smaller horizontally.
            const maxWidthClass =
              c.ratio > 2.5 ? "max-w-[170px]" : c.ratio > 1.3 ? "max-w-[140px]" : "max-w-[70px]";
            return (
              <motion.li
                key={c.name}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="group relative bg-surface flex items-center justify-center h-24 md:h-28 transition-colors hover:bg-white px-4"
                aria-label={t(c.name, c.nameAr)}
              >
                {/* Grayscale base logo */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={c.logo}
                  alt={`${c.name} logo`}
                  className={`w-full ${maxWidthClass} h-10 md:h-12 object-contain transition-[filter,opacity,transform] duration-500 group-hover:scale-[1.03] group-hover:opacity-0`}
                  style={{ filter: "grayscale(1) opacity(0.55)" }}
                  loading="lazy"
                />

                {/* Colored hover logo */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={c.logo}
                  alt=""
                  aria-hidden="true"
                  className={`absolute w-full ${maxWidthClass} h-10 md:h-12 object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none px-4`}
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
