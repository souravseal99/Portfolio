# Phase 2: Content & Design - Research

**Researched:** 2026-03-02
**Domain:** Portfolio website sections implementation
**Confidence:** HIGH

## Summary

Phase 2 requires building all portfolio sections with actual content. The research confirms the standard structure for developer portfolios: Hero → About → Experience → Projects → Skills → Contact → Footer. Using shadcn/ui components will accelerate development while maintaining a professional look.

**Primary recommendation:** Use shadcn/ui for cards, buttons, badges. Build custom sections with TailwindCSS for full control over layout and animations.

## User Constraints (from CONTEXT.md)

### Locked Decisions
- All content captured in CONTEXT.md (name, title, projects, skills, contact)
- Smooth scroll navigation enabled

### Design Defaults
- Use default shadcn/ui styling
- Clean, professional look

## Phase Requirements

| ID | Description | Research Support |
|----|-------------|-----------------|
| HERO-01 | Name "Sourav Seal" displayed | Standard hero pattern |
| HERO-02 | Title "Full-Stack Developer" | Standard hero pattern |
| HERO-03 | Tagline present | Standard hero pattern |
| HERO-04 | CTA button scrolls to projects | Smooth scroll + anchor |
| ABOT-01 | Professional bio | Standard about pattern |
| ABOT-02 | CloudKaptan experience | From resume |
| ABOT-03 | Profile placeholder | Image placeholder |
| EXPR-01 | Work history displayed | Standard experience pattern |
| EXPR-02 | Company, role, duration | From resume |
| EXPR-03 | Key achievements | From resume |
| EXPR-04 | 3+ years at CloudKaptan | From resume |
| PROJ-01 | Project cards displayed | Card grid pattern |
| PROJ-02 | Title, description, links | Standard project card |
| PROJ-03 | Live links | From resume |
| PROJ-04 | GitHub links | From resume |
| PROJ-05 | Tech stack displayed | Badge pattern |
| SKIL-01 | Skills categorized | Badge grid pattern |
| SKIL-02 | Frontend: React, Next.js, TypeScript, TailwindCSS, React Native | From resume |
| SKIL-03 | Backend: Node.js, Express, MongoDB, PostgreSQL | From resume |
| CONT-01 | Email: sourav.seal1999@gmail.com | From resume |
| CONT-02 | LinkedIn, GitHub links | From resume |
| CONT-03 | Location: Kolkata, India | From resume |
| CONT-04 | Phone (optional) | From resume |
| CONT-05 | Contact section layout | Standard pattern |
| FOOT-01 | Copyright text | Standard footer |
| FOOT-02 | Social links | Standard footer |

## Standard Stack

### Components (shadcn/ui)
| Component | Purpose | Why |
|-----------|---------|-----|
| Button | CTA, links | Accessible, customizable |
| Card | Project cards, experience items | Clean container |
| Badge | Skill tags | Visual categorization |
| Separator | Section dividers | Visual hierarchy |

### Supporting
| Library | Purpose | When to Use |
|---------|---------|-------------|
| Lucide React | Icons | Email, GitHub, LinkedIn, external link icons |
| Framer Motion | Animations | Optional scroll animations |

## Architecture Patterns

### Single Page Structure
```
src/app/page.tsx
├── <Hero id="home" />
├── <About id="about" />
├── <Experience id="experience" />
├── <Projects id="projects" />
├── <Skills id="skills" />
├── <Contact id="contact" />
└── <Footer />
```

### Section Pattern
```tsx
// Each section as separate component
// src/components/sections/Hero.tsx
export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center">
      {/* Hero content */}
    </section>
  );
}
```

### Smooth Scroll
```tsx
// In components or globals.css
html {
  scroll-behavior: smooth;
}
```

### Project Card Pattern
```tsx
// Source: Research - standard project card
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

<Card>
  <CardHeader>
    <CardTitle>Project Name</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>
    {/* Tech badges */}
    <div className="flex gap-2">
      <Badge>React</Badge>
      <Badge>Node.js</Badge>
    </div>
  </CardContent>
  <CardFooter>
    <a href={github}><GitHubIcon /></a>
    <a href={live}><ExternalLinkIcon /></a>
  </CardFooter>
</Card>
```

### Skills Badge Grid
```tsx
// Source: Research - categorized skills
<div className="grid grid-cols-3 gap-4">
  <div>
    <h3>Frontend</h3>
    <div className="flex flex-wrap gap-2">
      <Badge>React</Badge>
      <Badge>Next.js</Badge>
    </div>
  </div>
  {/* Backend, Tools */}
</div>
```

## Implementation Plan

### Step 1: Create Section Components
Create each section in `src/components/sections/`:
- Hero.tsx
- About.tsx
- Experience.tsx
- Projects.tsx
- Skills.tsx
- Contact.tsx
- Footer.tsx

### Step 2: Install shadcn/ui Components
```bash
npx shadcn-ui@latest init
npx shadcn-ui@latest add button card badge separator
```

### Step 3: Add Lucide Icons
```bash
npm install lucide-react
```

### Step 4: Update Page
Import and render all sections in `src/app/page.tsx`

### Step 5: Add Smooth Scroll
Enable in CSS or use anchor links with smooth behavior

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Icons | Custom SVG | Lucide React | Consistent |
| Cards | Custom divs | shadcn/ui Card | Accessible, styled |
| Buttons | Custom buttons | shadcn/ui Button | Consistent |
| Badges | Custom spans | shadcn/ui Badge | Consistent |

## Common Pitfalls

### Pitfall 1: Too Many Projects
**What goes wrong:** Page becomes too long
**How to avoid:** Limit to 3-5 best projects, RoomMate featured

### Pitfall 2: Missing Mobile Responsiveness
**What goes wrong:** Sections look broken on mobile
**How to avoid:** Use Tailwind responsive classes (md:, lg:)

### Pitfall 3: No Clear CTA
**What goes wrong:** Visitors don't know what to do next
**How to avoid:** Hero CTA scrolls to projects, contact has clear links

### Pitfall 4: Skills Too Generic
**What goes wrong:** "I know JavaScript" doesn't stand out
**How to avoid:** List specific technologies, group by category

## State of the Art

| Old Approach | Current Approach | When Changed |
|--------------|-------------------|--------------|
| Custom CSS components | shadcn/ui + Tailwind | 2023+ |
| jQuery animations | CSS transitions / Framer Motion | 2020+ |
| Single column layout | Responsive grid | 2015+ |

## Sources

### Primary (HIGH confidence)
- [WebPortfolios.dev: Developer Portfolio Structure](https://www.webportfolios.dev/guides/web-developer-portfolio-structure)
- [Wix: What to include in a portfolio](https://www.wix.com/blog/what-should-a-portfolio-website-include)
- [Fueler: Must-Have Sections 2025](https://fueler.io/blog/must-have-sections-for-portfolio-website)

### Secondary (MEDIUM confidence)
- [Invoxico: Personal Portfolio Guide 2024](https://www.invoxico.com/guide-to-building-your-personal-portfolio-website/)
- [WeAreDevelopers: Portfolio Examples](https://www.wearedevelopers.com/en/magazine/web-developer-portfolio-examples)

## Validation Architecture

> Nyquist validation not enabled in config - skipping test framework setup

## Metadata

**Confidence breakdown:**
- Standard sections: HIGH - Industry standard
- Component usage: HIGH - shadcn/ui well-documented
- Patterns: HIGH - Verified across multiple sources

**Research date:** 2026-03-02
**Valid until:** 30 days (stable patterns)
