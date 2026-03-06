---
title: "How to Clean Up Dictated Text Automatically with Local AI"
date: 2026-03-02
description: "Remove filler words and false starts from dictated text using on-device AI. Speak2 cleans up transcriptions locally with no cloud processing."
tags:
  - dictation
  - ai
  - speech-to-text
  - speak2
excerpt: "When you speak, you say 'um,' repeat yourself, and start sentences over. Raw transcription captures all of it faithfully — which is accurate but not what you want pasted into an email."
ogImage: /images/og-speak2.png
---

When you speak, you say "um," repeat yourself, and start sentences over. Raw transcription captures all of it faithfully — which is accurate but not what you want pasted into an email.

This is the gap between speech-to-text and usable text. Most dictation tools give you one or the other: either a raw dump of everything you said, or heavy-handed correction that changes your meaning. [Speak2](https://github.com/zachswift615/speak2) tries to sit in the middle. It transcribes your speech on-device, then optionally runs the result through a small local language model to clean it up.

No cloud. No network requests. Everything stays on your Mac.

## What Refinement Actually Does

Here is a real example.

**Before (raw transcription):**

> So I was thinking, um, we should probably — actually no, let me start over. We should move the meeting to, uh, to Thursday because, you know, Sarah can't make it on Wednesday.

**After (refined):**

> We should move the meeting to Thursday because Sarah can't make it on Wednesday.

The meaning is identical. The filler words, the false start, and the repetition are gone. That second version is what you actually meant to say.

## Three Modes

Speak2 gives you three options for text refinement in Settings. Pick the one that fits how you work.

### Off

Raw transcription with dictionary corrections only. No AI processing. This is the fastest option. If you just need quick-and-dirty transcription and plan to edit it yourself, this works fine.

### Built-in (Recommended)

This downloads a small language model — Qwen 2.5 1.5B, about 1.1 GB — that runs locally on your Mac's GPU through Apple's MLX framework. It requires Apple Silicon (M1 or later).

Once downloaded, it works completely offline. No server, no API key, no network connection. The model removes filler words, false starts, and repetitions, then returns clean text.

For most people, this is the right choice.

### External Server (Ollama)

If you already run [Ollama](https://ollama.com) locally and prefer to use your own models, Speak2 can connect to it. You configure the server URL and model name in Settings. The default model is gemma3:4b, but you can use whatever you have pulled.

There is a "Test Connection" button that verifies Speak2 can reach your Ollama instance before you rely on it.

## Custom Prompts

The default cleanup prompt handles general dictation well, but you can replace it with your own. Open Settings, scroll to the refinement section, and edit the prompt field.

Some ideas for custom prompts:

- Format output as bullet points
- Translate to another language after cleanup
- Apply domain-specific terminology corrections (medical, legal, etc.)

If you want to go back to the default, there is a "Reset to Default" button. Leave the field empty and it will also use the default.

## Tradeoffs Worth Knowing

Refinement is not free. Here is what it costs you:

**Time.** The built-in model adds roughly 1 to 3 seconds of processing after transcription finishes. For short phrases, that might feel slow. For longer dictation, it is barely noticeable relative to how long you were speaking.

**Memory.** The built-in model uses about 1 to 2 GB of RAM on top of the speech recognition model. On a Mac with 8 GB, that is significant. On 16 GB or more, you probably will not notice.

**Feedback.** While refinement is running, the menu bar icon turns purple with a sparkles symbol so you know it is still working. If refinement fails for any reason — the model is not loaded, something crashes — Speak2 falls back to the original transcription silently. You never lose your text.

For maximum speed, turn refinement off. For cleaner output that you can paste directly into documents and emails, it is worth the wait.

## Getting Started

Speak2 is free and open source. You can find the code and releases on [Speak2's GitHub page](https://github.com/zachswift615/speak2). For setup instructions, see the [step-by-step setup guide](/blog/set-up-ai-dictation-mac-without-cloud/). If you want even more control over the AI model and prompt, read about [using Speak2 with Ollama](/blog/speak2-ollama-custom-ai-models-dictation/). The full [user guide](/guides/speak2/) covers everything.

Once your text is clean, you might want to hear it read back. [Listen2](https://apps.apple.com/us/app/listen-2-reader/id6755753624) is an offline text-to-speech app for iPhone that reads documents aloud with natural AI voices — useful for proofreading by ear.
