import type { ElementType, HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ContainerProps<T extends ElementType = "div"> = {
  as?: T;
  /** "default" = 1200px (DESIGN.md #8), "wide" = 1400px for large-desktop visuals */
  size?: "default" | "wide";
  children: ReactNode;
  className?: string;
} & Omit<HTMLAttributes<HTMLElement>, "children" | "className">;

export function Container<T extends ElementType = "div">({
  as,
  size = "default",
  children,
  className,
  ...props
}: ContainerProps<T>) {
  const Tag = as ?? "div";

  return (
    <Tag
      className={cn(
        "mx-auto w-full px-5 sm:px-6",
        size === "wide" ? "max-w-[1400px]" : "max-w-[1200px]",
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
