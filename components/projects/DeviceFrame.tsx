import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Minimal device chrome for concept visuals when no real screenshot exists
 * yet (DESIGN.md #17/#31 rule out stock photography as a substitute). Two
 * variants so different product shapes — a mobile app vs. a chat/browser
 * tool — read as visually distinct rather than the same box reused twice.
 * Radii stay on the DESIGN.md #10 scale (sm/md/lg/xl) rather than inventing
 * new values.
 */
export function DeviceFrame({
  variant,
  className,
  children,
}: {
  variant: "phone" | "browser";
  className?: string;
  children: ReactNode;
}) {
  if (variant === "phone") {
    return (
      <div
        className={cn(
          "flex w-full max-w-[240px] flex-col rounded-xl border border-gray-200 bg-black p-2.5 shadow-sm",
          className,
        )}
      >
        <div className="flex justify-center pb-2 pt-1">
          <span className="h-1 w-10 rounded-full bg-gray-600" />
        </div>
        <div className="flex flex-1 aspect-[9/17] items-center justify-center rounded-lg bg-white p-6">
          {children}
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "w-full max-w-sm overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm",
        className,
      )}
    >
      <div className="flex items-center gap-1.5 border-b border-gray-200 bg-background-secondary px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-gray-200" />
        <span className="h-2.5 w-2.5 rounded-full bg-gray-200" />
        <span className="h-2.5 w-2.5 rounded-full bg-gray-200" />
      </div>
      <div className="flex items-center justify-center p-6 sm:p-8">
        {children}
      </div>
    </div>
  );
}
