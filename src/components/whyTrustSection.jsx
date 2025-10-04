import React, { useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import video from "../videos/test1.mp4";

export function WhyTrustSection({ country }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const heading = "Why Businesses Trust Us";
  const description =
    country === "usa"
      ? "Specialized in US accounting practices, ensuring compliance and accuracy for American businesses."
      : "Dedicated to supporting businesses with expert, transparent, and customized accounting services.";

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <section id="why-trust" className="relative py-20 md:py-28 bg-gray-900 text-white">
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          src={video}
          autoPlay
          muted
          loop
          playsInline
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Foreground Content */}
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            {heading}
          </h2>
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
            "Dedicated to supporting businesses with <span className="text-[#ffc64a]">expert, transparent, and customized accounting services.</span>
          </p>
        </div>

        <div className="space-y-6 text-gray-200 text-lg leading-relaxed">
          <p>
            With over 20 years of collective expertise, Apex Prime Services has
            built a reputation for reliability, accuracy, and long-term
            partnerships. We work with businesses across multiple regions,
            ensuring compliance with international standards while delivering
            cost-efficient solutions.
          </p>
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <strong className="text-[#ffc64a]">Expert & Reliable:</strong> Proven track record of
              delivering accurate accounting services with professional
              excellence.
            </li>
            <li>
              <strong className="text-[#ffc64a]">Transparent:</strong> Clear communication and honest
              reporting in all our financial services.
            </li>
            <li>
             <strong className="text-[#ffc64a]">Trustworthy:</strong> Building long-term relationships
              based on integrity and confidentiality.
            </li>
            <li>
              <strong className="text-[#ffc64a]">Customized Solutions:</strong> Services tailored to meet
              your unique business requirements.
            </li>
          </ul>
        </div>

        {/* Play/Pause Button */}
        <div className="flex justify-center mt-8">
        </div>
      </div>
    </section>
  );
}
