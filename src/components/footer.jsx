import React from "react";
import logo from "../pictures/logo.png";
import { Phone, Mail, MapPin } from "lucide-react";

const footerData = {
  company: {
    companyName: "Apex Prime Services L.L.C",
    tagline: "Where Expertise Meets Trust",
    description: "Professional accounting services you can trust.",
    phone: "516-205-4013",
    email: "info@apexprimeservices.com",
    address: "412 Plainview Road Hicksville NY 11801",
    services: [
      "Accounting & Bookkeeping",
      "Financial Consulting",
      "Tax Filing & Compliance",
      "Business Advisory",
    ],
    copyright: "© 2025 Apex Prime Services L.L.C. All rights reserved.",
  },
};

export function Footer() {
  const data = footerData.company;

  return (
    <footer className="bg-[#1a1f2e] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 flex items-center justify-center">
                <img src={logo} alt="Logo" className="w-full h-auto" />
              </div>
              <div>
                <h3 className="font-bold text-lg">{data.companyName}</h3>
                <p className="text-sm text-gray-400">{data.tagline}</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">{data.description}</p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <div className="space-y-3 text-sm text-gray-300">
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[#ffc64a]" /> {data.phone}
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[#ffc64a]" /> {data.email}
              </p>
              <p className="flex items-center gap-2 text-gray-400">
                <MapPin className="h-4 w-4 text-[#ffc64a]" /> {data.address}
              </p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              {data.services.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-6">
          <p className="text-center text-sm text-gray-400">{data.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
