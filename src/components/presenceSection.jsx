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

export function PresenceSection() {


  return (
    <section id="presence" className="py-20 md:pb-28 md:pt-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ color: "var(--accent-primary)" }}
          >
            Global Reach
          </h2>
        </div>

        {/* Intro Paragraph */}
        <div className="max-w-7xl mx-auto mb-12 text-gray-700 text-lg leading-relaxed">
          <p className="mb-4">
            Apex Prime Services L.L.C proudly serves clients across the{" "}
            <span className="text-[#325EAB] font-bold">
              {" "}
              United States, United Kingdom, Canada, the United Arab Emirates and
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
      </div>
    </section>
  );
}
