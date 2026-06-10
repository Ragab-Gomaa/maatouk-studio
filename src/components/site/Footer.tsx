"use client";

import { MaatoukBadge } from "@/components/ui/MaatoukBadge";
import { useLang } from "@/components/i18n/LangProvider";
import { Statement } from "@/components/ui/Statement";

export function Footer() {
  const { copy } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="relative w-full border-t border-[var(--color-line)] bg-[var(--color-bg)]">
      <div className="mx-auto w-full max-w-[1600px] px-6 py-12 md:px-14 md:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-serif text-[28px] leading-[1.15] text-white md:text-[36px]">
              <Statement segments={copy.footer.tagline} />
            </p>
          </div>

          <FooterCol heading={copy.footer.studio}>
            <FooterLink href="#works">{copy.nav.works}</FooterLink>
            <FooterLink href="#services">{copy.nav.services}</FooterLink>
            <FooterLink href="#about">{copy.nav.about}</FooterLink>
          </FooterCol>

          <FooterCol heading={copy.footer.connect}>
            <FooterLink href={`mailto:${copy.nav.email}`}>{copy.nav.email}</FooterLink>
            <FooterLink href="#" external>{copy.footer.instagram}</FooterLink>
            <FooterLink href="#" external>{copy.footer.behance}</FooterLink>
          </FooterCol>

          <FooterCol heading={copy.footer.location}>
            <p className="whitespace-pre-line text-[14px] text-white/65">
              {copy.footer.locationText}
            </p>
          </FooterCol>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-[var(--color-line)] pt-8 md:flex-row md:items-center">
          <span className="text-[12px] text-white/55">
            © {year} {copy.footer.rights}
          </span>
          <MaatoukBadge theme="dark" />
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ heading, children }: { heading: string; children: React.ReactNode }) {
  return (
    <div className="md:col-span-2 flex flex-col gap-4">
      <span className="text-[12px] text-white/55">{heading}</span>
      <div className="flex flex-col gap-2">{children}</div>
    </div>
  );
}

function FooterLink({
  href,
  children,
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="text-[14px] text-white/85 transition-colors hover:text-[var(--color-accent)]"
    >
      {children}
    </a>
  );
}
