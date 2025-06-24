'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <>
      <footer className="bg-blue-900 text-white mt-10">
        <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-3">Viveon Global Healthcare</h2>
            <p className="text-sm text-gray-300">
              Connecting international patients with world-class medical services in India.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">Quick Links</h2>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-blue-300">Home</Link></li>
              <li><Link href="/about" className="hover:text-blue-300">About</Link></li>
              <li><Link href="/treatments" className="hover:text-blue-300">Treatments</Link></li>
              <li><Link href="/contact" className="hover:text-blue-300">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">Contact</h2>
            <p className="text-sm text-gray-300">📍 Ahmedabad, India</p>
            <p className="text-sm text-gray-300">📞 +91 98765 43210</p>
            <p className="text-sm text-gray-300">✉️ support@viveonhealth.com</p>
          </div>
        </div>

        <div className="border-t border-blue-700 text-center py-4 text-sm text-gray-400">
          © {new Date().getFullYear()} Viveon Global Healthcare. All rights reserved.
        </div>
      </footer>

      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-3 shadow-lg transition-all"
        aria-label="Chat on WhatsApp"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 32 32">
          <path d="M16.001 2.999a13 13 0 0 0-11.277 19.498L2 30l7.76-2.716A13 13 0 1 0 16 2.999zM16 26.937c-2.012 0-3.986-.529-5.717-1.529l-.41-.24-4.604 1.61 1.543-4.524-.267-.468a10.962 10.962 0 1 1 9.455 5.151zM21.697 19.146c-.318-.159-1.88-.928-2.172-1.034-.29-.106-.502-.159-.714.16-.213.318-.82 1.034-1.006 1.248-.186.213-.373.239-.691.08-.318-.16-1.341-.494-2.554-1.577-.944-.84-1.58-1.877-1.765-2.194-.185-.318-.02-.49.139-.649.143-.143.318-.373.478-.56.159-.187.213-.319.319-.532.106-.213.053-.398-.027-.56-.08-.159-.714-1.721-.978-2.356-.257-.617-.519-.533-.714-.541h-.61a1.18 1.18 0 0 0-.86.398c-.294.319-1.146 1.12-1.146 2.73s1.174 3.168 1.337 3.385c.159.212 2.309 3.516 5.594 4.93.78.337 1.387.539 1.86.69.781.247 1.492.212 2.053.128.627-.093 1.88-.768 2.146-1.509.266-.74.266-1.374.186-1.509-.08-.133-.291-.212-.61-.372z"/>
        </svg>
      </a>
    </>
  );
}