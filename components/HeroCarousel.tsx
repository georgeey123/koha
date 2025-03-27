"use client";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

interface HeroCarouselProps {
  imageUrls: string[];
  options?: { loop: boolean };
}

const HeroCarousel: React.FC<HeroCarouselProps> = ({ imageUrls, options = { loop: true } }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  return (
    <section className="relative w-full h-[500px] overflow-hidden bg-background">
      <div ref={emblaRef} className="embla">
        <div className="embla__container flex">
          {imageUrls.map((src, index) => (
            <div key={index} className="embla__slide flex-[0_0_100%]">
              <Image
                src={src}
                alt={`Hero ${index + 1}`}
                width={1920}
                height={500}
                className="w-full h-full object-cover rounded-lg"
                priority
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;
