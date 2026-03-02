# Architecture Patterns

**Domain:** Portfolio Website
**Researched:** 2026-03-02

## Recommended Architecture

Single-page application with section-based navigation. Static Site Generation (SSG) for optimal performance.

```
┌─────────────────────────────────────┐
│           Portfolio Site             │
├─────────────────────────────────────┤
│  Header (Navigation)                 │
├─────────────────────────────────────┤
│  Hero Section                       │
│  - Name, Title, Tagline            │
│  - CTA Button                       │
├─────────────────────────────────────┤
│  About Section                      │
│  - Bio, Photo                      │
├─────────────────────────────────────┤
│  Experience Section                 │
│  - Timeline of work history         │
├─────────────────────────────────────┤
│  Projects Section                   │
│  - Project cards with links         │
├─────────────────────────────────────┤
│  Skills Section                     │
│  - Tech stack visualization        │
├─────────────────────────────────────┤
│  Contact Section                    │
│  - Social links, Email             │
├─────────────────────────────────────┤
│  Footer                             │
└─────────────────────────────────────┘
```

### Component Boundaries

| Component | Responsibility | Communicates With |
|-----------|---------------|-------------------|
| Layout | Page structure, meta tags, fonts | All sections |
| Header | Navigation, scroll handling | - |
| Hero | First impression, CTA | - |
| About | Personal info display | - |
| Experience | Work history display | - |
| Projects | Project showcase | ProjectCard |
| Skills | Tech stack display | SkillTag |
| Contact | Contact info, links | - |

### Data Flow

1. **Content**: Hardcoded in components or JSON file
2. **Styling**: TailwindCSS utility classes
3. **Navigation**: Scroll-based section navigation
4. **Deployment**: Git push → Vercel auto-deploy

## Patterns to Follow

### Pattern 1: Static Site Generation
**What:** Pre-render all pages at build time
**When:** Content doesn't change frequently
**Example:**
```typescript
// Next.js page.tsx (default behavior)
export default function Page() {
  return <div>My portfolio</div>
}
```

### Pattern 2: Component-Based Sections
**What:** Each section is a separate component
**When:** Any multi-section page
**Example:**
```typescript
export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </main>
  )
}
```

### Pattern 3: Responsive Tailwind Classes
**What:** Mobile-first responsive design
**When:** All styling
**Example:**
```tsx
<div className="container mx-auto px-4 md:px-8 lg:px-16">
```

## Anti-Patterns to Avoid

### Anti-Pattern 1: Over-Engineering
**What:** Adding CMS, authentication, backend
**Why bad:** Unnecessary complexity, maintenance burden
**Instead:** Static content, edit in code

### Anti-Pattern 2: Heavy Animations
**What:** Large animation libraries, complex transitions
**Why bad:** Slow loading, distracts from content
**Instead:** Subtle CSS transitions, Framer Motion for essentials

### Anti-Pattern 3: Inline Styles
**What:** Using style prop instead of Tailwind
**Why bad:** Inconsistent, harder to maintain
**Instead:** TailwindCSS utility classes

## Scalability Considerations

| Concern | At 1 page | At 5 pages | At 20 pages |
|---------|-----------|------------|-------------|
| Content | Hardcoded | JSON data | Separate MDX files |
| Images | Local | Local + CDN | CDN only |
| Build time | < 30s | < 1min | Consider caching |

## Sources

- Next.js documentation
- TailwindCSS best practices
- Vercel deployment guides
