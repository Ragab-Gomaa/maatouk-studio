import type { Metadata } from "next";
import { caseStudies, motionProjects } from "@/data/content";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = caseStudies.find((c) => c.slug === slug);
  const motionProject = motionProjects.find((m) => m.slug === slug);

  if (caseStudy) {
    const title = caseStudy.title.en;
    const description = caseStudy.shortDescription.en;
    const ogImage = caseStudy.shots?.desktopHome;

    return {
      title,
      description,
      alternates: { canonical: `/work/${slug}` },
      openGraph: {
        title: `${title} — Maatouk Studio`,
        description,
        url: `/work/${slug}`,
        type: "article",
        ...(ogImage && {
          images: [{ url: ogImage, alt: title }],
        }),
      },
      twitter: {
        card: "summary_large_image",
        title: `${title} — Maatouk Studio`,
        description,
        ...(ogImage && { images: [ogImage] }),
      },
    };
  }

  if (motionProject) {
    const title = motionProject.title.en;
    const description = motionProject.description.en;
    const ogImage = `https://vumbnail.com/${motionProject.vimeoId}.jpg`;

    return {
      title,
      description,
      alternates: { canonical: `/work/${slug}` },
      openGraph: {
        title: `${title} — Motion · Maatouk Studio`,
        description,
        url: `/work/${slug}`,
        type: "video.other",
        images: [{ url: ogImage, alt: title }],
      },
      twitter: {
        card: "summary_large_image",
        title: `${title} — Maatouk Studio`,
        description,
        images: [ogImage],
      },
    };
  }

  return {
    title: "Project not found",
    robots: { index: false, follow: false },
  };
}

export default function ProjectLayout({ children }: { children: React.ReactNode }) {
  return children;
}
