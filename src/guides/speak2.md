---
title: Speak2
slug: speak2
subtitle: Your Complete Guide to On-Device Dictation
toc:
  - id: getting-started
    title: Getting Started
    short: Getting Started
  - id: dictation
    title: Dictation
    short: Dictation
  - id: live-transcription
    title: Live Transcription
    short: Live
  - id: speech-models
    title: Speech Models
    short: Models
  - id: personal-dictionary
    title: Personal Dictionary
    short: Dictionary
  - id: ai-refinement
    title: AI Text Refinement
    short: AI Refine
  - id: transcription-history
    title: Transcription History
    short: History
  - id: hotkey-configuration
    title: Hotkey Configuration
    short: Hotkey
  - id: troubleshooting
    title: Troubleshooting
    short: Help
---

<div class="content-section" id="getting-started">

## 1. Getting Started

### Welcome

Speak2 is a macOS dictation app that lives in your menu bar. It uses on-device AI models to convert your speech into text. No internet connection is required. Your voice data never leaves your Mac.

The workflow is simple: press a hotkey to start recording, release the hotkey to stop, and Speak2 transcribes your speech and pastes the text into whatever app you are using. It works in any text field across macOS.

### System Requirements

- **Processor**: Apple Silicon (M1 or later)
- **Operating System**: macOS
- **Permissions**: Accessibility permission and Microphone permission (both required)

<div class="warning-box"><h4>{% icon "alert-triangle", "inline-icon" %} Apple Silicon Required</h4><p>Speak2 requires a Mac with an Apple Silicon processor (M1, M2, M3, or later). It will not run on Intel-based Macs.</p></div>

### Setup Wizard

When you open Speak2 for the first time, a setup window appears. The setup has three steps.

**Step 1 — Permissions**

Speak2 requires two macOS permissions to function:

- **Accessibility** — This permission allows Speak2 to detect your global hotkey and paste transcribed text into other apps. A status indicator shows whether the permission is granted. Tap <span class="button-label">Grant</span> to open System Settings and enable access.
- **Microphone** — This permission allows Speak2 to record your voice. A status indicator shows whether the permission is granted. Tap <span class="button-label">Grant</span> to allow microphone access.

**Step 2 — Download a Speech Model**

Choose a transcription model to download. Speak2 supports several model options:

| Model | Size | Notes |
|---|---|---|
| Whisper tiny.en | ~75 MB | Smallest and fastest. English only. |
| Whisper base.en | ~140 MB | Good balance of speed and accuracy. English only. **Recommended starting model.** |
| Whisper small.en | ~460 MB | Higher accuracy. English only. |
| Whisper large-v3 | ~3 GB | Highest accuracy. Supports many languages. |
| Whisper large-v3-turbo | ~954 MB | Fast and accurate. Supports many languages. |
| Parakeet v3 | ~600 MB | Supports 25 languages. |

You can download additional models later from the Settings menu.

**Step 3 — Model Storage Location**

Models are stored in a default location on your Mac. If you prefer a different folder, you can choose a custom location during this step.

**Completing Setup**

When both permissions are granted and at least one model is downloaded, the setup window displays the message: "Setup complete! Speak2 is ready." Tap <span class="button-label">Close</span> to finish setup.

### The Menu Bar Icon

After setup, Speak2 appears as a microphone icon in the macOS menu bar. The icon changes color to indicate the current state:

| Icon Color | State |
|---|---|
| **Gray** | Ready — Speak2 is idle and waiting for input. |
| **Red** | Recording — Speak2 is capturing audio from your microphone. |
| **Cyan** | Transcribing — The speech model is converting audio to text. |
| **Purple** | Refining — AI is cleaning and improving the transcribed text. |
| **Yellow (animated)** | Loading — Speak2 is loading a speech model into memory. |

Click the menu bar icon to open the status menu. From this menu, you can select a speech model, configure your hotkey, access the quick dictionary, open your transcription history, and open settings.

<div class="tip-box"><h4>{% icon "lightbulb", "inline-icon" %} Your Privacy Is Protected</h4><p>Speak2 runs entirely on your Mac. Your voice recordings are processed locally and are never sent to any server. This ensures complete privacy for all dictation.</p></div>

</div>

<div class="content-section" id="dictation">

## 2. Dictation

### How Dictation Works

Speak2 converts your spoken words into written text. The process is simple:

1. Place your cursor in any text field in any application.
2. Press the hotkey to start recording.
3. Speak naturally into your microphone.
4. Stop recording by releasing the hotkey (Hold Mode) or pressing it twice again (Toggle Mode).
5. Speak2 transcribes your speech and pastes the text at your cursor position.

Speak2 works with any application that accepts text input — email clients, word processors, web browsers, messaging apps, and more.

### Hold Mode

Hold Mode is the default recording method. Press and hold the hotkey to record. Release the hotkey to stop recording and begin transcription.

This is the simplest method. Hold the key while you speak. Release the key when you are finished.

<div class="feature-box"><h4>{% icon "mouse-pointer", "inline-icon" %} Hold Mode Summary</h4><p><strong>Start recording:</strong> Press and hold the hotkey.<br><strong>Stop recording:</strong> Release the hotkey.<br>No audio feedback is played. The menu bar icon color indicates the current state.</p></div>

### Toggle Mode

Toggle Mode uses a double-press to start and stop recording. Press the hotkey twice quickly (within 0.4 seconds) to start recording. Press the hotkey twice again to stop recording and begin transcription.

Toggle Mode plays audio feedback sounds. You will hear a start tone when recording begins and a stop tone when recording ends. These tones confirm that Speak2 received your input.

This mode is useful when you want to dictate longer passages without holding a key the entire time.

<div class="feature-box"><h4>{% icon "toggle-right", "inline-icon" %} Toggle Mode Summary</h4><p><strong>Start recording:</strong> Press the hotkey twice quickly.<br><strong>Stop recording:</strong> Press the hotkey twice quickly again.<br>Audio feedback tones confirm the start and stop of each recording.</p></div>

### The Dictation Flow

When you dictate, Speak2 performs several steps in sequence:

1. **You press the hotkey** — Recording begins. The menu bar icon turns red.
2. **You speak into your microphone** — Speak2 captures your audio.
3. **You release or double-press the hotkey** — Recording stops.
4. **Transcription** — Speak2 sends the audio to your selected speech model for transcription. The menu bar icon turns cyan.
5. **Personal dictionary** — If you have configured personal dictionary replacements, they are applied to the transcribed text.
6. **AI refinement** — If AI refinement is enabled, Speak2 removes filler words and verbal noise from the text. The menu bar icon turns purple during this step.
7. **Text is pasted** — The final text is pasted at your cursor position.
8. **Clipboard is restored** — Speak2 temporarily uses your system clipboard to paste the text. After pasting, it restores your original clipboard contents. Your previous clipboard data is not lost.

### Status Indicators

The Speak2 menu bar icon changes color to show the current state:

| Color | State |
|---|---|
| **Gray** | Idle — Speak2 is ready for input |
| **Red** | Recording — Speak2 is capturing audio from your microphone |
| **Cyan** | Transcribing — The speech model is converting audio to text |
| **Purple** | Refining — AI is cleaning and improving the transcribed text |

When the icon returns to gray, dictation is complete and the text has been pasted.

<div class="warning-box"><h4>{% icon "alert-triangle", "inline-icon" %} Accessibility Permission Required</h4><p>Speak2 requires Accessibility permission to detect hotkeys globally and to paste text into other applications. If text is not appearing after dictation, verify that Accessibility permission is granted in <strong>System Settings → Privacy & Security → Accessibility</strong>.</p></div>

<div class="tip-box"><h4>{% icon "lightbulb", "inline-icon" %} Speak Naturally</h4><p>Speak naturally and in complete sentences. The transcription models produce better results with longer, natural speech than with individual words.</p></div>

</div>

<div class="content-section" id="live-transcription">

## 3. Live Transcription

### Overview

Speak2 can display a floating overlay panel that shows your words as they are transcribed in real time. This panel lets you see what Speak2 is hearing while you speak. The text updates continuously as you talk, so you can confirm that your words are being captured correctly.

### Enabling Live Transcription

1. Open Speak2 and click the menu bar icon.
2. Go to **Settings** and then select **General**.
3. Find the option labeled **"Show live transcription while recording."**
4. Turn this option on.

Live transcription is now enabled. The overlay panel will appear each time you begin a recording.

### How It Works

When you start recording, a transparent panel appears near the bottom center of your screen, just above the Dock. This panel displays the following:

- **Recording indicator** — A pulsing red dot on the left side of the panel. This dot confirms that Speak2 is actively recording.
- **Confirmed text** — Words that have been recognized with high confidence. These words appear in regular weight.
- **Unconfirmed text** — Words that are still being processed by the speech engine. These words appear in italic and in a lighter color. As processing completes, unconfirmed words become confirmed.
- **"Listening..."** — If no words have been recognized yet, the panel displays this message. It means Speak2 is active and waiting for speech input.

The panel resizes automatically as more text is transcribed. The maximum width of the panel is 80% of your screen width or 700 pixels, whichever is smaller.

### After Recording

When you stop recording, the live transcription panel disappears. Speak2 then performs a final full transcription of the complete audio. This final pass analyzes the entire recording at once, which provides better context and higher accuracy.

Because of this, the final transcription result may differ slightly from what was displayed in the live panel. Small corrections to word choice, punctuation, or phrasing are normal. The final result is the most accurate version of your transcription.

<div class="tip-box"><h4>{% icon "lightbulb", "inline-icon" %} Non-Intrusive Overlay</h4><p>The live transcription panel does not interfere with your other applications. It appears as a non-interactive overlay and does not steal focus from the application where you are typing.</p></div>

</div>

<div class="content-section" id="speech-models">

## 4. Speech Models

### Overview

Speak2 uses on-device AI models to convert your speech into text. All processing happens locally on your Mac. No audio data is sent to the internet. You can download multiple models and switch between them at any time.

### Available Models

Speak2 includes two families of speech recognition models. Each model offers a different balance of size, speed, and accuracy.

**Whisper Models** (based on OpenAI Whisper):

| Model | Size | Language | Description |
|-------|------|----------|-------------|
| tiny.en | ~75 MB | English only | Smallest and fastest. Good for quick notes. |
| base.en | ~140 MB | English only | Recommended balance of speed and accuracy. |
| small.en | ~460 MB | English only | Better accuracy for complex speech. |
| large-v3 | ~3 GB | Multilingual | Best accuracy. Supports many languages. |
| large-v3-turbo | ~954 MB | Multilingual | Fast and accurate. Good multilingual option. |

**Parakeet Model**:

| Model | Size | Language | Description |
|-------|------|----------|-------------|
| Parakeet v3 | ~600 MB | 25 languages | Best option for multilingual users. |

### 4.1 Downloading a Model

1. Open **Settings → Models**. If this is your first time using Speak2, the Setup Wizard will guide you through this step.
2. Click the <span class="button-label">Download</span> button next to the model you want.
3. A progress bar shows the download status.
4. After the download completes, the model loads automatically.

### 4.2 Switching Models

1. Click the Speak2 icon in the menu bar.
2. Open the **Model** submenu.
3. Select the model you want to use.
4. A checkmark appears next to the active model.

Models that have not been downloaded show a download arrow (↓) icon.

### 4.3 Deleting a Model

1. Open **Settings → Models**.
2. Click the trash icon next to a downloaded model to remove it from your Mac and free disk space.

### 4.4 Storage Location

By default, models are stored in a standard application support location. To change the storage location:

1. Open **Settings → Models**.
2. Click <span class="button-label">Choose Folder...</span>
3. Select a new folder on your Mac.
4. You will be asked whether to move existing models to the new location or start fresh.

<div class="tip-box"><h4>{% icon "lightbulb", "inline-icon" %} Which Model Should You Choose?</h4><p>If you primarily dictate in English, start with base.en for the best balance of speed and accuracy. If you need to dictate in multiple languages, choose Parakeet v3 or one of the Whisper multilingual models (large-v3 or large-v3-turbo).</p></div>

<div class="warning-box"><h4>{% icon "alert-triangle", "inline-icon" %} Performance on Low-Memory Systems</h4><p>Larger models require more memory and take longer to process. On Macs with 8 GB of RAM, the large-v3 model may be slow. The base.en or small.en models are recommended for these systems.</p></div>

</div>

<div class="content-section" id="personal-dictionary">

## 5. Personal Dictionary

### Overview

The Personal Dictionary teaches Speak2 to recognize words it frequently gets wrong. Names, technical terms, brand names, and specialized vocabulary are common examples. When Speak2 transcribes your speech, it automatically replaces misheard words with the correct ones from your dictionary.

### How It Works

The Personal Dictionary uses a two-stage replacement process to correct transcription errors.

**Stage 1 — Direct Alias Matching**

If you define aliases (common misheard versions of a word), Speak2 replaces them with the correct word. This matching is exact and case-insensitive. For example, if "Antropik" is an alias for "Anthropic," any occurrence of "Antropik" in the transcription is replaced with "Anthropic."

**Stage 2 — Phonetic Matching**

For words without an exact alias match, Speak2 uses phonetic algorithms to detect words that sound similar to your dictionary entries. If a word in the transcription sounds like a dictionary entry, Speak2 corrects it automatically. This catches misspellings and variations that aliases do not cover.

### Adding a Word

There are two ways to add a new word:

1. Open **Settings → Dictionary** and click the **+** button.
2. Click the menu bar icon and select **Add Word...**

Both methods open the entry form. Fill in the following fields:

- **Word** (required) — The correct spelling of the word. This is the text that Speak2 will use as the replacement.
- **Aliases** (optional) — Common misheard versions of the word, separated by commas. For example, for the word "Anthropic" you might add aliases "Antropik, Ann Tropic."
- **Pronunciation Hint** (optional) — How the word sounds phonetically. This helps the phonetic matching engine identify the word more accurately.
- **Category** — Organize entries by type. Choose from Names, Technical, Brands, Medical, Legal, or Custom.
- **Language** — The language this entry applies to. Speak2 supports 25 languages for dictionary entries.

<div class="feature-box"><h4>{% icon "tag", "inline-icon" %} Dictionary Categories</h4>
<p><strong>{% icon "user", "inline-icon" %} Names</strong> — People's names</p>
<p><strong>{% icon "tool", "inline-icon" %} Technical</strong> — Technical terms and jargon</p>
<p><strong>{% icon "building", "inline-icon" %} Brands</strong> — Brand and product names</p>
<p><strong>{% icon "plus-circle", "inline-icon" %} Medical</strong> — Medical terminology</p>
<p><strong>{% icon "file-text", "inline-icon" %} Legal</strong> — Legal terminology</p>
<p><strong>{% icon "star", "inline-icon" %} Custom</strong> — Any other specialized words</p>
</div>

### Managing Entries

- **Enable or Disable** — Click the circle icon next to an entry to enable or disable it. Disabled entries remain in your dictionary but are not used during transcription. This is useful for temporary changes without deleting the entry.
- **Edit** — Hover over an entry and click the pencil icon to modify any field.
- **Delete** — Hover over an entry and click the trash icon to remove it permanently.
- **Filter** — Use the language dropdown and category menu to filter entries. Use the search bar to find specific words.

### Vocabulary Biasing

For Whisper models, your dictionary words are sent as vocabulary hints during transcription. This improves the model's ability to recognize these words correctly the first time, before any post-processing replacement occurs. The result is more accurate initial transcription for your specialized vocabulary.

Parakeet models do not support vocabulary biasing. Parakeet uses post-transcription replacement only. Dictionary entries still work with Parakeet, but corrections are applied after the transcription is complete.

### Import and Export

Click the more menu (three dots) in the Dictionary settings to access **Import** and **Export** options. Dictionary data is saved as JSON files. Use this feature to:

- Back up your dictionary.
- Transfer your dictionary to another Mac.
- Share specialized vocabulary with colleagues or team members.

<div class="tip-box"><h4>{% icon "lightbulb", "inline-icon" %} Getting Started with Your Dictionary</h4><p>Start by adding the names of people, places, and products you mention frequently. These are the words most likely to be misheard by speech recognition.</p></div>

</div>

<div class="content-section" id="ai-refinement">

## 6. AI Text Refinement

### Overview

After Speak2 transcribes your speech, it can send the text through an AI language model. This step is optional. The AI removes filler words such as "um," "uh," and "like." It also removes false starts, repetitions, and verbal noise. The result is clean, polished text that reads as if it were typed.

### Three Modes

Go to **Settings → AI Refine** to choose a mode.

- **Off** — No AI processing. The raw transcription, with any dictionary replacements applied, is pasted directly.
- **Built-in (Recommended)** — Uses a small language model (Qwen 2.5 1.5B) that runs locally on your Mac. Requires a one-time download of approximately 1.1 GB. All processing happens on your device. No data is sent to the internet.
- **External Server (Ollama)** — Sends text to an Ollama server running on your local network or on the same machine. Requires Ollama to be installed and running separately.

### Built-in Mode Setup

1. Open **Settings → AI Refine**.
2. Select **Built-in**.
3. Click <span class="button-label">Download Model</span> to download the refinement model (approximately 1.1 GB).
4. Once the download is complete, the status shows **Ready** with a checkmark.
5. No further configuration is needed. The model runs automatically after each transcription.

### Ollama Mode Setup

1. Install Ollama on your Mac or on another computer on your network (visit ollama.com for installation instructions).
2. Pull a model in Ollama. For example, run this command in Terminal: `ollama pull gemma3:4b`
3. In Speak2, open **Settings → AI Refine** and select **External Server**.
4. Enter the **Server URL**. The default value is `http://localhost:11434`.
5. Enter the **Model Name**. The default value is `gemma3:4b`. The model must already be pulled in Ollama.
6. Click <span class="button-label">Test Connection</span> to verify the setup. A success message confirms the connection is working.

### Custom Refinement Prompt

Both Built-in and Ollama modes accept a custom prompt. The prompt is added before your transcription text when it is sent to the AI model.

- To use the default prompt, leave the prompt field empty. The default prompt instructs the AI to remove filler words, false starts, repetitions, and verbal noise, and return only the final intended message as plain text.
- To create a custom prompt, type your instructions in the prompt field.
- To restore the original prompt, click <span class="button-label">Reset to Default</span>.

### Advanced — Few-shot Examples

In Built-in mode, Speak2 sends two example pairs to the language model along with your transcription. Each pair shows a raw (messy) version of a message and the cleaned version. These examples teach the model the style of cleanup to perform. Because they are sent on every request, they strongly influence the model's output.

The examples are editable under **Settings → AI Refine → Advanced → Few-shot examples**. Each pair has two fields:

- **Raw (user)** — A sample messy transcription, as if spoken aloud with filler words and false starts.
- **Cleaned (assistant)** — The corresponding polished version that the model should produce.

Click <span class="button-label">Reset Examples to Defaults</span> at any time to restore the originals. Leave a field blank to fall back to the default for that example.

Most users do not need to change these. They are primarily exposed for non-English dictation (see below).

### Dictating in Other Languages

The default Refinement Prompt and the Advanced example pairs are written in English. This is fine for English dictation, but for any other language it biases the Built-in model (Qwen 2.5 1.5B) toward translating your output into English.

Qwen 2.5 is natively multilingual and supports languages including Dutch, Spanish, French, German, Italian, Portuguese, Japanese, Chinese, Korean, and many more. To get reliable refinement in your language, translate **both** of the following into that language:

1. The **Refinement Prompt** in **Settings → AI Refine → Refinement Prompt**
2. The four example fields in **Settings → AI Refine → Advanced → Few-shot examples** (both Raw and Cleaned, for both pairs)

An informational banner appears at the top of the AI Refine settings as a reminder. If you dictate in multiple languages, keep the language you dictate in most often as your primary setup. For dictation in a second language, you may need to switch settings manually before and after.

### Status Indicator

When AI refinement is active, the menu bar icon turns purple and displays a sparkles symbol. This indicates that the AI is processing your text. When refinement is complete, the cleaned text is pasted automatically.

<div class="tip-box"><h4>{% icon "lightbulb", "inline-icon" %} Recommended for Most Users</h4><p>The built-in mode is recommended for most users. It requires no additional software, runs entirely on your Mac, and produces good results for cleaning up dictated text.</p></div>

<div class="warning-box"><h4>{% icon "alert-triangle", "inline-icon" %} Processing Time</h4><p>AI refinement adds processing time after each transcription. If you need the fastest possible dictation speed, set AI Refine to Off and rely on the raw transcription with dictionary corrections only.</p></div>

</div>

<div class="content-section" id="transcription-history">

## 7. Transcription History

### Overview

Speak2 keeps a record of your recent transcriptions. You can review, search, copy, and export your transcription history at any time.

### 7.1 Viewing History

There are two ways to open your transcription history:

- Click the Speak2 menu bar icon and choose **History...** This is the fastest path.
- Or open **Settings → History** to view the same list inside the Settings window.

Entries are grouped by time period:

- **Today**
- **Yesterday**
- **Last 7 Days**
- **Last 30 Days**
- **Older**

Each entry shows the following information:

- **Transcribed text** — Long entries are truncated to 3 lines. Click <span class="button-label">Show More</span> to view the full text.
- **Metadata** — The timestamp, the model used, and the language.
- **Copy button** — Copies the text to your clipboard.
- **Delete button** — Removes the entry from your history.

### 7.2 Searching and Filtering

Use the **search bar** at the top of the History screen to find entries that contain specific text. Results update as you type.

Use the **model filter menu** to show only entries from a specific transcription model. For example, you can filter to show only entries transcribed with the Whisper base.en model.

### 7.3 Copying Text

Click the **copy button** (document icon) next to any entry to copy its text to your clipboard. The button changes to a checkmark for 1.5 seconds to confirm the copy was successful.

### 7.4 Exporting History

1. Click the **more menu** (three dots) at the top of the History screen.
2. Select <span class="button-label">Export...</span> from the menu.
3. Choose a location and save the file.

Your entire history is saved as a JSON file. This is useful for record-keeping or for transferring your history to another machine.

### 7.5 Clearing History

Click <span class="button-label">Clear All</span> to delete all history entries. A confirmation dialog appears before deletion proceeds. This action cannot be undone.

### 7.6 Disabling History and Auto-Delete

You can control whether transcriptions are saved to history, and how long they are kept, under **Settings → General → Transcription History**.

- **Save transcriptions to history** — Turn this toggle off to stop saving new transcriptions. Existing entries are preserved but no new ones will be added. Turn it back on at any time to resume saving.
- **Auto-delete after N minutes** — Enter the number of minutes you want entries to be kept. Entries older than this threshold are automatically removed. Set this to **0** to keep history indefinitely (up to the storage limit below). The sweep runs on app launch and every 60 seconds while Speak2 is running.

For example, setting auto-delete to **10** gives you scratch-space behavior: history is available to review and copy immediately after dictation, but automatically clears itself so nothing sensitive is left sitting around.

### 7.7 Storage Limits

Speak2 stores up to **500** transcription entries. When the limit is reached, the oldest entries are removed automatically to make room for new ones.

Individual entries are limited to **10,000 characters**. Text beyond this limit is not stored.

<div class="tip-box"><h4>{% icon "lightbulb", "inline-icon" %} Recover Text from Previous Sessions</h4><p>Use the transcription history to review and recover text from previous dictation sessions. If you accidentally close an application before saving, your dictated text is still available in the history.</p></div>

</div>

<div class="content-section" id="hotkey-configuration">

## 8. Hotkey Configuration

### Overview

Speak2 uses a global hotkey to start and stop dictation. The hotkey works in any application, regardless of which window is focused. You can choose from preset hotkeys or create custom key combinations.

### Preset Hotkeys

The following preset hotkeys are available in **Settings → General**, under **Trigger Hotkey**:

| Hotkey | Description |
|--------|-------------|
| Fn | The Function key. Simple and easy to reach. |
| Right Option | The Option (Alt) key on the right side of the keyboard. |
| Right Command | The Command key on the right side of the keyboard. |
| Hyper Key | Ctrl + Option + Command + Shift pressed together. Unlikely to conflict with other shortcuts. |
| Ctrl + Option + Space | A three-key combination using the Space bar. |

### Custom Hotkey Combos

If none of the presets suit your workflow, you can create a custom combination:

1. Open **Settings → General**.
2. Click <span class="button-label">Add Custom Combo...</span>
3. A key capture field appears with the instruction "Press a key or combo (Esc to cancel)..."
4. Press the key or key combination you want to use.
5. The custom combo is saved and appears in your hotkey list.

To remove a custom combo, click the minus icon next to it.

### Hold vs. Toggle Mode

Speak2 offers two modes for controlling recording with your hotkey:

- **Hold Mode** (default) — Hold the hotkey to record. Release to stop and transcribe.
- **Toggle Mode** — Press the hotkey twice quickly to start recording. Press twice again to stop and transcribe. The double-press window is 0.4 seconds.

To enable Toggle Mode, turn on **"Press twice (toggle)"** in **Settings → General**.

You can also switch between modes from the menu bar icon's **Hotkey** submenu. Each hotkey shows its current mode as a suffix: "(hold)" or "(press twice)."

### Changing the Hotkey from the Menu Bar

1. Click the Speak2 menu bar icon.
2. Open the **Hotkey** submenu.
3. Select any preset or custom hotkey.

The change takes effect immediately.

<div class="tip-box"><h4>{% icon "lightbulb", "inline-icon" %} Recommended Hotkey</h4><p>The Fn key is the simplest hotkey for most users. It is easy to reach and rarely conflicts with other application shortcuts. If you use a keyboard without an Fn key, try Right Option or a custom combination.</p></div>

<div class="warning-box"><h4>{% icon "alert-triangle", "inline-icon" %} Hotkey Conflicts</h4><p>Some hotkeys may conflict with system shortcuts or other applications. If your hotkey does not work as expected, try a different preset or create a custom combination that does not overlap with existing shortcuts.</p></div>

</div>

<div class="content-section" id="troubleshooting">

## 9. Troubleshooting

This section lists common problems and their solutions. If your issue is not listed here, contact support using the information at the end of this section.

### 9.1 Hotkey Not Working

**Problem:** You press the hotkey, but Speak2 does not respond.

**Solutions:**

- Verify that Accessibility permission is granted. Open **System Settings → Privacy & Security → Accessibility**. Speak2 must appear in the list with its toggle turned on.
- If you recently updated macOS, you may need to remove Speak2 from the Accessibility list and add it again. macOS sometimes resets permissions after a system update.
- Try selecting a different hotkey preset. Another application may be using the same key combination.
- Restart Speak2 after granting or re-granting permissions.

### 9.2 Text Not Appearing After Dictation

**Problem:** Speak2 transcribes your speech (the icon cycles through colors), but no text appears in your application.

**Solutions:**

- Verify that Accessibility permission is granted. Speak2 requires this permission to paste text into other applications.
- Make sure your cursor is placed inside a text field before you begin dictating.
- Some applications use restricted text fields that do not accept programmatic paste. Try dictating into TextEdit to confirm Speak2 is working. If text appears in TextEdit but not in another application, the issue is with that application's text field.
- Check that a speech model is downloaded and loaded. The menu bar status should show "Ready."
- Speak2 supports pasting into floating quick-launcher overlays (such as Claude Desktop's option-option chat window) as of v1.8.1. If you are on an older version and paste is not landing in such overlays, update Speak2.

### 9.3 Original Clipboard Content Pastes Instead of Transcription

**Problem:** After dictation, the contents of your clipboard from *before* you dictated appear in the target application instead of (or alongside) the transcribed text. This most commonly affects remote sessions such as SSH terminals, where you may see the original clipboard appear character-by-character.

**Cause:** Speak2 briefly puts the transcription on your clipboard, simulates Cmd+V, then restores your original clipboard contents. On slow remote connections, the restore can happen before the remote side has finished reading the injected text, so the remote app ends up reading your original clipboard.

**Solution:**

- Open **Settings → General → Paste Behavior**.
- Increase the **Clipboard restore delay** from the default of 100ms. Try **500ms** first. For very slow connections, try **1000ms** or higher. The maximum is 2000ms.
- Dictate into the problem application again. If the issue persists, increase the delay further until the paste is reliable.

This setting only affects how long Speak2 waits before restoring your clipboard. It does not delay the paste itself or add latency to local applications.

### 9.4 Poor Transcription Accuracy

**Problem:** The transcribed text contains many errors or incorrect words.

**Solutions:**

- Try a larger model. Larger models such as **small.en**, **large-v3**, or **large-v3-turbo** produce more accurate results than **tiny.en** or **base.en**.
- Speak clearly and at a natural pace. Speaking too quickly or too quietly can reduce accuracy.
- Reduce background noise. Use a directional microphone if possible.
- Add frequently misheard words to the **Personal Dictionary** with aliases for common mistakes.
- Enable **AI Refinement** to clean up filler words and false starts automatically.

### 9.5 Model Download Fails

**Problem:** A model download does not complete or produces an error.

**Solutions:**

- Check your internet connection. Model downloads require a stable connection.
- Verify that you have sufficient free disk space. The largest model (large-v3) requires approximately 3 GB.
- Try downloading a smaller model first to confirm the download process works.
- If a download stops partway through, try again. Downloads resume from where they stopped.

### 9.6 AI Refinement Not Working (Built-in)

**Problem:** The built-in AI refinement does not produce results or is very slow.

**Solutions:**

- Verify that the refinement model has been downloaded in **Settings → AI Refine**.
- Make sure your Mac has sufficient available memory. The built-in model uses approximately 1–2 GB of RAM.
- If refinement is slow on first use, this is expected. The model needs time to initialize. Subsequent refinements will be faster.

### 9.7 AI Refinement Not Working (Ollama)

**Problem:** Ollama refinement fails or produces an error.

**Solutions:**

- Verify that Ollama is running on the specified server (default: `http://localhost:11434`).
- Verify that the model name in Speak2 matches a model you have pulled in Ollama. Run `ollama list` in Terminal to check.
- Use the <span class="button-label">Test Connection</span> button in **Settings → AI Refine** to diagnose the issue.
- Check that your firewall is not blocking the connection.
- The default timeout is 30 seconds. Very large transcriptions may require more time.

### 9.8 Microphone Not Detected

**Problem:** Speak2 does not detect your microphone or recording produces no audio.

**Solutions:**

- Verify that Microphone permission is granted in **System Settings → Privacy & Security → Microphone**.
- Check that your microphone is selected as the input device in **System Settings → Sound → Input**.
- If you connected a new microphone while Speak2 was running, restart Speak2.

### 9.9 High Memory Usage

**Problem:** Speak2 uses a large amount of memory (RAM).

**Solutions:**

- Larger speech models use more memory. Switch to a smaller model (tiny.en or base.en) if your Mac has limited RAM.
- If both a speech model and the AI refinement model are loaded simultaneously, memory usage will be higher. Disable AI refinement if memory is a concern.
- Close and reopen Speak2 to release memory held by models that are no longer in use.

### 9.10 Contact Support

If the solutions above do not resolve your issue, there are two ways to reach us. GitHub is preferred for bug reports and feature requests — issues filed there are public, searchable, and get tracked alongside development.

- **GitHub Issues (preferred):** [github.com/zachswift615/speak2/issues](https://github.com/zachswift615/speak2/issues) — Open a new issue. Other users may be able to help too, and fixes ship faster when bugs are tracked here.
- **Email:** [support@moonquakemedia.com](mailto:support@moonquakemedia.com) — For private support requests or anything you would rather not discuss publicly.

When reporting a problem, please include:

- Your macOS version
- Your Mac model
- The Speak2 version (shown in **Settings → General → About**)
- A clear description of the problem and the steps to reproduce it
- Screenshots or screen recordings, if applicable

</div>
