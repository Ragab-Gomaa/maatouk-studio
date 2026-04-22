import Hero from "@/components/sections/Hero";
import ClientsSection from "@/components/sections/ClientsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import WorkSection from "@/components/sections/WorkSection";
import ProcessSection from "@/components/sections/ProcessSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ReelSection from "@/components/sections/ReelSection";
import WhySection from "@/components/sections/WhySection";
import FAQSection from "@/components/sections/FAQSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ClientsSection />
      <ServicesSection />
      <WorkSection />
      <TestimonialsSection />
      <ProcessSection />
      <ReelSection />
      <WhySection />
      <FAQSection />
    </>
  );
}
