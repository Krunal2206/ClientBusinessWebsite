"use client";
import { useState, useEffect } from "react";

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Function to scroll to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling
    });
  };

  // Track scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      // Check if the scroll position is past the Services Section
      const servicesSection = document.getElementById("services");
      const servicesSectionBottom = servicesSection
        ? servicesSection.offsetTop + servicesSection.offsetHeight
        : 0;

      setIsVisible(window.scrollY > servicesSectionBottom);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition"
        aria-label="Back to top"
      >
        Back to top
      </button>
    )
  );
}
