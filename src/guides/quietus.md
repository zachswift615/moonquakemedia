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
  - id: playback
    title: Playback & Controls
    short: Controls
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

- **Five noise colors** — choose the spectral character of each voice (see below)
- **Multi-mode filter** — Low-Pass, High-Pass, Band-Pass, and Notch with 12 dB or 24 dB slopes
- **Filter resonance** — shape the spectral character of each voice
- **Optional dedicated high-pass filter** — remove low-end rumble independently
- **Constant-power stereo panning** — maintains perceived loudness across the stereo field
- **Per-voice volume control** — independent level management

### Noise Colors

Each voice generates one of five noise colors, each a true real-time spectral generator (not a static filter applied to white noise). Pick a color with the **Noise Color** control on the Sound tab:

- **White** — bright, full-spectrum hiss (high-quality noise via the Box-Muller algorithm)
- **Pink** — balanced and natural, with softer highs (−3 dB/octave)
- **Brown** — deep, warm rumble with heavy low end (−6 dB/octave)
- **Blue** — airy, with high-frequency emphasis (+3 dB/octave)
- **Violet** — sharp, sibilant top end (+6 dB/octave)

### Modulation Matrix

Six independent LFOs (2 per texture voice, 2 for binaural beats) bring your sound to life. Each LFO has its own **rate**, **depth**, **waveform**, and a selectable **destination** — so movement can go anywhere, not just the filter cutoff. Choose from 6 waveform shapes: Sine, Triangle, Sawtooth, Ramp, Square, and Sample & Hold.

- **Voice LFO destinations** — Filter Cutoff, HPF Cutoff, Resonance, Level, Pan, or the *other LFO's rate* (cross-modulation)
- **Binaural LFO destinations** — Base Frequency, Beat Frequency, Level, or the other LFO's rate

Point two LFOs at different targets for rich, organic motion — for example, one slowly sweeping the filter while another gently auto-pans the texture across the stereo field. Modulation layers cleanly with Journey automation: the Journey moves a parameter's center while the LFO wiggles around it.

### Effects

- **Stereo ping-pong delay** — cross-feedback for spatial depth (50–2000ms)
- **Lookahead limiter** — professional mastering-quality loudness protection with 5ms lookahead

</div>

<div class="content-section" id="binaural-beats">

## 3. Binaural Beats

### How They Work

Binaural beats play slightly different frequencies in each ear, and your brain perceives a "beat" at the difference frequency. Quietus generates true binaural beats with a base frequency range of 100–400 Hz and beat frequencies from 0.5–40 Hz.

### Brainwave States

- **Delta (0.5–4 Hz)** — associated with sleep
- **Theta (4–8 Hz)** — associated with meditation
- **Alpha (8–12 Hz)** — associated with relaxation
- **Beta (12–30 Hz)** — associated with focus
- **Gamma (30–40 Hz)** — associated with alertness

### Modulating the Beats

Binaural beats have **two LFOs** of their own. Route each one to the **base frequency**, the **beat frequency**, the **level**, or the other LFO's rate to keep the entrainment gently evolving rather than static — subtle drift that prevents the tone from feeling fixed.

Use headphones for the full binaural effect; speakers cannot produce the necessary per-ear separation.

*Binaural beats are not a medical treatment. If you have epilepsy or a seizure disorder, consult your doctor before use.*

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

<div class="content-section" id="playback">

## 6. Playback & Controls

### Mix with Other Audio

By default, Quietus **mixes with other audio** — it plays underneath music, podcasts, and videos, so you can blend a noise bed under whatever else you're listening to. In this mode the other app keeps the system playback controls.

Turn **Mix with Other Audio** off (Settings → Audio) to play Quietus **solo**. In solo mode Quietus takes over the system Now-Playing controls, so you get play, pause, and stop on the **Lock Screen**, in **Control Center**, and from your **AirPods** or other Bluetooth remotes. You can switch modes anytime — even mid-playback — and the change takes effect without restarting your sound.

### Siri Shortcuts & the Action Button

Quietus provides Shortcuts actions you can trigger by voice, from the Shortcuts app, Spotlight, Focus automations, or the Action Button on supported iPhones:

- **Start**, **Stop**, and **Toggle** playback
- **Play Preset** — choose any of your saved presets
- **Start Journey**

Say "Hey Siri, start Quietus," or assign **Play Preset** to your Action Button for one-press ambient sound. You can also have a Sleep Focus automation start your wind-down preset automatically each night.

</div>

<div class="content-section" id="tips">

## 7. Tips & Tricks

- **Layer voices for depth** — use one voice for low-frequency warmth and another for high-frequency texture
- **Pick the right color** — Brown is great for deep sleep and masking, Pink for a natural balanced bed, White for the brightest masking, and Blue or Violet for airy, present textures
- **Build a modulation matrix** — point one LFO at the filter cutoff for a slow sweep and the second at Pan for gentle auto-panning; two destinations create far more life than stacking both on one target
- **Use slow LFOs** — rates below 0.1 Hz create subtle, evolving movement that prevents listener fatigue
- **Program a sleep journey** — start with alpha-range binaural beats, transition to delta over 60–90 minutes, then fade to silence
- **Hands-free start** — assign a preset to your Action Button or a Siri phrase so you can start your wind-down without unlocking your phone
- **Headphones for binaural** — binaural beats require headphones to work; speakers blend the channels and eliminate the effect
- **Safe listening** — use moderate volume levels, especially for extended sessions. The lookahead limiter protects against peaks but doesn't replace responsible volume management

</div>
