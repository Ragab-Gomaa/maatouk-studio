import { MaatoukBadge } from "@/components/ui/MaatoukBadge";

export function Footer() {
  return (
    <footer className="relative w-full border-t border-[var(--color-line)] bg-[var(--color-bg)]">
      <div className="mx-auto w-full max-w-[1600px] px-6 py-12 md:px-14 md:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-serif text-[28px] leading-[1.15] text-white md:text-[36px]">
              Brands that{" "}
              <span className="italic text-[var(--color-accent)]">last</span>.
            </p>
          </div>

          <FooterCol heading="Studio">
            <FooterLink href="#works">Works</FooterLink>
            <FooterLink href="#services">Services</FooterLink>
            <FooterLink href="#about">About</FooterLink>
          </FooterCol>

          <FooterCol heading="Connect">
            <FooterLink href="mailto:hello@maatouk-studio.com">
              hello@maatouk-studio.com
            </FooterLink>
            <FooterLink href="#" external>
              Instagram
            </FooterLink>
            <FooterLink href="#" external>
              Behance
            </FooterLink>
          </FooterCol>

          <FooterCol heading="Location">
            <p className="text-[14px] text-white/60">
              Independent studio.
              <br />
              Working with clients worldwide.
            </p>
          </FooterCol>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-[var(--color-line)] pt-8 md:flex-row md:items-center">
          <span className="text-[12px] text-white/40">
            © {new Date().getFullYear()} Maatouk Studio
          </span>
          <MaatoukBadge theme="dark" lang="en" />
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <div className="md:col-span-2 flex flex-col gap-4">
      <span className="text-[12px] text-white/40">
        {heading}
      </span>
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
