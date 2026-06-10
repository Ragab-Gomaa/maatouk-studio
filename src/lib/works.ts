export type WorkKind = "client" | "concept";

export type Work = {
  slug: string;
  title: string;
  category: "Branding" | "Digital" | "Motion";
  year: number;
  /** Real client work vs. self-initiated concept / spec piece. */
  kind: WorkKind;
  /** Client name — only set for real commissioned work. */
  client?: string;
  /** Production credits, shown in the lightbox. */
  credits?: string;
  /** Vimeo video id, used for the embedded player. */
  vimeoId: string;
  /** Poster image (Vimeo thumbnail downloaded to /public). */
  image: string;
  /** Native aspect ratio of the source video. */
  aspect: "16/9" | "1/1";
  /** Self-hosted, web-optimized MP4 for the hero background (16:9 only). */
  heroVideo?: string;
  /** How long this slide stays in the hero, in ms (defaults to 7000). */
  heroDuration?: number;
};

// Real Maatouk Studio motion work. Branding & Digital projects are added later.
// "concept" pieces are self-initiated / academy spec work — labelled as such so
// brand names (Nike, Mercedes-Benz, …) are never presented as paying clients.
export const works: Work[] = [
  {
    slug: "blankos",
    title: "BlankosKSA",
    category: "Motion",
    year: 2021,
    kind: "client",
    client: "Blankos KSA",
    credits: "Animation: Ragab Gomaa · Storyboard & Illustration: Eman Emad · Voice over: Hakam Saeid",
    vimeoId: "582953962",
    image: "/images/work/blankos.jpg",
    aspect: "16/9",
    heroVideo: "/videos/blankos.mp4",
  },
  {
    slug: "sandah",
    title: "Sandah",
    category: "Motion",
    year: 2024,
    kind: "client",
    client: "Sandah Restaurant — KSA",
    credits: "Design: Mohaned Hesham & Riham Samara · Animation: Ragab Gomaa",
    vimeoId: "947822765",
    image: "/images/work/sandah.jpg",
    aspect: "1/1",
    heroVideo: "/videos/sandah.mp4",
  },
  {
    slug: "classride",
    title: "Class Ride",
    category: "Motion",
    year: 2021,
    kind: "client",
    client: "Class Ride",
    credits: "Animation: Ragab Gomaa · Storyboard & Illustration: Eman Emad",
    vimeoId: "596251640",
    image: "/images/work/classride.jpg",
    aspect: "16/9",
    heroVideo: "/videos/classride.mp4",
    heroDuration: 9000,
  },
  {
    slug: "forkpos",
    title: "Forkpos",
    category: "Motion",
    year: 2023,
    kind: "client",
    client: "Forkpos",
    credits: "Ramadan campaign · Voice over: Abdallah Ibrahim · Animation: Ragab Gomaa",
    vimeoId: "812241417",
    image: "/images/work/forkpos.jpg",
    aspect: "1/1",
  },
  {
    slug: "mercedes",
    title: "Mercedes-Benz",
    category: "Motion",
    year: 2023,
    kind: "concept",
    credits: "Concept piece · 24 ETAR Academy",
    vimeoId: "867449469",
    image: "/images/work/mercedes.jpg",
    aspect: "16/9",
    heroVideo: "/videos/mercedes.mp4",
  },
  {
    slug: "nike",
    title: "Nike",
    category: "Motion",
    year: 2023,
    kind: "concept",
    credits: "Concept piece · 24 ETAR Academy · Animation & SFX: Ragab Gomaa",
    vimeoId: "868631723",
    image: "/images/work/nike.jpg",
    aspect: "16/9",
    heroVideo: "/videos/nike.mp4",
    heroDuration: 6000,
  },
  {
    slug: "slack",
    title: "Slack",
    category: "Motion",
    year: 2023,
    kind: "concept",
    credits: "Concept piece · 24 ETAR Academy",
    vimeoId: "865793620",
    image: "/images/work/slack.jpg",
    aspect: "16/9",
    heroVideo: "/videos/slack.mp4",
    heroDuration: 9000,
  },
  {
    slug: "realtime",
    title: "Real Time",
    category: "Motion",
    year: 2023,
    kind: "concept",
    credits: "Concept piece · 24 ETAR Academy",
    vimeoId: "866585392",
    image: "/images/work/realtime.jpg",
    aspect: "16/9",
  },
];

// Hero uses 16:9 pieces only (square videos would be cropped as a full-bleed
// background) and leads with commissioned client work.
const HERO_ORDER = ["slack", "classride", "mercedes", "nike"];
export const heroWorks = HERO_ORDER.map(
  (slug) => works.find((w) => w.slug === slug)!
).filter((w) => w.heroVideo);

/** Vimeo background-mode URL (muted, looping, no chrome) for hero/preview. */
export function vimeoBackgroundSrc(id: string): string {
  return `https://player.vimeo.com/video/${id}?background=1&autoplay=1&loop=1&muted=1&dnt=1`;
}

/** Full Vimeo player URL (kept for reference / fallback). */
export function vimeoPlayerSrc(id: string): string {
  return `https://player.vimeo.com/video/${id}?autoplay=1&title=0&byline=0&portrait=0&dnt=1`;
}

/** Self-hosted, web-optimized MP4 with audio for the lightbox (instant, same-origin). */
export function watchSrc(slug: string): string {
  return `/videos/watch/${slug}.mp4`;
}
