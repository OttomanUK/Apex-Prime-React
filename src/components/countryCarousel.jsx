"use client"

import React, { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import uk from "../pictures/uk.png"
import usa from "../pictures/usa.png"
import pakistan from "../pictures/pakistan.jpg"
import uae from "../pictures/uae.jpg"

const countries = [
  { name: "United Kingdom", flag: uk },
  { name: "United States", flag: usa },
  { name: "Pakistan", flag: pakistan },
  { name: "United Arab Emirates", flag: uae },
]

export default function GlobalCarousel() {
  const [currentIndex, setCurrentIndex] = useState(1)
  const [activeTab, setActiveTab] = useState("USA")

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % countries.length)
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + countries.length) % countries.length)
  const goToSlide = (index) => setCurrentIndex(index)

  return (
    <section className="w-full max-w-7xl mx-auto">
      {/* Main Heading */}


      {/* Subheading for Carousel */}


      {/* Description */}


      {/* Carousel Section */}
      <div className="relative px-16 flex items-center justify-center">
        {/* Previous Button */}
        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center shadow-md transition"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        {/* Carousel */}
        <div className="overflow-hidden">
          <div className="flex items-center justify-center gap-4 md:gap-6 transition-all duration-500">
            {countries.map((country, index) => {
              const isCentered = index === currentIndex
              return (
                <div
                  key={country.name}
                  className={`flex-shrink-0 transition-all duration-500 cursor-pointer ${
                    isCentered
                      ? "w-32 h-32 md:w-40 md:h-40 scale-110 z-10"
                      : "w-20 h-20 md:w-24 md:h-24 opacity-60 hover:opacity-80"
                  }`}
                  onClick={() => goToSlide(index)}
                >
                  <div className="relative w-full h-full rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <img
                      src={country.flag || "/placeholder.svg"}
                      alt={`${country.name} flag`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center shadow-md transition"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center gap-2 mt-8 mb-16">
        {countries.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "w-8 bg-black"
                : "w-2 bg-gray-400 hover:bg-gray-500"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Subheading for Tabs */}

      {/* Country Tabs (UAE removed here) */}

    </section>
  )
}
