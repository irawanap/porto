"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { fadeInUp, staggerChildren } from "@/lib/motion";

export function Vision() {
  return (
    <section id="vision" className="bg-black py-section">
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
            What&apos;s Next
          </motion.p>
          <motion.p
            variants={fadeInUp}
            className="mt-6 max-w-3xl text-statement text-white"
          >
            I want to build technology that feels simple, useful, and human.
          </motion.p>
        </motion.div>
      </Container>
    </section>
  );
}
