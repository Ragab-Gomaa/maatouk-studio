import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { SelectedWork } from "@/components/site/SelectedWork";
import { About } from "@/components/site/About";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { CustomCursor } from "@/components/site/CustomCursor";
import { SkipLink } from "@/components/site/SkipLink";
import { BackToTop } from "@/components/site/BackToTop";

export default function Home() {
  return (
    <>
      <SkipLink />
      <CustomCursor />
      <Header />
      <main id="main-content">
        <Hero />
        <Services />
        <SelectedWork />
        <About />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
