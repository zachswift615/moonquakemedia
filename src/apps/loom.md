---
# LOOM — landing page.
#
# Authored the way the Listen2 page is: a bespoke full-page layout under
# src/_includes/layouts/, selected here. The layout is self-contained (the
# design was exported as static HTML), so this file carries no body — only
# the frontmatter base.njk needs for <title>, meta and Open Graph.
#
# The permalink is the one deviation from src/apps/apps.json's default of
# /apps/{{ page.fileSlug }}/: the owner asked for moonquakemedia.com/loom.
layout: layouts/loom.njk
permalink: /loom/
slug: loom
title: "LOOM: A Loop Station That Plays Itself"
# The whole <title>, written for search results: what it is, for what, and the three things
# nothing else in the category has together. No em dash, by the owner's ruling (2026-10-01).
seoTitle: "LOOM: Live Looper for Mac with Synth, Drums and Arranger"
tagline: A loop station that plays itself
# Kept under ~155 characters, which is what a search result shows before it cuts.
description: "LOOM is a live looper for Mac with a synth, drum machine and sampler, and an arrange view that plays the looper for you. Free 14-day trial. Works offline."
# The link-preview card, designed at 1200 x 630 (docs/marketing/claude-design-seo-assets-prompt.md
# in the LOOM repository). shot-looper.png was the card before it and stays where it is: platforms
# cache an og:image by URL, and the structured data still lists it as a screenshot.
ogImage: /images/og-loom.png
ogImageWidth: 1200
ogImageHeight: 630
ogImageAlt: "LOOM, a live looper for Mac: a loop station that plays itself, beside its track rings showing PLAY, DUB and REC"
faviconSvg: /assets/loom/loom-favicon.svg
favicon16: /assets/loom/favicon-16.png
favicon: /assets/loom/favicon-32.png
appleTouchIcon: /assets/loom/apple-touch-icon.png
themeColor: "#0B0C0E"
# LOOM is a macOS app. It has no App Store listing, so base.njk must not
# advertise one — without this the page would carry the site's default
# iOS smart-app-banner, which points at a different product entirely.
appStoreId: false
# This page self-hosts the two families it uses (see layouts/loom.njk), so it
# opts out of base.njk's site-wide Inter link to fonts.googleapis.com — a
# third-party request for a font the design never draws with. Every other page
# is unaffected.
selfHostedFonts: true
---
