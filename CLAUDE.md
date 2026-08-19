# CLAUDE.md

# Personal Portfolio — Project Instructions

## 1. Project Overview

This project is a premium personal portfolio website for **Irawan Aji Pangestu**.

The portfolio is a **general-purpose personal brand and project showcase**.

It should be suitable for:

* Job applications
* Internship applications
* Apple Developer Academy
* Developer communities
* Freelance opportunities
* Personal branding
* Project showcases
* Networking

The website should communicate not only technical skills, but also:

* Curiosity
* Problem solving
* Creativity
* Product thinking
* Learning mindset
* Technical capability
* Human-centered thinking
* Ability to turn ideas into useful products

The portfolio should feel like a **digital product**, not a traditional developer resume website.

---

# 2. Core Design Direction

The visual direction is inspired by the design philosophy commonly associated with Apple products and Apple.com.

Apple is a **design reference**, not the identity of this portfolio.

Do NOT:

* Copy Apple's website
* Reproduce Apple's branding
* Use Apple's logo
* Pretend to be affiliated with Apple
* Copy Apple's exact layouts
* Copy Apple's product pages
* Make the entire website look like an Apple clone

Instead, take inspiration from principles such as:

* Simplicity
* Strong typography
* Generous whitespace
* Clear hierarchy
* Editorial storytelling
* Product-focused presentation
* Subtle animation
* High attention to detail
* Calm visual language
* Human-centered interaction

The result must have its own identity.

---

# 3. Core Philosophy

The website should communicate:

> A developer who doesn't just write code, but thinks about problems, people, products, and experiences.

Prioritize:

**Storytelling > Decoration**

**Experience > Features**

**Clarity > Complexity**

**Problem > Technology**

**Impact > Tech Stack**

**Human > Resume**

---

# 4. Personal Brand

Name:

**Irawan Aji Pangestu**

Suggested positioning:

**Developer. Problem Solver. Product Thinker.**

Alternative supporting statements may be used depending on context:

* Building ideas into experiences.
* Turning problems into digital solutions.
* Technology, products, and meaningful experiences.
* Building useful things with technology.

Do not lock the portfolio into a single professional title.

The portfolio should allow future expansion into:

* Software Engineering
* Cloud Engineering
* DevOps
* Product Development
* Digital Products
* Technology Innovation

---

# 5. Target Audience

The website may be viewed by:

* Recruiters
* Hiring managers
* Developers
* Product people
* Academic programs
* Technology communities
* Potential collaborators
* Potential clients

Therefore, the experience must be understandable to both technical and non-technical visitors.

Technical information should be available without overwhelming the primary story.

---

# 6. Technology Stack

Preferred stack:

* Next.js
* TypeScript
* React
* Tailwind CSS
* Framer Motion
* Lucide React

Use Next.js App Router unless the existing project requires otherwise.

Prioritize:

* Performance
* Accessibility
* Responsive design
* Maintainability
* Semantic HTML
* SEO
* Clean architecture

Do not add dependencies unless they provide meaningful value.

---

# 7. Project Architecture

Prefer:

```text
app/
├── layout.tsx
├── page.tsx
├── globals.css
├── projects/
│   ├── page.tsx
│   ├── reoil/
│   │   └── page.tsx
│   └── nl2sql/
│       └── page.tsx
└── ...

components/
├── layout/
├── navigation/
├── hero/
├── sections/
├── projects/
├── ui/
└── ...

lib/
├── projects.ts
├── utils.ts
└── ...

public/
├── images/
├── projects/
└── icons/

CLAUDE.md
DESIGN.md
README.md
```

Do not create a monolithic `page.tsx`.

Break large UI sections into reusable components.

---

# 8. Homepage Structure

The homepage should follow this general storytelling flow:

```text
Hero
↓
About
↓
Journey
↓
Featured Work
↓
How I Think
↓
Skills
↓
Beyond Technology
↓
Vision
↓
Contact
```

Each section must have a clear purpose.

Do not add sections simply because they look visually attractive.

---

# 9. Hero

The Hero should immediately communicate:

1. Name
2. What I do
3. What I care about
4. A clear action

Suggested:

```text
Irawan Aji Pangestu

Building ideas
into experiences.

Developer. Problem Solver. Product Thinker.

Explore my work →
```

The hero should be visually simple.

Avoid placing excessive UI elements above the fold.

---

# 10. About Section

The About section should answer:

> Who is this person?

Focus on:

* Background
* Curiosity
* Interests
* Motivation
* Way of thinking

Do not turn this into a traditional resume paragraph.

Use short statements and storytelling.

Example:

```text
More than code.

I enjoy understanding problems,
building solutions,
and learning from the process.
```

---

# 11. Journey Section

Show the evolution of the person.

Possible structure:

```text
Education
↓
Early Experience
↓
Technology
↓
Projects
↓
Industry Experience
↓
What's Next
```

Each milestone should explain:

* What happened
* What was learned
* How it influenced the next step

Do not make the timeline unnecessarily complicated.

---

# 12. Featured Work

This is one of the most important sections.

Projects should be presented as products rather than GitHub repositories.

Each project should communicate:

```text
Problem
↓
Why
↓
Idea
↓
Process
↓
Design
↓
Technology
↓
Challenge
↓
Result
↓
Reflection
```

---

# 13. Current Featured Projects

## ReOil

Category:

**Mobile / Machine Learning / Sustainability**

Focus on:

* Problem
* Motivation
* User
* Product idea
* Design
* Machine learning
* Development
* Deployment
* Challenges
* Result
* Reflection

Do not only list the technology stack.

The product story is more important.

---

## NL2SQL IT Chatbot

Category:

**Generative AI / Enterprise / Productivity**

Focus on:

* Information access problem
* User experience
* Natural language interaction
* SQL generation
* Validation
* Security
* Architecture
* On-premise considerations
* Challenges
* Lessons learned

Do not describe this as Agentic AI unless the implementation actually uses an agentic architecture.

---

# 14. Project Detail Pages

Each project should have its own page.

Recommended:

```text
/projects/reoil
/projects/nl2sql
```

Project detail structure:

```text
Hero
↓
Overview
↓
The Problem
↓
The Idea
↓
The User
↓
The Process
↓
Design
↓
Technology
↓
Challenges
↓
Solution
↓
Result
↓
Reflection
↓
Next Project
```

Use large visuals and typography.

Avoid making project pages look like documentation pages.

---

# 15. How I Think

This section communicates problem-solving philosophy.

Possible principles:

### Observe

Understand the problem before building.

### Simplify

Turn complexity into simple experiences.

### Build

Prototype, test, and iterate.

### Learn

Treat failures as feedback.

These principles should be presented visually and editorially.

---

# 16. Skills

Do not use:

* Percentage bars
* Star ratings
* Fake proficiency levels

Instead, categorize technologies.

Example:

```text
Development
Next.js
React
Node.js
Python
TypeScript

Cloud
Google Cloud
Cloud Run
Cloud Storage
Firebase

Data & AI
PostgreSQL
TensorFlow
Machine Learning
NL2SQL

Tools
Git
Docker
Linux
GitHub
```

Only list technologies that are genuinely relevant.

---

# 17. Beyond Technology

The portfolio should communicate that the person is more than technical skills.

Possible themes:

* Teamwork
* Communication
* Organization
* Learning
* Sports
* Creativity
* Leadership
* Collaboration
* Problem solving

Only use real experiences.

Never fabricate achievements.

---

# 18. Vision

Instead of a dedicated Apple-specific section, use a general:

## What's Next?

This section should explain:

* What I want to learn
* What I want to build
* Problems I want to explore
* Areas that interest me

Possible statement:

> I want to build technology that feels simple, useful, and human.

This section can naturally support applications to Apple Developer Academy without making the entire portfolio Apple-specific.

---

# 19. Contact

Final CTA should feel personal.

Example:

```text
Let's build something meaningful.

Interested in working together,
building something new,
or simply talking about technology?

Let's connect.
```

Include:

* GitHub
* LinkedIn
* Email

Do not overload the footer.

---

# 20. Writing Style

Use:

* Concise language
* Human language
* Strong statements
* Personal reflection
* Specific experiences
* Clear reasoning

Avoid:

* Corporate jargon
* Generic motivational statements
* Excessive technical terminology
* Artificially impressive language
* Long paragraphs

Tone:

**Curious + thoughtful + confident + humble**

---

# 21. Content Integrity

Never invent:

* Achievements
* Awards
* Users
* Revenue
* Performance metrics
* Clients
* Companies
* Certifications
* Project results

If information is missing, use:

```text
[PLACEHOLDER]
```

instead of inventing information.

---

# 22. Animation

Use Framer Motion.

Animation should be:

* Subtle
* Smooth
* Purposeful
* Fast enough to feel responsive

Use:

* Fade
* Slide
* Scale
* Reveal
* Parallax
* Hover transitions

Avoid:

* Excessive bouncing
* Constant movement
* Large rotations
* Distracting effects
* Animation everywhere

Always respect:

```text
prefers-reduced-motion
```

---

# 23. Responsive Design

The website must work on:

* Mobile
* Tablet
* Desktop
* Large desktop

Mobile is not simply a smaller desktop.

Design mobile intentionally.

Check:

* Typography
* Navigation
* Spacing
* Images
* CTA
* Touch targets
* Horizontal overflow

---

# 24. Accessibility

Use:

* Semantic HTML
* Proper heading hierarchy
* Keyboard navigation
* Visible focus states
* Accessible labels
* Meaningful alt text
* Good contrast
* Reduced-motion support

Minimum touch target:

```text
44px
```

---

# 25. Performance

Prioritize:

* Fast initial loading
* Optimized images
* Lazy loading
* Minimal JavaScript
* Next.js Image
* Code splitting
* Server Components

Do not sacrifice performance for visual effects.

---

# 26. SEO

Default metadata:

Title:

```text
Irawan Aji Pangestu — Developer & Product Thinker
```

Description:

```text
Personal portfolio of Irawan Aji Pangestu, showcasing digital products, technology, problem solving, and creative thinking.
```

Include:

* Open Graph
* Twitter/X metadata where appropriate
* Semantic headings
* Descriptive links
* Project metadata

---

# 27. Security

Never expose:

* API keys
* Passwords
* Database credentials
* Tokens
* Private URLs
* Internal company information

Never commit:

```text
.env
.env.local
.env.production
```

Use:

```text
.env.example
```

when necessary.

---

# 28. Git Safety

Before modifying:

```bash
git status
```

After significant changes:

```bash
git diff
```

Before completion:

```bash
npm run lint
npm run build
```

Never automatically:

* Force push
* Reset user changes
* Delete branches
* Push to production
* Perform destructive Git operations

without explicit approval.

---

# 29. Development Workflow

Follow:

```text
Understand
↓
Inspect
↓
Plan
↓
Implement
↓
Run
↓
Test
↓
Review
↓
Polish
```

Before creating a component, check whether an existing component can be reused.

Before installing a package, determine whether existing dependencies are sufficient.

---

# 30. Use DESIGN.md

All visual decisions must follow:

```text
DESIGN.md
```

`CLAUDE.md` defines behavior, architecture, content, and development rules.

`DESIGN.md` defines visual and interaction rules.

When visual implementation conflicts with `DESIGN.md`, update the design intentionally rather than creating inconsistent UI.

---

# 31. Definition of Done

A feature is complete only when:

* [ ] UI works
* [ ] Responsive layout works
* [ ] Mobile layout works
* [ ] No console errors
* [ ] No TypeScript errors
* [ ] No broken links
* [ ] No broken images
* [ ] Accessibility considered
* [ ] Animations work
* [ ] `npm run lint` passes
* [ ] `npm run build` passes
* [ ] Visual consistency is maintained

---

# 32. Final Principle

The portfolio should not make visitors think:

> "This person knows how to make a pretty website."

It should make them think:

> "This person knows how to turn ideas and problems into meaningful experiences."

The website itself should be evidence of that ability.
