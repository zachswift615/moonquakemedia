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

For years, your options for hearing text read aloud on iOS came down to two choices: the built-in system voices (robotic, flat) or cloud-based services that charge monthly and send your documents to someone else's servers. Listen2 is a third option. It runs high-quality, natural-sounding voices entirely on your device. No account, no cloud processing, no tracking. Your documents stay on your phone and never leave.

In one line: Listen2 turns your documents into personal audiobooks using on-device text-to-speech.

Getting from zero to listening takes about 60 seconds. A voice comes pre-installed, so there's nothing to download or configure first. Here's the whole process:

1. **Import something** — tap the <span class="button-label">+</span> button and bring in a PDF, EPUB, text file, or paste from your clipboard.
2. **Press play.**
3. That's it. You're listening.

<div class="tip-box">
<h4>{% icon "lightbulb", "inline-icon" %} Sample Documents Included</h4>
<p>Not ready to import your own content yet? Listen2 ships with sample documents so you can hear how everything sounds, test out highlighting, and get a feel for the app before bringing in your own files.</p>
</div>

And because everything runs on-device, there's no signup screen, no email verification, no "create your account to continue." You open the app and you're in. No account needed.

Your documents are yours. Nothing gets uploaded, analyzed, or shared. The text-to-speech engine, the voices, the processing — it all happens locally on your iPhone or iPad. So whether you're importing work emails, personal journals, or anything else, that content stays private by default. Not as an opt-in setting. Just how it works.

Listen2 comes with a 7-day free trial so you can make sure it fits your workflow. After that, it's a one-time purchase. Not a subscription. You buy it once and you're done.

<div class="feature-box">
<h4>{% icon "eye", "inline-icon" %} With VoiceOver</h4>
<p>Listen2 is built with VoiceOver as a first class citizen. Every screen is fully navigable — the library, the reader, settings, voice management, all of it. Throughout this guide, you'll find VoiceOver-specific callouts like this one that cover gestures, rotor actions, and other details relevant to screen reader users.</p>
</div>

</div>

<div class="content-section" id="importing">

## 2. Importing Content

You've got text scattered everywhere. PDFs from work, articles you saved in Safari, ebooks you downloaded, notes you copied from an email. Listen2 can pull content from all of these places. Here's every way to get something into your library.

<div class="feature-box">
<h4>{% icon "file-text", "inline-icon" %} Supported File Types</h4>
<ul>
<li><strong>PDF</strong> — the universal document format. Text-based PDFs work best.</li>
<li><strong>EPUB</strong> — the standard ebook format. If you buy DRM-free books, this is what you get.</li>
<li><strong>DOCX</strong> — Word documents from Microsoft Office or Google Docs exports.</li>
<li><strong>TXT</strong> — plain text files. Simple and reliable.</li>
<li><strong>Markdown (.md)</strong> — formatting gets stripped for reading aloud, but the text comes through clean.</li>
<li><strong>DAISY</strong> — an accessibility-focused audiobook format used by many libraries and organizations.</li>
</ul>
</div>

#### From Files

Tap the <span class="button-label">+</span> button and choose "Import from Files." This opens the standard iOS Files picker, which means you're not limited to what's on your device. iCloud Drive, Dropbox, Google Drive, OneDrive — if it shows up in your Files app, you can import from it. Pick your file, and it lands in your library.

#### From Clipboard

This one is more useful than it sounds. Say you just asked ChatGPT a question while you're out on a walk and you want to hear it instead. Tap the copy button at the bottom of ChatGPT's message, switch to Listen2, tap <span class="button-label">+</span>, choose "Import from Clipboard," and done. Works with anything you can copy — web articles, emails, notes, recipes, whatever.

#### From a Link

Tap <span class="button-label">+</span>, choose "Import from Link," and paste in a URL. Listen2 fetches the page, strips out the navigation bars and ads, and keeps the article text. So you get the content without the clutter. Google Drive share links work here too — if someone shares a document with you via a Drive link, just paste it in and Listen2 will grab the file. The google drive link needs to have "anyone with link" can view permissions. Google drive files with "restricted" sharing access will not work.

#### Share Extension

This is probably the most convenient option for web browsing. You're in Safari or any other app, you see something you want to listen to later, and you tap the Share button. Choose Listen2 from the share sheet. The article gets imported and will be waiting in your library. No copy-pasting, no switching apps, no typing in URLs.

#### Siri Shortcut

If you've got text on your clipboard and want to skip the UI entirely, just say "Read my clipboard in Listen2." It imports the clipboard text and starts playing automatically. Hands-free from start to finish.

#### Collection Archives

If someone sends you a `.listen2collection` file — maybe a curated reading list, a course packet, or a set of documents organized into chapters — just open it. The entire collection imports with all its documents and structure intact. Tap the file, and everything lands in your library ready to go.

#### PDF Extraction (iOS 26+)

On iOS 26 or later, importing a PDF gives you a choice. Standard extraction works the way you'd expect — it pulls the text layer out of the PDF. But for complex layouts like multi-column academic papers or documents with unusual formatting, there's AI Vision. This is experimental, and it uses on-device layout analysis to figure out reading order in tricky PDFs. For most documents, Standard is all you need. Sometimes, the standard PDF extractor might jumble together tight multicolumn layouts and the AI Vision extractor may or may not handle this better. It's worth trying both methods one of them isn't importing correctly.

The standard PDF import method is not quite "standard", though. I built it from scratch to handle multi-column research papers, technical books and just about any PDF you can throw at it. Now the import is quite slow for large full sized book PDFs, so leave your phone open and let it finish importing. That's a one time cost to extracting all the text, filtering out footnotes, other noise, re-joining hyphenated line breaks that kill voice reader prosody etc. 

<div class="warning-box">
<h4>{% icon "alert-triangle", "inline-icon" %} Scanned PDFs</h4>
<p>If a PDF is actually just images of pages — a scanned book, a photographed document — there's no text layer for Listen2 to extract. These won't import well, or at all. If you can't select text in the PDF on your computer, Listen2 won't be able to read it either. For scanned documents, you'll need to run them through an OCR tool first to add a text layer.</p>
</div>

<div class="feature-box">
<h4>{% icon "eye", "inline-icon" %} With VoiceOver</h4>
<p>The import menu is a standard action sheet, so VoiceOver reads each option clearly as you swipe through them. The file picker is the system Files app picker — fully accessible with the same navigation you're used to everywhere else on iOS.</p>
</div>

</div>

<div class="content-section" id="library">

## 3. Your Library

Once you start importing documents, you need a place to find them again. That's the Library tab — the first thing you see when you open Listen2.

Think of it as a stack of everything you've brought in, sorted by what you touched most recently. Whatever you were listening to last is sitting right at the top. You don't organize it. You don't file things into folders. It just stays out of your way and keeps the thing you care about most front and center.

Each row in the list shows you what you need at a glance: the document title, a format icon or cover thumbnail, your reading progress as a percentage if you've started it, and how long ago you last opened it. So you can tell the difference between "that PDF I was halfway through yesterday" and "that EPUB I haven't touched in two weeks" without opening either one.

When your library gets big enough that scrolling feels tedious, there's a search bar at the top. Type a few characters of a title and the list filters down instantly.

You'll also notice a second tab at the top — Collections. That's for curated playlists of documents, and we'll cover it in detail in Section 8. For now, just know it's there.

To manage your documents, swipe left on any row to delete it. Or press and hold on a document to bring up a context menu — from there you can add it to a collection.

<div class="tip-box">
<h4>{% icon "lightbulb", "inline-icon" %} Automatic Position Saving</h4>
<p>Listen2 saves your position automatically whenever you pause or leave a document. Come back three days later, open it up, and you're right where you stopped. That being said, there are times when the auto position saving doesn't work like if the app crashes before saving or if your phone dies during playback. I prefer the belt and suspenders approach and use bookmarks liberally.</p>
</div>

But here's the thing that matters most: Listen2 remembers where you are in every document, not just the last one. You can jump between five different books over the course of a week and each one picks up exactly where you left off. It's the kind of thing you stop noticing because it just works.

<div class="feature-box">
<h4>{% icon "eye", "inline-icon" %} With VoiceOver</h4>
<p>Navigate the document list by swiping left and right. Each row announces the document title, reading progress, and time since last read. Delete is available as a custom action — swipe up or down on a row to find it. The search field sits at the top of the screen.</p>
</div>

</div>

<div class="content-section" id="reader">

## 4. The Reader

This is the screen you'll stare at more than any other. Once you open a document and press play, the reader is where everything happens — following along, navigating, adjusting speed, jumping between chapters. So it's worth knowing what every button does and the few gestures that make a real difference.

#### Top Bar

Starting from the left, you've got a row of tools that handle navigation and discovery.

The **back arrow** returns you to the Library. The **bookmark button** drops a bookmark at your current position, or removes one if there's already a bookmark there. **Search** lets you find text within the document. **Table of Contents** shows chapters and sections so you can jump straight to the part you care about. The **gear icon** opens Quick Settings — voice, highlighting, display options — without kicking you out of the reader. And the **Go Back button** works like a browser's back button: it returns you to wherever you were before your last jump or seek.

#### Jump to Playback Position

This one deserves its own moment. The **crosshairs button** in the top bar snaps the view back to wherever the voice is currently reading.

Here's when it matters. You're listening to a long chapter and you scroll up to re-read a paragraph you half-caught. Now the voice is reading somewhere off-screen — maybe two pages below where you're looking. Tap the crosshairs button and the view jumps right back to the active line. No hunting, no guessing where playback got to while you were gone.

You'll reach for this one more than you expect.

#### The Text

The text area isn't just a display — it's interactive.

**Tap any paragraph** and playback jumps to the start of that paragraph. Useful when you want to skip ahead a few paragraphs or rewind without scrubbing through a progress bar.

**Double-tap any specific word** and playback seeks to exactly that word. Handy when you want to re-hear a tricky passage or start from a specific spot mid-sentence.

<div class="tip-box">
<h4>{% icon "lightbulb", "inline-icon" %} Double-Tap to Seek</h4>
<p>Double-tap any word and playback jumps right to it. Handy when you want to re-hear a tricky passage or start from a specific spot. It works anywhere in the document — even paragraphs the voice hasn't reached yet.</p>
</div>

Between these two gestures — tap for paragraph, double-tap for word — you can get to any point in a document in about a second. Way faster than dragging a scrubber.

#### Bottom Bar

The bottom bar handles playback controls and quick adjustments, left to right.

The **speed button** shows your current rate (like "1.0x") and opens a speed picker when you tap it. Next is the **progress bar** with a percentage readout so you always know how far through the document you are. The **voice picker** lets you swap voices on the fly without opening settings. Then the **skip back** and **skip forward** buttons jump between paragraphs. And the **play/pause button** sits right in the center where your thumb expects it.

#### Collection Context

When you open a document as part of a collection, the reader adds a bit of context at the top — the collection name and your position, something like "Morning Reading - 2 of 5." Extra skip buttons also appear so you can jump forward or backward between documents in the collection without going back to the library. Everything else works the same.

<div class="feature-box">
<h4>{% icon "eye", "inline-icon" %} With VoiceOver</h4>
<p>All buttons in the top and bottom bars have descriptive labels and hints, so you always know what a control does before you activate it. One thing to note: double-tap-to-seek on words is disabled when VoiceOver is running, because VoiceOver uses its own double-tap gesture for activation. You can select a line of text via exploring and double tap the line with a single finger to start playback from that line. When VoiceOver explore is active on the text surface — your finger is on the screen moving between elements — auto-scrolling pauses so the text stays still while you explore. Once you lift your finger, use the crosshairs "Jump to Playback Position" button in the top bar to snap back to the current reading position.</p>
</div>

</div>

<div class="content-section" id="playback">

## 5. Playback

You've imported a document, you've opened it in the reader. Now you need to actually control the thing. The good news: the controls you'll reach for most are dead simple, and they work even when you're not looking at the screen.

#### Play and Pause

The big button at the bottom of the reader. Tap it and the voice starts. Tap it again and it stops. But you don't have to be in the app to do this. Lock your screen, switch to another app, pull up Control Center — play and pause work from all of them. Same goes for your AirPods or any headphone remote. One tap to toggle. That's it.

#### Skipping Forward and Back

The skip buttons sit on either side of the play button. By default they jump by paragraph, which is the right move for most reading. But if you want finer control, you can switch to sentence-level skipping in settings. These also work from the lock screen and headphone remote, so you can rewind a paragraph without pulling your phone out of your pocket.

#### Speed

Tap the speed button in the bottom bar to open the speed sheet. You can go from 0.5x all the way up to 2.5x, in 0.1x increments. Start at 1.0x. Seriously. Then bump it up a notch every few sessions. Most people land somewhere around 1.2x to 1.5x for casual reading. For dense or technical material, 1.0x is the right call. There's no badge of honor for listening fast — the goal is comprehension.

<div class="tip-box">
<h4>{% icon "lightbulb", "inline-icon" %} Adjust Speed Gradually</h4>
<p>Start at 1.0× and bump it up 0.1× at a time. You'll be surprised how quickly 1.3× starts to feel natural. Your brain adapts faster than you'd expect, and you can always dial it back for harder material.</p>
</div>

#### Paragraph Pause

This one's subtle but it matters. There's a configurable gap between paragraphs — from 0.0 seconds up to 1.0 seconds. It gives you a beat to process what you just heard before the next paragraph starts. Think of it like the white space on a printed page. You'll find it in settings.

#### Background Playback and Now Playing

Switch apps, lock your screen, put your phone in your bag. The voice keeps going. Your lock screen shows the document title, current section or chapter name, and cover artwork if the document has it. So you always know what's playing at a glance, even without opening Listen2.

<div class="feature-box">
<h4>{% icon "headphones", "inline-icon" %} Control Playback from Anywhere</h4>
<p>You can control playback from five places: the in-app bottom bar, the lock screen, Control Center, AirPods or any headphone remote, and Apple Watch. Same controls, same behavior, no matter where you reach for them.</p>
</div>

<div class="feature-box">
<h4>{% icon "eye", "inline-icon" %} With VoiceOver</h4>
<p>The speed control supports VoiceOver adjustable actions — swipe up to increase speed, swipe down to decrease, in 0.1× increments. The Play/Pause button carries the "Starts Media Session" accessibility trait, so VoiceOver announces it appropriately. Lock screen and Control Center controls work identically with VoiceOver active — no special gestures needed.</p>
</div>

</div>

<div class="content-section" id="highlighting">

## 6. Highlighting & Auto-Scroll

Reading along while someone talks is surprisingly hard if the words aren't visually tracking with the voice. Your eyes lose the spot, you glance away for a second, and suddenly you're scanning the page trying to find where the audio is. Highlighting and auto-scroll solve this together — one shows you which words are being spoken, the other makes sure those words stay on screen.

#### Highlighting

You've got three levels to choose from: **Word**, **Sentence**, and **Off**.

**Word** is the default, and it's the most precise. Each word lights up the moment it's spoken. Listen2 runs a speech alignment engine entirely on your device to figure out exactly when each word starts and ends. But if you don't pay attention to the word highlighting, you may get better battery performance having it set to "sentence" or "off". 

**Sentence** highlights the full sentence being read. Less visual movement, still gives you a clear anchor for where the voice is.

**Off** turns highlighting off entirely. You're just listening.

There's also a **line band** option — a subtle highlight strip behind the current line. It's only available with Word-level highlighting, and you toggle it independently in settings. Think of it as a reading ruler. If you're following along closely, it gives your eyes one more thing to lock onto.

One thing worth knowing: on older devices with less available memory, Listen2 automatically caps highlighting at Sentence level to keep things running smoothly. If that applies to your device, you'll see a note in settings explaining why Word isn't available.

<div class="feature-box">
<h4>{% icon "sparkles", "inline-icon" %} When to Use Each Highlighting Level</h4>
<p><strong>Word:</strong> Best for close following, language learning, or reading along carefully. <strong>Sentence:</strong> Good balance of visual tracking without too much movement. <strong>Off:</strong> When you're just listening and not looking at the screen.</p>
</div>

<div class="tip-box">
<h4>{% icon "lightbulb", "inline-icon" %} Dial It Down</h4>
<p>If word-level highlighting feels too busy, try sentence highlighting. It still gives you a visual anchor without the per-word movement.</p>
</div>

#### Auto-Scroll

Two modes here: **Page-follow** and **Centered**.

**Page-follow** is the default. You read down the page naturally, and when the highlighted line gets close to the bottom of the screen, the view scrolls forward to keep it visible. It feels like reading a book where someone turns the page for you right when you need it.

**Centered** works differently. It pins the currently spoken line to the middle of the screen. The text flows past you like a teleprompter — your eyes stay in one spot and the words come to you. Great for study, close reading, or language learning where you want every word front and center.

But here's the thing. Centered mode requires Word-level highlighting to work. It needs that precise per-word timing to know exactly which line to pin. If you switch highlighting to Sentence or Off, centered mode automatically falls back to Page-follow and shows a brief toast message letting you know what happened. No crash, no confusion — it just gracefully steps down and tells you why.

So when should you use which? Page-follow is the one for casual listening — you glance at the screen now and then, maybe you're cooking or commuting and checking in occasionally. Centered is for when the screen has your full attention and you want to lock in. Two different modes for two different situations.

Both settings live in Quick Settings, accessible from the gear button in the reader. You can switch between them mid-session without interrupting playback.

<div class="feature-box">
<h4>{% icon "eye", "inline-icon" %} With VoiceOver</h4>
<p>Highlighting and auto-scroll are visual features — they don't affect the audio output or VoiceOver announcements. VoiceOver users rely on the spoken content directly. Both settings are adjustable in Quick Settings from the reader's gear button.</p>
</div>

</div>

<div class="content-section" id="voices">

## 7. Voices & Languages

The voice is the whole experience. A great voice makes a two-hour reading session feel effortless. A bad one makes you quit after three paragraphs. So this is worth getting right.

Listen2 ships with one high-quality English voice already installed. No downloads, no setup — you can start listening the moment you open the app. But that's just the starting point.

#### Browsing Voices

Open the Voice Library from the main settings screen or from your library. You'll find dozens of voices spanning English, Spanish, French, German, Italian, Portuguese, Dutch, Polish, Russian, Chinese, Japanese, Korean, Arabic, Hindi, and more.

<div class="feature-box">
<h4>{% icon "globe", "inline-icon" %} Available Languages</h4>
<p>Listen2's Voice Library covers a wide range of languages: English, Spanish, French, German, Italian, Portuguese, Dutch, Polish, Russian, Chinese, Japanese, Korean, Arabic, Hindi, and others. New voices and languages are added over time.</p>
</div>

Every voice has a play button right on the row so you can preview it before committing to a download. Filter the list by language, quality level (high or medium), or download status — all voices, downloaded only, or not yet downloaded. Sort by name, language, or downloaded-first. Between the filters and sorting, you can narrow things down fast even as the library grows.

#### Downloading & Managing

Tap the download button next to any voice and you'll see it move through three phases: downloading, decompressing, and installing. Most voices run 60 to 75 MB each, so WiFi is the way to go here.

To delete a voice, swipe left on it in the Voice Library. The bundled voice can't be removed — it's your safety net. At the bottom of the library screen there's a storage info section that tells you how many voices you have installed and the total disk space they're using. Handy when you're cleaning house.

And switching voices while you're reading is fast. Tap the voice button in the reader's bottom bar to open the voice picker. It shows all your downloaded voices, filterable by language. Tap one to switch. You can audition voices right from the picker too, so you don't have to leave the reader to find the right fit.

#### Multi-Speaker Voices

Some voice models pack multiple speakers into a single download. You'll spot these by the speaker count badge on the voice row. Tap one and you'll see the full speaker list. For voices with more than 20 speakers, there's a searchable speaker browser — type to filter and audition individual speakers without scrolling through a massive list.

This matters more than you'd think. Two speakers from the same voice model can sound completely different — one warm and conversational, another crisp and formal. Same underlying engine, very different feel.

Note that single speaker voices usually sound better overall than a multi-speaker voice, but this is subjective to each person so try them both out and see for yourself.

<div class="tip-box">
<h4>{% icon "lightbulb", "inline-icon" %} Experiment with Voices</h4>
<p>Try a few different voices. Some feel better for fiction, others for technical content. And if a voice has multiple speakers, audition a few — the same voice model can sound very different between speakers.</p>
</div>

#### Language Packs

Non-English voices can optionally download a grammar pack for their language. These handle text normalization — turning things like "1,234" into "one thousand two hundred thirty-four" instead of reading out individual digits. Same for dates, currency, and other formatted text.

If a voice needs a grammar pack, you'll see a prompt. Download it, and numbers and dates will sound natural. You can manage these from the Language Packs screen — download, delete, or retry if something went wrong. They're small and make a real difference in how polished the output sounds.

#### Voice Tuning

Two sliders in settings let you shape how your voice sounds. Both apply to Piper voices.

**Expressiveness** (0.00 to 1.00) controls pitch and tone variation. Set it low and the voice goes flat, almost monotone. Set it high and you get more animated, dynamic delivery. Default is 0.667.

**Duration Variation** (0.00 to 1.00) controls phoneme timing — how long each sound is held. Low means even, mechanical pacing. High means more natural rhythm with subtle pauses and rushes. Default is 0.80.

There's a Reset to Defaults button if you wander too far and want to start over. And if you tweak these settings while audio is already playing, you get a choice: "Apply Now" clears the audio buffer and switches immediately, or "Apply Soon" lets the current audio finish before the new settings kick in.

<div class="feature-box">
<h4>{% icon "eye", "inline-icon" %} With VoiceOver</h4>
<p>Voice rows in the Voice Library have rotor actions for "Play Sample" and "Stop Sample" so you can preview without navigating away. Download progress and status are announced as they change. The multi-speaker browser is a searchable list — type to filter, double-tap to select a speaker.</p>
</div>

</div>

<div class="content-section" id="collections">

## 8. Collections

You know the feeling of making a great mixtape. You pick the tracks, put them in the right order, maybe add a little commentary between songs to set the mood. Collections are that, but for reading. You grab a set of documents from your library, arrange them in the order you want, and hit play. Everything plays through front to back — one article flows into the next, with optional narrated intros between them that you write yourself.

Line up your morning commute listening. Build a course reading list. Put together a set of essays for your book club. One tap and the whole thing plays with a little chime between documents.

#### Creating a Collection

Go to the Collections tab in your library and tap the + button to create a new one. Give it a name. You can optionally add a description and cover artwork from your photo library, but neither is required.

Then add documents. You'll see your full library to pick from. Once they're in, drag to reorder them the way you want, swipe to remove anything that doesn't belong. The collection detail screen shows an item count, a document count, and a play button right at the top.

You can also add documents to an existing collection without leaving your library. Long-press any document and choose "Add to Collection" from the context menu. Quick and easy.

#### Intros & Citations

Between any two documents, you can add an intro — a short text segment you write yourself that gets read aloud as a transition. Think of it as the little commentary between tracks on a good radio station. Something like "This next piece is from 1962, when the author was living in Paris..." or even just a sentence of context about what's coming next and why you included it.

Intros show up as expandable items in the collection detail view, each with their own play button. They get narrated by your current voice just like any other text. When you play through a collection, intros play automatically between documents. No extra taps.

For each document in a collection, you can also add source citations — a title and URL pair. Handy for attributing web articles, linking back to the original publication, or giving your reading club members a way to find the source material.

<div class="tip-box">
<h4>{% icon "lightbulb", "inline-icon" %} Guided Listening</h4>
<p>Write intros between your documents to create a guided listening experience. Even a sentence or two of context between articles can make a collection feel like a curated podcast.</p>
</div>

#### Playing a Collection

Tap Play on the collection detail screen and it starts from the top. If you've already been listening, it picks up at the first document you haven't finished. Progress badges appear on each item: not started, in-progress with a percentage, or done. So you always know where you left off.

Inside the reader, the top bar shows the collection name and your position — something like "Morning Reading - 3 of 7." Extra skip buttons appear on either side of the standard controls so you can jump forward or backward between documents in the collection. Skip buttons jump between documents only, not intros. Intros play automatically as transitions when you reach them.

Everything else in the reader works exactly the same. Same speed controls, same highlighting, same playback gestures. The collection just adds that extra layer of structure around it.

#### Sharing & Importing

Tap the export button in the toolbar on a collection's detail screen. Listen2 packages everything up — documents, intros, structure, the works — into a `.listen2collection` file. Share it via AirDrop, Messages, email, whatever you've got. The recipient opens it in Listen2 and gets the whole collection intact, ready to play.

Importing works the other direction. Open a `.listen2collection` file from Files, a link, or another app and Listen2 handles it. If you already have that collection, it lets you know.

<div class="feature-box">
<h4>{% icon "list-bullet", "inline-icon" %} What to Use Collections For</h4>
<p><strong>Morning commute playlist:</strong> Line up articles and essays for your drive or train ride. <strong>Course reading list:</strong> Organize readings by week or topic with intro commentary between them. <strong>Book club picks:</strong> Curate selections and share them as a single file. <strong>Research paper sets:</strong> Group related papers with context intros. <strong>Sharing with friends:</strong> Package up your favorite reads and send them to someone who'd enjoy them.</p>
</div>

<div class="feature-box">
<h4>{% icon "eye", "inline-icon" %} With VoiceOver</h4>
<p>Drag-to-reorder items uses standard VoiceOver drag-and-drop actions. Each item in the collection detail view announces its title and progress status. Intro text segments have their own Play button, accessible as a separate element. The export button is in the toolbar and labeled "Export collection."</p>
</div>

</div>

<div class="content-section" id="text-display">

## 9. Text Display

You're going to be staring at this text for a while. Maybe hours. So it should look the way you want it to look — the right font, the right size, the right amount of breathing room between lines. Listen2 gives you real control over all of this, and it's worth spending a minute dialing it in.

#### Fonts

Thirteen fonts across four categories. In the font picker, each font name is rendered in its own typeface, so you can see exactly what you're choosing before you tap.

<div class="feature-box">
<h4>{% icon "type", "inline-icon" %} Font Categories</h4>
<p><strong>Serif:</strong> Georgia, New York, Palatino, Charter. <strong>Sans-Serif:</strong> System (the default iOS font), Helvetica Neue, Avenir, Avenir Next. <strong>Accessibility:</strong> OpenDyslexic, Atkinson Hyperlegible. <strong>Monospace:</strong> SF Mono, Menlo, Courier.</p>
</div>

Serif fonts tend to feel more like a printed book. Sans-serif fonts feel cleaner and more modern. And the two accessibility fonts are there for a reason — OpenDyslexic is designed to reduce letter-swapping for readers with dyslexia, and Atkinson Hyperlegible maximizes the visual distinction between similar-looking characters for low-vision readers. They're not afterthoughts tucked in a submenu. They're right there in the picker alongside everything else.

#### Size

A slider that runs from 10pt to 40pt. Drag it until the text feels right. But there's also a "Use System Text Size" toggle — flip that on and Listen2 follows whatever you've set in iOS Settings under Display & Text Size, including the larger accessibility sizes. If you've already configured your whole phone for bigger text, Listen2 picks that up automatically. No extra work.

#### Spacing

Two settings here: line spacing and character spacing.

**Line spacing** has five levels — Compact (1.0x, lines right on top of each other), Normal (1.25x, the default), Relaxed (1.5x), Spacious (1.75x), and Very Spacious (2.0x). More space between lines means your eyes have an easier time tracking from the end of one line to the start of the next. That matters more than most people realize, especially during long sessions.

**Character spacing** also has five levels — Default (0%), Slight (5%), Medium (10%), Wide (15%), and Very Wide (20%). This spreads the letters apart within each word. Wider spacing can make a noticeable difference for readability, particularly for readers with dyslexia where tightly packed letters tend to blur together.

<div class="tip-box">
<h4>{% icon "lightbulb", "inline-icon" %} Small Changes, Big Impact</h4>
<p>If you find reading tiring, try bumping up line spacing to Relaxed and character spacing to Slight. Small changes make a big difference over long reading sessions.</p>
</div>

#### Line Length

On an iPad in landscape, a line of text can stretch all the way across the screen. That's exhausting to read — your eyes have to travel too far from the end of one line to find the start of the next. The Characters Per Line setting constrains the text column width so lines stay a comfortable length.

You get separate sliders for portrait and landscape orientation, because what works in one doesn't always work in the other. As you adjust, a green indicator appears when you're in the 50-75 character range — that's the sweet spot that reading research consistently points to as easiest on the eyes.

This is enabled by default on iPad, where it matters most. On iPhone the screen is already narrow enough that lines don't stretch uncomfortably, so it's off by default. But you can turn it on for either device if you want the control.

<div class="feature-box">
<h4>{% icon "eye", "inline-icon" %} With VoiceOver</h4>
<p>"Use System Text Size" integrates directly with iOS accessibility text size preferences — whatever you've set system-wide carries through to Listen2. OpenDyslexic is designed to reduce letter-swapping for readers with dyslexia. Atkinson Hyperlegible maximizes the visual distinction between characters, designed specifically for low-vision readers.</p>
</div>

</div>

<div class="content-section" id="bookmarks-search">

## 10. Bookmarks & Search

You're listening to a long essay and the author drops a paragraph that completely reframes everything you thought about the topic. Or you're working through a textbook and need to flag three definitions across different chapters. Or you just want to jump back to that one scene in chapter twelve. Listen2 gives you three tools for finding your way around a document: bookmarks, search, and the table of contents.

#### Bookmarks

First, the distinction that matters most. Listen2 automatically saves your reading position every time you pause or leave. You never need to do anything to pick up where you left off. Bookmarks are a separate thing entirely — they're for marking specific spots you choose to come back to.

Tap the bookmark button in the reader's top bar to drop a bookmark at your current position. Tap it again to remove it. You can have as many bookmarks as you want in a single document — mark a passage you loved, a key argument, a reference you'll need again.

To see all your bookmarks, tap the Table of Contents button in the top bar and switch to the **Bookmarks** tab. Each bookmark shows a snippet of the text at that position and how far through the document it sits. Tap one to jump straight there. Swipe left to delete it.

And if you re-import a document or its text changes, Listen2 detects that your bookmarks may have shifted. You'll see a warning banner with your options: search manually for the passage using the text snippet shown, or remove the stale bookmark.

<div class="tip-box">
<h4>{% icon "lightbulb", "inline-icon" %} Bookmarks vs. Reading Position</h4>
<p>Bookmarks are for places you specifically want to revisit — a passage you loved, a key argument, a reference you'll need again. Your regular reading position is saved automatically.</p>
</div>

#### Search

Tap the magnifying glass icon in the reader's top bar. Type at least three characters and results appear as a list, each showing the matching text with surrounding context and the chapter or section it belongs to. Tap any result to jump directly to that spot in the document. That's it. No complex query syntax, no settings to fiddle with — just type what you're looking for and go.

#### Table of Contents

Tap the Table of Contents button in the reader's top bar. For documents with chapters or sections — EPUBs, structured PDFs — you get a hierarchical list of all chapters and sub-sections. The section you're currently in has a checkmark so you can orient yourself at a glance.

If the document has a lot of entries, a search bar appears at the top to filter the list down. Tap any entry to jump to that chapter.

One thing to know: plain text files and clipboard imports won't have a table of contents. There's no structural chapter data to build one from. Bookmarks and search still work fine for those documents.

<div class="feature-box">
<h4>{% icon "eye", "inline-icon" %} With VoiceOver</h4>
<p>The bookmark button in the top bar announces its current state — whether a bookmark exists at the current position or not. In the bookmarks list, swipe actions are available for deletion. Search results announce the matching text along with its chapter context. Table of Contents entries are announced with their heading level, so you can tell chapters from sub-sections.</p>
</div>

</div>

<div class="content-section" id="accessibility">

## 11. Accessibility

A text-to-speech app is, by definition, an accessibility tool. It takes text and turns it into audio. So accessibility here isn't a feature that got bolted on after the fact — it's the whole premise. Every screen, every button, every interaction was designed to work with VoiceOver and other assistive technologies from the start.

<div class="feature-box">
<h4>{% icon "accessibility", "inline-icon" %} Accessibility Features at a Glance</h4>
<p>Full VoiceOver support on every screen. Two accessible fonts — OpenDyslexic and Atkinson Hyperlegible. Dynamic Type integration with all iOS accessibility size categories. Generous line spacing up to 2.0x and character spacing up to 20%. VoiceOver-aware auto-scroll that pauses when you explore the reader.</p>
</div>

#### VoiceOver

Every button has a descriptive label and hint. Interactive elements use appropriate traits — adjustable for sliders, selected for active states, header for section titles. None of this is generic placeholder text. Each label tells you what the control does, and each hint tells you what happens when you use it.

Rotor actions show up where they add value. In the Voice Library, you can Play Sample or Stop Sample directly from the rotor without hunting for buttons. In lists, delete is available as a custom action. These are the kinds of things that make the difference between an app that technically works with VoiceOver and one that actually feels good to use with it.

The reader deserves a special mention. When you explore the reading area with your finger, auto-scrolling pauses so the text stays still while you move through it. And if you lose your place, the crosshairs button — "Jump to Playback Position" — brings the current reading line back into view. Navigate the top and bottom bars like any standard toolbar: swipe through controls, double-tap to activate.

Each earlier section of this guide includes a "With VoiceOver" box covering that specific screen's interactions. If you're looking for how VoiceOver works on a particular screen, check that section first.

#### Accessible Fonts

Two fonts designed specifically for readability, right alongside every other font in the picker:

**OpenDyslexic** uses weighted letterforms — heavier at the bottom — to reduce the letter-swapping and rotation that can happen for readers with dyslexia. Letters stay anchored on the page.

**Atkinson Hyperlegible** was designed by the Braille Institute to maximize the visual distinction between similar characters. The difference between l, 1, and I is obvious. Same for 0 and O. Built for low-vision readers, but plenty of people just find it easier to read in general.

#### Dynamic Type

Toggle "Use System Text Size" in text display settings and Listen2 follows your iOS text size preference. That includes all the larger accessibility size categories. Whatever you've configured system-wide carries straight through — no extra setup.

#### Spacing

Line spacing goes up to 2.0x and character spacing up to 20%. Both meet or exceed WCAG guidelines for text spacing. But you don't need an accessibility reason to use them. Wider spacing reduces eye strain during long reading sessions for everyone. Sliders support VoiceOver adjustable actions — swipe up to increase, swipe down to decrease.

<div class="tip-box">
<h4>{% icon "lightbulb", "inline-icon" %} Feedback Welcome</h4>
<p>If you're a VoiceOver user and run into anything that doesn't work as expected, contact support. Accessibility is a priority and feedback from VoiceOver users directly shapes the app.</p>
</div>

</div>

<div class="content-section" id="tips">

## 12. Tips, Troubleshooting & Support

You've seen everything the app can do. This section is the quick-reference card — practical advice, common fixes, and where to go if something doesn't work right.

#### Best Practices

<div class="tip-box">
<h4>{% icon "lightbulb", "inline-icon" %} Getting Started Right</h4>
<p>Download voices over WiFi — they're 60–75 MB each. Use headphones for the best audio quality. And start at 1.0× speed, then work up gradually. Most people land around 1.2×–1.5× for casual content.</p>
</div>

If word-level highlighting feels too busy, switch to sentence highlighting. You still get a visual anchor tracking your position, but it's calmer. Less movement on the screen.

On iPad, check the line length setting. Without it, text stretches edge to edge on a 12.9-inch screen and your eyes have to travel a mile to reach the next line. Constraining the width makes a real difference for longer reading sessions.

#### Trial & Purchase

<div class="feature-box">
<h4>{% icon "tag", "inline-icon" %} One-Time Purchase</h4>
<p>Listen2 has a 7-day free trial with full access to everything — no restrictions, no feature gates. After that, it's a one-time purchase of $24.99. Not a subscription. You buy it once and it's yours. No account needed. No sign-up. No data collection.</p>
</div>

If you reinstall the app or switch to a new device, go to Settings and tap "Restore Purchases." Your purchase is tied to your Apple ID, so it comes right back. No receipt to dig up, no code to enter.

#### Common Issues

**Voice sounds choppy or delayed.** Close other apps to free up memory. If you're using word-level highlighting, try switching to sentence-level — it uses less processing power. Restarting the app can help too. On older devices, this makes the biggest difference.

**Document won't import.** First, check the format. Listen2 supports PDF, EPUB, DOCX, TXT, MD, and DAISY. If a format should work but isn't loading, try a different import method — "Import from Link" instead of the Share Extension, or vice versa.

<div class="warning-box">
<h4>{% icon "alert-triangle", "inline-icon" %} Scanned PDFs</h4>
<p>If a PDF imports but shows garbled text or nothing at all, it's likely a scanned image rather than real text. Listen2 can't read pixels — it needs actual text content. Try copying the text manually from the source and using clipboard import instead.</p>
</div>

**Highlighting seems out of sync.** This can happen with unusual formatting or at very fast speech rates. The audio itself is still correct — it's only the visual tracking that may drift. Switching to sentence-level highlighting smooths it out.

**Non-English voice mispronouncing numbers or dates.** Download the language pack for that voice's language. Go to the Voice Library, then Language Packs. These grammar packs teach the voice how to expand numbers, dates, and currency into proper spoken words. English has one built in, but other languages need the download.

**Missing Table of Contents.** Not all documents have chapter structure. Plain text files, clipboard imports, and some PDFs won't have a TOC. EPUBs almost always do. This isn't a bug — there's just no chapter data to work with.

#### Getting Help

If something isn't covered here, reach out. In the app, go to Settings and tap Contact Support. That opens a pre-filled email with your device model and iOS version already included, so you don't have to look any of that up.

You can also email directly: **support@moonquakemedia.com**

And if you're enjoying Listen2, a review on the App Store goes a long way. It helps other people find the app. That's the single best thing you can do to support it.

</div>
