import { motion } from "framer-motion";
import { Award, Target, Users } from "lucide-react";

export function AboutSection({ country }) {
  const usaContent =
    "Apex Prime Services is a trusted accounting firm dedicated to helping businesses and individuals manage their finances with confidence. We specialize in accounting, bookkeeping, and financial consulting, delivering accurate and reliable solutions tailored to your needs. Our focus is on professionalism, transparency, and long-term client success.";

  const pakistanContent =
    "Apex Prime Services Pakistan is a trusted accounting firm dedicated to helping businesses and individuals manage their finances with confidence. We specialize in accounting, bookkeeping, and financial consulting, delivering accurate and reliable solutions tailored to your needs. Our focus is on professionalism, transparency, and long-term client success.";

  const features = [
    {
      icon: Award,
      title: "Expertise",
      description:
        "Years of experience in delivering professional accounting services",
    },
    {
      icon: Target,
      title: "Precision",
      description: "Accurate and detailed financial reporting you can trust",
    },
    {
      icon: Users,
      title: "Client-Focused",
      description:
        "Customized solutions designed for your unique business needs",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left Content - 40% */}
          <div className="lg:col-span-2">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1e3a8a]">
              About Us
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {country === "usa" ? usaContent : pakistanContent}
            </p>
          </div>

          {/* Right Content - 60% */}
          <div className="lg:col-span-3 space-y-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-[#1a1f2e] hover:border-[#ffb91f]"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 rounded-full flex items-center bg-[#fffae3] justify-center flex-shrink-0">
                      <Icon className="w-7 h-7 text-[#ffc64a]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-gray-900">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
