---
title: "How to Set Up AI-Powered Dictation on Your Mac Without the Cloud"
date: 2026-02-27
description: "Step-by-step guide to setting up Speak2 for private, on-device dictation on macOS. No cloud, no subscription. About 5 minutes to get running."
tags:
  - guide
  - dictation
  - speak2
  - macos
excerpt: "Speak2 is a small macOS app that turns your voice into text using on-device AI. No internet required, no data leaves your Mac. Here is how to get it running from scratch."
ogImage: /images/og-speak2.png
---

Speak2 is a small macOS app that turns your voice into text using on-device AI. No internet required, no data leaves your Mac. Here is how to get it running from scratch.

The whole process takes about five minutes, plus a few minutes for downloading a speech model. You will need a Mac with Apple Silicon (M1 or later).

## Step 1: Download Speak2

Head to the [Speak2 GitHub releases page](https://github.com/zachswift615/speak2) and download the latest version. Open the DMG and drag Speak2 to your Applications folder.

If you prefer, you can also clone the repo and build from source in Xcode. But for most people, the prebuilt release is the simplest path.

## Step 2: First Launch

Open Speak2. A setup wizard appears and walks you through the initial configuration. There are three short steps.

## Step 3: Grant Accessibility Permission

Speak2 needs Accessibility permission to detect your hotkey globally and to paste transcribed text into other apps. The setup wizard shows a status indicator and a Grant button.

When you tap Grant, macOS opens **System Settings**. Navigate to **Privacy & Security**, then **Accessibility**. Find Speak2 in the list and flip its toggle on. Switch back to Speak2 and the status indicator should update to show the permission is granted.

This is a standard macOS security step. Without it, Speak2 cannot detect key presses outside its own window.

## Step 4: Grant Microphone Permission

The wizard also asks for microphone access. Tap Grant, and macOS shows a system dialog asking to allow Speak2 to use your microphone. Click Allow.

## Step 5: Download a Speech Model

Now you choose which speech recognition model to download. Speak2 offers several options, but for most English speakers, **base.en** is the one I would recommend starting with. It is about 140 MB and gives a good balance between speed and accuracy.

If you need multilingual support, Parakeet v3 or Whisper large-v3-turbo are worth considering. You can always download additional models later from Settings.

## Step 6: Choose Model Storage Location

The wizard asks where to store models on your Mac. The default location works fine for most people. If you have a specific reason to store them elsewhere, you can pick a custom folder. Otherwise, just continue.

## Step 7: Setup Complete

Once permissions are granted and a model is downloaded, the wizard shows "Setup complete! Speak2 is ready." Close the wizard and Speak2 appears as a small microphone icon in your menu bar.

That is it for the initial setup.

## Step 8: Test It

Place your cursor in any text field -- a note, an email draft, a search bar, anything. Hold the **Fn** key on your keyboard, speak a sentence, then release the key. After a moment, the transcribed text appears at your cursor.

The menu bar icon changes color to show what Speak2 is doing: red while recording, cyan while transcribing, then back to gray when it is done.

One honest note: the very first transcription after launching Speak2 may feel a bit slow. The model needs to warm up. After that initial run, subsequent transcriptions are noticeably faster.

## Optional: Make It Your Own

Once the basics are working, there are a few things worth exploring.

**Live transcription overlay.** Go to **Settings**, then **General**, and enable "Show live transcription while recording." A floating panel appears while you speak, showing your words in real time. Handy for confirming Speak2 is hearing you correctly.

**Personal Dictionary.** If Speak2 keeps getting a name or technical term wrong, add it to the dictionary. Go to **Settings**, then **Dictionary**, and tap the + button. You can add aliases for common misheard versions of a word.

**AI text refinement.** This is optional but useful. It removes filler words like "um" and "uh" and cleans up false starts. Go to **Settings**, then **AI Refine**, and select **Built-in**. You will need to download a separate model, about 1.1 GB. Everything still runs locally on your Mac.

**Change the hotkey.** If Fn does not work well for your keyboard or workflow, you can switch to Right Option, Right Command, or a custom key combination in **Settings**, then **General**.

**Launch at Login.** Enable this in Settings so Speak2 is always ready when you start your Mac.

**Toggle mode.** If you dictate longer passages and do not want to hold a key the whole time, enable Toggle mode. Double-press the hotkey to start recording, double-press again to stop.

## That Is the Whole Thing

Five minutes of setup and you have private, on-device dictation that works in any app on your Mac. No account to create, no subscription, no data sent anywhere.

For more details on any of the features mentioned above, the [user guide](/guides/speak2/) covers everything. And the source code is available on [Speak2's GitHub page](https://github.com/zachswift615/speak2) if you want to look under the hood.

If you are not sure which speech model to download, the [Whisper vs. Parakeet comparison](/blog/whisper-vs-parakeet-speech-model-mac-dictation/) breaks down the options. For fixing recognition errors with names and jargon, see the [personal dictionary guide](/blog/personal-dictionary-fix-speech-recognition-mistakes/).

Looking for the reverse — text to speech? [Listen2](https://apps.apple.com/us/app/listen-2-reader/id6755753624) runs neural TTS voices entirely on your iPhone with the same offline, no-subscription approach.
