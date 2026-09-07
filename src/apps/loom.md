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
title: "LOOM — A Loop Station That Plays Itself"
tagline: A loop station that plays itself
description: "LOOM is a macOS live-looping instrument. Record and overdub on five tracks, then draw those same commands on a timeline so the song presses its own buttons while you play."
ogImage: /assets/loom/shot-looper.png
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
