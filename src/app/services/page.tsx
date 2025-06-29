"use client"; // This directive is important for Next.js 13+ App Router components

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function ServicesPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative text-white py-24 px-4 overflow-hidden bg-gradient-to-r from-[#0F2824] to-[#1C4E20]">
        <div className="absolute inset-0  bg-opacity-30 z-10"></div>
        <div className="relative z-20 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Comprehensive Healthcare Services
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6">
            Connecting you to a wide range of medical treatments and support services in India.
          </p>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">How We Can Help You</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-[#E0F2F7] rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="text-5xl text-[#2C5F56] mb-4">
                <span role="img" aria-label="Hospital icon">🏥</span> {/* Hospital */}
              </div>
              <h3 className="text-xl font-semibold text-[#2C5F56] mb-3">Hospital & Doctor Selection</h3>
              <p className="text-gray-600">
                Personalized recommendations for NABH & JCI accredited hospitals and top specialists based on your medical needs.
              </p>
            </div>
            <div className="p-6 bg-[#E0F2F7] rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="text-5xl text-[#2C5F56] mb-4">
                <span role="img" aria-label="Visa icon">✈️</span> {/* Airplane/Visa */}
              </div>
              <h3 className="text-xl font-semibold text-[#2C5F56] mb-3">Travel & Visa Assistance</h3>
              <p className="text-gray-600">
                Complete support for medical visa applications, flight bookings, and airport transfers.
              </p>
            </div>
            <div className="p-6 bg-[#E0F2F7] rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="text-5xl text-[#2C5F56] mb-4">
                <span role="img" aria-label="Money bag icon">💸</span> {/* Money Bag */}
              </div>
              <h3 className="text-xl font-semibold text-[#2C5F56] mb-3">Affordable Treatment Packages</h3>
              <p className="text-gray-600">
                Transparent and cost-effective treatment plans tailored to your budget without compromising on quality.
              </p>
            </div>
            <div className="p-6 bg-[#E0F2F7] rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="text-5xl text-[#2C5F56] mb-4">
                <span role="img" aria-label="Translator icon">🗣️</span> {/* Translator */}
              </div>
              <h3 className="text-xl font-semibold text-[#2C5F56] mb-3">Language & Communication</h3>
              <p className="text-gray-600">
                Access to interpreters and multilingual support to ensure clear communication throughout your stay.
              </p>
            </div>
            <div className="p-6 bg-[#E0F2F7] rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="text-5xl text-[#2C5F56] mb-4">
                <span role="img" aria-label="Hotel icon">🏨</span> {/* Hotel */}
              </div>
              <h3 className="text-xl font-semibold text-[#2C5F56] mb-3">Accommodation & Local Support</h3>
              <p className="text-gray-600">
                Assistance with comfortable accommodation, local transportation, and daily needs.
              </p>
            </div>
            <div className="p-6 bg-[#E0F2F7] rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="text-5xl text-[#2C5F56] mb-4">
                <span role="img" aria-label="Medical record icon">📋</span> {/* Medical Record */}
              </div>
              <h3 className="text-xl font-semibold text-[#2C5F56] mb-3">Post-Treatment Care</h3>
              <p className="text-gray-600">
                Follow-up consultations and support to ensure a smooth recovery after your treatment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Services Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Why Choose Viveon&aposs Services?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Choosing Viveon means opting for a hassle-free and supportive medical journey. We understand the complexities international patients face, and our dedicated team is committed to providing comprehensive assistance every step of the way. From your initial inquiry to post-treatment follow-up, we ensure your comfort, safety, and peace of mind.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our extensive network of top-tier hospitals and highly skilled specialists in India allows us to offer a diverse range of treatments at a fraction of the cost found in many Western countries, without compromising on quality.
              </p>
            </div>
            <div>
              {/* Placeholder image for why choose us */}
              <Image
                src="/aboutus.jpg"
                alt="Why Choose Viveon Services"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action (Re-used from other pages) */}
      <section className="py-16 px-4 bg-[#2C5F56] text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Explore Your Treatment Options?</h2>
          <p className="text-lg mb-8">
            Contact us today for a free consultation and personalized service recommendations.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[#2C5F56] font-semibold px-8 py-4 rounded-full hover:bg-gray-100 transition-colors duration-200 shadow-lg"
          >
            Request a Free Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
