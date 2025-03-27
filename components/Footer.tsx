import Link from 'next/link';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa'; // Example social icons

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-olive-700 text-beige-100 mt-20 sm:mt-32"> {/* Slightly darker olive, increased margin */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16"> {/* Increased padding */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10"> {/* Increased gaps */}
          {/* Brand Info */}
          <div>
            <h3 className="text-2xl font-serif font-semibold mb-4 text-white">Koha Naturals</h3> {/* Updated Name */}
            <p className="text-sm text-beige-200 leading-relaxed"> {/* Added leading-relaxed */}
              Natural care for radiant hair. Crafted with the finest botanical ingredients for holistic wellness.
            </p>
          </div>

          {/* Quick Links --- Removed Testimonials --- */}
          <div>
            <h4 className="text-lg font-medium mb-4 text-white uppercase tracking-wider text-sm">Explore</h4> {/* Changed title, added styling */}
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm hover:text-white transition-colors hover:underline">Home</Link></li>
              <li><Link href="/products" className="text-sm hover:text-white transition-colors hover:underline">Products</Link></li>
              <li><Link href="/about" className="text-sm hover:text-white transition-colors hover:underline">About Us</Link></li>
              <li><Link href="/contact" className="text-sm hover:text-white transition-colors hover:underline">Contact</Link></li>
            </ul>
          </div>
          {/* --- End of update --- */}

          {/* Social Media & Contact */}
          <div>
            <h4 className="text-lg font-medium mb-4 text-white uppercase tracking-wider text-sm">Connect</h4> {/* Changed title, added styling */}
            <div className="flex space-x-5 mb-5"> {/* Increased spacing */}
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-white transition-colors"><FaInstagram size={22} /></a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-white transition-colors"><FaFacebook size={22} /></a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-white transition-colors"><FaTwitter size={22} /></a>
              {/* Add more social links as needed */}
            </div>
             <p className="text-sm text-beige-200">Get in touch:</p>
             <a href="mailto:info@kohanaturals.com" className="text-sm text-white hover:underline break-all">info@kohanaturals.com</a> {/* Updated email, ensure it breaks if long */}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-olive-600 pt-8 text-center text-xs text-beige-200/80"> {/* Increased pt, slightly muted text */}
          © {currentYear} Koha Naturals. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;