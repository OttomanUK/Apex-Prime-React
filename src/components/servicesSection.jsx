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

  const uaeServices = [
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
    { icon: Building2, title: "Registration of all types" },
    { icon: Landmark, title: "Filing of VAT/Corporate Tax Returns" },
  ];

  const services =
    country === "usa"
      ? usaServices
      : country === "pakistan"
      ? pakistanServices
      : uaeServices;

  return (
    <section id="services" className="py-20 md:py-28 bg-white">
      {" "}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {" "}
        <div className="text-center mb-10">
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ color: "var(--accent-primary)" }}
          >
            Our Services{" "}
          </h2>

          {/* Country Filter */}
          <div className="flex justify-center gap-4">
            {["usa", "pakistan", "uae"].map((c) => (
              <button
                key={c}
                onClick={() => setCountry(c)}
                className={`px-5 py-2 rounded-full font-medium transition ${
                  country === c
                    ? "bg-[#ffc64a] text-black shadow-md"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {c.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
        {/* Services Grid with Animation */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  className="bg-[#cbd0ff] rounded-xl p-8 border border-[#1a1f2e] hover:border-[#ffb91f] hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex justify-center mb-6">
                    <div className="w-14 h-14 bg-[#ffc64a] rounded-lg flex items-center justify-center shadow-sm">
                      <Icon className="w-7 h-7 text-[#000000]" />
                    </div>
                  </div>
                  <p className="text-black text-center leading-relaxed font-medium">
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
