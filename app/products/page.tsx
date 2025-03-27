// app/products/page.tsx
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Koha Hair Oil | Products',
  description: 'Explore Koha\'s natural hair oil products, designed to nourish, strengthen, and beautify your hair.',
};

// --- CORRECTED product definitions ---
const products = [
    {
        id: 'signature-olive', // Made ID unique
        name: 'Koha Signature Olive Hair Oil',
        description: 'A rich blend focused on deep nourishment with pure olive oil.', // Added
        benefits: [ // Added - Must be an array
            'Intense hydration for dry hair',
            'Adds natural shine',
            'Helps reduce split ends',
        ],
        usage: 'Apply generously from root to tip. Leave for 1 hour or overnight. Wash thoroughly.', // Added
        ingredients: 'Pure Olive Oil, Vitamin E, Rosemary Extract.', // Added
        imageUrl: '/images/product_img_1.jpg', // Corrected path (removed 'public')
    },
    {
        id: 'olive-coconut', // Made ID unique
        name: 'Koha Olive & Coconut Hair Oil',
        description: 'A balanced mix combining the benefits of olive and coconut oils.', // Added
        benefits: [ // Added - Must be an array
            'Strengthens hair structure',
            'Promotes scalp health',
            'Lightweight moisture',
        ],
        usage: 'Massage into scalp and through hair lengths. Use 2-3 times weekly.', // Added
        ingredients: 'Olive Oil, Coconut Oil, Jojoba Oil, Lavender Essence.', // Added
        imageUrl: '/images/product_img_2.jpg', // Corrected path (removed 'public')
    },
    // Add more products here following the same structure
];
// --- End correction ---

export default function ProductsPage() {
  // console.log('Products Data:', products); // You can remove this now if desired

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <h1 className="text-3xl md:text-4xl font-serif font-semibold text-olive-600 mb-10 text-center">
        Our Hair Care Collection
      </h1>

        {products.map((product) => (
             // Use the unique product ID for the key and section ID
             <section key={product.id} id={product.id} className="mb-16 scroll-mt-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start bg-white p-6 md:p-10 rounded-lg shadow-sm border border-beige-200">
                    {/* Product Image */}
                    <div className="relative aspect-square rounded-lg overflow-hidden">
                        <Image
                         src={product.imageUrl} // Uses the corrected imageUrl
                         alt={product.name}
                         fill
                         style={{ objectFit: 'cover' }}
                         sizes="(max-width: 768px) 100vw, 50vw"
                         priority // You might only want priority on the first product if many
                        />
                    </div>

                    {/* Product Details - Now these properties exist */}
                    <div className="prose max-w-none text-text-muted prose-headings:font-serif prose-headings:text-text-main prose-strong:text-text-main">
                        <h2 className="text-2xl md:text-3xl font-medium !mb-3">{product.name}</h2>
                        {/* Check if description exists before rendering */}
                        {product.description && <p className="text-base">{product.description}</p>}

                        {/* Check if benefits exists AND has items before rendering */}
                        {product.benefits && product.benefits.length > 0 && (
                            <>
                                <h3 className="text-xl font-medium !mt-6 !mb-2">Benefits:</h3>
                                <ul className="list-disc list-outside pl-5 space-y-1 text-sm">
                                    {product.benefits.map((benefit, i) => <li key={i}>{benefit}</li>)}
                                </ul>
                            </>
                        )}

                        {/* Check if usage exists before rendering */}
                        {product.usage && (
                            <>
                                <h3 className="text-xl font-medium !mt-6 !mb-2">How to Use:</h3>
                                <p className="text-sm">{product.usage}</p>
                            </>
                        )}

                         {/* Check if ingredients exists before rendering */}
                        {product.ingredients && (
                            <>
                                <h3 className="text-xl font-medium !mt-6 !mb-2">Key Ingredients:</h3>
                                <p className="text-sm italic">{product.ingredients}</p>
                            </>
                        )}
                    </div>
                </div>
            </section>
        ))}
    </div>
  );
}