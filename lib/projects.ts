export type ProjectSection = {
  id: string;
  label: string;
  heading: string;
  body: string[];
  /**
   * Reflective sections (Why, Reflection) read better as a centered
   * statement than the default alternating image + text layout.
   */
  visual?: boolean;
  /**
   * Ordered step labels for a simple request/data flow (e.g. Solution
   * sections describing an architecture). Renders in place of the default
   * image placeholder — kept plain-language so non-technical visitors can
   * follow it.
   */
  diagram?: string[];
};

export type Project = {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  summary: string;
  overview: {
    role: string;
    timeline: string;
    stack: string[];
  };
  sections: ProjectSection[];
};

type SectionSpec = {
  id: string;
  label: string;
  visual?: boolean;
};

// Fixed order for every project detail page — CLAUDE.md #14 / DESIGN.md #16.
const SECTION_SPECS: SectionSpec[] = [
  { id: "problem", label: "The Problem" },
  { id: "why", label: "Why", visual: false },
  { id: "idea", label: "The Idea" },
  { id: "user", label: "The User" },
  { id: "process", label: "The Process" },
  { id: "design", label: "The Design" },
  { id: "technology", label: "The Technology" },
  { id: "challenges", label: "The Challenges" },
  { id: "solution", label: "The Solution" },
  { id: "result", label: "The Result" },
  { id: "reflection", label: "The Reflection", visual: false },
];

type SectionOverride = {
  heading?: string;
  body?: string[];
  diagram?: string[];
};

function buildSections(
  overrides: Partial<Record<string, SectionOverride>> = {},
): ProjectSection[] {
  return SECTION_SPECS.map((spec) => {
    const override = overrides[spec.id];
    const topic = spec.label.replace(/^The /, "").toLowerCase();

    return {
      id: spec.id,
      label: spec.label,
      visual: spec.visual ?? true,
      heading: override?.heading ?? "[PLACEHOLDER]",
      body: override?.body ?? [
        `[PLACEHOLDER — ${topic} content for this project]`,
      ],
      diagram: override?.diagram,
    };
  });
}

export const projects: Project[] = [
  {
    slug: "reoil",
    name: "ReOil",
    category: "Mobile / Machine Learning / Sustainability",
    tagline: "Turning a daily waste problem into a digital experience.",
    summary:
      "ReOil is a mobile app that uses an on-device machine learning model to classify used cooking oil, turning a judgment call people normally have to guess at into a quick, photo-based answer.",
    overview: {
      role: "",
      timeline: "",
      stack: ["TensorFlow Lite"],
    },
    sections: buildSections({
      problem: {
        heading: "Used cooking oil doesn't have an easy \"next step.\"",
        body: [
          "After frying, most households are left holding a container of oil with no simple way to tell whether it's still reusable or already past the point of no return — so it often just gets poured away, however that ends up happening.",
        ],
      },
      why: {
        heading: "The oil holds the answer — if you know how to read it.",
        body: [
          "Whether a batch is still good or needs to be discarded usually comes down to visible cues like color and clarity, but knowing what to look for isn't obvious unless it's something you already do regularly.",
        ],
      },
      idea: {
        heading: "Let a model do the reading.",
        body: [
          "Point a phone camera at the oil and let an on-device machine learning model classify its condition — turning a judgment call that normally takes experience into something anyone can check in seconds.",
        ],
      },
      user: {
        heading: "Anyone standing over a pan of used oil.",
        body: [
          "Home cooks and small food businesses who fry regularly and are otherwise left to decide, on their own, whether a batch of oil is still usable.",
        ],
      },
      process: {
        heading: "Observe first, build second.",
        body: [
          "The starting point wasn't the model — it was understanding what actually separates reusable oil from spent oil, and what a non-expert could realistically judge from a single photo before any classification logic was designed.",
        ],
      },
      design: {
        heading: "One photo, one answer.",
        body: [
          "The interaction is deliberately minimal: open the app, photograph the oil, get a straightforward read on its condition — no manual input, no jargon, no extra steps between the question and the answer.",
        ],
      },
      technology: {
        heading: "Classification that runs on the device, not the cloud.",
        body: [
          "The core of ReOil is a TensorFlow Lite model trained to classify used cooking oil, run directly on-device so a result doesn't depend on a network connection or a round trip to a server.",
        ],
      },
      challenges: {
        heading: "Teaching a model to see what experience usually teaches.",
        body: [
          "Used cooking oil doesn't fail in one obvious way — color and clarity shift gradually, not in clean categories. Getting a lightweight, on-device model to draw a useful line through that gradient, without relying on server-side compute, was the central technical challenge.",
        ],
      },
      solution: {
        heading: "From photo to answer, on-device.",
        body: [
          "A photo goes straight into a TensorFlow Lite model running on the phone, which classifies the oil's condition and returns a plain answer — the entire loop happens on-device, with nothing sent to a server.",
        ],
        diagram: [
          "Photo of oil",
          "On-device classification",
          "Condition result",
        ],
      },
      result: {
        heading: "A working, on-device classifier.",
        body: [
          "ReOil exists as a functioning mobile experience: photograph used cooking oil, and the on-device model returns a classification of its condition. Broader rollout and real-world feedback are the natural next step, not something to claim ahead of it.",
        ],
      },
      reflection: {
        heading: "Sustainability problems are often UX problems in disguise.",
        body: [
          "The hard part of ReOil was never really the model — it was translating a judgment call that normally takes experience into something a single photo could answer. That's the part worth carrying into the next problem, technical or not.",
        ],
      },
    }),
  },
  {
    slug: "nl2sql",
    name: "NL2SQL IT Chatbot",
    category: "Generative AI / Enterprise / Productivity",
    tagline: "Ask your database a question. Get an answer — not a ticket.",
    summary:
      "An internal tool that lets people ask questions about company data in plain language, instead of routing every request through IT.",
    overview: {
      role: "",
      timeline: "",
      stack: ["SQL", "Language Model"],
    },
    sections: buildSections({
      problem: {
        heading: "Every question becomes a ticket.",
        body: [
          "Users often depend on IT teams to obtain information from databases — even for questions that are simple to state but locked behind SQL.",
        ],
      },
      why: {
        heading: "The bottleneck isn't the data. It's the language.",
        body: [
          "IT ends up fielding the same kinds of requests repeatedly, and the person asking waits regardless of how simple the question is — not because the answer is hard to find, but because getting to it requires SQL.",
        ],
      },
      idea: {
        heading: "Ask instead of query.",
        body: [
          "Allow users to ask questions using natural language — the way they'd ask a colleague — instead of learning SQL or filing a request and waiting for someone else to run it.",
        ],
      },
      user: {
        heading: "People who need an answer, not a query.",
        body: [
          "Employees across the organization who need answers from company data but don't know SQL — and previously had no way to get one without going through IT.",
        ],
      },
      process: {
        heading: "Start from the constraint, not the interface.",
        body: [
          "Before any chat interface existed, the real question was how to let a language model touch a production database safely at all — so the validation and execution boundary came first, and the natural-language front end was built on top of it once that boundary was solid.",
        ],
      },
      design: {
        heading: "A conversational interface, not a query builder.",
        body: [
          "The interaction is a chat: type a question in plain language, get a plain-language answer back. The SQL and the database sit behind it, out of view.",
        ],
      },
      technology: {
        heading: "Two systems, kept apart on purpose.",
        body: [
          "A language model alone can't be trusted to touch a production database directly, so generation and execution are kept separate, with a validation step in between.",
          "It also had to run inside an on-premise enterprise environment, not a simpler cloud-hosted setup — a real constraint on how the pieces could be deployed and connected.",
        ],
      },
      challenges: {
        heading: "Freedom of language, safety of structure.",
        body: [
          "Natural language is open-ended; a production database can't be. The core challenge was making sure a validation layer could catch or block unsafe or malformed queries before they ever reached the database, without making the tool frustrating to use.",
        ],
      },
      solution: {
        heading: "From question to answer.",
        body: [
          "Natural language becomes a SQL query, the query is validated before it runs, and the database's response comes back in plain language — the person asking never sees the SQL in between.",
        ],
        diagram: [
          "Natural language",
          "SQL generation",
          "Validation",
          "Database",
          "Response",
        ],
      },
      result: {
        heading: "A complete request-to-answer loop.",
        body: [
          "A question typed in plain language becomes a validated SQL query, runs against the database, and comes back as a readable answer — without a person in IT running it manually.",
          "It stands as a working proof of concept for how natural language can safely sit in front of a production database — broader rollout and feedback are the next step, not something to claim ahead of it.",
        ],
      },
      reflection: {
        heading: "Flexibility and safety are the same problem.",
        body: [
          "Building this made the trade-off concrete: natural language is open-ended, but a database isn't. Every layer between the question and the query exists to close that gap without closing off what people can ask.",
        ],
      },
    }),
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getNextProject(slug: string): Project {
  const index = projects.findIndex((project) => project.slug === slug);
  return projects[(index + 1) % projects.length];
}

export type SectionLayout = {
  section: ProjectSection;
  tinted: boolean;
  reversed: boolean;
};

/**
 * Background tint alternates by absolute position — every section renders
 * its own background, so that rhythm is always visible. `reversed` (which
 * side the image sits on) only affects the plain image+text branch in
 * ProjectStorySection, so it's counted separately: a centered-statement or
 * diagram section (e.g. "Why," "Solution") doesn't occupy a left/right side
 * at all, and letting it consume a parity slot anyway broke the alternation
 * for the image+text sections around it.
 */
export function getSectionLayout(sections: ProjectSection[]): SectionLayout[] {
  let alternatingIndex = -1;

  return sections.map((section, index) => {
    const isAlternatingLayout = section.visual !== false && !section.diagram;
    if (isAlternatingLayout) alternatingIndex += 1;

    return {
      section,
      tinted: index % 2 === 1,
      reversed: isAlternatingLayout && alternatingIndex % 2 === 1,
    };
  });
}
