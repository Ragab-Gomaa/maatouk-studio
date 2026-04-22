import Hero from "@/components/sections/Hero";
import WorkSection from "@/components/sections/WorkSection";
import ClientsSection from "@/components/sections/ClientsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import ReelSection from "@/components/sections/ReelSection";
import WhySection from "@/components/sections/WhySection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WorkSection />
      <ClientsSection />
      <ServicesSection />
      <ProcessSection />
      <ReelSection />
      <WhySection />
      <TestimonialsSection />
      <FAQSection />
    </>
  );
}
