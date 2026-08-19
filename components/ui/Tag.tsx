import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Tag({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-gray-200 px-3 py-1 text-[13px] font-medium text-text-secondary",
        className,
      )}
    >
      {children}
    </span>
  );
}
