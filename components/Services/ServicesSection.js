import ServicesContainer from "./ServicesContainer";

export default function ServicesSection() {

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-black mb-2">Our Services</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-xl text-black">
            At H & E Computer Sales & Services, we offer a comprehensive range of IT solutions tailored to meet your needs.
          </p>
        </div>

        {/* Services Grid */}
        <ServicesContainer/>
      </div>
    </section>
  );
}
