export default function AboutSection() {
    return (
      <section id="about" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800">About Us</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            H & E Computer Sales & Services is a trusted provider of comprehensive IT solutions.
            From licensed software and hardware to advanced networking and security systems,
            we are committed to helping businesses and individuals achieve their technology goals.
            Our team ensures innovative and reliable services to keep you ahead in the tech world.
          </p>
  
          {/* Core Values Section */}
          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-gray-800">Our Core Values</h3>
            <ul className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto list-inside">
              <li>
                <span className="font-bold">Innovation:</span> Continuously evolving to provide cutting-edge solutions.
              </li>
              <li>
                <span className="font-bold">Integrity:</span> Building trust through honest and transparent services.
              </li>
              <li>
                <span className="font-bold">Customer Satisfaction:</span> Always putting customer needs first.
              </li>
              <li>
                <span className="font-bold">Reliability:</span> Ensuring dependable IT solutions every time.
              </li>
            </ul>
          </div>
  
          {/* Why Choose Us Section */}
          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-gray-800">Why Choose Us?</h3>
            <ul className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto list-inside">
              <li>
                <span className="font-bold">Expert Team:</span> Certified professionals with years of experience.
              </li>
              <li>
                <span className="font-bold">Comprehensive Solutions:</span> From software to hardware, we cover it all.
              </li>
              <li>
                <span className="font-bold">Affordable Services:</span> Cost-effective IT solutions without compromising quality.
              </li>
              <li>
                <span className="font-bold">Tailored Support:</span> Personalized services to meet your specific needs.
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
  