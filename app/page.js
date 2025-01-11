import AboutSection from "@/components/AboutSection";
import ContactUsSection from "@/components/ContactUs";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ContactUsSection />
      <Footer />
    </div>
  );
}
