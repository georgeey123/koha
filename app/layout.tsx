import type { Metadata } from 'next';
import { Inter, Cormorant_Garamond } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
});

// --- Updated Metadata ---
export const metadata: Metadata = {
  // Updated site title template
  title: {
     template: '%s | Koha Naturals', // Used by child pages
     default: 'Koha Naturals - Natural Hair Care', // Default title for home/unspecified pages
  },
  description: 'Discover Koha Naturals, premium natural hair oil crafted with botanical ingredients for healthy, beautiful hair.',
  // Add more SEO meta tags here later
};
// --- End of update ---

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable} antialiased`}>
      <body className="bg-beige-50 text-text-main">
        <Navbar />
        <main className="min-h-screen pt-16 sm:pt-20 md:pt-24">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}