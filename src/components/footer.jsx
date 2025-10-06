import React from "react";
import logo from "../pictures/logo.png";
import { Phone, Mail, MapPin } from "lucide-react";

const footerData = {
  company: {
    companyName: "Apex Prime Services L.L.C",
    tagline: "Where Expertise Meets Trust",
    description: "Professional accounting services you can trust.",
    email: "info@apexprimeservices.com",
    contacts: {
      usa: {
        phone: "516-205-4013",
        address: "412 Plainview Road Hicksville NY 11801",
      },
      pakistan: {
        phone: "+92 336 176 1666 , +92 334 189 1301",
        address:
          "406, 4th Floor Panorama Center, Building Number 2, Raja Ghazanfer Ali Khan Road, Saddar, Karachi.",
      },
    },
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
              <div className="w-10 h-10 flex lg:items-center lg:justify-center md:items-start md:justify-start">
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
            <h3 className="font-bold text-lg">Contact</h3>
            <div className="mb-2">
              <p className="flex items-center gap-2">
                <Mail className="h-8 w-4 text-[#ffc64a]" /> {data.email}
              </p>
            </div>
            <div className="space-y-4 text-sm text-gray-300">
              {/* USA Contact */}
              <div>
                <h4 className="font-semibold text-white pb-2">USA</h4>
                <p className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-[#ffc64a]" />{" "}
                  {data.contacts.usa.phone}
                </p>
                <div className="flex flex-row">
                  <p className="flex items-center gap-2 text-gray-400">
                    <MapPin className="h-4 w-4 text-[#ffc64a]" />{" "}
                  </p>
                  <p className="pt-3 pl-2 text-gray-400">
                    {" "}
                    {data.contacts.usa.address}
                  </p>
                </div>
              </div>

              {/* Pakistan Contact */}
              <div>
                <h4 className="font-semibold text-white pb-2">Pakistan</h4>
                <p className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-[#ffc64a]" />{" "}
                  {data.contacts.pakistan.phone}
                </p>
                <div className="flex flex-row">
                  <p className="flex items-center gap-2 text-gray-400">
                    <MapPin className="h-4 w-4 text-[#ffc64a]" />{" "}
                  </p>
                  <p className="pt-3 pl-2 text-gray-400">
                    {" "}
                    {data.contacts.pakistan.address}
                  </p>
                </div>
              </div>
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
