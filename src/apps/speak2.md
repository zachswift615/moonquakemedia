---
title: Speak2
slug: speak2
tagline: Local voice dictation for macOS with AI-powered transcription
description: "Speak2 is a macOS menu bar app for voice dictation. Hold a key, speak, and your words appear instantly in any app. 100% on-device, private, no cloud."
status: available
appIcon: /images/Speak2AppIcon.png
downloadUrl: https://github.com/zachswift615/speak2/releases/latest
features:
  - icon: "mic"
    title: Hold-to-Speak
    description: Hold a key to record, release to transcribe and paste into any app
  - icon: "cpu"
    title: Multiple AI Models
    description: Choose from several WhisperKit models to balance speed and accuracy
  - icon: "wifi-off"
    title: 100% On-Device
    description: All processing happens locally — nothing leaves your Mac
  - icon: "type"
    title: Instant Paste
    description: Transcribed text is pasted directly into your active text field
  - icon: "sparkles"
    title: AI Cleanup
    description: Optional AI-powered text cleanup for punctuation, formatting, and grammar
  - icon: "book-open"
    title: Pronunciation Dictionary
    description: Teach Speak2 how to handle names, jargon, and domain-specific terms
---

## What is Speak2?

Speak2 is a macOS menu bar application that brings fast, private voice dictation to your entire system. Hold a key, speak naturally, and your words are transcribed and pasted into whatever app you are using — a text editor, email client, chat window, or anything else that accepts text input.

Everything runs on your Mac. Speak2 uses WhisperKit, Apple's optimized implementation of OpenAI's Whisper speech recognition model, to transcribe your voice with high accuracy. No audio is sent to any server. No account is required. No internet connection is needed after the initial model download.

### Key Features

**Multiple Model Options** — Choose from several Whisper model sizes to find the right balance between speed and accuracy for your hardware. Smaller models transcribe faster; larger models handle accents, technical vocabulary, and noisy environments better.

**Streaming Transcription** — See your words appear in real time as you speak, with confirmed and unconfirmed text displayed in a floating overlay. The final transcription is pasted when you release the key.

**AI Text Cleanup** — Optionally run your transcription through a local language model to clean up punctuation, fix grammar, and format the text before it is pasted.

**Pronunciation Dictionary** — Add custom entries for names, acronyms, and specialized terms that the default model might misrecognize. If Whisper keeps hearing "Siri" when you say "Serie," you can fix that.

**Menu Bar Living** — Speak2 lives in your menu bar and launches at login. No dock icon, no windows to manage. It is always ready when you need it.

### Privacy

Speak2 records audio only while you are actively holding the dictation key. Audio is processed in memory, never written to disk, and never transmitted anywhere. There is no transcription history, no usage analytics, and no telemetry of any kind. Your words stay on your machine.

### System Requirements

- macOS 14 Sonoma or later
- Apple Silicon (M1 or later) recommended for best performance
- ~140–500 MB for the speech recognition model (downloaded once)
- Accessibility and Microphone permissions
