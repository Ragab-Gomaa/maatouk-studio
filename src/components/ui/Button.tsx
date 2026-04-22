"use client";

import { forwardRef, ReactNode, ComponentPropsWithoutRef } from "react";
import Link from "next/link";

type Variant = "primary" | "secondary" | "ghost" | "accent";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-blue text-white hover:bg-brand-blue-dark focus-visible:outline-brand-blue",
  secondary:
    "bg-transparent text-black border-2 border-black/15 hover:border-brand-blue hover:text-brand-blue focus-visible:outline-brand-blue",
  ghost:
    "bg-transparent text-black/70 hover:text-brand-blue focus-visible:outline-brand-blue",
  accent:
    "bg-brand-green text-black hover:bg-white focus-visible:outline-brand-green",
};

const sizes: Record<Size, string> = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-7 py-3.5 text-[15px]",
  lg: "px-9 py-4 text-base",
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
    className="w-4 h-4 shrink-0 rtl-flip transition-transform duration-300 group-hover:translate-x-1"
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    aria-hidden="true"
  >
    <path d="M3 8h10M9 4l4 4-4 4" />
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
      "group relative inline-flex items-center justify-center gap-2.5 font-medium tracking-tight transition-colors duration-300 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:cursor-not-allowed select-none";

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
