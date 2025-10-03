import React from "react";
import logo from "../pictures/logo.png";

export function CountryModal({ isOpen, onSelect }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 px-4 sm:px-0"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 sm:p-8 relative">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <div className="w-12 h-12 flex items-center justify-center">
            <img src={logo} alt="Logo" className="w-full h-auto" />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-center text-xl sm:text-2xl font-bold mb-2">
          Select Your Region
        </h2>
        <p className="text-center text-gray-600 mb-6 text-sm sm:text-base">
          Choose your location to view region-specific services and contact
          information.
        </p>

        {/* Country Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <button
            onClick={() => onSelect("usa")}
            className="h-20 sm:h-24 flex flex-col gap-2 justify-center items-center bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg transition-colors"
          >
            <span className="text-3xl sm:text-4xl">🇺🇸</span>
            <span className="text-base sm:text-lg font-semibold">USA</span>
          </button>

          <button
            onClick={() => onSelect("pakistan")}
            className="h-20 sm:h-24 flex flex-col gap-2 justify-center items-center bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors"
          >
            <span className="text-3xl sm:text-4xl">🇵🇰</span>
            <span className="text-base sm:text-lg font-semibold">Pakistan</span>
          </button>
        </div>
      </div>
    </div>
  );
}
