
import HeroCarousel from '@/components/HeroCarousel';
import ProductCard from '@/components/ProductCard';
import Link from 'next/link';

// --- DEFINE YOUR HERO IMAGE URLS HERE ---
// Add or remove paths corresponding to files in public/images/
const heroImages = [
  '/images/carousel_img_1.jpg',
  '/images/carousel_img_2.jpg',
  '/images/carousel_img_3.jpg',
  '/images/carousel_img_4.jpg',
  '/images/carousel_img_5.jpg',
  '/images/carousel_img_6.jpg',
  '/images/carousel_img_7.jpg',
];

const featuredProductImage = '/images/product_img_1.jpg'; // Use the card image

export default function HomePage() {
  return (
    <div>
      {/* 1. Hero Section - Now contained by the component itself */}
      {/* Pass loop option to the carousel */}
      <section className="mb-16 md:mb-24 pt-4 md:pt-8"> {/* Added some top padding */}
        <HeroCarousel imageUrls={heroImages} options={{ loop: true }} />
      </section>

      {/* 2. Welcome/Intro Text - Use container */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16 md:mb-24 text-center max-w-3xl">
         <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-olive-700 mb-4 leading-tight">
            Pure Botanicals for Radiant Hair
         </h1>
         <p className="text-base md:text-lg text-text-muted max-w-2xl mx-auto">
            Experience the transformative power of nature with Koha Naturals. Our carefully crafted hair oil nourishes from root to tip for visibly healthier, stronger, and shinier hair.
         </p>
      </section>

      {/* 3. Featured Products Section - Use container */}
      <section className="bg-gradient-to-b from-beige-50 to-beige-100 py-16 md:py-24">
          {/* --- Added Container --- */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-serif font-medium text-center text-text-main mb-10 md:mb-12">
              Discover Our Signature Oil
            </h2>
            {/* --- Grid for product card (constrained by container) --- */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-md sm:max-w-none mx-auto lg:max-w-4xl"> {/* Adjusted max-width slightly */}
              <ProductCard
                imageUrl={featuredProductImage}
                name="Koha Signature Hair Oil"
                description="Our foundational blend for strength, growth, and luminous shine."
                link="/products#signature-olive" // Update link if product ID changed
              />
              {/* Add more cards if needed */}
            </div>
            {/* --- View All Products Button --- */}
            <div className="text-center mt-12 md:mt-16">
                 <Link
                    href="/products"
                    className="inline-block bg-olive-600 text-white font-medium py-3 px-10 rounded-md hover:bg-olive-700 transition-colors text-base shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
                >
                    Explore All Products
                </Link>
            </div>
          </div>
      </section>

      {/* 4. "Why Choose Us" Section - Use container */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* --- Max-width and centering --- */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center md:text-left"> {/* Align left on medium+ */}
             {/* --- Adjusted styling slightly --- */}
             <div className="border-l-4 border-amber-700 pl-5">
                 <h3 className="text-xl font-serif font-semibold text-text-main mb-2">100% Natural</h3>
                 <p className="text-sm text-text-muted leading-relaxed">Free from synthetics, parabens, and sulfates. Just pure botanical goodness.</p>
             </div>
             <div className="border-l-4 border-amber-700 pl-5">
                 <h3 className="text-xl font-serif font-semibold text-text-main mb-2">Targeted Results</h3>
                 <p className="text-sm text-text-muted leading-relaxed">Formulated to address common hair concerns like dryness, damage, and growth.</p>
             </div>
             <div className="border-l-4 border-amber-700 pl-5">
                 <h3 className="text-xl font-serif font-semibold text-text-main mb-2">Ethically Sourced</h3>
                 <p className="text-sm text-text-muted leading-relaxed">We partner with suppliers who prioritize quality and sustainable practices.</p>
             </div>
        </div>
      </section>
    </div>
  );
}