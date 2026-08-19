import { ArrowRight } from "lucide-react";
import { Fragment } from "react";

/**
 * A plain-language stand-in for a technical architecture diagram — labeled
 * steps connected by arrows, legible to non-technical visitors without
 * naming specific systems or protocols.
 */
export function PipelineDiagram({ steps }: { steps: string[] }) {
  return (
    <div
      role="list"
      aria-label="Request flow"
      className="flex flex-wrap items-center justify-center gap-3 rounded-xl border border-gray-200 bg-background px-6 py-10 sm:gap-4"
    >
      {steps.map((step, index) => (
        <Fragment key={step}>
          <span
            role="listitem"
            className="rounded-full border border-gray-200 bg-background-secondary px-4 py-2 text-center text-[13px] font-medium text-text-primary sm:text-sm"
          >
            {step}
          </span>
          {index < steps.length - 1 && (
            <ArrowRight
              size={16}
              aria-hidden="true"
              className="shrink-0 text-text-secondary"
            />
          )}
        </Fragment>
      ))}
    </div>
  );
}
