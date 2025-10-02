import React from "react";
import { Shield, CheckCircle, Star, Sparkles } from "lucide-react";

export function WhyTrustSection({ country }) {
  const features = [
    {
      icon: Shield,
      title: "Expert & Reliable",
      description:
        "Proven track record of delivering accurate accounting services with professional excellence",
    },
    {
      icon: CheckCircle,
      title: "Transparent",
      description:
        "Clear communication and honest reporting in all our financial services",
    },
    {
      icon: Star,
      title: "Trustworthy",
      description:
        "Building long-term relationships based on integrity and confidentiality",
    },
    {
      icon: Sparkles,
      title: "Customized Solutions",
      description:
        "Tailored services designed to meet your unique business requirements",
    },
  ];

  const heading =
    country === "usa"
      ? "Why Businesses in the USA Trust Us"
      : "Why Businesses in Pakistan Trust Us";

  const description =
    country === "usa"
      ? "Specialized in US accounting practices, ensuring compliance and accuracy for American businesses."
      : "Dedicated to supporting Pakistani businesses with expert, transparent, and customized accounting services.";

  return (
    <section id="why-trust" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ color: "var(--accent-primary)" }}
          >
            {heading}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed text-balance">
            {description}
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 border border-[#1a1f2e] hover:border-[#ffb91f] hover:shadow-lg transition-all duration-300"
              >
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-[#fffae3] flex items-center justify-center">
                    <Icon className="w-8 h-8 text-[#ffc64a]" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
