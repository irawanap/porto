"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { fadeInUp } from "@/lib/motion";

export function BeyondTechnology() {
  return (
    <section id="beyond" className="py-section">
      <Container>
        <SectionIntro eyebrow="Beyond Technology" heading="There's more to it than code.">
          <motion.p
            variants={fadeInUp}
            className="mt-8 text-body-lg text-text-secondary"
          >
            The technical work is only half of it. I care just as much
            about whether an idea can be explained clearly, whether
            feedback actually gets heard, and whether the result makes
            sense to someone who isn&apos;t technical at all.
          </motion.p>

          <motion.p
            variants={fadeInUp}
            className="mt-6 text-body text-text-secondary"
          >
            Curiosity is the constant — I&apos;m as interested in why a
            problem exists as I am in how to fix it, and that&apos;s
            usually where the more interesting solutions come from.
          </motion.p>
        </SectionIntro>
      </Container>
    </section>
  );
}
