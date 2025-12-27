# Eleventy + Tailwind Migration Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Convert the Moonquake Media static HTML site to Eleventy with Nunjucks templating and Tailwind CSS.

**Architecture:** Source files in `src/`, build output to `_site/`. Shared layouts and components via Nunjucks. App/guide/privacy pages as Markdown with frontmatter. Tailwind for styling with custom color palette.

**Tech Stack:** Eleventy 3.x, Nunjucks, Tailwind CSS 3.x, PostCSS, Node.js

---

## Task 1: Initialize Project

**Files:**
- Create: `package.json`
- Create: `.gitignore`

**Step 1: Create package.json**

```json
{
  "name": "moonquakemedia-site",
  "version": "1.0.0",
  "description": "Moonquake Media website",
  "scripts": {
    "dev": "concurrently \"npm run watch:css\" \"npm run watch:11ty\"",
    "watch:css": "postcss src/css/main.css -o _site/css/main.css --watch",
    "watch:11ty": "eleventy --serve",
    "build:css": "NODE_ENV=production postcss src/css/main.css -o _site/css/main.css",
    "build": "npm run build:css && eleventy",
    "start": "npm run dev"
  },
  "devDependencies": {
    "@11ty/eleventy": "^3.0.0",
    "tailwindcss": "^3.4.0",
    "postcss": "^8.4.0",
    "postcss-cli": "^11.0.0",
    "autoprefixer": "^10.4.0",
    "concurrently": "^8.2.0"
  }
}
```

**Step 2: Update .gitignore**

Add to existing .gitignore:
```
node_modules/
_site/
.cache/
```

**Step 3: Install dependencies**

Run: `npm install`
Expected: Dependencies install successfully, node_modules created

**Step 4: Commit**

```bash
git add package.json .gitignore
git commit -m "feat: initialize Eleventy + Tailwind project"
```

---

## Task 2: Configure Eleventy

**Files:**
- Create: `.eleventy.js`
- Create: `src/_data/site.json`

**Step 1: Create Eleventy config**

Create `.eleventy.js`:
```javascript
module.exports = function(eleventyConfig) {
  // Copy static assets
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("CNAME");

  // Copy CSS (PostCSS handles main.css separately)
  eleventyConfig.addPassthroughCopy("src/js");

  // Watch CSS for changes
  eleventyConfig.addWatchTarget("src/css/");

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    templateFormats: ["njk", "md", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
```

**Step 2: Create site data**

Create `src/_data/site.json`:
```json
{
  "name": "Moonquake Media",
  "tagline": "Professional apps for creators and performers",
  "email": "support@moonquakemedia.com",
  "year": 2025,
  "url": "https://moonquakemedia.com"
}
```

**Step 3: Create directory structure**

Run:
```bash
mkdir -p src/_includes/layouts src/_includes/components src/_data src/css src/images src/apps src/guides src/legal
```

**Step 4: Verify structure exists**

Run: `ls -la src/`
Expected: All directories created

**Step 5: Commit**

```bash
git add .eleventy.js src/_data/site.json
git commit -m "feat: configure Eleventy with site data"
```

---

## Task 3: Configure Tailwind CSS

**Files:**
- Create: `tailwind.config.js`
- Create: `postcss.config.js`
- Create: `src/css/main.css`

**Step 1: Create Tailwind config**

Create `tailwind.config.js`:
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{njk,md,html}"],
  theme: {
    extend: {
      colors: {
        primary: {
          400: '#818cf8',
          500: '#667eea',
          600: '#764ba2',
        },
        available: '#34c759',
        coming: '#ff9500',
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
```

**Step 2: Create PostCSS config**

Create `postcss.config.js`:
```javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  }
}
```

**Step 3: Create main CSS file**

Create `src/css/main.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body {
    @apply font-sans leading-relaxed text-gray-800;
  }

  a {
    @apply text-primary-500 no-underline hover:underline;
  }
}

@layer components {
  /* Gradient backgrounds */
  .gradient-hero {
    @apply bg-gradient-to-br from-primary-500 to-primary-600;
  }

  .gradient-text {
    @apply bg-gradient-to-br from-primary-500 to-primary-600 bg-clip-text text-transparent;
  }

  /* Badges */
  .badge {
    @apply inline-block px-4 py-2 rounded-full text-sm font-semibold text-white;
  }

  .badge-available {
    @apply bg-available;
  }

  .badge-coming {
    @apply bg-coming;
  }

  /* Cards */
  .app-card {
    @apply bg-white rounded-2xl p-8 shadow-xl transition-all duration-300 cursor-pointer block no-underline text-inherit;
  }

  .app-card:hover {
    @apply -translate-y-2 shadow-2xl no-underline;
  }

  /* App icons */
  .app-icon {
    @apply w-28 h-28 md:w-32 md:h-32 rounded-[22%] shadow-lg;
  }

  /* CTA Buttons */
  .cta-button {
    @apply inline-block gradient-hero text-white px-6 py-3 md:px-8 md:py-4 rounded-xl font-semibold text-lg transition-all duration-200 shadow-lg no-underline;
  }

  .cta-button:hover {
    @apply -translate-y-0.5 shadow-xl no-underline;
  }

  /* Content boxes */
  .feature-box {
    @apply bg-gray-50 border-l-4 border-primary-500 p-5 my-5 rounded-r-lg;
  }

  .tip-box {
    @apply bg-yellow-50 border-l-4 border-yellow-400 p-5 my-5 rounded-r-lg;
  }

  .warning-box {
    @apply bg-red-50 border-l-4 border-red-400 p-5 my-5 rounded-r-lg;
  }

  .highlight-box {
    @apply bg-gray-100 border-l-4 border-primary-500 p-5 my-5 rounded-r-lg;
  }

  /* Button labels */
  .button-label {
    @apply bg-primary-500 text-white px-2.5 py-1 rounded font-bold text-sm;
  }

  /* Section styling */
  .content-section {
    @apply bg-white rounded-xl p-8 md:p-10 mb-8 shadow-md;
  }

  .content-section h2 {
    @apply text-primary-500 text-2xl md:text-3xl mb-5 pb-3 border-b-2 border-primary-500;
  }

  .content-section h3 {
    @apply text-primary-600 text-xl md:text-2xl mt-8 mb-4;
  }

  .content-section h4 {
    @apply text-gray-600 text-lg mt-5 mb-3;
  }

  /* Feature grid */
  .feature {
    @apply p-4 bg-white rounded-lg;
  }

  .feature h3 {
    @apply text-lg mb-1 text-primary-500;
  }

  .feature p {
    @apply text-sm text-gray-600;
  }

  /* Screenshots grid */
  .screenshot {
    @apply w-full h-auto rounded-2xl shadow-lg transition-transform duration-300 cursor-pointer;
  }

  .screenshot:hover {
    @apply scale-105;
  }
}

/* Lightbox styles */
.lightbox {
  @apply hidden fixed inset-0 bg-black/95 z-50 items-center justify-center;
}

.lightbox.active {
  @apply flex;
}

.lightbox img {
  @apply max-w-[90%] max-h-[90vh] rounded-xl shadow-2xl;
}

.lightbox-close {
  @apply absolute top-5 right-8 text-4xl text-white cursor-pointer bg-transparent border-none p-2;
}

.lightbox-close:hover {
  @apply text-gray-300;
}

.lightbox-prev,
.lightbox-next {
  @apply absolute top-1/2 -translate-y-1/2 text-4xl text-white cursor-pointer bg-white/10 border-none p-5 rounded z-50;
}

.lightbox-prev {
  @apply left-5;
}

.lightbox-next {
  @apply right-5;
}

.lightbox-prev:hover,
.lightbox-next:hover {
  @apply bg-white/20;
}

.lightbox-counter {
  @apply absolute bottom-5 left-1/2 -translate-x-1/2 text-white text-base bg-black/50 px-5 py-2 rounded-full;
}
```

**Step 4: Test build**

Run: `npm run build:css`
Expected: CSS file created at `_site/css/main.css`

**Step 5: Commit**

```bash
git add tailwind.config.js postcss.config.js src/css/main.css
git commit -m "feat: configure Tailwind CSS with custom theme"
```

---

## Task 4: Create Base Layout

**Files:**
- Create: `src/_includes/layouts/base.njk`
- Create: `src/_includes/components/footer.njk`

**Step 1: Create base layout**

Create `src/_includes/layouts/base.njk`:
```njk
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ title }}{% if title %} | {% endif %}{{ site.name }}</title>
    <link rel="stylesheet" href="/css/main.css">
</head>
<body class="{% block bodyClass %}{% endblock %}">
    {% block content %}{{ content | safe }}{% endblock %}

    {% block footer %}
    {% include "components/footer.njk" %}
    {% endblock %}

    {% block scripts %}{% endblock %}
</body>
</html>
```

**Step 2: Create footer component**

Create `src/_includes/components/footer.njk`:
```njk
<footer class="text-center py-10 {% if footerStyle == 'bordered' %}bg-white mt-10 border-t border-gray-200{% else %}mt-12{% endif %}">
    {% if footerLinks %}
    <p class="mb-4">
        {% for link in footerLinks %}
        <a href="{{ link.url }}" class="mx-2 text-primary-500 hover:underline">{{ link.text }}</a>
        {% if not loop.last %}|{% endif %}
        {% endfor %}
    </p>
    {% endif %}
    <p class="{% if footerStyle == 'light' %}text-white/80{% else %}text-gray-500{% endif %} text-sm">
        &copy; {{ site.year }} {{ site.name }}. All rights reserved.
    </p>
    {% if showContact %}
    <p class="mt-2">
        <a href="mailto:{{ site.email }}" class="{% if footerStyle == 'light' %}text-white/90{% else %}text-primary-500{% endif %}">Contact Support</a>
    </p>
    {% endif %}
</footer>
```

**Step 3: Commit**

```bash
git add src/_includes/layouts/base.njk src/_includes/components/footer.njk
git commit -m "feat: create base layout and footer component"
```

---

## Task 5: Create Homepage

**Files:**
- Create: `src/index.njk`
- Create: `src/_data/apps.json`

**Step 1: Create apps data**

Create `src/_data/apps.json`:
```json
[
  {
    "slug": "gigscroll",
    "name": "GigScroll",
    "tagline": "The essential lyrics teleprompter for live performers",
    "icon": "/images/GigScrollAppIconOfficial.png",
    "status": "available",
    "statusText": "Available Now"
  },
  {
    "slug": "listen2",
    "name": "Listen2",
    "tagline": "Your personal audiobook narrator with natural voices",
    "icon": "/images/Listen2AppIcon.png",
    "status": "coming",
    "statusText": "Coming Soon"
  }
]
```

**Step 2: Create homepage**

Create `src/index.njk`:
```njk
---
title: Apps for Creators
layout: layouts/base.njk
footerStyle: light
showContact: true
---

<div class="gradient-hero min-h-screen flex items-center justify-center p-5">
    <div class="max-w-4xl text-center">
        <h1 class="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">{{ site.name }}</h1>
        <p class="text-lg md:text-xl text-white/90 mb-12">{{ site.tagline }}</p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-5">
            {% for app in apps %}
            <a href="/apps/{{ app.slug }}/" class="app-card text-center">
                <div class="mb-5">
                    <img src="{{ app.icon }}" alt="{{ app.name }} App Icon" class="app-icon mx-auto">
                </div>
                <h2 class="text-2xl font-bold text-gray-800 mb-2">{{ app.name }}</h2>
                <p class="text-gray-600 text-base mb-5">{{ app.tagline }}</p>
                <span class="badge badge-{{ app.status }}">{{ app.statusText }}</span>
            </a>
            {% endfor %}
        </div>
    </div>
</div>
```

**Step 3: Test build**

Run: `npm run build`
Expected: `_site/index.html` created with rendered content

**Step 4: Commit**

```bash
git add src/index.njk src/_data/apps.json
git commit -m "feat: create homepage with app cards"
```

---

## Task 6: Create App Page Layout

**Files:**
- Create: `src/_includes/layouts/app.njk`
- Create: `src/_includes/components/lightbox.njk`

**Step 1: Create lightbox component**

Create `src/_includes/components/lightbox.njk`:
```njk
<!-- Lightbox Modal -->
<div class="lightbox" id="lightbox">
    <button class="lightbox-close" onclick="closeLightbox()">&times;</button>
    <button class="lightbox-prev" onclick="changeImage(-1)">&#10094;</button>
    <div class="lightbox-content">
        <img id="lightbox-img" src="" alt="Screenshot">
    </div>
    <button class="lightbox-next" onclick="changeImage(1)">&#10095;</button>
    <div class="lightbox-counter" id="lightbox-counter"></div>
</div>

<script>
let currentImageIndex = 0;
const images = Array.from(document.querySelectorAll('.screenshot'));

images.forEach((img, index) => {
    img.addEventListener('click', () => openLightbox(index));
});

function openLightbox(index) {
    currentImageIndex = index;
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const counter = document.getElementById('lightbox-counter');

    lightboxImg.src = images[currentImageIndex].src;
    lightboxImg.alt = images[currentImageIndex].alt;
    counter.textContent = `${currentImageIndex + 1} / ${images.length}`;

    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

function changeImage(direction) {
    currentImageIndex += direction;
    if (currentImageIndex >= images.length) currentImageIndex = 0;
    else if (currentImageIndex < 0) currentImageIndex = images.length - 1;

    const lightboxImg = document.getElementById('lightbox-img');
    const counter = document.getElementById('lightbox-counter');

    lightboxImg.src = images[currentImageIndex].src;
    lightboxImg.alt = images[currentImageIndex].alt;
    counter.textContent = `${currentImageIndex + 1} / ${images.length}`;
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
    else if (e.key === 'ArrowLeft') changeImage(-1);
    else if (e.key === 'ArrowRight') changeImage(1);
});

document.getElementById('lightbox').addEventListener('click', (e) => {
    if (e.target.id === 'lightbox') closeLightbox();
});
</script>
```

**Step 2: Create app layout**

Create `src/_includes/layouts/app.njk`:
```njk
---
layout: layouts/base.njk
footerStyle: bordered
---

{% set footerLinks = [
    { url: "/guides/" + slug + "/", text: "User Guide" },
    { url: "/legal/" + slug + "-privacy/", text: "Privacy Policy" },
    { url: "mailto:" + site.email, text: "Support" }
] %}

<div class="gradient-hero min-h-screen flex items-center justify-center p-5">
    <div class="max-w-3xl w-full bg-white rounded-2xl shadow-2xl p-8 md:p-12 text-center">
        <a href="/" class="inline-block mb-5 text-primary-500 font-medium hover:underline">&larr; Back to {{ site.name }}</a>

        <h1 class="text-4xl md:text-5xl font-bold gradient-text mb-5">{{ title }}</h1>
        <p class="text-lg md:text-xl text-gray-600 mb-10">{{ tagline }}</p>

        <div class="bg-gray-50 rounded-2xl p-8 my-10">
            <div class="mb-5">
                <img src="{{ appIcon }}" alt="{{ title }} App Icon" class="app-icon mx-auto">
            </div>

            <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
                {{ title }}
                {% if status == "available" %}
                <span class="badge badge-available ml-2 align-middle text-base">Now Available!</span>
                {% else %}
                <span class="badge badge-coming ml-2 align-middle text-base">Coming Soon</span>
                {% endif %}
            </h2>

            <p class="text-gray-600 text-lg mb-6">{{ tagline }}</p>

            {% if screenshots and screenshots.length %}
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
                {% for screenshot in screenshots %}
                <img src="{{ screenshot.src }}" alt="{{ screenshot.alt }}" class="screenshot">
                {% endfor %}
            </div>
            {% endif %}

            {% if features and features.length %}
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-8 text-left">
                {% for feature in features %}
                <div class="feature">
                    <div class="text-2xl mb-2">{{ feature.icon }}</div>
                    <h3>{{ feature.title }}</h3>
                    <p>{{ feature.description }}</p>
                </div>
                {% endfor %}
            </div>
            {% endif %}

            {% if status == "available" and appStoreUrl %}
            <a href="{{ appStoreUrl }}" target="_blank" rel="noopener noreferrer" class="inline-block my-4">
                <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Download on the App Store" class="h-12 hover:scale-105 transition-transform">
            </a>
            {% elif status == "coming" %}
            <div class="bg-gray-100 rounded-lg p-5 my-6">
                <p class="text-gray-500">Coming soon to the App Store</p>
            </div>
            {% endif %}

            {% if price %}
            <div class="my-6">
                <span class="inline-block gradient-hero text-white px-6 py-3 rounded-full text-xl font-semibold shadow-lg">{{ price }}</span>
                {% if priceNote %}
                <p class="text-gray-500 text-sm mt-3">{{ priceNote }}</p>
                {% endif %}
            </div>
            {% endif %}

            {% if howItWorks and howItWorks.length %}
            <div class="bg-white rounded-2xl p-6 my-8">
                <h2 class="text-primary-500 text-xl font-bold mb-6">How It Works</h2>
                <div class="flex justify-center gap-5 flex-wrap">
                    {% for step in howItWorks %}
                    <div class="flex-1 min-w-[150px] max-w-[200px] text-center">
                        <div class="w-12 h-12 gradient-hero text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">{{ loop.index }}</div>
                        <h4 class="text-gray-800 font-semibold mb-2">{{ step.title }}</h4>
                        <p class="text-gray-600 text-sm">{{ step.description }}</p>
                    </div>
                    {% endfor %}
                </div>
            </div>
            {% endif %}

            <a href="/guides/{{ slug }}/" class="cta-button">View Complete User Guide</a>
        </div>

        <div class="mt-6">
            <p class="text-gray-600">Questions or feedback? <a href="mailto:{{ site.email }}" class="text-primary-500 font-semibold">{{ site.email }}</a></p>
        </div>
    </div>
</div>

{% if screenshots and screenshots.length %}
{% include "components/lightbox.njk" %}
{% endif %}
```

**Step 3: Commit**

```bash
git add src/_includes/layouts/app.njk src/_includes/components/lightbox.njk
git commit -m "feat: create app page layout with lightbox"
```

---

## Task 7: Create App Pages

**Files:**
- Create: `src/apps/gigscroll.md`
- Create: `src/apps/listen2.md`
- Create: `src/apps/apps.json` (directory data)

**Step 1: Create apps directory data**

Create `src/apps/apps.json`:
```json
{
  "layout": "layouts/app.njk",
  "permalink": "/apps/{{ page.fileSlug }}/"
}
```

**Step 2: Create GigScroll page**

Create `src/apps/gigscroll.md`:
```markdown
---
title: GigScroll
slug: gigscroll
tagline: The essential lyrics teleprompter for live performers
status: available
appIcon: /images/GigScrollAppIconOfficial.png
appStoreUrl: https://apps.apple.com/us/app/gigscroll/id6753904306
features:
  - icon: "📜"
    title: Auto-Scrolling
    description: Smooth, adjustable scrolling keeps you in the moment
  - icon: "🎨"
    title: Stage Ready
    description: High-contrast themes designed for stage visibility
  - icon: "📱"
    title: Works Offline
    description: All your songs available without internet
  - icon: "🎹"
    title: Setlist Manager
    description: Organize songs for every performance
screenshots:
  - src: /images/GigScrollStoreImage1.png
    alt: GigScroll - Smooth scrolling lyrics
  - src: /images/GigScrollStoreImage2.png
    alt: GigScroll - Song library
  - src: /images/GigScrollStoreImage3.png
    alt: GigScroll - Create and edit songs
  - src: /images/GigScrollStoreImage4.png
    alt: GigScroll - Setlist management
---
```

**Step 3: Create Listen2 page**

Create `src/apps/listen2.md`:
```markdown
---
title: Listen2
slug: listen2
tagline: Your personal audiobook narrator with natural voices
status: coming
appIcon: /images/Listen2AppIcon.png
price: "$24.99"
priceNote: "Buy once, own forever. No subscriptions."
features:
  - icon: "🎙️"
    title: Natural Voices
    description: High-quality Piper TTS voices that sound natural and are easy to listen to for hours
  - icon: "📖"
    title: Word Highlighting
    description: Follow along visually as Listen2 reads. Choose word, sentence, or paragraph highlighting
  - icon: "📚"
    title: Multiple Formats
    description: Import PDF, EPUB, plain text, and markdown files directly into your library
  - icon: "🌍"
    title: Many Languages
    description: One voice included to start. Download more in dozens of languages as you need them
  - icon: "✈️"
    title: 100% Offline
    description: Everything runs locally on your device. No internet required after downloading voices
  - icon: "📋"
    title: Clipboard Reading
    description: Copy any text and import it instantly. Read articles, emails, or anything else
howItWorks:
  - title: Import
    description: Add documents from Files, or paste from clipboard
  - title: Choose Voice
    description: Pick from dozens of natural-sounding voices
  - title: Listen
    description: Enjoy your audiobook anywhere, even offline
---
```

**Step 4: Test build**

Run: `npm run build`
Expected: `_site/apps/gigscroll/index.html` and `_site/apps/listen2/index.html` created

**Step 5: Commit**

```bash
git add src/apps/
git commit -m "feat: create GigScroll and Listen2 app pages"
```

---

## Task 8: Create Guide Layout

**Files:**
- Create: `src/_includes/layouts/guide.njk`

**Step 1: Create guide layout**

Create `src/_includes/layouts/guide.njk`:
```njk
---
layout: layouts/base.njk
bodyClass: bg-gray-100
footerStyle: bordered
---

{% set footerLinks = [
    { url: "/apps/" + slug + "/", text: title },
    { url: "/legal/" + slug + "-privacy/", text: "Privacy Policy" },
    { url: "mailto:" + site.email, text: "Support" }
] %}

<header class="gradient-hero text-white py-10 text-center shadow-md">
    <h1 class="text-3xl md:text-4xl font-bold mb-2">{{ title }} User Guide</h1>
    <p class="text-lg opacity-90">{{ subtitle | default("Your Complete Guide") }}</p>
</header>

<nav class="text-center py-5 bg-white shadow-sm">
    <a href="/apps/{{ slug }}/" class="mx-4 text-primary-500 font-semibold hover:underline">&larr; Back to {{ title }}</a>
    {% for section in toc %}
    <a href="#{{ section.id }}" class="mx-4 text-primary-500 font-semibold hover:underline hidden md:inline">{{ section.short }}</a>
    {% endfor %}
</nav>

{% if iapNotice %}
<div class="bg-yellow-100 border-2 border-yellow-400 rounded-xl p-5 mx-auto my-8 max-w-4xl shadow-lg">
    <div class="flex items-start gap-4">
        <span class="text-3xl">⚠️</span>
        <div>
            <h3 class="text-yellow-800 text-xl font-semibold mb-2">{{ iapNotice.title }}</h3>
            <p class="text-yellow-800 mb-2">{{ iapNotice.message }}</p>
            <p class="text-yellow-700 text-sm italic">{{ iapNotice.updated }}</p>
        </div>
    </div>
</div>
{% endif %}

<main class="max-w-4xl mx-auto px-5 py-10">
    {% if toc and toc.length %}
    <div class="content-section">
        <h2 class="!border-0 !pb-0">Table of Contents</h2>
        <ul class="list-none mt-5">
            {% for section in toc %}
            <li class="my-2">
                <a href="#{{ section.id }}" class="text-gray-800 text-lg hover:text-primary-500">{{ loop.index }}. {{ section.title }}</a>
            </li>
            {% endfor %}
        </ul>
    </div>
    {% endif %}

    {{ content | safe }}
</main>
```

**Step 2: Commit**

```bash
git add src/_includes/layouts/guide.njk
git commit -m "feat: create guide page layout"
```

---

## Task 9: Create Guide Pages

**Files:**
- Create: `src/guides/guides.json`
- Create: `src/guides/gigscroll.md`
- Create: `src/guides/listen2.md`

**Step 1: Create guides directory data**

Create `src/guides/guides.json`:
```json
{
  "layout": "layouts/guide.njk",
  "permalink": "/guides/{{ page.fileSlug }}/"
}
```

**Step 2: Create GigScroll guide**

Create `src/guides/gigscroll.md`:
```markdown
---
title: GigScroll
slug: gigscroll
subtitle: Your Complete Guide to Performing with Confidence
iapNotice:
  title: Temporary In-App Purchase Issue
  message: We're experiencing a temporary issue with the Pro upgrade purchase. We're working to resolve this as quickly as possible. The issue should be fixed within 1-2 business days. We apologize for any inconvenience!
  updated: "Last updated: October 26, 2025 • Estimated resolution: October 28, 2025"
toc:
  - id: getting-started
    title: Getting Started
    short: Getting Started
  - id: songs
    title: Managing Your Songs
    short: Songs
  - id: setlists
    title: Building Setlists
    short: Setlists
  - id: performance
    title: Performance Mode
    short: Performance
  - id: customization
    title: Customization
    short: Customization
  - id: data-management
    title: Data Management
    short: Data
  - id: pro-features
    title: Pro Features
    short: Pro
  - id: tips
    title: Tips & Tricks
    short: Tips
  - id: troubleshooting
    title: Troubleshooting
    short: Help
---

<div class="content-section" id="getting-started">

## 1. Getting Started

### Welcome to GigScroll!

GigScroll is a professional lyrics teleprompter designed specifically for live performers. Whether you're playing a coffee shop or a stadium, GigScroll keeps your lyrics front and center with smooth auto-scrolling, customizable fonts, and stage-ready themes.

### First Launch

When you first open GigScroll, you'll see a quick tutorial covering the basics. You can always view it again from **Settings → Show Tutorial Again**.

### The Main Interface

GigScroll has three main tabs at the bottom:

- **Songs** - Your complete library of songs with search
- **Setlists** - Organized song collections for performances
- **Settings** - Themes, fonts, and data management

<div class="tip-box">
<h4>💡 First Time Tip</h4>
<p>Start by adding a few songs to your library! You can search online for lyrics or add them manually. We recommend starting with 5-10 of your most-performed songs.</p>
</div>

</div>

<div class="content-section" id="songs">

## 2. Managing Your Songs

### Adding Songs

There are two ways to add songs to your library:

#### Option 1: Search Online for Lyrics

1. Tap the <span class="button-label">+</span> button in the top-right corner
2. Start typing a song title or artist name
3. As you type, you'll see autocomplete suggestions from iTunes
4. Select a suggestion, and GigScroll will automatically search for lyrics from multiple sources
5. Review the lyrics and tap <span class="button-label">Save</span>

<div class="feature-box">
<h4>🎵 Smart Lyrics Search</h4>
<p>GigScroll uses three different lyrics sources to give you the best chance of finding your song:</p>
<ul>
<li><strong>iTunes Search</strong> - Provides autocomplete suggestions as you type</li>
<li><strong>Lyrics.ovh</strong> - Primary lyrics database (100 searches per day)</li>
<li><strong>ChartLyrics</strong> - Backup lyrics source (unlimited searches)</li>
</ul>
<p>If one source doesn't have the lyrics, GigScroll automatically tries the next one!</p>
</div>

#### Option 2: Add Manually

1. Tap the <span class="button-label">+</span> button
2. Enter the song title and artist (optional)
3. Paste or type the lyrics in the large text area
4. Tap <span class="button-label">Save</span>

### Editing Songs

To edit a song's lyrics, title, or settings:

1. Tap on any song in your library
2. Make your changes (all changes auto-save)
3. Tap the back button when done

### Searching Your Library

Use the search bar at the top of the Songs tab to quickly find songs by title or artist. The search filters as you type.

### Recent Songs

Your most recently performed songs appear at the top of the Songs tab for quick access.

<div class="tip-box">
<h4>💡 Pro Tip: Formatting Lyrics</h4>
<p>For best readability during performance:</p>
<ul>
<li>Use blank lines to separate verses and choruses</li>
<li>Add labels like [Verse 1], [Chorus], [Bridge] in brackets</li>
<li>Keep lines reasonably short (under 80 characters)</li>
</ul>
</div>

### Deleting Songs

To delete a song, swipe left on it in the Songs list and tap <span class="button-label">Delete</span>.

<div class="warning-box">
<h4>⚠️ Important</h4>
<p>Deleting a song will remove it from all setlists. This action cannot be undone (unless you have a backup).</p>
</div>

</div>

<div class="content-section" id="setlists">

## 3. Building Setlists

### What is a Setlist?

A setlist is an ordered collection of songs for a specific performance or gig. Setlists make it easy to flow through your songs in order without searching during a performance.

### Creating a Setlist

1. Go to the **Setlists** tab
2. Tap the <span class="button-label">+</span> button
3. Enter a name (e.g., "Saturday Night at Joe's Bar", "Worship Set - Dec 10")
4. Tap <span class="button-label">Create</span>

### Adding Songs to a Setlist

1. Tap on a setlist to open it
2. Tap the <span class="button-label">+</span> button in the top-right
3. Select songs from your library
4. Tap <span class="button-label">Done</span>

### Reordering Songs

1. Open a setlist
2. Tap <span class="button-label">Edit</span> in the top-left
3. Drag songs using the handle (≡) on the right side
4. Tap <span class="button-label">Done</span> when finished

### Removing Songs from a Setlist

Swipe left on any song in the setlist and tap <span class="button-label">Delete</span>. This only removes the song from this setlist - it stays in your library.

### Deleting a Setlist

To delete an entire setlist, swipe left on it in the Setlists tab and tap <span class="button-label">Delete</span>. The songs remain in your library.

### Sharing a Setlist

Share a setlist with bandmates or other performers:

1. Open the setlist
2. Tap the <span class="button-label">Share</span> button (square with arrow)
3. Choose how to share: AirDrop, Messages, Email, Files, etc.

The recipient can open the file in GigScroll to import your setlist with all the songs!

<div class="feature-box">
<h4>🎭 Use Cases for Setlists</h4>
<ul>
<li><strong>Venue-Specific</strong> - "Joe's Coffee House", "The Blue Room Friday"</li>
<li><strong>Genre-Based</strong> - "Country Classics", "80s Rock", "Jazz Standards"</li>
<li><strong>Event-Based</strong> - "Wedding Ceremony", "Cocktail Hour", "Reception"</li>
<li><strong>Seasonal</strong> - "Christmas Songs", "Summer Party Hits"</li>
<li><strong>Band Practice</strong> - "New Material", "Need to Practice", "Audience Favorites"</li>
</ul>
</div>

</div>

<div class="content-section" id="performance">

## 4. Performance Mode

### Starting a Performance

There are two ways to enter performance mode:

#### Option 1: Single Song

1. Open any song from the Songs tab
2. Tap the large <span class="button-label">PLAY</span> button

#### Option 2: Full Setlist

1. Open a setlist from the Setlists tab
2. Tap the large <span class="button-label">▶ PLAY SETLIST</span> button

### Performance Mode Controls

Once in performance mode, you'll see your lyrics in large text with controls at the bottom:

<div class="feature-box">
<h4>🎮 Control Panel</h4>
<ul>
<li><strong>◀ Previous</strong> - Go to previous song in setlist (setlist mode only)</li>
<li><strong>[-] Slower</strong> - Decrease scroll speed</li>
<li><strong>[▶/⏸] Play/Pause</strong> - Start or stop auto-scrolling</li>
<li><strong>[+] Faster</strong> - Increase scroll speed</li>
<li><strong>[💾] Save</strong> - Save current scroll speed as default for this song</li>
<li><strong>Next ▶</strong> - Go to next song in setlist (setlist mode only)</li>
</ul>
</div>

### Auto-Scrolling

The lyrics automatically scroll from bottom to top at your chosen speed. The scrolling is smooth and optimized for stage visibility.

#### Adjusting Scroll Speed

- Tap **+** to make it scroll faster
- Tap **-** to make it scroll slower
- Tap the **💾** button to save your preferred speed for this song

### Navigating During Performance

When playing a setlist, you can:

- Tap **Next ▶** to advance to the next song
- Tap **◀ Previous** to go back to the previous song
- The position indicator (e.g., "2/5") shows where you are in the setlist

### Manual Scrolling

You can also scroll manually by swiping up or down on the lyrics. Auto-scrolling will pause when you manually scroll.

### Exiting Performance Mode

Tap the **X** or **Done** button in the top corner to exit back to the song editor or setlist.

<div class="tip-box">
<h4>💡 Performance Tips</h4>
<ul>
<li><strong>Test your scroll speed</strong> before the gig - every song is different!</li>
<li><strong>Use Stage theme</strong> in bright stage lights for maximum readability</li>
<li><strong>Position your iPad</strong> at a comfortable angle about 2-3 feet away</li>
<li><strong>Practice advancing songs</strong> so you can do it smoothly mid-performance</li>
<li><strong>Keep your screen clean</strong> - fingerprints reduce readability on stage</li>
</ul>
</div>

<div class="warning-box">
<h4>⚠️ Battery Management</h4>
<p>Performance mode keeps your screen awake to prevent interruptions. Make sure your iPad is:</p>
<ul>
<li>Fully charged before your gig</li>
<li>Plugged in if playing a long set (3+ hours)</li>
<li>Set to maximum brightness for outdoor/bright venues</li>
</ul>
</div>

</div>

<div class="content-section" id="customization">

## 5. Customization

### Choosing a Theme

GigScroll offers four themes optimized for different lighting conditions:

<div class="feature-box">
<h4>🎨 Available Themes</h4>
<ul>
<li><strong>Light</strong> - Classic light mode, great for practice and well-lit venues</li>
<li><strong>Dark</strong> - Dark mode, easier on the eyes in dim venues</li>
<li><strong>Stage</strong> - High-contrast mode designed for bright stage lights (white text on black background)</li>
<li><strong>Cream</strong> - Warm, vintage-inspired theme with cream background</li>
</ul>
</div>

To change themes:

1. Go to **Settings → Theme**
2. Tap on your preferred theme
3. The change applies immediately

### Selecting a Font

Choose from 5 fonts optimized for readability:

- **System** - Apple's San Francisco font (default, excellent readability)
- **Georgia** - Serif font with classic elegance
- **Helvetica Neue** - Clean, modern sans-serif
- **Courier** - Monospace font, typewriter style
- **Arial Rounded MT Bold** - Friendly, rounded letters

To change the default font:

1. Go to **Settings → Default Font**
2. Tap on your preferred font
3. This font will be used for new songs

### Adjusting Font Size

Font size can be set globally and per-song:

#### Default Font Size (for new songs)

1. Go to **Settings → Default Font Size**
2. Choose a size from 24pt to 72pt
3. Choose whether to apply to existing songs or just new ones

#### Per-Song Font Size

1. Open any song in the Songs tab
2. Use the font size slider to adjust (24-72pt)
3. Changes auto-save

<div class="tip-box">
<h4>💡 Finding Your Perfect Size</h4>
<p>The ideal font size depends on your setup:</p>
<ul>
<li><strong>24-32pt</strong> - Close reading, practice, small iPad</li>
<li><strong>32-44pt</strong> - Standard performance, iPad at arm's length</li>
<li><strong>44-56pt</strong> - Large iPad Pro, standing performance</li>
<li><strong>56-72pt</strong> - Maximum visibility for bright stages or distance viewing</li>
</ul>
</div>

### Scroll Speed Per Song

Each song can have its own scroll speed:

1. Open a song and tap <span class="button-label">PLAY</span>
2. Use the + and - buttons to adjust speed
3. Tap the 💾 button to save that speed for this song

Ballads typically need slower speeds, while uptempo songs need faster scrolling.

</div>

<div class="content-section" id="data-management">

## 6. Data Management

### Export All Songs & Setlists

Create a complete backup of your library:

1. Go to **Settings → Data Management → Export All Songs & Setlists**
2. Choose where to save: Files app, AirDrop, email, cloud storage, etc.
3. A file named `GigScroll-Backup-YYYY-MM-DD.gigscroll` will be created

<div class="feature-box">
<h4>📦 What Gets Exported</h4>
<p>The export file includes:</p>
<ul>
<li>All songs (title, artist, lyrics, font settings, scroll speeds)</li>
<li>All setlists (including song order)</li>
<li>Your settings (theme, default font, default font size)</li>
</ul>
<p>The file is in JSON format but uses the <code>.gigscroll</code> extension so your device knows to open it in GigScroll.</p>
</div>

### Import from File

Restore a backup or import someone else's songs/setlists:

1. Go to **Settings → Data Management → Import from File**
2. Select a `.gigscroll` or `.json` file
3. Review the import preview showing what will be imported
4. Tap <span class="button-label">Import</span>

#### Duplicate Handling

If songs in the import file already exist in your library, GigScroll automatically skips them to prevent duplicates.

### Sharing Individual Setlists

Share a setlist with your band or other performers:

1. Open the setlist
2. Tap the Share button (square with arrow)
3. Choose AirDrop, Messages, Email, or save to Files

When the recipient opens the `.gigscroll` file, it will automatically import the setlist and all its songs into GigScroll!

<div class="tip-box">
<h4>💡 Backup Best Practices</h4>
<ul>
<li><strong>Export weekly</strong> if you're actively building your library</li>
<li><strong>Save to iCloud Drive or Google Drive</strong> for automatic cloud backup</li>
<li><strong>Keep multiple backups</strong> before major gigs</li>
<li><strong>Export before iOS updates</strong> or device changes</li>
<li><strong>Share setlists with your band</strong> so everyone has the same songs</li>
</ul>
</div>

### Restore Purchases

If you purchased GigScroll Pro and need to restore it on a new device:

1. Go to **Settings → Restore Purchases**
2. Sign in with the same Apple ID you used to purchase
3. Your Pro features will be restored

</div>

<div class="content-section" id="pro-features">

## 7. Pro Features

### Free vs Pro

GigScroll is free to try with a limit of **10 songs**. Upgrade to **GigScroll Pro** for unlimited songs and support ongoing development!

<div class="feature-box">
<h4>✨ GigScroll Pro Benefits</h4>
<ul>
<li><strong>Unlimited Songs</strong> - Build a library as large as you need</li>
<li><strong>Unlimited Setlists</strong> - Create as many setlists as you want</li>
<li><strong>Unlimited Imports</strong> - Import any number of songs from backup files</li>
<li><strong>Support Development</strong> - Help fund new features and improvements</li>
<li><strong>One-Time Purchase</strong> - Pay once, keep forever (no subscription)</li>
</ul>
</div>

### Upgrading to Pro

1. Go to **Settings**
2. Tap **⭐ Upgrade to Pro** at the top
3. Review the benefits
4. Tap <span class="button-label">Purchase</span>
5. Complete the purchase with Face ID/Touch ID/Password

### Pro Status Indicator

Once you upgrade, you'll see **"Pro Unlocked ✓"** in Settings, and the upgrade banner will disappear.

</div>

<div class="content-section" id="tips">

## 8. Tips & Tricks

### For Live Performance

- **Practice setlist navigation** - Get comfortable with the Next/Previous buttons before your gig
- **Test lighting conditions** - Try different themes at your venue during soundcheck
- **Position your iPad securely** - Use a music stand or iPad mount
- **Bring a charger** - Performance mode keeps the screen on continuously
- **Have a backup** - Print your setlist or have it on your phone as a fallback
- **Disable notifications** - Turn on Do Not Disturb before performing

### Building Your Library Efficiently

- **Start with your most-played songs** - These get the most benefit from auto-scrolling
- **Use online search first** - It's faster than typing lyrics manually
- **Add songs after practice** - Make it a habit to add new material right away
- **Create setlists by venue** - Saves time when booking repeat gigs
- **Share with your band** - Everyone can have the same library by importing setlists

### Organizing Your Content

- **Use consistent naming** - "Venue Name - Date" for gig-specific setlists
- **Add artist names** - Helps with searching and looks professional
- **Clean up old setlists** - Delete one-time gig setlists after they're done
- **Create master setlists** - "All Country", "All Rock", etc. for quick building

### Maximizing Readability

- **Bigger is better on stage** - Start with 44pt and adjust from there
- **Stage theme for bright lights** - White-on-black has maximum contrast
- **Dark theme for dim venues** - Reduces eye strain in clubs and bars
- **Keep your screen clean** - Smudges kill readability under stage lights
- **Experiment with fonts** - Georgia and Helvetica are very readable

### Speed Optimization

- **Ballads** - Usually need speed around 0.5-1.0x
- **Medium tempo** - Speed around 1.0-1.5x works well
- **Fast songs** - May need 1.5-2.5x or more
- **Spoken word/rap** - Often need higher speeds (2.0-3.0x)
- **Save speeds per song** - Use the 💾 button after you find the perfect speed

<div class="tip-box">
<h4>💡 Pro Musician Tip</h4>
<p>Create a "warmup" setlist with 2-3 throwaway songs to practice your scroll speed and theme choice before the real performance starts. Delete it after the gig!</p>
</div>

</div>

<div class="content-section" id="troubleshooting">

## 9. Troubleshooting

### Lyrics Not Found

**Problem:** Online search can't find lyrics for my song.

**Solutions:**

- Try searching with just the artist name (sometimes this helps)
- Check your spelling of the title and artist
- Try searching for an alternate version (live, acoustic, remix)
- Some songs simply aren't in the databases - add them manually
- Very new songs may not be indexed yet

### Import Not Working

**Problem:** I can't import a backup file.

**Solutions:**

- Make sure the file has `.gigscroll` or `.json` extension
- Verify the file isn't corrupted (re-export if needed)
- Check that you're on the latest version of GigScroll
- Free tier users: Check if importing would exceed the 10-song limit
- Try importing on WiFi instead of cellular (better for large files)

### Scrolling Too Fast/Slow

**Problem:** The auto-scroll isn't matching my song tempo.

**Solutions:**

- Use the + and - buttons to adjust in real-time
- Remember to tap the 💾 button to save your preferred speed
- Each song can have a different scroll speed
- If it's jumping around, try pausing and resuming to reset

### Can't Read Text on Stage

**Problem:** I can't read the lyrics during performance.

**Solutions:**

- Switch to **Stage theme** (highest contrast)
- Increase font size to 52pt or higher
- Increase screen brightness to 100%
- Clean your iPad screen thoroughly
- Move your iPad closer (optimal: 2-3 feet away)
- Angle the screen away from direct stage lights to reduce glare

### App Crashes During Performance

**Problem:** GigScroll crashes or freezes on stage.

**Solutions:**

- Update to the latest version of GigScroll
- Restart your iPad before the gig
- Close other apps to free up memory
- Turn off Background App Refresh for other apps
- Make sure you have at least 1GB of free storage
- As a backup, export your setlist and keep it in Notes app

### Battery Draining Quickly

**Problem:** My iPad battery dies during long sets.

**Solutions:**

- Performance mode keeps the screen on - this is normal
- Bring a charger and plug in during breaks
- Use a battery pack if no outlet is available
- Reduce screen brightness if the venue is dark
- Close all background apps before performing
- Enable Low Power Mode (Settings → Battery)

### Still Need Help?

If you're experiencing issues not covered here, please contact support:

- Email: [support@moonquakemedia.com](mailto:support@moonquakemedia.com)
- Include: iOS version, iPad model, description of the issue
- Screenshots are helpful if possible!

</div>
```

**Step 3: Create Listen2 guide**

Create `src/guides/listen2.md`:
```markdown
---
title: Listen2
slug: listen2
subtitle: Your Complete Guide to Personal Audiobooks
toc:
  - id: getting-started
    title: Getting Started
    short: Getting Started
  - id: library
    title: Managing Your Library
    short: Library
  - id: playback
    title: Playback Controls
    short: Playback
  - id: highlighting
    title: Highlighting Options
    short: Highlighting
  - id: voices
    title: Voices & Languages
    short: Voices
  - id: formats
    title: Supported Formats
    short: Formats
  - id: tips
    title: Tips & Troubleshooting
    short: Help
---

<div class="content-section" id="getting-started">

## 1. Getting Started

### Welcome to Listen2!

Listen2 transforms your documents into personal audiobooks using high-quality, natural-sounding voices. Whether you're reading PDFs, EPUBs, or articles from the web, Listen2 reads them aloud so you can enjoy your content anywhere.

### First Steps

1. **Import your first document** - Tap the + button to import a PDF, EPUB, text file, or paste from your clipboard.
2. **Press play** - That's it! Listen2 comes with a voice pre-installed, so you can start listening right away.
3. **Explore more voices** - Want different voices or languages? Browse and download from dozens of options in the Voices section.

<div class="tip-box">
<h4>💡 First Time Tip</h4>
<p>Listen2 comes with sample documents to help you get started. Try them out to see how the app works before importing your own content!</p>
</div>

</div>

<div class="content-section" id="library">

## 2. Managing Your Library

### Importing Documents

There are several ways to add content to your Listen2 library:

#### From Files

1. Tap the <span class="button-label">+</span> button
2. Choose "Import from Files"
3. Select a PDF, EPUB, text file, or markdown file
4. The document will be added to your library

#### From Clipboard

1. Copy any text from another app (Safari, Mail, Notes, etc.)
2. Open Listen2 and tap the <span class="button-label">+</span> button
3. Choose "Import from Clipboard"
4. Give it a title and it will be saved to your library

<div class="feature-box">
<h4>📋 Clipboard Magic</h4>
<p>Clipboard import is perfect for:</p>
<ul>
<li>Web articles you want to listen to</li>
<li>Emails or messages</li>
<li>Notes and documents from other apps</li>
<li>Any text you can copy!</li>
</ul>
</div>

### Organizing Your Library

Your library shows all imported documents with their progress. You can:

- **Search** - Use the search bar to find documents by title
- **Sort** - Sort by title, date added, or last read
- **Delete** - Swipe left on any document to delete it

### Progress Tracking

Listen2 automatically saves your reading position. When you return to a document, you'll pick up right where you left off. Your progress is shown on each document in the library view.

</div>

<div class="content-section" id="playback">

## 3. Playback Controls

### Basic Controls

- **Play/Pause** - Start or stop reading
- **Speed** - Adjust reading speed (0.5x to 2.0x)
- **Skip Forward/Back** - Jump by sentence or paragraph

### Navigation

While listening, you can:

- **Tap any word** to jump to that position
- **Drag the progress bar** to scrub through the document
- **Use the skip buttons** to move by sentence

### Background Playback

Listen2 continues playing when you switch to other apps or lock your screen. Use the lock screen controls or Control Center to pause, play, or skip.

<div class="tip-box">
<h4>💡 Pro Tip</h4>
<p>Adjust the reading speed to match your comprehension. Many users find 1.2x to 1.5x comfortable for casual listening, while 1.0x works better for dense or technical content.</p>
</div>

</div>

<div class="content-section" id="highlighting">

## 4. Highlighting Options

### Visual Tracking

Listen2 highlights text as it reads, helping you follow along visually. You can customize how highlighting works:

#### Highlighting Levels

- **Word** - Each word is highlighted as it's spoken (default)
- **Sentence** - The current sentence is highlighted
- **Paragraph** - The current paragraph is highlighted
- **Off** - No visual highlighting (audio only)

<div class="feature-box">
<h4>⚡ Automatic Optimization</h4>
<p>On older devices with less available memory, Listen2 automatically uses sentence-level highlighting instead of word-level. This ensures smooth performance while still providing visual tracking.</p>
</div>

### Choosing a Highlighting Level

To change highlighting:

1. Open Settings
2. Find "Highlighting Level"
3. Choose your preferred option

<div class="tip-box">
<h4>💡 When to Use Each Level</h4>
<ul>
<li><strong>Word</strong> - Best for language learning or following along closely</li>
<li><strong>Sentence</strong> - Good balance of tracking and readability</li>
<li><strong>Paragraph</strong> - Best for skimming or light reading</li>
<li><strong>Off</strong> - When listening without looking at the screen</li>
</ul>
</div>

</div>

<div class="content-section" id="voices">

## 5. Voices & Languages

### Included Voice

Listen2 comes with one high-quality voice pre-installed, so you can start listening immediately without any setup.

### Downloading More Voices

Listen2 uses Piper voices, which are high-quality, natural-sounding text-to-speech voices. To browse and download additional voices:

1. Go to the Voices section
2. Browse by language or search for a specific voice
3. Tap a voice to preview it
4. Tap Download to add it to your device

<div class="feature-box">
<h4>🌍 Available Languages</h4>
<p>Listen2 supports voices in dozens of languages including:</p>
<p>English, Spanish, French, German, Italian, Portuguese, Dutch, Polish, Russian, Chinese, Japanese, Korean, Arabic, Hindi, and many more!</p>
</div>

### Managing Downloaded Voices

- Downloaded voices are stored locally on your device
- You can delete voices you no longer need to save space
- Each voice is typically 15-50 MB depending on quality

### Switching Voices

To change the voice for reading:

1. Open the document you want to read
2. Tap the voice selector
3. Choose from your downloaded voices

<div class="tip-box">
<h4>💡 Voice Selection Tip</h4>
<p>Try different voices to find one that works best for your content. Some voices work better for fiction, while others are clearer for technical or educational content.</p>
</div>

</div>

<div class="content-section" id="formats">

## 6. Supported Formats

### Document Formats

Listen2 can import and read the following formats:

<div class="feature-box">
<h4>📄 Supported File Types</h4>
<ul>
<li><strong>PDF</strong> - Portable Document Format files</li>
<li><strong>EPUB</strong> - Electronic publication format (common for ebooks)</li>
<li><strong>TXT</strong> - Plain text files</li>
<li><strong>MD</strong> - Markdown files (converted to plain text)</li>
<li><strong>Clipboard</strong> - Any text you can copy</li>
</ul>
</div>

### Format Notes

- **PDF** - Works best with text-based PDFs. Scanned documents may not work well.
- **EPUB** - Full support for standard EPUB files
- **Markdown** - Formatting is stripped and converted to readable text

<div class="warning-box">
<h4>⚠️ Scanned PDFs</h4>
<p>PDFs that are scanned images (rather than text) may not work well with Listen2. For best results, use PDFs with selectable text.</p>
</div>

</div>

<div class="content-section" id="tips">

## 7. Tips & Troubleshooting

### Getting the Best Experience

- **Download voices on WiFi** - Voice files can be large, so download them when connected to WiFi
- **Use headphones** - For the best audio quality, especially in noisy environments
- **Adjust speed gradually** - Start at 1.0x and slowly increase as you get comfortable
- **Use sentence highlighting** - If word highlighting feels too fast

### Common Issues

#### Voice sounds choppy or delayed

- Close other apps to free up memory
- Try switching to sentence-level highlighting
- Restart the app

#### Document won't import

- Make sure the file is a supported format
- Check that the file isn't corrupted
- Try copying the text and using clipboard import instead

#### Highlighting is out of sync

- This can happen with unusual document formatting
- Try switching to sentence or paragraph highlighting
- The audio will still work correctly

### Reading Web Articles

Listen2 doesn't have a built-in web browser, but here are some easy ways to get web content into the app:

#### Quick Method: Create a Shortcut

Create a reusable shortcut that works from any webpage:

1. **Create the Shortcut:**
   - Open the Shortcuts app
   - Create a new shortcut with these actions: "Get Article using Safari Reader" → "Copy to Clipboard"
   - Name it something like "Copy Article Text"

2. **Use the Shortcut:**
   - When on any webpage, tap the Share button
   - Select your new shortcut
   - Open Listen2 and use clipboard import

#### PDF Trick for Stubborn Pages

If Reader Mode isn't available:

1. Tap the **Share** button in Safari
2. Select **Print**
3. On the print preview, **pinch out** (two fingers apart) on the page preview to convert it to a PDF
4. Tap and hold to select text, use the grab handles to **Select All**, then **Copy**
5. Open Listen2 and use clipboard import

### Still Need Help?

Contact us at [support@moonquakemedia.com](mailto:support@moonquakemedia.com) with:

- Your device model and iOS version
- A description of the issue
- Steps to reproduce the problem

</div>
```

**Step 4: Test build**

Run: `npm run build`
Expected: `_site/guides/gigscroll/index.html` and `_site/guides/listen2/index.html` created

**Step 5: Commit**

```bash
git add src/guides/
git commit -m "feat: create GigScroll and Listen2 user guides"
```

---

## Task 10: Create Privacy Policy Layout and Pages

**Files:**
- Create: `src/_includes/layouts/privacy.njk`
- Create: `src/legal/legal.json`
- Create: `src/legal/gigscroll-privacy.md`
- Create: `src/legal/listen2-privacy.md`

**Step 1: Create privacy layout**

Create `src/_includes/layouts/privacy.njk`:
```njk
---
layout: layouts/base.njk
bodyClass: bg-gray-100 p-5
---

<div class="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-md">
    <a href="/apps/{{ slug }}/" class="inline-block mb-8 text-primary-500 font-medium hover:underline">&larr; Back to {{ appName }}</a>

    <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Privacy Policy</h1>
    <p class="text-gray-500 mb-10">Last updated: {{ lastUpdated }}</p>

    <div class="highlight-box mb-8">
        <p><strong>Summary:</strong> {{ summary }}</p>
    </div>

    <div class="prose prose-lg max-w-none">
        {{ content | safe }}
    </div>

    <p class="mt-10 text-center text-gray-500">
        <a href="/apps/{{ slug }}/" class="text-primary-500 hover:underline">Back to {{ appName }}</a>
    </p>
</div>
```

**Step 2: Create legal directory data**

Create `src/legal/legal.json`:
```json
{
  "layout": "layouts/privacy.njk",
  "permalink": "/legal/{{ page.fileSlug }}/"
}
```

**Step 3: Create GigScroll privacy policy**

Create `src/legal/gigscroll-privacy.md`:
```markdown
---
title: Privacy Policy - GigScroll
slug: gigscroll
appName: GigScroll
lastUpdated: October 13, 2025
summary: GigScroll does not collect, store, or share any of your personal data. All your songs and setlists are stored locally on your device. We believe your creative work should stay private.
---

## Introduction

Moonquake Media ("we", "our", or "us") operates the GigScroll mobile application (the "App"). This Privacy Policy explains how we handle information when you use our App.

## Information We Collect

### Personal Data

**We do not collect any personal data.**

GigScroll does not require you to create an account, provide an email address, or share any personal information. The app works entirely offline and does not collect or transmit any data to our servers.

### Usage Data

**We do not collect usage data or analytics.**

The app does not track how you use it, which features you access, or any other usage patterns. Your creative workflow remains completely private.

## Data Storage

### Local Storage Only

All data created in GigScroll is stored locally on your device using iOS Core Data:

- **Songs:** Titles, artists, lyrics, and formatting preferences
- **Setlists:** Your organized song collections
- **Settings:** Theme preferences, font choices, and app configurations

This data never leaves your device unless you explicitly export it using the app's export features.

### iCloud Backup

If you have iCloud Backup enabled on your device, your GigScroll data may be included in your device's automatic backups. This is handled entirely by Apple's iCloud service and is subject to [Apple's Privacy Policy](https://www.apple.com/legal/privacy/).

## Third-Party Services

### Online Search Features (Optional)

When you use the optional online search features, the app makes requests to third-party APIs:

**Lyrics Search:** When searching for song lyrics, the app queries:

- **ChartLyrics API** ([www.chartlyrics.com](http://www.chartlyrics.com)) - Primary lyrics source
- **Lyrics.ovh API** ([lyricsovh.docs.apiary.io](https://lyricsovh.docs.apiary.io)) - Backup lyrics source when ChartLyrics is unavailable

**Song Autocomplete:** When typing in the search bar, the app queries:

- **iTunes Search API** ([Apple iTunes Search](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/iTuneSearchAPI/)) - For song title and artist suggestions

**What's sent:** Only the song title and/or artist name you enter

**What's received:** Publicly available song data and lyrics

**No tracking:** These are public APIs that do not require authentication or track individual users

### Apple In-App Purchase

When you purchase the Pro unlock, the transaction is processed entirely by Apple through the App Store. We do not collect, store, or have access to any payment information. Your purchase is linked to your Apple ID and managed by Apple.

For information about how Apple handles your payment data, please see [Apple's Privacy Policy](https://www.apple.com/legal/privacy/).

## Data Export and Sharing

GigScroll provides features to export your data:

- **Export songs/setlists:** You can export your songs and setlists as .gigscroll files (JSON format) to share with other devices or backup
- **Share functionality:** Uses iOS native share sheet to export files - you control where exported data goes

We do not receive or have access to any data you export. All export operations happen locally on your device.

## Children's Privacy

GigScroll is rated 13+ due to the ability to search for and view song lyrics that may contain mature content. While we do not collect any data from users of any age, parents should be aware that the app allows searching for lyrics from any publicly available song, which may include explicit or mature content.

Since we do not collect any data, there are no special considerations for children's privacy beyond the protections already described in this policy.

## Data Security

Since all data is stored locally on your device and we don't collect any information, the security of your data depends on your device's security measures:

- Use a strong device passcode
- Enable Touch ID/Face ID
- Keep your iOS updated
- Regularly backup your device

## Your Rights

Since we don't collect any data, there's nothing for us to access, modify, or delete. You have complete control over your data:

- **Access:** All your data is accessible within the app
- **Delete:** Delete songs/setlists within the app, or uninstall the app to remove all data
- **Export:** Export your data anytime using the built-in export features
- **Control:** Your data never leaves your device without your explicit action

## Changes to This Policy

We may update this Privacy Policy from time to time. If we make any material changes, we will notify you by:

- Updating the "Last updated" date at the top of this policy
- Posting an in-app notification (for significant changes)

Continued use of the app after changes constitutes acceptance of the updated policy.

## California Privacy Rights

Under California Civil Code Section 1798.83, California residents have the right to request information about sharing personal information with third parties for marketing purposes.

**Our answer:** We don't collect any personal information, so there's nothing to share with third parties.

## GDPR Compliance (European Users)

For users in the European Economic Area (EEA):

- **Data Controller:** N/A - we don't control any data
- **Legal Basis:** N/A - no data processing occurs
- **Data Transfers:** N/A - no data leaves your device
- **Your Rights:** Fully maintained since you have complete control of local data

## Contact Us

If you have any questions about this Privacy Policy or GigScroll's data practices, please contact us:

**Email:** [support@moonquakemedia.com](mailto:support@moonquakemedia.com)

**Website:** [moonquakemedia.com](https://moonquakemedia.com)

**Developer:** Moonquake Media

## Conclusion

At Moonquake Media, we believe that your creative work is yours alone. GigScroll is designed to be a private, offline-first tool that puts you in complete control of your data. We don't collect it, we don't see it, and we don't want it. Your songs, setlists, and creative process stay on your device, where they belong.
```

**Step 4: Create Listen2 privacy policy**

Create `src/legal/listen2-privacy.md`:
```markdown
---
title: Privacy Policy - Listen2
slug: listen2
appName: Listen2
lastUpdated: December 6, 2025
summary: Listen2 does not collect, store, or share any of your personal data. All your documents, reading progress, and preferences are stored locally on your device. The only network activity is downloading voice files, which does not require any personal information.
---

## Introduction

Moonquake Media ("we", "our", or "us") operates the Listen2 mobile application (the "App"). This Privacy Policy explains how we handle information when you use our App.

We are committed to protecting your privacy. Listen2 is designed as a privacy-first application that processes everything locally on your device.

## Information We Collect

### Personal Data

**We do not collect any personal data.**

Listen2 does not require you to create an account, provide an email address, or share any personal information. The app works entirely offline (except for voice downloads) and does not collect or transmit any personal data to our servers.

### Usage Data

**We do not collect usage data or analytics.**

The app does not track how you use it, which documents you read, what voices you download, or any other usage patterns. Your reading habits remain completely private.

### Document Content

**We never access your documents.**

All documents you import into Listen2 are stored locally on your device. We cannot see, access, or read any of your content. Text-to-speech processing happens entirely on your device.

## Data Storage

### Local Storage Only

All data created or imported in Listen2 is stored locally on your device:

- **Documents:** PDFs, EPUBs, text files, and clipboard imports
- **Reading Progress:** Your position in each document
- **Voice Files:** Downloaded TTS voice models
- **Settings:** Preferences like highlighting level and reading speed

This data never leaves your device unless you explicitly export it.

### iCloud Backup

If you have iCloud Backup enabled on your device, your Listen2 data may be included in your device's automatic backups. This is handled entirely by Apple's iCloud service and is subject to [Apple's Privacy Policy](https://www.apple.com/legal/privacy/).

## Network Usage

### Voice Downloads

The only network activity in Listen2 is downloading voice files. When you download a voice:

- **What's sent:** A request for the specific voice file (no personal information)
- **What's received:** The voice model file
- **Source:** Voices are downloaded from public Piper TTS voice repositories

Voice downloads do not require authentication and do not track individual users.

### No Other Network Activity

Listen2 does not:

- Send analytics or telemetry data
- Connect to advertising networks
- Sync data to cloud services
- Make any network requests during normal use

## Third-Party Services

### Piper TTS Voices

Listen2 uses Piper text-to-speech voices, which are open-source voice models. When downloading voices, your device connects to publicly available voice repositories. No personal information is transmitted during this process.

### Apple App Store

When you purchase Listen2, the transaction is processed entirely by Apple through the App Store. We do not collect, store, or have access to any payment information. Your purchase is linked to your Apple ID and managed by Apple.

For information about how Apple handles your payment data, please see [Apple's Privacy Policy](https://www.apple.com/legal/privacy/).

## Data We Do NOT Collect

To be completely clear, Listen2 does NOT collect:

| Data Type | Collected? |
|-----------|-----------|
| Name, email, or contact info | No |
| Device identifiers | No |
| Location data | No |
| Usage analytics | No |
| Document content | No |
| Reading history | No |
| Crash reports | No |
| Advertising identifiers | No |

## Children's Privacy

Listen2 does not collect any data from users of any age. Since we do not collect personal information, there are no special considerations for children's privacy beyond the protections already described in this policy.

Parents should be aware that Listen2 can read any text content imported by the user, which may include content of any nature depending on what is imported.

## Data Security

Since all data is stored locally on your device and we don't collect any information, the security of your data depends on your device's security measures:

- Use a strong device passcode
- Enable Face ID or Touch ID
- Keep your iOS updated
- Regularly backup your device

## Your Rights and Control

Since we don't collect any data, there's nothing for us to access, modify, or delete. You have complete control over your data:

- **Access:** All your data is accessible within the app
- **Delete:** Delete documents within the app, or uninstall the app to remove all data
- **Export:** You can export or share your documents at any time
- **Control:** Your data never leaves your device without your explicit action

## California Privacy Rights (CCPA)

Under the California Consumer Privacy Act, California residents have specific rights regarding their personal information.

**Our status:** We don't collect any personal information, so there's nothing to disclose, delete, or opt out of. We do not sell personal information because we don't collect it.

## European Privacy Rights (GDPR)

For users in the European Economic Area (EEA):

- **Data Controller:** N/A - we don't control any personal data
- **Legal Basis:** N/A - no personal data processing occurs
- **Data Transfers:** N/A - no personal data leaves your device
- **Your Rights:** Fully maintained since you have complete control of your local data

## Changes to This Policy

We may update this Privacy Policy from time to time. If we make any material changes, we will notify you by:

- Updating the "Last updated" date at the top of this policy
- Posting an in-app notification (for significant changes)

Continued use of the app after changes constitutes acceptance of the updated policy.

## Contact Us

If you have any questions about this Privacy Policy or Listen2's privacy practices, please contact us:

**Email:** [support@moonquakemedia.com](mailto:support@moonquakemedia.com)

**Website:** [moonquakemedia.com](https://moonquakemedia.com)

**Developer:** Moonquake Media

## Conclusion

At Moonquake Media, we believe that what you read is your business alone. Listen2 is designed as a completely private, offline-first application. We don't collect your data, we don't track your reading habits, and we don't want to. Your documents, your progress, and your preferences stay on your device, where they belong.
```

**Step 5: Test build**

Run: `npm run build`
Expected: Privacy pages created at `_site/legal/gigscroll-privacy/index.html` and `_site/legal/listen2-privacy/index.html`

**Step 6: Commit**

```bash
git add src/_includes/layouts/privacy.njk src/legal/
git commit -m "feat: create privacy policy layout and pages"
```

---

## Task 11: Copy Static Assets

**Files:**
- Move: `images/*` to `src/images/`

**Step 1: Copy images**

Run:
```bash
cp -r images/* src/images/
```

**Step 2: Verify images copied**

Run: `ls src/images/`
Expected: All image files present

**Step 3: Test full build**

Run: `npm run build`
Expected: Complete site built in `_site/`

**Step 4: Commit**

```bash
git add src/images/
git commit -m "feat: copy images to src directory"
```

---

## Task 12: Add GitHub Actions Workflow

**Files:**
- Create: `.github/workflows/deploy.yml`

**Step 1: Create workflow file**

Create `.github/workflows/deploy.yml`:
```yaml
name: Build and Deploy

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: "20"
          cache: "npm"

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Setup Pages
        uses: actions/configure-pages@v4

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: "_site"

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

**Step 2: Commit**

```bash
git add .github/workflows/deploy.yml
git commit -m "feat: add GitHub Actions deployment workflow"
```

---

## Task 13: Final Cleanup

**Files:**
- Delete old HTML files (keep as backup first)

**Step 1: Test local development server**

Run: `npm run dev`
Expected: Site runs at http://localhost:8080

**Step 2: Verify all pages work**

Check these URLs:
- http://localhost:8080/ (homepage)
- http://localhost:8080/apps/gigscroll/ (app page)
- http://localhost:8080/apps/listen2/ (app page)
- http://localhost:8080/guides/gigscroll/ (guide)
- http://localhost:8080/guides/listen2/ (guide)
- http://localhost:8080/legal/gigscroll-privacy/ (privacy)
- http://localhost:8080/legal/listen2-privacy/ (privacy)

**Step 3: Backup and remove old HTML files**

Run:
```bash
mkdir -p old-html-backup
mv index.html gigscroll.html listen2.html gigscroll-guide.html listen2-guide.html gigscroll-privacy.html listen2-privacy.html old-html-backup/
```

**Step 4: Update .gitignore**

Add `old-html-backup/` to .gitignore

**Step 5: Final commit**

```bash
git add .
git commit -m "chore: migrate to Eleventy + Tailwind, remove old HTML files"
```

---

## Summary

| Task | Description | Files Created |
|------|-------------|---------------|
| 1 | Initialize project | package.json, .gitignore |
| 2 | Configure Eleventy | .eleventy.js, site.json |
| 3 | Configure Tailwind | tailwind.config.js, postcss.config.js, main.css |
| 4 | Base layout | base.njk, footer.njk |
| 5 | Homepage | index.njk, apps.json |
| 6 | App layout | app.njk, lightbox.njk |
| 7 | App pages | gigscroll.md, listen2.md |
| 8 | Guide layout | guide.njk |
| 9 | Guide pages | gigscroll.md, listen2.md |
| 10 | Privacy pages | privacy.njk, gigscroll-privacy.md, listen2-privacy.md |
| 11 | Static assets | images/ |
| 12 | GitHub Actions | deploy.yml |
| 13 | Cleanup | Remove old HTML |

**Total: 13 tasks with ~65 individual steps**
