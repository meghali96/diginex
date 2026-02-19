import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import BackToTop from "@/components/BackToTop";
import WhatsAppButton from "@/components/WhatsAppButton";
import {
  HeroSection,
  AboutSection,
  ServicesSection,
  DifferentSection,
  CareersSection,
  ContactSection,
  Footer,
} from "@/components/Sections";

const Index = () => {
  return (
    <ThemeProvider>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <DifferentSection />
        <CareersSection />
        <ContactSection />
      </main>
      <Footer />
      <BackToTop />
      <WhatsAppButton />
    </ThemeProvider>
  );
};

export default Index;
