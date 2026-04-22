import Hero from "@/components/sections/Hero";
import WorkSection from "@/components/sections/WorkSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import WhySection from "@/components/sections/WhySection";
import ReelSection from "@/components/sections/ReelSection";
import ClientsSection from "@/components/sections/ClientsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactCTASection from "@/components/sections/ContactCTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WorkSection />
      <ServicesSection />
      <ProcessSection />
      <WhySection />
      <ReelSection />
      <ClientsSection />
      <TestimonialsSection />
      <ContactCTASection />
    </>
  );
}
