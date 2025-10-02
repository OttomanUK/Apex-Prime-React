
import React from "react";
import logo from "../pictures/logo.png";

const footerData = {
  usa: {
    companyName: "Apex Prime Services L.L.C",
    tagline: "Where Expertise Meets Trust",
    description: "Professional accounting services you can trust.",
    phone: "516-205-4013",
    email: "info@apexprimeservices.com",
    address: "412 PLAINVIEW ROAD HICKSVILLE NY 11801",
    services: [
      "Accounting & Bookkeeping",
      "Financial Consulting",
      "Tax Filing & Compliance",
      "Business Advisory",
    ],
    copyright: "© 2025 Apex Prime Services L.L.C. All rights reserved.",
  },
  pakistan: {
    companyName: "Apex Prime Services Pakistan",
    tagline: "Where Expertise Meets Trust",
    description: "Professional accounting services you can trust.",
    phone: "+92 336 176 1666 | +92 334 189 1301",
    email: "Info@apexprimeservices.com",
    address:
      "406, 4th Floor Panorama Center, Building Number 2, Raja Ghazanfer Ali Khan Road, Saddar, Karachi",
    services: [
      "Accounting & Bookkeeping",
      "Financial Consulting",
      "Tax Filing & Compliance",
      "Business Advisory",
    ],
    copyright: "© 2025 Apex Prime Services Pakistan. All rights reserved.",
  },
};

export function Footer({ country }) {
  const data = footerData[country];

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
            <div className="space-y-2 text-sm text-gray-300">
              <p>{data.phone}</p>
              <p>{data.email}</p>
              <p className="text-gray-400">{data.address}</p>
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

