"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { ImagePlaceholder } from "@/components/projects/ImagePlaceholder";
import { PipelineDiagram } from "@/components/projects/PipelineDiagram";
import { fadeInUp, staggerChildren } from "@/lib/motion";
import { cn } from "@/lib/utils";
import type { ProjectSection } from "@/lib/projects";

/** Shared eyebrow + heading + body reveal, individually staggered by the
 * ancestor motion.div's variants regardless of which layout wraps it. */
function SectionText({
  section,
  centered = false,
}: {
  section: ProjectSection;
  centered?: boolean;
}) {
  return (
    <>
      <motion.p
        variants={fadeInUp}
        className="text-small font-medium uppercase tracking-wide text-accent"
      >
        {section.label}
      </motion.p>
      <motion.h2
        variants={fadeInUp}
        className="mt-4 text-statement text-text-primary"
      >
        {section.heading}
      </motion.h2>
      {section.body.map((paragraph, i) => (
        <motion.p
          key={`${section.id}-${i}`}
          variants={fadeInUp}
          className={cn(
            "text-text-secondary",
            centered ? "mt-6 text-body-lg" : "mt-4 text-body first:mt-6",
          )}
        >
          {paragraph}
        </motion.p>
      ))}
    </>
  );
}

export function ProjectStorySection({
  section,
  tinted,
  reversed,
}: {
  section: ProjectSection;
  tinted: boolean;
  reversed: boolean;
}) {
  return (
    <section className={cn("py-section", tinted && "bg-background-secondary")}>
      <Container>
        {section.visual === false ? (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerChildren(0.12)}
            className="mx-auto max-w-2xl text-center"
          >
            <SectionText section={section} centered />
          </motion.div>
        ) : section.diagram ? (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerChildren(0.12)}
            className="mx-auto max-w-3xl"
          >
            <SectionText section={section} />
            <motion.div variants={fadeInUp} className="mt-10 sm:mt-12">
              <PipelineDiagram steps={section.diagram} />
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerChildren(0.12)}
            className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16"
          >
            <motion.div
              variants={fadeInUp}
              className={cn(reversed && "lg:order-2")}
            >
              <ImagePlaceholder aspect="aspect-[4/3]" />
            </motion.div>

            <div className={cn(reversed && "lg:order-1")}>
              <SectionText section={section} />
            </div>
          </motion.div>
        )}
      </Container>
    </section>
  );
}
