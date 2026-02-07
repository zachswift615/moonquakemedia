---
title: Quietus
slug: quietus
subtitle: Your Complete Guide to Ambient Sound Design
toc:
  - id: getting-started
    title: Getting Started
    short: Getting Started
  - id: sound-engine
    title: Sound Engine
    short: Sound
  - id: binaural-beats
    title: Binaural Beats
    short: Binaural
  - id: journeys
    title: Journey Automation
    short: Journeys
  - id: presets
    title: Presets
    short: Presets
  - id: tips
    title: Tips & Tricks
    short: Tips
---

<div class="content-section" id="getting-started">

## 1. Getting Started

### Welcome to Quietus!

Quietus is a professional-grade ambient sound generator that creates real-time parametric audio with binaural beats and journey automation. Unlike apps that loop pre-recorded files, Quietus generates all sound mathematically — meaning infinite, never-repeating soundscapes that evolve over time.

### First Launch

Open Quietus and you'll land on the **Presets** tab. Try loading a factory preset to hear what the engine can do, then explore the **Sound** tab to tweak parameters and make it your own.

### Navigation

Quietus uses a tab-based interface:

- **Presets** — Browse, search, and manage your sound presets
- **Sound** — Control the synthesis engine, filters, and effects in real time
- **Journey** — Program time-based automation for evolving soundscapes
- **Settings** — Master volume, preferences, and app info

</div>

<div class="content-section" id="sound-engine">

## 2. Sound Engine

### Dual-Voice Architecture

Quietus features two independent texture voices that can be layered, panned, and filtered independently. Each voice offers:

- **Gaussian white noise generation** — high-quality noise via the Box-Muller algorithm
- **Multi-mode filter** — Low-Pass, High-Pass, Band-Pass, and Notch with 12 dB or 24 dB slopes
- **Filter resonance** — shape the spectral character of each voice
- **Optional dedicated high-pass filter** — remove low-end rumble independently
- **Constant-power stereo panning** — maintains perceived loudness across the stereo field
- **Per-voice volume control** — independent level management

### LFO Modulation

Five independent LFOs (2 per voice + 1 for binaural beats) modulate filter cutoff to create evolving, breathing textures. Choose from 6 waveform shapes: Sine, Triangle, Sawtooth, Ramp, Square, and Sample & Hold.

### Effects

- **Stereo ping-pong delay** — cross-feedback for spatial depth (50–2000ms)
- **Lookahead limiter** — professional mastering-quality loudness protection with 5ms lookahead

</div>

<div class="content-section" id="binaural-beats">

## 3. Binaural Beats

### How They Work

Binaural beats play slightly different frequencies in each ear, and your brain perceives a "beat" at the difference frequency. Quietus generates true binaural beats with a base frequency range of 100–400 Hz and beat frequencies from 0.5–40 Hz.

### Brainwave States

- **Delta (0.5–4 Hz)** — Deep sleep
- **Theta (4–8 Hz)** — Deep meditation
- **Alpha (8–12 Hz)** — Relaxation and creativity
- **Beta (12–30 Hz)** — Focus and alertness
- **Gamma (30–40 Hz)** — Peak cognitive performance

Use headphones for the full binaural effect — speakers cannot produce the necessary per-ear separation.

</div>

<div class="content-section" id="journeys">

## 4. Journey Automation

### Overview

Journeys let you program your sound to evolve over time. Define waypoints at specific time points, set parameter values, and let the journey system transition between them automatically.

### Interpolation Curves

Five curve types control how parameters transition between waypoints:

- **Linear** — constant-rate change
- **Ease-In** — starts slow, accelerates
- **Ease-Out** — starts fast, decelerates
- **Ease-In-Out** — smooth acceleration and deceleration
- **Step** — instant jump at the waypoint

### End Behaviors

When a journey reaches its final waypoint:

- **Fade Out** — gradually reduce volume to silence (configurable duration)
- **Continue** — hold the final parameter values indefinitely
- **Stop** — stop audio playback
- **Loop** — restart the journey from the beginning

### Composer Mode (Touch Override)

During an active journey, grab any slider to temporarily override the automated value. Release it and the parameter smoothly returns to the journey's current value — like autopilot with manual override.

</div>

<div class="content-section" id="presets">

## 5. Presets

### Saving and Loading

Save your complete sound configuration as a preset — every parameter is captured, including any embedded journey. Organize presets into 6 categories: Focus, Sleep, Meditation, Relaxation, Creativity, and Custom.

### AI Preset Art

On supported devices (iOS 18.1+ / macOS 15.1+), use Apple's Image Playground to generate unique artwork for each preset. Choose from 6 themes, 6 moods, and 8 visual motifs for 288 possible combinations. Preset names are abstracted on-device for privacy before image generation.

### Import and Export

Share individual presets as `.quietuspreset` files or bundles as `.quietuspack` files via the system share sheet.

</div>

<div class="content-section" id="tips">

## 6. Tips & Tricks

- **Layer voices for depth** — use one voice for low-frequency warmth and another for high-frequency texture
- **Use slow LFOs** — rates below 0.1 Hz create subtle, evolving movement that prevents listener fatigue
- **Program a sleep journey** — start with alpha-range binaural beats for relaxation, transition to delta for deep sleep over 60–90 minutes, then fade to silence
- **Headphones for binaural** — binaural beats require headphones to work; speakers blend the channels and eliminate the effect
- **Safe listening** — use moderate volume levels, especially for extended sessions. The lookahead limiter protects against peaks but doesn't replace responsible volume management

</div>
