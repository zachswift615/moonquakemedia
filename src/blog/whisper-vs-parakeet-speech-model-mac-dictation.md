---
title: "Whisper vs. Parakeet: Choosing the Right Speech Model for Mac Dictation"
date: 2026-02-23
description: "A practical comparison of Whisper and Parakeet speech models in Speak2 for Mac. Which on-device dictation model fits your workflow?"
tags:
  - speech-to-text
  - comparison
  - speak2
excerpt: "Speak2 ships with seven speech model options across two engine families. Here is how to pick the right one for your Mac and your language."
ogImage: /images/og-speak2.png
---

Speak2 ships with seven speech model options across two engine families. Here is how to pick the right one for your Mac and your language.

If you have not tried it yet, [Speak2](https://github.com/zachswift615/speak2) is a free, open-source dictation app for macOS. Everything runs on your device. No cloud, no account, no subscription. This post walks through the models it supports so you can make an informed choice.

## The Whisper Family

OpenAI's Whisper is the more established option. It has a large community, plenty of documentation, and years of real-world use. Speak2 includes five Whisper variants.

### English-Only Models

- **tiny.en** (~75 MB) — The fastest and least accurate. Good for quick notes where speed matters more than perfection. If you speak clearly and use simple vocabulary, it works fine.
- **base.en** (~140 MB) — The recommended starting point for most English speakers. A good balance of speed, accuracy, and memory use.
- **small.en** (~460 MB) — Noticeably better accuracy than base.en and still fast on any modern Mac. Worth trying if base.en is not catching enough of your words.

### Multilingual Models

- **large-v3** (~3 GB) — The most accurate model available. Supports over 100 languages. Uses significant RAM, so it is best suited for Macs with 16 GB or more.
- **large-v3-turbo** (~954 MB) — A trimmed-down version of large-v3. Still multilingual, still good accuracy, but roughly a third of the size. A reasonable middle ground.

One useful Whisper feature is vocabulary biasing. If you add words to your personal dictionary in Speak2, those words are sent as hints during transcription. This helps with names, technical terms, or anything the model might not recognize on its own.

## Parakeet v3

Parakeet v3 is a different speech engine entirely. It comes in at about 600 MB and supports 25 languages.

It does not support vocabulary biasing the way Whisper does. If you add words to your dictionary, Speak2 applies those corrections after transcription rather than during it. The result is similar in practice, but the approach is different under the hood.

Some users find Parakeet handles certain accents or speech patterns better than Whisper. Others prefer Whisper. There is no universal winner here. It depends on your voice, your language, and your microphone.

## Practical Recommendations

**If you only dictate in English**, start with base.en. It is small, fast, and good enough for most people. If you want better accuracy and your Mac can handle it, move up to small.en.

**If you need multiple languages**, try Parakeet v3 first. At 600 MB with 25 languages, it is a practical choice. If your language is not among those 25, or you want broader coverage, look at large-v3-turbo or large-v3.

**If you have 8 GB of RAM**, stick with base.en, small.en, or Parakeet v3. The large Whisper models will eat into your available memory and may slow things down.

**If you have 16 GB or more**, you can comfortably run large-v3 for the best accuracy across the widest set of languages.

**If you rely on specialized vocabulary** — medical terms, programming jargon, unusual names — Whisper's vocabulary biasing gives it an edge. Add your terms to the dictionary and the model will listen for them.

## You Can Try More Than One

You do not have to commit to a single model. Speak2 lets you download multiple models and switch between them from the menu bar. Only one model is loaded in memory at a time, so having several downloaded does not affect performance.

Download base.en to get started. Try it for a day. If something feels off, download another and compare. The models are free and the switching is instant.

For setup instructions, check the [step-by-step setup guide](/blog/set-up-ai-dictation-mac-without-cloud/). If you want to improve accuracy for names and technical terms, the [personal dictionary guide](/blog/personal-dictionary-fix-speech-recognition-mistakes/) walks through how to teach your model new words. And if you want AI cleanup of your dictated text, see [how to clean up dictated text automatically](/blog/clean-up-dictated-text-automatically-local-ai/). The full [user guide](/guides/speak2/) covers everything in detail.
