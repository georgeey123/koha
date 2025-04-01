import Link from 'next/link';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-olive-800 text-beige-100 mt-20">
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Brand Info */}
        <div>
          <h3 className="text-2xl font-serif font-semibold text-white mb-4">Koha Naturals</h3>
          <p className="text-sm text-beige-300">
            Natural care for radiant hair. Crafted with the finest botanical ingredients for holistic wellness.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-medium mb-3 text-white uppercase tracking-wider">Explore</h4>
          <ul className="space-y-2">
            <li><Link href="/" className="text-sm hover:text-white transition-colors hover:underline">Home</Link></li>
            <li><Link href="/products" className="text-sm hover:text-white transition-colors hover:underline">Products</Link></li>
            <li><Link href="/testimonials" className="text-sm hover:text-white transition-colors hover:underline">Testimonials</Link></li>
            <li><Link href="/about" className="text-sm hover:text-white transition-colors hover:underline">About Us</Link></li>
            <li><Link href="/contact" className="text-sm hover:text-white transition-colors hover:underline">Contact</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-lg font-medium mb-3 text-white uppercase tracking-wider">Connect</h4>
          <div className="flex justify-center md:justify-start space-x-5">
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-white transition-colors"><FaInstagram size={22} /></a>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-white transition-colors"><FaFacebook size={22} /></a>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-white transition-colors"><FaTwitter size={22} /></a>
          </div>
          <p className="text-sm text-beige-200 mt-3">Contact us:</p>
          <a href="mailto:info@kohanaturals.com" className="text-sm text-white hover:underline">info@kohanaturals.com</a>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-olive-700 pt-6 text-center text-xs text-beige-200/80">
        © {new Date().getFullYear()} Koha Naturals. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
