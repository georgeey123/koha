// src/components/Navbar.tsx (REVISED)
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const navLinks = [
  { href: '/products', label: 'Shop' }, // Changed label to 'Shop'
  { href: '/about', label: 'About' },
  // { href: '/journal', label: 'Journal' }, // Add if needed
  { href: '/contact', label: 'Contact' },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    // --- Consistent background, slight shadow, bottom border ---
    <header className="fixed top-0 left-0 right-0 z-50 bg-beige-100/95 backdrop-blur-sm shadow-sm border-b border-beige-200/70">
      {/* --- Use container for width constraint --- */}
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between"> {/* Set height, use flex */}
        {/* Brand Logo/Name - Styled like reference */}
        <Link
          href="/"
          className="text-2xl md:text-3xl font-semibold font-serif text-text-main hover:text-opacity-80 transition-opacity" // Simple text styling
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Koha Naturals
        </Link>

        {/* --- Desktop Navigation (Visible medium and up) --- */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              // --- Styling to match reference: subtle, uppercase ---
              className={`text-sm font-medium uppercase tracking-wider transition-colors pb-1 ${
                pathname === link.href
                  ? 'text-text-main border-b-2 border-olive-600' // Simple underline for active
                  : 'text-text-muted hover:text-text-main border-b-2 border-transparent'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* --- Mobile Menu Button (Hidden medium and up) --- */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            className="text-text-main hover:text-amber-700 focus:outline-none p-2 -mr-2"
          >
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </nav>

      {/* --- Mobile Menu Panel --- */}
      {/* Position absolute, slight shadow, background */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-beige-100 shadow-md transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <ul className="flex flex-col px-4 pt-2 pb-4 space-y-2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-2 text-base font-medium uppercase tracking-wider transition-colors rounded-md px-3 ${
                  pathname === link.href
                    ? 'text-olive-700 bg-olive-600/10 font-semibold'
                    : 'text-text-muted hover:text-text-main hover:bg-beige-200/50'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;