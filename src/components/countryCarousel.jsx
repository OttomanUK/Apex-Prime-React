
"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import uk from "../pictures/uk.png";
import usa from "../pictures/usa.png";
import pakistan from "../pictures/pakistan.jpg";
import uae from "../pictures/uae.jpg";
import canada from "../pictures/canada.jpg";

const countries = [
  { name: "United States", flag: usa },
  { name: "United Kingdom", flag: uk },
  { name: "Canada", flag: canada },
  { name: "United Arab Emirates", flag: uae },
  { name: "Pakistan", flag: pakistan }
];

export default function GlobalCarousel() {
  const VISIBLE = 4; // number of visible items
  const GAP_PX = 24; // space between items in pixels (adjust if you want bigger/smaller gaps)

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemWidth, setItemWidth] = useState(0); // measured pixel width of each item

  const containerRef = useRef(null);

  // compute item width whenever container resizes
  useEffect(() => {
    function recalc() {
      const container = containerRef.current;
      if (!container) return;
      const containerWidth = container.clientWidth;
      // account for (VISIBLE - 1) gaps
      const width = Math.floor((containerWidth - GAP_PX * (VISIBLE - 1)) / VISIBLE);
      setItemWidth(width > 0 ? width : 0);
      // clamp currentIndex if viewport shrinks and currentIndex is invalid
      setCurrentIndex((prev) => Math.min(prev, countries.length - VISIBLE));
    }

    recalc();
    window.addEventListener("resize", recalc);
    return () => window.removeEventListener("resize", recalc);
  }, []);

  // move one step (wrap-around)
  const nextSlide = () =>
    setCurrentIndex((prev) => (prev === countries.length - VISIBLE ? 0 : prev + 1));
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev === 0 ? countries.length - VISIBLE : prev - 1));

  // pixel translation (falls back to % until itemWidth is measured)
  const translateX =
    itemWidth > 0 ? -(currentIndex * (itemWidth + GAP_PX)) : `-${currentIndex * 25}%`;

  return (
    <section className="w-full max-w-7xl mx-auto">
      <div className="relative flex items-center justify-center px-4 md:px-8">
        {/* Prev */}
        <button
          onClick={prevSlide}
          aria-label="Previous"
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 md:h-12 md:w-12 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center shadow transition"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        {/* Visible area */}
        <div ref={containerRef} className="overflow-hidden w-full max-w-4xl">
          <div
            className="flex items-start transition-transform duration-500 ease-in-out"
            // use pixel translate when measured, else use percentage fallback
            style={{
              transform: typeof translateX === "number" ? `translateX(${translateX}px)` : `translateX(${translateX})`,
            }}
          >
            {countries.map((country, i) => {
              const marginRight = i < countries.length - 1 ? `${GAP_PX}px` : "0px";
              // fallback style while measuring
              const fallbackStyle = { flex: "0 0 25%", width: "25%" };

              const itemStyle =
                itemWidth > 0
                  ? { flex: `0 0 ${itemWidth}px`, width: `${itemWidth}px`, marginRight }
                  : { ...fallbackStyle, marginRight };

              return (
                <div key={country.name} style={itemStyle} className="cursor-pointer mt-15">
                  <div
                    className="relative rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-transform duration-300"
                    style={{
                      width: itemWidth > 0 ? `${itemWidth}px` : "100%",
                      height: itemWidth > 0 ? `${itemWidth}px` : undefined,
                    }}
                  >
                    <img
                      src={country.flag}
                      alt={`${country.name} flag`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-center text-gray-700 mt-2 font-medium text-sm">
                    {country.name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Next */}
        <button
          onClick={nextSlide}
          aria-label="Next"
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 md:h-12 md:w-12 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center shadow transition"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: countries.length - VISIBLE + 1 }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === currentIndex ? "w-8 bg-black" : "w-2 bg-gray-400 hover:bg-gray-500"
            }`}
            aria-label={`Go to ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

