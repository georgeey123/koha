"use client";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-background shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Brand Logo */}
        <Link href="/" className="text-primary font-serif text-2xl tracking-wide">
          Koha Naturals
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {["Home", "Products", "About", "Contact"].map((item) => (
            <Link key={item} href={`/${item.toLowerCase()}`} className="text-textPrimary hover:text-primary transition">
              {item}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-white py-4">
          <ul className="flex flex-col items-center space-y-4">
            {["Home", "Products", "About", "Contact"].map((item) => (
              <li key={item}>
                <Link href={`/${item.toLowerCase()}`} className="text-textPrimary text-lg hover:text-primary" onClick={() => setMenuOpen(false)}>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
