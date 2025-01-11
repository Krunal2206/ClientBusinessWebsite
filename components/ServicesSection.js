import Image from "next/image";

const services = [
  {
    imageSrc: "/software.jpg",
    title: "Provide Licensed Software",
    description:
      "We ensure access to authentic, licensed software to enhance productivity and ensure compliance with legal standards.",
  },
  {
    imageSrc: "/hardware.jpg",
    title: "Hardware Solution",
    description:
      "Our hardware solutions include sales, installation, upgrades, and troubleshooting to keep your systems running efficiently.",
  },
  {
    imageSrc: "/network.jpg",
    title: "Networking Solution",
    description:
      "Build a robust, secure network infrastructure for seamless communication and data sharing across your organization.",
  },
  {
    imageSrc: "/cctv.jpg",
    title: "CCTV System",
    description:
      "Secure your premises with our high-quality CCTV systems, including installation, maintenance, and support services.",
  },
  {
    imageSrc: "/printer.jpg",
    title: "Printer Repairing",
    description:
      "Our expert printer repair services ensure minimal downtime and efficient operation for your printing needs.",
  },
  {
    imageSrc: "/cartridge.jpg",
    title: "Cartridge Refilling",
    description:
      "Save costs with our high-quality cartridge refilling services, ensuring top performance and print quality.",
  },
];

const ServiceCard = ({ imageSrc, title, description }) => (
  <div className="p-6 border rounded-lg shadow hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 bg-white">
    <div className="relative w-full h-48 mb-4">
      <Image src={imageSrc} alt={title} layout="fill" objectFit="fill" className="rounded" />
    </div>
    <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
    <p className="mt-4 text-gray-600">{description}</p>
  </div>
);

export default function ServicesSection() {

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">Our Services</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600">
            At H & E Computer Sales & Services, we offer a comprehensive range of IT solutions tailored to meet your needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              imageSrc={service.imageSrc}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
