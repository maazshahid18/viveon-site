'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <div className="relative overflow-hidden">
      {/* CTA Section - made more compact */}
      <section className="w-full py-3 px-6 flex flex-col justify-center items-center bg-[#1A403A] text-center text-white">
        <h2 className="text-xl font-bold mb-2">Need Medical Advice?</h2>
        <p className="mb-3 text-sm max-w-md">
          Chat with our expert team and get a free treatment estimate.
        </p>
        <Link
          href="/contact"
          className="bg-white text-[#2C5F56] px-5 py-2 rounded font-medium hover:bg-gray-100 text-sm"
        >
          Request a Free Quote
        </Link>
      </section>

      {/* Footer Info Section - optimized grid layout */}
      <footer className="w-full py-4 px-6 bg-[#1A403A] text-white">
        <div className="max-w-6xl mx-auto">
          {/* Main content grid - more compact */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-4">
            {/* Company Info */}
            <div className="md:col-span-2">
              <h2 className="text-lg font-semibold mb-2">Viveon Global Health</h2>
              <p className="text-sm text-gray-300 mb-3">
                Connecting international patients with world-class medical services in India.
              </p>
              {/* Contact info inline */}
              <div className="space-y-1 text-sm text-gray-300">
                <p>📍 Ahmedabad, India</p>
                <p>📞 +91 98765 43210</p>
                <p>✉️ support@viveonhealth.com</p>
              </div>
            </div>

            {/* Quick Links - split into two columns on larger screens */}
            <div className="md:col-span-2">
              <h2 className="text-lg font-semibold mb-2">Quick Links</h2>
              <div className="grid grid-cols-2 gap-x-4 text-sm">
                <ul className="space-y-1">
                  <li><Link href="/" className="hover:text-[#66BB6A] transition-colors">Home</Link></li>
                  <li><Link href="/about" className="hover:text-[#66BB6A] transition-colors">About Us</Link></li>
                  <li><Link href="/services" className="hover:text-[#66BB6A] transition-colors">Services</Link></li>
                  <li><Link href="/network-hospitals" className="hover:text-[#66BB6A] transition-colors">Network Hospitals</Link></li>
                </ul>
                <ul className="space-y-1">
                  <li><Link href="/for-patients" className="hover:text-[#66BB6A] transition-colors">For Patients</Link></li>
                  <li><Link href="/for-partners" className="hover:text-[#66BB6A] transition-colors">For Partners</Link></li>
                  <li><Link href="/blog" className="hover:text-[#66BB6A] transition-colors">Blog/News</Link></li>
                  <li><Link href="/contact" className="hover:text-[#66BB6A] transition-colors">Contact</Link></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Copyright - more compact */}
          <div className="border-t border-[#2C5F56] text-center py-3 text-sm text-gray-400">
            © {new Date().getFullYear()} Viveon Global Health. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Desktop floating WhatsApp button */}
      <Link
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:flex fixed bottom-6 right-4 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 32 32">
          <path d="M16.001 2.999a13 13 0 0 0-11.277 19.498L2 30l7.76-2.716A13 13 0 1 0 16 2.999zM16 26.937c-2.012 0-3.986-.529-5.717-1.529l-.41-.24-4.604 1.61 1.543-4.524-.267-.468a10.962 10.962 0 1 1 9.455 5.151zM21.697 19.146c-.318-.159-1.88-.928-2.172-1.034-.29-.106-.502-.159-.714.16-.213.318-.82 1.034-1.006 1.248-.186.213-.373.239-.691.08-.318-.16-1.341-.494-2.554-1.577-.944-.84-1.58-1.877-1.765-2.194-.185-.318-.02-.49.139-.649.143-.143.318-.373.478-.56.159-.187.213-.319.319-.532.106-.213.053-.398-.027-.56-.08-.159-.714-1.721-.978-2.356-.257-.617-.519-.533-.714-.541h-.61a1.18 1.18 0 0 0-.86.398c-.294.319-1.146 1.12-1.146 2.73s1.174 3.168 1.337 3.385c.159.212 2.309 3.516 5.594 4.93.78.337 1.387.539 1.86.69.781.247 1.492.212 2.053.128.627-.093 1.88-.768 2.146-1.509.266-.74.266-1.374.186-1.509-.08-.133-.291-.212-.61-.372z" />
        </svg>
      </Link>

      {/* Mobile full-width WhatsApp button */}
      <Link
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white text-[#4CAF50] text-center py-3 font-medium flex items-center justify-center gap-2 border-t border-[#4CAF50] shadow-lg transition-all"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 32 32">
          <path d="M16.001 2.999a13 13 0 0 0-11.277 19.498L2 30l7.76-2.716A13 13 0 1 0 16 2.999zM16 26.937c-2.012 0-3.986-.529-5.717-1.529l-.41-.24-4.604 1.61 1.543-4.524-.267-.468a10.962 10.962 0 1 1 9.455 5.151zM21.697 19.146c-.318-.159-1.88-.928-2.172-1.034-.29-.106-.502-.159-.714.16-.213.318-.82 1.034-1.006 1.248-.186.213-.373.239-.691.08-.318-.16-1.341-.494-2.554-1.577-.944-.84-1.58-1.877-1.765-2.194-.185-.318-.02-.49.139-.649.143-.143.318-.373.478-.56.159-.187.213-.319.319-.532.106-.213.053-.398-.027-.56-.08-.159-.714-1.721-.978-2.356-.257-.617-.519-.533-.714-.541h-.61a1.18 1.18 0 0 0-.86.398c-.294.319-1.146 1.12-1.146 2.73s1.174 3.168 1.337 3.385c.159.212 2.309 3.516 5.594 4.93.78.337 1.387.539 1.86.69.781.247 1.492.212 2.053.128.627-.093 1.88-.768 2.146-1.509.266-.74.266-1.374.186-1.509-.08-.133-.291-.212-.61-.372z" />
        </svg>
        Chat on WhatsApp
      </Link>
    </div>
  );
}