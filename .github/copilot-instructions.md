# Copilot Instructions for AI Coding Agents

## Project Overview
This is a Next.js 15+ fullstack project using the `/app` directory for routing and React Server Components. Legacy `/pages` routes have been removed in favor of the new app directory structure. The codebase uses TypeScript for most new components, with some legacy JavaScript files still present.

## Architecture & Key Directories
- `app/` — Main Next.js app directory. Each subfolder is a route (e.g., `app/radio/page.tsx`).
- `components/` — Shared React components, mix of `.js` and `.tsx` files.
- `design-system/` & `design/` — Design system and UI primitives, organized by domain (actions, content, overlays, etc.).
- `lib/` — API clients and utility modules (e.g., `shopifyClient.js`, `supabaseClient.js`).
- `assets/` & `styles/` — CSS files, including Tailwind and custom styles.
- `public/` — Static assets (not shown above, but standard for Next.js).

## Developer Workflows
- **Build:** `npm run build` (removes `.next` and rebuilds)
- **Dev:** `npm run dev` (starts local server)
- **Routing:** Use only the `app/` directory for new routes. Do not add files to `pages/`.
- **TypeScript:** Prefer `.tsx` for new components and pages. Legacy `.js` files may exist but should be migrated when touched.
- **Design System:** Use primitives from `design-system/` for new UI. Reference `design/` for legacy patterns.

## Patterns & Conventions
- **File-based Routing:** Each route is a folder in `app/` with a `page.tsx` file. Nested routes use subfolders.
- **Component Organization:** Shared components go in `components/`. Domain-specific UI in `design-system/`.
- **Styling:** Tailwind is primary, with custom CSS in `assets/css/` and `styles/`.
- **API Clients:** Use modules in `lib/` for external integrations (e.g., Shopify, Supabase).
- **No Mixed Routing:** Never duplicate routes in both `pages/` and `app/`.

## Integration Points
- **Shopify:** See `lib/shopifyClient.js` for e-commerce integration.
- **Supabase:** See `lib/supabaseClient.js` for database/auth.
- **Custom Prompts & Chat Modes:** Experimental prompt files may be located in `.github/prompts/` and chat modes in `.github/chatmodes/` (not present by default).

## Example: Adding a New Route
To add `/about`, create `app/about/page.tsx` and use components from `components/` and `design-system/`.

## Troubleshooting
- If build errors mention route conflicts, remove duplicates from `pages/`.
- For type errors, ensure all new code is in TypeScript and imports are correct.

---
For questions about project-specific patterns, review `app/`, `components/`, and `design-system/` for examples.
