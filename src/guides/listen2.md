---
title: Listen2
slug: listen2
subtitle: Your Complete Guide to Personal Audiobooks
toc:
  - id: getting-started
    title: Getting Started
    short: Getting Started
  - id: importing
    title: Importing Content
    short: Importing
  - id: library
    title: Your Library
    short: Library
  - id: reader
    title: The Reader
    short: Reader
  - id: playback
    title: Playback
    short: Playback
  - id: highlighting
    title: Highlighting & Auto-Scroll
    short: Highlighting
  - id: voices
    title: Voices & Languages
    short: Voices
  - id: collections
    title: Collections
    short: Collections
  - id: text-display
    title: Text Display
    short: Display
  - id: bookmarks-search
    title: Bookmarks & Search
    short: Search
  - id: accessibility
    title: Accessibility
    short: Accessibility
  - id: tips
    title: Tips, Troubleshooting & Support
    short: Help
---

<div class="content-section" id="getting-started">

## 1. Getting Started

For years, your options when considering how best to listen to text read aloud on iOS have relied on the tried and true built-in system voices (robotic, flat) or cloud-based services that charge a monthly fee, send your documents to someone else's servers, and often restrict usage. Listen2 is a third option. It runs high-quality, natural-sounding voices entirely on your device. No account, no cloud processing, no tracking. Your documents stay on your phone and never leave.

In one sentence: Listen2 turns your documents into personal audiobooks using on-device text-to-speech.

Getting from zero to listening takes about 60 seconds. A voice comes pre-installed, so there is no need to download or configure anything first. The process is as follows:

1. **Import something** — tap the <span class="button-label">+</span> button and select a PDF, EPUB, text file, Word document, or DAISY book from your device or cloud service. You can also import text from your clipboard.
2. **Press play.**
3. **Listen.**

<div class="tip-box">
<h4>{% icon "lightbulb", "inline-icon" %} Sample Documents Included</h4>
<p>Not ready to import your own content yet? Listen2 ships with sample documents so you can hear how everything sounds, test highlighting, and get a feel for the app before importing your own files.</p>
</div>

And because everything runs on device, there is no signup screen, no email verification, no "create your account to continue." You open the app and you are in. No account needed.

#### Privacy

Your documents are yours. Nothing gets uploaded, analyzed, or shared. The text-to-speech engine, the voices, the processing — it all happens locally on your iPhone or iPad. Whether you are importing work emails, personal journals, or other content, that content stays private by default. Personal content remains personal. No setting adjustments necessary.

#### Trial and Licensing

Listen2 comes with a 7-day free trial so you can make sure it fits your workflow. After that, it is a one-time purchase. Not a subscription. You buy it once and it is yours for life.

<div class="feature-box">
<h4>{% icon "eye", "inline-icon" %} Listen2 with VoiceOver</h4>
<p>Listen2 is designed with VoiceOver as a first-class citizen. Every screen is fully navigable — the library, the reader, settings, voice management, all of it. Throughout this guide, you will find VoiceOver-specific callouts like this one that cover gestures, rotor actions, and other details relevant to screen reader users.</p>
</div>

</div>

<div class="content-section" id="importing">

## 2. Importing Content

You have text scattered everywhere. PDFs from work, articles you saved in Safari, ebooks you downloaded, notes you copied from an email. Listen2 can pull content from all of these places. Here are all the methods for getting content into your library.

<div class="feature-box">
<h4>{% icon "file-text", "inline-icon" %} Supported File Types</h4>
<ul>
<li><strong>PDF</strong> — the universal document format. Text-based PDFs work best.</li>
<li><strong>EPUB</strong> — the standard ebook format. If you buy DRM-free books, this is what you get.</li>
<li><strong>DOCX</strong> — Word documents from Microsoft Office or Google Docs exports.</li>
<li><strong>TXT</strong> — plain text files. Simple and reliable.</li>
<li><strong>Markdown (.md)</strong> — formatting gets stripped for reading aloud, but the text comes through clean.</li>
<li><strong>DAISY</strong> — an accessibility-focused format used by many libraries and organizations.</li>
</ul>
</div>

#### Import from Files

Tap the <span class="button-label">+</span> button and choose "Import from Files." This opens the standard iOS Files picker, which means you are not limited to what is on your device. iCloud Drive, Dropbox, Google Drive, OneDrive — if it shows up in your Files app, you can import from it. Pick your file, and it lands in your library.

#### Import from Clipboard

This one is more useful than it sounds. Say you just asked ChatGPT a question while you are out on a walk and you want to hear the answer instead. Tap the copy button at the bottom of ChatGPT's message, switch to Listen2, tap <span class="button-label">+</span>, choose "Import from Clipboard," and you are done. Works with anything you can copy — web articles, emails, notes, recipes, and more.

#### Import from Link

Tap <span class="button-label">+</span>, choose "Import from Link," and paste in a URL. Listen2 fetches the page, strips out the navigation bars and ads, and keeps the article text. You get the content without the clutter. Google Drive share links work here too — if someone shares a document with you via a Drive link, paste it in and Listen2 will grab the file. The Google Drive link needs to have "anyone with link" can view permissions. Google Drive files with "restricted" sharing access will not work.

#### Using the Share Extension

This is the most convenient option for web browsing. When you are in Safari or any other app, you see something you want to listen to later, and you tap the Share button. Choose Listen2 from the share sheet. The article gets imported and will be waiting in your library. No copy-pasting, no switching apps, no typing in URLs.

And if you import a batch of articles throughout the day this way, you can group them into a collection in two taps — see Web Article Collections in the Collections section.

#### Using Listen2 with Siri

If you have text on your clipboard and want to skip the UI entirely, just say "Read my clipboard in Listen2." It imports the clipboard text and starts playing automatically. Hands-free from start to finish.

#### Collection Archives

If someone sends you a `.listen2collection` file — a curated reading list, a course packet, or a set of documents organized into chapters — just open it. The complete collection imports with all its documents and structure intact. Tap the file, and everything lands in your library ready to go.

#### PDF Extraction (iOS 26+)

On iOS 26 or later, importing a PDF gives you a choice. Standard extraction works the way you would expect — it pulls the text layer out of the PDF. But for complex layouts like multi-column academic papers or documents with unusual formatting, there is AI Vision. This is experimental, and it uses on-device layout analysis to figure out reading order in tricky PDFs. For most documents, Standard is all you need. Sometimes the standard PDF extractor might jumble together tight multicolumn layouts, and the AI Vision extractor may or may not handle this better. It is worth trying both methods if one of them is not importing correctly.

The standard PDF import method is not quite "standard," though. It was built from scratch to handle multi-column research papers, technical books, and just about any PDF you can throw at it. The import is quite slow for large full-sized book PDFs, so leave your phone open and let it finish importing. That is a one-time cost for extracting all the text, filtering out footnotes, other noise, and re-joining hyphenated line breaks that disrupt voice reader prosody.

<div class="warning-box">
<h4>{% icon "alert-triangle", "inline-icon" %} Scanned PDFs</h4>
<p>If a PDF is actually just images of pages — a scanned book, a photographed document — there is no text layer for Listen2 to extract. These will not import well, or at all. If you cannot select text in the PDF on your computer, Listen2 will not be able to read it either. For scanned documents, you will need to run them through an OCR tool first to add a text layer.</p>
</div>

<div class="feature-box">
<h4>{% icon "eye", "inline-icon" %} Import Menu with VoiceOver</h4>
<p>The import menu is a standard action sheet, so VoiceOver reads each option clearly as you swipe through them. The file picker is the system Files app picker — fully accessible with the same navigation you are used to everywhere else on iOS.</p>
</div>

</div>

<div class="content-section" id="library">

## 3. Your Library

Once you start importing documents, you will need to be able to find them again. That is the Library tab — the first thing you see when you open Listen2.

Think of your library as a stack of everything you have brought in, sorted by what you touched most recently. Whatever you were listening to last is sitting right at the top. You do not organize it. You do not file things into folders. It just stays out of your way and keeps the thing you care about most front and center.

Each row in the list shows you what you need at a glance: the document title, a format icon or cover thumbnail, your reading progress as a percentage if you have started it, and how long ago you last opened it. You can tell the difference between "that PDF I was halfway through yesterday" and "that EPUB I have not touched in two weeks" without opening either one.

When your library gets big enough that scrolling feels tedious, there is a search bar at the top. Type the first few characters of a title and the list filters down instantly.

You will also notice a second tab at the top — Collections. That is for curated playlists of documents, and it is covered in detail in Section 8. For now, just know it is there.

To manage your documents, swipe left on any row to delete it. Or press and hold on a document to bring up a context menu — from there you can add it to a collection.

<div class="tip-box">
<h4>{% icon "lightbulb", "inline-icon" %} Automatic Position Saving</h4>
<p>Listen2 saves your position automatically whenever you pause or leave a document. Come back three days later, open it up, and you are right where you stopped. That said, there are times when auto position saving does not work — for example, if the app crashes before saving or if your phone dies during playback. Using bookmarks liberally is a good safety net.</p>
</div>

But here is the thing that matters most: Listen2 remembers where you are in every document, not just the last one. You can jump between five different books over the course of a week and each one picks up exactly where you left off. It is the kind of thing you stop noticing because it just works.

<div class="feature-box">
<h4>{% icon "eye", "inline-icon" %} Your Library with VoiceOver</h4>
<p>Navigate the document list by swiping left and right. Each row announces the document title, reading progress, and time since last read. Delete is available as a custom action — swipe up or down on a row to find it. The search field sits at the top of the screen.</p>
</div>

</div>

<div class="content-section" id="reader">

## 4. The Reader

This is the screen you will spend the most time with. Once you open a document and press play, the reader is where everything happens — following along, navigating, adjusting speed, jumping between chapters. It is worth knowing what every button does and the few gestures that make a real difference.

#### Top Bar

Starting from the left, you have a row of tools that control navigation and discovery.

The **back arrow** returns you to the Library. The **bookmark button** drops a bookmark at your current position, or removes one if there is already a bookmark there. **Search** lets you find text within the document. **Table of Contents** shows chapters and sections so you can jump straight to the part you care about. The **gear icon** opens Quick Settings — voice, highlighting, display options — without leaving the reader. And the **Go Back button** works like a browser's back button: it returns you to wherever you were before your last jump or seek.

#### Jump to Playback Position

This one deserves its own moment. The **crosshairs button** (labeled "Jump to Playback Position" in VoiceOver) in the top bar snaps the view back to wherever the voice is currently reading.

Here is when it matters. You are listening to a long chapter and you scroll up to re-read a paragraph you half-caught. Now the voice is reading somewhere off-screen — perhaps two whole pages below where you are looking. Tap the crosshairs button and the view jumps right back to the active line. No hunting, no guessing where playback got to while you were gone.

You will find yourself reaching for this one more than you expect.

#### The Text

The text area is not just a display — it is interactive.

**Tap any paragraph** and playback jumps to the start of that paragraph. Useful when you want to skip ahead a couple of paragraphs or rewind without scrubbing through a progress bar.

**Double-tap any specific word** and playback seeks to exactly that word. Handy when you want to re-hear a tricky passage or start from a specific spot mid-sentence.

<div class="tip-box">
<h4>{% icon "lightbulb", "inline-icon" %} Double-Tap to Seek</h4>
<p>Double-tap any word and playback jumps right to it. Handy when you want to re-hear a tricky passage or start from a specific spot. It works anywhere in the document — even paragraphs the voice has not reached yet.</p>
</div>

Between these two gestures — tap for paragraph, double-tap for word — you can get to any point in a document in about a second. Much faster than dragging a scrubber.

#### Bottom Bar

The bottom bar handles playback controls and quick adjustments, left to right.

The **speed button** shows your current rate (like "1.0x") and opens a speed picker when you tap it. Next is the **progress bar** with a percentage readout so you always know how far through the document you are. The **voice picker** lets you swap voices on the fly without opening settings. Then the **skip back** and **skip forward** buttons jump between paragraphs. And the **play/pause button** sits right in the center where your thumb expects it.

#### Collection Context

When you open a document as part of a collection, the reader adds a bit of context at the top — the collection name and your position, something like "Morning Reading - 2 of 5." Extra skip buttons also appear so you can jump forward or backward between documents in the collection without going back to the library. Everything else works the same.

<div class="feature-box">
<h4>{% icon "eye", "inline-icon" %} Reader Controls with VoiceOver</h4>
<p>All buttons in the top and bottom bars have descriptive labels and hints, so you always know what a control does before you activate it. One thing to note: double-tap-to-seek on words is disabled when VoiceOver is running, because VoiceOver uses its own double-tap gesture for activation. You can select a line of text via exploring and double-tap the line with a single finger to start playback from that line. When VoiceOver explore is active on the text surface — your finger is on the screen moving between elements — auto-scrolling pauses so the text stays still while you explore. Once you lift your finger, use the "Jump to Playback Position" button in the top bar (visually, this button looks like crosshairs) to snap back to the current reading position.</p>
</div>

</div>

<div class="content-section" id="playback">

## 5. Playback

Once you have imported a document and opened it in the reader, it is time to control it. The good news: the controls you will reach for most are extremely simple, and they work even when you are not looking at the screen.

#### Play and Pause

The big button at the bottom of the reader. Tap it and the voice starts. Tap it again and it stops. But you do not have to be in the app to do this. Lock your screen, switch to another app, pull up Control Center — play and pause work from all of them. Same goes for your AirPods or any headphone remote. One tap to toggle.

#### Skipping Forward and Back

The skip buttons sit on either side of the play button. By default, they jump by paragraph, which is the right move for most reading. But if you want finer control, you can switch to sentence-level skipping in settings. These also work from the lock screen and headphone remote, so you can rewind a paragraph without pulling your phone out of your pocket.

#### Speed

Tap the speed button in the bottom bar to open the speed sheet. You can go from 0.5x all the way up to 2.5x, in 0.1x increments. Start at 1.0x. Then bump it up a notch every few sessions. Most people land somewhere around 1.2x to 1.5x for casual reading. For dense or technical material, 1.0x is the right call. There is no badge of honor for listening fast — the goal is comprehension.

<div class="tip-box">
<h4>{% icon "lightbulb", "inline-icon" %} Adjust Speed Gradually</h4>
<p>Start at 1.0× and bump it up 0.1× at a time. You will be surprised how quickly 1.3× starts to feel natural. Your brain adapts faster than you would expect, and you can always dial it back for harder material.</p>
</div>

#### Paragraph Pause

This one is subtle, but it matters. There is a configurable gap between paragraphs — from 0.0 seconds up to 1.0 seconds. It gives you a beat to process what you just heard before the next paragraph starts. Think of it like the white space on a printed page. You will find it in settings.

#### Background Playback and Now Playing

Switch apps, lock your screen, put your phone in your bag. The voice keeps going. Your lock screen shows the document title, current section or chapter name, and cover artwork if the document has it. You always know what is playing at a glance, even without opening Listen2.

<div class="feature-box">
<h4>{% icon "headphones", "inline-icon" %} Control Playback from Anywhere</h4>
<p>You can control playback from five places: the in-app bottom bar, the lock screen, Control Center, AirPods or any headphone remote, and Apple Watch. Same controls, same behavior, no matter where you reach for them.</p>
</div>

<div class="feature-box">
<h4>{% icon "eye", "inline-icon" %} Playback Controls with VoiceOver</h4>
<p>The speed control supports VoiceOver adjustable actions — swipe up to increase speed, swipe down to decrease, in 0.1× increments. The Play/Pause button carries the "Starts Media Session" accessibility trait, so VoiceOver announces it appropriately. Lock screen and Control Center controls work identically with VoiceOver active — no special gestures needed.</p>
</div>

</div>

<div class="content-section" id="highlighting">

## 6. Highlighting & Auto-Scroll

Reading along while someone talks is surprisingly hard if the words are not visually tracking with the voice. Your eyes lose the spot, you glance away for a second, and suddenly you are scanning the page trying to find where the audio is. Highlighting and auto-scroll solve this together — one shows you which words are being spoken, the other makes sure those words stay on screen.

#### Highlighting

You have three levels to choose from: **Word**, **Sentence**, and **Off**.

**Word** is the default, and it is the most precise. Each word lights up the moment it is spoken. Listen2 runs a speech alignment engine entirely on your device to figure out exactly when each word starts and ends. If you do not pay attention to the word highlighting, you may get better battery performance having it set to "sentence" or "off".

**Sentence** highlights the full sentence being read. Less visual movement, but it still gives you a clear anchor for where the voice is.

**Off** turns highlighting off entirely. You are just listening.

There is also a **line band** option — a subtle highlight strip behind the current line. It is only available with Word-level highlighting, and you toggle it independently in settings. Think of it as a reading ruler. If you are following along closely, it gives your eyes one more thing to lock onto.

Note for older devices: on older devices with less available memory, Listen2 automatically caps highlighting at Sentence level to keep things running smoothly. If that applies to your device, you will see a note in settings explaining why Word is not available.

<div class="feature-box">
<h4>{% icon "sparkles", "inline-icon" %} When to Use Each Highlighting Level</h4>
<p><strong>Word:</strong> Best for close following, language learning, or reading along carefully. <strong>Sentence:</strong> Good balance of visual tracking without too much movement. <strong>Off:</strong> When you are just listening and not looking at the screen.</p>
</div>

<div class="tip-box">
<h4>{% icon "lightbulb", "inline-icon" %} Dial It Down</h4>
<p>If word-level highlighting feels too busy, try sentence highlighting. It still gives you a visual anchor without the per-word movement.</p>
</div>

#### Auto-Scroll

Two modes here: **Page-follow** and **Centered**.

**Page-follow** is the default. You read down the page naturally, and when the highlighted line gets close to the bottom of the screen, the view scrolls forward to keep it visible. It is like reading a book where someone turns the page for you right when you need it.

**Centered** works differently. It pins the currently spoken line to the middle of the screen. The text flows past you like a teleprompter — your eyes stay in one spot, and the words come to you. Great for study, close reading, or language learning where you want every word front and center.

But here is the important detail. Centered mode requires Word-level highlighting to work. It needs that precise per-word timing to know exactly which line to pin. If you switch highlighting to Sentence or Off, centered mode automatically falls back to Page-follow and shows a brief toast message letting you know what happened. No crash, no confusion — it just gracefully steps down and tells you why.

So when should you use which? Page-follow is the one for casual listening — you glance at the screen now and then, perhaps you are cooking or commuting and checking in occasionally. Centered is for when the screen has your full attention and you want to lock in. Two different modes for two different situations.

Both settings live in Quick Settings, accessible from the gear button in the reader. You can switch between them mid-session without interrupting playback.

<div class="feature-box">
<h4>{% icon "eye", "inline-icon" %} With VoiceOver</h4>
<p>Highlighting and auto-scroll are visual features — they do not affect the audio output or VoiceOver announcements. VoiceOver users rely on the spoken content directly. Both settings are adjustable in Quick Settings from the reader's gear button.</p>
</div>

</div>

<div class="content-section" id="voices">

## 7. Voices & Languages

Voices are the heart of the listening experience. A great voice makes a two-hour reading session feel effortless. A poor one makes you quit after three paragraphs. This is worth getting right.

Listen2 ships with one high-quality English voice already installed. No downloads, no setup — you can start listening the moment you open the app. But that is just the starting point.

#### Voice Engines *(new in v1.5.0)*

Listen2 now has two voice engines: **Piper** and **Supertonic**.

**Piper** is the original engine — fast, lightweight, and available in dozens of languages. These are the voices you already know. They run well on any device and cover the widest range of languages.

**Supertonic** is the new high-fidelity engine. It uses a flow-matching neural architecture that produces more natural, expressive speech. Supertonic voices sound closer to human narration — smoother prosody, more natural rhythm, clearer articulation. The models were custom-converted to run natively on Apple's Neural Engine through CoreML, so you get high-fidelity audio without unnecessary battery drain. The voices are currently English-only, with more languages coming.

Here is the nice part about Supertonic: all its voices share a single engine. Download any Supertonic voice and you get access to all of them — male and female, distinctive styles. The engine download happens once, and after that switching between Supertonic voices is instant.

Both engines work side by side. You can switch between Piper and Supertonic voices freely — even mid-document. The app handles everything behind the scenes.

#### Browsing Voices

Open the Voice Library from the main settings screen or from your library. You will find dozens of voices spanning English, Spanish, French, German, Italian, Portuguese, Dutch, Polish, Russian, Chinese, Japanese, Korean, Arabic, Hindi, Vietnamese, and more.

<div class="feature-box">
<h4>{% icon "globe", "inline-icon" %} Available Languages</h4>
<p>Listen2's Voice Library covers a wide range of languages: English, Spanish, French, German, Italian, Portuguese, Dutch, Polish, Russian, Chinese, Japanese, Korean, Arabic, Hindi, Vietnamese, and others. Piper voices cover all of these. Supertonic voices are currently English-only, with more languages coming.</p>
</div>

Every voice has a play button right on the row so you can preview it before committing to a download. Filter the list by voice engine, language, quality level (high or medium), or download status — all voices, downloaded only, or not yet downloaded. Sort by name, language, or downloaded-first. Between the filters and sorting, you can narrow things down fast even as the library grows.

When multiple voice engines are available, the Sort & Filter sheet includes a Voice Engine filter. Use it to show only Piper voices, only Supertonic voices, or all voices at once.

#### Downloading & Managing

Tap the download button next to any voice and you will see it move through three phases: downloading, decompressing, and installing. Most voices run 60 to 75 MB each, so Wi-Fi is highly recommended.

To delete a voice, swipe left on it in the Voice Library. The bundled voice cannot be removed — it is your safety net. At the bottom of the library screen there is a storage info section that tells you how many voices you have installed and the total disk space they are using. Handy when you are cleaning house.

And switching voices while you are reading is fast. Tap the voice button in the reader's bottom bar to open the voice picker. It shows all your downloaded voices, filterable by language. Tap one to switch. You can audition voices right from the picker too, so you do not have to leave the reader to find the right fit.

#### Multi-Speaker Voices

Some voice models pack multiple speakers into a single download. You will spot these by the speaker count badge on the voice row. Tap one and you will see the full speaker list. For voices with more than 20 speakers, there is a searchable speaker browser — type to filter and audition individual speakers without scrolling through a massive list.

This matters more than you would think. Two speakers from the same voice model can sound completely different — one warm and conversational, another crisp and formal. Same underlying engine, completely different feel.

Note that single-speaker voices usually sound better overall than a multi-speaker voice, but this is subjective to each person, so try them both out and see for yourself.

<div class="tip-box">
<h4>{% icon "lightbulb", "inline-icon" %} Experiment with Voices</h4>
<p>Try several different voices. Some feel better for fiction, others for technical content. And if a voice has multiple speakers, audition a few — the same voice model can sound quite different between speakers.</p>
</div>

#### Language Packs

Non-English voices can optionally download a grammar pack for their language. These adjust parameters such as text normalization — turning things like "1,234" into "one thousand two hundred thirty-four" instead of reading out individual digits. Same for dates, currency, and other formatted text.

If a voice needs a grammar pack, you will see a prompt. Download it, and numbers and dates will sound natural. You can manage these from the Language Packs screen — download, delete, or retry if something went wrong. They are small and make a real difference in how polished the output sounds.

One thing to know: grammar pack coverage varies by language. Most handle numbers, dates, and currency well. Vietnamese normalizes numbers and basic text correctly, but currency symbols (like ₫ or $) and measurement units (km, kg, kWh) currently pass through as-is. The voice will still read the text — it just will not expand "100000 ₫" into words the way it would for other languages. This is on our list to improve.

#### Voice Tuning

Each engine has its own tuning controls. The settings screen automatically shows the right set based on which voice is active.

**Piper Voice Tuning**

Two sliders shape how Piper voices sound.

**Expressiveness** (0.00 to 1.00) controls pitch and tone variation. Set it low and the voice goes flat, almost monotone. Set it high and you get more animated, dynamic delivery. Default is 0.667.

**Duration Variation** (0.00 to 1.00) controls phoneme timing — how long each sound is held. Low means even, mechanical pacing. High means more natural rhythm with subtle pauses and rushes. Default is 0.80.

**Supertonic Voice Quality** *(new in v1.5.0)*

Four parameters let you dial in Supertonic's output.

**Articulation Speed** (0.70 to 1.30) controls how much time the model allocates per word. Lower values give the model more room to pronounce clearly — words come out more precise, but the natural pace slows down. Higher values speed up articulation but may clip syllables. Default is 0.79.

**Duration Buffer** (0% to 30%) adds extra time after the model's predicted speech length. This prevents words from being cut off at the end of sentences. If you hear the last word getting clipped, bump this up. Default is 14%.

**Quality Steps** (10 to 40) controls how many denoising passes the model runs. More steps produce cleaner, more natural audio but take longer to generate. 32 is a good balance between quality and speed. Default is 32.

**Variation** (0.50 to 1.50) controls how much randomness shapes the audio. Lower values sound smoother and more consistent. Higher values introduce more expressiveness but can also cause the voice to shift accents between sentences. Default is 0.85.

There is a Reset to Defaults button for each engine if you wander too far and want to start over. And if you tweak these settings while audio is already playing, you get a choice: "Apply Now" clears the audio buffer and switches immediately, or "Apply Soon" lets the current audio finish before the new settings kick in.

#### Voice Presets *(new in v1.5.0)*

Here is the problem presets solve. You find the perfect tuning for Luna — she sounds crisp and clear at Articulation Speed 0.90 with Quality Steps 28. But then you switch to Atlas for a different book, and those settings come along for the ride. Atlas sounds better with completely different values. Without presets, you are manually adjusting sliders every time you switch voices.

Presets let you save a set of tuning parameters and load them onto any voice. Each voice can have its own settings, independent of every other voice. Change Luna's Articulation Speed and Atlas does not budge.

**How it works.** By default, all voices share one set of global tuning parameters. When you save or load a preset onto a voice, that voice *detaches* from the global settings and gets its own copy. The section header tells you the current state — "Global" means the voice is using shared settings, a preset name like "Crisp Narration" means it loaded that preset, and "Custom" means it has its own settings that do not match any preset.

**Saving a preset.** Open the Presets screen from the tuning section (there is a "Presets" link below "Reset to Defaults"). Tap "Save Current as Preset." The app suggests a name based on the voice — accept it or type your own. Saving captures the current slider values and also detaches the voice, so future slider changes only affect this voice.

**Loading a preset.** On the Presets screen, tap any saved preset to load it onto the current voice. The sliders update immediately. For Piper voices, you get the same "Apply Now" or "Apply Soon" choice you see when changing sliders.

**Using Global Settings.** If a voice is detached and you want it to go back to sharing settings with everyone else, tap "Use Global Settings" on the Presets screen. The voice-specific settings are removed and the sliders revert to the global values.

**Reset to Defaults** still works the same way, with one nuance. If the voice is detached, it resets *that voice's* settings to factory defaults but keeps it detached. The voice does not rejoin the global pool — it just gets fresh default values of its own. If the voice is using global settings, it resets the global values, which affects all voices that have not been detached.

Presets are filtered by engine. Supertonic presets only appear when a Supertonic voice is active, and Piper presets only appear for Piper voices. Deleting a preset from the library does not affect any voice that already loaded it — the loaded values are a snapshot, not a live link.

<div class="tip-box">
<h4>{% icon "lightbulb", "inline-icon" %} One Preset, Many Voices</h4>
<p>You can load the same preset onto multiple voices. Each gets its own independent copy of the values. Adjusting a slider on one voice does not change the others — they are snapshots, not shared references.</p>
</div>

#### Pronunciation Rules *(new in v1.4.0)*

Sometimes the voice mispronounces a word. A character name, a technical term, an abbreviation. You hear it wrong once and it pulls you out of the listening experience every time after that.

Pronunciation rules let you fix this. You tell the app "when you see this text, say this instead." The displayed text stays exactly the same — only the spoken output changes.

Open pronunciation rules from the quick settings gear icon while reading, or from the main settings screen under Voice. Tap <span class="button-label">+</span> to create a rule. You will set a match pattern (the text the voice gets wrong), choose whether it should match the exact word or any text containing the pattern, and then tell it what to say instead — or tell it to stay silent and skip the matched text entirely.

A few things that come in handy:

- **Fixing names.** If the voice says "Kaethe" wrong, create a rule that replaces it with a spelling the voice handles naturally, like "Kahtuh." Write replacements as words the voice can read, not phonetic notation.
- **Spelling out abbreviations.** For something like "NASA," use periods between letters: "N.A.S.A." — this tells the voice to spell it out letter by letter. Spaces between letters do not work as well.
- **Silencing footnotes.** The app ships with built-in rules for common footnote markers like [1], [2], and reference symbols like † and §. Toggle them on in the rule list and those markers disappear from the audio without touching the display text.

Rules can be **global** (apply everywhere) or **document-scoped** (apply only to a specific document). When you open pronunciation rules from the reader's quick settings, you can create rules scoped to whatever you are currently reading. Document-scoped rules take priority over global ones when both match the same text.

You can toggle rules on and off, reorder them by dragging, and delete any rule you have created. Built-in rules can be toggled but not edited or deleted.

<div class="tip-box">
<h4>{% icon "lightbulb", "inline-icon" %} Writing Good Replacements</h4>
<p>The key insight: write replacements as natural English words the voice can pronounce, not phonetic guides. "Kahtuh" works. "KAH-tuh" does not — the voice reads uppercase letters individually. For abbreviations, use periods (N.A.S.A.) not spaces (N A S A).</p>
</div>

<div class="feature-box">
<h4>{% icon "eye", "inline-icon" %} Voice Management with VoiceOver</h4>
<p>Voice rows in the Voice Library have rotor actions for "Play Sample" and "Stop Sample" so you can preview without navigating away. Download progress and status are announced as they change. The multi-speaker browser is a searchable list — type to filter, double-tap to select a speaker.</p>
</div>

<div class="feature-box">
<h4>{% icon "eye", "inline-icon" %} Pronunciation Rules with VoiceOver</h4>
<p>The rule list announces each rule's name, pattern, output, scope, and enabled state. Built-in rules are identified as "Built-in rule, not editable." The add/edit form follows a logical swipe order through all fields. Segmented controls for scope, match type, and output type announce their current selection. Validation errors are announced when you try to save an incomplete rule.</p>
</div>

<div class="feature-box">
<h4>{% icon "eye", "inline-icon" %} Voice Presets with VoiceOver</h4>
<p>The Presets screen announces the current state ("Using global settings," "Using custom settings," or "Based on: preset name") as static text. Each saved preset row has a "Read Parameters" rotor action that announces all parameter values with their display names — for example, "Articulation Speed 0.79, Duration Buffer 14%, Quality Steps 32, Variation 0.85." Double-tap a preset row to load it. Swipe-to-delete uses the standard VoiceOver delete action. The "Save current settings as a preset" button includes a hint describing what will happen.</p>
</div>

</div>

<div class="content-section" id="collections">

## 8. Collections

You know the feeling of making a great mixtape. You pick the tracks, put them in the right order, add a little commentary between songs to set the mood. Collections are that, but for reading. You grab a set of documents from your library, arrange them in the order you want, and hit play. Everything plays through front to back — one article flows into the next, with optional narrated intros between them that you write yourself.

Line up your morning commute listening. Build a course reading list. Put together a set of essays for your book club. One tap and the whole thing plays with a little chime between documents.

#### Creating a Collection

Go to the Collections tab in your library and tap the + button. You will see a menu with two options: "New Collection" for building one from scratch, and "Create Web Article Collection" for a quick shortcut (more on that below). Choose "New Collection" and give it a name. You can optionally add a description and cover artwork from your photo library, but neither is required.

Then add documents. You will see your full library to pick from. Once they are in, drag to reorder them the way you want, swipe to remove anything that does not belong. The collection detail screen shows an item count, a document count, and a play button right at the top.

You can also add documents to an existing collection without leaving your library. Long-press any document and choose "Add to Collection" from the context menu. Quick and easy.

#### Web Article Collections

Here is the scenario. You are importing articles from Safari throughout the day — one here, one there, perhaps five or six by the evening. Now you want to listen through them on a walk. Normally you would create a collection, add each article one by one, name it, and so on. Web Article Collections skip all that.

Tap the + button on the Collections tab and choose "Create Web Article Collection." The app finds all your loose web articles — the ones you have imported but have not organized into a collection yet — and lets you batch them up in two taps. Pick how many you want (5, 10, 25, or all of them), accept or edit the auto-generated name, and tap Create. The collection builds itself from your most recent articles, newest first, and drops you right into it ready to play.

This is the answer to "I want auto-play across documents" and "I want to clean up when I am done." Collections already auto-advance from one document to the next. Once your articles are in a collection, you press play and the whole batch plays straight through. And when you are finished, delete the collection and choose "Delete Collection and Documents" to clear everything out in one shot.

If you do not have any web articles yet, the sheet walks you through how to import them — open Safari, tap share, choose Listen2. And if all your web articles are already in collections, it tells you that too.

#### Intros & Citations

Between any two documents, you can add an intro — a short text segment you write yourself that gets read aloud as a transition. Think of it as the little commentary between tracks on a good radio station. Something like "This next piece is from 1962, when the author was living in Paris..." or even just a sentence of context about what is coming next and why you included it.

Intros show up as expandable items in the collection detail view, each with their own play button. They get narrated by your current voice just like any other text. When you play through a collection, intros play automatically between documents. No extra taps.

For each document in a collection, you can also add source citations — a title and URL pair. Handy for attributing web articles, linking back to the original publication, or giving your reading club members a way to find the source material.

<div class="tip-box">
<h4>{% icon "lightbulb", "inline-icon" %} Guided Listening</h4>
<p>Write intros between your documents to create a guided listening experience. Even a sentence or two of context between articles can make a collection feel like a curated podcast.</p>
</div>

#### Playing a Collection

Tap Play on the collection detail screen and it starts from the top. If you have already been listening, it picks up at the first document you have not finished. Progress badges appear on each item: not started, in-progress with a percentage, or done. You always know where you left off.

Inside the reader, the top bar shows the collection name and your position — something like "Morning Reading - 3 of 7." Extra skip buttons appear on either side of the standard controls so you can jump forward or backward between documents in the collection. Skip buttons jump between documents only, not intros. Intros play automatically as transitions when you reach them.

Everything else in the reader works exactly the same. Same speed controls, same highlighting, same playback gestures. The collection just adds that extra layer of structure around it.

#### Sharing & Importing

Tap the export button in the toolbar on a collection's detail screen. Listen2 packages everything up — documents, intros, structure, the works — into a `.listen2collection` file. Share it via AirDrop, Messages, email, or however you prefer. The recipient opens it in Listen2 and gets the whole collection intact, ready to play.

Importing works the other direction. Open a `.listen2collection` file from Files, a link, or another app and Listen2 handles it. If you already have that collection, it lets you know.

#### Deleting a Collection

Swipe left on a collection in the list and tap delete. You will get a choice: "Delete Collection Only" or "Delete Collection and Documents."

The first option removes the collection but leaves every document in your library. The structure goes away, but the content stays. The second option removes the collection and deletes the documents along with it — handy when you have finished a batch of articles and want a clean slate.

Here is the safety net: if a document belongs to another collection too, it will not be deleted. Only documents that are exclusively in the collection you are removing get cleaned up. You cannot accidentally lose something that is still part of another playlist.

<div class="tip-box">
<h4>{% icon "lightbulb", "inline-icon" %} The Listen-and-Clean-Up Workflow</h4>
<p>Import articles throughout the day, batch them into a web article collection, listen through the whole thing, then delete the collection with its documents when you are done. Fresh library, no clutter.</p>
</div>

<div class="feature-box">
<h4>{% icon "list-bullet", "inline-icon" %} What to Use Collections For</h4>
<p><strong>Morning commute playlist:</strong> Line up articles and essays for your drive or train ride. <strong>Course reading list:</strong> Organize readings by week or topic with intro commentary between them. <strong>Book club picks:</strong> Curate selections and share them as a single file. <strong>Research paper sets:</strong> Group related papers with context intros. <strong>Sharing with friends:</strong> Package up your favorite reads and send them to someone who would enjoy them.</p>
</div>

<div class="feature-box">
<h4>{% icon "eye", "inline-icon" %} Collections with VoiceOver</h4>
<p>Drag-to-reorder items uses standard VoiceOver drag-and-drop actions. Each item in the collection detail view announces its title and progress status. Intro text segments have their own Play button, accessible as a separate element. The export button is in the toolbar and labeled "Export collection."</p>
</div>

</div>

<div class="content-section" id="text-display">

## 9. Text Display

You are going to be staring at this text for a while — hours, potentially. It should look the way you want it to look — the right font, the right size, the right amount of breathing room between lines. Listen2 gives you real control over all of this, and it is worth spending a minute dialing it in.

#### Fonts

Thirteen fonts across four categories. In the font picker, each font name is rendered in its own typeface, so you can see exactly what you are choosing before you tap.

<div class="feature-box">
<h4>{% icon "type", "inline-icon" %} Font Categories</h4>
<p><strong>Serif:</strong> Georgia, New York, Palatino, Charter. <strong>Sans-Serif:</strong> System (the default iOS font), Helvetica Neue, Avenir, Avenir Next. <strong>Accessibility:</strong> OpenDyslexic, Atkinson Hyperlegible. <strong>Monospace:</strong> SF Mono, Menlo, Courier.</p>
</div>

Serif fonts tend to feel more like a printed book. Sans-serif fonts feel cleaner and more modern. And the two accessibility fonts are there for a reason — OpenDyslexic is designed to reduce letter-swapping for readers with dyslexia, and Atkinson Hyperlegible maximizes the visual distinction between similar-looking characters for low-vision readers. They are not afterthoughts tucked in a submenu. They are right there in the picker alongside everything else.

#### Size

A slider that runs from 10pt to 40pt. Drag it until the text feels right. But there is also a "Use System Text Size" toggle — flip that on and Listen2 follows whatever you have set in iOS Settings under Display & Text Size, including the larger accessibility sizes. If you have already configured your whole phone for bigger text, Listen2 picks that up automatically. No extra work.

#### Spacing

Two settings here: line spacing and character spacing.

**Line spacing** has five levels — Compact (1.0x, lines right on top of each other), Normal (1.25x, the default), Relaxed (1.5x), Spacious (1.75x), and Very Spacious (2.0x). More space between lines means your eyes have an easier time tracking from the end of one line to the start of the next. That matters more than most people realize, especially during long sessions.

**Character spacing** also has five levels — Default (0%), Slight (5%), Medium (10%), Wide (15%), and Very Wide (20%). This spreads the letters apart within each word. Wider spacing can make a noticeable difference for readability, particularly for readers with dyslexia where tightly packed letters tend to blur together.

<div class="tip-box">
<h4>{% icon "lightbulb", "inline-icon" %} Slight Changes, Significant Impact</h4>
<p>If you find reading tiring, try bumping up line spacing to Relaxed and character spacing to Slight. Slight changes make a significant difference over long reading sessions.</p>
</div>

#### Line Length

On an iPad in landscape, a line of text can stretch all the way across the screen. That is exhausting to read — your eyes have to travel too far from the end of one line to find the start of the next. The Characters Per Line setting constrains the text column width so lines stay a comfortable length.

You get separate sliders for portrait and landscape orientation because what works in one does not always work in the other. As you adjust, a green indicator appears when you are in the 50–75 character range — that is the sweet spot that reading research consistently points to as easiest on the eyes.

This is enabled by default on iPad, where it matters most. On iPhone the screen is already narrow enough that lines do not stretch uncomfortably, so it is off by default. But you can turn it on for either device if you want the control.

<div class="feature-box">
<h4>{% icon "eye", "inline-icon" %} Text Display with VoiceOver</h4>
<p>"Use System Text Size" integrates directly with iOS accessibility text size preferences — whatever you have set system-wide carries through to Listen2. OpenDyslexic is designed to reduce letter-swapping for readers with dyslexia. Atkinson Hyperlegible maximizes the visual distinction between characters, designed specifically for low-vision readers.</p>
</div>

</div>

<div class="content-section" id="bookmarks-search">

## 10. Bookmarks & Search

You are listening to a long essay, and the author drops a paragraph that completely reframes everything you thought about the topic. Or you are working through a textbook and need to flag three definitions across different chapters. Or you just want to jump back to that one scene in chapter twelve. Listen2 gives you three tools for finding your way around a document: bookmarks, search, and the table of contents.

#### Bookmarks

First, the distinction that matters most. Listen2 automatically saves your reading position every time you pause or leave. You never need to do anything to pick up where you left off. Bookmarks are a separate thing entirely — they are for marking specific spots you choose to come back to.

Tap the bookmark button in the reader's top bar to drop a bookmark at your current position. Tap it again to remove it. You can have as many bookmarks as you want in a single document — mark a passage you loved, a key argument, a reference you will need again.

To see all your bookmarks, tap the Table of Contents button in the top bar and switch to the **Bookmarks** tab. Each bookmark shows a snippet of the text at that position and how far through the document it sits. Tap one to jump straight there. Swipe left to delete it.

And if you re-import a document or its text changes, Listen2 detects that your bookmarks may have shifted. You will see a warning banner with your options: search manually for the passage using the text snippet shown, or remove the stale bookmark.

<div class="tip-box">
<h4>{% icon "lightbulb", "inline-icon" %} Bookmarks vs. Reading Position</h4>
<p>Bookmarks are for places you specifically want to revisit — a passage you loved, a key argument, a reference you will need again. Your regular reading position is saved automatically.</p>
</div>

#### Search

Tap the magnifying glass icon in the reader's top bar. Type at least three characters and results appear as a list, each showing the matching text with surrounding context and the chapter or section it belongs to. Tap any result to jump directly to that spot in the document. No complex query syntax, no settings to fiddle with — just type what you are looking for and go.

#### Table of Contents

Tap the Table of Contents button in the reader's top bar. For documents with chapters or sections — EPUBs, structured PDFs — you get a hierarchical list of all chapters and sub-sections. The section you are currently in has a checkmark so you can orient yourself at a glance.

If the document has a lot of entries, a search bar appears at the top to filter the list down. Tap any entry to jump to that chapter.

Note on plain text and clipboard imports: plain text files and clipboard imports will not have a table of contents. There is no structural chapter data to build one from. Bookmarks and search still work fine for those documents.

<div class="feature-box">
<h4>{% icon "eye", "inline-icon" %} Bookmarks & Search with VoiceOver</h4>
<p>The bookmark button in the top bar announces its current state — whether a bookmark exists at the current position or not. In the bookmarks list, swipe actions are available for deletion. Search results announce the matching text along with its chapter context. Table of Contents entries are announced with their heading level, so you can tell chapters from sub-sections.</p>
</div>

</div>

<div class="content-section" id="accessibility">

## 11. Accessibility

A text-to-speech app is, by definition, an accessibility tool. It takes text and turns it into audio. Accessibility here is not a feature that was tacked on after the fact — it is the whole premise. Every screen, every button, every interaction was designed to work with VoiceOver and other assistive technologies from the start.

<div class="feature-box">
<h4>{% icon "accessibility", "inline-icon" %} Accessibility Features at a Glance</h4>
<p>Full VoiceOver support on every screen. Two accessible fonts — OpenDyslexic and Atkinson Hyperlegible. Dynamic Type integration with all iOS accessibility size categories. Generous line spacing up to 2.0x and character spacing up to 20%. VoiceOver-aware auto-scroll that pauses when you explore the reader.</p>
</div>

#### VoiceOver

Every button has a descriptive label and hint. Interactive elements use appropriate traits — adjustable for sliders, selected for active states, header for section titles. None of this is generic placeholder text. Each label tells you what the control does, and each hint tells you what happens when you use it.

Rotor actions show up where they add value. In the Voice Library, you can Play Sample or Stop Sample directly from the rotor without hunting for buttons. In lists, delete is available as a custom action. These are the kinds of things that make the difference between an app that technically works with VoiceOver and one that feels good to use with it.

The reader deserves a special mention. When you explore the reading area with your finger, auto-scrolling pauses so the text stays still while you move through it. And if you lose your place, the "Jump to Playback Position" button (visually, this button looks like crosshairs) brings the current reading line back into view. Navigate the top and bottom bars like any standard toolbar: swipe through controls, double-tap to activate.

Each earlier section of this guide includes a VoiceOver callout covering that specific screen's interactions. If you are looking for how VoiceOver works on a particular screen, check that section first.

#### Accessible Fonts

Two fonts designed specifically for readability, right alongside every other font in the picker:

**OpenDyslexic** uses weighted letterforms — heavier at the bottom — to reduce the letter-swapping and rotation that can happen for readers with dyslexia. Letters stay anchored on the page.

**Atkinson Hyperlegible** was designed by the Braille Institute to maximize the visual distinction between similar characters. The difference between l, 1, and I is obvious. Same for 0 and O. Built for low-vision readers, but plenty of people find it easier to read in general.

#### Dynamic Type

Toggle "Use System Text Size" in text display settings and Listen2 follows your iOS text size preference. That includes all the larger accessibility size categories. Whatever you have configured system-wide carries straight through — no extra setup.

#### Spacing

Line spacing goes up to 2.0x and character spacing up to 20%. Both meet or exceed WCAG guidelines for text spacing. But you do not need an accessibility reason to use them. Wider spacing reduces eye strain during long reading sessions for everyone. Sliders support VoiceOver adjustable actions — swipe up to increase, swipe down to decrease.

<div class="tip-box">
<h4>{% icon "lightbulb", "inline-icon" %} Feedback Welcome</h4>
<p>If you are a VoiceOver user and run into anything that does not work as expected, contact support. Accessibility is a priority and feedback from VoiceOver users directly shapes the app.</p>
</div>

</div>

<div class="content-section" id="tips">

## 12. Tips, Troubleshooting & Support

Now that you have explored everything the app can do, here is the quick-reference card — practical advice, common fixes, and where to go if something does not work right.

#### Best Practices

<div class="tip-box">
<h4>{% icon "lightbulb", "inline-icon" %} Getting Started Right</h4>
<p>Download voices over Wi-Fi — they are 60–75 MB each. Use headphones for the best audio quality. And start at 1.0× speed, then work up gradually. Most people land around 1.2×–1.5× for casual content.</p>
</div>

If word-level highlighting feels too busy, switch to sentence highlighting. You still get a visual anchor tracking your position, but it is calmer. Less movement on the screen.

On iPad, check the line length setting. Without it, text stretches edge to edge on a 12.9-inch screen and your eyes have to travel a long distance to reach the next line. Constraining the width makes a real difference for longer reading sessions.

#### Trial & Purchase

<div class="feature-box">
<h4>{% icon "tag", "inline-icon" %} One-Time Purchase</h4>
<p>Listen2 has a 7-day free trial with full access to everything — no restrictions, no feature gates. After that, it is a one-time purchase of $24.99. Not a subscription. You buy it once and it is yours. No account needed. No sign-up. No data collection.</p>
</div>

If you reinstall the app or switch to a new device, go to Settings and tap "Restore Purchases." Your purchase is tied to your Apple ID, so it comes right back. No receipt to dig up, no code to enter.

#### Common Issues

**Voice sounds choppy or delayed.** Close other apps to free up memory. If you are using word-level highlighting, try switching to sentence-level — it uses less processing power. Restarting the app can help too. On older devices, this makes the biggest difference.

**Document will not import.** First, check the format. Listen2 supports PDF, EPUB, DOCX, TXT, MD, and DAISY. If a format should work but is not loading, try a different import method — "Import from Link" instead of the Share Extension, or vice versa.

<div class="warning-box">
<h4>{% icon "alert-triangle", "inline-icon" %} Scanned PDFs</h4>
<p>If a PDF imports but shows garbled text or nothing at all, it is likely a scanned image rather than real text. Listen2 cannot read pixels — it needs actual text content. Try copying the text manually from the source and using clipboard import instead.</p>
</div>

**Supertonic voice skips or clips words.** If a Supertonic voice occasionally swallows the end of a word or rushes through a phrase, try increasing the Duration Buffer in Voice Quality settings. The default values (Articulation Speed 0.79, Duration Buffer 14%) are tuned to minimize this, but some text patterns — especially long technical words or unusual names — benefit from a bit more room. Bumping Duration Buffer to 20% or lowering Articulation Speed to 0.75 can help.

**Supertonic voice switches between accents.** You might notice a Supertonic voice drifting between British and American accents within the same document. This is a known characteristic of the underlying model — the voice learned from a mix of accent styles, and certain text patterns can push it toward one or the other. Lowering the Variation slider in Voice Quality settings can help stabilize the accent. This is something we are actively working to improve.

**Highlighting seems out of sync.** This can happen with unusual formatting or at very fast speech rates. The audio itself is still correct — it is only the visual tracking that may drift. Switching to sentence-level highlighting smooths it out.

**Voice keeps mispronouncing a word.** Create a pronunciation rule. Go to quick settings (gear icon) while reading, tap Pronunciation Rules, and add a rule for that word. The trick is writing the replacement as a natural word the voice can read — not phonetic notation. For abbreviations, use periods between letters (N.A.S.A.) instead of spaces.

**Non-English voice mispronouncing numbers or dates.** Download the language pack for that voice's language. Go to the Voice Library, then Language Packs. These grammar packs teach the voice how to expand numbers, dates, and currency into proper spoken words. English has one built in, but other languages need the download.

**Missing Table of Contents.** Not all documents have chapter structure. Plain text files, clipboard imports, and some PDFs will not have a TOC. EPUBs almost always do. This is not a bug — there is simply no chapter data to work with.

#### Getting Help

If something is not covered here, reach out. In the app, go to Settings and tap Contact Support. That opens a pre-filled email with your device model and iOS version already included, so you do not have to look any of that up.

You can also email directly: **support@moonquakemedia.com**

And if you are enjoying Listen2, a review on the App Store goes a long way. It helps other people find the app. That is the single best thing you can do to support it.

</div>
