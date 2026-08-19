"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { fadeInUp, staggerChildren } from "@/lib/motion";
import { cn } from "@/lib/utils";

const principles = [
  {
    name: "Observe",
    description: "Understand the problem before building.",
  },
  {
    name: "Simplify",
    description: "Turn complexity into simple experiences.",
  },
  {
    name: "Build",
    description: "Prototype, test, and iterate.",
  },
  {
    name: "Learn",
    description: "Treat failures as feedback.",
  },
] as const;

export function HowIThink() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="thinking" className="py-section">
      <Container>
        <SectionIntro eyebrow="How I Think" heading="A process, not a formula." />

        <motion.ol
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerChildren(0.1)}
          onMouseLeave={() => setHovered(null)}
          className="mt-16 divide-y divide-gray-200 border-t border-gray-200 sm:mt-20"
        >
          {principles.map((principle, index) => (
            <motion.li
              key={principle.name}
              variants={fadeInUp}
              onMouseEnter={() => setHovered(index)}
              className={cn(
                "grid grid-cols-[40px_1fr] items-baseline gap-x-4 gap-y-2 py-8 transition-opacity duration-300 sm:grid-cols-[80px_1fr] sm:gap-x-8 sm:py-10",
                hovered !== null && hovered !== index && "opacity-40",
              )}
            >
              <span className="text-2xl font-light tabular-nums text-gray-300 sm:text-3xl">
                0{index + 1}
              </span>

              <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
                <h3
                  className={cn(
                    "text-statement transition-colors duration-300",
                    hovered === index ? "text-accent" : "text-text-primary",
                  )}
                >
                  {principle.name}
                </h3>
                <p className="text-body text-text-secondary sm:max-w-xs sm:text-right">
                  {principle.description}
                </p>
              </div>
            </motion.li>
          ))}
        </motion.ol>
      </Container>
    </section>
  );
}
