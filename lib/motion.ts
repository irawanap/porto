import type { Transition, Variants } from "framer-motion";

/**
 * Shared Framer Motion primitives — DESIGN.md #13/#22: fade, translateY,
 * subtle scale, 0.5s–1.2s for hero, 0.6s–1s for scroll reveal. Actual
 * reduced-motion handling lives at the app level via <MotionProvider>
 * (framer-motion's MotionConfig reducedMotion="user"), so variants below
 * don't need their own reduced-motion branching.
 */

export const easeOut: Transition["ease"] = [0.16, 1, 0.3, 1];

export const revealTransition: Transition = {
  duration: 0.8,
  ease: easeOut,
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: revealTransition },
};

export const staggerChildren = (stagger = 0.12): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger,
    },
  },
});
