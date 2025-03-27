// src/components/HeroCarousel.tsx (REVISED)
'use client';

import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import type { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel';
import Image from 'next/image';

interface HeroCarouselProps {
  imageUrls: string[];
  options?: EmblaOptionsType; // Allow passing Embla options
}

export function HeroCarousel({ imageUrls, options }: HeroCarouselProps) {
    const [emblaRef, emblaApi] = useEmblaCarousel(options);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  
    const scrollTo = useCallback(
      (index: number) => emblaApi && emblaApi.scrollTo(index),
      [emblaApi]
    );
  
    // Type hint uses the imported EmblaCarouselType
    const onInit = useCallback((emblaApi: EmblaCarouselType) => {
      setScrollSnaps(emblaApi.scrollSnapList());
    }, []);
  
    // Type hint uses the imported EmblaCarouselType
    const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    }, []);
  
    useEffect(() => {
      if (!emblaApi) return;
      onInit(emblaApi);
      onSelect(emblaApi);
      emblaApi.on('reInit', onInit);
      emblaApi.on('reInit', onSelect);
      emblaApi.on('select', onSelect);
    }, [emblaApi, onInit, onSelect]);
  
    // ... (rest of the component remains the same) ...
  
     // Handle no images case
     if (!imageUrls || imageUrls.length === 0) {
         return (
           <div className="aspect-[16/7] min-h-[300px] md:min-h-[400px] lg:min-h-[550px] bg-beige-200 flex items-center justify-center container mx-auto px-4 sm:px-6 lg:px-8">
             <p className="text-text-muted">No hero images available.</p>
           </div>
         );
     }
  
     return (
       <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
         <div className="overflow-hidden rounded-lg" ref={emblaRef}>
           <div className="flex">
             {imageUrls.map((src, index) => (
               <div className="relative flex-[0_0_100%] aspect-[16/7] min-h-[300px] md:min-h-[400px] lg:min-h-[550px]" key={index}>
                 <Image
                   src={src}
                   alt={`Koha promotional image ${index + 1}`}
                   fill
                   style={{ objectFit: 'cover' }}
                   priority={index === 0}
                   sizes="100vw"
                 />
               </div>
             ))}
           </div>
         </div>
  
         <div className="absolute bottom-4 left-0 right-0 flex justify-center items-center gap-2">
           {scrollSnaps.map((_, index) => (
             <button
               key={index}
               onClick={() => scrollTo(index)}
               className={`w-2 h-2 rounded-full transition-colors ${
                 index === selectedIndex ? 'bg-white' : 'bg-white/40 hover:bg-white/70'
               }`}
               aria-label={`Go to slide ${index + 1}`}
             />
           ))}
         </div>
       </div>
     );
  }
  
  export default HeroCarousel;