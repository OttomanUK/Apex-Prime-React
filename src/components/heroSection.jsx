import React from "react";
import video from "../videos/newVideo.mp4";

export function HeroSection({ country }) {
  const companyName =
    country === "usa"
      ? "APEX PRIME SERVICES L.L.C"
      : "APEX PRIME SERVICES PAKISTAN";

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={video}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        {/* Company Name */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-4 tracking-wide">
          {companyName}
        </h1>

        {/* Tagline */}
        <p className="text-lg md:text-xl text-[#ffd249] opacity-90 mb-8">
          Where Expertise Meets Trust
        </p>

        {/* Headline */}
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold mb-6 leading-tight">
          Accounting Excellence for{" "}
          <span className="text-[#ffc64a]">Businesses & Individuals</span>
        </h2>

        {/* Supporting Text */}
        <p className="text-base md:text-lg lg:text-xl opacity-90 max-w-2xl mx-auto">
          Delivering accurate, transparent & reliable financial support
        </p>
      </div>
    </section>
  );
}
