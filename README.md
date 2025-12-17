# Moonquake Media Website

Official website for Moonquake Media - creators of GigScroll and other apps for performers and creators.

## Live Site

- **Production:** https://moonquakemedia.com

## Tech Stack

- **Static Site Generator:** [Eleventy (11ty)](https://www.11ty.dev/)
- **Templating:** Nunjucks
- **CSS:** Tailwind CSS
- **Deployment:** GitHub Actions → GitHub Pages

## Development

### Prerequisites

- Node.js 18+

### Setup

```bash
npm install
```

### Commands

```bash
npm run dev      # Start dev server at http://localhost:8080 (with hot reload)
npm run build    # Build for production (output: _site/)
```

---

## Content Editing Guide

### Site-Wide Settings

**File:** `src/_data/site.json`

```json
{
  "name": "Moonquake Media",
  "tagline": "Professional apps for creators and performers",
  "email": "support@moonquakemedia.com",
  "year": 2025
}
```

### Homepage App Cards

**File:** `src/_data/apps.json`

Edit app name, tagline, icon, and status badge here. Changes appear on the homepage.

---

### App Pages

**Files:** `src/apps/gigscroll.md`, `src/apps/listen2.md`

Edit the frontmatter (YAML between `---`) to change:

| Field | Description |
|-------|-------------|
| `title` | App name |
| `tagline` | Short description |
| `status` | `available` or `coming` (controls badge color) |
| `appStoreUrl` | App Store link |
| `features` | Array of `{icon, title, description}` objects |
| `screenshots` | Array of `{src, alt}` pairs |
| `price` | Price display (e.g., "$24.99") |
| `priceNote` | Text below price |
| `howItWorks` | Step-by-step flow (array of `{title, description}`) |

---

### User Guides

**Files:** `src/guides/gigscroll.md`, `src/guides/listen2.md`

- **Frontmatter:** Controls title, subtitle, table of contents, and IAP notice banner
- **Content:** Write in Markdown with HTML div wrappers for styled boxes

**Styled boxes:**

```html
<div class="tip-box">
<h4>💡 Tip Title</h4>
<p>Tip content here</p>
</div>

<div class="warning-box">
<h4>⚠️ Warning Title</h4>
<p>Warning content</p>
</div>

<div class="feature-box">
<h4>Feature Title</h4>
<p>Feature content</p>
</div>
```

**Button labels:** `<span class="button-label">Save</span>`

**Sections:** Wrap each section in `<div class="content-section" id="section-id">...</div>`

---

### Privacy Policies

**Files:** `src/legal/gigscroll-privacy.md`, `src/legal/listen2-privacy.md`

Edit frontmatter fields:
- `lastUpdated` - Date string
- `summary` - Short summary shown at top

Content is written in standard Markdown.

---

### Adding a New App

1. Add entry to `src/_data/apps.json`
2. Create `src/apps/newapp.md` (copy an existing one as template)
3. Create `src/guides/newapp.md`
4. Create `src/legal/newapp-privacy.md`
5. Add app icon to `src/images/`

---

### Styling

**Tailwind config:** `tailwind.config.js` - Edit colors, fonts

**Custom CSS:** `src/css/main.css` - Component classes in `@layer components`

---

## Project Structure

```
src/
├── _data/                  # Global data files
│   ├── apps.json           # App list for homepage
│   └── site.json           # Site metadata
├── _includes/
│   ├── layouts/            # Page layouts
│   │   ├── base.njk        # HTML boilerplate
│   │   ├── app.njk         # App product pages
│   │   ├── guide.njk       # User guide pages
│   │   └── privacy.njk     # Privacy policy pages
│   └── components/
│       ├── footer.njk      # Site footer
│       └── lightbox.njk    # Image lightbox
├── apps/                   # App pages (Markdown)
├── guides/                 # User guide pages (Markdown)
├── legal/                  # Privacy policies (Markdown)
├── css/
│   └── main.css            # Tailwind CSS + custom styles
├── images/                 # Static images
└── index.njk               # Homepage
```

---

## Deployment

The site auto-deploys via GitHub Actions when you push to `main`:

```bash
git add .
git commit -m "Update content"
git push
```

Changes go live in 2-3 minutes.

---

## App Store URLs

| Purpose | URL |
|---------|-----|
| Privacy Policy (GigScroll) | `https://moonquakemedia.com/legal/gigscroll-privacy/` |
| Privacy Policy (Listen2) | `https://moonquakemedia.com/legal/listen2-privacy/` |
| Marketing URL | `https://moonquakemedia.com` |
| Support URL | `https://moonquakemedia.com/apps/gigscroll/` |

---

## Custom Domain Setup (Namecheap)

Already configured. If you need to reconfigure:

**A Records (root domain):**
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

**CNAME (www):** `zachswift615.github.io`

Then in GitHub repo Settings → Pages → Custom domain: `moonquakemedia.com`
