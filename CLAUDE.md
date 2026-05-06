# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Preferences

- Think before acting. Read existing files before writing code.
- Be concise in output but thorough in reasoning.
- Prefer editing over rewriting whole files.
- Do not re-read files you have already read unless the file may have changed.
- Test your code before declaring done.
- No sycophantic openers or closing fluff.
- Keep solutions simple and direct.
- Never run `npm run build` at the end of a task. Do not build unless explicitly asked.

## Commands

```bash
npm run dev       # Start dev server (exposed on local network via --host)
npm run build     # Build for production (also copies index.html → 404.html for GH Pages SPA routing)
npm run lint      # Run ESLint
npm run preview   # Preview the production build locally
npm run deploy    # Deploy dist/ to GitHub Pages via gh-pages
```

## Architecture

This is a **React + Vite** personal portfolio/case-study site deployed to GitHub Pages at `javierquiroga.com`.

### Routing

Client-side routing via `react-router-dom`. All routes are defined in [src/App.jsx](src/App.jsx):
- `/` → Home page
- `/design/<slug>` → UX design case studies (Lesgo, Zenlife, Grinpath)
- `/end-to-end/<slug>` → Full end-to-end project pages (Matthewctfuller)
- `*` → 404 page

The build copies `index.html` to `404.html` so GitHub Pages falls back to the SPA on unknown paths.

### Layout system

- **`DefaultLayout`** — wraps every page with `<Navbar>`, `<main>`, and `<Footer>`. Accepts `pageType` (used as a CSS class on `<main>`), `meta`, and `og` props and calls `useMetaTags` to set `<title>` and Open Graph meta tags.
- **`DefaultSection`** — thin wrapper for consistent section padding/width.
- **`CaseStudyLayout`** — built on top of `DefaultLayout`. Renders a structured case study from a plain data object (header + sections array). Also mounts the `<ScrollProgressBar>` component.

### Case study data pattern

Each case study page (e.g. [src/pages/design/Lesgo.jsx](src/pages/design/Lesgo.jsx)) imports its content from a co-located `*Data.js` file and passes it straight to `<CaseStudyLayout>`. The data file exports:
- `meta` — `{ title, description }` for the `<title>` tag and description meta
- `og` — Open Graph object with title, description, image URL, url, type
- `caseStudy` — `{ header, sections[] }` object consumed by `CaseStudyLayout`

**Content block types** supported inside `sections[].content` and `header.intro`:
| type | required fields |
|------|----------------|
| `text` | `content: [{ type: 'h2'|'h3'|'h4'|'p', content }]`, optional `heading` |
| `image` | `src`, `alt`, optional `maxHeight` |
| `list` | `items` — strings or `{ title, description }` objects |
| `code` | `code`, `language` |

Inline links inside `text` blocks use the array form: `content: [{ type: 'a', href, content, external? }, { type: 'text', content }]`.

### Utilities

- **`useMetaTags(meta, og)`** — imperatively sets `<title>` and meta tags via `useEffect`. Called inside `DefaultLayout`.
- **`useGoatCounter()`** — analytics hook, called once at the `App` level.
- **`ScrollToTop`** — scroll-restoration component.

### Styling

CSS Modules per component/page (e.g. `Navbar.module.css`). Global styles are in [src/styles/](src/styles/) (`main.css`, `fonts.css`, `modern-normalize.css`). Fonts (IBM Plex Sans, Syne) are self-hosted in `public/fonts/` and declared in `fonts.css`.

### Adding a new case study

1. Create `src/pages/<category>/<Name>.jsx` and `<name>Data.js` following the existing pattern.
2. Import images from `src/assets/img/case-studies/<name>/`.
3. Export `meta`, `og`, and the case study data object from the data file.
4. Render `<CaseStudyLayout caseStudy={...} themeClass={styles.theme} meta={meta} og={og} />` in the page component.
5. Add the route to `src/App.jsx`.
6. Add an entry to the relevant array in [src/pages/Home/homeData.js](src/pages/Home/homeData.js) so it appears on the homepage.
