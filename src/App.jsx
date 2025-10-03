"use client";

import { Navigation } from "./components/navbar";

import { HeroSection } from "./components/heroSection";
import { ServicesSection } from "./components/servicesSection";
import { AboutSection } from "./components/aboutSection";
import { WhyTrustSection } from "./components/whyTrustSection";
import { ContactSection } from "./components/contactSection";
import { Footer } from "./components/footer";

export default function Home() {
  return (
    <>
      <div
        className={`min-h-screen transition-opacity duration-300 overflow-x-hidden ${"opacity-100"} `}
      >
        <Navigation />

        <main>
          <HeroSection />
          <AboutSection />
          <ServicesSection />
         
          <WhyTrustSection />
          <ContactSection />
        </main>

        <Footer />
      </div>
    </>
  );
}
