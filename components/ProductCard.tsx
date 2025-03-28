import Image from "next/image";

interface ProductCardProps {
  imageUrl: string;
  name: string;
  description: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ imageUrl, name, description }) => {
  return (
    <div className="block rounded-lg border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      {/* Image */}
      <div className="relative w-full aspect-[4/3]">
        <Image
          src={imageUrl}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>

      {/* Details */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">{name}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
