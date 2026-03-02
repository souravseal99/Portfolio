# Phase 1: Foundation - Research

**Researched:** 2026-03-02
**Domain:** Next.js 14 + TailwindCSS setup, responsive navigation
**Confidence:** HIGH

## Summary

Phase 1 requires setting up a Next.js 14 project with App Router, configuring TailwindCSS, and building a responsive fixed header with mobile hamburger menu. The research confirms the recommended approach using Next.js 14 App Router with TailwindCSS 3.x, leveraging client components for interactive navigation elements.

**Primary recommendation:** Use Next.js 14 with App Router, TailwindCSS default config, and a client component for the header to handle mobile menu state.

## User Constraints (from CONTEXT.md)

### Locked Decisions
- Router: **App Router** (file-based routing)
- Tailwind: **Default configuration**
- Header: Logo left, nav right, blur effect + scroll shadow
- Mobile menu: Slide from left, dark bg, white text, slide animation

### Claude's Discretion
None - all decisions captured above

### Deferred Ideas (OUT OF SCOPE)
None

## Phase Requirements

| ID | Description | Research Support |
|----|-------------|-----------------|
| STRU-01 | Project structure established | Next.js 14 App Router structure documented below |
| STRU-02 | TailwindCSS configured | Default config with App Router paths |
| STRU-03 | Fixed header with navigation | Client component with blur + shadow on scroll |
| STRU-04 | Mobile hamburger menu | Slide-in menu with useState + CSS transitions |

## Standard Stack

### Core
| Library | Version | Purpose | Why Standard |
|---------|---------|---------|-------------|
| Next.js | 14.x | React framework with App Router | File-based routing, SSR/SSG |
| React | 18.x | UI library | Next.js dependency |
| TailwindCSS | 3.x | Styling | Utility-first, integrated with Next.js |

### Supporting
| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| TypeScript | 5.x | Type safety | Recommended for Next.js |
| Lucide React | Latest | Icons | Hamburger/close icons |

## Architecture Patterns

### Project Structure (App Router)
```
portfolio/
├── app/
│   ├── layout.tsx      # Root layout with header
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/
│   ├── Header.tsx      # Fixed header (client component)
│   └── MobileMenu.tsx # Mobile navigation
├── public/             # Static assets
├── tailwind.config.ts # Tailwind config
└── package.json
```

### Pattern 1: Fixed Header with Blur Effect
**What:** Header that stays fixed at top, has backdrop blur, and adds shadow on scroll
**When to use:** Always - provides modern look and consistent navigation
**Example:**
```tsx
// Source: Research - TailwindCSS backdrop utilities
"use client";
import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-white/80 shadow-md" : "bg-white/60"
    } backdrop-blur-md`}>
      {/* Logo left, nav right */}
    </header>
  );
}
```

### Pattern 2: Mobile Menu Slide from Left
**What:** Hamburger button opens menu sliding in from left
**When to Use:** Mobile view (< 768px)
**Example:**
```tsx
// Source: Research - responsive navigation patterns
"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger button */}
      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
        {isOpen ? <X /> : <Menu />}
      </button>

      {/* Slide-in menu */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-gray-900 text-white transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:hidden`}>
        {/* Nav items */}
      </div>
    </>
  );
}
```

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Icons | Custom SVG icons | Lucide React | Consistent, accessible, easy |
| Mobile menu state | useState from scratch | Simple useState | Enough for 2-state menu |

## Common Pitfalls

### Pitfall 1: Using Server Component for Interactive Header
**What goes wrong:** Mobile menu won't work, scroll detection fails
**Why it happens:** Server components can't use useState, useEffect
**How to avoid:** Mark Header as "use client"
**Warning signs:** Menu doesn't respond to clicks, scroll effects don't work

### Pitfall 2: Tailwind Not Scanning App Directory
**What goes wrong:** Styles not applied
**Why it happens:** Default config doesn't include app/ in content
**How to avoid:** Ensure content includes "./app/**/*.{js,ts,jsx,tsx,mdx}"

### Pitfall 3: Hydration Mismatch
**What goes wrong:** Console errors about content mismatch
**Why it happens:** Server renders different initial state than client
**How to avoid:** Use useEffect for client-only state, or suppress in development

## Code Examples

### Setup Command
```bash
# Source: Official Next.js docs
npx create-next-app@latest portfolio --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
```

### Header Component Structure
```tsx
// Source: Research - recommended pattern
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  // ... scroll detection + mobile menu state
}
```

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| Pages Router | App Router | Next.js 13+ (2022) | File-based routing, server components |
| CSS Modules | TailwindCSS utility classes | Growing since 2020 | Faster development |

## Sources

### Primary (HIGH confidence)
- [Next.js Documentation](https://nextjs.org/docs) - App Router setup
- [TailwindCSS Documentation](https://tailwindcss.com/docs) - Backdrop blur, transitions
- [Medium: Responsive Navbar](https://medium.com/@anikdevnath03112000/create-a-responsive-navbar-using-tailwind-css-and-next-js-28cd21f3ef32) - Mobile menu slide pattern

### Secondary (MEDIUM confidence)
- [CodeParrot AI: Next.js 2025 Guide](https://codeparrot.ai/blogs/nextjs-and-tailwind-css-2025-guide-setup-tips-and-best-practices)
- [FutureDevOps: Responsive Navbar](https://futuredevops.dev/blog/how-to-build-a-responsive-navbar-with-nextjs)

## Validation Architecture

> Nyquist validation not enabled in config - skipping test framework setup

## Metadata

**Confidence breakdown:**
- Standard Stack: HIGH - Official Next.js/Tailwind docs
- Architecture: HIGH - Verified patterns from multiple sources
- Pitfalls: MEDIUM - Common React patterns, may vary

**Research date:** 2026-03-02
**Valid until:** 30 days (stable stack)
