import { ArrowRight, Camera, Droplet } from "lucide-react";
import { DeviceFrame } from "@/components/projects/DeviceFrame";
import { ImagePlaceholder } from "@/components/projects/ImagePlaceholder";
import { cn } from "@/lib/utils";
import type { Project } from "@/lib/projects";

/**
 * Primary showcase visual for a project (listing card, project hero). No
 * real screenshots exist yet, so each project gets an honest, clearly
 * illustrative concept visual — shaped like its actual product (mobile app
 * vs. chat tool) rather than a generic stock image or a literal, possibly
 * inaccurate mockup of screens that don't exist. Falls back to the plain
 * placeholder for any project without a defined visual, same as
 * buildSections() falling back to [PLACEHOLDER] text (CLAUDE.md #21).
 */
export function ProjectVisual({
  project,
  aspect = "aspect-[16/10]",
  className,
}: {
  project: Project;
  aspect?: string;
  className?: string;
}) {
  const frameWrapper = cn(
    "flex items-center justify-center rounded-xl bg-background-secondary p-6 sm:p-10",
    aspect,
    className,
  );

  if (project.slug === "reoil") {
    return (
      <div className={frameWrapper}>
        <DeviceFrame variant="phone">
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-background-secondary text-text-secondary">
              <Droplet size={24} aria-hidden="true" />
            </div>
            <div className="flex items-center gap-2 text-text-secondary">
              <Camera size={16} aria-hidden="true" />
              <ArrowRight size={14} aria-hidden="true" />
              <span className="rounded-full border border-gray-200 px-3 py-1 text-[13px] font-medium text-text-primary">
                Classified
              </span>
            </div>
          </div>
        </DeviceFrame>
      </div>
    );
  }

  if (project.slug === "nl2sql") {
    return (
      <div className={frameWrapper}>
        <DeviceFrame variant="browser">
          <div className="flex w-full flex-col gap-3">
            <div className="self-end rounded-2xl rounded-br-sm bg-black px-4 py-2 text-[13px] text-white">
              How many orders shipped last week?
            </div>
            <div className="self-start rounded-2xl rounded-bl-sm bg-background-secondary px-4 py-2 text-[13px] text-text-primary">
              Here&apos;s your answer — no SQL required.
            </div>
          </div>
        </DeviceFrame>
      </div>
    );
  }

  return <ImagePlaceholder aspect={aspect} className={className} />;
}
