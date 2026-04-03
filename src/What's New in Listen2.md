What's New in Listen2

KOKORO VOICE ENGINE
A premium neural voice engine with 53 voices across 8 languages. Kokoro produces more expressive, natural-sounding speech with richer intonation and smoother prosody. All voices are included in a single engine download — tap download on any Kokoro voice and you get the engine plus every voice. Requires 6 GB RAM. Speed capped at 1.4x for real-time synthesis. The model is larger, so your device will produce more heat during extended playback — but once you hear the quality, it is hard to go back.

LISTEN2 BUNDLED VOICE
Zara, a custom-trained neural voice, now ships bundled in the app. No download needed — you are listening in seconds. Marked with a gold "Listen2" badge to distinguish it from downloadable voices. Always available as a fallback if your selected voice is unavailable.

TIMER
Set a timer and Listen2 pauses playback when it expires. Choose from 15, 30, 45, or 60 minute presets, or set any custom duration from 1 to 120 minutes. An optional audio cue plays a gentle tone when time is up. The countdown appears in the bottom bar while active. Full VoiceOver accessibility with descriptive labels on every control.

DURATION ESTIMATION AND PROGRESS BAR
Listen2 now estimates how long your document will take to read. A seekable progress bar shows your position with elapsed and remaining time in H:MM:SS format. Drag the bar or enter a percentage to jump anywhere. The lock screen scrubber lets you seek without opening the app. Duration refines in real time as you listen, getting more accurate over the first few minutes.

ENGINE BADGES
Every voice in the Voice Library now displays a color-coded badge — blue for Piper, purple for Kokoro, orange for Supertonic, gold for the bundled Listen2 voice, gray for System. VoiceOver reads each badge as "{engine} engine."

VOICE LIBRARY PERFORMANCE
The Voice Library now loads instantly from cache, then refreshes in the background. Filter changes are debounced to eliminate stutter. Download progress updates per-voice instead of refreshing the entire list.

NEW LANGUAGES
Vietnamese, Greek, Turkish, and Hindi added to the Piper engine, bringing the total to 13 languages across all engines.

SUPERTONIC VOICE ENGINE
A second TTS engine joins Piper. Supertonic uses flow-matching neural models that we custom-converted to run natively on Apple's Neural Engine via CoreML.
The result is noticeably more natural speech — smoother prosody, better rhythm, clearer articulation. Available in English,
Spanish, French, and Portuguese. Download voices from the Voice Library and switch between engines at any time. 
Note that Supertonic voices use a fundamentally different voice architecture than Piper and can be less deterministic with their pronunciation and accuracy. 

If you have a custom voice from Supertonic's Voice Builder, you can import it directly from the Voice Library.

VOICE TUNING & PRESETS
Fine-tune any voice with quality sliders — noise scale, length scale, articulation speed, duration buffer, and more. Save your favorite settings as presets to switch between tuning profiles quickly. 

PRONUNCIATION RULE PREVIEW
Preview how a pronunciation rule sounds before saving it. Tap the preview button to hear the replacement spoken aloud so you can
dial it in without trial and error.

FIGURE DESCRIPTIONS 
For PDF and EPUB files (more file type compatability coming), images are detected, fed through a local image AI model that generates figure descriptions. Generate brief, standard or detailed descriptions and the figure descriptions are read aloud during playback. An audio cue and haptic feedback indicates when a figure is being read. 

Figure descriptions  automatically translate to match your document's language. When Listen2 detects a non-English document, generated figure descriptions are translated using Apple's on-device Translation framework. If the language pair is not installed, the app prompts you to download it.

WEB ARTICLE COLLECTIONS
Batch your loose web article imports into an auto-playing collection in two taps. Articles play back-to-back until finished. Delete the collection and its documents together when you are done.

NEW LANGUAGES
- Portuguese — now supported on both Piper and Supertonic engines - Custom built grammar pack for normalization across 9 categories. 
- Vietnamese — 3 Piper voices (one with 65 speakers) plus text normalization grammar pack

SHARE EXTENSION IMPROVEMENTS
Better article extraction from complex websites. Safari JS preprocessing captures authenticated page content for improved results on paywalled and Cloudflare-protected sites. Added WebView fallback for sites that resist standard extraction.

PERFORMANCE
Reduced memory usage ~40% during word-level highlighting. The low-level fix dropped peak memory from 1.1–1.5 GB to 600–900 MB during playback.

ACCESSIBILITY
- All Supertonic voice quality sliders work with VoiceOver swipe-to-adjust
- Finer 0.01 increment granularity on numeric sliders
- "Apply now" and "apply soon" modals are VoiceOver-visible when adjusting Piper settings
- Improved VoiceOver coverage for figure description flow
- Image descripton feature for PDF and EPUB files. 