import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { ProjectListItem } from "@/components/projects/ProjectListItem";
import { projects } from "@/lib/projects";

const description =
  "Projects by Irawan Aji Pangestu — presented as products, not repositories.";

export const metadata: Metadata = {
  title: "Work",
  description,
  openGraph: {
    title: "Work — Irawan Aji Pangestu",
    description,
    type: "website",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Work — Irawan Aji Pangestu",
    description,
    images: ["/twitter-image"],
  },
};

export default function ProjectsPage() {
  return (
    <section className="py-section">
      <Container>
        <p className="text-small font-medium uppercase tracking-wide text-accent">
          Work
        </p>
        <h1 className="mt-4 max-w-2xl text-heading text-text-primary">
          Projects, presented as products.
        </h1>

        <div className="mt-16 divide-y divide-gray-200 border-t border-gray-200 sm:mt-20">
          {projects.map((project) => (
            <ProjectListItem key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
