export default function HeroSection() {
    return (
      <section className="relative bg-gradient-to-r from-[#00c6ff] to-[#0072ff] py-16 mt-16">
        <div className="container mx-auto flex flex-col items-center justify-center px-4 text-center text-white">
          <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">
            Welcome to H & E Computer Sales & Services
          </h1>
          <p className="mt-4 text-lg sm:text-xl lg:text-2xl max-w-3xl">
            Innovating your tech experience with hardware solutions, licensed software, networking, CCTV systems, and more.
          </p>
          <div className="mt-6 flex space-x-4">
            <a
              href="#services"
              className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow hover:bg-gray-100"
            >
              Explore Services
            </a>
            <a
              href="#contact"
              className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow hover:bg-gray-100"
            >
              Contact Us Now
            </a>
          </div>
        </div>
      </section>
    );
}