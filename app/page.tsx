import HeroCarousel from '@/components/HeroCarousel';
import ProductCard from '@/components/ProductCard';
import Link from 'next/link';

// --- Define Hero Images ---
const heroImages = [
  '/images/carousel_img_2.jpg',
  '/images/carousel_img_3.jpg',
  '/images/carousel_img_4.jpg',
  '/images/carousel_img_5.jpg',
  '/images/carousel_img_6.jpg',
  '/images/carousel_img_7.jpg',
];

const featuredProductImage = '/images/product_img_1.jpg';

export default function HomePage() {
  return (
    <div className='flex flex-col  items-center'>
      {/* 🔹 1. Hero Section */}
      
        <HeroCarousel imageUrls={heroImages} options={{ loop: true }} />
    

      {/* 🔹 2. Welcome Section */}
      <section className="container mx-auto px-6 lg:px-12 text-center max-w-3xl mb-16 md:mb-24">
        <h1 className="text-4xl md:text-5xl font-serif font-semibold text-olive-700 mb-4 leading-snug">
          Pure Botanicals for Radiant Hair
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          Experience the transformative power of nature with Koha Naturals. Our carefully crafted hair oil nourishes from root to tip for visibly healthier, stronger, and shinier hair.
        </p>
      </section>

      {/* 🔹 3. Featured Products Section */}
      <section className="bg-gradient-to-b from-beige-50 to-beige-100 py-20">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl font-serif font-semibold text-gray-900 mb-12">
            Discover Our Signature Oil
          </h2>
          <div className="flex justify-center ">
            <ProductCard
              imageUrl={featuredProductImage}
              name="Koha Signature Hair Oil"
              description="Our foundational blend for strength, growth, and luminous shine."
            />
          </div>
          <div className="mt-12">
            <Link
              href="/products"
              className="inline-block bg-[#708238] text-white font-medium py-3 px-10 rounded-md hover:bg-olive-800 transition-transform transform hover:-translate-y-1 shadow-md"
            >
              Explore All Products
            </Link>
          </div>
        </div>
      </section>

      {/* 🔹 4. Why Choose Us Section */}
      <section className="container mx-auto px-6 lg:px-12 py-20">
        <h2 className="text-3xl font-serif font-semibold text-center text-gray-900 mb-12">
          Why Choose Koha Naturals?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left max-w-5xl mx-auto">
          <div className="border-l-4 border-amber-700 pl-6">
            <h3 className="text-xl font-serif font-semibold text-gray-900 mb-2">100% Natural</h3>
            <p className="text-gray-700">
              Free from synthetics, parabens, and sulfates. Just pure botanical goodness.
            </p>
          </div>
          <div className="border-l-4 border-amber-700 pl-6">
            <h3 className="text-xl font-serif font-semibold text-gray-900 mb-2">Targeted Results</h3>
            <p className="text-gray-700">
              Formulated to address common hair concerns like dryness, damage, and growth.
            </p>
          </div>
          <div className="border-l-4 border-amber-700 pl-6">
            <h3 className="text-xl font-serif font-semibold text-gray-900 mb-2">Benefits</h3>
            <p className="text-gray-700">
              <ul>
                <li>Protects against damage</li>
                <li>Boosts hair growth</li>
                <li>Prevents thinning & breakage</li>
                <li>Nourishes scalp</li>
              </ul>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
