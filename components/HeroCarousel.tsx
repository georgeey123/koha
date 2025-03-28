"use client";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useCallback } from "react";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

interface HeroCarouselProps {
  imageUrls: string[];
  options?: { loop: boolean };
}

const HeroCarousel: React.FC<HeroCarouselProps> = ({ imageUrls, options = { loop: true } }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="relative lg:size-2/5">
      <div ref={emblaRef} className="embla overflow-hidden">
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
      {/* Arrows for desktop users */}
     

      <button
        onClick={scrollPrev}
        className="absolute top-1/2 text-gray-600 ml-6"
      >
        <BsArrowLeftCircle size={24} />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-6  top-1/2 text-gray-600"
      >
        <BsArrowRightCircle size={24} />
      </button>
    </section>
  );
};

export default HeroCarousel;
