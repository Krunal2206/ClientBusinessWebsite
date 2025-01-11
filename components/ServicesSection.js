export default function ServicesSection() {
    return (
      <section id="services" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800">Our Services</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            At H & E Computer Sales & Services, we offer a comprehensive range of IT solutions tailored to meet your needs. Explore our key services below.
          </p>
  
          {/* Services Grid */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="p-6 border rounded-lg shadow hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 bg-white">
              <h3 className="text-xl font-semibold text-gray-800">Provide Licensed Software</h3>
              <p className="mt-4 text-gray-600">
                We ensure access to authentic, licensed software to enhance productivity and ensure compliance with legal standards.
              </p>
            </div>
  
            {/* Service 2 */}
            <div className="p-6 border rounded-lg shadow hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 bg-white">
              <h3 className="text-xl font-semibold text-gray-800">Hardware Solution</h3>
              <p className="mt-4 text-gray-600">
                Our hardware solutions include sales, installation, upgrades, and troubleshooting to keep your systems running efficiently.
              </p>
            </div>
  
            {/* Service 3 */}
            <div className="p-6 border rounded-lg shadow hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 bg-white">
              <h3 className="text-xl font-semibold text-gray-800">Networking Solution</h3>
              <p className="mt-4 text-gray-600">
                Build a robust, secure network infrastructure for seamless communication and data sharing across your organization.
              </p>
            </div>
  
            {/* Service 4 */}
            <div className="p-6 border rounded-lg shadow hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 bg-white">
              <h3 className="text-xl font-semibold text-gray-800">CCTV System</h3>
              <p className="mt-4 text-gray-600">
                Secure your premises with our high-quality CCTV systems, including installation, maintenance, and support services.
              </p>
            </div>
  
            {/* Service 5 */}
            <div className="p-6 border rounded-lg shadow hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 bg-white">
              <h3 className="text-xl font-semibold text-gray-800">Printer Repairing</h3>
              <p className="mt-4 text-gray-600">
                Our expert printer repair services ensure minimal downtime and efficient operation for your printing needs.
              </p>
            </div>
  
            {/* Service 6 */}
            <div className="p-6 border rounded-lg shadow hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 bg-white">
              <h3 className="text-xl font-semibold text-gray-800">Cartridge Refilling</h3>
              <p className="mt-4 text-gray-600">
                Save costs with our high-quality cartridge refilling services, ensuring top performance and print quality.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  