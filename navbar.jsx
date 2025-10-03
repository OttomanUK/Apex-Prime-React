"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b-2 border-primary pixel-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl text-[#00ff41] font-bold font-mono">
            {"<USMAN_KHALID />"}
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-2">
            {["about", "projects", "skills", "experience", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="px-3 py-2 text-[#00ff41] rounded font-mono text-sm uppercase tracking-wider hover:bg-primary hover:text-primary-foreground retro-shadow-accent transition-all duration-200"
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded hover:bg-primary/20"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 space-y-2">
            {["about", "projects", "skills", "experience", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="w-full px-3 py-2 rounded font-mono text-sm uppercase tracking-wider hover:bg-primary hover:text-primary-foreground"
              >
                {item}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}