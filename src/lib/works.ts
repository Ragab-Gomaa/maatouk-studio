export type Work = {
  slug: string;
  title: string;
  category: "Branding" | "Digital" | "Motion";
  year: number;
  client: string;
  image: string;
};

export const works: Work[] = [
  {
    slug: "saraya",
    title: "Saraya",
    category: "Branding",
    year: 2025,
    client: "Saraya Group",
    image: "/images/work/01-saraya.jpg",
  },
  {
    slug: "lumen",
    title: "Lumen",
    category: "Digital",
    year: 2025,
    client: "Lumen Studio",
    image: "/images/work/02-lumen.jpg",
  },
  {
    slug: "noor",
    title: "Noor",
    category: "Motion",
    year: 2024,
    client: "Noor Co.",
    image: "/images/work/03-noor.jpg",
  },
  {
    slug: "arc",
    title: "Arc",
    category: "Branding",
    year: 2024,
    client: "Arc Architects",
    image: "/images/work/04-arc.jpg",
  },
  {
    slug: "tide",
    title: "Tide",
    category: "Digital",
    year: 2024,
    client: "Tide Coffee",
    image: "/images/work/05-tide.jpg",
  },
  {
    slug: "form",
    title: "Form",
    category: "Motion",
    year: 2023,
    client: "Form Magazine",
    image: "/images/work/06-form.jpg",
  },
  {
    slug: "mono",
    title: "Mono",
    category: "Branding",
    year: 2023,
    client: "Mono Label",
    image: "/images/work/07-mono.jpg",
  },
  {
    slug: "helix",
    title: "Helix",
    category: "Digital",
    year: 2023,
    client: "Helix Labs",
    image: "/images/work/08-helix.jpg",
  },
];

export const heroWorks = works.slice(0, 5);
