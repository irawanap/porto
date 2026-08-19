import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextProject } from "@/components/projects/NextProject";
import { ProjectHero } from "@/components/projects/ProjectHero";
import { ProjectOverview } from "@/components/projects/ProjectOverview";
import { ProjectStorySection } from "@/components/projects/ProjectStorySection";
import {
  getNextProject,
  getProjectBySlug,
  getSectionLayout,
  projects,
} from "@/lib/projects";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {};
  }

  const title = `${project.name} — Irawan Aji Pangestu`;

  return {
    title: project.name,
    description: project.tagline,
    openGraph: {
      title,
      description: project.tagline,
      type: "article",
      images: ["/opengraph-image"],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: project.tagline,
      images: ["/twitter-image"],
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const next = getNextProject(slug);

  return (
    <>
      <ProjectHero project={project} />
      <ProjectOverview project={project} />
      {getSectionLayout(project.sections).map(({ section, tinted, reversed }) => (
        <ProjectStorySection
          key={section.id}
          section={section}
          tinted={tinted}
          reversed={reversed}
        />
      ))}
      <NextProject project={next} />
    </>
  );
}
