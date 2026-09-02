# Personal Website V1 Design Requirements

Date: 2026-09-02

## Project Summary

Design a static personal website for GitHub Pages. This is a blog-first personal site for general readers. The website should help visitors quickly discover and read my latest article, while also giving them a compact view of who I am, my experience, selected projects, education, and skills.

This is a first-version product. The design should be clean, modern, readable, and intentionally limited in scope.

Technical implementation details, stack assumptions, deployment constraints, and content structure rules are maintained separately in `implementation-requirements.md`. This document should stay focused on UI and UX concepts.

## Primary Goal

The main user action for v1 is:

- Read my latest article

The site should also support a secondary goal:

- Help readers understand who I am and what I build

## Intended Audience

Primary audience:

- General readers interested in tech thoughts, explanations, and practical knowledge

Secondary audience:

- Recruiters
- Hiring managers
- Potential collaborators

## Product Positioning

This site should feel like:

- A credible tech blog
- A personal space with thoughtful writing
- A clean professional profile, without feeling like a corporate resume site

It should not feel like:

- A startup landing page
- A template-heavy portfolio
- A visually noisy personal homepage

## Platform Constraints

- Static website only
- Responsive on mobile, tablet, and desktop
- Realistic to implement as a lightweight static site

## Confirmed V1 Scope

The design concepts should assume the site includes:

- Home page
- About page
- Blog index page
- Blog article page

The design concepts should assume the site does not include:

- Separate project detail pages
- Search UI
- Tags or categories
- Newsletter signup
- Comments
- Contact form
- Dark mode
- Advanced interactive features

## Navigation

Primary navigation for v1 should stay small:

- Home
- About
- Blog

The `About` page itself can contain section anchors internally, but those anchors should not be part of the main global navigation.

## Design Direction

The UI should aim for:

- Excellent readability
- Clean organization
- Comfortable spacing and alignment
- Modern but understated styling
- Strong typography for long-form reading
- Light theme only

Tone should feel:

- Calm
- Clear
- Thoughtful
- Practical

Avoid:

- Obvious template aesthetics
- Overly decorative visual effects
- Dense layouts
- Dark or moody direction
- Heavy motion

## Visual Direction Guidance

Please explore 2 to 3 distinct visual concepts within this overall direction. The concepts should stay inside the same product boundary, but vary in style.

Possible directions:

- Editorial and typography-forward
- Minimal and technical
- Warm and approachable while still clean

In all directions, prioritize:

- Reading comfort
- Strong layout rhythm
- Clear content hierarchy
- Polished but implementable UI

## Home Page Requirements

Purpose:

- Lead with the latest article
- Establish the site as a tech blog first
- Give a small amount of personal context
- Encourage browsing more articles

Required sections:

1. Latest article feature as the top priority
2. Short about section below it
3. Link or preview path to browse more posts
4. Footer with external social/profile links

Homepage should not feel like a generic hero-first marketing page. The latest article should be the visual and informational focal point.

## About Page Requirements

Purpose:

- Present a compact, scannable profile page
- Support the blog without competing with it

This page should be a single page with internal anchor navigation or anchor links for sections.

Required section order:

1. Short intro
2. Experience
3. Curated projects
4. Education
5. Skills
6. Social links

Behavior and content expectations:

- Keep the page compact and easy to scan
- Avoid long narrative biography blocks
- Use clear section separation and anchor-friendly layout

## Projects Section Requirements

Projects live inside the `About` page in v1.

Project section expectations:

- Show a curated set only, not a full archive
- Each project card should include:
  - Project name
  - Short context or explanation
  - External links such as GitHub or demo
- Cards may use:
  - Real image
  - Placeholder visual
  - Text-first treatment with background color or simple surface styling

The design must work even if some projects do not have strong visuals.

## Blog Index Page Requirements

Purpose:

- Help readers browse articles simply
- Keep the experience focused on reading, not filtering

Content shown per post:

- Title
- Publish date
- Short summary

Behavior expectations:

- Chronological list
- No search in v1
- No tags, categories, or filters in v1
- Layout should leave conceptual room for future search, but should not visually overbuild for it now

## Blog Article Page Requirements

Purpose:

- Deliver a strong long-form reading experience

Required content:

- Title
- Publish date
- Article body
- Code blocks as a first-class content type
- Light author context near the end or side
- External social/profile links

Optional behavior:

- Table of contents for longer posts only

UI expectations:

- Comfortable reading width
- Clear heading hierarchy
- Good spacing for paragraphs and lists
- Strong styling for code blocks, inline code, quotes, and links
- Layout should support text-heavy articles with minimal visual assets

## Content Assumptions

The design should assume:

- Blog content is text-first and Markdown-authored
- Articles may include code blocks and technical explanations
- Project cards may have uneven visual coverage
- Some project cards may rely on typography, spacing, and surface treatment more than imagery

## Accessibility Expectations

- Strong contrast in light theme
- Comfortable text sizes on all screen sizes
- Clear link and focus states
- Navigation remains usable on mobile
- Meaning should not rely on color only
- Article code blocks should remain readable and scroll gracefully on small screens

## Responsive Expectations

The concepts must work well on:

- Mobile
- Tablet
- Desktop

Important responsive priorities:

- The homepage latest-article feature must remain clear on small screens
- The About page sections should stay easy to scan when stacked vertically
- Project cards should degrade gracefully without images
- Blog article layouts should remain readable on narrow screens
- Navigation should stay minimal and unobtrusive

## Components To Explore

Please include concepts for:

- Global header and navigation
- Latest article feature block
- Blog post list item
- About page section anchors or local sub-navigation
- Project card
- Social links area
- Footer
- Blog article body styling
- Code block styling
- Optional long-article table of contents

## Content Priorities

The UI should prioritize:

1. Reading the latest article
2. Reading comfort for long-form technical posts
3. Clear understanding of who I am
4. Easy scanning of experience and selected projects
5. A clean and current overall impression

## Explicit Out Of Scope For V1

- Project detail pages
- Search
- Filtering
- Categories
- Tags
- Comments
- Newsletter
- Contact forms
- Dark mode
- Complex animations
- CMS or admin experience

## Deliverables Requested From The Design Tool

Please generate:

1. Two or three distinct UI concepts
2. Desktop and mobile concepts for the home page
3. An About page concept with anchor-based sections
4. A blog index page concept
5. A blog article page concept optimized for text and code blocks
6. A short rationale for each concept, including typography, hierarchy, and layout choices

## Success Criteria

The final concepts should:

- Make the site clearly feel blog-first
- Put the latest article at the center of the homepage
- Make long-form reading feel comfortable and modern
- Present the About page as compact and scannable
- Support projects even when visual assets are limited
- Look personal and polished without expanding scope beyond a simple static v1
