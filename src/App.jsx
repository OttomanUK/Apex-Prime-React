"use client";

import { Navigation } from "./components/navbar";

import { HeroSection } from "./components/heroSection";
import { PresenceSection } from "./components/presenceSection";
import { AboutSection } from "./components/aboutSection";
import { WhyTrustSection } from "./components/whyTrustSection";
import { ContactSection } from "./components/contactSection";
import { Footer } from "./components/footer";
import { ServicesSection } from "./components/servicesSection";

export default function Home() {
  return (
    <>
      <Navigation />
      <div
        className={`min-h-screen transition-opacity duration-300 overflow-x-hidden ${"opacity-100"} `}
      >
        <main>
          <HeroSection />
          <AboutSection />
          <PresenceSection />
          <ServicesSection />
          <WhyTrustSection />
          <ContactSection />
        </main>

        <Footer />
      </div>
    </>
  );
}
