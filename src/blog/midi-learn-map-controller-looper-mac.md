---
title: "MIDI Learn in a Mac Looper: Map Any Knob, Fader or Footswitch in LOOM"
date: 2026-10-18T10:00:00-05:00
description: "A step-by-step guide to LOOM's MIDI Mapping window: learn a knob, fader, pad or footswitch, choose how it behaves, keep it for every song or one, and read what LOOM did with each message."
tags:
  - how-to
  - midi
  - loom
excerpt: "Choose a control in LOOM, move a knob on your controller, and that knob drives that control. Here is LOOM's MIDI Mapping window, step by step, with what each part of it is telling you."
ogImage: /images/og-blog-midi-learn.png
ogImageWidth: 1200
ogImageHeight: 630
ogImageAlt: "MIDI Learn: Map Any Knob in LOOM, beside LOOM's MIDI Mapping table"
---

Most controllers have more knobs than a looper has uses for. Until version 1.5, [LOOM](/loom/) answered only a fixed set of notes for the loop commands. LOOM 1.5 added a MIDI Mapping window, so you can send any knob, fader, pad or footswitch to nearly any control in LOOM. Anything the arrange view can automate can be mapped, which covers every fader, send, pan and mute, and almost every control on the instruments and effects, including settings such as a delay's `DIVISION`. So can instrument controls the arrange view leaves out, such as the synth's `FILTER TYPE`, and commands that automation cannot run, such as recording a track, changing the tempo or loading the next preset.

This post walks through the window from an empty table to a working rig. The full reference is the [MIDI mapping chapter of the manual](/loom/manual/midi-mapping/#the-midi-mapping-window). If you are setting up a pedalboard with the built-in note layout, start with [live looping on a Mac with a MIDI foot controller](/blog/live-looping-mac-midi-foot-controller/) instead.

## Open the MIDI Mapping window

Choose **View › MIDI Mapping**, or press `⇧⌘M`. The window opens beside LOOM's main window, so you can keep both on screen. Closing it hides it, and it opens again where you left it.

{% blogshot "/images/blog/midi-learn-map-controller-looper-mac/window-empty.png", "The MIDI Mapping window with no mappings: an explanation and three steps in the middle with an ADD MAPPING button, and the monitor on the right already listing three incoming messages, one of them marked BUILT-IN", "An empty table. The monitor on the right is already listening." %}

The window has two halves:

- **The table**, on the left, lists your mappings. It starts empty.
- **The monitor**, on the right, lists every MIDI message LOOM receives and what LOOM did with it, whether or not anything is mapped.

The built-in layout keeps working underneath your mappings. A controller you already set up for it goes on working, and a mapping replaces the built-in behaviour only on the one message it uses.

## Add a mapping

You choose the control in LOOM first, then touch the control on your hardware.

### 1. Choose the control in LOOM

Press `+ ADD MAPPING`. The **Map a control** chooser opens with three columns: a strip, then a section of that strip, then the control. These are the same columns the arrange view uses when you add an automation lane. Type in the search field to narrow all three at once.

A control that one of your mappings already drives shows its source on a second line, such as `MAPPED · CH 1 · CC 7`. You can still choose it.

{% blogshot "/images/blog/midi-learn-map-controller-looper-mac/chooser-mapping-only.png", "The chooser's strip column scrolled to its end: MASTER, CLICK, BUS 1 to BUS 3, and the MAPPING ONLY group with COMMANDS, FOCUS, FOCUSED TRACK and PRESETS", "The end of the strip column. The MAPPING ONLY group holds the targets you can map but cannot automate.", 306 %}

The end of the first column has a group called `MAPPING ONLY`. These targets are commands rather than settings, so the arrange view cannot automate them, but a button can run them:

| Group | What it offers |
|---|---|
| `COMMANDS` | Every command in the built-in layout: each track's ring, overdub, undo, redo, stop, clear and play, and the global `ALL START`, `ALL STOP`, `ALL CLEAR`, `TRANSPORT START`, `TRANSPORT STOP` and `PERFORM FROM TOP`. Commands with no built-in note: `GLOBAL` adds `TO TOP`, `PERFORM FROM HERE`, `RECORD`, `TEMPO UP`, `TEMPO DOWN`, `TEMPO`, `RENDER ALL` and `CLEAR ALL SOLOS`, each track adds `SOLO`, and each audio track adds `RENDER`. |
| `FOCUS` | `NEXT TRACK` and `PREVIOUS TRACK`, the same moves as the `→` and `←` keys. |
| `FOCUSED TRACK` | Controls for whichever track has the focus when the message arrives. `FOLLOWS FOCUS` holds `RING`, `OVERDUB`, `PLAY`, `STOP`, `UNDO`, `REDO`, `CLEAR`, `RENDER`, `LEVEL`, the three sends (`LEVEL - CUE`, `LEVEL - FX 1` and `LEVEL - FX 2`), `PAN`, `MUTE` and `SOLO`. `MACROS` holds `MACRO 1` to `MACRO 8`. `RACK` steps the chain's presets, and each `SLOT` switches that slot `ON / OFF` and steps its presets. |
| `PRESETS` | `NEXT PRESET` and `PREVIOUS PRESET` for each effects rack, each effect slot and each instrument track. |

{% blogshot "/images/blog/midi-learn-map-controller-looper-mac/chooser-focused-track.png", "The chooser on FOCUSED TRACK › FOLLOWS FOCUS, listing RING, PLAY, STOP, UNDO, REDO, CLEAR, LEVEL, PAN and MUTE, each with a LISTEN button", "FOCUSED TRACK: controls that act on whichever track has the focus.", 590 %}

`FOCUS` and `FOCUSED TRACK` together let a small controller run a big session. Map two buttons to `NEXT TRACK` and `PREVIOUS TRACK`, map a few more to the focused track's ring, stop and undo, and map one knob to its level. The same handful of controls then works whichever track you are on. Map a row of buttons to the `SLOT` sections, and they switch the effects of whichever track has the focus.

{% blogshot "/images/blog/midi-learn-map-controller-looper-mac/chooser-presets.png", "The chooser on PRESETS with TRACK 1 › RACK selected, offering NEXT PRESET and PREVIOUS PRESET", "Two buttons that step through a rack's saved presets.", 590 %}

Each `NEXT PRESET` press loads the next entry in the list the preset picker shows, so the order of your saved racks is the order a button steps through them.

### 2. Move the control on your hardware

When you choose a control, the chooser closes and a card opens at the top of the table, reading `LISTENING`. Move or press one control on your hardware. LOOM takes the first note or control change that arrives, from any device and on any channel.

{% blogshot "/images/blog/midi-learn-map-controller-looper-mac/learn-listening.png", "The new mapping card in its LISTEN step: LISTENING, move or press one control on your hardware, a countdown reading CANCELS IN 11 S, and TRACK 3 › LEVEL - FX 2 as the LOOM control", "LOOM waits up to 15 seconds for a message.", 672 %}

If nothing arrives in 15 seconds, the card closes and nothing is added. `CANCEL`, `Esc` and clicking outside the card also close it.

While LOOM listens, the message still does what it normally does. A note in the built-in layout still rings its track, and a knob you have already mapped still moves its control.

### 3. Check what LOOM heard, then press USE

The card now shows the message, how it moved, and what LOOM proposes.

{% blogshot "/images/blog/midi-learn-map-controller-looper-mac/learn-replaces.png", "The CONFIRM step: hardware CH 1 · CC 7, moved 0 to 127 through 17 values, mapped to TRACK 3 › LEVEL - FX 2. TYPE has CONTROLLER selected, proposed because it moved through many values. KEEP IN is RIG. An orange REPLACES box says CH 1 · CC 7 drives TRACK 1 › LEVEL - MAIN today, and USE moves it here", "A knob that already drives something. LOOM names it before anything changes.", 672 %}

**`TYPE`** is how LOOM reads the message. LOOM proposes one from what it heard, and you can choose another:

- **`CONTROLLER`**: a knob, fader or expression pedal. Proposed for a control change that sent values other than 0 and 127.
- **`BUTTON`**: a momentary button or footswitch, where each press fires. Proposed when LOOM saw the button go back within half a second.
- **`SWITCH`**: a latching button or pedal that stays down until you press it again. Proposed when the button stayed at 127.
- **`RELATIVE`**: an endless encoder that sends steps rather than a position, 1 to 63 for steps up and 65 to 127 for steps down.
- **`RELATIVE 64`**: an endless encoder that sends values above 64 for steps up and below 64 for steps down, which many controllers do, Arturia's included. Proposed when a knob keeps sending values close to 64.

If a knob jumps to one end of its range on every turn, or seems to fight you, it is probably an encoder mapped with the wrong type.

Press and release a button the way you normally would, because LOOM watches the release to tell `BUTTON` from `SWITCH`. Until it decides, the line reads `DECIDING · WAITING FOR THE RELEASE`.

**`KEEP IN`** is where the mapping lives:

- **`RIG`**, the default, keeps the mapping for every song on this Mac. Use it for the controls you always want in the same place.
- **`THIS SONG`** saves the mapping with the song you have open. In that song it wins over a rig mapping on the same message, so one song can borrow a knob for something special without changing the rest of your set.

LOOM also tells you if the message is already in use:

- **`REPLACES`** means one of your own mappings uses that message. `USE` moves the message to the new control and removes the old mapping. `⌘Z` puts it back.
- **`OVERRIDES`** means the message is part of LOOM's built-in layout. Your mapping acts instead, on that one message. Delete the mapping and the built-in command comes back.

{% blogshot "/images/blog/midi-learn-map-controller-looper-mac/learn-overrides.png", "The CONFIRM step for CH 16 · N12, note on then off at velocity 96, mapped to FOCUSED TRACK · ring with BUTTON proposed. An OVERRIDES box says the built-in layout's track 2 ring is on that note and keeps working on every other message", "A note from the built-in layout, taken over by a mapping.", 672 %}

If the card is wrong, `LISTEN AGAIN` forgets the message and listens for another, and `CHANGE` picks a different control in LOOM and keeps the message. When it is right, press `USE`.

## Read the table

Each mapping is one row: its source, its type, its target, where it is kept and what it is doing now.

{% blogshot "/images/blog/midi-learn-map-controller-looper-mac/table.png", "The mapping table with nine rows. A THIS SONG row for TRACK 2 › PAN reads WINS OVER RIG, and the rig row on the same CC reads SHADOWED. TRACK 1 › LEVEL - MAIN reads following at 79 percent. NEXT TRACK and PREVIOUS TRACK read ready. TRACK 2 › LEVEL - MAIN reads WAITING with HW 36 percent and LOOM 60 percent. A CH 16 row reads OVERRIDES", "Nine mappings, and what each one is doing right now.", 672 %}

The `STATE` column is the one to read when something does not work:

| State | What it means |
|---|---|
| A value, or `ready` | The mapping is working. A control shows LOOM's value, and a command shows `ready`. |
| `WAITING` | The hardware is not at LOOM's value yet, so the control is not moving. See *When a knob is not where LOOM's control is*, below. |
| `INERT` | The control is not in the song you have open, for example because the effect slot is empty. LOOM keeps the row, and it works again as soon as the control exists. |
| `WINS OVER RIG` | A song mapping that replaces a rig mapping on the same message, in this song only. |
| `SHADOWED` | The rig mapping that a song mapping is replacing. |
| `OVERRIDES` | The mapping uses a message from the built-in layout, and acts instead of it. |

`ALL`, `RIG` and `THIS SONG` above the table choose which rows you see. `EDIT` on a row opens the card on the mapping as it is saved. Press `CHANGE` to pick a different control, `LISTEN AGAIN` to use a different message, or choose another type or scope, then press `USE`. `×` deletes a row. While the window has keyboard focus, `⌘Z` and `⇧⌘Z` undo and redo changes to the table. They do not touch your song.

## Use the monitor to find out why

When a knob does nothing, the monitor tells you why. It lists every message LOOM receives, newest first, and what happened to it.

{% blogshot "/images/blog/midi-learn-map-controller-looper-mac/monitor.png", "The monitor, paused with 2 new messages. Lines read: CH 1 · CC 7 to TRACK 1 › LEVEL - MAIN -12.8 dB; CC 21 and CC 22 moving the focus to track 1, track 5 and instrument track 1; CH 1 · CC 70 REFUSED because slot 1 is empty; and CH 1 · CC 74 WAITING with hardware 16 percent and LOOM 60 percent", "Paused, so you can read it. Each line says what the message did.", 388 %}

| Line | What happened |
|---|---|
| An arrow and a control | One of your mappings set that control to that value. |
| `BUILT-IN` | The built-in layout acted on the message. |
| `UNBOUND` | Nothing listens to that message. Usually a control you have not mapped yet, or a controller on the wrong channel. |
| `REFUSED` | Something matched the message but could not act, and the line says why, such as `slot 1 is empty`. |
| `WAITING` | A knob that has not reached LOOM's value yet, with both positions. |

`PAUSE` freezes the list so you can read it, and counts what arrives meanwhile. The buttons above the list filter it to `MAPPED`, `BUILT-IN`, `UNBOUND` or `REFUSED` lines.

## When a knob is not where LOOM's control is

When you move a knob that is not where LOOM's control is, what happens depends on the `TAKEOVER` setting. In `PICKUP`, LOOM's default, the control does not jump to the knob. It waits until the knob reaches its value, then follows. That stops a level leaping to full the first time you brush a fader.

While a control waits, LOOM shows you where your hardware is:

<div class="grid grid-cols-1 sm:grid-cols-2 gap-x-6 items-start">{% blogshot "/images/blog/midi-learn-map-controller-looper-mac/pickup-synth-knob.png", "The synth's OSC 1 knobs. The FINE knob has a hollow ring on its arc and a dashed arc back to its pointer, showing the hardware below LOOM's value", "On a knob: a hollow ring at the hardware's position.", 290 %}{% blogshot "/images/blog/midi-learn-map-controller-looper-mac/pickup-fader.png", "Track 1's fader at -6 dB, with a dashed outline of the handle at about -24 dB and a dashed line between them", "On a fader: a dashed handle where the hardware is.", 175 %}</div>

The notice row at the bottom of the window says it in words, naming the control and which way to move, or counting the controls when more than one waits:

{% blogshot "/images/blog/midi-learn-map-controller-looper-mac/pickup-notice.png", "The notice row reading: Waiting to pick up: 4 controls. Open MIDI Mapping to see them.", "", 560 %}

A control with settings, such as the delay's `DIVISION` or the amp's `MODEL`, waits too. It does not change setting until your knob reaches the part of its travel that selects the setting LOOM holds now, so the first touch cannot switch an amp model in the middle of a song. A control with two settings, such as `MUTE`, follows the hardware straight away.

In `PICKUP`, you take over a control by moving the hardware past LOOM's value. If you would rather a control jump straight to the knob, or catch up gradually, change `TAKEOVER` in the side panel's `GLOBAL` tab, under `MIDI`:

{% blogshot "/images/blog/midi-learn-map-controller-looper-mac/side-panel-midi.png", "The side panel's MIDI section: MIDI CH 16, MIDI MAP 1.x layout, MIDI OUT NONE, TAKEOVER set to PICKUP with JUMP and SCALE beside it, and MAPPINGS reading 4 · 4 WAITING beside an OPEN MIDI MAPPING button", "TAKEOVER, and a count of your mappings and how many wait.", 301 %}

- **`PICKUP`**, the default, waits as described.
- **`JUMP`** sets the control to the hardware's position on the first message.
- **`SCALE`** moves the control toward the hardware, so the two reach the end of the range together.

## Send it back: MIDI OUT

If your controller has motorised faders, lit pads, or an on-screen surface such as TouchOSC, set `MIDI OUT` in the same section to it. LOOM then sends each of your mappings' state back to the controller on the mapping's own message: a knob's position for a `CONTROLLER` mapping, and on or off for a `BUTTON` or `SWITCH`. It sends the built-in layout's track states and mixer values as well.

A controller that receives LOOM's values already sits where LOOM's controls are, so in `PICKUP` there is nothing to wait for. While you move a control, LOOM does not send that control back, so it cannot fight your finger.

Do not choose an output that leads back into LOOM, such as an IAC Driver bus. LOOM listens to every MIDI source, so it would hear its own feedback as commands.

## Send clock to your gear: CLOCK OUT

`CLOCK OUT`, below `MIDI OUT` in the same section, sends MIDI clock to each output you turn on, so a drum machine, an arpeggiator, a sequencer or a hardware looper follows LOOM's tempo and starts and stops with its transport. Each output has an `OFFSET` and a `STOPPED` switch, and `CLOCK MODE` chooses whether your gear starts on a pattern boundary (`PATTERN`) or at LOOM's bar (`SONG`). LOOM sends clock but does not follow incoming clock. The [MIDI clock section of the manual](/loom/manual/midi-mapping/#midi-clock) has the details.

LOOM sends a Start, Continue and Stop to every output it sends clock to, and a device can pass them back. So a mapping on a Start, Continue or Stop from a device that `CLOCK OUT` sends to does nothing: its row reads `INERT`, and says to untick that device in `CLOCK OUT` to use the mapping.

## A small rig, mapped in five minutes

Here is a setup for a controller with eight pads and eight knobs. The pads run whichever track has the focus, and the knobs cover the parts of the mix you reach for during a set:

| Hardware | Map to | Type |
|---|---|---|
| Pad 1 | `FOCUS › PREVIOUS TRACK` | `BUTTON` |
| Pad 2 | `FOCUS › NEXT TRACK` | `BUTTON` |
| Pad 3 | `FOCUSED TRACK › RING` | `BUTTON` |
| Pad 4 | `FOCUSED TRACK › STOP` | `BUTTON` |
| Pad 5 | `FOCUSED TRACK › UNDO` | `BUTTON` |
| Pad 6 | `FOCUSED TRACK › CLEAR` (hold for one second) | `BUTTON` |
| Pad 7 | `COMMANDS › GLOBAL › ALL START` | `BUTTON` |
| Pad 8 | `COMMANDS › GLOBAL › ALL STOP` | `BUTTON` |
| Knob 1 | `FOCUSED TRACK › PAN` | `CONTROLLER` |
| Knob 2 | Input 1's level in your headphones (`IN 1`, on `CUE`) | `CONTROLLER` |
| Knob 3 | Input 2's level in your headphones (`IN 2`, on `CUE`) | `CONTROLLER` |
| Knob 4 | `FOCUSED TRACK › LEVEL` | `CONTROLLER` |
| Knob 5 | The click's level | `CONTROLLER` |
| Knob 6 | The `FX 1` bus's level in the main mix | `CONTROLLER` |
| Knob 7 | The `FX 2` bus's level in the main mix | `CONTROLLER` |
| Knob 8 | The master level | `CONTROLLER` |

Pads 1 and 2 choose a track and pads 3 to 6 work it, so six pads run all nine tracks. The two input knobs set how loud your live inputs are in your headphones, without changing what the audience hears.

Keep them all in `RIG`, and every song you open has the same controls in the same places. When one song needs a knob for something else, map it again with `KEEP IN` set to `THIS SONG`.

### Add macros

If your controller has a second row of knobs, give them to macros. Every loop track and instrument track has eight, `MACRO 1` to `MACRO 8`, and each one points at a control of the track's instrument or of an effect in its chain. Assign them in the `MACROS` block at the top of the side panel's `TRACK n` and `INST n` tabs: press a macro and choose a control. Macros are saved with the song.

| Hardware | Map to | Type |
|---|---|---|
| Knobs 9 to 16 | `FOCUSED TRACK › MACRO 1` to `MACRO 8` | `CONTROLLER`, or `RELATIVE 64` on an endless encoder |

Map the row once, and it plays the macros of whichever track has the focus. Pads 1 and 2 move the focus, and the same eight knobs reach the new track's cutoff, delay feedback or reverb level. An endless encoder in relative mode never waits for pickup, so it is the better choice when the focus moves often.

### Change the tempo from a knob

Map `COMMANDS › GLOBAL › TEMPO` to a knob or an endless encoder. On a knob or fader, the tempo moves one BPM for each value you turn it, from where you first touch it, so it never jumps. For unlimited range, set an encoder to relative on your controller and map `TEMPO` as `RELATIVE 64` or `RELATIVE`. To use buttons instead, map `TEMPO UP` and `TEMPO DOWN`. A tempo change lands on the next beat, and every track set to follow the tempo stays in time.

## Layouts for popular controllers

If you have one of these controllers, you do not have to design a layout from scratch. Each sheet shows every control on the panel labelled with what it does in LOOM, and lists the settings to make on the controller and in LOOM. The full PDFs are free when you [sign up for the LOOM email list](#loom-signup).

### Arturia KeyLab mkII

{% blogshot "/images/blog/midi-learn-map-controller-looper-mac/layout-keylab-mk2.png", "The Follow the focus layout for the Arturia KeyLab mkII. Rewind and fast-forward choose a track and the transport row works it. Knobs 1 to 8 are FOCUSED TRACK MACRO 1 to 8 in every bank, the faders are track and instrument levels, the buttons under them switch slots 1 to 8 on and off, and the pads play sampler slices and drums, with TO TOP and PERFORM FROM HERE", "Layout 2, Follow the focus. The PDF also has a layout with one control per track." %}

### Novation Launchkey MK4

{% blogshot "/images/blog/midi-learn-map-controller-looper-mac/layout-launchkey-mk4.png", "The LOOM layout for the Launchkey 49 and 61 MK4. The nine faders are track and instrument levels with MUTE under each, the knobs are FOCUSED TRACK MACRO 1 to 8, the pads ring and stop each track, and Play and Stop are learned as MIDI Start and Stop for the focused track", "The 49 and 61. The PDF also has a layout for the 25 and 37, which have no faders." %}

### Korg nanoKONTROL2

{% blogshot "/images/blog/midi-learn-map-controller-looper-mac/layout-nanokontrol2.png", "The LOOM layout for the Korg nanoKONTROL2. Each of the eight strips works one track: the slider is its level, S stops it, M mutes it and R is its ring button. The knobs are MACRO 1 to 8 of the focused track, and the other buttons move the focus, undo, redo, record the performance, and start or stop every track", "Eight strips, one per track, with the knobs on the focused track's macros." %}

### Morningstar MC6 Pro

{% blogshot "/images/blog/midi-learn-map-controller-looper-mac/layout-mc6-pro.png", "The LOOM layout for the Morningstar MC6 Pro. Page 1 works the focused track: previous and next track, ring, stop, clear, and undo with redo on a hold. Page 2 runs the song: TO TOP, RECORD, ALL CLEAR, ALL START, ALL STOP and TRANSPORT STOP. An expression pedal plays FOCUSED TRACK MACRO 1", "Two pages of footswitches, and an expression pedal on the focused track's MACRO 1." %}

## Frequently asked questions

### Does LOOM have MIDI learn?

Yes, since LOOM 1.5. Choose a control in the MIDI Mapping window (**View › MIDI Mapping**), then move or press the control on your hardware. LOOM proposes a type, and you press `USE`.

### Can I map a control change to record a loop?

Yes. In the chooser, open `MAPPING ONLY › COMMANDS`, choose the track and `RING`, and press the switch. This is how a footswitch that sends only control changes runs the looper.

### Are my mappings saved with the song?

Only the ones you keep in `THIS SONG`. Mappings kept in `RIG` belong to the Mac and work in every song.

### Why does my knob do nothing until I turn it further?

That is `PICKUP`, LOOM's default `TAKEOVER` setting. The control waits until your knob reaches LOOM's value, so it does not jump. The table's `STATE` column and the monitor show both positions. Choose `JUMP` under `TAKEOVER` in the side panel if you would rather it jumped.

### Can I map pitch bend?

No. LOOM learns notes, control changes, and MIDI Start, Continue and Stop, which some controllers send from their transport buttons.

### Does mapping a note stop the built-in layout from working?

Only on that one note. The built-in layout keeps working on every other message, and deleting the mapping gives the note back to it.
