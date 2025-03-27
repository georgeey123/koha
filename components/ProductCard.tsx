import Image from "next/image";

interface ProductCardProps {
  imageUrl: string;
  name: string;
  description: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  imageUrl,
  name,
  description,
}) => {
  return (
    <div className="block overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm hover:shadow-lg transition-shadow duration-300">
      {/* Image */}
      <div className="relative w-full h-56 overflow-hidden rounded-t-lg">
        <Image
          src={imageUrl}
          alt={name}
          fill
          style={{ objectFit: "cover" }}
          className="group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Details */}
      <div className="p-5">
        <h3 className="font-serif text-lg font-semibold text-gray-900 mb-1">
          {name}
        </h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
