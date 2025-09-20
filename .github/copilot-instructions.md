# Copilot Instructions for AI Coding Agents

## Project Overview
This is a Next.js 15+ fullstack project with **mixed routing** — both `/app` directory (new) and `/pages` directory (legacy) are actively used. The codebase is transitioning to TypeScript with many legacy JavaScript files still present. Uses React 19, Tailwind CSS 4+, and custom design system components.

## Architecture & Key Directories
- `app/` — Modern Next.js app directory routes (e.g., `/about`, `/radio`, `/shop`, `/xxx`)
- `pages/` — Legacy Next.js pages directory routes (e.g., `/account`, `/contact`, `/affiliate`)
- `components/` — Shared React components (mix of `.js` and `.tsx` files)
- `design-system/src/` — Modular design system organized by domain:
  - `actions/` (buttons), `content/` (cards, badges), `typography/` (headings, paragraphs)
  - `inputs/`, `layouts/`, `navigation/`, `philip-gizzie-theme/`
- `design-archive/` — Legacy design patterns and archived components
- `lib/` — API clients and utilities (`shopifyClient.js`, `supabaseClient.js`)
- `assets/` & `styles/` — CSS files, Tailwind config
- `.next/` — Build artifacts (excluded from git)

## Developer Workflows
- **Install:** `npm install --legacy-peer-deps` (React 19 compatibility)
- **Dev:** `npm run dev` (starts local development server)
- **Build:** `npm run build` (production build with static generation)
- **No test runner configured** — tests exist in `design-archive/` but no npm scripts

## Routing Strategy
- **New features:** Use `app/` directory for new routes (preferred)
- **Legacy routes:** Keep existing `pages/` routes until migration
- **Mixed routing is intentional** — both systems coexist during transition
- **No API routes currently** — no `/api` directory exists in either system

## Technology Stack
- **Next.js 15.5.3** with React 19.1.1
- **TypeScript 5.9.2** (preferred for new code)
- **Tailwind CSS 4.1.13** with custom design tokens
- **Design System:** Custom components from `@hotmess/design-system`
- **External APIs:** Shopify (e-commerce), Supabase (database/auth)
- **Styling:** CSS custom properties, SCSS support, Tailwind utilities

## Patterns & Conventions
- **File-based Routing:** 
  - App dir: `app/route/page.tsx` 
  - Pages dir: `pages/route.js`
- **Components:** Import from `@hotmess/design-system` for UI primitives
- **Styling:** Use Tailwind classes + CSS custom properties (e.g., `var(--font-anton)`)
- **TypeScript:** New files should use `.tsx`, legacy `.js` files may remain
- **Design System Imports:** `import { Heading, Paragraph, Button } from '@hotmess/design-system'`

## Design System Usage
```tsx
import { Heading, Paragraph, Button, Badge, SectionLayout } from '@hotmess/design-system';

// Headings with semantic + visual levels
<Heading level={1} className="text-4xl" style={{fontFamily:'var(--font-anton)'}}>Title</Heading>

// Buttons with appearance variants
<Button appearance="primary">Click me</Button>

// Layout containers
<SectionLayout title="Section" caption="Description">Content</SectionLayout>
```

## Integration Points
- **Shopify:** `lib/shopifyClient.js` — GraphQL API for products/cart
- **Supabase:** `lib/supabaseClient.js` — Auth and database
- **Brand Elements:** Anton font, custom color tokens, men-only/18+ gating
- **Special Features:** QR codes, radio integration, affiliate system

## Key Routes (Current State)
**App Directory:**
- `/` (homepage), `/about`, `/radio`, `/shop`, `/records`, `/xxx`, `/payout`, `/care`, `/community`, `/debug`

**Pages Directory:** 
- `/account`, `/contact`, `/affiliate`, `/membership`, `/shows`, `/product/[handle]`

## Development Guidelines
- **Minimal Changes:** Preserve existing functionality when making updates
- **Mixed Routing:** Don't migrate pages unless specifically requested
- **Design System:** Use existing components before creating new ones
- **Dependencies:** Use `--legacy-peer-deps` for npm operations
- **Build Validation:** Always run `npm run build` to check for TypeScript errors

## Troubleshooting
- **Build Errors:** Check for empty page files (must export default function)
- **Type Errors:** Ensure imports match actual file extensions and exports
- **Routing Conflicts:** Routes can exist in both systems without conflict
- **Dependency Issues:** Use `--legacy-peer-deps` flag for React 19 compatibility

---
**For implementation patterns, review existing pages in both `app/` and `pages/` directories.**
