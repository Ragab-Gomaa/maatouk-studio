"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/lib/LocaleContext";

interface TechStackBarProps {
  stack: string[];
  label?: string;
}

export default function TechStackBar({ stack, label }: TechStackBarProps) {
  const { t } = useTranslation();

  return (
    <div>
      <div className="flex items-center gap-3 mb-5">
        <span className="w-2 h-2 rotate-45 bg-brand-blue" />
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-blue">
          {label ?? t("Tech Stack", "التقنيات")}
        </span>
      </div>

      <motion.ul
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.04 } },
        }}
        className="flex flex-wrap gap-2"
      >
        {stack.map((tech) => (
          <motion.li
            key={tech}
            variants={{
              hidden: { opacity: 0, y: 8 },
              visible: { opacity: 1, y: 0 },
            }}
            className="px-3.5 py-1.5 text-xs font-medium text-black/75 border border-black/10 bg-white hover:border-brand-blue/30 hover:text-brand-blue transition-colors"
          >
            {tech}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}
