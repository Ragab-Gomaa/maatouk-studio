import HeroV1 from "@/components/sections/hero-variations/HeroV1";
import HeroV2 from "@/components/sections/hero-variations/HeroV2";
import HeroV3 from "@/components/sections/hero-variations/HeroV3";

/**
 * Homepage is temporarily showing 3 Hero variations stacked for review.
 * Each variation is full-viewport (100vh). Scroll to compare.
 * The existing Hero.tsx is preserved and will be swapped back in
 * once a variation is chosen.
 */
export default function HomePage() {
  return (
    <>
      <VariationMarker index="01" name="The Cover" subtitle="Symmetric · Centered · Triptych below" />
      <HeroV1 />

      <VariationMarker index="02" name="The Spread" subtitle="Asymmetric · Text left · Plate column right" />
      <HeroV2 />

      <VariationMarker index="03" name="The Ledger" subtitle="Three columns · Word + art + caption" />
      <HeroV3 />
    </>
  );
}

function VariationMarker({
  index,
  name,
  subtitle,
}: {
  index: string;
  name: string;
  subtitle: string;
}) {
  return (
    <div className="bg-black text-white px-6 sm:px-8 md:px-12 lg:px-20 py-4 flex items-center justify-between text-[10px] uppercase tracking-[0.32em] font-medium">
      <span className="inline-flex items-center gap-3">
        <span className="font-lyon text-brand-green tracking-[0.25em]">
          V{index}
        </span>
        <span className="w-8 h-px bg-white/25" />
        <span className="text-white">{name}</span>
      </span>
      <span className="hidden sm:inline text-white/50">{subtitle}</span>
    </div>
  );
}
