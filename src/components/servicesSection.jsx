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
          "Complete Accounting Services from Chart of Account to Ledger Trial Balance and Financial Statement",
      },
      { icon: Users, title: "Payroll Entries" },
      { icon: Calculator, title: "Assessment of Existing Systems" },
      { icon: ClipboardCheck, title: "Transaction Recording" },
      {
        icon: CreditCard,
        title:
          "Recording of Banking and Credit Card Transaction & Bank Reconciliation",
      },
      { icon: Receipt, title: "Receipt and Payment Entries" },
      { icon: BarChart3, title: "Revenue and Expense Booking" },
      { icon: FileCheck, title: "Customer/Vendor Invoice Booking" },
      { icon: Landmark, title: "Accrual of Revenue and Expenses" },
      { icon: Settings, title: "Adjusting Entries" },
      { icon: Briefcase, title: "Fixed Assets Entries" },
      { icon: Clock, title: "Monthly Closing" },
    ],
    pakistan: [
      {
        icon: FileText,
        title:
          "Complete Accounting Service from Chart of Account to Ledger, Trial Balance and Final Accounts, as Preparation of Financial Statements",
      },
      {
        icon: PieChart,
        title: "Budgeting, Forecasting and Projected Financial Statements",
      },
      {
        icon: FileCheck,
        title: "Internal and External Financial Audit, Financial Reporting",
      },
      {
        icon: Banknote,
        title:
          "Banking Services, Operational Banking from Account Opening to Obtaining Credit Limits like L/C, LG, Long Term and Short-Term Financing and Export Re-Financing",
      },
      {
        icon: Building2,
        title:
          "Registration of All Types with SECP, FBR and Register Partnership or AOPs",
      },
      {
        icon: Landmark,
        title:
          "Notices of Income Tax Withholding, Tax and Filing of Sales Tax Returns for FBR, NTN & SST",
      },
      {
        icon: Briefcase,
        title:
          "PRA and KPRA, Listing of Companies with PSX, Merger Acquisition and Absorption of Companies",
      },
    ],
    uk: [
      { icon: ClipboardCheck, title: "Bookkeeping and Transaction Recording" },
      {
        icon: BarChart3,
        title: "Financial Reporting and Accounts Preparation",
      },
      { icon: Calculator, title: "Tax Services" },
      { icon: Users, title: "Payroll Entries" },
      { icon: Briefcase, title: "Outsourced Accounting / Partial Support" },
      { icon: DollarSign, title: "Management Accounts and Financial Analysis" },
      { icon: Building2, title: "Statutory and Regulatory Compliance" },
      { icon: Landmark, title: "Company Formation and Secretarial Services" },
      { icon: FileCheck, title: "Advisory and Strategic Services" },
    ],
    uae: [
      {
        icon: FileText,
        title: "Financial Reporting and Statutory Accounts",
      },
      { icon: Users, title: "Audit and Assurance" },
      {
        icon: Calculator,
        title: "VAT Services",
      },
      {
        icon: ClipboardCheck,
        title: "Corporate Tax Services",
      },
      { icon: CreditCard, title: "Bookkeeping and Transaction Recording" },
      { icon: Receipt, title: "Payroll Entries" },
      { icon: BarChart3, title: "Reconciliation and Account Maintenance" },
      { icon: FileCheck, title: "Regulatory & Statutory Compliance" },
      { icon: Landmark, title: "Management Accounting Advisory" },
    ],
    canada: [
      { icon: ClipboardCheck, title: "Bookkeeping and Transaction Recording" },
      { icon: BarChart3, title: "Financial Statement Preparation" },
      { icon: FileCheck, title: "Audit, Review and Assurance Services" },
      { icon: Calculator, title: "Tax Preparation and Planning" },
      { icon: Settings, title: "GST / HST / Provincial Sales Tax Services" },
      { icon: Users, title: "Payroll Entries" },
      { icon: DollarSign, title: "Management Accounting and Advisory" },
      { icon: Building2, title: "Compliance and Regulatory Reporting" },
      { icon: Briefcase, title: "Outsourced / Virtual Accounting" },
      { icon: Landmark, title: "Foreign Company and Startup Support" },
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
