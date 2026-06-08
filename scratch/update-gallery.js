const fs = require('fs');
const path = require('path');
const sizeOf = require('image-size').imageSize;

const galleryDir = 'd:/PROJECTS/Sanju-Bday/lume-studio-next/public/sanju/gallery';
const byHerDir = 'd:/PROJECTS/Sanju-Bday/lume-studio-next/public/sanju/gallery/photos-by-her';
const milestonesDir = 'd:/PROJECTS/Sanju-Bday/lume-studio-next/public/sanju/milestones';

// Get list of files in main gallery directory (photos of her)
const filesOfHer = fs.readdirSync(galleryDir)
  .filter(f => f !== '.gitkeep' && f !== 'photos-by-her' && (f.endsWith('.jpg') || f.endsWith('.jpeg') || f.endsWith('.png')));

// Get list of files in photos-by-her directory
const filesByHer = fs.existsSync(byHerDir) 
  ? fs.readdirSync(byHerDir).filter(f => f !== '.gitkeep' && (f.endsWith('.jpg') || f.endsWith('.jpeg') || f.endsWith('.png')))
  : [];

// Get list of milestones, filtering out placeholders of size 71742
const milestoneFiles = fs.readdirSync(milestonesDir)
  .filter(f => f.startsWith('age-'))
  .filter(f => {
    const filePath = path.join(milestonesDir, f);
    const stats = fs.statSync(filePath);
    return stats.size !== 71742; // Filter out the template placeholder size
  })
  .sort();

console.log(`Found ${filesOfHer.length} of-her photos, ${filesByHer.length} by-her photos, and ${milestoneFiles.length} real milestones.`);

const galleryPhotos = [];
let idCounter = 1;

// 1. Add the main WhatsApp images to "Photos of Her"
filesOfHer.forEach((file) => {
  const filePath = path.join(galleryDir, file);
  let ratio = 1;
  try {
    const buffer = fs.readFileSync(filePath);
    const dimensions = sizeOf(buffer);
    if (dimensions && dimensions.width && dimensions.height) {
      ratio = dimensions.width / dimensions.height;
    }
  } catch (err) {
    console.error(`Error reading size for of-her photo ${file}:`, err);
  }

  // First 8 of-her photos will be featured
  const isFeatured = idCounter <= 8;
  
  galleryPhotos.push({
    id: `gallery-photo-${idCounter++}`,
    src: `/sanju/gallery/${file}`,
    category: "Photos of Her",
    title: `Memory ${idCounter - 1}`,
    aspectRatio: ratio,
    featured: isFeatured
  });
});

// 2. Add the photos from photos-by-her to "Photos Taken by Her"
filesByHer.forEach((file) => {
  const filePath = path.join(byHerDir, file);
  let ratio = 1;
  try {
    const buffer = fs.readFileSync(filePath);
    const dimensions = sizeOf(buffer);
    if (dimensions && dimensions.width && dimensions.height) {
      ratio = dimensions.width / dimensions.height;
    }
  } catch (err) {
    console.error(`Error reading size for by-her photo ${file}:`, err);
  }

  // First 4 by-her photos will be featured
  const isFeatured = idCounter <= 12; // total first 12 (8 of-her + 4 by-her) featured
  
  galleryPhotos.push({
    id: `gallery-photo-${idCounter++}`,
    src: `/sanju/gallery/photos-by-her/${file}`,
    category: "Photos Taken by Her",
    title: `Captured Memory ${idCounter - 1}`,
    aspectRatio: ratio,
    featured: isFeatured
  });
});

// 3. Add the 22 milestone photos (all are of her)
const milestoneInfo = [
  { age: 1, title: "Age 1: The first little light" },
  { age: 2, title: "Age 2: Learning the world" },
  { age: 3, title: "Age 3: Little wonder" },
  { age: 4, title: "Age 4: Soft mischief" },
  { age: 5, title: "Age 5: Growing into stories" },
  { age: 6, title: "Age 6: The gentle observer" },
  { age: 7, title: "Age 7: Bright little heart" },
  { age: 8, title: "Age 8: Curious days" },
  { age: 9, title: "Age 9: Little explorer" },
  { age: 10, title: "Age 10: Double digits" },
  { age: 11, title: "Age 11: Quiet strength" },
  { age: 12, title: "Age 12: Almost teenage" },
  { age: 13, title: "Age 13: New colors" },
  { age: 14, title: "Age 14: The calm kind of brave" },
  { age: 15, title: "Age 15: Beautifully unpredictable" },
  { age: 16, title: "Age 16: A softer courage" },
  { age: 17, title: "Age 17: Finding your rhythm" },
  { age: 18, title: "Age 18: A new door" },
  { age: 19, title: "Age 19: Your own weather" },
  { age: 20, title: "Age 20: Gentle wild world" },
  { age: 21, title: "Age 21: Golden almost" },
  { age: 22, title: "Age 22: Chapter 22" }
];

milestoneInfo.forEach((m, idx) => {
  const file = milestoneFiles.find(f => f.startsWith(`age-${String(m.age).padStart(2, '0')}`));
  if (file) {
    const filePath = path.join(milestonesDir, file);
    let ratio = 1;
    try {
      const buffer = fs.readFileSync(filePath);
      const dimensions = sizeOf(buffer);
      if (dimensions && dimensions.width && dimensions.height) {
        ratio = dimensions.width / dimensions.height;
      }
    } catch (err) {
      console.error(`Error reading size for milestone ${file}:`, err);
    }
    
    galleryPhotos.push({
      id: `milestone-age-${m.age}`,
      src: `/sanju/milestones/${file}`,
      category: "Photos of Her",
      title: m.title,
      aspectRatio: ratio
    });
  }
});

// Setup memoryPoints photos using valid images
const memoryPointsPhotos = [
  galleryPhotos[0].src,
  galleryPhotos[1].src,
  galleryPhotos[3].src,
  galleryPhotos[2].src,
  galleryPhotos[galleryPhotos.length - 1].src,
  galleryPhotos[4].src,
  galleryPhotos[5].src
];

// Generate code
let code = `import type { LucideIcon } from "lucide-react";
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

export const galleryPhotos: GalleryPhoto[] = ${JSON.stringify(galleryPhotos, null, 2)};

export const featuredGalleryPhotos = galleryPhotos.filter((photo) => photo.featured);

export const memoryPoints: MemoryPoint[] = [
  {
    title: "Where the story starts",
    place: "Home",
    dateLabel: "Scene 01",
    note: "The first place that knew her softness, her stubbornness, and the tiny spark that became Sanju.",
    photo: ${JSON.stringify(memoryPointsPhotos[0])},
    icon: Heart,
  },
  {
    title: "Through her eyes",
    place: "Every ordinary day",
    dateLabel: "Scene 02",
    note: "A map point for every sky, leaf, bird, and quiet corner she made more beautiful by noticing it.",
    photo: ${JSON.stringify(memoryPointsPhotos[1])},
    icon: Camera,
  },
  {
    title: "The soft wild things",
    place: "Birds, dogs, nature",
    dateLabel: "Scene 03",
    note: "A little territory reserved for everything gentle enough to match her heart.",
    photo: ${JSON.stringify(memoryPointsPhotos[2])},
    icon: PawPrint,
  },
  {
    title: "People who adore her",
    place: "Always around",
    dateLabel: "Scene 04",
    note: "The people in her orbit are lucky. They get to know the calm face and the beautiful madness.",
    photo: ${JSON.stringify(memoryPointsPhotos[3])},
    icon: Sparkles,
  },
  {
    title: "Chapter 22",
    place: "Right now",
    dateLabel: "09.06.2026",
    note: "This year begins with proof: she is loved, seen, celebrated, and impossible to replace.",
    photo: ${JSON.stringify(memoryPointsPhotos[4])},
    icon: MapPin,
  },
  {
    title: "The road ahead",
    place: "Still becoming",
    dateLabel: "Next scene",
    note: "A blank space on purpose, because Sanju still has so many beautiful frames left to make.",
    photo: ${JSON.stringify(memoryPointsPhotos[5])},
    icon: Mountain,
  },
  {
    title: "Tiny witnesses",
    place: "Sky corners",
    dateLabel: "Always",
    note: "Somewhere, a bird is having a normal day, completely unaware Sanju has turned it into a memory.",
    photo: ${JSON.stringify(memoryPointsPhotos[6])},
    icon: Bird,
  },
];
`;

fs.writeFileSync('d:/PROJECTS/Sanju-Bday/lume-studio-next/src/lib/sanju-gallery.ts', code);
console.log('Successfully updated sanju-gallery.ts with specific photos-by-her folder mapping!');
