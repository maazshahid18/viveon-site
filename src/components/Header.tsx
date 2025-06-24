'use client';

import { useState, useEffect } from 'react';

// Navigation Component (previously in './Navigation')
function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  // Effect to control body scroll when the menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'; // Prevent scrolling
    } else {
      document.body.style.overflow = 'unset'; // Allow scrolling
    }

    // Cleanup function to reset overflow when component unmounts or isOpen changes
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleLinkClick = () => {
    setIsOpen(false); // Close menu when a link is clicked
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-6 text-sm text-gray-700">
        <a href="/" className="hover:text-blue-600 transition-colors duration-200">Home</a>
        <a href="/about" className="hover:text-blue-600 transition-colors duration-200">About</a>
        <a href="/treatments" className="hover:text-blue-600 transition-colors duration-200">Treatments</a>
        <a href="/contact" className="hover:text-blue-600 transition-colors duration-200">Contact</a>
      </nav>

      {/* Mobile Menu Toggle (Hamburger Icon) */}
      <button
        className="md:hidden text-gray-700 focus:outline-none z-50 p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
        onClick={() => setIsOpen(true)} // Always opens the menu
        aria-label="Open mobile menu"
      >
        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Mobile Navigation Menu Overlay and Content */}
      <div
        className={`
          fixed inset-0 bg-black bg-opacity-50 z-40
          transition-opacity duration-300 ease-in-out
          ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
        onClick={() => setIsOpen(false)} // Close menu when clicking overlay
      >
        {/* Menu Content Container - slides in from the left */}
        <div
          className={`
            fixed top-0 left-0 h-full w-3/4 max-w-xs bg-white shadow-2xl p-6
            transform transition-transform duration-300 ease-in-out
            ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          `}
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the menu content
        >
          {/* Close Button (Cross Icon) */}
          <button
            className="absolute top-4 right-4 text-gray-600 focus:outline-none p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setIsOpen(false)}
            aria-label="Close mobile menu"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Menu Links */}
          <nav className="mt-16 flex flex-col space-y-6">
            <a
              href="/"
              className="text-xl font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-200"
              onClick={handleLinkClick}
            >
              Home
            </a>
            <a
              href="/about"
              className="text-xl font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-200"
              onClick={handleLinkClick}
            >
              About
            </a>
            <a
              href="/treatments"
              className="text-xl font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-200"
              onClick={handleLinkClick}
            >
              Treatments
            </a>
            <a
              href="/contact"
              className="text-xl font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-200"
              onClick={handleLinkClick}
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}

// Header Component
export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Mobile Left Section: Hamburger and Logo */}
        <div className="flex items-center md:hidden">
          <Navigation /> {/* This contains the hamburger icon */}
          <a href="/" className="text-xl font-bold text-blue-600 ml-4"> {/* Added ml-4 for spacing */}
            Viveon
          </a>
        </div>

        {/* Desktop Left Section: Logo only (Navigation will be on the right) */}
        <div className="flex-shrink-0 hidden md:flex">
          <a href="/" className="text-xl font-bold text-blue-600">
            Viveon
          </a>
        </div>

        {/* Desktop Navigation (on the right) */}
        <div className="hidden md:flex items-center">
          <Navigation />
        </div>
      </div>
    </header>
  );
}
