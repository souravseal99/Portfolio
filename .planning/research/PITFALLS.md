# Domain Pitfalls

**Domain:** Portfolio Website
**Researched:** 2026-03-02

## Critical Pitfalls

Mistakes that cause rewrites or major issues.

### Pitfall 1: Over-Engineering the Stack
**What goes wrong:** Adding CMS, authentication, databases, complex state management
**Why it happens:** "What if I need it later?" thinking
**Consequences:** Bloated site, longer load times, more maintenance
**Prevention:** Start simple, add complexity only when needed
**Detection:** If you're adding a database, stop and reconsider

### Pitfall 2: Content Last
**What goes wrong:** Spending months on design/animations, then scrambling for content
**Why it happens:** Design feels more exciting than writing
**Consequences:** Rushed, poor quality content
**Prevention:** Write content first, then build around it

### Pitfall 3: Not Mobile-First
**What goes wrong:** Desktop looks great, mobile is broken
**Why it happens:** Testing only on desktop
**Prevention:** Use responsive Tailwind classes, test on mobile early

## Moderate Pitfalls

### Pitfall 1: Large Image Files
**What goes wrong:** Unoptimized images slow down the site
**Prevention:** Use WebP format, lazy loading, appropriate sizes
**Detection:** Lighthouse performance score < 90

### Pitfall 2: Too Many Fonts
**What goes wrong:** Multiple font families = slower load, visual clutter
**Prevention:** Use 2 fonts max (heading + body), use system fonts as fallback

### Pitfall 3: Broken Links
**What goes wrong:** Dead links to projects, GitHub, social media
**Prevention:**定期 check all links, use descriptive link text

## Minor Pitfalls

### Pitfall 1: Generic Copy
**What goes wrong:** "I'm a passionate developer who loves to code"
**Prevention:** Be specific: "3 years building React apps at CloudKaptan"

### Pitfall 2: No Clear CTA
**What goes wrong:** Visitor doesn't know what to do next
**Prevention:** Clear "Contact Me" button, easy-to-find email

### Pitfall 3: Outdated Information
**What goes wrong:** Old projects, outdated skills
**Prevention:** Review and update quarterly

## Phase-Specific Warnings

| Phase Topic | Likely Pitfall | Mitigation |
|-------------|---------------|------------|
| Design | Over-customizing Tailwind | Stick to design system |
| Content | Deferring content creation | Content first, then code |
| Deployment | Not testing production build | Preview before deploy |
| Launch | Not testing on multiple devices | BrowserStack or real devices |

## Sources

- Portfolio review posts from web dev community
- Lighthouse best practices
- Web performance guidelines
