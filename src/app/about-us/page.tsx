"use client"; // This directive is important for Next.js 13+ App Router components

import React from 'react';
// import Image from 'next/image'; // Removed: Replaced with standard <img>
// import Link from 'next/link';   // Removed: Replaced with standard <a>

export default function AboutUsPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative text-white py-24 px-4 overflow-hidden bg-gradient-to-r from-[#0F2824] to-[#1C4E20]"> {/* Changed to even darker teal/green gradient */}
        {/* Background Image/Overlay - You can replace this with a specific about-us hero image */}
        <div className="absolute inset-0  bg-opacity-30 z-10"></div>
        <div className="relative z-20 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About Viveon Global Healthcare
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6">
            Connecting patients worldwide with world-class medical expertise in India.
          </p>
        </div>
      </section>

      {/* Added About Us Image Section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <img
            src="/aboutus.jpg" // Path to your aboutus.jpeg image
            alt="Viveon Global Healthcare Team and Facility"
            width={720} // Updated width to match actual image dimensions
            height={405} // Updated height to match actual image dimensions
            className="w-full h-auto object-cover rounded-lg shadow-xl"
          />
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="md:order-2">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              At Viveon Global Healthcare, our mission is to facilitate seamless access to high-quality, affordable medical treatments for international patients. We strive to be the most trusted bridge between patients seeking care and India's leading hospitals and specialists, ensuring a compassionate, transparent, and efficient healthcare journey.
            </p>
          </div>
          <div className="md:order-1">
            {/* Replaced Next.js Image with standard <img> tag */}
            <img
              src="https://placehold.co/600x400/E0F2F7/2C5F56?text=Our+Mission" // Placeholder image
              alt="Our Mission"
              width={600} // Explicit width
              height={400} // Explicit height
              className="w-full h-auto rounded-lg shadow-lg object-cover" // Use w-full h-auto for responsiveness
            />
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="py-16 px-4 bg-gray-100"> {/* Changed from bg-blue-50 to bg-gray-100 for a neutral background */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed">
              We envision a world where geographical boundaries do not limit access to exceptional healthcare. By leveraging India's medical advancements and our extensive network, we aim to be the global leader in medical tourism, empowering patients to achieve optimal health outcomes with dignity and peace of mind.
            </p>
          </div>
          <div>
            {/* Replaced Next.js Image with standard <img> tag */}
            <img
              src="https://placehold.co/600x400/D1E7DD/2C5F56?text=Our+Vision" // Placeholder image
              alt="Our Vision"
              width={600} // Explicit width
              height={400} // Explicit height
              className="w-full h-auto rounded-lg shadow-lg object-cover" // Use w-full h-auto for responsiveness
            />
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-[#E0F2F7] rounded-lg shadow-md"> {/* Changed from bg-blue-50 to a light teal */}
              <h3 className="text-xl font-semibold text-[#2C5F56] mb-3">Compassion</h3> {/* Changed text-blue-700 to dark teal */}
              <p className="text-gray-600">We approach every patient's journey with empathy and understanding, prioritizing their comfort and well-being.</p>
            </div>
            <div className="p-6 bg-[#E0F2F7] rounded-lg shadow-md"> {/* Changed from bg-blue-50 to a light teal */}
              <h3 className="text-xl font-semibold text-[#2C5F56] mb-3">Integrity</h3> {/* Changed text-blue-700 to dark teal */}
              <p className="text-gray-600">We operate with the highest ethical standards, ensuring transparency and honesty in all our dealings.</p>
            </div>
            <div className="p-6 bg-[#E0F2F7] rounded-lg shadow-md"> {/* Changed from bg-blue-50 to a light teal */}
              <h3 className="text-xl font-semibold text-[#2C5F56] mb-3">Excellence</h3> {/* Changed text-blue-700 to dark teal */}
              <p className="text-gray-600">We are committed to connecting patients with top-tier medical facilities and achieving the best possible outcomes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-[#2C5F56] text-white text-center"> {/* Changed from bg-blue-700 to dark teal */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Begin Your Healthcare Journey?</h2>
          <p className="text-lg mb-8">
            Contact us today for a free consultation and let us guide you every step of the way.
          </p>
          {/* Corrected syntax for comment within JSX attribute */}
          <a
            href="/contact"
            className="inline-block bg-white text-[#2C5F56] font-semibold px-8 py-4 rounded-full hover:bg-gray-100 transition-colors duration-200 shadow-lg" /* Changed text-blue-700 to dark teal */
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
