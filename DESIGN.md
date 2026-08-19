# DESIGN.md

# Personal Portfolio Design System

## Apple-Inspired, Original Identity

This document defines the visual language of the personal portfolio.

The design is inspired by principles commonly seen in Apple's products and digital experiences.

It must remain an **original personal portfolio**.

Do not reproduce Apple's branding, layouts, logos, product pages, or exact visual designs.

---

# 1. Design Philosophy

The core philosophy:

> Simple enough to understand.
> Beautiful enough to remember.
> Thoughtful enough to feel intentional.

Design priorities:

1. Simplicity
2. Hierarchy
3. Whitespace
4. Typography
5. Storytelling
6. Motion
7. Consistency
8. Accessibility

Every visual element should have a reason to exist.

---

# 2. Visual Personality

The portfolio should feel:

* Minimal
* Premium
* Calm
* Modern
* Editorial
* Cinematic
* Human
* Technical
* Sophisticated

Think:

```text
Product presentation
+
Editorial storytelling
+
Personal brand
+
Modern web experience
```

Not:

```text
Generic developer portfolio
+
Dashboard
+
Dribbble-style visual overload
```

---

# 3. Color System

## Primary

```css
--black: #000000;
--white: #ffffff;
```

## Neutral

```css
--gray-50: #f5f5f7;
--gray-100: #e8e8ed;
--gray-200: #d2d2d7;
--gray-400: #86868b;
--gray-600: #6e6e73;
--gray-900: #1d1d1f;
```

## Background

Primary:

```text
#FFFFFF
```

Secondary:

```text
#F5F5F7
```

Dark:

```text
#000000
```

Primary text:

```text
#1D1D1F
```

Secondary text:

```text
#6E6E73
```

---

# 4. Accent Color

The portfolio may have **one subtle personal accent color**.

The accent should be used for:

* Links
* Small highlights
* Interactive states
* Selected navigation
* Small visual details

Do not allow the accent to dominate the interface.

Avoid:

* Neon gradients
* Rainbow gradients
* Multiple competing accent colors

The accent can evolve later as the personal brand develops.

---

# 5. Typography

Preferred:

```css
font-family:
  -apple-system,
  BlinkMacSystemFont,
  "SF Pro Display",
  "SF Pro Text",
  "Inter",
  system-ui,
  sans-serif;
```

If SF Pro is unavailable, use the system font stack.

Typography should feel:

* Clean
* Dense where appropriate
* Spacious where appropriate
* Highly readable

---

# 6. Typography Scale

## Display

Desktop:

```text
96px – 128px
```

Tablet:

```text
72px – 96px
```

Mobile:

```text
48px – 64px
```

Line height:

```text
0.95 – 1.05
```

---

## Section Heading

Desktop:

```text
64px – 80px
```

Mobile:

```text
40px – 48px
```

---

## Large Statement

Desktop:

```text
48px – 64px
```

Mobile:

```text
32px – 40px
```

---

## Body

Desktop:

```text
18px – 21px
```

Mobile:

```text
16px – 18px
```

Line height:

```text
1.5 – 1.7
```

---

# 7. Typography Rules

Use typography as a major visual element.

Prefer:

```text
More than code.

I build to solve
real problems.
```

over:

```text
I am a passionate developer who is highly interested in
technology and enjoys building innovative solutions.
```

Use:

* Short statements
* Large headings
* Strong contrast
* Generous whitespace

Avoid unnecessary paragraphs.

---

# 8. Layout

Default container:

```css
max-width: 1200px;
margin-inline: auto;
padding-inline: 24px;
```

Large desktop:

```text
1280px – 1400px
```

Mobile:

```text
20px – 24px
```

Content should never feel cramped.

---

# 9. Spacing

Recommended scale:

```text
16px
24px
32px
48px
64px
96px
128px
160px
200px
```

Section spacing:

Desktop:

```text
120px – 200px
```

Mobile:

```text
80px – 120px
```

Whitespace is part of the design.

Do not fill empty space unnecessarily.

---

# 10. Border Radius

Use subtle rounding.

Small:

```text
12px
```

Medium:

```text
20px
```

Large:

```text
28px
```

Images and major containers:

```text
24px – 32px
```

Buttons:

```text
9999px
```

Do not make every element extremely rounded.

---

# 11. Navigation

Navigation should be minimal.

Desktop:

```text
IAP            Work   Story   Thinking   About        Contact
```

Characteristics:

* Small typography
* High readability
* Minimal visual weight
* Subtle scroll behavior

When scrolling:

```text
Transparent
↓
Subtle translucent background
↓
Soft blur
```

Do not make navigation visually dominant.

---

# 12. Hero

The Hero should feel cinematic.

Structure:

```text
Small label

Irawan Aji Pangestu

Building ideas
into experiences.

Developer. Problem Solver. Product Thinker.

Explore my work →
```

Height:

```text
80vh – 100vh
```

Do not overcrowd the Hero.

---

# 13. Hero Animation

Sequence:

```text
Background
↓
Name
↓
Headline
↓
Description
↓
CTA
```

Use:

```text
fade
translateY
subtle scale
```

Duration:

```text
0.5s – 1.2s
```

Motion should feel controlled.

---

# 14. Section Rhythm

Use visual variation.

Example:

```text
White
↓
Light gray
↓
White
↓
Dark
↓
White
↓
Light gray
```

Or:

```text
Typography
↓
Image
↓
Split layout
↓
Full-width visual
↓
Typography
```

Avoid making every section look identical.

---

# 15. Featured Projects

Projects should feel like product launches.

Avoid traditional small cards.

Prefer large editorial presentation:

```text
------------------------------------------------

REOIL

Sustainability / Machine Learning / Mobile

[Large project visual]

Turning a daily problem
into a digital experience.

Explore project →

------------------------------------------------
```

Large visuals should dominate.

---

# 16. Project Detail Pages

Opening:

```text
Category

ReOil

Turning a daily waste problem
into a digital experience.

[Large Visual]
```

Then:

```text
The Problem
The Idea
The User
The Process
The Design
The Technology
The Challenge
The Result
The Reflection
```

Use alternating layouts.

---

# 17. Image Treatment

Images should feel intentional.

Use:

* Large screenshots
* Product UI
* Device presentation
* Architecture diagrams
* Process visuals
* Project photography

Use:

```text
rounded corners
+
subtle shadow
+
generous whitespace
```

Avoid random stock images.

Every image should communicate something.

---

# 18. Dark Sections

Use dark sections for emotional emphasis.

Example:

```text
WHY I BUILD

Technology should feel
simple.

Not complicated.
```

Dark sections should be occasional.

Do not make the entire website black.

---

# 19. Buttons

Primary:

```text
Dark background
White text
Pill shape
```

Secondary:

```text
Transparent
Minimal border or text-only
```

Recommended:

```text
padding: 12px 22px
border-radius: 9999px
```

Hover:

```text
scale: 1.02
```

Keep interaction subtle.

---

# 20. Link Interaction

Use directional links:

```text
Explore project →
View story →
Read more →
Let's connect →
```

On hover, the arrow can move slightly.

The effect should be subtle.

---

# 21. Project Hover

On project hover:

Image:

```text
scale(1.02)
```

Text:

```text
translateX(4px)
```

Use a smooth transition.

Do not use dramatic 3D effects.

---

# 22. Scroll Animation

Default reveal:

```text
opacity: 0 → 1
translateY: 24px → 0
```

Duration:

```text
0.6s – 1s
```

Use stagger carefully.

Avoid animating every word independently unless it improves the storytelling.

---

# 23. Parallax

Parallax may be used for:

* Hero visuals
* Project visuals
* Large photography

Do not use parallax everywhere.

Avoid parallax on:

* Small text
* Navigation
* Buttons
* Dense UI

---

# 24. Glassmorphism

Glass effects are optional and limited.

If used:

```css
backdrop-filter: blur(20px);
background: rgba(255,255,255,0.72);
```

Good use:

* Floating navbar
* Small contextual controls

Bad use:

* Every card
* Every section
* Entire website

The primary design language remains minimalist, not glassmorphic.

---

# 25. Responsive Breakpoints

Recommended:

```text
Mobile
< 640px

Tablet
640px – 1024px

Desktop
1024px – 1440px

Large Desktop
> 1440px
```

Follow the project's Tailwind configuration where applicable.

---

# 26. Mobile

Mobile is a first-class experience.

Rules:

* Smaller typography
* Strong hierarchy
* Larger touch targets
* Simplified navigation
* Reduced animation
* Stacked layouts
* Preserved whitespace

Example:

```text
Irawan Aji Pangestu

Building ideas
into experiences.

[Explore My Work]
```

Keep it simple.

---

# 27. Accessibility

Maintain:

* Good contrast
* Keyboard navigation
* Visible focus
* Semantic HTML
* Accessible labels
* Meaningful alt text
* Proper heading hierarchy

Minimum touch target:

```text
44px
```

---

# 28. Reduced Motion

Support:

```css
prefers-reduced-motion: reduce
```

When enabled:

* Remove parallax
* Reduce animation
* Reduce transition duration
* Show content immediately

Content must remain fully accessible.

---

# 29. Visual Hierarchy

Each page should have:

```text
1 Primary message
2–3 Supporting messages
Supporting visuals
Secondary details
```

Not everything should compete for attention.

---

# 30. Component Style

Components should feel consistent.

Common components:

```text
Navbar
Button
SectionHeading
ProjectShowcase
ProjectMeta
Tag
ImageReveal
TextReveal
Footer
```

Avoid creating visually different versions of the same component unless necessary.

---

# 31. Anti-Patterns

Avoid:

```text
❌ Skill percentage bars
❌ Skill star ratings
❌ Excessive cards
❌ Neon colors
❌ Rainbow gradients
❌ Excessive glassmorphism
❌ Huge icon collections
❌ Unnecessary 3D effects
❌ Excessive animations
❌ Generic stock photos
❌ Fake metrics
❌ Fake testimonials
❌ Fake achievements
❌ Template-like layouts
```

---

# 32. Design Quality Checklist

Before considering a page finished:

* [ ] Clear visual hierarchy
* [ ] Strong typography
* [ ] Generous whitespace
* [ ] Consistent spacing
* [ ] Limited color palette
* [ ] No unnecessary decoration
* [ ] Animations are purposeful
* [ ] Mobile layout works
* [ ] Images are optimized
* [ ] CTA is clear
* [ ] Accessibility considered
* [ ] Visual identity is consistent
* [ ] Page feels like a product, not a template

---

# 33. Final Design Principle

The portfolio should not feel like:

> "A website that looks like Apple."

It should feel like:

> "A beautifully designed personal product inspired by Apple's attention to simplicity and detail."

The design should make the visitor remember:

**The person.**

**The ideas.**

**The products.**

**The thinking.**

Not the visual reference used to create it.
