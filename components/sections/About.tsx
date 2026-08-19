"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { fadeInUp } from "@/lib/motion";

export function About() {
  return (
    <section id="about" className="bg-background-secondary py-section">
      <Container>
        <SectionIntro eyebrow="About" heading="More than code.">
          <motion.p
            variants={fadeInUp}
            className="mt-8 text-body-lg text-text-secondary"
          >
            I enjoy understanding problems, building solutions, and learning
            from the process.
          </motion.p>

          <motion.p
            variants={fadeInUp}
            className="mt-6 text-body text-text-secondary"
          >
            My curiosity tends to lead into the technical — teaching a model
            to recognize something useful, or turning a plain-language
            question into a safe database query. I like getting hands-on
            with a problem until it turns into something people can
            actually use, and I&apos;m still early enough in this to enjoy
            every bit of that process.
          </motion.p>
        </SectionIntro>
      </Container>
    </section>
  );
}
