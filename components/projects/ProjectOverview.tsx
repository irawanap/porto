"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { ProjectMeta } from "@/components/projects/ProjectMeta";
import { fadeInUp, staggerChildren } from "@/lib/motion";
import type { Project } from "@/lib/projects";

export function ProjectOverview({ project }: { project: Project }) {
  const hasMeta =
    project.overview.role ||
    project.overview.timeline ||
    project.overview.stack.length > 0;

  return (
    <section className="border-y border-gray-200 py-section">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerChildren(0.12)}
          className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-statement text-text-primary"
          >
            Overview
          </motion.h2>

          <div className="flex flex-col gap-10">
            <motion.p
              variants={fadeInUp}
              className="text-body-lg text-text-secondary"
            >
              {project.summary}
            </motion.p>

            {hasMeta && (
              <motion.div variants={fadeInUp}>
                <ProjectMeta overview={project.overview} />
              </motion.div>
            )}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
