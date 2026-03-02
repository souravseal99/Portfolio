---
phase: 01-foundation
plan: "02"
type: execute
wave: 2
depends_on:
  - "01"
files_modified: []
autonomous: true
requirements:
  - STRU-03
  - STRU-04

must_haves:
  truths:
    - "Fixed header with navigation links is visible at the top of the page"
    - "Mobile hamburger menu opens/closes navigation on small screens"
  artifacts:
    - path: "src/components/Header.tsx"
      provides: "Fixed header with client-side state for scroll and mobile menu"
      contains: "use client"
    - path: "src/app/layout.tsx"
      provides: "Root layout with Header integrated"
      imports: "@/components/Header"
  key_links:
    - from: "src/components/Header.tsx"
      to: "src/app/layout.tsx"
      via: "import and render"
      pattern: "import Header from"
    - from: "Header.tsx"
      to: "mobile menu"
      via: "useState + translate-x"
      pattern: "translate-x-0.*translate-x-full"
---

<objective>
Create fixed header with navigation and mobile hamburger menu
</objective>

<execution_context>
@/Users/souravseal/.config/opencode/get-shit-done/workflows/execute-plan.md
</execution_context>

<context>
@.planning/phases/01-foundation/01-foundation-01-SUMMARY.md
@.planning/phases/01-foundation/CONTEXT.md
@.planning/phases/01-foundation/01-RESEARCH.md
</context>

<tasks>

<task type="auto">
  <name>Create Header component with fixed positioning and blur effect</name>
  <files>src/components/Header.tsx</files>
  <action>
Create src/components/Header.tsx as a client component:

1. Add "use client" at the top (required for useState, useEffect)
2. Import Link from "next/link"
3. Import Menu and X icons from "lucide-react"
4. Define navItems array with links: Home, About, Experience, Projects, Skills, Contact
5. Implement useState for scroll detection (scrolled state)
6. Implement useState for mobile menu open/close (isMenuOpen state)
7. Use useEffect to detect scroll position (> 10px adds shadow)
8. Render header with:
   - Fixed position: fixed top-0 left-0 right-0 z-50
   - Blur background: backdrop-blur-md bg-white/80 (or bg-white/60 when not scrolled)
   - Shadow on scroll: scrolled ? "shadow-md" : ""
   - Logo/site name on left
   - Desktop nav links on right (hidden on mobile: md:flex)
   - Hamburger button (visible on mobile: md:hidden)
9. Add Mobile Menu panel:
   - Slide from left using translate-x transform
   - Dark background: bg-gray-900
   - White text: text-white
   - Transition: transition-transform duration-300
   - Show when isMenuOpen: translate-x-0, hide: -translate-x-full
   - Include close button and nav links

Per user decision: Logo left, nav right, blur effect + shadow on scroll, mobile menu slides from left with dark bg and white text.
  </action>
  <verify>
- Run `npm run dev` and visit localhost:3000
- Header is fixed at top with blur effect
- Scroll down - shadow appears
- Resize to mobile (<768px) - hamburger menu appears
- Click hamburger - menu slides in from left with dark background
- Click close - menu slides out
</verify>
<done>
Fixed header visible at top of page
Scroll shadow appears when scrolling
Mobile hamburger menu opens/closes smoothly
  </done>
</task>

<task type="auto">
  <name>Integrate Header into root layout</name>
  <files>src/app/layout.tsx</files>
  <action>
Import and add the Header component to src/app/layout.tsx:

1. Import Header from "@/components/Header"
2. Add <Header /> inside the <body> tag, before {children}
3. Ensure body has proper min-h-screen class

The layout should wrap all pages with the fixed header.
  </action>
  <verify>
- Run `npm run dev`
- Header appears on all pages at the top
- Content below header is visible (not hidden behind fixed header)
</verify>
<done>
Header integrated into root layout
Header visible on every page
</done>
</task>

</tasks>

<verification>
- Run `npm run dev` - server starts
- Visit http://localhost:3000 - header with navigation visible at top
- Scroll down - shadow appears on header
- Resize to mobile - hamburger menu visible
- Click hamburger - dark slide-in menu appears from left
- Click nav link in mobile menu - menu closes and scrolls to section
</verification>

<success_criteria>
- [ ] Fixed header with logo (left) and nav links (right) is visible
- [ ] Header has blur effect (backdrop-blur-md)
- [ ] Shadow appears when scrolling
- [ ] Mobile hamburger menu visible on small screens
- [ ] Mobile menu slides in from left with dark background
- [ ] Mobile menu has white text and smooth animation
</success_criteria>

<output>
After completion, create `.planning/phases/01-foundation/01-foundation-02-SUMMARY.md`
</output>
