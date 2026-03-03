# Phase 4: Polish & Deploy - Research

**Researched:** 2026-03-03
**Domain:** Next.js 16 performance optimization, SEO metadata, Vercel deployment
**Confidence:** HIGH

## Summary

Phase 4 focuses on performance optimization, SEO, and deployment. The research confirms Next.js 16 has built-in optimization features that make this straightforward: automatic image optimization via `next/image`, Metadata API for SEO/Open Graph, and zero-config Vercel deployment with GitHub integration. With static generation by default in App Router, pages will load well under 3 seconds.

**Primary recommendation:** Use Next.js 16 built-in features + Vercel for seamless deployment.

## Phase Requirements

| ID | Description | Research Support |
|----|-------------|-----------------|
| PERF-01 | Page loads < 3 seconds | Next.js automatic optimization, static generation |
| PERF-02 | Images optimized (WebP, lazy loading) | next/image component with automatic format conversion |
| SEO-01 | Meta title + description | Metadata API |
| SEO-02 | Open Graph tags | Metadata API |

## Standard Stack

### Core
| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| Next.js | 16.1.6 | Framework | Built-in optimization, Metadata API |
| Vercel | Platform | Hosting | Native Next.js support, auto SSL, free tier |

### Optimization (Built-in)
| Feature | Purpose | How |
|---------|---------|-----|
| next/image | Image optimization | Automatic WebP/AVIF, lazy loading |
| next/font | Font optimization | Self-hosted, zero layout shift |
| Static generation | Fast initial load | Default in App Router |

### SEO (Built-in)
| Feature | Purpose | How |
|---------|---------|-----|
| Metadata API | SEO meta tags | Export metadata object in layout.tsx |
| Open Graph | Social sharing | metadata.openGraph |

## Architecture Patterns

### Metadata API Pattern
```tsx
// src/app/layout.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sourav Seal - Full-Stack Developer',
  description: 'Full-Stack Developer at CloudKaptan with 3+ years experience building scalable web applications.',
  openGraph: {
    title: 'Sourav Seal - Full-Stack Developer',
    description: 'Full-Stack Developer at CloudKaptan',
    url: 'https://your-domain.vercel.app',
    siteName: 'Sourav Seal Portfolio',
    locale: 'en_US',
    type: 'website',
  },
};
```
**Source:** Next.js Documentation - generate-metadata

### Image Optimization Pattern
```tsx
// Instead of <img> use:
import Image from 'next/image';

<Image 
  src="/profile.jpg"
  alt="Sourav Seal"
  width={200}
  height={200}
  sizes="(max-width: 768px) 100vw, 200px"
/>
// Automatically:
// - Serves WebP/AVIF format
// - Lazy loads by default
// - Prevents layout shift
// - Responsive sizes based on viewport
```
**Source:** Next.js Documentation - image component

### Vercel Deployment
```bash
# Option 1: CLI
npm i -g vercel
vercel

# Option 2: GitHub Integration (recommended)
# 1. Push code to GitHub
# 2. Import project in Vercel dashboard
# 3. Automatic deployments on push
# 4. Free SSL, global CDN
```
**Source:** Vercel Documentation

### Lighthouse Verification
```bash
# Run production build locally
npm run build
npm run start

# Use Chrome DevTools > Lighthouse
# Target: Performance > 90, Best Practices > 90, SEO > 90
```

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Image optimization | Custom WebP conversion | next/image | Built-in, automatic, edge-cached |
| SEO meta tags | Custom <head> management | Metadata API | Type-safe, server-side rendered |
| Font hosting | Google Fonts CDN | next/font | Zero layout shift, self-hosted |
| Deployment scripts | Custom CI/CD | Vercel | Zero config, auto SSL |

## Common Pitfalls

### Pitfall 1: Missing Metadata
**What goes wrong:** No SEO, social sharing shows generic/fallback content
**How to avoid:** Export metadata in src/app/layout.tsx

### Pitfall 2: Using <img> Instead of <Image>
**What goes wrong:** No automatic optimization, slower loads, layout shift
**How to avoid:** Use next/image for all images in src/components and src/app

### Pitfall 3: Large Images Without sizes Prop
**What goes wrong:** Lighthouse warns about properly sized images
**How to avoid:** Add sizes prop for responsive images
```tsx
<Image 
  src="/hero.jpg"
  alt="Hero"
  fill
  sizes="(max-width: 768px) 100vw, 50vw"
/>
```

### Pitfall 4: Not Testing Production Build
**What goes wrong:** Dev vs prod differences, missing optimization
**How to avoid:** Run `npm run build && npm run start` locally before deploy

### Pitfall 5: Missing OG Image
**What goes wrong:** Social sharing shows no preview image
**How to avoid:** Add openGraph.images array with absolute URLs

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| Custom image optimization | next/image | Next.js 10+ (2019) | Automatic format conversion |
| Head.js meta tags | Metadata API | Next.js 13+ (2022) | Type-safe, SSR |
| Manual deployment | Vercel auto-deploy | Always | Zero config |
| Google Fonts CDN | next/font | Next.js 13+ (2022) | Zero CLS |

**Deprecated/outdated:**
- `<head>` element - Use Metadata API instead
- `next/legacy/image` - Use new `next/image` (App Router)
- `getStaticProps` - Use Server Components (default)

## Open Questions

1. **Profile Image Location**
   - What's known: Need to add profile.jpg to public folder
   - What's unclear: Exact dimensions needed
   - Recommendation: Use 400x400px minimum, next/image will optimize

2. **Custom Domain**
   - What's known: Vercel supports custom domains
   - What's unclear: Whether user wants custom domain
   - Recommendation: Start with vercel.app subdomain, add custom domain later

## Sources

### Primary (HIGH confidence)
- [Next.js Metadata Documentation](https://nextjs.org/docs/app/api-reference/functions/generate-metadata) - Metadata API reference
- [Next.js Image Component](https://nextjs.org/docs/app/api-reference/components/image) - Image optimization
- [Vercel Deployment Documentation](https://vercel.com/docs/deployments/overview) - Deployment guide
- Context7: /vercel/next.js - Verified Metadata API, next/image features

### Secondary (MEDIUM confidence)
- [SlashDev: Next.js SEO & Performance Checklist](https://slashdev.io/blog/nextjs-seo-performance-on-vercel-the-checklist)

## Validation Architecture

Skip - nyquist_validation is false in config.json

## Metadata

**Confidence breakdown:**
- Deployment: HIGH - Vercel is standard, verified with Context7
- Performance: HIGH - Next.js built-in verified with official docs
- SEO: HIGH - Metadata API well-documented, verified with Context7

**Research date:** 2026-03-03
**Valid until:** 30 days (stable stack - Next.js 16, Vercel)
