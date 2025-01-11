import React from "react";

const coreValues = [
  { title: "Innovation", description: "Continuously evolving to provide cutting-edge solutions." },
  { title: "Integrity", description: "Building trust through honest and transparent services." },
  { title: "Customer Satisfaction", description: "Always putting customer needs first." },
  { title: "Reliability", description: "Ensuring dependable IT solutions every time." },
];

const whyChooseUs = [
  { title: "Expert Team", description: "Certified professionals with years of experience." },
  { title: "Comprehensive Solutions", description: "From software to hardware, we cover it all." },
  { title: "Affordable Services", description: "Cost-effective IT solutions without compromising quality." },
  { title: "Tailored Support", description: "Personalized services to meet your specific needs." },
];

const SectionHeader = ({ title }) => (
  <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
    <span className="w-2 h-8 bg-blue-500 mr-4"></span>
    {title}
  </h3>
);

const ListItem = ({ title, description }) => (
  <li className="flex items-start">
    <span className="text-blue-500 mr-2">&#8226;</span>
    <div>
      <span className="font-bold text-gray-700">{title}:</span>
      <span className="text-gray-600"> {description}</span>
    </div>
  </li>
);

const Card = ({ title, items }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
    <SectionHeader title={title} />
    <ul className="space-y-4">
      {items.map((item, index) => (
        <ListItem key={index} title={item.title} description={item.description} />
      ))}
    </ul>
  </div>
);

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
        <div className="grid md:grid-cols-2 gap-12 mt-16">
          <Card title="Our Core Values" items={coreValues} />
          <Card title="Why Choose Us?" items={whyChooseUs} />
        </div>
      </div>
    </section>
  );
}