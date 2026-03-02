# Technology Stack

**Project:** Portfolio Website
**Researched:** 2026-03-02
**Confidence:** HIGH

## Recommended Stack

### Core Framework
| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| Next.js | 14.x | React framework with SSG | Best for portfolios: fast, SEO-friendly, easy deploy |
| React | 18.x | UI library | Familiar, large ecosystem |
| TailwindCSS | 3.x | Styling | Rapid development, consistent design |

### Deployment (Free Tier)
| Service | Tier | Why |
|---------|------|-----|
| Vercel | Free | Best Next.js integration, generous free tier (100GB bandwidth), automatic SSL |
| Netlify | Free | Alternative, good for static sites |
| GitHub Pages | Free | Fully free, but less features |

### Supporting Tools
| Tool | Purpose | When to Use |
|-----|---------|-------------|
| Vercel Analytics | Traffic tracking | Free, privacy-friendly |
| Google Fonts | Typography | Free, large selection |
| Lucide React | Icons | Free, clean icons |

## Installation

```bash
# Create Next.js app with Tailwind
npx create-next-app@latest portfolio --typescript --tailwind --eslint

# Install additional dependencies
npm install lucide-react framer-motion
```

## Alternatives Considered

| Category | Recommended | Alternative | Why Not |
|----------|-------------|-------------|---------|
| Framework | Next.js | Plain React | SSR/SSG important for SEO |
| Styling | TailwindCSS | CSS Modules | Faster development |
| Hosting | Vercel | GitHub Pages | Better DX, more features |

## Sources

- [Next.js Documentation](https://nextjs.org/docs)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [Vercel Pricing](https://vercel.com/pricing)
