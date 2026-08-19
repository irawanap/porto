"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { ProjectListItem } from "@/components/projects/ProjectListItem";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { fadeInUp, staggerChildren } from "@/lib/motion";
import { projects } from "@/lib/projects";

export function FeaturedWork() {
  return (
    <section id="work" className="bg-background-secondary py-section">
      <Container>
        <SectionIntro eyebrow="Featured Work" heading="Selected work." />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerChildren(0.1)}
          className="mt-12 divide-y divide-gray-200 border-t border-gray-200 sm:mt-16"
        >
          {projects.map((project) => (
            <motion.div key={project.slug} variants={fadeInUp}>
              <ProjectListItem project={project} headingLevel="h3" />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="mt-12 sm:mt-16"
        >
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 text-body font-medium text-text-primary transition-colors hover:text-accent"
          >
            View all work
            <ArrowRight
              size={18}
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
