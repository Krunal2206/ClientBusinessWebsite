export default function ContactUsSection() {
  return (
    <section id="contact" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-800">Contact Us</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          Contact us for services, sales inquiries, or any other assistance. We’re here to provide the solutions you need.
        </p>

        {/* Contact Form */}
        <div className="mt-12 max-w-3xl mx-auto">
          <form className="grid grid-cols-1 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />

            <textarea
              rows="5"
              placeholder="Your Message (e.g., Service Inquiry, Sales Question)"
              className="w-full px-4 py-3 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
            ></textarea>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
            >
              Submit Inquiry
            </button>
          </form>
        </div>

        {/* Business Details */}
        <div className="mt-12 max-w-3xl mx-auto text-left bg-gradient-to-br from-white to-gray-50 p-6 border rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800">Business Details</h3>
          <p className="mt-4 text-gray-600">
            Feel free to contact us via email or phone for any questions, inquiries, or service requests. We look forward to assisting you!
          </p>

          <div className="mt-6 space-y-4">
            <p className="flex items-center text-gray-800 font-semibold">
              <span className="font-bold mr-2">Email:</span>
              Hecomputers2710@outlook.com            </p>
            <p className="flex items-center text-gray-800 font-semibold">
              <span className="font-bold mr-2">Phone:</span>
              +91-9727139719
            </p>
            <p className="flex items-center text-gray-800 font-semibold">
              <span className="font-bold mr-2">Address:</span>
              16, Vakhariya Nagar-3, Near Kapileshwar Mahadev Temple, Kalol (N.G.), Pin-382721, Dist. Gandhinagar, Gujarat
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
