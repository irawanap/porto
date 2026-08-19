"use client";

import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { ProjectVisual } from "@/components/projects/ProjectVisual";
import { Tag } from "@/components/ui/Tag";
import { fadeInUp, staggerChildren } from "@/lib/motion";
import type { Project } from "@/lib/projects";

export function ProjectHero({ project }: { project: Project }) {
  const categories = project.category.split(" / ");

  return (
    <section className="pt-8 pb-section sm:pt-10">
      <Container>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerChildren(0.12)}
        >
          <motion.div variants={fadeInUp}>
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 text-[13px] font-medium text-text-secondary transition-colors hover:text-text-primary"
            >
              <ArrowLeft size={14} aria-hidden="true" />
              All work
            </Link>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="mt-8 flex flex-wrap gap-2 sm:mt-10"
          >
            {categories.map((category) => (
              <Tag key={category}>{category}</Tag>
            ))}
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="mt-6 max-w-3xl text-heading text-text-primary"
          >
            {project.name}
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mt-6 max-w-2xl text-body-lg text-text-secondary"
          >
            {project.tagline}
          </motion.p>

          <motion.div variants={fadeInUp} className="mt-12 sm:mt-16">
            <ProjectVisual project={project} aspect="aspect-[16/9]" />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
