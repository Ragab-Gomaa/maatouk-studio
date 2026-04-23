import Hero from "@/components/sections/Hero";
import ServicesSection from "@/components/sections/ServicesSection";
import WorkSection from "@/components/sections/WorkSection";
import WhySection from "@/components/sections/WhySection";
import ProcessSection from "@/components/sections/ProcessSection";
import ClientsSection from "@/components/sections/ClientsSection";
import FactsSection from "@/components/sections/FactsSection";
import ContactCTASection from "@/components/sections/ContactCTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <WorkSection />
      <WhySection />
      <ProcessSection />
      <ClientsSection />
      <FactsSection />
      <ContactCTASection />
    </>
  );
}
