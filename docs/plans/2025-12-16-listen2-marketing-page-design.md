# Listen2 Marketing Page Design

## Overview

Long-scrolling marketing page for Listen2 app, replacing the current simple card layout with a comprehensive, markdown-powered page.

## Requirements

- **Content source:** Single markdown file, cleaned up from WEBSITE_FEATURES.md
- **Visual style:** Minimal/clean with dark/light mode toggle
- **Navigation:** Simple top nav (non-sticky) with Guide, Privacy, Support links
- **Content scope:** All content initially, easy to remove sections
- **App status:** Public beta via TestFlight

## Architecture

**Approach:** Single MD file with smart layout parsing

- `##` headings create major section dividers
- `###` headings create feature/subsection titles
- `> blockquotes` become highlighted callout cards
- Markdown tables auto-styled as comparison tables
- `**Q:**` pattern triggers FAQ styling

## File Structure

```
src/
├── apps/
│   └── listen2.md         # Marketing page content (replaces current)
├── _includes/layouts/
│   └── marketing.njk      # New layout for long-scroll pages
├── css/
│   └── main.css          # Add dark mode + marketing page styles
```

## Navigation Design

```
┌─────────────────────────────────────────────────────────────┐
│  Listen2                    Guide  Privacy  Support   🌙/☀️  │
└─────────────────────────────────────────────────────────────┘
```

- Left: App name linking to moonquakemedia home
- Right: User Guide, Privacy Policy, Support (email)
- Far right: Dark/light mode toggle
- Non-sticky, scrolls with content
- Hamburger menu on mobile

## Page Flow

1. **Hero** - Large headline + subheadline + TestFlight CTA
2. **Value Propositions** - Persona cards with blockquote callouts
3. **Features** - Feature blocks with descriptions
4. **Comparison Tables** - Styled markdown tables
5. **FAQ** - Q&A pairs
6. **Footer** - Links + TestFlight badge + copyright

## Dark/Light Mode

**Implementation:**
- CSS custom properties for colors
- `localStorage` for preference persistence
- Respects `prefers-color-scheme` by default
- `.dark` class on `<html>` element

**Color Scheme:**

| Element | Light | Dark |
|---------|-------|------|
| Background | #ffffff | #0f0f0f |
| Text | #1a1a1a | #e5e5e5 |
| Muted text | #6b7280 | #9ca3af |
| Section alt bg | #f9fafb | #1a1a1a |
| Accent | #6366f1 | #818cf8 |
| Borders | #e5e7eb | #2d2d2d |

## Content Frontmatter

```yaml
---
layout: layouts/marketing.njk
title: Listen2
tagline: Turn Any Document Into an Audiobook
testFlightUrl: https://testflight.apple.com/join/uRrWXCba
status: beta
---
```

## Key Design Decisions

1. **Single MD file** - Simplest to edit, sections are independent
2. **Smart heading parsing** - Layout creates visual sections from markdown structure
3. **Dark mode via CSS variables** - No build-time duplication, instant toggle
4. **Non-sticky nav** - Cleaner reading experience
5. **TestFlight status** - "Public Beta" badge with join link
