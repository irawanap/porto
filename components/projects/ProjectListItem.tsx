import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ProjectVisual } from "@/components/projects/ProjectVisual";
import { Tag } from "@/components/ui/Tag";
import type { Project } from "@/lib/projects";

/**
 * Shared project row used on both /projects and the homepage Featured Work
 * teaser. `headingLevel` lets each context keep a correct heading hierarchy
 * (h2 under the /projects page's own h1, h3 under the homepage section's h2).
 */
export function ProjectListItem({
  project,
  headingLevel = "h2",
}: {
  project: Project;
  headingLevel?: "h2" | "h3";
}) {
  const categories = project.category.split(" / ");

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group grid grid-cols-1 gap-8 py-12 transition-opacity hover:opacity-80 lg:grid-cols-2 lg:items-center lg:gap-16 lg:py-16"
    >
      <ProjectVisual project={project} aspect="aspect-[16/10]" />

      <div>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Tag key={category}>{category}</Tag>
          ))}
        </div>

        {headingLevel === "h3" ? (
          <h3 className="mt-6 text-statement text-text-primary">
            {project.name}
          </h3>
        ) : (
          <h2 className="mt-6 text-statement text-text-primary">
            {project.name}
          </h2>
        )}

        <p className="mt-4 max-w-md text-body text-text-secondary">
          {project.tagline}
        </p>

        <span className="mt-6 inline-flex items-center gap-2 text-body font-medium text-text-primary">
          View project
          <ArrowRight
            size={18}
            aria-hidden="true"
            className="transition-transform duration-200 group-hover:translate-x-1"
          />
        </span>
      </div>
    </Link>
  );
}
