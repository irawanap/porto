"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { fadeInUp, staggerChildren } from "@/lib/motion";
import type { Project } from "@/lib/projects";

export function NextProject({ project }: { project: Project }) {
  return (
    <section className="bg-black py-section">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerChildren(0.12)}
        >
          <motion.p
            variants={fadeInUp}
            className="text-small font-medium uppercase tracking-wide text-gray-400"
          >
            Next Project
          </motion.p>

          <Link href={`/projects/${project.slug}`} className="group mt-6 block">
            <motion.h2 variants={fadeInUp} className="text-heading text-white">
              {project.name}
            </motion.h2>
            <motion.span
              variants={fadeInUp}
              className="mt-6 inline-flex items-center gap-2 text-body-lg text-gray-200"
            >
              View project
              <ArrowRight
                size={20}
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </motion.span>
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
