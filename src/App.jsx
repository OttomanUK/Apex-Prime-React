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

  useEffect(() => {
    setIsClient(true);

    const savedCountry = window.localStorage.getItem("selectedCountry");
    if (savedCountry) {
      setSelectedCountry(savedCountry);
    }

    // always show modal, regardless of saved value
    setShowModal(true);
  }, []);

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    if (isClient) {
      window.localStorage.setItem("selectedCountry", country);
    }
    setShowModal(false);
  };

  const handleCountryChange = (country) => {
    setSelectedCountry(country);
    if (isClient) {
      window.localStorage.setItem("selectedCountry", country);
    }
  };

  // Don't render anything until client-side hydration is complete
  if (!isClient) {
    return null;
  }

  return (
    <>
      <CountryModal isOpen={showModal} onSelect={handleCountrySelect} />

      {selectedCountry && (
        <div
          className={`min-h-screen ${
            selectedCountry === "usa" ? "theme-usa" : "theme-pakistan"
          }`}
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
