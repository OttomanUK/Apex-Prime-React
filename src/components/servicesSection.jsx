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

  // Define services per country
  const countryServices = {
    usa: [
      {
        icon: FileText,
        title:
          "Complete accounting services from chart of account to ledger trial balance and financial statement",
      },
      { icon: Users, title: "Payroll entries" },
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
    ],
    pakistan: [
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
    ],
    uk: [
      { icon: ClipboardCheck, title: "Bookkeeping and transaction recording" },
      { icon: BarChart3, title: "Financial reporting and accounts preparation" },
      { icon: Calculator, title: "Tax services" },
      { icon: Users, title: "Payroll entries" },
      { icon: Briefcase, title: "Outsourced Accounting / Partial Support" },
      { icon: DollarSign, title: "Management accounts and financial analysis" },
      { icon: Building2, title: "Statutory and regulatory compliance" },
      { icon: Landmark, title: "Company formation and secretarial services" },
      { icon: FileCheck, title: "Advisory and strategic services" },
    ],
    uae: [
      {
        icon: FileText,
        title: "Financial Reporting and statutory Accounts",
      },
      { icon: Users, title: "Audit and assurance" },
      {
        icon: Calculator,
        title: "VAT services",
      },
      {
        icon: ClipboardCheck,
        title: "Corporate tax services",
      },
      { icon: CreditCard, title: "Bookkeeping and transaction recording" },
      { icon: Receipt, title: "Payroll entries" },
      { icon: BarChart3, title: "Reconciliation and account maintenance" },
      { icon: FileCheck, title: "Regulatory & statutory compliance" },
      { icon: Landmark, title: "Management accounting advisory" },
    ],
    canada: [
      { icon: ClipboardCheck, title: "Bookkeeping and transaction recording" },
      { icon: BarChart3, title: "Financial statement preparation" },
      { icon: FileCheck, title: "Audit, review and assurance services" },
      { icon: Calculator, title: "Tax preparation and planning" },
      { icon: Settings, title: "GST / HST / Provincial sales tax services" },
      { icon: Users, title: "Payroll entries" },
      { icon: DollarSign, title: "Management accounting and advisory" },
      { icon: Building2, title: "Compliance and regulatory reporting" },
      { icon: Briefcase, title: "Outsourced / Virtual accounting" },
      { icon: Landmark, title: "Foreign company and startup support" },
    ],
  };

  const services = countryServices[country];

  const countries = ["usa", "pakistan", "uk", "uae", "canada"];

  return (
    <section id="services" className="pb-20 pt-10 md:py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2
            className="text-4xl md:text-5xl font-bold mb-10"
            style={{ color: "var(--accent-primary)" }}
          >
            Summary of Services
          </h2>
          <div className="flex justify-center gap-4 flex-wrap">
            {countries.map((c) => (
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

        {/* Services Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 min-h-[1200px]"
        >
          <AnimatePresence mode="wait">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  layout
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
