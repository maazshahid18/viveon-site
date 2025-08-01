"use client"; // This directive is important for Next.js 13+ App Router components

import Link from 'next/link';
import React from 'react';
// import Image from 'next/image'; // Removed: Replaced with standard <img>
// import Link from 'next/link';   // Removed: Replaced with standard <a>

export default function AboutUsPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative text-white py-16 px-4 overflow-hidden bg-gradient-to-r from-[#0F2824] to-[#014c50]">
        <div className="absolute inset-0 bg-opacity-30 z-10"></div>
        <div className="relative z-20 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About Viveon GlobalHealth
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6">
            Connecting patients worldwide with world-class medical expertise in India.
          </p>
        </div>
      </section>

      {/* About Us Image Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <img
            src="/Slide3.jpg"
            alt="Viveon Global Health Team and Facility"
            className="w-full h-auto rounded-lg shadow-lg object-cover mx-auto"
          />
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 relative text-white py-4 px-6 w-3/4 mx-auto overflow-hidden bg-gradient-to-r from-[#0F2824] to-[#014c50] rounded">
            <h2 className="text-4xl font-bold text-white text-center">Our Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="md:order-2">
              <p className="text-gray-600 leading-relaxed text-2xl">
                At Viveon GlobalHealth, we strive to make world-class healthcare truly accessible by offering affordable, ethical, and transformative solutions—from international patient services to strategic hospital consultancy and full-spectrum marketing support.
              </p>
            </div>
            <div className="md:order-1">
              <img
                src="https://placehold.co/600x400/E0F2F7/2C5F56?text=Our+Mission"
                alt="Our Mission"
                className="w-full h-auto rounded-lg shadow-lg object-cover mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
         
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-600 leading-relaxed text-2xl">
                To create a healthier world by being the most trusted global partner in medical tourism and healthcare transformation—where high-quality, ethical, and affordable care is accessible across borders, and hospitals are empowered to grow and excel.
              </p>
            </div>
            <div>
              <img
                src="https://placehold.co/600x400/D1E7DD/2C5F56?text=Our+Vision"
                alt="Our Vision"
                className="w-full h-auto rounded-lg shadow-lg object-cover mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-16 px-4 bg-white text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 relative text-white py-4 px-6 w-full mx-auto overflow-hidden bg-gradient-to-r from-[#0F2824] to-[#014c50] rounded">
            <h2 className="text-4xl font-bold text-white text-center">Our Team</h2>
          </div>
          <img
            src="/Slide8.jpg"
            alt="Viveon Global Health Team"
            className="w-full h-auto rounded-lg shadow-lg object-cover mx-auto"
            width={1024}
          />
        </div>
      </section>

      {/* Director's Vision Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 relative text-white py-4 px-6 w-3/4 mx-auto overflow-hidden bg-gradient-to-r from-[#0F2824] to-[#014c50] rounded">
            <h2 className="text-4xl font-bold text-white text-center">Director&apos;s Vision</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-full max-w-sm mx-auto">
                <img
                  src="/director1.jpg"
                  alt="Director of Viveon Global Health"
                  className="w-full h-96 rounded-lg shadow-lg object-cover"
                />
              </div>
            </div>
            <div>
              <p className="text-gray-600 leading-relaxed text-lg">
                <strong>Visionary Healthcare Leader | Global Patient Mobility Specialist | Strategic Hospital Operations Expert</strong>
              </p>
              <p className="text-gray-600 leading-relaxed text-lg mt-4">
                With over two decades of hands-on experience in hospital management, complete healthcare marketing, and strategic partnerships. His passion lies in transforming healthcare institutions with strategic insight, optimizing operations, and delivering patient-centric services.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg mt-4">
                Our goal is to make Viveon GlobalHealth the premier platform for global patient mobility, known for compassionate care, international access, and unwavering trust. He is committed to making Viveon GlobalHealth a globally respected name in medical value travel and integrated care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-[#014c50] text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Begin Your Healthcare Journey?</h2>
          <p className="text-lg mb-8">
            Contact us today for a free consultation and let us guide you every step of the way.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[#2C5F56] font-semibold px-8 py-4 rounded-full hover:bg-gray-100 transition-colors duration-200 shadow-lg"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
