import { Tag } from "@/components/ui/Tag";
import type { Project } from "@/lib/projects";

export function ProjectMeta({ overview }: { overview: Project["overview"] }) {
  return (
    <dl className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-8">
      {overview.role && (
        <div>
          <dt className="text-small font-medium uppercase tracking-wide text-text-secondary">
            Role
          </dt>
          <dd className="mt-2 text-body text-text-primary">
            {overview.role}
          </dd>
        </div>
      )}

      {overview.timeline && (
        <div>
          <dt className="text-small font-medium uppercase tracking-wide text-text-secondary">
            Timeline
          </dt>
          <dd className="mt-2 text-body text-text-primary">
            {overview.timeline}
          </dd>
        </div>
      )}

      {overview.stack.length > 0 && (
        <div>
          <dt className="text-small font-medium uppercase tracking-wide text-text-secondary">
            Stack
          </dt>
          <dd className="mt-2 flex flex-wrap gap-2">
            {overview.stack.map((item) => (
              <Tag key={item}>{item}</Tag>
            ))}
          </dd>
        </div>
      )}
    </dl>
  );
}
