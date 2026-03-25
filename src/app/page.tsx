"use client";

import Hero from "@/components/sections/Hero";
import ServicesSection from "@/components/sections/ServicesSection";
import WorkSection from "@/components/sections/WorkSection";
import ProcessSection from "@/components/sections/ProcessSection";
import WhySection from "@/components/sections/WhySection";
import ReelSection from "@/components/sections/ReelSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <WorkSection />
      <ProcessSection />
      <ReelSection />
      <WhySection />
    </>
  );
}
