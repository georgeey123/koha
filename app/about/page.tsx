// src/app/about/page.tsx
// Remove 'Image' import if no longer used
// import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Koha Naturals | Our Story & Mission', // Updated title
  description: 'Learn about Koha Naturals\' journey, our commitment to natural ingredients, and our mission for healthier hair.',
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <h1 className="text-3xl md:text-4xl font-serif font-semibold text-olive-600 mb-8 text-center">
        Our Story
      </h1>

      {/* --- Removed the grid layout and image --- */}
      <div className="prose prose-lg max-w-3xl mx-auto text-text-muted prose-headings:font-serif prose-headings:text-text-main prose-strong:text-text-main mb-12 md:mb-16 text-center md:text-left"> {/* Centered text */}
          <h2 className="text-2xl font-medium text-center">From Nature, With Love</h2>
          <p>
              Koha Naturals started with a simple belief: nature holds the key to true beauty and wellness. Frustrated by hair care products filled with harsh chemicals, we embarked on a journey to find a purer, more effective solution.
          </p>
          <p>
              Inspired by ancient traditions and powered by modern understanding, we carefully selected potent botanical oils known for their nourishing and restorative properties. Our mission is to provide you with high-quality, natural hair care that delivers visible results without compromise.
          </p>
      </div>
      {/* --- End of removal --- */}


      <div className="bg-white p-8 rounded-lg shadow-sm border border-beige-200 max-w-4xl mx-auto"> {/* Constrained width */}
           <h2 className="text-2xl md:text-3xl font-serif font-medium text-center text-text-main mb-6">Our Commitment</h2>
           <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                <div>
                     <h3 className="font-semibold text-lg text-amber-700 mb-2">Natural Ingredients</h3>
                     <p className="text-sm text-text-muted">We source the finest plant-based oils and extracts, free from parabens, sulfates, and silicones.</p>
                </div>
                 <div>
                     <h3 className="font-semibold text-lg text-amber-700 mb-2">Effective Formulas</h3>
                     <p className="text-sm text-text-muted">Our blends are thoughtfully crafted to target common hair concerns like dryness, damage, and growth.</p>
                </div>
                 <div>
                     <h3 className="font-semibold text-lg text-amber-700 mb-2">Sustainability</h3>
                     <p className="text-sm text-text-muted">We strive for eco-friendly practices in our sourcing and packaging, respecting both your hair and the planet.</p>
                </div>
           </div>
      </div>

    </div>
  );
}