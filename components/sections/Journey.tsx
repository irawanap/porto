"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { fadeInUp, staggerChildren } from "@/lib/motion";

type Milestone = {
  label: string;
  title: string;
  description: string;
  href?: string;
};

// Only milestones with real, documented substance behind them are listed
// here — CLAUDE.md #21 requires [PLACEHOLDER] over invented facts, and an
// invented-but-vague date/company is no more honest than a bracket. As
// education and work history become documented, add milestones for them
// instead of padding this list with undated placeholders.
const milestones: Milestone[] = [
  {
    label: "Projects",
    title: "ReOil & NL2SQL IT Chatbot",
    description:
      "Mobile machine learning for a sustainability problem, and generative AI for enterprise IT — two different problems that taught the same lesson: constraints aren't obstacles to the idea, they're part of it.",
    href: "/projects",
  },
  {
    label: "Future Direction",
    title: "What's next",
    description: "More on where that's headed, further down the page.",
  },
];

export function Journey() {
  return (
    <section id="journey" className="py-section">
      <Container>
        <SectionIntro eyebrow="Journey" heading="A path still being written." />

        <motion.ol
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerChildren(0.08)}
          className="mt-12 divide-y divide-gray-200 border-t border-gray-200 sm:mt-16"
        >
          {milestones.map((milestone) => (
            <motion.li
              key={milestone.label}
              variants={fadeInUp}
              className="grid grid-cols-1 gap-2 py-8 sm:grid-cols-[160px_1fr] sm:gap-8 sm:py-10"
            >
              <p className="text-small font-medium uppercase tracking-wide text-text-secondary">
                {milestone.label}
              </p>
              <div>
                <h3 className="text-xl font-semibold text-text-primary sm:text-2xl">
                  {milestone.title}
                </h3>
                <p className="mt-3 text-body text-text-secondary">
                  {milestone.description}
                </p>
                {milestone.href && (
                  <Link
                    href={milestone.href}
                    className="mt-3 inline-flex items-center gap-1.5 text-body font-medium text-text-primary transition-colors hover:text-accent"
                  >
                    View projects
                    <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                )}
              </div>
            </motion.li>
          ))}
        </motion.ol>
      </Container>
    </section>
  );
}
