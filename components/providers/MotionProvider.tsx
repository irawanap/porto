"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Makes every Framer Motion animation in the app respect the OS-level
 * prefers-reduced-motion setting automatically (DESIGN.md #28), instead of
 * checking useReducedMotion() in every component that animates.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
