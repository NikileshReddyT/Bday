"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowLeft, Sparkles } from "lucide-react";
import {
  GALLERY_CATEGORIES,
  galleryPhotos,
  type GalleryCategory,
  type GalleryPhoto,
} from "@/lib/sanju-gallery";
import { ImageGallery } from "@/components/ui/image-gallery";

type ActiveFilter = GalleryCategory | "All";

const FILTERS: ActiveFilter[] = ["All", ...GALLERY_CATEGORIES];

export default function GalleryPage() {
  const [filter, setFilter] = useState<ActiveFilter>("All");

  const mediaItems = useMemo(() => {
    // 1. Get filtered base photos
    const basePhotos = filter === "All"
      ? galleryPhotos
      : galleryPhotos.filter((photo) => photo.category === filter);

    // 3. Map to ImageGallery expectations
    return basePhotos.map((photo) => {
      return {
        id: photo.id,
        src: photo.src,
        title: photo.title,
        aspectRatio: photo.aspectRatio,
      };
    });
  }, [filter]);

  return (
    <main className="min-h-screen bg-[#030305] text-white">
      <section className="relative overflow-hidden px-5 pb-16 pt-8 sm:px-8">
        <div className="film-grain absolute inset-0 opacity-20" />
        <div className="absolute -left-24 top-20 size-96 rounded-full bg-rose-300/10 blur-3xl pointer-events-none" />
        <div className="absolute -right-20 top-60 size-96 rounded-full bg-emerald-300/10 blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-7xl">
          <Link
            href="/#gallery-teaser"
            className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-4 py-2 text-sm text-white/72 backdrop-blur transition hover:bg-white/13"
          >
            <ArrowLeft className="size-4" />
            Back to birthday film
          </Link>

          <div className="mt-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.42em] text-amber-100">
                Sanju&apos;s memory archive
              </p>
              <h1 className="mt-4 max-w-4xl text-5xl font-semibold leading-[0.96] sm:text-7xl">
                Every frame that keeps a little piece of you
              </h1>
              <p className="mt-6 max-w-2xl leading-7 text-white/66">
                A gorgeous masonry gallery featuring real snapshots, moments, and scenes in their true, authentic aspect ratios.
              </p>
            </div>
            <div className="rounded-[8px] border border-white/10 bg-white/[0.06] px-5 py-4 backdrop-blur shrink-0 self-start lg:self-auto">
              <div className="flex items-center gap-3">
                <Sparkles className="size-5 text-rose-100" />
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/45">
                    Collection
                  </p>
                  <p className="mt-1 text-2xl font-semibold">{mediaItems.length} items</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-9 flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {FILTERS.map((item) => {
              const selected = item === filter;
              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => setFilter(item)}
                  className={`shrink-0 rounded-full border px-4 py-2 text-sm transition ${
                    selected
                      ? "border-rose-100 bg-rose-100 text-rose-950"
                      : "border-white/12 bg-white/7 text-white/68 hover:bg-white/12"
                  }`}
                >
                  {item}
                </button>
              );
            })}
          </div>

          <div className="mt-8">
            <ImageGallery images={mediaItems} />
          </div>
        </div>
      </section>
    </main>
  );
}
