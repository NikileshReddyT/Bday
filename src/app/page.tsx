"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  animate,
  type PanInfo,
  type MotionValue,
} from "motion/react";
import {
  ArrowDown,
  Camera,
  ChevronLeft,
  ChevronRight,
  Dog,
  Film,
  Gift,
  Heart,
  Image as ImageIcon,
  PawPrint,
  Send,
  Sparkles,
} from "lucide-react";
import { featuredGalleryPhotos, galleryPhotos } from "@/lib/sanju-gallery";
import { ImageGallery } from "@/components/ui/image-gallery";
import { cn } from "@/lib/utils";

type Milestone = {
  age: number;
  yearLabel: string;
  title: string;
  text: string;
  photo: string;
  tone: string;
};

type Wish = {
  from: string;
  relation: string;
  text: string;
  photo: string;
  accent: string;
};

type Theme = "dark" | "light";

const HERO_PHOTO = "/sanju/hero.png";
const HERO_PLACEHOLDER_PHOTO = "/sanju/hero-placeholder.svg";
const BABY_SANJU_PHOTO = "/sanju/preloader.jpg";
const t = (str: string) => str;

const MILESTONES: Milestone[] = [
  {
    age: 1,
    yearLabel: "2004-2005",
    title: "The first little light",
    text: "A tiny beginning, and already the world had a softer corner named Sanju.",
    photo: "/sanju/milestones/age-01.jpg",
    tone: "from-rose-200 to-amber-100",
  },
  {
    age: 2,
    yearLabel: "2005-2006",
    title: "Learning the world",
    text: "Small steps, wide eyes, and a quiet curiosity beginning to bloom.",
    photo: "/sanju/milestones/age-02.jpg",
    tone: "from-pink-200 to-orange-100",
  },
  {
    age: 3,
    yearLabel: "2006-2007",
    title: "Little wonder",
    text: "The kind of childhood magic that lives in tiny laughs and sleepy smiles.",
    photo: "/sanju/milestones/age-03.jpg",
    tone: "from-amber-200 to-lime-100",
  },
  {
    age: 4,
    yearLabel: "2007-2008",
    title: "Soft mischief",
    text: "A calm face, a secret spark, and the first signs of beautiful chaos.",
    photo: "/sanju/milestones/age-04.jpg",
    tone: "from-yellow-200 to-rose-100",
  },
  {
    age: 5,
    yearLabel: "2008-2009",
    title: "Growing into stories",
    text: "Every day became a small scene, every memory a frame worth keeping.",
    photo: "/sanju/milestones/age-05.jpg",
    tone: "from-sky-200 to-emerald-100",
  },
  {
    age: 6,
    yearLabel: "2009-2010",
    title: "The gentle observer",
    text: "You started noticing details others missed, quietly collecting beauty.",
    photo: "/sanju/milestones/age-06.png",
    tone: "from-cyan-200 to-violet-100",
  },
  {
    age: 7,
    yearLabel: "2010-2011",
    title: "Bright little heart",
    text: "Kindness, innocence, and that rare softness that never really left you.",
    photo: "/sanju/milestones/age-07.jpg",
    tone: "from-fuchsia-200 to-rose-100",
  },
  {
    age: 8,
    yearLabel: "2011-2012",
    title: "Curious days",
    text: "A year of questions, tiny adventures, and becoming more yourself.",
    photo: "/sanju/milestones/age-08.jpg",
    tone: "from-teal-200 to-lime-100",
  },
  {
    age: 9,
    yearLabel: "2012-2013",
    title: "Little explorer",
    text: "The world got bigger, and your imagination quietly kept up with it.",
    photo: "/sanju/milestones/age-09.png",
    tone: "from-indigo-200 to-sky-100",
  },
  {
    age: 10,
    yearLabel: "2013-2014",
    title: "Double digits",
    text: "A tiny milestone, a bigger smile, and so many memories gathering light.",
    photo: "/sanju/milestones/age-10.jpg",
    tone: "from-orange-200 to-pink-100",
  },
  {
    age: 11,
    yearLabel: "2014-2015",
    title: "Quiet strength",
    text: "The softness stayed, but a stronger, steadier Sanju began to appear.",
    photo: "/sanju/milestones/age-11.jpg",
    tone: "from-emerald-200 to-cyan-100",
  },
  {
    age: 12,
    yearLabel: "2015-2016",
    title: "Almost teenage",
    text: "A bridge year, tender and funny, where childhood started turning into personality.",
    photo: "/sanju/milestones/age-12.jpg",
    tone: "from-violet-200 to-amber-100",
  },
  {
    age: 13,
    yearLabel: "2016-2017",
    title: "New colors",
    text: "Teenage Sanju arrived with quiet thoughts and a heart full of weather.",
    photo: "/sanju/milestones/age-13.png",
    tone: "from-purple-200 to-rose-100",
  },
  {
    age: 14,
    yearLabel: "2017-2018",
    title: "The calm kind of brave",
    text: "You learned to carry yourself gently, even when everything felt loud.",
    photo: "/sanju/milestones/age-14.png",
    tone: "from-blue-200 to-fuchsia-100",
  },
  {
    age: 15,
    yearLabel: "2018-2019",
    title: "Beautifully unpredictable",
    text: "Still calm outside, but inside, a whole festival of thoughts and feelings.",
    photo: "/sanju/milestones/age-15.png",
    tone: "from-rose-200 to-violet-100",
  },
  {
    age: 16,
    yearLabel: "2019-2020",
    title: "A softer courage",
    text: "The world changed around you, and you kept your tenderness anyway.",
    photo: "/sanju/milestones/age-16.jpg",
    tone: "from-stone-200 to-emerald-100",
  },
  {
    age: 17,
    yearLabel: "2020-2021",
    title: "Finding your rhythm",
    text: "A quieter chapter, but not an empty one; you were still becoming.",
    photo: "/sanju/milestones/age-17.jpg",
    tone: "from-lime-200 to-cyan-100",
  },
  {
    age: 18,
    yearLabel: "2021-2022",
    title: "A new door",
    text: "Eighteen arrived with dreams, doubts, freedom, and a little more fire.",
    photo: "/sanju/milestones/age-18.jpg",
    tone: "from-amber-200 to-rose-100",
  },
  {
    age: 19,
    yearLabel: "2022-2023",
    title: "Your own weather",
    text: "You became harder to define, and somehow even easier to love.",
    photo: "/sanju/milestones/age-19.png",
    tone: "from-emerald-200 to-yellow-100",
  },
  {
    age: 20,
    yearLabel: "2023-2024",
    title: "Gentle wild world",
    text: "Your love for animals and quiet natural things became part of your portrait.",
    photo: "/sanju/milestones/age-20.jpg",
    tone: "from-teal-200 to-orange-100",
  },
  {
    age: 21,
    yearLabel: "2024-2025",
    title: "Golden almost",
    text: "A year of more color, more self, and more reasons for people to adore you.",
    photo: "/sanju/milestones/age-21.png",
    tone: "from-yellow-200 to-pink-100",
  },
  {
    age: 22,
    yearLabel: "2025-2026",
    title: "Chapter 22",
    text: "Right now, you are here: loved deeply, celebrated fully, and glowing forward.",
    photo: "/sanju/milestones/age-22.png",
    tone: "from-pink-200 to-orange-100",
  },
];

const WISHES: Wish[] = [
  {
    from: "Amma & Nanna",
    relation: "Home",
    text: "Happy birthday kannamma. You made our lives beautiful. I hope you will be a good person, like this forever. Wishing you again a wonderful birthday from myself n Nanna.",
    photo: "/sanju/wishes/mom-dad.jpg",
    accent: "bg-rose-200",
  },
  {
    from: "Pedhama And Pedhanana",
    relation: "Pedhama And Pedhanana",
    text: "Happy Birthday Sanju nana, naavi and pedhanana blessings eppudu neeku vuntai, happy ga life enjoy chey nana and amma naana ki manchi peru thiskoni ra.",
    photo: "/sanju/wishes/pedhama.jpg",
    accent: "bg-sky-200",
  },
  {
    from: "Nikki",
    relation: "closest friend",
    text: "This page is my way of celebrating you and showing how lucky I am to have you as my cousin sister. You are precious beyond words, Sanju!",
    photo: "/sanju/wishes/nikki.jpg",
    accent: "bg-amber-200",
  },
];

const chatPrompts = [
  "I feel low",
  "Say something cute",
  "Remind me why I matter",
  "Birthday wish",
];

const nikkiReplies = {
  low: [
    "Sanju, even on the days you feel small, you are still the kind of person who makes the world softer just by being in it. Rest, breathe, and let yourself be loved.",
    "If today feels heavy, I hope you remember this: you do not have to glow every second to be precious. You are special even in your quietest, tiredest version.",
    "My Sanju, your heart has carried so much and still stayed gentle. That alone makes you rare. Please be kind to yourself today.",
  ],
  cute: [
    "You are dangerously cute, Sanju. Like calm-face-outside, full-chaos-inside, secretly-stealing-everyone's-heart cute.",
    "Tiny report from Nikki: Sanju remains adorable, soft, impossible to replace, and unfairly good at making normal moments feel warmer.",
    "You have this magic where even your silence has personality. That should not be possible, but then again, you are Sanju.",
  ],
  matter: [
    "You matter because your presence changes the temperature of a room. Things feel safer, sweeter, and more alive when you are there.",
    "You matter because you notice small beautiful things, and people like you are the reason ordinary days do not stay ordinary.",
    "You matter to me in a way that is not casual or temporary. You are a whole chapter, Sanju. A favorite one.",
  ],
  birthday: [
    "Happy 22nd birthday, Sanju. I hope this year treats you like something precious: gently, proudly, and with a ridiculous amount of love.",
    "For this new year, I wish you soft mornings, brave choices, safe people, loud laughs, and many moments where you realize how deeply loved you are.",
    "Happy birthday, masterpiece. Not because you are perfect, but because every little piece of you is worth celebrating.",
  ],
  default: [
    "Sanju, whatever you typed, my answer is still this: you are loved more than this little page can hold.",
    "I asked this page what to say, and it agreed with me: Sanju is special, irreplaceable, and absolutely worth celebrating.",
    "From Nikki to Sanju: you are not just nice to look at in photos. You are beautiful in the way you exist.",
  ],
};

function SanjuFrame({
  label,
  photo,
  className = "",
  compact = false,
  hideOverlay = false,
  style = {},
}: {
  label: string;
  photo?: string;
  className?: string;
  compact?: boolean;
  hideOverlay?: boolean;
  style?: React.CSSProperties;
}) {
  const [failed, setFailed] = useState(false);
  const hasRealPhoto = !!photo && !failed;

  return (
    <div
      className={`relative overflow-hidden rounded-[7px] bg-[linear-gradient(145deg,#fff7ed,#ffe4e6_48%,#ecfdf5)] group ${className}`}
      style={style}
    >
      {photo && !failed ? (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src={photo}
          alt={label}
          className='absolute inset-0 h-full w-full object-cover transition duration-700 opacity-100 group-hover:scale-[1.03]'
          onError={() => setFailed(true)}
        />
      ) : null}
      <div
        className={`absolute inset-0 transition-opacity duration-700 ${hasRealPhoto ? "opacity-0" : "opacity-100"}`}
      >
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(255,255,255,0.86),transparent_16%),radial-gradient(circle_at_74%_68%,rgba(16,185,129,0.22),transparent_26%),linear-gradient(145deg,#fff7ed,#ffe4e6_48%,#ecfdf5)]' />
        <div
          className={cn(
            "absolute rounded-[8px] border border-rose-900/10 bg-white/34",
            compact ? "inset-2" : "inset-4",
          )}
        />
        <div
          className={cn(
            "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-rose-950",
            compact ? "w-24" : "w-52",
          )}
        >
          <p
            className={cn(
              "font-mono uppercase opacity-55",
              compact
                ? "text-[7px] tracking-[0.2em]"
                : "text-[9px] tracking-[0.3em]",
            )}
          >
            {t("keepsake frame")}
          </p>
          <p
            className={cn(
              "font-semibold",
              compact ? "mt-1 text-base" : "mt-2 text-2xl",
            )}
          >
            {t("Sanju")}
          </p>
          {!compact ? (
            <p className='mt-2 text-xs leading-5 text-slate-600'>
              {t("A beautiful space kept ready for this memory.")}
            </p>
          ) : null}
        </div>
        <div className='absolute bottom-10 left-1/2 h-14 w-24 -translate-x-1/2 rounded-[50%] bg-rose-200/40 blur-xl' />
      </div>
      {hasRealPhoto && !hideOverlay ? (
        <div
          className={`absolute left-4 top-4 flex items-center gap-2 rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] backdrop-blur transition-all duration-300 ${
            hasRealPhoto
              ? "border-white/25 bg-black/20 text-white/85"
              : "border-emerald-900/10 bg-white/68 text-emerald-950"
          }`}
        >
          <ImageIcon className='size-3' />
          {hasRealPhoto ? t("Sanju") : t("future photo")}
        </div>
      ) : null}
      {hasRealPhoto && !hideOverlay ? (
        <div className='absolute inset-x-5 bottom-5 rounded-[6px] border border-white/18 bg-black/35 px-4 py-3 text-white shadow-2xl backdrop-blur-md translate-y-[120%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out'>
          <p className='font-mono text-[10px] uppercase tracking-[0.32em] text-rose-100'>
            {label}
          </p>
          {!compact ? (
            <p className='mt-1 text-sm text-white/72'>
              {t("A memory held in warm light")}
            </p>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}

function LensPortrait({
  photo,
  label,
  className = "",
}: {
  photo: string;
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-full bg-[#0a0f1d] shadow-[inset_0_0_45px_rgba(0,0,0,0.55)] ${className}`}
    >
      {photo ? (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src={photo}
          alt={label}
          className='absolute inset-0 h-full w-full object-cover opacity-100'
        />
      ) : null}
      <div className='absolute inset-0 rounded-full border border-white/20' />
      <div className='absolute inset-3 rounded-full border border-white/10' />
      <div className='absolute left-1/2 top-5 h-8 w-px -translate-x-1/2 bg-white/25' />
      <div className='absolute bottom-5 left-1/2 h-8 w-px -translate-x-1/2 bg-white/25' />
      <div className='absolute left-5 top-1/2 h-px w-8 -translate-y-1/2 bg-white/25' />
      <div className='absolute right-5 top-1/2 h-px w-8 -translate-y-1/2 bg-white/25' />
      <div className='absolute inset-0 rounded-full shadow-[inset_0_0_70px_rgba(0,0,0,0.72)]' />
    </div>
  );
}

function Preloader({ onDone }: { onDone: () => void }) {
  const [typed, setTyped] = useState("");
  const message = "Focusing on baby Sanju...";
  const progress = useMotionValue(0);

  useEffect(() => {
    const controls = animate(progress, [0, 0, 7.0, 9.6, 7.8, 8.0, 8.0], {
      duration: 6.2,
      times: [0, 0.6 / 6.2, 2.2 / 6.2, 3.8 / 6.2, 4.8 / 6.2, 5.6 / 6.2, 1.0],
      ease: "easeInOut",
    });
    return () => controls.stop();
  }, [progress]);

  const x = useTransform(progress, (p) => {
    const mod = p % 1;
    const fraction = mod < 0 ? mod + 1 : mod;
    return fraction * -24;
  });

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];

    for (let index = 0; index <= message.length; index += 1) {
      timers.push(
        setTimeout(
          () => {
            setTyped(message.slice(0, index));
          },
          900 + index * 52,
        ),
      );
    }

    timers.push(setTimeout(onDone, 5850));

    return () => timers.forEach(clearTimeout);
  }, [onDone]);

  return (
    <motion.div
      className='preloader-shell fixed inset-0 z-50 grid place-items-center overflow-hidden bg-[#050608] text-neutral-100'
      exit={{ opacity: 0, scale: 1.015, filter: "blur(8px)" }}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className='film-grain absolute inset-0 opacity-45' />
      <div className='scanline absolute inset-0 opacity-25' />
      <motion.div
        className='absolute inset-0 bg-[radial-gradient(circle_at_50%_46%,rgba(244,114,182,0.45),transparent_32%),radial-gradient(circle_at_68%_58%,rgba(110,231,183,0.3),transparent_28%)]'
        animate={{ scale: [1, 1.15, 1], opacity: [0.85, 1, 0.85] }}
        transition={{ repeat: Infinity, duration: 4.8, ease: "easeInOut" }}
      />
      <div className='absolute inset-x-0 top-0 flex h-10 items-center justify-between border-b border-white/8 px-4 font-mono text-[10px] uppercase tracking-[0.32em] text-white/35'>
        <span>{t("SRP 22")}</span>
        <span>09.06.2026</span>
      </div>
      <div className='absolute bottom-0 left-0 right-0 flex h-10 items-center justify-center border-t border-white/8 text-white/20'>
        <div className='w-[304px] overflow-hidden flex justify-center'>
          <motion.div
            className='flex gap-2 shrink-0 items-center'
            style={{ x }}
          >
            {Array.from({ length: 30 }).map((_, index) => {
              const isBig = index % 2 === 0;
              return (
                <span
                  key={index}
                  className={`w-1 rounded-full bg-current shrink-0 ${
                    isBig ? "h-5 text-white/30" : "h-2.5 text-white/10"
                  }`}
                />
              );
            })}
          </motion.div>
        </div>
      </div>
      <motion.div
        className='pointer-events-none absolute left-1/2 top-[43%] z-20 h-[88vmin] max-h-[46rem] w-[88vmin] max-w-[46rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,#ffffff_0%,#fff7ed_18%,rgba(255,244,228,0.58)_38%,rgba(244,114,182,0.18)_58%,transparent_78%)]'
        initial={{ opacity: 0, scale: 1.6 }}
        animate={{
          opacity: [0, 0, 1.0, 0.4, 0],
          scale: [1.6, 1.6, 1.0, 0.7, 0.4],
        }}
        transition={{
          delay: 5.05,
          duration: 0.92,
          times: [0, 0.18, 0.38, 0.68, 1],
          ease: "easeOut",
        }}
      />
      <div className='relative flex flex-col items-center gap-8 px-6 text-center'>
        <motion.div
          className='relative grid size-80 place-items-center rounded-full border border-white/20 bg-white/5 shadow-[0_0_110px_rgba(244,114,182,0.3)] backdrop-blur-md sm:size-96'
          initial={{ scale: 0.72, opacity: 0 }}
          animate={{ scale: [0.84, 1, 0.985, 1.018, 1], opacity: 1 }}
          transition={{ duration: 5.35, ease: "easeInOut" }}
        >
          <motion.div
            className='absolute inset-[-10px] rounded-full border border-amber-100/20'
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 24, ease: "linear" }}
          />
          <div className='absolute inset-4 rounded-full border border-white/10' />
          <div className='absolute inset-8 rounded-full border border-dashed border-white/20' />
          <div className='absolute h-px w-full bg-white/10' />
          <div className='absolute h-full w-px bg-white/10' />
          <div className='absolute left-1/2 top-4 h-5 w-px bg-rose-100/45' />
          <div className='absolute bottom-4 left-1/2 h-5 w-px bg-rose-100/45' />
          <div className='absolute left-4 top-1/2 h-px w-5 bg-rose-100/45' />
          <div className='absolute right-4 top-1/2 h-px w-5 bg-rose-100/45' />
          <motion.div
            className='absolute inset-20 rounded-full bg-black/35 shadow-[inset_0_0_60px_rgba(0,0,0,0.65)]'
            animate={{ scale: 1 }}
            transition={{ delay: 0.6, duration: 4.75, ease: "easeInOut" }}
          />
          <div className='absolute right-8 top-20 space-y-1'>
            {Array.from({ length: 5 }).map((_, index) => (
              <motion.span
                key={index}
                className='block h-1 w-10 rounded-full bg-emerald-100/25'
                animate={{ opacity: [0.25, 0.85, 0.25] }}
                transition={{
                  delay: index * 0.16,
                  repeat: Infinity,
                  duration: 1.2,
                }}
              />
            ))}
          </div>

          <motion.div
            className='relative size-64 overflow-hidden rounded-full bg-black shadow-[0_22px_80px_rgba(0,0,0,0.58)] sm:size-80'
            initial={{
              filter: "grayscale(1) blur(14px)",
              opacity: 0.1,
              scale: 0.82,
            }}
            animate={{
              filter: "grayscale(0.12) blur(0px)",
              opacity: 1,
              scale: [0.82, 0.96, 1],
            }}
            transition={{ delay: 2.55, duration: 2.25, ease: "easeOut" }}
          >
            <LensPortrait
              label='Sanju through the lens'
              photo={BABY_SANJU_PHOTO}
              className='h-full w-full'
            />

            {/* Red AF Indicators inside the circular lens container */}
            <div className='absolute inset-4 pointer-events-none z-10'>
              <div className='absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-red-500/80' />
              <div className='absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-red-500/80' />
              <div className='absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-red-500/80' />
              <div className='absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-red-500/80' />
              {/* Pulsing red focus indicator */}
              <div className='absolute top-2 left-2 flex items-center gap-1.5 bg-black/40 px-2 py-0.5 rounded backdrop-blur-sm border border-white/5'>
                <span className='h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse' />
                <span className='font-mono text-[8px] text-red-400 font-bold tracking-widest'>
                  AF-C
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
        <div className='w-full max-w-md space-y-4'>
          <p className='min-h-7 font-mono text-sm uppercase tracking-[0.35em] text-neutral-200 sm:text-base'>
            <span className='sr-only'>{t("Focusing on baby Sanju...")}</span>
            {typed}
            <span className='animate-pulse'>|</span>
          </p>
          <div className='mx-auto h-1 w-64 overflow-hidden rounded-full bg-white/10'>
            <motion.div
              className='h-full rounded-full bg-gradient-to-r from-rose-200 via-amber-100 to-emerald-200'
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 6.05, ease: "easeInOut" }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function SectionBlend({
  flip = false,
  theme,
}: {
  flip?: boolean;
  theme?: Theme;
}) {
  return (
    <div
      data-section-theme={theme}
      className={`section-blend pointer-events-none absolute inset-x-0 ${
        flip ? "bottom-0 rotate-180" : "top-0"
      } h-36 bg-gradient-to-b from-[#030305] via-[#030305]/70 to-transparent`}
    />
  );
}

function HeroSection({
  introComplete,
  theme,
  onReplayIntro,
}: {
  introComplete: boolean;
  theme: Theme;
  onReplayIntro?: () => void;
}) {
  const isLight = theme === "light";
  const [heroPhotoFailed, setHeroPhotoFailed] = useState(false);
  const [heroAssembled, setHeroAssembled] = useState(false);
  const heroPhotoSrc = heroPhotoFailed ? HERO_PLACEHOLDER_PHOTO : HERO_PHOTO;
  const [centerOffset, setCenterOffset] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        const padding = 64; // px-8 on both sides
        const gridWidth = Math.min(window.innerWidth - padding, 1216); // max-w-7xl (1280px) minus padding (64px) = 1216px
        setCenterOffset(gridWidth / 4);
      } else {
        setCenterOffset(0);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!introComplete) {
      setHeroAssembled(false);
      return;
    }

    const assemble = window.setTimeout(() => {
      setHeroAssembled(true);
    }, 1350);

    return () => window.clearTimeout(assemble);
  }, [introComplete]);

  return (
    <section
      className={`relative min-h-screen overflow-hidden px-5 py-12 transition-colors duration-700 sm:px-8 ${
        isLight
          ? "bg-[linear-gradient(135deg,#fffaf5,#fff1f2_44%,#ecfdf5)] text-slate-950"
          : "bg-[radial-gradient(circle_at_50%_18%,rgba(251,207,232,0.12),transparent_25%),radial-gradient(circle_at_20%_52%,rgba(244,114,182,0.2),transparent_30%),radial-gradient(circle_at_82%_74%,rgba(16,185,129,0.16),transparent_28%),linear-gradient(135deg,#050608,#1a121e_48%,#071416)] text-white"
      }`}
      data-theme-surface='hero'
    >
      <svg
        className='absolute -top-[999px] -left-[999px] w-0 h-0 pointer-events-none'
        aria-hidden='true'
      >
        <defs>
          <clipPath id='clip-keepsake' clipPathUnits='objectBoundingBox'>
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M 0.02 0.025 C 0.08 0.022, 0.12 0.028, 0.18 0.024 C 0.24 0.027, 0.29 0.021, 0.35 0.025 C 0.41 0.028, 0.46 0.023, 0.52 0.026 C 0.58 0.022, 0.63 0.028, 0.69 0.024 C 0.75 0.027, 0.81 0.021, 0.87 0.025 C 0.92 0.023, 0.95 0.027, 0.98 0.024 C 0.976 0.08, 0.983 0.14, 0.975 0.21 C 0.978 0.28, 0.973 0.35, 0.977 0.42 C 0.974 0.49, 0.979 0.56, 0.975 0.63 C 0.978 0.70, 0.973 0.77, 0.977 0.84 C 0.974 0.89, 0.978 0.94, 0.975 0.975 C 0.92 0.978, 0.86 0.972, 0.80 0.976 C 0.74 0.973, 0.68 0.978, 0.62 0.974 C 0.56 0.977, 0.50 0.972, 0.44 0.976 C 0.38 0.973, 0.32 0.978, 0.26 0.974 C 0.20 0.977, 0.14 0.972, 0.08 0.976 C 0.05 0.974, 0.03 0.978, 0.025 0.972 C 0.028 0.92, 0.022 0.86, 0.026 0.80 C 0.023 0.74, 0.028 0.68, 0.024 0.62 C 0.027 0.56, 0.022 0.50, 0.026 0.44 C 0.023 0.38, 0.028 0.32, 0.024 0.26 C 0.027 0.20, 0.022 0.14, 0.025 0.08 C 0.023 0.05, 0.027 0.03, 0.02 0.025 Z'
              fill='black'
            />
          </clipPath>
        </defs>
      </svg>
      <div
        className={`film-grain absolute inset-0 ${isLight ? "opacity-10" : "opacity-22"}`}
      />
      <motion.div
        className='pointer-events-none absolute left-1/2 top-[35%] z-30 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,#ffffff_0%,#fff7ed_25%,rgba(255,244,228,0.78)_55%,rgba(244,114,182,0.22)_75%,transparent_90%)]'
        style={{ width: "180vmax", height: "180vmax" }}
        initial={{ opacity: 1, scale: 0.9 }}
        animate={{
          opacity: introComplete ? 0 : 1,
          scale: introComplete ? 1.25 : 0.9,
        }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
      <motion.div
        className='pointer-events-none absolute left-1/2 top-[35%] h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10'
        animate={{ scale: [0.96, 1.04, 0.96], opacity: [0.24, 0.52, 0.24] }}
        transition={{ repeat: Infinity, duration: 6.2, ease: "easeInOut" }}
      />
      <div className='pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/8 to-transparent' />
      <div className='pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[34rem] w-[34rem] rounded-full bg-rose-300/14 blur-3xl' />
      <div className='pointer-events-none absolute bottom-[-10rem] right-[-8rem] size-[34rem] rounded-full bg-emerald-300/12 blur-3xl' />
      <div className='pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,transparent_0_38%,rgba(255,255,255,0.055)_38.1%_38.35%,transparent_38.45%_100%)]' />

      {/* Big happy 22nd birthday sanju header - top on desktop, hidden on mobile */}
      <div className='hidden lg:block w-full max-w-5xl mx-auto text-center relative z-20 mb-6 pt-1'>
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={heroAssembled ? { opacity: 1, y: 0 } : { opacity: 0, y: -8 }}
          transition={{ delay: 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className='flex flex-col items-center justify-center'
        >
          <h1
            className={`text-lg lg:text-[23px] font-medium tracking-[0.3em] uppercase flex items-center justify-center gap-3.5 pb-2.5`}
          >
            <Sparkles
              className={`size-4 shrink-0 ${isLight ? "text-rose-700/60" : "text-amber-300/60 animate-pulse"}`}
            />
            <span
              className={
                isLight
                  ? "text-[#4c1528]"
                  : "text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-rose-300 to-amber-100 drop-shadow-[0_2px_10px_rgba(244,63,94,0.15)]"
              }
            >
              {t("Happy 22nd Birthday, Sanju")}
            </span>
            <Sparkles
              className={`size-4 shrink-0 ${isLight ? "text-rose-700/60" : "text-amber-300/60 animate-pulse"}`}
            />
          </h1>
          {/* Subtle elegant underline */}
          <div
            className={`h-[1px] w-48 bg-gradient-to-r from-transparent ${isLight ? "via-rose-900/20" : "via-amber-300/30"} to-transparent`}
          />
        </motion.div>
      </div>

      {/* Grid container: two-column layout on desktop, single-column on mobile */}
      <div className='relative mx-auto grid max-w-7xl items-start gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14 pt-1 pb-16 lg:pt-0'>
        {/* Keepsake Photo Card - translated to the center initially, then slides to 0 on desktop */}
        <motion.div
          className='order-1 relative mx-auto grid w-full max-w-[36rem] place-items-center lg:mx-0'
          initial={{ opacity: 0, x: centerOffset, scale: 0.95 }}
          animate={
            introComplete
              ? {
                  opacity: 1,
                  x: heroAssembled ? 0 : centerOffset,
                  y: 0,
                  scale: 1,
                }
              : { opacity: 0, x: centerOffset, y: 0, scale: 0.95 }
          }
          transition={{
            x: { type: "spring", stiffness: 70, damping: 16, restDelta: 0.001 },
            opacity: { duration: 1.15, ease: "easeOut" },
            scale: { duration: 1.15, ease: "easeOut" },
            default: { duration: 1.15, ease: [0.22, 1, 0.36, 1] },
          }}
        >
          <motion.div
            className={`absolute size-[19rem] rounded-full border sm:size-[33rem] ${
              isLight ? "border-rose-900/10" : "border-white/10"
            }`}
            animate={{ rotate: 360, opacity: heroAssembled ? 1 : 0.45 }}
            transition={{
              rotate: { repeat: Infinity, duration: 44, ease: "linear" },
              opacity: { duration: 0.8 },
            }}
          />
          <motion.div
            className={`absolute size-[15rem] rounded-full border border-dashed sm:size-[25rem] ${
              isLight ? "border-rose-900/18" : "border-rose-100/20"
            }`}
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 52, ease: "linear" }}
          />
          <div
            className='absolute size-[20rem] sm:size-[34rem]'
            aria-hidden='true'
          >
            {Array.from({ length: 22 }).map((_, index) => {
              const angle = (index / 22) * 360;
              return (
                <span
                  key={index}
                  className='absolute left-1/2 top-1/2'
                  style={{
                    transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(calc(-1 * min(40vw, 16rem))) rotate(-${angle}deg)`,
                  }}
                >
                  <motion.span
                    className={`block rounded-full ${
                      index % 3 === 0
                        ? "size-2 bg-emerald-100"
                        : index % 3 === 1
                          ? "size-1.5 bg-rose-100"
                          : "size-1 bg-amber-100"
                    } shadow-[0_0_18px_currentColor]`}
                    initial={{ opacity: 0, scale: 0.4 }}
                    animate={
                      introComplete
                        ? { opacity: [0.45, 1, 0.6], scale: [0.75, 1.2, 0.9] }
                        : { opacity: 0, scale: 0.4 }
                    }
                    transition={{
                      delay: 0.22 + index * 0.026,
                      duration: 2.6,
                      repeat: Infinity,
                      repeatDelay: 2.4,
                      ease: "easeInOut",
                    }}
                  />
                </span>
              );
            })}
          </div>

          {/* Surrounding Stickers - fade and slide into place after delay */}
          <motion.div
            className={`absolute -left-2 top-8 z-10 rotate-[-8deg] rounded-[8px] border px-4 py-3 shadow-2xl backdrop-blur-md ${
              isLight
                ? "border-rose-900/10 bg-white/72 text-rose-950"
                : "border-white/12 bg-black/28 text-white/78"
            }`}
            initial={false}
            animate={
              heroAssembled
                ? { opacity: 1, y: 0, rotate: -8 }
                : { opacity: 0, y: 16, rotate: -3 }
            }
            transition={{ delay: 0.08, duration: 0.6, ease: "easeOut" }}
          >
            <p className='font-mono text-[9px] uppercase tracking-[0.26em] opacity-55'>
              {t("JUNE 9, 2026")}
            </p>
            <p className='mt-1 font-semibold'>{t("THE 22ND CHAPTER")}</p>
          </motion.div>
          <motion.div
            className={`absolute -right-1 top-16 z-10 rotate-6 rounded-[8px] border px-4 py-3 shadow-2xl backdrop-blur-md ${
              isLight
                ? "border-rose-900/15 bg-rose-50/90 text-rose-950"
                : "border-rose-400/25 bg-rose-950/40 text-rose-50 shadow-[0_0_25px_rgba(244,63,94,0.15)]"
            }`}
            initial={false}
            animate={
              heroAssembled
                ? { opacity: 1, y: 0, rotate: 6 }
                : { opacity: 0, y: 18, rotate: 2 }
            }
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          >
            <p
              className={`font-mono text-[8px] uppercase tracking-[0.3em] ${isLight ? "text-rose-800/70" : "text-rose-300 font-bold"}`}
            >
              {t("HAPPY BIRTHDAY")}
            </p>
            <p className='mt-1 text-sm font-extrabold uppercase tracking-[0.16em]'>
              {t("SANJU")}
            </p>
          </motion.div>
          <motion.div
            onClick={onReplayIntro}
            title={t("Replay Intro Animation")}
            className={`absolute bottom-12 left-4 z-10 flex h-16 w-24 -rotate-6 items-center justify-center rounded-[8px] border shadow-2xl cursor-pointer hover:scale-105 active:scale-95 transition-transform duration-200 ${
              isLight
                ? "border-rose-950/12 bg-white shadow-[0_10px_25px_rgba(0,0,0,0.08)]"
                : "border-white/20 bg-white shadow-[0_12px_36px_rgba(0,0,0,0.45),0_0_20px_rgba(255,255,255,0.1)]"
            }`}
            initial={false}
            animate={
              heroAssembled
                ? { opacity: 1, y: 0, rotate: -6 }
                : { opacity: 0, y: -14, rotate: -1 }
            }
            transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
          >
            <div className='relative flex items-center justify-center size-11 rounded-full border border-black/5 bg-neutral-200 shadow-inner'>
              <div className='size-8 rounded-full border border-neutral-300 bg-neutral-900 flex items-center justify-center relative'>
                <div className='absolute inset-0.5 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(56,189,248,0.22)_0%,transparent_50%)]' />
                <div className='absolute inset-0.5 rounded-full bg-[radial-gradient(circle_at_70%_70%,rgba(244,63,94,0.12)_0%,transparent_50%)]' />
                <div className='size-4.5 rounded-full border border-neutral-700 bg-neutral-950 flex items-center justify-center relative'>
                  <div className='size-2 rounded-full bg-black shadow-[inset_0_0_3px_rgba(0,255,255,0.4)]' />
                </div>
              </div>
            </div>
            <div className='absolute top-2 right-2 size-1.5 rounded-full bg-[radial-gradient(circle_at_50%_50%,#ffe082_0%,#ffa000_80%)] border border-neutral-300 shadow-[0_0_3px_rgba(255,160,0,0.3)]' />
            <div className='absolute top-2 left-2 size-1 rounded-full bg-rose-500 animate-pulse shadow-[0_0_3px_rgba(244,63,94,0.6)]' />
          </motion.div>
          <motion.div
            className='absolute bottom-20 right-14 z-10 grid size-9 rotate-12 place-items-center rounded-full border border-rose-100/30 bg-rose-100/90 text-rose-950 shadow-xl'
            initial={false}
            animate={
              heroAssembled
                ? { opacity: 1, scale: 1, rotate: 12 }
                : { opacity: 0, scale: 0.5, rotate: -10 }
            }
            transition={{
              delay: 0.42,
              duration: 0.58,
              type: "spring",
              stiffness: 220,
              damping: 18,
            }}
          >
            <Heart className='size-4 fill-rose-500 text-rose-500' />
          </motion.div>

          {/* Keepsake Card wrapper */}
          <motion.div
            className='relative aspect-[4/5] h-[min(52svh,29rem)] min-h-[19rem] w-[min(78vw,23rem)] overflow-visible drop-shadow-[0_38px_80px_rgba(0,0,0,0.48)] sm:h-[33rem]'
            initial={false}
            animate={
              introComplete
                ? { scale: 1, rotate: -1.5, filter: "blur(0px)" }
                : { scale: 1, rotate: -1.5, filter: "blur(12px)" }
            }
            transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.018, rotate: -0.6 }}
          >
            <div
              className='absolute inset-0 overflow-hidden bg-white p-3 border border-neutral-200/50 shadow-md'
              style={{ clipPath: "url(#clip-keepsake)" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                key={heroPhotoSrc}
                src={heroPhotoSrc}
                alt={
                  heroPhotoFailed
                    ? "Sanju birthday placeholder portrait"
                    : "Sanju birthday portrait"
                }
                className='absolute inset-3 h-[calc(100%-1.5rem)] w-[calc(100%-1.5rem)] object-cover transition duration-700 opacity-100'
                style={{ clipPath: "url(#clip-keepsake)" }}
                onError={() => {
                  setHeroPhotoFailed(true);
                }}
              />
              <motion.div
                className='pointer-events-none absolute inset-6 border border-white/35'
                style={{ clipPath: "url(#clip-keepsake)" }}
                animate={{ opacity: heroAssembled ? 1 : 0 }}
                transition={{ duration: 0.55 }}
              />
              <div className='pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,transparent_0%,rgba(255,255,255,0.28)_38%,transparent_58%)]' />
              {/* <div className="absolute bottom-5 left-6 right-6 rounded-[8px] border border-rose-900/10 bg-white/90 px-4 py-3 text-neutral-950 shadow-lg backdrop-blur">
                <p className="font-mono text-[8px] uppercase tracking-[0.22em] text-rose-800 sm:text-[10px] sm:tracking-[0.28em]">
                  {t("09 June 2026")}
                </p>
                <p className="mt-1 text-sm font-semibold leading-snug sm:text-lg">
                  {t("a keepsake image for Sanju at 22")}
                </p>
              </div> */}
            </div>
            <div
              className='absolute right-5 top-5 grid size-8 place-items-center rounded-full border border-rose-900/10 bg-white/70 text-rose-950 backdrop-blur'
              aria-label='tiny animal kindness hint'
            >
              <PawPrint className='size-4' />
            </div>
          </motion.div>
        </motion.div>

        {/* Text Content - fades and slides in after delay (left aligned on desktop, centered on mobile) */}
        <motion.div
          className='order-2 z-10 mx-auto flex w-full max-w-2xl flex-col items-center text-center lg:items-start lg:text-left'
          initial={false}
          animate={heroAssembled ? { opacity: 1, y: 0 } : { opacity: 0, y: 34 }}
          transition={{ delay: 0.28, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1
            className={`mt-5 max-w-4xl font-birthday text-[clamp(2rem,4.5vw,3.6rem)] font-extrabold leading-[1.2] tracking-normal sm:mt-7 ${
              isLight ? "text-[#4c1528]" : "text-white"
            }`}
          >
            {t("Twenty-two years of")}
            <span
              className={`block text-[1.15em] mt-2 ${isLight ? "text-[#a23b74]" : "text-rose-100"}`}
            >
              {t("adorable chaos")}
            </span>
          </h1>

          <p
            className={`mt-5 max-w-xl text-base leading-7 sm:text-xl sm:leading-9 ${
              isLight ? "text-slate-700" : "text-white/74"
            }`}
          >
            {t(
              "To the girl who is a quiet mystery on the outside and an absolute riot on the inside. May this year bring you as much warmth and color as you bring to the world.",
            )}
          </p>

          <div
            className={`mt-6 w-full max-w-xl rounded-[8px] border p-4 text-left backdrop-blur ${
              isLight
                ? "border-rose-900/10 bg-white/58"
                : "border-white/12 bg-white/[0.075]"
            }`}
          >
            <p className='font-mono text-[10px] uppercase tracking-[0.28em] opacity-55'>
              {t("a note for this birthday")}
            </p>
            <p className='mt-3 text-base font-semibold leading-7 sm:text-lg'>
              {t(
                "Twenty-two looks beautiful on you. Just like the nature and animals you capture behind a lens, you have a rare, natural magic that I am so lucky to witness.",
              )}
            </p>
          </div>

          <div className='mt-7 flex w-full max-w-xl flex-col gap-3 sm:flex-row sm:items-center'>
            <a
              href='#milestones'
              className={`inline-flex flex-1 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition hover:-translate-y-0.5 ${
                isLight
                  ? "bg-[#581c2c] text-white shadow-[0_22px_70px_rgba(88,28,44,0.25)]"
                  : "bg-rose-100 text-rose-950"
              }`}
            >
              <Sparkles className='size-4' />
              {t("Step into your timeline")}
            </a>
            <Link
              href='/gallery'
              className={`hidden flex-1 items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold backdrop-blur transition hover:-translate-y-0.5 sm:inline-flex ${
                isLight
                  ? "border-slate-900/12 bg-white/48 text-slate-800"
                  : "border-white/14 bg-white/8 text-white/76"
              }`}
            >
              <Camera className='size-4' />
              {t("Explore the gallery")}
            </Link>
          </div>
        </motion.div>
      </div>
      <motion.a
        href='#milestones'
        className={`absolute bottom-4 left-1/2 hidden size-11 -translate-x-1/2 place-items-center rounded-full border backdrop-blur sm:grid ${
          isLight
            ? "border-rose-900/12 bg-white/58 text-rose-950"
            : "border-white/25 bg-white/10 text-white"
        }`}
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        aria-label="Scroll to Sanju's milestones"
      >
        <ArrowDown className='size-5' />
      </motion.a>
      <SectionBlend theme={theme} flip />
    </section>
  );
}

function MilestoneCard({
  moment,
  index,
  total,
  scrollYProgress,
  onClick,
}: {
  moment: Milestone;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
  onClick: () => void;
}) {
  // How far this card is from the "active" fractional index
  // activeFloat goes from 0 → total-1 as scroll goes 0 → 1
  const distanceFromActive = useTransform(scrollYProgress, (p) => {
    const activeFloat = p * (total - 1);
    return index - activeFloat;
  });

  // Horizontal offset: each slot is 360px wide on desktop, 92vw on mobile
  // We use a fixed pixel slot width via CSS variable trick → just use 340 for math,
  // CSS handles actual card width responsively.
  const SLOT = 340;

  const x = useTransform(distanceFromActive, (d) => d * SLOT);

  // Scale: 1 at center, 0.78 at ±1, 0.62 at ±2, invisible beyond
  const scale = useTransform(distanceFromActive, (d) => {
    const abs = Math.abs(d);
    if (abs < 0.01) return 1;
    if (abs >= 2.5) return 0.55;
    // smoothstep between 0 and 2.5
    const t = Math.min(abs / 2.5, 1);
    const eased = t * t * (3 - 2 * t);
    return 1 - eased * 0.45;
  });

  // Opacity: 1 at center, dim at ±1, gone at ±2.2
  const opacity = useTransform(distanceFromActive, (d) => {
    const abs = Math.abs(d);
    if (abs < 0.3) return 1;
    if (abs > 2.2) return 0;
    const t = (abs - 0.3) / 1.9;
    const eased = t * t * (3 - 2 * t);
    return 1 - eased * 0.92;
  });

  // Subtle tilt: tilts slightly toward center
  const rotateY = useTransform(distanceFromActive, (d) => {
    const clamped = Math.max(-1.5, Math.min(1.5, d));
    return clamped * -18; // left cards tilt right, right cards tilt left
  });

  // z-index: center card on top
  const zIndex = useTransform(distanceFromActive, (d) => {
    const abs = Math.abs(d);
    if (abs < 0.5) return 30;
    if (abs < 1.5) return 20;
    return 5;
  });

  // Shadow and border opacity: fades out faster than the card (gone at ±0.8)
  const shadowOpacity = useTransform(distanceFromActive, (d) => {
    return Math.max(0, 1 - Math.abs(d) / 0.8);
  });

  // Hide off-screen cards to optimize GPU rendering
  const visibility = useTransform(distanceFromActive, (d) => {
    return Math.abs(d) > 2.5 ? "hidden" : "visible";
  });

  return (
    <>
      {/* Shadow layer behind the card for glow effect (hardware-accelerated opacity) */}
      <motion.div
        className='absolute left-1/2 top-1/2 w-[min(82vw,300px)] sm:w-[300px] md:w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-2xl pointer-events-none'
        style={{
          x,
          scale,
          opacity: shadowOpacity,
          rotateY,
          zIndex: useTransform(zIndex, (z) => z - 1),
          visibility,
          boxShadow:
            "0 24px 60px rgba(0,0,0,0.65), 0 0 50px rgba(244,114,182,0.45)",
          transformStyle: "preserve-3d",
          willChange: "transform, opacity",
        }}
      />

      <motion.article
        data-milestone-card='true'
        onClick={onClick}
        className='absolute left-1/2 top-1/2 w-[min(82vw,300px)] sm:w-[300px] md:w-[320px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl bg-[#080b12] backdrop-blur-md cursor-pointer'
        style={{
          x,
          scale,
          opacity,
          rotateY,
          zIndex,
          visibility,
          boxShadow: "0 16px 40px rgba(0,0,0,0.5)",
          border: "1px solid rgba(255,255,255,0.08)",
          transformStyle: "preserve-3d",
          willChange: "transform, opacity",
        }}
      >
        {/* Gradient top photo area */}
        <div className={`bg-gradient-to-br ${moment.tone} p-1`}>
          <SanjuFrame
            label={`Age ${moment.age}`}
            photo={moment.photo}
            hideOverlay={true}
            className='h-[26vh] min-h-[160px] max-h-[220px] rounded-xl sm:h-[30vh] sm:max-h-[270px] lg:h-[32vh] lg:max-h-[310px]'
          />
        </div>

        {/* Card body */}
        <div className='p-4 sm:p-5'>
          <div className='flex items-center justify-between gap-2'>
            <span className='rounded-full bg-gradient-to-r from-rose-500/20 to-pink-500/20 border border-rose-300/30 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-rose-200'>
              Age {moment.age}
            </span>
            <span className='rounded-full border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[9px] uppercase tracking-widest text-white/60'>
              {moment.yearLabel}
            </span>
          </div>
          <h3 className='mt-3.5 text-lg font-semibold leading-snug sm:text-xl line-clamp-2'>
            {moment.title}
          </h3>
          <p className='mt-2 text-xs leading-relaxed text-white/55 line-clamp-3 sm:text-sm'>
            {moment.text}
          </p>
        </div>

        {/* Centre highlight border overlay */}
        <motion.div
          className='pointer-events-none absolute inset-0 rounded-2xl border-[1.5px] border-pink-400/60'
          style={{
            opacity: useTransform(distanceFromActive, (d) =>
              Math.max(0, 1 - Math.abs(d) / 0.5),
            ),
          }}
        />
      </motion.article>
    </>
  );
}

function MilestonesSection({ theme }: { theme: Theme }) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const activeIndexRef = useRef(0);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const handleCardClick = (cardIndex: number) => {
    const section = sectionRef.current;
    if (!section) return;

    const rect = section.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const sectionHeight = section.offsetHeight;
    const sectionTop = window.scrollY + rect.top;
    const minScroll = sectionTop;
    const maxScroll = sectionTop + sectionHeight - viewportHeight;
    const totalRange = maxScroll - minScroll;

    if (totalRange <= 0) return;

    activeIndexRef.current = cardIndex;
    const targetScrollY =
      minScroll + (cardIndex / (MILESTONES.length - 1)) * totalRange;

    window.scrollTo({
      top: targetScrollY,
      behavior: "smooth",
    });
  };

  // Active index label for display
  const [activeLabel, setActiveLabel] = useState(1);
  useEffect(() => {
    const unsub = scrollYProgress.on("change", (p) => {
      setActiveLabel(Math.round(p * (MILESTONES.length - 1)) + 1);
    });
    return unsub;
  }, [scrollYProgress]);

  const handlePrev = () => {
    const currentProgress = scrollYProgress.get();
    const currentIndex = Math.round(currentProgress * (MILESTONES.length - 1));
    if (currentIndex > 0) {
      handleCardClick(currentIndex - 1);
    }
  };

  const handleNext = () => {
    const currentProgress = scrollYProgress.get();
    const currentIndex = Math.round(currentProgress * (MILESTONES.length - 1));
    if (currentIndex < MILESTONES.length - 1) {
      handleCardClick(currentIndex + 1);
    }
  };

  return (
    <section
      ref={sectionRef}
      id='milestones'
      data-theme-surface='section'
      data-section-theme={theme}
      className='relative h-[590vh] bg-[#05070b] text-white'
    >
      <div className='sticky top-0 h-screen overflow-hidden'>
        {/* Background ambience */}
        <div className='film-grain absolute inset-0 opacity-20' />
        <SectionBlend theme={theme} />
        <SectionBlend theme={theme} flip />
        <div className='absolute -left-32 top-16 size-80 rounded-full bg-rose-400/8 blur-3xl pointer-events-none' />
        <div className='absolute -right-32 bottom-16 size-80 rounded-full bg-emerald-400/8 blur-3xl pointer-events-none' />

        <div className='relative z-10 flex h-full flex-col px-5 pt-8 sm:px-8 sm:pt-12'>
          {/* Header */}
          <div className='mx-auto w-full max-w-5xl shrink-0'>
            <p className='font-mono text-[10px] uppercase tracking-[0.42em] text-emerald-300'>
              {t("22 milestone slides")}
            </p>
            <div className='mt-2 flex items-end justify-between gap-4'>
              <div>
                <h2 className='text-2xl font-semibold leading-tight sm:text-4xl lg:text-5xl'>
                  {t("Twenty-two little moments, held with care")}
                </h2>
                <p className='mt-1.5 text-xs text-white/50 sm:text-sm'>
                  {t(
                    "Scroll gently through each year, one warm frame at a time",
                  )}
                </p>
              </div>
              <div className='shrink-0 text-right'>
                <p className='font-mono text-3xl font-bold tabular-nums text-white/20 sm:text-5xl'>
                  {String(activeLabel).padStart(2, "0")}
                </p>
                <p className='font-mono text-[9px] uppercase tracking-widest text-white/30'>
                  {t("of")} {MILESTONES.length}
                </p>
              </div>
            </div>

            {/* Progress bar */}
            <div className='mt-4 h-0.5 w-full overflow-hidden rounded-full bg-white/8'>
              <motion.div
                className='h-full rounded-full bg-gradient-to-r from-rose-300 via-amber-200 to-emerald-300'
                style={{ width: progressWidth }}
              />
            </div>
          </div>

          {/* Carousel stage — cards render absolutely inside here */}
          <div
            className='relative flex-1 overflow-hidden'
            style={{ perspective: "1200px" }}
          >
            {MILESTONES.map((moment, index) => (
              <MilestoneCard
                key={moment.age}
                moment={moment}
                index={index}
                total={MILESTONES.length}
                scrollYProgress={scrollYProgress}
                onClick={() => handleCardClick(index)}
              />
            ))}

            {/* Navigation Arrows */}
            <button
              onClick={handlePrev}
              disabled={activeLabel <= 1}
              className='absolute left-4 top-1/2 z-40 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white backdrop-blur-md transition hover:bg-black/65 hover:scale-105 active:scale-95 disabled:opacity-15 disabled:pointer-events-none'
              aria-label='Previous milestone'
            >
              <ChevronLeft className='size-6' />
            </button>
            <button
              onClick={handleNext}
              disabled={activeLabel >= MILESTONES.length}
              className='absolute right-4 top-1/2 z-40 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white backdrop-blur-md transition hover:bg-black/65 hover:scale-105 active:scale-95 disabled:opacity-15 disabled:pointer-events-none'
              aria-label='Next milestone'
            >
              <ChevronRight className='size-6' />
            </button>

            {/* Left / right vignette to hide peeking cards cleanly */}
            <div
              className={`pointer-events-none absolute inset-y-0 left-0 w-[15%] bg-gradient-to-r to-transparent ${
                theme === "light" ? "from-[#fff7ed]" : "from-[#05070b]"
              }`}
            />
            <div
              className={`pointer-events-none absolute inset-y-0 right-0 w-[15%] bg-gradient-to-l to-transparent ${
                theme === "light" ? "from-[#ecfdf5]" : "from-[#05070b]"
              }`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function galleryTileClass(aspectRatio: number, index: number) {
  if (aspectRatio < 0.8) {
    return index % 3 === 0 ? "sm:row-span-2" : "lg:row-span-2";
  }

  if (aspectRatio > 1.2) {
    return index % 2 === 0 ? "sm:col-span-2" : "lg:col-span-2";
  }

  return "";
}

function GalleryTeaser({ theme }: { theme: Theme }) {
  return (
    <section
      id='gallery-teaser'
      data-theme-surface='section'
      data-section-theme={theme}
      className='relative overflow-hidden bg-[#05070b] px-5 py-24 text-white sm:px-8'
    >
      <SectionBlend theme={theme} />
      <div className='film-grain absolute inset-0 opacity-20' />
      <div className='absolute -left-28 top-24 size-80 rounded-full bg-amber-200/10 blur-3xl' />
      <div className='absolute -right-24 bottom-12 size-96 rounded-full bg-rose-300/10 blur-3xl' />
      <div className='relative mx-auto max-w-6xl'>
        <div className='flex flex-col gap-6 md:flex-row md:items-end md:justify-between'>
          <div>
            <p className='font-mono text-xs uppercase tracking-[0.42em] text-amber-100'>
              {t("Memory archive")}
            </p>
            <h2 className='mt-4 max-w-3xl text-4xl font-semibold sm:text-6xl'>
              {t("Glimpses of Sanju, the way the world keeps her")}
            </h2>
            <p className='mt-5 max-w-2xl leading-7 text-white/65'>
              {t(
                "A small preview of her portraits, her view of the world, the people around her, and the gentle things she always notices first.",
              )}
            </p>
          </div>
          <Link
            href='/gallery'
            className='hidden items-center justify-center gap-2 rounded-full border border-white/16 bg-white/10 px-5 py-3 text-sm font-semibold text-white shadow-2xl backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/15 md:inline-flex'
          >
            <ImageIcon className='size-4' />
            {t("Open full gallery")}
          </Link>
        </div>

        <div className='mt-8'>
          <ImageGallery
            images={(() => {
              if (!galleryPhotos || galleryPhotos.length === 0) return [];
              const count = 12; // 12 photos distributed across the entire gallery
              const selected: typeof galleryPhotos = [];
              const step = (galleryPhotos.length - 1) / (count - 1);
              for (let i = 0; i < count; i++) {
                const idx = Math.min(
                  galleryPhotos.length - 1,
                  Math.max(0, Math.floor(i * step)),
                );
                selected.push(galleryPhotos[idx]);
              }
              // Deduplicate just in case
              const uniqueSelected = selected.filter(
                (item, idx, self) =>
                  self.findIndex((t) => t.id === item.id) === idx,
              );
              return uniqueSelected.map((photo) => ({
                id: photo.id,
                src: photo.src,
                title: photo.title,
                aspectRatio: photo.aspectRatio,
              }));
            })()}
          />
        </div>
        <Link
          href='/gallery'
          className='mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/16 bg-white/10 px-5 py-3 text-sm font-semibold text-white shadow-2xl backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/15 md:hidden'
        >
          <ImageIcon className='size-4' />
          {t("Open full gallery")}
        </Link>
      </div>
    </section>
  );
}

function pickNikkiReply(input: string, turn: number) {
  const normalized = input.toLowerCase();
  const bucket =
    normalized.includes("low") ||
    normalized.includes("sad") ||
    normalized.includes("tired") ||
    normalized.includes("bad")
      ? nikkiReplies.low
      : normalized.includes("cute") ||
          normalized.includes("sweet") ||
          normalized.includes("nice")
        ? nikkiReplies.cute
        : normalized.includes("matter") ||
            normalized.includes("special") ||
            normalized.includes("why")
          ? nikkiReplies.matter
          : normalized.includes("birthday") ||
              normalized.includes("wish") ||
              normalized.includes("22")
            ? nikkiReplies.birthday
            : nikkiReplies.default;

  return bucket.at(turn % bucket.length) ?? "";
}

function NikkiLoveOverlay({ theme }: { theme: Theme }) {
  const [input, setInput] = useState("");
  const [turn, setTurn] = useState(0);
  const [open, setOpen] = useState(false);
  const [showPill, setShowPill] = useState(false);
  const [messages, setMessages] = useState([
    {
      from: "Nikki",
      text: "Hi Sanju. This little note is here whenever you need to hear something soft, honest, and completely on your side.",
    },
  ]);

  const sendMessage = (value: string) => {
    const trimmed = value.trim();

    if (!trimmed) {
      return;
    }

    const reply = pickNikkiReply(trimmed, turn);
    setMessages((current) => [
      ...current,
      { from: "Sanju", text: trimmed },
      { from: "Nikki", text: reply },
    ]);
    setInput("");
    setTurn((current) => current + 1);
  };

  useEffect(() => {
    const updateVisibility = () => {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? window.scrollY / scrollable : 1;
      setShowPill(progress > 0.78);
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility);

    return () => {
      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("resize", updateVisibility);
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {showPill || open ? (
          <motion.button
            type='button'
            onClick={() => setOpen(true)}
            className='fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full border border-rose-100/30 bg-rose-100 px-4 py-3 text-sm font-semibold text-rose-950 shadow-[0_18px_55px_rgba(244,63,94,0.35)] backdrop-blur transition hover:-translate-y-1 sm:bottom-8 sm:right-8'
            initial={{ opacity: 0, y: 28, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.94 }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            aria-label='Open a love note from Nikki'
          >
            <Heart className='size-4 fill-rose-500 text-rose-500' />
            {t("Love from Nikki")}
          </motion.button>
        ) : null}

        {open ? (
          <motion.div
            className='fixed inset-0 z-50 grid place-items-center bg-black/72 px-4 py-8 backdrop-blur-md'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role='dialog'
            aria-modal='true'
            aria-label='Nikki love note chat'
          >
            <motion.div
              className='relative max-h-[88vh] w-full max-w-3xl overflow-hidden rounded-[8px] border border-white/14 bg-[linear-gradient(135deg,#160b16,#33122b_52%,#052a22)] text-white shadow-[0_34px_100px_rgba(0,0,0,0.56)]'
              data-section-theme={theme}
              initial={{ opacity: 0, y: 34, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 220, damping: 28 }}
            >
              <div className='film-grain absolute inset-0 opacity-15' />
              <div className='relative border-b border-white/10 px-5 py-5 sm:px-6'>
                <button
                  type='button'
                  onClick={() => setOpen(false)}
                  className='absolute right-4 top-4 rounded-full border border-white/12 bg-white/8 px-3 py-1 text-xs text-white/70 transition hover:bg-white/14'
                >
                  {t("Close")}
                </button>
                <p className='font-mono text-xs uppercase tracking-[0.34em] text-rose-100'>
                  {t("Nikki's corner")}
                </p>
                <h2 className='mt-3 pr-20 text-3xl font-semibold sm:text-5xl'>
                  {t("A pocket of words for Sanju")}
                </h2>
                <p className='mt-3 max-w-2xl text-sm leading-6 text-white/64'>
                  {t(
                    "Open this whenever the page reaches your heart and you want one more little reminder that you are loved, protected, and never ordinary to me.",
                  )}
                </p>
              </div>

              <div className='relative flex max-h-[52vh] min-h-[300px] flex-col gap-4 overflow-y-auto px-5 py-5 sm:px-6'>
                {messages.map((message, index) => {
                  const isSanju = message.from === "Sanju";
                  return (
                    <motion.div
                      key={`${message.from}-${index}`}
                      className={`max-w-[86%] rounded-[8px] px-4 py-3 text-sm leading-6 ${
                        isSanju
                          ? "ml-auto bg-emerald-100 text-emerald-950"
                          : "bg-white text-neutral-950"
                      }`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <p className='font-mono text-[10px] uppercase tracking-[0.24em] opacity-55'>
                        {message.from}
                      </p>
                      <p className='mt-1'>{message.text}</p>
                    </motion.div>
                  );
                })}
              </div>

              <div className='relative flex flex-wrap gap-2 border-t border-white/10 px-5 py-4 sm:px-6'>
                {chatPrompts.map((prompt) => (
                  <button
                    key={prompt}
                    type='button'
                    onClick={() => sendMessage(prompt)}
                    className='rounded-full border border-white/14 bg-white/8 px-3 py-2 text-xs text-white/76 backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/14'
                  >
                    {prompt}
                  </button>
                ))}
              </div>

              <form
                className='relative flex gap-3 border-t border-white/10 p-4 sm:p-5'
                onSubmit={(event) => {
                  event.preventDefault();
                  sendMessage(input);
                }}
              >
                <input
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  placeholder={t("Type anything, Sanju...")}
                  className='min-w-0 flex-1 rounded-full border border-white/12 bg-black/24 px-4 py-3 text-sm text-white outline-none placeholder:text-white/35 focus:border-rose-100/55'
                />
                <button
                  type='submit'
                  className='grid size-12 shrink-0 place-items-center rounded-full bg-rose-100 text-rose-950 transition hover:scale-105'
                  aria-label='Send message'
                >
                  <Send className='size-5' />
                </button>
              </form>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

function RemovedLettersSectionShell() {
  return null;
}

function AnimalKindnessSection({ theme }: { theme: Theme }) {
  const isLight = theme === "light";
  const [isPortraitOpen, setIsPortraitOpen] = useState(false);
  const truthNotes = [
    t(
      "I see the way your heart notices small lives before the world asks you to.",
    ),
    t(
      "I love that cruelty never feels normal to you; your softness has a spine.",
    ),
    t(
      "You make gentleness feel strong, especially around the lives that depend on care.",
    ),
  ];

  return (
    <section
      data-theme-surface='section'
      data-section-theme={theme}
      className={cn(
        "relative overflow-hidden px-5 py-18 sm:px-8 sm:py-24",
        isLight ? "bg-[#fff8ef] text-slate-950" : "bg-[#030305] text-white",
      )}
    >
      <div
        className={cn(
          "film-grain absolute inset-0",
          isLight ? "opacity-[0.05]" : "opacity-[0.14]",
        )}
      />
      <SectionBlend theme={theme} />
      <div
        className={cn(
          "absolute -left-28 top-20 size-72 rounded-full blur-3xl",
          isLight ? "bg-emerald-200/35" : "bg-emerald-200/10",
        )}
      />
      <div
        className={cn(
          "absolute -right-20 bottom-20 size-80 rounded-full blur-3xl",
          isLight ? "bg-rose-200/45" : "bg-rose-200/10",
        )}
      />
      <div className='absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-emerald-200/24 to-transparent' />
      <div className='absolute left-1/2 top-20 h-[72%] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-rose-100/12 to-transparent' />
      <div className='relative mx-auto grid max-w-6xl items-center gap-7 sm:gap-9 lg:grid-cols-[0.92fr_1.08fr]'>
        <motion.div
          className='order-1 lg:col-start-1 lg:row-start-1'
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.7 }}
        >
          <p
            className={cn(
              "mx-auto w-fit rounded-full border px-4 py-2 text-center font-mono text-[0.66rem] uppercase tracking-[0.22em] shadow-[0_14px_42px_rgba(0,0,0,0.18)] backdrop-blur-xl sm:tracking-[0.32em] lg:mx-0 lg:rounded-none lg:border-0 lg:bg-transparent lg:px-0 lg:py-0 lg:text-left lg:text-xs lg:tracking-[0.42em] lg:shadow-none lg:backdrop-blur-0",
              isLight
                ? "border-emerald-200/70 bg-white/72 text-emerald-700 lg:text-emerald-700"
                : "border-emerald-200/22 bg-emerald-100/[0.08] text-emerald-100 lg:text-emerald-200",
            )}
          >
            {t("What I see in you")}
          </p>
          <h2 className='mt-4 text-4xl font-semibold leading-tight sm:text-6xl'>
            {t("I see a heart that makes gentleness feel strong")}
          </h2>
          <p
            className={cn(
              "mt-5 max-w-2xl leading-7",
              isLight ? "text-slate-700" : "text-white/66",
            )}
          >
            {t(
              "I see it in the way you care for lives that cannot ask for kindness. I see it in your love for dogs, in the way nature softens you, and in how deeply unfairness bothers your heart.",
            )}
          </p>
        </motion.div>

        <motion.div
          className='order-3 lg:col-start-1 lg:row-start-2'
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ delay: 0.08, duration: 0.65 }}
        >
          <div className='mt-8 space-y-3 sm:mt-10'>
            {truthNotes.map((note, index) => (
              <div
                key={note}
                className={cn(
                  "rounded-[8px] border p-4 shadow-2xl backdrop-blur sm:p-5",
                  isLight
                    ? "border-rose-900/10 bg-white/62 text-slate-800 shadow-rose-200/20"
                    : "border-white/10 bg-white/[0.065] text-white/72 shadow-black/20",
                )}
              >
                <div className='flex items-start gap-4'>
                  <div
                    className={cn(
                      "grid size-9 shrink-0 place-items-center rounded-full sm:size-10",
                      isLight
                        ? "bg-rose-100 text-rose-900"
                        : "bg-rose-100/90 text-rose-950",
                    )}
                  >
                    {index === 1 ? (
                      <Heart className='size-4' />
                    ) : index === 2 ? (
                      <Sparkles className='size-4' />
                    ) : (
                      <PawPrint className='size-4' />
                    )}
                  </div>
                  <p className='text-sm leading-6 sm:text-base sm:leading-7'>
                    {note}
                  </p>
                </div>
              </div>
            ))}
            <div
              className={cn(
                "relative mx-auto overflow-hidden rounded-[18px] border px-5 py-6 text-center shadow-[0_22px_70px_rgba(0,0,0,0.22)] backdrop-blur-xl sm:rounded-[8px] sm:p-5 sm:text-left lg:mx-0",
                isLight
                  ? "border-emerald-900/10 bg-white/72 shadow-emerald-100/60"
                  : "border-emerald-200/15 bg-emerald-200/[0.055] shadow-black/30",
              )}
            >
              <div className='absolute -right-10 -top-12 size-32 rounded-full bg-emerald-200/20 blur-2xl' />
              <div className='absolute -left-12 bottom-0 size-28 rounded-full bg-rose-200/15 blur-2xl' />
              <p
                className={cn(
                  "relative mx-auto inline-flex items-center gap-2 rounded-full border px-3.5 py-2 font-mono text-[0.62rem] uppercase tracking-[0.2em] sm:mx-0 sm:border-0 sm:bg-transparent sm:px-0 sm:py-0 sm:text-[10px] sm:tracking-[0.32em]",
                  isLight
                    ? "border-emerald-200/80 bg-emerald-50/85 text-emerald-800"
                    : "border-emerald-100/18 bg-white/[0.07] text-emerald-100 sm:text-emerald-200",
                )}
              >
                <Heart className='size-3.5 sm:hidden' />
                {t("A quiet promise")}
              </p>
              <p
                className={cn(
                  "relative mt-4 text-[0.96rem] leading-7 sm:mt-3 sm:text-base",
                  isLight ? "text-slate-700" : "text-white/64",
                )}
              >
                {t(
                  "I love that your kindness is not just sweet; it is protective. You want small lives to be safe, and that says so much about you.",
                )}
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className='order-2 lg:col-start-2 lg:row-span-2 lg:row-start-1'
          initial={{ opacity: 0, y: 28, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
        >
          <button
            type='button'
            onClick={() => setIsPortraitOpen(true)}
            aria-label={t("Open Sanju and dogs portrait")}
            className={cn(
              "group relative mx-auto block w-full max-w-[310px] rounded-[8px] border p-2.5 text-left shadow-[0_34px_110px_rgba(0,0,0,0.38)] outline-none transition duration-500 hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-rose-200 sm:max-w-[430px] sm:p-4",
              isLight
                ? "border-rose-900/10 bg-white/76 shadow-rose-200/30"
                : "border-white/12 bg-white/[0.07]",
            )}
          >
            <div className='absolute -inset-5 rounded-[18px] bg-[radial-gradient(circle_at_50%_20%,rgba(251,207,232,0.28),transparent_38%),radial-gradient(circle_at_70%_82%,rgba(110,231,183,0.20),transparent_42%)] blur-xl' />
            <div
              className={cn(
                "relative rounded-[8px] p-2 sm:p-3",
                isLight ? "bg-[#fffaf3]" : "bg-[#fdf2f8]",
              )}
            >
              <div className='absolute inset-x-8 top-2 h-px bg-gradient-to-r from-transparent via-rose-300/60 to-transparent' />
              <SanjuFrame
                photo='/sanju/sanju-4-dogs.png'
                label={t("Sanju with the little lives you love")}
                className='aspect-[4/5] rounded-[8px]'
                style={{ clipPath: "polygon(0 2%, 100% 0, 98% 98%, 3% 100%)" }}
              />
              <div className='flex items-end justify-between gap-3 px-2 pb-1 pt-3 text-slate-950 sm:px-3 sm:pt-4'>
                <div>
                  <p className='font-mono text-[9px] uppercase tracking-[0.32em] text-rose-700 sm:text-[10px]'>
                    {t("museum frame")}
                  </p>
                  <p className='mt-1 text-base font-semibold sm:text-lg'>
                    {t("the gentleness I see in you")}
                  </p>
                </div>
                <div className='grid size-9 shrink-0 place-items-center rounded-full bg-emerald-100 text-emerald-900 sm:size-10'>
                  <PawPrint className='size-4' />
                </div>
              </div>
              <div className='absolute inset-x-7 bottom-16 translate-y-2 rounded-full border border-white/30 bg-black/28 px-3 py-1.5 text-center text-[10px] font-semibold uppercase tracking-[0.24em] text-white opacity-0 backdrop-blur transition duration-300 group-hover:translate-y-0 group-hover:opacity-100'>
                {t("tap to open")}
              </div>
            </div>
            <div className='absolute -bottom-4 left-1/2 h-8 w-3/4 -translate-x-1/2 rounded-full bg-black/25 blur-2xl' />
          </button>
        </motion.div>
      </div>

      <AnimatePresence>
        {isPortraitOpen ? (
          <motion.div
            className='fixed inset-0 z-[80] grid place-items-center bg-black/70 px-5 py-8 backdrop-blur-md'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28 }}
            onClick={() => setIsPortraitOpen(false)}
          >
            <motion.div
              className={cn(
                "relative w-full max-w-[min(92vw,520px)] rounded-[8px] border p-3 shadow-[0_40px_140px_rgba(0,0,0,0.62)] sm:p-4",
                isLight
                  ? "border-rose-900/10 bg-white"
                  : "border-white/15 bg-[#fff7ed]",
              )}
              initial={{ opacity: 0, y: 34, scale: 0.88, rotate: -1.5 }}
              animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, y: 22, scale: 0.9, rotate: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type='button'
                onClick={() => setIsPortraitOpen(false)}
                className='absolute right-3 top-3 z-20 grid size-9 place-items-center rounded-full border border-rose-900/10 bg-white/86 text-lg font-semibold text-rose-950 shadow-lg backdrop-blur transition hover:scale-105'
                aria-label={t("Close portrait")}
              >
                x
              </button>
              <div className='absolute -inset-6 rounded-[20px] bg-[radial-gradient(circle_at_50%_15%,rgba(251,207,232,0.34),transparent_38%),radial-gradient(circle_at_72%_88%,rgba(110,231,183,0.26),transparent_42%)] blur-2xl' />
              <div className='relative rounded-[8px] bg-[#fffaf3] p-2.5 sm:p-3'>
                <SanjuFrame
                  photo='/sanju/sanju-4-dogs.png'
                  label={t("Sanju with the little lives you love")}
                  className='aspect-[4/5] rounded-[8px]'
                  style={{
                    clipPath: "polygon(0 2%, 100% 0, 98% 98%, 3% 100%)",
                  }}
                />
                <div className='flex items-end justify-between gap-4 px-2 pb-1 pt-3 text-slate-950 sm:px-3 sm:pt-4'>
                  <div>
                    <p className='font-mono text-[9px] uppercase tracking-[0.32em] text-rose-700'>
                      {t("opened keepsake")}
                    </p>
                    <p className='mt-1 text-base font-semibold sm:text-lg'>
                      {t("Sanju, dogs, and the heart I see")}
                    </p>
                  </div>
                  <Sparkles className='size-5 shrink-0 text-emerald-700' />
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}

function GoldFiligreeCorner({ className }: { className?: string }) {
  return (
    <svg
      className={cn(
        "absolute size-10 text-amber-400/50 pointer-events-none z-10",
        className,
      )}
      viewBox='0 0 48 48'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      {/* Outer borders */}
      <path
        d='M 4 4 L 40 4'
        stroke='currentColor'
        strokeWidth='1'
        strokeLinecap='round'
      />
      <path
        d='M 4 4 L 4 40'
        stroke='currentColor'
        strokeWidth='1'
        strokeLinecap='round'
      />
      {/* Double inset lines */}
      <path
        d='M 8 8 L 28 8'
        stroke='currentColor'
        strokeWidth='0.75'
        opacity='0.6'
      />
      <path
        d='M 8 8 L 8 28'
        stroke='currentColor'
        strokeWidth='0.75'
        opacity='0.6'
      />
      {/* Corner swirl details */}
      <path
        d='M 12 12 C 18 14, 14 18, 18 22 C 22 18, 18 14, 12 12 Z'
        fill='currentColor'
        opacity='0.3'
      />
      <path
        d='M 12 12 Q 22 15, 15 22'
        stroke='currentColor'
        strokeWidth='0.75'
        fill='none'
      />
      <circle cx='16' cy='16' r='1.5' fill='currentColor' />
    </svg>
  );
}

function WishCard({
  wish,
  visualIndex,
  isTop,
  completeSwipe,
  totalWishesCount,
  isLight,
}: {
  wish: Wish;
  visualIndex: number;
  isTop: boolean;
  completeSwipe: (info: PanInfo) => void;
  totalWishesCount: number;
  isLight: boolean;
}) {
  const [photoError, setPhotoError] = useState(false);

  const initials = useMemo(() => {
    return wish.from
      .split(" ")
      .map((n) => n[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();
  }, [wish.from]);

  return (
    <motion.div
      data-wish-card={isTop ? "active" : "stacked"}
      className='absolute left-0 top-0 w-full h-full origin-bottom touch-none rounded-2xl bg-gradient-to-br from-[#1b0811] via-[#2a0b1d] to-[#0d0208] p-6 text-left shadow-[0_35px_90px_rgba(0,0,0,0.65)] border border-amber-500/25 flex flex-col justify-between overflow-hidden'
      style={{ zIndex: totalWishesCount - visualIndex }}
      drag={isTop}
      dragElastic={0.28}
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      onDragEnd={(_, info) => isTop && completeSwipe(info)}
      initial={{ opacity: 0, y: 25, rotate: -4 }}
      animate={{
        opacity: 1,
        x: visualIndex * 4,
        y: visualIndex * 12,
        rotate: [-1.8, 1.2, -0.8, 0.4][visualIndex],
        scale: 1 - visualIndex * 0.04,
      }}
      exit={{ opacity: 0, y: -90, rotate: 8, scale: 0.92 }}
      whileDrag={
        isTop
          ? {
              scale: 1.035,
              rotate: 0,
              boxShadow: "0 34px 100px rgba(245,158,11,0.25)",
            }
          : undefined
      }
      whileHover={isTop ? { y: -6, rotate: 1 } : undefined}
      transition={{ type: "spring", stiffness: 260, damping: 26 }}
    >
      {/* Gold Filigree Corners */}
      <GoldFiligreeCorner className='top-3.5 left-3.5' />
      <GoldFiligreeCorner className='top-3.5 right-3.5 rotate-90' />
      <GoldFiligreeCorner className='bottom-3.5 left-3.5 -rotate-90' />
      <GoldFiligreeCorner className='bottom-3.5 right-3.5 rotate-180' />

      {/* Decorative inner frame */}
      <div className='absolute inset-4.5 border border-amber-500/15 rounded-xl pointer-events-none' />
      <div className='absolute inset-5.5 border border-dashed border-amber-500/5 rounded-lg pointer-events-none' />

      {/* Card Content */}
      <div className='relative z-10 flex flex-col h-full justify-between p-3.5'>
        {/* Top Header Row: Cameo Photo Frame & Relationship badge */}
        <div className='flex items-center justify-between'>
          {/* Cameo Photo Frame */}
          <div className='relative size-14 rounded-full border-2 border-amber-400/80 bg-gradient-to-br from-amber-700/80 to-amber-950/90 overflow-hidden shadow-[0_4px_10px_rgba(0,0,0,0.5)] shrink-0 flex items-center justify-center'>
            {!photoError && wish.photo ? (
              <Image
                src={wish.photo}
                alt={wish.from}
                fill
                sizes='56px'
                className='object-cover'
                onError={() => setPhotoError(true)}
              />
            ) : (
              <span className='font-serif text-lg font-bold text-amber-200 select-none tracking-widest'>
                {initials}
              </span>
            )}
            {/* Cameo inner shadow */}
            <div className='absolute inset-0 rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)] pointer-events-none' />
          </div>

          {/* Relationship badge */}
          <span className='rounded-full border border-amber-500/35 bg-amber-500/10 px-3.5 py-1.5 font-mono text-[9px] uppercase tracking-[0.25em] text-amber-200 backdrop-blur shadow-[0_2px_8px_rgba(0,0,0,0.3)]'>
            {wish.relation}
          </span>
        </div>

        {/* Main Text message */}
        <div className='flex-1 flex items-center my-4 overflow-y-auto custom-scrollbar pr-1'>
          <p className='font-serif italic text-base sm:text-[17px] leading-relaxed text-rose-50/95 font-medium tracking-wide drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)]'>
            “{wish.text}”
          </p>
        </div>

        {/* Signature block with wax seal detail */}
        <div className='flex items-center justify-between border-t border-amber-500/20 pt-3.5 relative'>
          <div>
            <p className='font-mono text-[8px] uppercase tracking-[0.25em] text-amber-400/50'>
              From
            </p>
            <p className='font-birthday text-2xl font-normal text-amber-200 mt-0.5 tracking-wide drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]'>
              {wish.from}
            </p>
          </div>

          {/* Mini Crimson Wax Seal with Pulsing Heart */}
          <div className='relative size-12 flex items-center justify-center shrink-0 drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)] rotate-12'>
            {/* Outer irregular melted wax base */}
            <div className='absolute inset-0 bg-gradient-to-br from-[#800f14] via-[#5c0d11] to-[#3f0709] rounded-[48%_52%_45%_55%/_52%_48%_55%_45%] border border-red-950/40' />
            <div className='absolute inset-1.5 bg-gradient-to-br from-[#9a1017] to-[#4c0507] rounded-[52%_48%_55%_45%/_48%_52%_45%_55%] shadow-inner border border-red-900/30 -rotate-6' />
            {/* Inner raised stamp circle */}
            <div className='absolute size-8 rounded-full bg-gradient-to-br from-[#b91c1c] to-[#7f1d1d] shadow-[inset_0_1px_2px_rgba(255,255,255,0.2),0_2px_4px_rgba(0,0,0,0.3)] flex items-center justify-center border border-red-950/20'>
              <Heart className='size-3.5 fill-amber-300/90 text-amber-400/90 drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)] animate-pulse' />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function WishesDeck({ theme }: { theme: Theme }) {
  const [active, setActive] = useState(0);
  const [burst, setBurst] = useState(false);
  const visibleWishes = useMemo(
    () =>
      WISHES.map(
        (wish, index) => WISHES.at((active + index) % WISHES.length) ?? wish,
      ),
    [active, WISHES.length],
  );

  const completeSwipe = (info: PanInfo) => {
    const xPower = info.offset.x + info.velocity.x * 0.18;
    const yPower = info.offset.y + info.velocity.y * 0.18;
    const strongSwipe = Math.abs(xPower) > 110 || yPower < -95;

    if (strongSwipe) {
      setActive((current) => (current + 1) % WISHES.length);
      setBurst(true);
      window.setTimeout(() => {
        setBurst(false);
      }, 700);
    }
  };

  const isLight = theme === "light";

  return (
    <section
      data-theme-surface='section'
      data-section-theme={theme}
      className='relative overflow-hidden bg-[#030305] px-5 py-24 text-white sm:px-8'
    >
      <div className='film-grain absolute inset-0 opacity-20' />
      <div className='marquee absolute inset-x-0 top-12 whitespace-nowrap text-6xl font-black uppercase tracking-normal text-white/[0.035] sm:text-8xl'>
        {t("Happy 22nd Birthday Sanju Happy 22nd Birthday Sanju")}
      </div>
      <div className='absolute -left-32 bottom-12 size-[500px] rounded-full bg-purple-900/15 blur-3xl pointer-events-none' />
      <div className='absolute -right-32 top-24 size-[500px] rounded-full bg-emerald-900/15 blur-3xl pointer-events-none' />
      <div className='relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]'>
        <div>
          <p className='font-mono text-xs uppercase tracking-[0.42em] text-amber-100'>
            {t("Wishes for her")}
          </p>
          <h2 className='mt-4 text-4xl font-semibold sm:text-6xl'>
            {t("Little notes that want to stay close")}
          </h2>
          <p className='mt-5 leading-7 text-white/68'>
            {t(
              "Each card carries a different kind of love for Sanju. Hold the top one, move it gently, and let the next wish rise when your heart is ready.",
            )}
          </p>
        </div>
        <div className='relative mx-auto h-[440px] sm:h-[470px] w-[85vw] max-w-[310px] sm:max-w-sm'>
          <AnimatePresence>
            {burst ? (
              <motion.div
                className='pointer-events-none absolute inset-0 z-20'
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.72 }}
              >
                {Array.from({ length: 16 }).map((_, index) => (
                  <motion.span
                    key={index}
                    className='absolute left-1/2 top-1/2 text-rose-100'
                    initial={{ x: 0, y: 0, scale: 0.4, rotate: 0 }}
                    animate={{
                      x: Math.cos(index * 0.68) * (90 + (index % 4) * 20),
                      y: Math.sin(index * 0.68) * (74 + (index % 5) * 15),
                      scale: [0.4, 1, 0.2],
                      rotate: index * 42,
                    }}
                    transition={{ duration: 0.72, ease: "easeOut" }}
                  >
                    {index % 2 === 0 ? "♥" : "✦"}
                  </motion.span>
                ))}
              </motion.div>
            ) : null}
          </AnimatePresence>
          <AnimatePresence mode='popLayout'>
            {visibleWishes
              .slice(0, 4)
              .reverse()
              .map((wish, stackIndex, arr) => {
                const visibleCount = arr.length;
                const visualIndex = visibleCount - 1 - stackIndex;
                const isTop = visualIndex === 0;
                return (
                  <WishCard
                    key={`${wish.from}-${stackIndex}`}
                    wish={wish}
                    visualIndex={visualIndex}
                    isTop={isTop}
                    completeSwipe={completeSwipe}
                    totalWishesCount={WISHES.length}
                    isLight={isLight}
                  />
                );
              })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function FinalWish({ theme }: { theme: Theme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [floatingParticles, setFloatingParticles] = useState<
    Array<{
      id: number;
      size: number;
      x: number;
      delay: number;
      duration: number;
    }>
  >([]);

  useEffect(() => {
    const generated = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      size: Math.random() * 6 + 4,
      x: Math.random() * 100,
      delay: Math.random() * 5,
      duration: Math.random() * 6 + 6,
    }));
    setFloatingParticles(generated);
  }, []);

  return (
    <section
      data-theme-surface='section'
      data-section-theme={theme}
      className='relative min-h-screen overflow-hidden bg-[#030305] px-5 py-24 text-white sm:px-8 flex flex-col items-center justify-center'
    >
      <div className='film-grain absolute inset-0 opacity-[0.18]' />
      {/* Seamless glowing lights */}
      <div className='absolute left-1/2 top-1/2 size-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-900/10 blur-3xl pointer-events-none' />
      <div className='absolute left-1/4 -top-24 size-[400px] rounded-full bg-emerald-900/10 blur-3xl pointer-events-none' />

      {/* Premium Floating Particles */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        {floatingParticles.map((p) => (
          <motion.div
            key={p.id}
            className='absolute rounded-full bg-rose-400/10 blur-[1px]'
            style={{
              width: p.size,
              height: p.size,
              left: `${p.x}%`,
              bottom: "-5%",
            }}
            animate={{
              y: ["0vh", "-110vh"],
              opacity: [0, 0.6, 0.6, 0],
              x: ["0%", `${Math.sin(p.id) * 15}%`],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className='relative z-10 w-full max-w-3xl flex flex-col items-center'>
        {/* Envelope wrapper (only visible / active when closed or transitioning) */}
        <AnimatePresence initial={false}>
          {!isOpen && (
            <motion.div
              key='envelope-wrapper'
              initial={{ opacity: 1, scale: 1 }}
              exit={{
                height: 0,
                opacity: 0,
                scale: 0.9,
                y: 50,
                transition: { delay: 0.4, duration: 0.5, ease: "easeInOut" },
              }}
              className='w-full max-w-lg flex flex-col items-center overflow-visible'
            >
              {/* Header inside wrapper */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className='text-center mb-8 pointer-events-none'
              >
                <p className='font-mono text-xs uppercase tracking-[0.45em] text-amber-200/80 mb-2'>
                  {t("One more thing")}
                </p>
                <h2 className='text-4xl sm:text-6xl font-semibold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-rose-200 via-amber-100 to-emerald-200'>
                  {t("A Letter for You")}
                </h2>
                <p className='mt-3 text-xs text-white/50 tracking-wider'>
                  {t("Tap the wax seal to unfold")}
                </p>
              </motion.div>

              {/* 3D Envelope Container */}
              <motion.div
                onClick={() => setIsOpen(true)}
                className='relative w-full aspect-[1.618/1] rounded-2xl bg-gradient-to-b from-[#250a2b] to-[#120417] border border-amber-500/20 shadow-[0_35px_80px_rgba(0,0,0,0.7),0_0_50px_rgba(245,158,11,0.1)] overflow-visible cursor-pointer'
                style={{ perspective: "1000px" }}
                whileHover={{ scale: 1.03, y: -4, rotate: -0.5 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Gold outer border */}
                <div className='absolute inset-2 border border-amber-500/10 rounded-xl pointer-events-none' />
                <div className='absolute inset-3 border border-dashed border-amber-500/5 rounded-lg pointer-events-none' />

                {/* Art Deco Gold Corners */}
                <div className='absolute top-4 left-4 size-4 border-t border-l border-amber-500/30 pointer-events-none' />
                <div className='absolute top-4 right-4 size-4 border-t border-r border-amber-500/30 pointer-events-none' />
                <div className='absolute bottom-4 left-4 size-4 border-b border-l border-amber-500/30 pointer-events-none' />
                <div className='absolute bottom-4 right-4 size-4 border-b border-r border-amber-500/30 pointer-events-none' />

                {/* Backplate pocket inside */}
                <div className='absolute inset-1 rounded-2xl bg-[#0e0211] overflow-hidden'>
                  {/* Peeking Letter Card */}
                  <motion.div
                    className='absolute inset-x-8 top-6 bottom-6 rounded-lg bg-white/5 border border-white/10 flex flex-col items-center justify-center p-4 text-center'
                    initial={{ y: 20, scale: 0.9, opacity: 0.3 }}
                    animate={{ y: 10, scale: 0.92, opacity: 0.4 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <div className='w-16 h-0.5 bg-amber-200/20 rounded-full mb-3' />
                    <p className='font-mono text-[9px] uppercase tracking-[0.3em] text-amber-200/50'>
                      {t("Dear Sanju")}
                    </p>
                  </motion.div>
                </div>

                {/* Envelope Flap (Top triangle) */}
                <motion.div
                  className='absolute top-0 inset-x-0 h-[52%] bg-gradient-to-b from-[#34123d] to-[#1c0821] origin-top shadow-lg z-20'
                  style={{
                    clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                    transformStyle: "preserve-3d",
                  }}
                  animate={isOpen ? { rotateX: -180 } : { rotateX: 0 }}
                  transition={{ duration: 0.65, ease: "easeInOut" }}
                >
                  {/* Gold trim along flap edges */}
                  <svg
                    className='absolute inset-0 w-full h-full pointer-events-none overflow-visible'
                    viewBox='0 0 100 100'
                    preserveAspectRatio='none'
                  >
                    <defs>
                      <linearGradient
                        id='gold-flap-grad'
                        x1='0%'
                        y1='0%'
                        x2='100%'
                        y2='100%'
                      >
                        <stop
                          offset='0%'
                          stopColor='#f59e0b'
                          stopOpacity='0.1'
                        />
                        <stop
                          offset='50%'
                          stopColor='#fbbf24'
                          stopOpacity='0.7'
                        />
                        <stop
                          offset='100%'
                          stopColor='#d97706'
                          stopOpacity='0.1'
                        />
                      </linearGradient>
                    </defs>
                    <path
                      d='M 0,0 L 50,100 L 100,0'
                      fill='none'
                      stroke='url(#gold-flap-grad)'
                      strokeWidth='1'
                    />
                  </svg>

                  {/* Inscribed gold script on flap */}
                  <div className='absolute top-[28%] inset-x-0 text-center font-serif italic text-[10px] tracking-widest text-amber-200/40 select-none'>
                    {t("For Sanju")}
                  </div>
                </motion.div>

                {/* Front Pocket side flaps */}
                {/* Left triangle */}
                <div
                  className='absolute inset-0 bg-gradient-to-r from-[#220a27] to-[#15041a] z-10'
                  style={{ clipPath: "polygon(0 0, 0 100%, 50% 50%)" }}
                />
                {/* Right triangle */}
                <div
                  className='absolute inset-0 bg-gradient-to-l from-[#220a27] to-[#15041a] z-10'
                  style={{ clipPath: "polygon(100% 0, 100% 100%, 50% 50%)" }}
                />
                {/* Bottom triangle */}
                <div
                  className='absolute inset-0 bg-gradient-to-t from-[#2c0f34] to-[#1b0821] border-b border-amber-500/10 z-10'
                  style={{ clipPath: "polygon(0 100%, 100% 100%, 50% 50%)" }}
                />

                {/* Wax Seal */}
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30'>
                  {/* Golden seal outer glow */}
                  <div className='absolute size-28 -left-8 -top-8 bg-amber-400/10 blur-xl rounded-full' />
                  {/* Organic Poured Wax Shape */}
                  <motion.div
                    className='size-16 bg-gradient-to-br from-amber-400 via-yellow-500 to-amber-700 shadow-[0_8px_25px_rgba(245,158,11,0.4),inset_0_2px_4px_rgba(255,255,255,0.4)] border border-amber-400/30 flex items-center justify-center'
                    style={{
                      borderRadius: "48% 52% 51% 49% / 49% 51% 48% 52%",
                    }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {/* Inner seal ring */}
                    <div className='size-12 rounded-full border border-amber-200/30 bg-gradient-to-br from-amber-500 to-amber-600 shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)] flex items-center justify-center'>
                      <Heart className='size-5 fill-amber-100 text-amber-100' />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Letter Card (only visible / active when open or transitioning) */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key='letter-card'
              initial={{ opacity: 0, height: 0, scale: 0.92, y: -50 }}
              animate={{
                opacity: 1,
                height: "auto",
                scale: 1,
                y: 0,
                transition: {
                  delay: 0.3,
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                },
              }}
              exit={{
                opacity: 0,
                height: 0,
                scale: 0.92,
                y: -50,
                transition: { duration: 0.5, ease: "easeInOut" },
              }}
              className='w-full max-w-3xl overflow-hidden rounded-2xl border border-white/12 bg-gradient-to-br from-neutral-900/80 via-[#1e0a22]/80 to-[#0c1c16]/80 p-7 shadow-[0_40px_120px_rgba(0,0,0,0.75),0_0_80px_rgba(244,63,94,0.1)] backdrop-blur-md sm:p-10 relative'
            >
              <div className='absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-rose-100/60 to-transparent' />
              <div className='absolute -right-16 -top-16 size-44 rounded-full border border-white/10 pointer-events-none' />

              <button
                type='button'
                onClick={() => setIsOpen(false)}
                className='absolute right-6 top-6 rounded-full border border-white/12 bg-white/8 px-4 py-1.5 text-xs font-semibold text-white/80 transition hover:bg-white/14'
              >
                {t("Fold letter")}
              </button>

              <Film className='absolute right-8 bottom-8 size-6 text-white/10 pointer-events-none' />
              <p className='font-mono text-xs uppercase tracking-[0.42em] text-rose-100'>
                {t("One more thing")}
              </p>
              <h2 className='mt-4 text-4xl font-semibold sm:text-6xl text-white'>
                {t("From Nikki, to Sanju")}
              </h2>

              <div className='mt-8 space-y-5 text-base leading-9 text-white/72 sm:text-lg'>
                <p>
                  <span className='text-white font-medium'>
                    {t("Sanju, happy birthday.")}
                  </span>
                  {t(
                    " I made this because I wanted you to feel, even for a few minutes, how grateful I am to have you as my cousin sister. You are someone so special to me: soft, stubborn, funny, caring, quietly beautiful inside and out, and ",
                  )}
                  <span className='text-white font-medium'>
                    {t("an irreplaceable part of my life.")}
                  </span>
                </p>
                <p>
                  {t(
                    "I love the way your heart notices small things, the way you care for animals, the way dogs become important to you, and ",
                  )}
                  <span className='text-white font-medium'>
                    {t("the way your presence makes a normal day feel warmer.")}
                  </span>
                  {t(
                    " I hope this page makes you smile first, then maybe feel a little emotional, then remember that you are ",
                  )}
                  <span className='text-white font-medium'>
                    {t("cared for very deeply.")}
                  </span>
                </p>
                <p>
                  {t("This is not just a birthday page. It is ")}
                  <span className='text-white font-medium'>
                    {t("a small promise from me")}
                  </span>
                  {t(
                    " to always have your back, to be here for you with closeness, patience, and care. I hope this year gives you beautiful friendships, loud happiness, gentle peace, and many reasons to feel ",
                  )}
                  <span className='text-white font-medium'>
                    {t("proud of the person you are becoming.")}
                  </span>
                </p>
              </div>

              <div className='mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between'>
                <p className='text-sm text-white/55'>
                  {t("This page will grow with you, year after year.")}
                </p>
                <div className='inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.35em] text-amber-100'>
                  <Sparkles className='size-4' />
                  {t("09.06.2026")}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

function SiteFooter({ theme }: { theme: Theme }) {
  return (
    <footer
      className='relative overflow-hidden border-t border-white/10 bg-[#030305] px-6 py-10 text-white'
      data-section-theme={theme}
    >
      <div className='film-grain absolute inset-0 opacity-10' />
      <div className='relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left'>
        <p className='font-mono text-[11px] uppercase tracking-[0.34em] text-white/38'>
          {t("Sanju 22")}
        </p>
        <p className='inline-flex items-center gap-2 text-sm text-white/58'>
          {t("Made with")}
          <Heart className='size-4 fill-rose-300 text-rose-300' />
          <span className='font-semibold text-rose-100'>{t("by Nikki")}</span>
        </p>
      </div>
    </footer>
  );
}

export default function Home() {
  const [introStarted, setIntroStarted] = useState(false);
  const [loading, setLoading] = useState(false);
  const theme: Theme = "dark";
  const introComplete = introStarted && !loading;

  useEffect(() => {
    if (typeof window !== "undefined") {
      const navigation = window.performance.getEntriesByType(
        "navigation",
      )[0] as PerformanceNavigationTiming | undefined;
      if (navigation?.type === "reload") {
        sessionStorage.removeItem("preloader-seen");
      }
    }

    const hasSeen =
      typeof window !== "undefined" &&
      sessionStorage.getItem("preloader-seen") === "true";
    if (hasSeen) {
      setIntroStarted(true);
      setLoading(false);
    } else {
      setIntroStarted(true);
      setLoading(true);

      const handoff = window.setTimeout(() => {
        setLoading(false);
        if (typeof window !== "undefined") {
          sessionStorage.setItem("preloader-seen", "true");
        }
      }, 6100);

      return () => window.clearTimeout(handoff);
    }
  }, []);

  const replayIntro = () => {
    if (typeof window !== "undefined") {
      sessionStorage.removeItem("preloader-seen");
    }
    setLoading(true);
    setIntroStarted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main
      className='continuous-film theme-dark min-h-screen bg-[#030305] text-white'
      data-theme={theme}
    >
      <AnimatePresence>
        {introStarted && loading ? (
          <Preloader onDone={() => setLoading(false)} />
        ) : null}
      </AnimatePresence>
      <HeroSection
        introComplete={introComplete}
        theme={theme}
        onReplayIntro={replayIntro}
      />
      <MilestonesSection theme={theme} />
      <GalleryTeaser theme={theme} />
      <AnimalKindnessSection theme={theme} />
      <WishesDeck theme={theme} />
      <FinalWish theme={theme} />
      <SiteFooter theme={theme} />
      {/* Keep NikkiLoveOverlay available for a future return without showing the bottom-right overlay now. */}
      {/* <NikkiLoveOverlay theme={theme} /> */}
    </main>
  );
}
