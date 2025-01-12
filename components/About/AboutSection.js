import React from "react";
import AboutCardContainer from "./AboutCardContainer";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        {/* Main About Section */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">About Us</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            H & E Computer Sales & Services is a trusted provider of comprehensive IT solutions. From licensed
            software and hardware to advanced networking and security systems, we are committed to helping businesses
            and individuals achieve their technology goals. Our team ensures innovative and reliable services to keep
            you ahead in the tech world.
          </p>
        </div>

        {/* Core Values & Why Choose Us Grid */}
        <div className="grid md:grid-cols-2 gap-12 mt-16 overflow-hidden">
          <AboutCardContainer />
        </div>
      </div>
    </section>
  );
}
