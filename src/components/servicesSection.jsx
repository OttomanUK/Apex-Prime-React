import {
  FileText,
  DollarSign,
  TrendingUp,
  Clock,
  Calculator,
  ClipboardCheck,
} from "lucide-react";
import payroll from "../pictures/payroll.jpg";
import { motion } from "framer-motion";

export function ServicesSection({ country }) {
  const usaServices = [
    {
      icon: FileText,
      title: "Payroll services",
      image: payroll,
    },
    {
      icon: Calculator,
      title: "Assessment of existing systems",
      image: payroll,
    },
    {
      icon: TrendingUp,
      title: "Transaction recording",
      image: payroll,
    },
    {
      icon: DollarSign,
      title:
        "Recording of banking and credit card transaction & bank reconciliation",
      image: payroll,
    },
    {
      icon: ClipboardCheck,
      title: "Receipt and payment entries",
      image: payroll,
    },
    {
      icon: Clock,
      title: "Revenue and expense booking",
      image: payroll,
    },
    {
      icon: FileText,
      title: "Customer/Vendor invoice booking",
      image: payroll,
    },
    {
      icon: Calculator,
      title: "Accrual of revenue and expenses",
      image: payroll,
    },
    {
      icon: TrendingUp,
      title: "Adjusting entries",
      image: payroll,
    },
    {
      icon: DollarSign,
      title: "Fixed assets entries",
      image: payroll,
    },
    {
      icon: Clock,
      title: "Monthly closing",
      image: payroll,
    },
  ];

  const pakistanServices = [
    {
      icon: FileText,
      title: "Budgeting, forecasting and projected financial statements",
      image: payroll,
    },
    {
      icon: DollarSign,
      title: "Internal and external financial audit, Financial reporting",
      image: payroll,
    },
    {
      icon: DollarSign,
      title: "Financial reporting",
      image: payroll,
    },
    {
      icon: TrendingUp,
      title:
        "Banking services, operational banking from account opening to obtaining credit limits like L/C, LG. Long term and short-term financing and export re-financing",
      image: payroll,
    },
    {
      icon: Clock,
      title:
        "Registration of all types with SECP, FBR and register partnership or AOPs",
      image: payroll,
    },

    {
      icon: Calculator,
      title:
        "Notices of income tax withholding, tax and filing of sales tax returns for FBR, NTN & SST",
      image: payroll,
    },
    {
      icon: ClipboardCheck,
      title:
        "PRA and KPRA, listing of companies with PSX, merger acquisition and absorption of companies",
      image: payroll,
    },
  ];

  const services = country === "usa" ? usaServices : pakistanServices;
  const title =
    country === "usa"
      ? "Complete Accounting Services from Chart of Account to Ledger Trial Balance and Financial Statement"
      : "Complete accounting service from chart of account to ledger, trial balance and final accounts, as preparation of financial statements";

  return (
    <section id="services" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ color: "var(--accent-primary)" }}
          >
            Our Services
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed text-balance">
            {title}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} // animate only the first time
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow border border-[#1a1f2e] hover:border-[#ffb91f]"
              >
                <div className="flex justify-center mb-6">
                  <div className="w-14 h-14 bg-[#fffae3] rounded-lg flex items-center justify-center shadow-sm">
                    <Icon className="w-7 h-7 text-[#ffc64a]" />
                  </div>
                </div>
                <p className="text-gray-800 text-center leading-relaxed font-medium">
                  {service.title}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
