import BusinessCard from "./BusinessCard";
import ContactUsForm from "./ContactUsForm";

export default function ContactUsSection() {

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        {/* Heading Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-2">Get in Touch</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-black max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto overflow-hidden">
          {/* Contact Form */}
          <ContactUsForm />

          {/* Business Details */}
          <BusinessCard />
        </div>
      </div>
    </section>
  );
}
