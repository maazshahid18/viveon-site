"use client"; // This directive is important for Next.js 13+ App Router components

import React, { useState } from 'react';
// Removed Next.js Link import as standard <a> tags are used in this context

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    country: '', // Added country to form data
    mobile: '',  // Added mobile to form data
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // ⚠️ Replace the URL below with your actual Google Apps Script deployment URL
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const form = new FormData();
    for (let key in formData) {
      form.append(key, formData[key as keyof typeof formData]);
    }

    const response = await fetch('https://script.google.com/macros/s/AKfycbxpLhEerdzXBMWpxFLkXAue9fWxMK69VFO61LEupt_pK1WFxXw-Xbali5-DbZcNIGQ9/exec', {
      method: 'POST',
      body: form,
    });

    if (response.ok) {
      alert('Thank you! Your message has been submitted.');
      setFormData({ name: '', email: '', subject: '', message: '', country: '', mobile: '' });
    } else {
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative text-white py-8 px-4 overflow-hidden bg-gradient-to-r from-[#0F2824] to-[#014c50]">
        <div className="absolute inset-0 bg-opacity-30 z-10"></div>
        <div className="relative z-20 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Get in Touch with Viveon
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6">
            We&apos;re here to answer your questions and guide you through your healthcare journey.
          </p>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#2C5F56] focus:border-[#2C5F56] sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#2C5F56] focus:border-[#2C5F56] sm:text-sm"
                />
              </div>
              {/* Added Country Field */}
              <div>
                <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#2C5F56] focus:border-[#2C5F56] sm:text-sm"
                />
              </div>
              {/* Added Mobile Number Field */}
              <div>
                <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
                <input
                  type="tel" // Use type="tel" for phone numbers
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#2C5F56] focus:border-[#2C5F56] sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#2C5F56] focus:border-[#2C5F56] sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Query</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#2C5F56] focus:border-[#2C5F56] sm:text-sm"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-[#2C5F56] hover:bg-[#1A403A] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2C5F56] transition-colors duration-200"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Information</h2>
            <div className="space-y-6 text-gray-700">
              <p className="flex items-center">
                <svg className="w-6 h-6 mr-3 text-[#2C5F56]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                 Ahmedabad, India
              </p>
              <p className="flex items-center">
                <svg className="w-6 h-6 mr-3 text-[#2C5F56]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.32.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.02.75-.25 1.02l-2.2 2.2z" />
                </svg>
                 +91 9875244331
              </p>
              <p className="flex items-center">
                <svg className="w-6 h-6 mr-3 text-[#2C5F56]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                 support@viveonglobalhealth.com
              </p>
            </div>

            {/* Map Placeholder */}
           
          </div>
        </div>
      </section>

      {/* Call to Action (Re-used from About Us page) */}
      <section className="py-16 px-4 bg-[#014c50] text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Have More Questions?</h2>
          <p className="text-lg mb-8">
            Don&apos;t hesitate to reach out. Our team is ready to assist you.
          </p>
          <a
            href="https://wa.me/919875244331?text=Hi i want to enquire about medical tourism" // Link back to contact page or another relevant page
            className="inline-block bg-white text-[#2C5F56] font-semibold px-8 py-4 rounded-full hover:bg-gray-100 transition-colors duration-200 shadow-lg"
          >
            Send Us a Message
          </a>
        </div>
      </section>
    </div>
  );
}
