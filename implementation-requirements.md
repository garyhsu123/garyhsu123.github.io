# Personal Website V1 Implementation Requirements

Date: 2026-09-02

## Purpose

This document captures the technical implementation constraints and architecture assumptions for v1 of the personal website. It is separate from `design-requirements.md`, which should stay focused on UI and UX concepts.

## Product Boundary

V1 is a static, blog-first personal website for GitHub Pages.

Primary goal:

- Get visitors to read the latest article

Secondary goal:

- Give readers a compact profile of who I am, including experience, selected projects, education, and skills

## Hosting And Deployment

- Host on GitHub Pages
- Keep deployment compatible with either:
  - `username.github.io`
  - `username.github.io/repository-name`
- Prefer automated deployment via GitHub Actions
- No server-side runtime
- No database
- No authentication

## Recommended Stack

Preferred default:

- Astro

Why this is the current preferred choice:

- Static-first
- Strong Markdown support
- Good fit for blog content plus a few profile-style pages
- Flexible enough to grow later without adding unnecessary complexity now

## Content Authoring Model

- Content should be file-based
- Articles should be authored in Markdown
- Frontmatter should stay minimal in v1
- No CMS or admin UI in v1

### Blog post fields

- `title`
- `publishDate`
- `summary`

### Project fields

- `title`
- `context`
- `links`
- `image` optional

## Site Map

Top-level pages for v1:

- `/`
- `/about`
- `/blog`
- `/blog/[slug]`

No top-level `/projects` page in v1.

Projects should live inside the `About` page.

## Page Behavior Requirements

### Home

- Must surface the latest article prominently
- Must include a short about section below the latest article
- Must provide a path to the full blog archive
- Must include external social/profile links in the footer

### About

- Single page with section anchors
- Section order:
  1. Intro
  2. Experience
  3. Curated projects
  4. Education
  5. Skills
  6. Social links

### Blog Index

- Chronological article list
- No search in v1
- No tag filtering in v1
- No categories in v1

### Blog Article

- Reading-first layout
- Must support code blocks well
- May include a table of contents for longer posts
- Should include light author context and external profile links

## Navigation Requirements

Global nav should stay minimal:

- Home
- About
- Blog

The `About` page may include local anchor navigation for its own sections.

## Styling And UX Constraints

- Light theme only in v1
- Strong reading typography is required
- Layout must remain clean and current, not visually obsolete
- Spacing and alignment should feel deliberate
- Mobile responsiveness is required from the start
- Code blocks must remain readable on small screens

## Accessibility Baseline

- Strong color contrast
- Visible focus states
- Readable font sizing across breakpoints
- Mobile-friendly navigation
- Semantic page structure suitable for text-heavy content

## Explicit Non-Goals For V1

- Separate project detail pages
- Search
- Tags
- Categories
- Comments
- Newsletter signup
- Contact form
- Dark mode
- CMS
- Advanced motion
- Analytics integration unless trivially simple and non-invasive

## Future-Friendly Constraints

The implementation should not build these features now, but should avoid making them hard to add later:

- Site search
- Richer blog metadata
- Tag or category pages
- Custom domain
- Expanded project archive

This means:

- Keep routes predictable
- Keep content fields simple and extensible
- Avoid tightly coupling layout to only one post or one project format

## Tooling Context

Project-scoped Codex configuration may include MCP servers that support implementation work.

Current project MCP config:

- `astro-docs` for Astro documentation lookup through MCP

This tooling supports development accuracy, but does not affect the site output itself.

## Implementation Success Criteria

V1 implementation is successful if:

- The site deploys cleanly to GitHub Pages
- The homepage clearly leads with the latest article
- The About page remains compact and scannable
- The Blog index is simple and easy to browse
- Blog article pages read well for text-heavy technical content with code blocks
- The project scope stays intentionally small enough to ship quickly
