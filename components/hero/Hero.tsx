"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { fadeInUp, staggerChildren } from "@/lib/motion";

export function Hero() {
  return (
    <section className="flex min-h-[85svh] items-center py-16 lg:min-h-[80svh]">
      <Container>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerChildren(0.15)}
          className="flex flex-col items-center text-center"
        >
          <h1 className="flex flex-col items-center">
            <motion.span
              variants={fadeInUp}
              className="block text-sm font-medium tracking-wide text-text-secondary sm:text-base"
            >
              Irawan Aji Pangestu
            </motion.span>

            <motion.span
              variants={fadeInUp}
              className="mt-5 block text-balance text-display text-text-primary sm:mt-6"
            >
              Building ideas into experiences.
            </motion.span>
          </h1>

          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-6 max-w-xl text-body-lg text-text-secondary sm:mt-8"
          >
            Developer. Problem Solver. Product Thinker.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:mt-12"
          >
            <Button href="/projects">Explore My Work</Button>
            <Button href="/#journey" variant="secondary">
              My Journey
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
