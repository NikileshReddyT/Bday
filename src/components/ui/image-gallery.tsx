'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { useInView } from 'framer-motion';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import Image from 'next/image';

interface ImageGalleryProps {
  images: {
    id: string;
    src: string;
    title: string;
    aspectRatio: number;
  }[];
}

export function ImageGallery({ images }: ImageGalleryProps) {
  // Distribute images into 3 columns dynamically
  const columns = React.useMemo(() => {
    const cols: typeof images[] = [[], [], []];
    images.forEach((img, idx) => {
      cols[idx % 3].push(img);
    });
    return cols;
  }, [images]);

  return (
    <div className="relative flex w-full flex-col items-center justify-center py-6 px-0">
      <div className="mx-auto grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {columns.map((colImages, col) => (
          <div key={col} className="flex flex-col gap-6">
            {colImages.map((img, index) => (
              <AnimatedImage
                key={img.id}
                alt={img.title}
                src={img.src}
                ratio={img.aspectRatio}
                placeholder={img.src}
                priority={index < 2} // Preload the top 2 images in each column for instant LCP
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

interface AnimatedImageProps {
  alt: string;
  src: string;
  className?: string;
  placeholder?: string;
  ratio: number;
  priority?: boolean;
}

function AnimatedImage({ alt, src, ratio, placeholder, priority = false }: AnimatedImageProps) {
  const ref = React.useRef(null);
  // Increase margin to 600px so images load well before scrolling to them
  const isInView = useInView(ref, { once: true, margin: "600px" });
  const [isLoading, setIsLoading] = React.useState(!priority);
  const [imgSrc, setImgSrc] = React.useState(src);

  React.useEffect(() => {
    setImgSrc(src);
    if (!priority) {
      setIsLoading(true);
    }
  }, [src, priority]);

  const handleError = () => {
    if (placeholder) {
      setImgSrc(placeholder);
    }
  };

  const isVideo = src.endsWith('.mp4');

  return (
    <AspectRatio
      ref={ref}
      ratio={ratio}
      className="bg-zinc-900/30 relative w-full overflow-hidden rounded-xl border border-white/5 shadow-md hover:shadow-xl transition-all duration-300"
    >
      {isVideo ? (
        <video
          src={src}
          autoPlay
          muted
          loop
          playsInline
          className={cn(
            'size-full rounded-xl object-cover opacity-0 transition-all duration-700 ease-out scale-[0.98]',
            isInView && 'opacity-100 scale-100'
          )}
        />
      ) : (
        <Image
          alt={alt}
          src={imgSrc}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={priority}
          className={cn(
            'rounded-xl object-cover opacity-0 transition-all duration-700 ease-out scale-[0.98]',
            (isInView || priority) && !isLoading && 'opacity-100 scale-100'
          )}
          onLoad={() => setIsLoading(false)}
          onError={handleError}
        />
      )}
    </AspectRatio>
  );
}
