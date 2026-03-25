"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface LiquidGlassButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "dark";
  size?: "md" | "lg";
  className?: string;
}

export default function LiquidGlassButton({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
}: LiquidGlassButtonProps) {
  const sizeClasses = {
    md: "px-7 py-3.5 text-sm",
    lg: "px-10 py-5 text-base",
  };

  const variantClasses = {
    primary:
      "bg-brand-blue/80 text-white border-white/20 hover:bg-brand-blue hover:border-white/40 hover:shadow-[0_0_30px_rgba(0,41,214,0.4)] glass-btn-primary",
    secondary:
      "bg-white/10 text-white border-white/15 hover:bg-white/20 hover:border-white/30 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] glass-btn-secondary",
    dark:
      "bg-black/5 text-black border-black/10 hover:bg-black/10 hover:border-black/20 hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)] glass-btn-dark",
  };

  const classes = `
    group relative inline-flex items-center gap-3 font-medium
    backdrop-blur-xl border rounded-full
    transition-all duration-500 ease-out
    overflow-hidden cursor-pointer
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${className}
  `;

  const inner = (
    <>
      <span className="glass-shine absolute inset-0 rounded-full pointer-events-none" />
      <span className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-full pointer-events-none" />
      <span className="relative z-10 flex items-center gap-3">{children}</span>
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        whileHover={{ scale: 1.02, y: -1 }}
        whileTap={{ scale: 0.98 }}
        className={classes}
      >
        {inner}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.02, y: -1 }}
      whileTap={{ scale: 0.98 }}
      className={classes}
    >
      {inner}
    </motion.button>
  );
}
