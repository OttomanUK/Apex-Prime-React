
import React from "react";
import hero from '../pictures/hero.jpg'

export function HeroSection({ country }) {
  const companyName =
    country === "usa"
      ? "APEX PRIME SERVICES L.L.C"
      : "APEX PRIME SERVICES PAKISTAN";

  return (
    <section id="hero" className="py-20 md:py-32 bg-[#2c57af]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <div className="mb-8">
              <h1 className="text-2xl md:text-3xl font-bold mb-2">
                {companyName}
              </h1>
              <p className="text-lg text-[#ffd249] opacity-90">
                Where Expertise Meets Trust
              </p>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Accounting Excellence for{" "}
              <span className="text-[#ffc64a]">
                Businesses & Individuals{" "}
              </span>
            </h2>
            <p className="text-xl md:text-2xl mb-8">
              Delivering accurate, transparent & reliable financial support
            </p>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-lg">
              <img
                src={hero}
                alt="Professional businessman"
                className="rounded-2xl shadow-2xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

