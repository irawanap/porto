"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeInUp, staggerChildren } from "@/lib/motion";
import { cn } from "@/lib/utils";

/**
 * Shared "eyebrow + heading" reveal used at the top of every homepage
 * section. `children` (if any) render inside the same stagger group, so
 * content directly following the heading animates as one continuous
 * sequence rather than retriggering separately.
 */
export function SectionIntro({
  eyebrow,
  heading,
  headingScale = "heading",
  children,
  className,
}: {
  eyebrow: string;
  heading: string;
  headingScale?: "heading" | "statement";
  children?: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerChildren(0.15)}
      className={cn("max-w-2xl", className)}
    >
      <motion.p
        variants={fadeInUp}
        className="text-small font-medium uppercase tracking-wide text-accent"
      >
        {eyebrow}
      </motion.p>

      <motion.h2
        variants={fadeInUp}
        className={cn(
          "mt-4 text-text-primary",
          headingScale === "statement" ? "text-statement" : "text-heading",
        )}
      >
        {heading}
      </motion.h2>

      {children}
    </motion.div>
  );
}
