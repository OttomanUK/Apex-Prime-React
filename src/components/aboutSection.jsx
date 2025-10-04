"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";


export function AboutSection() {
  const features = [
    {
      title: "Expertise",
      description:
        "Years of experience in delivering professional accounting services",
    },
    {
      title: "Precision",
      description: "Accurate and detailed financial reporting you can trust",
    },
    {
      title: "Client-Focused",
      description:
        "Customized solutions designed for your unique business needs",
    },
  ];

  const domains = [
    "Accounting, Bookkeeping, Auditing, Finance, Taxation",
    "Financial controls, financial planning and analysis",
    "Statutory financial reporting as per IFRS and GAAP, Financial statements",
    "Management reporting and Board presentations, Dashboards",
    "Budgeting, forecasting, defining and monitoring KPIs",
    "Financial modeling, financial feasibilities",
    "Corporate governance, internal controls, process re-engineering",
    "System implementations",
    "Receivable and debtors' management, collection follow-ups",
    "Vendors and payable management, supply chain management",
    "Treasury, and cash flow management",
  ];

  return (
    <section id="about" className="py-16 md:py-20 bg-white">
      {" "}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {" "}
        <div className="grid lg:grid-cols-[1.2fr,1fr] gap-12 lg:gap-16 items-start">
          {/* Left Content */}{" "}
          <div className="space-y-6">
            {" "}
            <h2 className="text-4xl md:text-5xl font-bold text-black">
              About Us
            </h2>{" "}
            <p className="text-lg text-gray-950 leading-relaxed">
              Apex Prime Services is a trusted accounting firm dedicated to
              helping businesses and individuals manage their finances with
              confidence. We provide remote outsourced services globally in accounting,
              bookkeeping, taxation, payroll, internal audit, and related areas,
              delivering both quality and cost efficiency to our clients.{" "}
            </p>{" "}
            <p className="text-lg text-gray-700 leading-relaxed">
              Our team comprises professionals with over 20 years of experience
              across the following domains:{" "}
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 mt-6">
              {domains.map((domain, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-black mt-1 flex-shrink-0" />
                  <span className="text-gray-950 leading-relaxed text-base">
                    {domain}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          {/* Right Content */}
          <div className="flex flex-col justify-between space-y-5 h-full">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-1 bg-[#ffc64a] rounded-xl p-6 shadow-sm hover:shadow-lg transition-all border-2 border-transparent hover:border-[#ffc64a]"
              >
                <h3 className="text-xl font-bold mb-2 text-black">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
