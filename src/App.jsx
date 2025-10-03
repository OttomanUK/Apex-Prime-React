"use client";

import { useState, useEffect } from "react";
import { Navigation } from "./components/navbar";
import { CountryModal } from "./components/countryModal";
import { HeroSection } from "./components/heroSection";
import { ServicesSection } from "./components/servicesSection";
import { AboutSection } from "./components/aboutSection";
import { WhyTrustSection } from "./components/whyTrustSection";
import { ContactSection } from "./components/contactSection";
import { Footer } from "./components/footer";

export default function Home() {
  const [selectedCountry, setSelectedCountry] = useState("usa");
  const [showModal, setShowModal] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const savedCountry = window.localStorage.getItem("selectedCountry");
    if (savedCountry) {
      setSelectedCountry(savedCountry);
    }

    // always show modal
    setShowModal(true);
  }, []);

  const triggerTransition = (callback) => {
    setIsTransitioning(true);
    setTimeout(() => {
      callback();
      setIsTransitioning(false);
    }, 300); // match transition duration
  };

  const handleCountrySelect = (country) => {
    triggerTransition(() => {
      setSelectedCountry(country);
      if (isClient) {
        window.localStorage.setItem("selectedCountry", country);
      }
      setShowModal(false);
    });
  };

  const handleCountryChange = (country) => {
    triggerTransition(() => {
      setSelectedCountry(country);
      if (isClient) {
        window.localStorage.setItem("selectedCountry", country);
      }
    });
  };

  if (!isClient) return null;

  return (
    <>
      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"></div>
      )}

      <CountryModal isOpen={showModal} onSelect={handleCountrySelect} />

      {selectedCountry && (
        <div
          key={selectedCountry}
          className={`min-h-screen transition-opacity duration-300 overflow-x-hidden ${
            isTransitioning ? "opacity-0" : "opacity-100"
          } ${selectedCountry === "usa" ? "theme-usa" : "theme-pakistan"}`}
        >
          <Navigation
            selectedCountry={selectedCountry}
            onCountryChange={handleCountryChange}
          />

          <main>
            <HeroSection country={selectedCountry} />
            <ServicesSection country={selectedCountry} />
            <AboutSection country={selectedCountry} />
            <WhyTrustSection country={selectedCountry} />
            <ContactSection country={selectedCountry} />
          </main>

          <Footer country={selectedCountry} />
        </div>
      )}
    </>
  );
}
