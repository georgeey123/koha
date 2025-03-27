import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
  imageUrl: string;
  name: string;
  description: string;
  link: string; // Link to the product page or section
}

const ProductCard: React.FC<ProductCardProps> = ({ imageUrl, name, description, link }) => {
  return (
    <Link href={link} className="group block overflow-hidden rounded-lg border border-beige-200 hover:shadow-md transition-shadow duration-300 bg-white">
      <div className="relative aspect-square w-full">
        <Image
          src={imageUrl}
          alt={name}
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="font-serif text-lg font-medium text-text-main mb-1">{name}</h3>
        <p className="text-sm text-text-muted">{description}</p>
      </div>
    </Link>
  );
};

export default ProductCard;