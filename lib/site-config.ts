export const siteConfig = {
  name: "Irawan Aji Pangestu",
  shortName: "IAP",
  // TODO: set once the site has a real domain.
  url: null as string | null,
};

export const navItems = [
  { label: "Work", href: "/projects" },
  { label: "Journey", href: "/#journey" },
  { label: "Thinking", href: "/#thinking" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
] as const;

// TODO: add GitHub / LinkedIn profile URLs once available — leave null
// (hidden from the UI) rather than guessing at a handle.
export const socialLinks = {
  github: null as string | null,
  linkedin: null as string | null,
  email: "ivanrayhanravan@gmail.com" as string | null,
};
