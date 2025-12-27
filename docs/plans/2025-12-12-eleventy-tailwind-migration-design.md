# Eleventy + Tailwind Migration Design

## Overview

Convert the Moonquake Media static HTML site to use Eleventy (11ty) as a static site generator with Nunjucks templating and Tailwind CSS.

## Goals

- Extract repeated CSS into a single Tailwind-powered stylesheet
- Template common elements (header, footer, navigation)
- Define app data in Markdown frontmatter rather than duplicated HTML
- Enable hot-reload development workflow
- Maintain GitHub Pages deployment

## Technology Choices

| Aspect | Choice | Rationale |
|--------|--------|-----------|
| Static Site Generator | Eleventy (11ty) | Flexible, minimal config, great for HTML migration |
| Templating | Nunjucks | Powerful features (extends, blocks, macros), popular in 11ty |
| CSS Framework | Tailwind CSS | Utility-first, modern DX, automatic purging |
| Data Format | Markdown + YAML frontmatter | Content-friendly, easy to edit |

## Project Structure

```
moonquakemedia-site/
├── src/
│   ├── _data/              # Global data files
│   │   └── site.json       # Site metadata (title, email, etc.)
│   ├── _includes/          # Reusable components
│   │   ├── layouts/
│   │   │   ├── base.njk    # HTML boilerplate, head, scripts
│   │   │   ├── app.njk     # App product page layout
│   │   │   └── guide.njk   # Guide/documentation layout
│   │   └── components/
│   │       ├── header.njk
│   │       ├── footer.njk
│   │       ├── nav.njk
│   │       └── lightbox.njk
│   ├── apps/               # App pages as Markdown
│   │   ├── gigscroll.md
│   │   └── listen2.md
│   ├── guides/             # Guide pages
│   │   ├── gigscroll-guide.md
│   │   └── listen2-guide.md
│   ├── legal/              # Privacy policies
│   │   ├── gigscroll-privacy.md
│   │   └── listen2-privacy.md
│   ├── css/
│   │   └── main.css        # Tailwind imports + custom styles
│   └── index.njk           # Homepage
├── public/                 # Static assets (copied as-is)
│   └── images/
├── .eleventy.js            # Eleventy config
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## Data Model

### App Frontmatter Example

```yaml
---
title: GigScroll
tagline: Your lyrics, always in sight
status: available  # or "coming-soon"
appIcon: /images/GigScrollAppIconOfficial.png
appStoreUrl: https://apps.apple.com/app/gigscroll/id6744899631
features:
  - title: Smooth Scrolling
    description: Lyrics scroll automatically at your chosen speed
  - title: Song Library
    description: Organize all your songs in one place
screenshots:
  - src: /images/GigScrollStoreImage1.png
    alt: Smooth scrolling lyrics
layout: layouts/app.njk
---
```

### Site Data (`_data/site.json`)

```json
{
  "name": "Moonquake Media",
  "email": "support@moonquakemedia.com",
  "year": 2025
}
```

## Tailwind Configuration

```js
module.exports = {
  content: ["./src/**/*.{njk,md,html}"],
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#667eea',
          600: '#764ba2',
        },
        available: '#34c759',
        coming: '#ff9500',
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
```

## Build Process

### Package Scripts

```json
{
  "scripts": {
    "dev": "concurrently \"npm run watch:css\" \"npm run watch:11ty\"",
    "watch:css": "postcss src/css/main.css -o _site/css/main.css --watch",
    "watch:11ty": "eleventy --serve",
    "build:css": "postcss src/css/main.css -o _site/css/main.css",
    "build": "npm run build:css && eleventy",
    "start": "npm run dev"
  }
}
```

### Dependencies

- `@11ty/eleventy` - Static site generator
- `tailwindcss`, `postcss`, `autoprefixer` - CSS processing
- `concurrently` - Run dev tasks in parallel

## File Migration Map

| Current File | New Location | Format |
|--------------|--------------|--------|
| `index.html` | `src/index.njk` | Nunjucks template |
| `gigscroll.html` | `src/apps/gigscroll.md` | Markdown + frontmatter |
| `listen2.html` | `src/apps/listen2.md` | Markdown + frontmatter |
| `gigscroll-guide.html` | `src/guides/gigscroll-guide.md` | Markdown + frontmatter |
| `listen2-guide.html` | `src/guides/listen2-guide.md` | Markdown + frontmatter |
| `gigscroll-privacy.html` | `src/legal/gigscroll-privacy.md` | Markdown + frontmatter |
| `listen2-privacy.html` | `src/legal/listen2-privacy.md` | Markdown + frontmatter |
| `images/` | `src/images/` | Copied as-is |
| Inline CSS | `src/css/main.css` | Tailwind utilities |
| Lightbox JS | `src/_includes/components/lightbox.njk` | Component |

## Deployment

GitHub Pages serves from `_site/`. Options:
1. Build locally and commit `_site/`
2. Use GitHub Actions to build on push (recommended)

## Benefits

- Single source of truth for styles
- Edit app info in YAML frontmatter, not HTML
- Faster iteration with hot reload
- Smaller CSS bundle via Tailwind purging
- Easier to add new apps or pages
