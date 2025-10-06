import React, { useState } from "react";
import {
  FileText,
  DollarSign,
  TrendingUp,
  Clock,
  Calculator,
  ClipboardCheck,
  Banknote,
  Building2,
  Briefcase,
  CreditCard,
  Landmark,
  Receipt,
  BarChart3,
  Settings,
  FileCheck,
  Users,
  PieChart,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import GlobalCarousel from "./countryCarousel";

export function ServicesSection() {
  const [country, setCountry] = useState("usa");

  const usaServices = [
    {
      icon: FileText,
      title:
        "Complete Accounting Services from Chart of Account to Ledger Trial Balance and Financial Statement",
    },
    { icon: Users, title: "Payroll services" },
    { icon: Calculator, title: "Assessment of existing systems" },
    { icon: ClipboardCheck, title: "Transaction recording" },
    {
      icon: CreditCard,
      title:
        "Recording of banking and credit card transaction & bank reconciliation",
    },
    { icon: Receipt, title: "Receipt and payment entries" },
    { icon: BarChart3, title: "Revenue and expense booking" },
    { icon: FileCheck, title: "Customer/Vendor invoice booking" },
    { icon: Landmark, title: "Accrual of revenue and expenses" },
    { icon: Settings, title: "Adjusting entries" },
    { icon: Briefcase, title: "Fixed assets entries" },
    { icon: Clock, title: "Monthly closing" },
  ];

  const pakistanServices = [
    {
      icon: FileText,
      title:
        "Complete accounting service from chart of account to ledger, trial balance and final accounts, as preparation of financial statements",
    },
    {
      icon: PieChart,
      title: "Budgeting, forecasting and projected financial statements",
    },
    {
      icon: FileCheck,
      title: "Internal and external financial audit, financial reporting",
    },
    {
      icon: Banknote,
      title:
        "Banking services, operational banking from account opening to obtaining credit limits like L/C, LG. Long term and short-term financing and export re-financing",
    },
    {
      icon: Building2,
      title:
        "Registration of all types with SECP, FBR and register partnership or AOPs",
    },
    {
      icon: Landmark,
      title:
        "Notices of income tax withholding, tax and filing of sales tax returns for FBR, NTN & SST",
    },
    {
      icon: Briefcase,
      title:
        "PRA and KPRA, listing of companies with PSX, merger acquisition and absorption of companies",
    },
  ];

  const services = country === "usa" ? usaServices : pakistanServices;

  return (
    <section id="services" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ color: "var(--accent-primary)" }}
          >
            Our Services
          </h2>
        </div>

        {/* Intro Paragraph */}
        <div className="max-w-7xl mx-auto mb-12 text-gray-700 text-lg leading-relaxed">
          <p className="mb-4">
            Apex Prime Services L.L.C proudly serves clients across the{" "}
            <span className="text-[#325EAB] font-bold">
              {" "}
              United States, United Kingdom, the United Arab Emirates, and
              Pakistan
            </span>
            , delivering expert accounting and financial solutions tailored to
            both businesses and individuals. We specialize in remote and
            outsourced services that embody transparency, reliability, and cost
            efficiency. With a strong international presence built on
            customized, scalable, and trustworthy solutions, we help clients
            achieve sustainable, long-term success backed by over 20 years of
            collective expertise.
          </p>
        </div>

        <GlobalCarousel />

        {/* Subtitle + Country Filter */}
        {/* Subtitle + Country Filter */}
        <div className="text-center mb-6">
          <p className="text-gray-800 mb-4 text-2xl md:text-3xl font-semibold">
            Services for Each Market
          </p>
          <div className="flex justify-center gap-4">
            {["usa", "pakistan"].map((c) => (
              <button
                key={c}
                onClick={() => setCountry(c)}
                className={`px-5 py-2 rounded-full font-medium transition ${
                  country === c
                    ? "bg-[#ffc64a] text-black shadow-md"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {c === "usa"
                  ? c.toUpperCase()
                  : c === "pakistan"
                  ? c.charAt(0).toUpperCase() + c.slice(1).toLowerCase()
                  : c}
              </button>
            ))}
          </div>
        </div>
        {/* Services Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10"
        >
          <AnimatePresence mode="wait">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-[#325EAB] rounded-xl p-8 border border-[#1a1f2e] hover:border-[#ffb91f] hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex justify-center mb-6">
                    <div className="w-14 h-14 bg-[#ffc64a] rounded-lg flex items-center justify-center shadow-sm">
                      <Icon className="w-7 h-7 text-[#000000]" />
                    </div>
                  </div>
                  <p className="text-white text-center leading-relaxed font-medium">
                    {service.title}
                  </p>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
