
import { useState, useEffect } from "react";
import { Globe, Menu, X } from "lucide-react";
import logo from "../pictures/logo.png";

export function Navigation({ selectedCountry, onCountryChange }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [countryDropdownOpen, setCountryDropdownOpen] = useState(false);
  const [mobileCountryDropdownOpen, setMobileCountryDropdownOpen] =
    useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const handleCountrySelect = (country) => {
    onCountryChange(country);
    setCountryDropdownOpen(false);
    setMobileCountryDropdownOpen(false);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const target = event.target;
      if (!target.closest(".country-dropdown")) {
        setCountryDropdownOpen(false);
        setMobileCountryDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navItems = [
    { label: "Home", id: "hero" },
    { label: "Services", id: "services" },
    { label: "About Us", id: "about" },
    { label: "Why Trust Us", id: "why-trust" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded flex items-center justify-center">
              <img src={logo} alt="Logo" className="w-10 h-10 object-contain" />
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-lg leading-tight text-[#1e3a8a]">
                APEX PRIME SERVICES
              </div>
              <div className="text-xs text-gray-600">
                Where Expertise Meets Trust
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 font-medium transition-colors hover:opacity-80 hover:cursor-pointer"
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--accent-primary)")
                }
                onMouseLeave={(e) => (e.currentTarget.style.color = "")}
              >
                {item.label}
              </button>
            ))}

            {/* Country Selector - Desktop */}
            <div className="relative country-dropdown">
              <button
                onClick={() => setCountryDropdownOpen(!countryDropdownOpen)}
                className="flex items-center gap-2 px-3 py-2 border bg-[#ffc64a] text-black font-bold border-gray-300 rounded-md hover:bg-[#1a1f2e] hover:text-white transition-colors"
              >
                <Globe className="w-4 h-4" />
                {selectedCountry === "usa" ? "🇺🇸 USA" : "🇵🇰 Pakistan"}
              </button>

              {countryDropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg overflow-hidden z-50">
                  <button
                    onClick={() => handleCountrySelect("usa")}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center gap-2"
                  >
                    🇺🇸 USA
                  </button>
                  <button
                    onClick={() => handleCountrySelect("pakistan")}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center gap-2"
                  >
                    🇵🇰 Pakistan
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <div className="relative country-dropdown">
              <button
                onClick={() =>
                  setMobileCountryDropdownOpen(!mobileCountryDropdownOpen)
                }
                className="p-2 border border-black rounded-md hover:bg-gray-50 bg-[#ffc64a] text-black"
              >
                <Globe className="w-4 h-4" />
              </button>

              {mobileCountryDropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg overflow-hidden z-50">
                  <button
                    onClick={() => handleCountrySelect("usa")}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    🇺🇸 USA
                  </button>
                  <button
                    onClick={() => handleCountrySelect("pakistan")}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    🇵🇰 Pakistan
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 hover:bg-gray-100 rounded-md"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--accent-primary)")
                }
                onMouseLeave={(e) => (e.currentTarget.style.color = "")}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

