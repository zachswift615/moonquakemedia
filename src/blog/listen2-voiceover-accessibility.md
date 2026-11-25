---
title: "Using Listen2 with VoiceOver: A Reader Built for It"
date: 2026-03-05
updated: 2026-11-25T16:00:00-06:00
description: "Listen2 2.0 has a reader made for VoiceOver. Every paragraph is its own stop, a double-tap plays from where you are, and the controls never move."
tags:
  - accessibility
  - voiceover
  - listen2
excerpt: "In most reading apps, swiping through a book with VoiceOver takes you out of the text and into the buttons. Listen2 2.0 has a reader built to fix that."
ogImage: /images/listen2-og.png
---

A text-to-speech app ought to be easy to use with a screen reader. Many are not. Buttons have no labels, controls do not say what state they are in, and the text of the book is one large block, so a single swipe takes you out of the page and into the toolbar.

Listen2 had that last problem too. The app has had labels, hints and rotor actions on every screen for a long time, but reading itself was still awkward. With VoiceOver on, you were fighting the reader to inspect a sentence or find your place.

Version 2.0 fixes it with a reader made for VoiceOver.

## The VoiceOver Reader

When VoiceOver is on, the reading screen changes. You do not have to turn anything on.

{% blogshot "/images/blog/listen2-voiceover-accessibility/voiceover-reader.png", "The VoiceOver reader in Listen2 showing Walden. At the top are three large buttons, Library, Bookmark and Contents, and under them a heading with the title, the section and the percentage read. The chapter title has the VoiceOver focus box around it. The text is plain paragraphs. At the bottom are five large buttons: Speed 1.0x, Back, Play in orange, Forward and More", "The VoiceOver reader. Two rows of large buttons that stay where they are, and plain text in between.", 340 %}

Here is how it works:

- **Every paragraph is its own stop.** Swipe right or left to move one paragraph at a time. You stay in the text.
- **Double-tap to play from there.** Double-tap a paragraph and the Listen2 voice starts reading from it. Double-tap again to pause.
- **Two-finger double-tap to pause or carry on.** It works anywhere on the screen, on the text and on every button.
- **Move, and the voice waits.** Swipe to another paragraph while Listen2 is reading, and the reading pauses.

One way to remember it: one finger means "from here", two fingers means "carry on".

## Finding Your Place

When you open a document, VoiceOver lands in the text at the place you left off.

When you pause, VoiceOver moves to the sentence that was being read and reads it. That tells you where you are, and it puts you in the right spot to check a spelling.

Chapter titles are headings. The rotor has Lines, Words and Characters, and they work across the whole chapter. After a flick to a line, a double-tap plays from that line.

## Controls That Stay Put

The controls are two rows of large buttons. They never hide and they never move, so you can learn where each one is by touch.

**The top row** has Library, Bookmark and Contents, and then a wide heading that says where you are: the title, the section and the percentage. Double-tap that heading and VoiceOver goes to the sentence the voice is on. Bookmark always marks the sentence the voice is on.

**The bottom row** has five buttons, with Play in the middle: Speed, Back, Play, Forward and More.

- Swipe up or down on Speed to change it by 0.1, even while the voice is reading.
- Back and Forward move one sentence. While the voice is paused, VoiceOver stays on the button and reads the new sentence aloud, so you can step through several sentences without finding the button again.
- More holds everything else: search, go to a percentage, copy the current sentence, voice, sleep timer, audio settings and text size.

To change chapter, open Contents and choose one. The voice pauses, and VoiceOver lands on that chapter's heading. A two-finger scrub goes back to the library.

## What Is Not Finished

Two things you should know before you rely on it:

- After a swipe to a paragraph that was partly off the screen, the text scrolls into view and the VoiceOver focus box can stay where the paragraph was. VoiceOver is on the right paragraph, it reads it, and a double-tap plays from it. Only the box is in the wrong place. This matters if you also watch the screen.
- It has been tested mainly on an iPhone. It has not yet been tested properly with a braille display, a hardware keyboard, or on iPad.

There is no word highlighting in this reader. The sentence being read has a calm tint.

## If You Prefer the Classic Reader

It is still there, with its Sentences and Paragraphs rotors and its copy actions on the text. Open More and choose "Use the classic reader", or turn off "Use When VoiceOver Is On" under VoiceOver Reader in Settings.

The same settings screen has a second switch, "Use Without VoiceOver". Turn it on if you want the large buttons and plain text without VoiceOver running.

## The Rest of the App

VoiceOver support is not limited to the reader:

- **Library.** Each row announces the title, reading progress and time since you last read it. Delete is a custom action on each row.
- **Import.** The import menu is a standard menu and the file picker is the system Files picker. PDF import announces its progress, for example "Extracting page 42 of 300".
- **Voice Library.** Each voice announces its name, language, quality and download status. Play Sample and Stop Sample are rotor actions, so the list is not cluttered with extra buttons.
- **Settings.** Every toggle, slider and picker is labeled and announces its value.

## Voices That Run on Your Phone

Every voice in Listen2 runs on the phone itself, so it works with no connection and nothing you read is sent anywhere. Version 2.0 added 34 English voices we trained ourselves, and you can read more about those in [the offline text-to-speech post](/blog/best-offline-text-to-speech-app-iphone-2026/).

Pictures are not skipped either. When a PDF or EPUB contains images, Listen2 can write a description of each one on the phone and read it aloud. The descriptions come from a model and can be wrong, and the app says so.

## If You Have Some Vision

Listen2 includes two fonts made for legibility, in the same list as every other font:

- **Atkinson Hyperlegible**, designed by the Braille Institute to make similar letters easier to tell apart.
- **OpenDyslexic**, with weighted letter shapes for readers with dyslexia.

Turn on "Use System Text Size" and Listen2 follows the text size you set in iOS, including the larger accessibility sizes. Line spacing and character spacing can both be widened.

## Tell Us What Does Not Work

The VoiceOver reader exists because blind and low-vision readers wrote in and explained, patiently, how they actually read. If something does not behave the way you expect, such as a missing label, an awkward order or a control that does not announce its state, write to [support@moonquakemedia.com](mailto:support@moonquakemedia.com). Reports from screen reader users decide what gets fixed next.

## Try It

[Listen2](https://apps.apple.com/us/app/listen-2-reader/id6755753624) is free to try for seven days. After that it is a single purchase of $24.99, with no subscription and no account. The [user guide](/guides/listen2/) has a VoiceOver section for each screen.
