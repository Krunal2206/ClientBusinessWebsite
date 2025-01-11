import Link from "next/link";

export default function HeroSection() {
    return (
      <section className="relative bg-gradient-to-r from-[#00c6ff] to-[#0072ff] py-16 mt-16">
        <div className="container mx-auto flex flex-col items-center justify-center px-4 text-center text-white">
          {/* Main Heading */}
          <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">
            Welcome to H & E Computer Sales & Services
          </h1>
          
          {/* Subheading */}
          <p className="mt-4 text-lg sm:text-xl lg:text-2xl max-w-3xl">
            Innovating your tech experience with hardware solutions, licensed software, networking, CCTV systems, and more.
          </p>
          
          {/* Motto */}
          <div className="mt-8">
            <p className="text-xl sm:text-2xl lg:text-3xl font-semibold italic tracking-wide">
              Innovate. Integrate. Inspire.
            </p>
          </div>
          
          {/* Call to Action Buttons */}
          <div className="mt-6 flex space-x-4">
            <Link
              href="#services"
              className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow hover:bg-gray-100"
            >
              Explore Services
            </Link>
            <Link
              href="#contact"
              className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow hover:bg-gray-100"
            >
              Contact Us Now
            </Link>
          </div>
        </div>
      </section>
    );
  }
  