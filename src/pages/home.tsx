import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import WhyChooseUs from "@/components/why-choose-us";
import ServicesSection from "@/components/services-section";
import TeamSection from "@/components/team-section";
import TestimonialsSection from "@/components/testimonials-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import { useState, useEffect } from "react";
import ToTopButton from "@/components/to-top-button";
import { Gallery } from "@/components/gallery";
import { Promotion } from "@/components/promotion";

export default function Home() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  useEffect(() => {
    const sectionId = sessionStorage.getItem("scrollToSection");

    if (!sectionId) return;

    sessionStorage.removeItem("scrollToSection");

    setTimeout(() => {
      const element = document.getElementById(sectionId);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);
  }, []);

  

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      {/* <Promotion /> */}
      <WhyChooseUs />
      <ServicesSection />
      <TeamSection />
      <TestimonialsSection />
      <Gallery onLightboxChange={setIsLightboxOpen} />
      <ContactSection />
      {!isLightboxOpen && <ToTopButton />}  
      <Footer />
    </div>
  );
}