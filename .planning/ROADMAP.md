# Portfolio Website Roadmap

**Project:** Sourav Seal Portfolio  
**Created:** 2026-03-02  
**Depth:** Quick (3-5 phases)

## Overview

This roadmap transforms 35 v1 requirements into 3 deliverable phases. Each phase delivers a coherent, verifiable capability.

## Phases

- [x] **Phase 1: Foundation** - Project setup, dependencies, and Tailwind configuration
- [ ] **Phase 2: Content & Design** - All sections with actual content
- [ ] **Phase 3: Polish & Deploy** - Performance optimization, testing, and deployment

---

## Phase Details

### Phase 1: Foundation

**Goal:** A Next.js project with TailwindCSS configured and ready for content development

**Depends on:** Nothing (first phase)

**Requirements:** STRU-01, STRU-02, STRU-03, STRU-04 ✅

**Success Criteria** (what must be TRUE):

1. ✅ User can run `npm run dev` and see a blank Next.js page at localhost:3000
2. ✅ TailwindCSS is properly configured and compiling utility classes
3. ✅ Fixed header with navigation links is visible at the top of the page
4. ✅ Mobile hamburger menu opens/closes navigation on small screens

**Plans:** 2 plans

**Plan list:**
- [x] 01-foundation-01-PLAN.md — Initialize Next.js project with TailwindCSS
- [x] 01-foundation-02-PLAN.md — Fixed header with navigation and mobile hamburger menu

---

### Phase 2: Content & Design

**Goal:** Complete portfolio website with all sections populated with actual content

**Depends on:** Phase 1 (Foundation)

**Requirements:** 
- HERO-01, HERO-02, HERO-03, HERO-04
- ABOT-01, ABOT-02, ABOT-03
- EXPR-01, EXPR-02, EXPR-03, EXPR-04
- PROJ-01, PROJ-02, PROJ-03, PROJ-04, PROJ-05
- SKIL-01, SKIL-02, SKIL-03
- CONT-01, CONT-02, CONT-03, CONT-04, CONT-05
- FOOT-01, FOOT-02

**Success Criteria** (what must be TRUE):

1. Hero section displays name "Sourav Seal", title "Full-Stack Developer", tagline, and CTA button that scrolls to projects
2. About section shows professional bio and CloudKaptan experience background with profile placeholder
3. Experience section displays work history with company, role, duration, and key achievements (CloudKaptan 3+ years)
4. Projects section shows project cards with title, description, live links, GitHub links, and tech stack (RoomMate featured)
5. Skills section displays categorized skills: Frontend (React, Next.js, TypeScript, TailwindCSS, React Native), Backend (Node.js, Express, MongoDB, PostgreSQL), Tools (Git, Docker, Postman, Figma)
6. Contact section displays email, LinkedIn, GitHub, phone (optional), and location (Kolkata, India)
7. Footer shows copyright and social links
8. Smooth scroll navigation works when clicking nav links

**Plans:** 2 plans

**Plan list:**
- [ ] 02-content-design-01-PLAN.md — Install dependencies and create all section components
- [ ] 02-content-design-02-PLAN.md — Integrate sections into page and enable smooth scroll

---

### Phase 3: Polish & Deploy

**Goal:** Optimized, tested, and live portfolio website

**Depends on:** Phase 2 (Content & Design)

**Requirements:** PERF-01, PERF-02, SEO-01, SEO-02

**Success Criteria** (what must be TRUE):

1. Page loads in under 3 seconds on desktop (verified via Lighthouse)
2. Images are optimized (WebP format, lazy loading implemented)
3. Meta title "Sourav Seal - Full-Stack Developer" and description are present
4. Open Graph tags are present for social sharing
5. Site is deployed and accessible at a public URL (Vercel)

**Plans:** TBD

---

## Progress Table

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Foundation | 2/2 | ✅ Complete | 2026-03-02 |
| 2. Content & Design | 0/2 | Not started | - |
| 3. Polish & Deploy | 0/1 | Not started | - |

---

## Coverage Notes

**Total v1 requirements:** 35  
**Mapped to phases:** 35 ✓

| Phase | Requirements | Count |
|-------|--------------|-------|
| 1 - Foundation | STRU-01 to STRU-04 | 4 |
| 2 - Content & Design | HERO, ABOT, EXPR, PROJ, SKIL, CONT, FOOT | 25 |
| 3 - Polish & Deploy | PERF, SEO | 4 |

**Note:** ABOT-02 appears twice in requirements list but maps to single phase requirement.

---

*Roadmap created: 2026-03-02*
