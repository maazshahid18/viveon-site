"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';

// Navigation Component (Unchanged from your provided code)
function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className="hidden md:flex space-x-6 text-sm text-gray-700">
        <Link href="/" className="hover:text-blue-600 transition-colors duration-200">Home</Link>
        <Link href="/about" className="hover:text-blue-600 transition-colors duration-200">About</Link>
        <Link href="/treatments" className="hover:text-blue-600 transition-colors duration-200">Treatments</Link>
        <Link href="/contact" className="hover:text-blue-600 transition-colors duration-200">Contact</Link>
      </nav>

      <button
        className="md:hidden text-gray-700 focus:outline-none z-50 p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
        onClick={() => setIsOpen(true)}
        aria-label="Open mobile menu"
      >
        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <div
        className={`
          fixed inset-0 bg-black bg-opacity-50 z-40
          transition-opacity duration-300 ease-in-out
          ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
        onClick={() => setIsOpen(false)}
      >
        <div
          className={`
            fixed top-0 left-0 h-full w-3/4 max-w-xs bg-white shadow-2xl p-6
            transform transition-transform duration-300 ease-in-out
            ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          `}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="absolute top-4 right-4 text-gray-600 focus:outline-none p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setIsOpen(false)}
            aria-label="Close mobile menu"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <nav className="mt-16 flex flex-col space-y-6">
            <Link
              href="/"
              className="text-xl font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-200"
              onClick={handleLinkClick}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-xl font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-200"
              onClick={handleLinkClick}
            >
              About
            </Link>
            <Link
              href="/treatments"
              className="text-xl font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-200"
              onClick={handleLinkClick}
            >
              Treatments
            </Link>
            <Link
              href="/contact"
              className="text-xl font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-200"
              onClick={handleLinkClick}
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}

// Header Component with Option 2 Logo
export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Mobile Left Section: Hamburger and Logo */}
        <div className="flex items-center md:hidden">
          <Navigation />
          <Link href="/" className="ml-4 flex items-center">
            <span className="text-3xl font-extrabold text-blue-600 mr-2">✚</span> {/* Medical Cross Icon */}
            <span className="text-2xl font-extrabold text-blue-700">Viveon</span>
            <span className="text-lg font-semibold text-gray-700 ml-2"> Global HealthCare</span>
          </Link>
        </div>

        {/* Desktop Left Section: Logo only (Navigation will be on the right) */}
        <div className="flex-shrink-0 hidden md:flex">
          <Link href="/" className="flex items-center">
            <span className="text-3xl font-extrabold text-blue-600 mr-2">✚</span> {/* Medical Cross Icon */}
            <span className="text-2xl font-extrabold text-blue-700">Viveon</span>
            <span className="text-lg font-semibold text-gray-700 ml-2"> Global HealthCare</span>
          </Link>
        </div>

        {/* Desktop Navigation (on the right) */}
        <div className="hidden md:flex items-center">
          <Navigation />
        </div>
      </div>
    </header>
  );
}