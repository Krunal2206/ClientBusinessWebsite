import AboutSection from "@/components/About/AboutSection";
import BackToTopButton from "@/components/BackToTopButton";
import ContactUsSection from "@/components/Contact/ContactUs";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/Services/ServicesSection";

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
