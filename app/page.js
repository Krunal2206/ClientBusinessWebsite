import AboutSection from "@/components/AboutSection";
import BackToTopButton from "@/components/BackToTopButton";
import ContactUsSection from "@/components/ContactUs";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ContactUsSection />
      <BackToTopButton />
      <Footer />
    </div>
  );
}
