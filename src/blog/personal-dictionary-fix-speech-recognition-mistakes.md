---
title: "Using a Personal Dictionary to Fix Speech Recognition Mistakes"
date: 2026-02-28
description: "Speak2's personal dictionary fixes speech recognition errors with proper nouns, technical terms, and names using phonetic matching and aliases."
tags:
  - dictation
  - speech-recognition
  - speak2
excerpt: "Speech recognition models are trained on general language. They work well for everyday words, but they struggle with the words that matter most to you."
ogImage: /images/og-speak2.png
---

Speech recognition models are trained on general language. They work well for everyday words, but they struggle with the words that matter most to you.

Proper nouns, technical jargon, brand names, medical terms, names from different cultures — these are often the most important words in your dictation, and they are the ones most likely to come out wrong.

If your colleague's name is Nguyen, your speech engine might transcribe it as "Win," "Winn," or "New Yen." If you dictate notes about Kubernetes, you might get "Cooper Netties." These mistakes are not random. They happen because the model has never seen your specific vocabulary.

## How the Personal Dictionary Works

[Speak2](https://github.com/zachswift615/speak2) includes a personal dictionary that corrects these mistakes in two stages.

**Stage one: exact alias matching.** You provide a list of common mishearings for each word. When one of those aliases appears in the transcription, Speak2 replaces it with the correct word. This matching is case-insensitive and only matches whole words, so it will not accidentally replace parts of other words.

**Stage two: phonetic matching.** If a word was not caught by alias matching, Speak2 runs it through multiple phonetic algorithms — Soundex, Metaphone, and fuzzy string matching — to catch words that sound similar to your dictionary entries. This helps with mishearings you did not anticipate.

There is also an optional pronunciation hint field. This is useful when a word is spelled very differently from how it sounds. For example, "Nguyen" sounds like "Win," and "Siobhan" sounds like "Shivon." Without a hint, the phonetic algorithms would compare against the spelling, which is not helpful. The pronunciation hint tells the matcher what to listen for.

For Whisper models, there is a bonus: dictionary words are sent as vocabulary hints during transcription. This improves first-pass accuracy, so the model is more likely to get the word right before post-processing even runs.

## Adding a Dictionary Entry

Each entry has a few fields: the correct word, aliases (comma-separated common mishearings), an optional pronunciation hint, a category, and a language. Here are some practical examples.

**A person's name.** Word: "Nguyen." Pronunciation hint: "Win." Category: Names. Now when Whisper transcribes "win" or "winn" in context, it gets corrected.

**A technical term.** Word: "Kubernetes." Aliases: "Cooper Netties, Kubernetties." Category: Technical Terms. The aliases catch the most common mishearings, and phonetic matching handles variations you did not list.

**A brand name.** Word: "Anthropic." Aliases: "Antropik, Ann Tropic." Category: Brands & Products. Brand names are especially tricky because they are often invented words with no phonetic precedent.

**A medical term.** Word: "Fluoxetine." Aliases: "Flew oxetine, Flu oxetine." Category: Medical. Medical terminology is where speech recognition struggles the most, and where accuracy matters the most.

## Organizing a Large Dictionary

Six categories help keep things manageable: Names, Technical Terms, Brands & Products, Medical, Legal, and Custom. You can filter by category when your dictionary grows.

Each entry has an enable/disable toggle. If a word is causing false corrections — replacing things you did not intend — you can turn it off without deleting it. This is useful when you are still tuning your dictionary.

## Import and Export

You can export your entire dictionary as a JSON file and import it on another machine. If you set up a dictionary on your work computer, you can move it to your laptop in a few seconds. You could also share a specialized dictionary with a colleague — a set of medical terms, for example, or a list of client names.

## A Small Feature That Makes a Big Difference

The personal dictionary is not a flashy feature. But if you dictate regularly and your work involves specialized vocabulary, it can be the difference between usable transcriptions and ones that need heavy editing.

The full setup process is covered in the [user guide](/guides/speak2/). Speak2 is free and open source — you can find it on [GitHub](https://github.com/zachswift615/speak2).

If you are just getting started, the [setup guide](/blog/set-up-ai-dictation-mac-without-cloud/) walks through installation in about five minutes. For help choosing which speech model to use, see the [Whisper vs. Parakeet comparison](/blog/whisper-vs-parakeet-speech-model-mac-dictation/). And if you want AI cleanup on top of dictionary corrections, read about [automatic text refinement](/blog/clean-up-dictated-text-automatically-local-ai/).
