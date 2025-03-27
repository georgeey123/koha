// app/products/page.tsx
import type { Metadata } from "next";
import ProductCard from "@/components/ProductCard"; // Importing the ProductCard component

export const metadata: Metadata = {
  title: "Koha Hair Oil | Products",
  description:
    "Explore Koha's natural hair oil products, designed to nourish, strengthen, and beautify your hair.",
};

// Product data
const products = [
  {
    id: "signature-olive",
    name: "Koha Signature Olive Hair Oil",
    description:
      "A rich blend focused on deep nourishment with pure olive oil.",
    imageUrl: "/images/product_img_1.jpg",
  },
  {
    id: "olive-coconut",
    name: "Koha Olive & Coconut Hair Oil",
    description:
      "A balanced mix combining the benefits of olive and coconut oils.",
    imageUrl: "/images/product_img_2.jpg",
  },
];

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <h1 className="text-3xl md:text-4xl font-serif font-semibold text-olive-600 mb-10 text-center">
        Our Hair Care Collection
      </h1>

      {/* Grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            imageUrl={product.imageUrl}
            name={product.name}
            description={product.description}
          />
        ))}
      </div>
    </div>
  );
}
