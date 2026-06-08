import type { LucideIcon } from "lucide-react";
import { Bird, Camera, Heart, MapPin, Mountain, PawPrint, Sparkles } from "lucide-react";

export type GalleryCategory =
  | "Photos of Her"
  | "Photos Taken by Her";

export type GalleryPhoto = {
  id: string;
  src: string;
  category: GalleryCategory;
  title: string;
  aspectRatio: number;
  featured?: boolean;
};

export type MemoryPoint = {
  title: string;
  place: string;
  dateLabel: string;
  note: string;
  photo?: string;
  icon: LucideIcon;
};

export const GALLERY_CATEGORIES: GalleryCategory[] = [
  "Photos of Her",
  "Photos Taken by Her",
];

export const galleryPhotos: GalleryPhoto[] = [
  {
    "id": "gallery-photo-1",
    "src": "/sanju/gallery/WhatsApp Image 2026-06-08 at 5.24.12 PM.jpeg",
    "category": "Photos of Her",
    "title": "Memory 1",
    "aspectRatio": 1.3333333333333333,
    "featured": true
  },
  {
    "id": "gallery-photo-2",
    "src": "/sanju/gallery/WhatsApp Image 2026-06-08 at 5.24.29 PM.jpeg",
    "category": "Photos of Her",
    "title": "Memory 2",
    "aspectRatio": 1.3333333333333333,
    "featured": true
  },
  {
    "id": "gallery-photo-3",
    "src": "/sanju/gallery/WhatsApp Image 2026-06-08 at 5.27.10 PM.jpeg",
    "category": "Photos of Her",
    "title": "Memory 3",
    "aspectRatio": 0.75,
    "featured": true
  },
  {
    "id": "gallery-photo-4",
    "src": "/sanju/gallery/WhatsApp Image 2026-06-08 at 5.27.59 PM.jpeg",
    "category": "Photos of Her",
    "title": "Memory 4",
    "aspectRatio": 0.59921875,
    "featured": true
  },
  {
    "id": "gallery-photo-5",
    "src": "/sanju/gallery/WhatsApp Image 2026-06-08 at 5.29.19 PM.jpeg",
    "category": "Photos of Her",
    "title": "Memory 5",
    "aspectRatio": 1,
    "featured": true
  },
  {
    "id": "gallery-photo-6",
    "src": "/sanju/gallery/WhatsApp Image 2026-06-08 at 5.29.42 PM.jpeg",
    "category": "Photos of Her",
    "title": "Memory 6",
    "aspectRatio": 0.75,
    "featured": true
  },
  {
    "id": "gallery-photo-7",
    "src": "/sanju/gallery/WhatsApp Image 2026-06-08 at 5.33.12 PM.jpeg",
    "category": "Photos of Her",
    "title": "Memory 7",
    "aspectRatio": 0.75,
    "featured": true
  },
  {
    "id": "gallery-photo-8",
    "src": "/sanju/gallery/WhatsApp Image 2026-06-08 at 5.33.13 PM.jpeg",
    "category": "Photos of Her",
    "title": "Memory 8",
    "aspectRatio": 0.75,
    "featured": true
  },
  {
    "id": "gallery-photo-9",
    "src": "/sanju/gallery/WhatsApp Image 2026-06-08 at 5.33.16 PM.jpeg",
    "category": "Photos of Her",
    "title": "Memory 9",
    "aspectRatio": 1.3333333333333333,
    "featured": false
  },
  {
    "id": "gallery-photo-10",
    "src": "/sanju/gallery/WhatsApp Image 2026-06-08 at 5.34.03 PM.jpeg",
    "category": "Photos of Her",
    "title": "Memory 10",
    "aspectRatio": 1.5458937198067633,
    "featured": false
  },
  {
    "id": "gallery-photo-11",
    "src": "/sanju/gallery/WhatsApp Image 2026-06-08 at 5.36.08 PM (1).jpeg",
    "category": "Photos of Her",
    "title": "Memory 11",
    "aspectRatio": 0.75,
    "featured": false
  },
  {
    "id": "gallery-photo-12",
    "src": "/sanju/gallery/WhatsApp Image 2026-06-08 at 5.36.08 PM.jpeg",
    "category": "Photos of Her",
    "title": "Memory 12",
    "aspectRatio": 0.75,
    "featured": false
  },
  {
    "id": "gallery-photo-13",
    "src": "/sanju/gallery/WhatsApp Image 2026-06-08 at 5.36.09 PM.jpeg",
    "category": "Photos of Her",
    "title": "Memory 13",
    "aspectRatio": 1.3559322033898304,
    "featured": false
  },
  {
    "id": "gallery-photo-14",
    "src": "/sanju/gallery/WhatsApp Image 2026-06-08 at 5.37.00 PM (1).jpeg",
    "category": "Photos of Her",
    "title": "Memory 14",
    "aspectRatio": 1.3333333333333333,
    "featured": false
  },
  {
    "id": "gallery-photo-15",
    "src": "/sanju/gallery/WhatsApp Image 2026-06-08 at 5.37.00 PM (2).jpeg",
    "category": "Photos of Her",
    "title": "Memory 15",
    "aspectRatio": 0.75,
    "featured": false
  },
  {
    "id": "gallery-photo-16",
    "src": "/sanju/gallery/WhatsApp Image 2026-06-08 at 5.37.00 PM (3).jpeg",
    "category": "Photos of Her",
    "title": "Memory 16",
    "aspectRatio": 0.75,
    "featured": false
  },
  {
    "id": "gallery-photo-17",
    "src": "/sanju/gallery/WhatsApp Image 2026-06-08 at 5.37.00 PM.jpeg",
    "category": "Photos of Her",
    "title": "Memory 17",
    "aspectRatio": 0.75,
    "featured": false
  },
  {
    "id": "gallery-photo-18",
    "src": "/sanju/gallery/WhatsApp Image 2026-06-08 at 5.38.27 PM.jpeg",
    "category": "Photos of Her",
    "title": "Memory 18",
    "aspectRatio": 0.75,
    "featured": false
  },
  {
    "id": "gallery-photo-19",
    "src": "/sanju/gallery/WhatsApp Image 2026-06-08 at 5.38.28 PM (1).jpeg",
    "category": "Photos of Her",
    "title": "Memory 19",
    "aspectRatio": 0.75,
    "featured": false
  },
  {
    "id": "gallery-photo-20",
    "src": "/sanju/gallery/WhatsApp Image 2026-06-08 at 5.38.28 PM.jpeg",
    "category": "Photos of Her",
    "title": "Memory 20",
    "aspectRatio": 0.75,
    "featured": false
  },
  {
    "id": "gallery-photo-21",
    "src": "/sanju/gallery/WhatsApp Image 2026-06-08 at 5.38.29 PM.jpeg",
    "category": "Photos of Her",
    "title": "Memory 21",
    "aspectRatio": 0.75,
    "featured": false
  },
  {
    "id": "gallery-photo-22",
    "src": "/sanju/gallery/WhatsApp Image 2026-06-08 at 5.38.35 PM.jpeg",
    "category": "Photos of Her",
    "title": "Memory 22",
    "aspectRatio": 0.75,
    "featured": false
  },
  {
    "id": "gallery-photo-23",
    "src": "/sanju/gallery/WhatsApp Image 2026-06-08 at 5.38.50 PM.jpeg",
    "category": "Photos of Her",
    "title": "Memory 23",
    "aspectRatio": 1.3333333333333333,
    "featured": false
  },
  {
    "id": "gallery-photo-24",
    "src": "/sanju/gallery/WhatsApp Image 2026-06-08 at 5.38.54 PM.jpeg",
    "category": "Photos of Her",
    "title": "Memory 24",
    "aspectRatio": 1.5,
    "featured": false
  },
  {
    "id": "gallery-photo-25",
    "src": "/sanju/gallery/WhatsApp Image 2026-06-08 at 5.40.21 PM (1).jpeg",
    "category": "Photos of Her",
    "title": "Memory 25",
    "aspectRatio": 0.75,
    "featured": false
  },
  {
    "id": "gallery-photo-26",
    "src": "/sanju/gallery/WhatsApp Image 2026-06-08 at 5.40.21 PM (2).jpeg",
    "category": "Photos of Her",
    "title": "Memory 26",
    "aspectRatio": 0.78203125,
    "featured": false
  },
  {
    "id": "gallery-photo-27",
    "src": "/sanju/gallery/WhatsApp Image 2026-06-08 at 5.40.21 PM (3).jpeg",
    "category": "Photos of Her",
    "title": "Memory 27",
    "aspectRatio": 0.75,
    "featured": false
  },
  {
    "id": "gallery-photo-28",
    "src": "/sanju/gallery/WhatsApp Image 2026-06-08 at 5.40.21 PM.jpeg",
    "category": "Photos of Her",
    "title": "Memory 28",
    "aspectRatio": 0.751863684771033,
    "featured": false
  },
  {
    "id": "gallery-photo-29",
    "src": "/sanju/gallery/WhatsApp Image 2026-06-08 at 5.47.15 PM (1).jpeg",
    "category": "Photos of Her",
    "title": "Memory 29",
    "aspectRatio": 0.75,
    "featured": false
  },
  {
    "id": "gallery-photo-30",
    "src": "/sanju/gallery/WhatsApp Image 2026-06-08 at 5.47.15 PM (2).jpeg",
    "category": "Photos of Her",
    "title": "Memory 30",
    "aspectRatio": 0.75,
    "featured": false
  },
  {
    "id": "gallery-photo-31",
    "src": "/sanju/gallery/WhatsApp Image 2026-06-08 at 5.47.15 PM.jpeg",
    "category": "Photos of Her",
    "title": "Memory 31",
    "aspectRatio": 0.75,
    "featured": false
  },
  {
    "id": "gallery-photo-32",
    "src": "/sanju/gallery/WhatsApp Image 2026-06-08 at 5.47.16 PM (1).jpeg",
    "category": "Photos of Her",
    "title": "Memory 32",
    "aspectRatio": 1.3333333333333333,
    "featured": false
  },
  {
    "id": "gallery-photo-33",
    "src": "/sanju/gallery/WhatsApp Image 2026-06-08 at 5.47.16 PM (2).jpeg",
    "category": "Photos of Her",
    "title": "Memory 33",
    "aspectRatio": 0.75,
    "featured": false
  },
  {
    "id": "gallery-photo-34",
    "src": "/sanju/gallery/WhatsApp Image 2026-06-08 at 5.47.16 PM (3).jpeg",
    "category": "Photos of Her",
    "title": "Memory 34",
    "aspectRatio": 0.75,
    "featured": false
  },
  {
    "id": "gallery-photo-35",
    "src": "/sanju/gallery/WhatsApp Image 2026-06-08 at 5.47.16 PM.jpeg",
    "category": "Photos of Her",
    "title": "Memory 35",
    "aspectRatio": 0.75,
    "featured": false
  },
  {
    "id": "gallery-photo-36",
    "src": "/sanju/gallery/WhatsApp Image 2026-06-08 at 5.48.40 PM (1).jpeg",
    "category": "Photos of Her",
    "title": "Memory 36",
    "aspectRatio": 1.6,
    "featured": false
  },
  {
    "id": "gallery-photo-37",
    "src": "/sanju/gallery/WhatsApp Image 2026-06-08 at 5.48.40 PM.jpeg",
    "category": "Photos of Her",
    "title": "Memory 37",
    "aspectRatio": 0.6666666666666666,
    "featured": false
  },
  {
    "id": "gallery-photo-38",
    "src": "/sanju/gallery/WhatsApp Image 2026-06-08 at 8.07.29 PM.jpeg",
    "category": "Photos of Her",
    "title": "Memory 38",
    "aspectRatio": 0.75,
    "featured": false
  },
  {
    "id": "gallery-photo-39",
    "src": "/sanju/gallery/WhatsApp Image 2026-06-08 at 8.07.30 PM (1).jpeg",
    "category": "Photos of Her",
    "title": "Memory 39",
    "aspectRatio": 0.75,
    "featured": false
  },
  {
    "id": "gallery-photo-40",
    "src": "/sanju/gallery/WhatsApp Image 2026-06-08 at 8.07.30 PM (2).jpeg",
    "category": "Photos of Her",
    "title": "Memory 40",
    "aspectRatio": 0.75,
    "featured": false
  },
  {
    "id": "gallery-photo-41",
    "src": "/sanju/gallery/WhatsApp Image 2026-06-08 at 8.07.30 PM.jpeg",
    "category": "Photos of Her",
    "title": "Memory 41",
    "aspectRatio": 0.75,
    "featured": false
  },
  {
    "id": "gallery-photo-42",
    "src": "/sanju/gallery/WhatsApp Image 2026-06-08 at 8.07.31 PM (1).jpeg",
    "category": "Photos of Her",
    "title": "Memory 42",
    "aspectRatio": 1.3333333333333333,
    "featured": false
  },
  {
    "id": "gallery-photo-43",
    "src": "/sanju/gallery/WhatsApp Image 2026-06-08 at 8.07.31 PM.jpeg",
    "category": "Photos of Her",
    "title": "Memory 43",
    "aspectRatio": 0.75,
    "featured": false
  },
  {
    "id": "gallery-photo-44",
    "src": "/sanju/gallery/WhatsApp Image 2026-06-08 at 8.07.32 PM (1).jpeg",
    "category": "Photos of Her",
    "title": "Memory 44",
    "aspectRatio": 0.75,
    "featured": false
  },
  {
    "id": "gallery-photo-45",
    "src": "/sanju/gallery/WhatsApp Image 2026-06-08 at 8.07.32 PM.jpeg",
    "category": "Photos of Her",
    "title": "Memory 45",
    "aspectRatio": 0.75,
    "featured": false
  },
  {
    "id": "gallery-photo-46",
    "src": "/sanju/gallery/WhatsApp Image 2026-06-08 at 8.07.33 PM (1).jpeg",
    "category": "Photos of Her",
    "title": "Memory 46",
    "aspectRatio": 1.3333333333333333,
    "featured": false
  },
  {
    "id": "gallery-photo-47",
    "src": "/sanju/gallery/WhatsApp Image 2026-06-08 at 8.07.33 PM.jpeg",
    "category": "Photos of Her",
    "title": "Memory 47",
    "aspectRatio": 0.75,
    "featured": false
  },
  {
    "id": "gallery-photo-48",
    "src": "/sanju/gallery/WhatsApp Image 2026-06-08 at 8.07.34 PM (1).jpeg",
    "category": "Photos of Her",
    "title": "Memory 48",
    "aspectRatio": 0.75,
    "featured": false
  },
  {
    "id": "gallery-photo-49",
    "src": "/sanju/gallery/WhatsApp Image 2026-06-08 at 8.07.34 PM.jpeg",
    "category": "Photos of Her",
    "title": "Memory 49",
    "aspectRatio": 0.75,
    "featured": false
  },
  {
    "id": "gallery-photo-50",
    "src": "/sanju/gallery/WhatsApp Image 2026-06-08 at 8.07.35 PM (1).jpeg",
    "category": "Photos of Her",
    "title": "Memory 50",
    "aspectRatio": 0.75,
    "featured": false
  },
  {
    "id": "gallery-photo-51",
    "src": "/sanju/gallery/WhatsApp Image 2026-06-08 at 8.07.35 PM (2).jpeg",
    "category": "Photos of Her",
    "title": "Memory 51",
    "aspectRatio": 0.75,
    "featured": false
  },
  {
    "id": "gallery-photo-52",
    "src": "/sanju/gallery/WhatsApp Image 2026-06-08 at 8.07.35 PM.jpeg",
    "category": "Photos of Her",
    "title": "Memory 52",
    "aspectRatio": 0.75,
    "featured": false
  },
  {
    "id": "gallery-photo-53",
    "src": "/sanju/gallery/WhatsApp Image 2026-06-08 at 8.07.36 PM (1).jpeg",
    "category": "Photos of Her",
    "title": "Memory 53",
    "aspectRatio": 0.75,
    "featured": false
  },
  {
    "id": "gallery-photo-54",
    "src": "/sanju/gallery/WhatsApp Image 2026-06-08 at 8.07.36 PM (2).jpeg",
    "category": "Photos of Her",
    "title": "Memory 54",
    "aspectRatio": 0.66796875,
    "featured": false
  },
  {
    "id": "gallery-photo-55",
    "src": "/sanju/gallery/WhatsApp Image 2026-06-08 at 8.07.36 PM.jpeg",
    "category": "Photos of Her",
    "title": "Memory 55",
    "aspectRatio": 0.75,
    "featured": false
  },
  {
    "id": "gallery-photo-56",
    "src": "/sanju/gallery/WhatsApp Image 2026-06-08 at 8.07.37 PM (1).jpeg",
    "category": "Photos of Her",
    "title": "Memory 56",
    "aspectRatio": 0.75,
    "featured": false
  },
  {
    "id": "gallery-photo-57",
    "src": "/sanju/gallery/WhatsApp Image 2026-06-08 at 8.07.37 PM (2).jpeg",
    "category": "Photos of Her",
    "title": "Memory 57",
    "aspectRatio": 1.8305084745762712,
    "featured": false
  },
  {
    "id": "gallery-photo-58",
    "src": "/sanju/gallery/WhatsApp Image 2026-06-08 at 8.07.37 PM.jpeg",
    "category": "Photos of Her",
    "title": "Memory 58",
    "aspectRatio": 0.66796875,
    "featured": false
  },
  {
    "id": "gallery-photo-59",
    "src": "/sanju/gallery/WhatsApp Image 2026-06-08 at 8.07.38 PM (1).jpeg",
    "category": "Photos of Her",
    "title": "Memory 59",
    "aspectRatio": 1.8881118881118881,
    "featured": false
  },
  {
    "id": "gallery-photo-60",
    "src": "/sanju/gallery/WhatsApp Image 2026-06-08 at 8.07.38 PM (2).jpeg",
    "category": "Photos of Her",
    "title": "Memory 60",
    "aspectRatio": 0.75,
    "featured": false
  },
  {
    "id": "gallery-photo-61",
    "src": "/sanju/gallery/WhatsApp Image 2026-06-08 at 8.07.38 PM.jpeg",
    "category": "Photos of Her",
    "title": "Memory 61",
    "aspectRatio": 1.3333333333333333,
    "featured": false
  },
  {
    "id": "gallery-photo-62",
    "src": "/sanju/gallery/WhatsApp Image 2026-06-08 at 8.07.39 PM (1).jpeg",
    "category": "Photos of Her",
    "title": "Memory 62",
    "aspectRatio": 0.75,
    "featured": false
  },
  {
    "id": "gallery-photo-63",
    "src": "/sanju/gallery/WhatsApp Image 2026-06-08 at 8.07.39 PM (2).jpeg",
    "category": "Photos of Her",
    "title": "Memory 63",
    "aspectRatio": 0.4599609375,
    "featured": false
  },
  {
    "id": "gallery-photo-64",
    "src": "/sanju/gallery/WhatsApp Image 2026-06-08 at 8.07.39 PM.jpeg",
    "category": "Photos of Her",
    "title": "Memory 64",
    "aspectRatio": 0.75,
    "featured": false
  },
  {
    "id": "gallery-photo-65",
    "src": "/sanju/gallery/WhatsApp Image 2026-06-08 at 8.07.40 PM (1).jpeg",
    "category": "Photos of Her",
    "title": "Memory 65",
    "aspectRatio": 0.75,
    "featured": false
  },
  {
    "id": "gallery-photo-66",
    "src": "/sanju/gallery/WhatsApp Image 2026-06-08 at 8.07.40 PM (2).jpeg",
    "category": "Photos of Her",
    "title": "Memory 66",
    "aspectRatio": 0.75,
    "featured": false
  },
  {
    "id": "gallery-photo-67",
    "src": "/sanju/gallery/WhatsApp Image 2026-06-08 at 8.07.40 PM (3).jpeg",
    "category": "Photos of Her",
    "title": "Memory 67",
    "aspectRatio": 1.4970760233918128,
    "featured": false
  },
  {
    "id": "gallery-photo-68",
    "src": "/sanju/gallery/WhatsApp Image 2026-06-08 at 8.07.40 PM.jpeg",
    "category": "Photos of Her",
    "title": "Memory 68",
    "aspectRatio": 0.5462962962962963,
    "featured": false
  },
  {
    "id": "gallery-photo-69",
    "src": "/sanju/gallery/WhatsApp Image 2026-06-08 at 8.07.41 PM (1).jpeg",
    "category": "Photos of Her",
    "title": "Memory 69",
    "aspectRatio": 1.336116910229645,
    "featured": false
  },
  {
    "id": "gallery-photo-70",
    "src": "/sanju/gallery/WhatsApp Image 2026-06-08 at 8.07.41 PM (2).jpeg",
    "category": "Photos of Her",
    "title": "Memory 70",
    "aspectRatio": 0.75,
    "featured": false
  },
  {
    "id": "gallery-photo-71",
    "src": "/sanju/gallery/WhatsApp Image 2026-06-08 at 8.07.41 PM.jpeg",
    "category": "Photos of Her",
    "title": "Memory 71",
    "aspectRatio": 0.75,
    "featured": false
  },
  {
    "id": "gallery-photo-72",
    "src": "/sanju/gallery/WhatsApp Image 2026-06-08 at 8.07.42 PM (1).jpeg",
    "category": "Photos of Her",
    "title": "Memory 72",
    "aspectRatio": 0.75,
    "featured": false
  },
  {
    "id": "gallery-photo-73",
    "src": "/sanju/gallery/WhatsApp Image 2026-06-08 at 8.07.42 PM (2).jpeg",
    "category": "Photos of Her",
    "title": "Memory 73",
    "aspectRatio": 0.7484375,
    "featured": false
  },
  {
    "id": "gallery-photo-74",
    "src": "/sanju/gallery/WhatsApp Image 2026-06-08 at 8.07.42 PM.jpeg",
    "category": "Photos of Her",
    "title": "Memory 74",
    "aspectRatio": 0.75,
    "featured": false
  },
  {
    "id": "gallery-photo-75",
    "src": "/sanju/gallery/WhatsApp Image 2026-06-08 at 8.07.43 PM (1).jpeg",
    "category": "Photos of Her",
    "title": "Memory 75",
    "aspectRatio": 0.5625,
    "featured": false
  },
  {
    "id": "gallery-photo-76",
    "src": "/sanju/gallery/WhatsApp Image 2026-06-08 at 8.07.43 PM (2).jpeg",
    "category": "Photos of Her",
    "title": "Memory 76",
    "aspectRatio": 1,
    "featured": false
  },
  {
    "id": "gallery-photo-77",
    "src": "/sanju/gallery/WhatsApp Image 2026-06-08 at 8.07.43 PM (3).jpeg",
    "category": "Photos of Her",
    "title": "Memory 77",
    "aspectRatio": 1,
    "featured": false
  },
  {
    "id": "gallery-photo-78",
    "src": "/sanju/gallery/WhatsApp Image 2026-06-08 at 8.07.43 PM.jpeg",
    "category": "Photos of Her",
    "title": "Memory 78",
    "aspectRatio": 0.75,
    "featured": false
  },
  {
    "id": "gallery-photo-79",
    "src": "/sanju/gallery/WhatsApp Image 2026-06-08 at 8.07.44 PM (1).jpeg",
    "category": "Photos of Her",
    "title": "Memory 79",
    "aspectRatio": 0.8022284122562674,
    "featured": false
  },
  {
    "id": "gallery-photo-80",
    "src": "/sanju/gallery/WhatsApp Image 2026-06-08 at 8.07.44 PM (2).jpeg",
    "category": "Photos of Her",
    "title": "Memory 80",
    "aspectRatio": 0.8022284122562674,
    "featured": false
  },
  {
    "id": "gallery-photo-81",
    "src": "/sanju/gallery/WhatsApp Image 2026-06-08 at 8.07.44 PM.jpeg",
    "category": "Photos of Her",
    "title": "Memory 81",
    "aspectRatio": 0.8015665796344648,
    "featured": false
  },
  {
    "id": "gallery-photo-82",
    "src": "/sanju/gallery/WhatsApp Image 2026-06-08 at 8.07.45 PM (1).jpeg",
    "category": "Photos of Her",
    "title": "Memory 82",
    "aspectRatio": 0.8022284122562674,
    "featured": false
  },
  {
    "id": "gallery-photo-83",
    "src": "/sanju/gallery/WhatsApp Image 2026-06-08 at 8.07.45 PM (2).jpeg",
    "category": "Photos of Her",
    "title": "Memory 83",
    "aspectRatio": 0.5625,
    "featured": false
  },
  {
    "id": "gallery-photo-84",
    "src": "/sanju/gallery/WhatsApp Image 2026-06-08 at 8.07.45 PM (3).jpeg",
    "category": "Photos of Her",
    "title": "Memory 84",
    "aspectRatio": 1,
    "featured": false
  },
  {
    "id": "gallery-photo-85",
    "src": "/sanju/gallery/WhatsApp Image 2026-06-08 at 8.07.45 PM.jpeg",
    "category": "Photos of Her",
    "title": "Memory 85",
    "aspectRatio": 0.8022284122562674,
    "featured": false
  },
  {
    "id": "gallery-photo-86",
    "src": "/sanju/gallery/WhatsApp Image 2026-06-08 at 8.07.46 PM (1).jpeg",
    "category": "Photos of Her",
    "title": "Memory 86",
    "aspectRatio": 0.7484375,
    "featured": false
  },
  {
    "id": "gallery-photo-87",
    "src": "/sanju/gallery/WhatsApp Image 2026-06-08 at 8.07.46 PM (2).jpeg",
    "category": "Photos of Her",
    "title": "Memory 87",
    "aspectRatio": 0.7484375,
    "featured": false
  },
  {
    "id": "gallery-photo-88",
    "src": "/sanju/gallery/WhatsApp Image 2026-06-08 at 8.07.46 PM.jpeg",
    "category": "Photos of Her",
    "title": "Memory 88",
    "aspectRatio": 0.7484375,
    "featured": false
  },
  {
    "id": "gallery-photo-89",
    "src": "/sanju/gallery/WhatsApp Image 2026-06-08 at 8.07.47 PM (1).jpeg",
    "category": "Photos of Her",
    "title": "Memory 89",
    "aspectRatio": 1,
    "featured": false
  },
  {
    "id": "gallery-photo-90",
    "src": "/sanju/gallery/WhatsApp Image 2026-06-08 at 8.07.47 PM (2).jpeg",
    "category": "Photos of Her",
    "title": "Memory 90",
    "aspectRatio": 1,
    "featured": false
  },
  {
    "id": "gallery-photo-91",
    "src": "/sanju/gallery/WhatsApp Image 2026-06-08 at 8.07.47 PM (3).jpeg",
    "category": "Photos of Her",
    "title": "Memory 91",
    "aspectRatio": 0.75,
    "featured": false
  },
  {
    "id": "gallery-photo-92",
    "src": "/sanju/gallery/WhatsApp Image 2026-06-08 at 8.07.47 PM.jpeg",
    "category": "Photos of Her",
    "title": "Memory 92",
    "aspectRatio": 0.7484375,
    "featured": false
  },
  {
    "id": "gallery-photo-93",
    "src": "/sanju/gallery/WhatsApp Image 2026-06-08 at 8.07.48 PM (1).jpeg",
    "category": "Photos of Her",
    "title": "Memory 93",
    "aspectRatio": 1,
    "featured": false
  },
  {
    "id": "gallery-photo-94",
    "src": "/sanju/gallery/WhatsApp Image 2026-06-08 at 8.07.48 PM (2).jpeg",
    "category": "Photos of Her",
    "title": "Memory 94",
    "aspectRatio": 1,
    "featured": false
  },
  {
    "id": "gallery-photo-95",
    "src": "/sanju/gallery/WhatsApp Image 2026-06-08 at 8.07.48 PM.jpeg",
    "category": "Photos of Her",
    "title": "Memory 95",
    "aspectRatio": 0.75,
    "featured": false
  },
  {
    "id": "gallery-photo-96",
    "src": "/sanju/gallery/WhatsApp Image 2026-06-08 at 8.07.49 PM (1).jpeg",
    "category": "Photos of Her",
    "title": "Memory 96",
    "aspectRatio": 0.8,
    "featured": false
  },
  {
    "id": "gallery-photo-97",
    "src": "/sanju/gallery/WhatsApp Image 2026-06-08 at 8.07.49 PM (2).jpeg",
    "category": "Photos of Her",
    "title": "Memory 97",
    "aspectRatio": 0.8022284122562674,
    "featured": false
  },
  {
    "id": "gallery-photo-98",
    "src": "/sanju/gallery/WhatsApp Image 2026-06-08 at 8.07.49 PM.jpeg",
    "category": "Photos of Her",
    "title": "Memory 98",
    "aspectRatio": 1,
    "featured": false
  },
  {
    "id": "gallery-photo-99",
    "src": "/sanju/gallery/WhatsApp Image 2026-06-08 at 8.07.50 PM (1).jpeg",
    "category": "Photos of Her",
    "title": "Memory 99",
    "aspectRatio": 1,
    "featured": false
  },
  {
    "id": "gallery-photo-100",
    "src": "/sanju/gallery/WhatsApp Image 2026-06-08 at 8.07.50 PM (2).jpeg",
    "category": "Photos of Her",
    "title": "Memory 100",
    "aspectRatio": 1,
    "featured": false
  },
  {
    "id": "gallery-photo-101",
    "src": "/sanju/gallery/WhatsApp Image 2026-06-08 at 8.07.50 PM (3).jpeg",
    "category": "Photos of Her",
    "title": "Memory 101",
    "aspectRatio": 1,
    "featured": false
  },
  {
    "id": "gallery-photo-102",
    "src": "/sanju/gallery/WhatsApp Image 2026-06-08 at 8.07.50 PM.jpeg",
    "category": "Photos of Her",
    "title": "Memory 102",
    "aspectRatio": 1,
    "featured": false
  },
  {
    "id": "gallery-photo-103",
    "src": "/sanju/gallery/WhatsApp Image 2026-06-08 at 8.07.51 PM (1).jpeg",
    "category": "Photos of Her",
    "title": "Memory 103",
    "aspectRatio": 0.9536423841059603,
    "featured": false
  },
  {
    "id": "gallery-photo-104",
    "src": "/sanju/gallery/WhatsApp Image 2026-06-08 at 8.07.51 PM (2).jpeg",
    "category": "Photos of Her",
    "title": "Memory 104",
    "aspectRatio": 0.9568106312292359,
    "featured": false
  },
  {
    "id": "gallery-photo-105",
    "src": "/sanju/gallery/WhatsApp Image 2026-06-08 at 8.07.51 PM.jpeg",
    "category": "Photos of Her",
    "title": "Memory 105",
    "aspectRatio": 0.9574468085106383,
    "featured": false
  },
  {
    "id": "gallery-photo-106",
    "src": "/sanju/gallery/WhatsApp Image 2026-06-08 at 8.07.52 PM (1).jpeg",
    "category": "Photos of Her",
    "title": "Memory 106",
    "aspectRatio": 0.9568106312292359,
    "featured": false
  },
  {
    "id": "gallery-photo-107",
    "src": "/sanju/gallery/WhatsApp Image 2026-06-08 at 8.07.52 PM (2).jpeg",
    "category": "Photos of Her",
    "title": "Memory 107",
    "aspectRatio": 0.8455666470933646,
    "featured": false
  },
  {
    "id": "gallery-photo-108",
    "src": "/sanju/gallery/WhatsApp Image 2026-06-08 at 8.07.52 PM.jpeg",
    "category": "Photos of Her",
    "title": "Memory 108",
    "aspectRatio": 1.0486111111111112,
    "featured": false
  },
  {
    "id": "gallery-photo-109",
    "src": "/sanju/gallery/WhatsApp Image 2026-06-08 at 8.07.53 PM (1).jpeg",
    "category": "Photos of Her",
    "title": "Memory 109",
    "aspectRatio": 0.75,
    "featured": false
  },
  {
    "id": "gallery-photo-110",
    "src": "/sanju/gallery/WhatsApp Image 2026-06-08 at 8.07.53 PM (2).jpeg",
    "category": "Photos of Her",
    "title": "Memory 110",
    "aspectRatio": 0.8,
    "featured": false
  },
  {
    "id": "gallery-photo-111",
    "src": "/sanju/gallery/WhatsApp Image 2026-06-08 at 8.07.53 PM.jpeg",
    "category": "Photos of Her",
    "title": "Memory 111",
    "aspectRatio": 0.8430913348946136,
    "featured": false
  },
  {
    "id": "gallery-photo-112",
    "src": "/sanju/gallery/WhatsApp Image 2026-06-08 at 8.07.54 PM (1).jpeg",
    "category": "Photos of Her",
    "title": "Memory 112",
    "aspectRatio": 1.3333333333333333,
    "featured": false
  },
  {
    "id": "gallery-photo-113",
    "src": "/sanju/gallery/WhatsApp Image 2026-06-08 at 8.07.54 PM.jpeg",
    "category": "Photos of Her",
    "title": "Memory 113",
    "aspectRatio": 0.8004446914952752,
    "featured": false
  },
  {
    "id": "gallery-photo-114",
    "src": "/sanju/gallery/WhatsApp Image 2026-06-08 at 8.07.55 PM (1).jpeg",
    "category": "Photos of Her",
    "title": "Memory 114",
    "aspectRatio": 0.6666666666666666,
    "featured": false
  },
  {
    "id": "gallery-photo-115",
    "src": "/sanju/gallery/WhatsApp Image 2026-06-08 at 8.07.55 PM (2).jpeg",
    "category": "Photos of Her",
    "title": "Memory 115",
    "aspectRatio": 0.75,
    "featured": false
  },
  {
    "id": "gallery-photo-116",
    "src": "/sanju/gallery/WhatsApp Image 2026-06-08 at 8.07.55 PM.jpeg",
    "category": "Photos of Her",
    "title": "Memory 116",
    "aspectRatio": 1,
    "featured": false
  },
  {
    "id": "gallery-photo-117",
    "src": "/sanju/gallery/WhatsApp Image 2026-06-08 at 8.07.56 PM (1).jpeg",
    "category": "Photos of Her",
    "title": "Memory 117",
    "aspectRatio": 1,
    "featured": false
  },
  {
    "id": "gallery-photo-118",
    "src": "/sanju/gallery/WhatsApp Image 2026-06-08 at 8.07.56 PM.jpeg",
    "category": "Photos of Her",
    "title": "Memory 118",
    "aspectRatio": 0.75,
    "featured": false
  },
  {
    "id": "gallery-photo-119",
    "src": "/sanju/gallery/WhatsApp Image 2026-06-08 at 8.07.57 PM (1).jpeg",
    "category": "Photos of Her",
    "title": "Memory 119",
    "aspectRatio": 0.5625,
    "featured": false
  },
  {
    "id": "gallery-photo-120",
    "src": "/sanju/gallery/WhatsApp Image 2026-06-08 at 8.07.57 PM (2).jpeg",
    "category": "Photos of Her",
    "title": "Memory 120",
    "aspectRatio": 0.5625,
    "featured": false
  },
  {
    "id": "gallery-photo-121",
    "src": "/sanju/gallery/WhatsApp Image 2026-06-08 at 8.07.57 PM.jpeg",
    "category": "Photos of Her",
    "title": "Memory 121",
    "aspectRatio": 0.75,
    "featured": false
  },
  {
    "id": "gallery-photo-122",
    "src": "/sanju/gallery/WhatsApp Image 2026-06-08 at 8.07.58 PM (1).jpeg",
    "category": "Photos of Her",
    "title": "Memory 122",
    "aspectRatio": 0.75,
    "featured": false
  },
  {
    "id": "gallery-photo-123",
    "src": "/sanju/gallery/WhatsApp Image 2026-06-08 at 8.07.58 PM.jpeg",
    "category": "Photos of Her",
    "title": "Memory 123",
    "aspectRatio": 0.75,
    "featured": false
  },
  {
    "id": "gallery-photo-124",
    "src": "/sanju/gallery/photos-by-her/WhatsApp Image 2026-06-08 at 10.28.09 PM.jpeg",
    "category": "Photos Taken by Her",
    "title": "Captured Memory 124",
    "aspectRatio": 0.44733044733044736,
    "featured": false
  },
  {
    "id": "gallery-photo-125",
    "src": "/sanju/gallery/photos-by-her/WhatsApp Image 2026-06-08 at 10.28.10 PM (1).jpeg",
    "category": "Photos Taken by Her",
    "title": "Captured Memory 125",
    "aspectRatio": 0.699375,
    "featured": false
  },
  {
    "id": "gallery-photo-126",
    "src": "/sanju/gallery/photos-by-her/WhatsApp Image 2026-06-08 at 10.28.10 PM (2).jpeg",
    "category": "Photos Taken by Her",
    "title": "Captured Memory 126",
    "aspectRatio": 0.693125,
    "featured": false
  },
  {
    "id": "gallery-photo-127",
    "src": "/sanju/gallery/photos-by-her/WhatsApp Image 2026-06-08 at 10.28.10 PM.jpeg",
    "category": "Photos Taken by Her",
    "title": "Captured Memory 127",
    "aspectRatio": 0.7611006879299562,
    "featured": false
  },
  {
    "id": "gallery-photo-128",
    "src": "/sanju/gallery/photos-by-her/WhatsApp Image 2026-06-08 at 10.28.11 PM (1).jpeg",
    "category": "Photos Taken by Her",
    "title": "Captured Memory 128",
    "aspectRatio": 0.625625,
    "featured": false
  },
  {
    "id": "gallery-photo-129",
    "src": "/sanju/gallery/photos-by-her/WhatsApp Image 2026-06-08 at 10.28.11 PM (2).jpeg",
    "category": "Photos Taken by Her",
    "title": "Captured Memory 129",
    "aspectRatio": 0.7988394584139265,
    "featured": false
  },
  {
    "id": "gallery-photo-130",
    "src": "/sanju/gallery/photos-by-her/WhatsApp Image 2026-06-08 at 10.28.11 PM.jpeg",
    "category": "Photos Taken by Her",
    "title": "Captured Memory 130",
    "aspectRatio": 0.653125,
    "featured": false
  },
  {
    "id": "gallery-photo-131",
    "src": "/sanju/gallery/photos-by-her/WhatsApp Image 2026-06-08 at 10.28.12 PM (1).jpeg",
    "category": "Photos Taken by Her",
    "title": "Captured Memory 131",
    "aspectRatio": 0.64125,
    "featured": false
  },
  {
    "id": "gallery-photo-132",
    "src": "/sanju/gallery/photos-by-her/WhatsApp Image 2026-06-08 at 10.28.12 PM (2).jpeg",
    "category": "Photos Taken by Her",
    "title": "Captured Memory 132",
    "aspectRatio": 0.65625,
    "featured": false
  },
  {
    "id": "gallery-photo-133",
    "src": "/sanju/gallery/photos-by-her/WhatsApp Image 2026-06-08 at 10.28.12 PM.jpeg",
    "category": "Photos Taken by Her",
    "title": "Captured Memory 133",
    "aspectRatio": 0.9329819277108434,
    "featured": false
  },
  {
    "id": "gallery-photo-134",
    "src": "/sanju/gallery/photos-by-her/WhatsApp Image 2026-06-08 at 10.28.13 PM (1).jpeg",
    "category": "Photos Taken by Her",
    "title": "Captured Memory 134",
    "aspectRatio": 1.8020477815699658,
    "featured": false
  },
  {
    "id": "gallery-photo-135",
    "src": "/sanju/gallery/photos-by-her/WhatsApp Image 2026-06-08 at 10.28.13 PM.jpeg",
    "category": "Photos Taken by Her",
    "title": "Captured Memory 135",
    "aspectRatio": 0.691875,
    "featured": false
  },
  {
    "id": "gallery-photo-136",
    "src": "/sanju/gallery/photos-by-her/WhatsApp Image 2026-06-08 at 10.28.14 PM (1).jpeg",
    "category": "Photos Taken by Her",
    "title": "Captured Memory 136",
    "aspectRatio": 0.72875,
    "featured": false
  },
  {
    "id": "gallery-photo-137",
    "src": "/sanju/gallery/photos-by-her/WhatsApp Image 2026-06-08 at 10.28.14 PM (2).jpeg",
    "category": "Photos Taken by Her",
    "title": "Captured Memory 137",
    "aspectRatio": 0.651875,
    "featured": false
  },
  {
    "id": "gallery-photo-138",
    "src": "/sanju/gallery/photos-by-her/WhatsApp Image 2026-06-08 at 10.28.14 PM.jpeg",
    "category": "Photos Taken by Her",
    "title": "Captured Memory 138",
    "aspectRatio": 1.6993243243243243,
    "featured": false
  },
  {
    "id": "gallery-photo-139",
    "src": "/sanju/gallery/photos-by-her/WhatsApp Image 2026-06-08 at 10.28.15 PM.jpeg",
    "category": "Photos Taken by Her",
    "title": "Captured Memory 139",
    "aspectRatio": 0.630625,
    "featured": false
  },
  {
    "id": "milestone-age-1",
    "src": "/sanju/milestones/age-01.jpg",
    "category": "Photos of Her",
    "title": "Age 1: The first little light",
    "aspectRatio": 1.3333333333333333
  },
  {
    "id": "milestone-age-2",
    "src": "/sanju/milestones/age-02.jpg",
    "category": "Photos of Her",
    "title": "Age 2: Learning the world",
    "aspectRatio": 1.2361516034985423
  },
  {
    "id": "milestone-age-3",
    "src": "/sanju/milestones/age-03.jpg",
    "category": "Photos of Her",
    "title": "Age 3: Little wonder",
    "aspectRatio": 1.1746361746361746
  },
  {
    "id": "milestone-age-4",
    "src": "/sanju/milestones/age-04.jpg",
    "category": "Photos of Her",
    "title": "Age 4: Soft mischief",
    "aspectRatio": 0.75
  },
  {
    "id": "milestone-age-5",
    "src": "/sanju/milestones/age-05.jpg",
    "category": "Photos of Her",
    "title": "Age 5: Growing into stories",
    "aspectRatio": 1.3333333333333333
  },
  {
    "id": "milestone-age-6",
    "src": "/sanju/milestones/age-06.png",
    "category": "Photos of Her",
    "title": "Age 6: The gentle observer",
    "aspectRatio": 0.751863684771033
  },
  {
    "id": "milestone-age-7",
    "src": "/sanju/milestones/age-07.jpg",
    "category": "Photos of Her",
    "title": "Age 7: Bright little heart",
    "aspectRatio": 1.25
  },
  {
    "id": "milestone-age-8",
    "src": "/sanju/milestones/age-08.jpg",
    "category": "Photos of Her",
    "title": "Age 8: Curious days",
    "aspectRatio": 1.3333333333333333
  },
  {
    "id": "milestone-age-9",
    "src": "/sanju/milestones/age-09.png",
    "category": "Photos of Her",
    "title": "Age 9: Little explorer",
    "aspectRatio": 1.214132762312634
  },
  {
    "id": "milestone-age-10",
    "src": "/sanju/milestones/age-10.jpg",
    "category": "Photos of Her",
    "title": "Age 10: Double digits",
    "aspectRatio": 0.75
  },
  {
    "id": "milestone-age-11",
    "src": "/sanju/milestones/age-11.jpg",
    "category": "Photos of Her",
    "title": "Age 11: Quiet strength",
    "aspectRatio": 1.216704288939052
  },
  {
    "id": "milestone-age-12",
    "src": "/sanju/milestones/age-12.jpg",
    "category": "Photos of Her",
    "title": "Age 12: Almost teenage",
    "aspectRatio": 1.3333333333333333
  },
  {
    "id": "milestone-age-13",
    "src": "/sanju/milestones/age-13.png",
    "category": "Photos of Her",
    "title": "Age 13: New colors",
    "aspectRatio": 1.049204052098408
  },
  {
    "id": "milestone-age-14",
    "src": "/sanju/milestones/age-14.png",
    "category": "Photos of Her",
    "title": "Age 14: The calm kind of brave",
    "aspectRatio": 1.5320813771517996
  },
  {
    "id": "milestone-age-15",
    "src": "/sanju/milestones/age-15.png",
    "category": "Photos of Her",
    "title": "Age 15: Beautifully unpredictable",
    "aspectRatio": 1.2766666666666666
  },
  {
    "id": "milestone-age-16",
    "src": "/sanju/milestones/age-16.jpg",
    "category": "Photos of Her",
    "title": "Age 16: A softer courage",
    "aspectRatio": 1.019704433497537
  },
  {
    "id": "milestone-age-17",
    "src": "/sanju/milestones/age-17.jpg",
    "category": "Photos of Her",
    "title": "Age 17: Finding your rhythm",
    "aspectRatio": 1.4970760233918128
  },
  {
    "id": "milestone-age-18",
    "src": "/sanju/milestones/age-18.jpg",
    "category": "Photos of Her",
    "title": "Age 18: A new door",
    "aspectRatio": 1.3128205128205128
  },
  {
    "id": "milestone-age-19",
    "src": "/sanju/milestones/age-19.png",
    "category": "Photos of Her",
    "title": "Age 19: Your own weather",
    "aspectRatio": 1.3617021276595744
  },
  {
    "id": "milestone-age-20",
    "src": "/sanju/milestones/age-20.jpg",
    "category": "Photos of Her",
    "title": "Age 20: Gentle wild world",
    "aspectRatio": 1.476923076923077
  },
  {
    "id": "milestone-age-21",
    "src": "/sanju/milestones/age-21.png",
    "category": "Photos of Her",
    "title": "Age 21: Golden almost",
    "aspectRatio": 1.8584392014519056
  },
  {
    "id": "milestone-age-22",
    "src": "/sanju/milestones/age-22.png",
    "category": "Photos of Her",
    "title": "Age 22: Chapter 22",
    "aspectRatio": 0.8961892247043364
  }
];

export const featuredGalleryPhotos = galleryPhotos.filter((photo) => photo.featured);

export const memoryPoints: MemoryPoint[] = [
  {
    title: "Where the story starts",
    place: "Home",
    dateLabel: "Scene 01",
    note: "The first place that knew her softness, her stubbornness, and the tiny spark that became Sanju.",
    photo: "/sanju/gallery/WhatsApp Image 2026-06-08 at 5.24.12 PM.jpeg",
    icon: Heart,
  },
  {
    title: "Through her eyes",
    place: "Every ordinary day",
    dateLabel: "Scene 02",
    note: "A map point for every sky, leaf, bird, and quiet corner she made more beautiful by noticing it.",
    photo: "/sanju/gallery/WhatsApp Image 2026-06-08 at 5.24.29 PM.jpeg",
    icon: Camera,
  },
  {
    title: "The soft wild things",
    place: "Birds, dogs, nature",
    dateLabel: "Scene 03",
    note: "A little territory reserved for everything gentle enough to match her heart.",
    photo: "/sanju/gallery/WhatsApp Image 2026-06-08 at 5.27.59 PM.jpeg",
    icon: PawPrint,
  },
  {
    title: "People who adore her",
    place: "Always around",
    dateLabel: "Scene 04",
    note: "The people in her orbit are lucky. They get to know the calm face and the beautiful madness.",
    photo: "/sanju/gallery/WhatsApp Image 2026-06-08 at 5.27.10 PM.jpeg",
    icon: Sparkles,
  },
  {
    title: "Chapter 22",
    place: "Right now",
    dateLabel: "09.06.2026",
    note: "This year begins with proof: she is loved, seen, celebrated, and impossible to replace.",
    photo: "/sanju/milestones/age-22.png",
    icon: MapPin,
  },
  {
    title: "The road ahead",
    place: "Still becoming",
    dateLabel: "Next scene",
    note: "A blank space on purpose, because Sanju still has so many beautiful frames left to make.",
    photo: "/sanju/gallery/WhatsApp Image 2026-06-08 at 5.29.19 PM.jpeg",
    icon: Mountain,
  },
  {
    title: "Tiny witnesses",
    place: "Sky corners",
    dateLabel: "Always",
    note: "Somewhere, a bird is having a normal day, completely unaware Sanju has turned it into a memory.",
    photo: "/sanju/gallery/WhatsApp Image 2026-06-08 at 5.29.42 PM.jpeg",
    icon: Bird,
  },
];
