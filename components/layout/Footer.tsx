import Link from "next/link";
import { Mail } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";
import { siteConfig, socialLinks } from "@/lib/site-config";

const iconLinkStyles =
  "flex h-11 w-11 items-center justify-center rounded-full text-text-secondary transition-colors hover:text-text-primary";

export function Footer() {
  const year = new Date().getFullYear();
  const hasSocialLinks =
    socialLinks.github || socialLinks.linkedin || socialLinks.email;

  return (
    <footer className="border-t border-gray-200">
      <Container>
        <div className="flex flex-col items-center gap-6 py-12 sm:flex-row sm:justify-between">
          <p className="text-[13px] text-text-secondary">
            © {year} {siteConfig.name}
          </p>

          {hasSocialLinks && (
            <div className="flex items-center gap-1">
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
            </div>
          )}
        </div>
      </Container>
    </footer>
  );
}
