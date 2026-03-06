---
title: "Using Listen2 with VoiceOver: Accessibility from the Ground Up"
date: 2026-03-05
description: "Listen2 is built with full VoiceOver support on every screen. Learn how the app works with screen readers, accessible fonts, and on-device TTS."
tags:
  - accessibility
  - voiceover
  - listen2
excerpt: "A text-to-speech app should be, by definition, an accessibility tool. But most TTS apps treat VoiceOver support as a checkbox rather than a design principle. Listen2 takes a different approach."
---

A text-to-speech app should be, by definition, an accessibility tool. It takes text and turns it into audio. But if you are a VoiceOver user, you have probably noticed that many TTS apps treat screen reader support as an afterthought. Buttons without labels. Controls that do not announce their state. Gestures that conflict with VoiceOver navigation. The irony is hard to miss.

Listen2 was built differently. VoiceOver support is not a feature that was added later — it shaped the design of every screen from the beginning.

## What "Full VoiceOver Support" Actually Means

It is easy to claim VoiceOver compatibility. It is harder to make an app that genuinely feels good to use with a screen reader. Here is what Listen2 does:

**Every button has a descriptive label and hint.** Not generic placeholders like "button" or "image." Each label tells you what the control does. Each hint tells you what happens when you activate it.

**Interactive elements use appropriate traits.** Sliders are adjustable — swipe up to increase, swipe down to decrease. Active states are announced as selected. Section titles carry the header trait so you can navigate by heading with the rotor.

**Rotor actions show up where they add value.** In the Voice Library, you can Play Sample or Stop Sample directly from the rotor without hunting for separate buttons. In document lists, delete is available as a custom action. These details make the difference between an app that technically works with VoiceOver and one that feels natural.

**The reader pauses auto-scroll when you explore.** When you touch the reading area to explore text with VoiceOver, auto-scrolling stops so the content stays still while you navigate. A "Jump to Playback Position" button brings the current reading line back into view whenever you need to re-orient.

## Screen-by-Screen

VoiceOver support is not limited to one part of the app. Every screen is navigable:

- **Library** — Swipe through your documents. Each row announces the title, reading progress, and time since last read. Delete is a custom action on each row.
- **Import** — The import menu is a standard action sheet, and the file picker is the system Files app picker — fully accessible with the same navigation you use everywhere else on iOS.
- **Reader** — Top and bottom bars work like standard toolbars. The reading area supports exploration. Playback controls announce their state, and the speed control supports adjustable actions in 0.1x increments.
- **Voice Management** — Browse, preview, and download voices. Each voice row announces the name, language, quality tier, and download status. The download button updates its label to reflect progress.
- **Collections** — Drag-to-reorder uses standard VoiceOver drag-and-drop actions. Each item announces its title and progress. Intro text segments have their own Play button as a separate accessible element.
- **Settings** — Every toggle, slider, and picker is labeled and announces its current value.

## Accessible Fonts and Dynamic Type

Listen2 includes two fonts specifically designed for readers with visual or cognitive needs:

- **OpenDyslexic** — weighted letter shapes that reduce letter-swapping for readers with dyslexia
- **Atkinson Hyperlegible** — designed by the Braille Institute to maximize the visual distinction between similar-looking characters

These are not buried in a submenu. They sit right alongside every other font in the picker.

Dynamic Type is supported through a "Use System Text Size" toggle. Turn it on and Listen2 follows whatever text size you have set in iOS Settings, including all the larger accessibility size categories. Line spacing goes up to 2.0x and character spacing up to 20%, both meeting or exceeding WCAG guidelines.

## Coming Soon: Figure Descriptions

A future update will introduce AI-powered figure descriptions. When a document contains images or figures, Listen2 will use an on-device vision model to generate spoken descriptions — so the content of charts, diagrams, and photos is not simply skipped over. This processing will happen entirely on your device, just like everything else in the app. More details when the feature ships.

## An Ongoing Conversation

Accessibility is not a box you check once and move on. It is an ongoing process, and we know there are always gaps to find. If you are a VoiceOver user and you run into something that does not work the way you expect — a missing label, an awkward navigation flow, a control that does not announce its state — we genuinely want to hear about it.

Reach out at [support@moonquakemedia.com](mailto:support@moonquakemedia.com). Feedback from screen reader users directly shapes how the app evolves. Every report helps.

## Try It Yourself

Listen2 is available on the [App Store](https://apps.apple.com/us/app/listen-2-reader/id6755753624) with a 7-day free trial. One-time purchase after that — no subscription, no account, no tracking. If you want a deeper look at how every screen works with VoiceOver, the [full user guide](/guides/listen2/) has VoiceOver-specific callouts throughout each section.
