---
title: "Speak2 for Writers: Drafting Prose by Voice Without Sending Data to the Cloud"
date: 2026-03-05
description: "Speak2 lets writers draft prose by voice with on-device transcription. No cloud, no account, no data transmitted. Your unpublished work stays on your Mac."
tags:
  - writing
  - dictation
  - privacy
  - speak2
excerpt: "Many writers find that speaking their ideas produces more natural prose than typing. But most dictation tools send your words to the cloud, and for writers, that means transmitting unpublished work to someone else's servers."
ogImage: /images/og-speak2.png
---

Many writers find that speaking their ideas produces more natural prose than typing. But most dictation tools send your words to the cloud, and for writers, that means transmitting unpublished work to someone else's servers.

## Why Voice Drafting Works for Writers

Typing engages the inner editor. Your fingers slow down while your brain second-guesses every sentence. Speaking bypasses that. Words come out faster and more naturally, closer to how you would tell the story to a friend.

Voice drafting is useful for a few specific reasons:

- It produces a more conversational, authentic voice
- It helps with writer's block because you are talking, not staring at a blank page
- It is faster than typing for many people
- It reduces strain on your hands and wrists during long writing sessions

This does not work for everyone. But if you have ever noticed that your writing sounds stiff compared to how you speak, voice drafting is worth trying.

## The Privacy Problem for Writers

Novels, articles, scripts, and pitches are intellectual property. They are your livelihood. Cloud dictation services receive your raw creative output — every half-formed idea, every plot twist, every draft of dialogue.

Companies promise to handle your data responsibly. Maybe they do. But the transmission itself is a risk. Your unpublished manuscript travels over the internet to a server you do not control. For many writers, that is uncomfortable.

## How Speak2 Handles This

[Speak2](https://github.com/zachswift615/speak2) runs entirely on your Mac. The speech recognition models run locally on your Apple Silicon processor. Your voice is processed on your machine and never leaves it. There is no account to create, no login, and no data transmitted anywhere.

Your draft stays on your computer. That is it.

## A Writer's Workflow with Speak2

The process is simple:

1. Open your writing app — Scrivener, Ulysses, Pages, Google Docs, whatever you use
2. Place your cursor where you want to write
3. Hold the Fn key (or your configured hotkey) and speak your paragraph
4. Release the key — your words appear as text, cleaned up by AI refinement if you have it enabled
5. Edit as needed and repeat

Speak2 works in any app that accepts text input. It pastes directly at your cursor position.

## Practical Tips for Writers

**Enable AI refinement.** The built-in mode uses a small language model that runs locally on your Mac. It removes filler words like "um" and "uh," cleans up false starts, and smooths out the rough edges of spoken language. This is especially helpful for stream-of-consciousness dictation where you are just letting ideas flow.

**Use Toggle mode for longer passages.** Instead of holding a key the entire time you speak, Toggle mode lets you double-press to start and double-press again to stop. This is more comfortable for extended dictation sessions.

**Turn on live transcription.** A floating overlay shows your words as you speak. This helps you catch when you lose your train of thought or go off track, and you can course-correct in the moment.

**Add character names and made-up terms to the personal dictionary.** Speech models do not know your fictional characters or invented terminology. The personal dictionary teaches Speak2 to recognize these words correctly. You can add aliases for common misheard versions.

**Check your transcription history.** Speak2 keeps your last 500 dictations. If you dictated something good but forgot to save it, or closed your app before pasting, the text is still there in the history.

**Speak in complete sentences.** The transcription models work best with natural, flowing speech. Short fragments produce less accurate results.

## Be Realistic About What You Get

Voice drafting produces a first draft, not a final one. You will still need to edit. Sentences will run long. You will repeat yourself. Some passages will not make sense on the page the way they sounded in your head.

But getting words on the page is often the hardest part of writing. A messy first draft you can edit is better than a blank page you cannot.

For setup instructions, see the [step-by-step setup guide](/blog/set-up-ai-dictation-mac-without-cloud/). To learn more about the AI refinement step, read [how to clean up dictated text automatically](/blog/clean-up-dictated-text-automatically-local-ai/). And if your writing involves unusual names or terminology, the [personal dictionary guide](/blog/personal-dictionary-fix-speech-recognition-mistakes/) is worth a look. The full [user guide](/guides/speak2/) and source code are available on [Speak2's GitHub page](https://github.com/zachswift615/speak2).

One more tip: once you have a draft, try listening to it read aloud. Hearing your own words spoken back to you catches awkward phrasing that your eyes skip over. [Listen2](https://apps.apple.com/us/app/listen-2-reader/id6755753624) is an offline text-to-speech app for iPhone that reads documents with natural AI voices — a useful proofreading step before you call a draft finished.
