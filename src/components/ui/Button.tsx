"use client";

import { forwardRef, ReactNode, ComponentPropsWithoutRef } from "react";
import Link from "next/link";

type Variant = "primary" | "secondary" | "ghost" | "dark";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-blue text-white hover:bg-brand-blue-dark shadow-sm hover:shadow-[0_12px_30px_-10px_rgba(0,41,214,0.5)]",
  secondary:
    "bg-surface-raised text-ink border border-black/[0.08] hover:border-brand-blue hover:text-brand-blue shadow-sm",
  ghost:
    "bg-transparent text-ink hover:bg-black/[0.04]",
  dark:
    "bg-ink text-white hover:bg-black shadow-sm hover:shadow-[0_12px_30px_-10px_rgba(0,0,0,0.5)]",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-[13px]",
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-[15px]",
};

interface BaseProps {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  withArrow?: boolean;
  className?: string;
}

type ButtonAsButton = BaseProps &
  Omit<ComponentPropsWithoutRef<"button">, keyof BaseProps> & {
    as?: "button";
    href?: never;
  };

type ButtonAsLink = BaseProps &
  Omit<ComponentPropsWithoutRef<"a">, keyof BaseProps | "href"> & {
    as?: "a";
    href: string;
    external?: boolean;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const Arrow = () => (
  <svg
    className="w-3.5 h-3.5 shrink-0 rtl-flip transition-transform duration-300 group-hover:translate-x-0.5"
    viewBox="0 0 14 14"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M3 7h8M8 4l3 3-3 3" />
  </svg>
);

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  function Button(
    {
      variant = "primary",
      size = "md",
      children,
      withArrow = false,
      className = "",
      ...rest
    },
    ref
  ) {
    const base =
      "group relative inline-flex items-center justify-center gap-2 font-medium tracking-[-0.01em] rounded-full transition-all duration-300 focus:outline-none focus-visible:outline-2 focus-visible:outline-brand-blue focus-visible:outline-offset-2 disabled:opacity-50 disabled:cursor-not-allowed select-none";

    const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`.trim();

    const content = (
      <>
        <span>{children}</span>
        {withArrow && <Arrow />}
      </>
    );

    if ("href" in rest && rest.href !== undefined) {
      const { href, external, ...linkRest } = rest;
      if (external || href.startsWith("http") || href.startsWith("mailto:")) {
        return (
          <a
            ref={ref as React.Ref<HTMLAnchorElement>}
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            className={classes}
            {...(linkRest as ComponentPropsWithoutRef<"a">)}
          >
            {content}
          </a>
        );
      }
      return (
        <Link
          href={href}
          ref={ref as React.Ref<HTMLAnchorElement>}
          className={classes}
          {...(linkRest as Omit<ComponentPropsWithoutRef<"a">, "href">)}
        >
          {content}
        </Link>
      );
    }

    const { as: _as, ...buttonRest } = rest as ButtonAsButton;
    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={classes}
        {...(buttonRest as ComponentPropsWithoutRef<"button">)}
      >
        {content}
      </button>
    );
  }
);

export default Button;
