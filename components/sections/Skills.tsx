"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { fadeInUp, staggerChildren } from "@/lib/motion";

const skillCategories = [
  {
    name: "Development",
    items: ["Next.js", "React", "Node.js", "Python", "TypeScript"],
  },
  {
    name: "Cloud",
    items: ["Google Cloud", "Cloud Run", "Cloud Storage", "Firebase"],
  },
  {
    name: "Data & AI",
    items: ["PostgreSQL", "TensorFlow", "Machine Learning", "NL2SQL"],
  },
  {
    name: "Tools",
    items: ["Git", "Docker", "Linux", "GitHub"],
  },
] as const;

export function Skills() {
  return (
    <section id="skills" className="bg-background-secondary py-section">
      <Container>
        <SectionIntro
          eyebrow="Skills"
          heading="Tools I reach for."
          headingScale="statement"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerChildren(0.1)}
          className="mt-14 grid grid-cols-1 gap-y-10 sm:mt-16 sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-4 lg:gap-x-12"
        >
          {skillCategories.map((category) => (
            <motion.div key={category.name} variants={fadeInUp}>
              <h3 className="text-small font-medium uppercase tracking-wide text-text-secondary">
                {category.name}
              </h3>
              <ul className="mt-4 flex flex-col gap-2">
                {category.items.map((item) => (
                  <li key={item} className="text-body text-text-primary">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
