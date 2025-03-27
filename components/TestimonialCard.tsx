import Image from 'next/image';

interface TestimonialCardProps {
  quote: string;
  author: string;
  beforeImageUrl?: string; // Optional before image
  afterImageUrl?: string;  // Optional after image
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author, beforeImageUrl, afterImageUrl }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-beige-200 flex flex-col">
      <blockquote className="italic text-text-main mb-4 flex-grow">
        "{quote}"
      </blockquote>
      <p className="font-semibold text-right text-amber-700 mb-4">- {author}</p>

      {(beforeImageUrl || afterImageUrl) && (
        <div className="grid grid-cols-2 gap-3 mt-auto border-t border-beige-200 pt-4">
          {beforeImageUrl && (
            <div className="text-center">
              <p className="text-xs text-text-muted mb-1">Before</p>
              <div className="relative aspect-square w-full overflow-hidden rounded">
                <Image src={beforeImageUrl} alt={`${author} - Before`} fill style={{objectFit: 'cover'}} sizes="50vw"/>
              </div>
            </div>
          )}
           {afterImageUrl && (
            <div className="text-center">
               <p className="text-xs text-text-muted mb-1">After</p>
              <div className="relative aspect-square w-full overflow-hidden rounded">
                <Image src={afterImageUrl} alt={`${author} - After`} fill style={{objectFit: 'cover'}} sizes="50vw"/>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TestimonialCard;