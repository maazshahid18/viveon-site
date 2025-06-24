'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-6 text-sm text-gray-700">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <Link href="/about" className="hover:text-blue-600">About</Link>
        <Link href="/treatments" className="hover:text-blue-600">Treatments</Link>
        <Link href="/contact" className="hover:text-blue-600">Contact</Link>
      </nav>

      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden text-gray-700 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 text-sm text-gray-700">
          <Link href="/" className="block hover:text-blue-600">Home</Link>
          <Link href="/about" className="block hover:text-blue-600">About</Link>
          <Link href="/treatments" className="block hover:text-blue-600">Treatments</Link>
          <Link href="/contact" className="block hover:text-blue-600">Contact</Link>
        </div>
      )}
    </>
  );
}