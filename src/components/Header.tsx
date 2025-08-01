"use client";
import Link from 'next/link';
import Image from 'next/image'; // Ensure Image is imported for both Header and Navigation
import { useState, useEffect } from 'react';

// Navigation Component
function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  // Define the navigation links with their paths
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Services", href: "/services" },
    { name: "For Patients", href: "/for-patients" },
    { name: "For Partners", href: "/for-partners" },
    { name: "Blog/News", href: "/blog" }, // Common path for blog/news
    { name: "Contact", href: "/contact" },
  ];

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
      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-6 text-lg text-gray-700">
        {navLinks.map((link) => (
          <Link key={link.name} href={link.href} className="hover:text-blue-600 transition-colors duration-200">
            {link.name}
          </Link>
        ))}
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

          {/* Logo inside the mobile menu */}
          <div className="flex items-center my-10">
            <Image
              src="/logo.jpeg" // Changed to logo2.jpeg for consistency
              alt="Viveon Global Health Logo"
              width={80}
              height={80}
              className="mr-3"
            />
            <span className="text-2xl font-extrabold text-[#2C5F56]">Viveon</span>
          </div>

          {/* Mobile Navigation */}
          <nav className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xl font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-200"
                onClick={handleLinkClick}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}

// Header Component with Logo (Unchanged from previous update)
export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-28">
        {/* Mobile Left Section: Hamburger and Logo */}
        <div className="flex items-center md:hidden">
          <Navigation />
          <Link href="/" className="ml-4 flex items-center">
            <Image
              src="/logo.jpeg"
              alt="Viveon Global Health Logo"
              width={40}
              height={40}
              className="mr-2"
              priority={true}
            />
            <span className="text-2xl font-extrabold text-[#2C5F56]">Viveon GlobalHealth</span>
          </Link>
        </div>

        {/* Desktop Left Section: Logo only (Navigation will be on the right) */}
        <div className="flex-shrink-0 hidden md:flex">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.jpeg"
              alt="Viveon Global Health Logo"
              width={100}
              height={100}
              className="mr-2"
              priority={true}
            />
            <span className="text-2xl font-extrabold text-[#2C5F56]">Viveon GlobalHealth</span>
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