"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";
import { fadeInUp, staggerChildren } from "@/lib/motion";
import { socialLinks } from "@/lib/site-config";

const iconLinkStyles =
  "flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 text-text-secondary transition-colors hover:border-gray-400 hover:text-text-primary";

export function Contact() {
  const hasSocialLinks =
    socialLinks.github || socialLinks.linkedin || socialLinks.email;

  return (
    <section id="contact" className="py-section">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerChildren(0.12)}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-heading text-text-primary"
          >
            Let&apos;s build something meaningful.
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="mt-6 text-body-lg text-text-secondary"
          >
            Interested in working together, exploring an opportunity, or
            simply talking about technology?
          </motion.p>

          <motion.p
            variants={fadeInUp}
            className="mt-2 text-body-lg text-text-secondary"
          >
            Let&apos;s connect.
          </motion.p>

          {hasSocialLinks && (
            <motion.div
              variants={fadeInUp}
              className="mt-10 flex items-center justify-center gap-3"
            >
              {socialLinks.github && (
                <Link
                  href={socialLinks.github}
                  className={iconLinkStyles}
                  aria-label="GitHub"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubIcon className="h-[18px] w-[18px]" />
                </Link>
              )}
              {socialLinks.linkedin && (
                <Link
                  href={socialLinks.linkedin}
                  className={iconLinkStyles}
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedinIcon className="h-[18px] w-[18px]" />
                </Link>
              )}
              {socialLinks.email && (
                <Link
                  href={`mailto:${socialLinks.email}`}
                  className={iconLinkStyles}
                  aria-label="Email"
                >
                  <Mail size={18} aria-hidden="true" />
                </Link>
              )}
            </motion.div>
          )}
        </motion.div>
      </Container>
    </section>
  );
}
