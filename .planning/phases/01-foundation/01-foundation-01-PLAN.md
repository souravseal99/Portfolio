---
phase: 01-foundation
plan: "01"
type: execute
wave: 1
depends_on: []
files_modified: []
autonomous: true
requirements:
  - STRU-01
  - STRU-02

must_haves:
  truths:
    - "User can run npm run dev and see a blank Next.js page at localhost:3000"
    - "TailwindCSS is properly configured and compiling utility classes"
  artifacts:
    - path: "src/app/layout.tsx"
      provides: "Root layout with App Router"
    - path: "src/app/globals.css"
      provides: "Global styles with Tailwind directives"
    - path: "tailwind.config.ts"
      provides: "TailwindCSS configuration"
  key_links:
    - from: "tailwind.config.ts"
      to: "app/globals.css"
      via: "@tailwind directives"
      pattern: "@tailwind base; @tailwind components; @tailwind utilities;"
---

<objective>
Initialize Next.js 14 project with App Router and verify TailwindCSS is properly configured
</objective>

<execution_context>
@/Users/souravseal/.config/opencode/get-shit-done/workflows/execute-plan.md
</execution_context>

<context>
@.planning/phases/01-foundation/CONTEXT.md
@.planning/phases/01-foundation/01-RESEARCH.md
</context>

<tasks>

<task type="auto">
  <name>Initialize Next.js project with App Router and TailwindCSS</name>
  <files>package.json, next.config.*, tsconfig.json, tailwind.config.ts, postcss.config.mjs, app/layout.tsx, app/page.tsx, app/globals.css</files>
  <action>
Run the following command to create the Next.js project:

```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --use-npm --no-git
```

This creates:
- App Router structure (app/ directory)
- TypeScript configuration
- TailwindCSS setup
- ESLint configuration

Per user decision: Use App Router (not Pages Router), default Tailwind config.
  </action>
  <verify>
npm run build completes without errors
cat tailwind.config.ts shows content includes "./app/**/*.{js,ts,jsx,tsx,mdx}"
cat app/globals.css shows @tailwind directives
  </verify>
  <done>
Next.js project runs at localhost:3000 with npm run dev
TailwindCSS utility classes are available and compiling
  </done>
</task>

</tasks>

<verification>
- Run `npm run dev` - server starts on port 3000
- Visit http://localhost:3000 - blank Next.js page displays
- View page source - no errors in console
</verification>

<success_criteria>
- [ ] `npm run dev` starts successfully
- [ ] TailwindCSS utilities work (test with class="bg-blue-500")
- [ ] Project structure uses App Router (app/layout.tsx exists)
</success_criteria>

<output>
After completion, create `.planning/phases/01-foundation/01-foundation-01-SUMMARY.md`
</output>
