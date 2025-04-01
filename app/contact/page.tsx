import ContactForm from '@/components/ContactForm';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Koha | Get In Touch',
  description: 'Contact Koha for inquiries about our natural hair oil products or partnership opportunities.',
};


export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <h1 className="text-3xl md:text-4xl font-serif font-semibold text-olive-600 mb-8 text-center">
        Get In Touch
      </h1>
      <p className="text-center text-text-muted mb-10 max-w-xl mx-auto">
          We&apos;d love to hear from you! Whether you have questions about our products, need hair care advice, or just want to say hello, please reach out.
      </p>

       <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
            {/* Contact Form */}
            <div>
                 <h2 className="text-2xl font-serif font-medium text-text-main mb-6">Send Us a Message</h2>
                 <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-beige-200">
                <h2 className="text-2xl font-serif font-medium text-text-main mb-6">Contact Information</h2>
                 <ul className="space-y-4 text-text-muted">
                    <li className="flex items-start">
                         <FaEnvelope className="text-amber-700 mt-1 mr-3 flex-shrink-0" size={18}/>
                         <span>Email: <a href="mailto:info@koha.com" className="text-olive-600 hover:underline">info@koha.com</a></span>
                    </li>
                     <li className="flex items-start">
                         <FaPhone className="text-amber-700 mt-1 mr-3 flex-shrink-0" size={18}/>
                         <span>Phone: <a href="tel:+233550801915" className="text-olive-600 hover:underline">+233 (0) 550801915</a></span>
                    </li>
                     <li className="flex items-start">
                         <FaMapMarkerAlt className="text-amber-700 mt-1 mr-3 flex-shrink-0" size={18}/>
                         <span>Address: 19A Mahogany, Adweso - Koforidua, EN-075-2667</span>
                    </li>
                 </ul>
                 <p className="mt-6 text-sm">
                     We typically respond within 24-48 business hours.
                 </p>
            </div>
       </div>
    </div>
  );
}