import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Honest stand-in for missing project media — a dashed border reads as
 * "pending," unlike a shadowed/rounded box which would look like a real
 * screenshot. DESIGN.md #17/#31 rule out stock photography as a substitute.
 */
export function ImagePlaceholder({
  label = "Visual placeholder",
  aspect = "aspect-[16/10]",
  className,
}: {
  label?: string;
  aspect?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex items-center justify-center gap-2 rounded-xl border border-dashed border-gray-200 bg-background-secondary text-text-secondary",
        aspect,
        className,
      )}
    >
      <ImageIcon size={18} className="opacity-60" aria-hidden="true" />
      <span className="text-small">{label}</span>
    </div>
  );
}
