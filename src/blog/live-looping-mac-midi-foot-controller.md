---
title: "How to Live Loop on a Mac with a MIDI Foot Controller or Pad Controller"
date: 2026-10-01T11:00:00-05:00
updated: 2026-10-18T10:00:00-05:00
description: "Set up a MIDI foot controller or pad controller to run a live looper on your Mac: which notes to send, which channel, how to map a switch that sends CC, and how to check it works."
tags:
  - how-to
  - midi
  - loom
excerpt: "A software looper only feels like a pedal once your feet can run it. Here is how to set up a MIDI foot controller or pad controller to drive LOOM on a Mac, note by note."
ogImage: /images/og-blog-midi-foot-controller.png
ogImageWidth: 1200
ogImageHeight: 630
ogImageAlt: "Live Looping on a Mac with a MIDI Foot Controller, beside LOOM's MIDI IN list of connected controllers"
---

A looper on a laptop screen is fine for rehearsal. On stage your hands are on a guitar or a keyboard, and the only thing free is your feet. A software looper starts to feel like a pedal once a footswitch can record, overdub, undo and stop a track without you looking at the screen.

This guide shows how to set that up with [LOOM](/loom/), the live looper I build for macOS. There are two ways to do it, and you can use both on one board:

- **Program your controller to LOOM's built-in layout.** LOOM answers a fixed set of MIDI notes, so you set each switch to the note number LOOM expects. Most of this post covers that, because it needs no setup in LOOM at all.
- **Map your switches in LOOM.** Since LOOM 1.5, you can choose a command in LOOM's MIDI Mapping window and press the switch you want to use for it. This is the way to go when your controller's switches are hard to reprogram, or only send control changes. See *Map a switch that sends control changes*, below, and the [MIDI mapping tutorial](/blog/midi-learn-map-controller-looper-mac/) for the full walkthrough.

The full reference is the [MIDI mapping chapter of the manual](/loom/manual/midi-mapping/). This post is the practical version.

## Can you use a MIDI foot controller with looper software?

Yes. A controller that sends MIDI notes works with LOOM's built-in layout as it is. A controller whose switches send control changes (CC) works too, once you map each switch to a command in the MIDI Mapping window. Program changes, pitch bend, aftertouch and MIDI clock do not run LOOM's commands.

LOOM listens to every MIDI source macOS reports, so there is no device list to configure. You can plug a controller in while LOOM is running, and the notice row confirms it.

{% blogshot "/images/blog/live-looping-mac-midi-foot-controller/midi-in.png", "LOOM's MIDI IN card listing four connected sources, IAC Driver Bus 1, KeyLab mkII 49 MIDI, KeyLab mkII 49 DAW and Clarett 4Pre USB, with CH 16 · LOOP COMMANDS at its foot", "Every source LOOM hears, with the command channel at the foot of the card." %}

## How LOOM's MIDI note map works

Every track gets its own octave of notes, and every octave has the same commands in the same order. This built-in layout is always on, underneath any mappings of your own, so a controller set to these notes works on any Mac running LOOM with no setup.

Track *n* starts at raw note `(n − 1) × 12`. The commands sit at offsets from there:

| Offset | Command | Hold? |
|---|---|---|
| +0 | Ring button (does what the track's on-screen ring would do) | no |
| +1 | Overdub, always | no |
| +2 | Undo the last layer | no |
| +3 | Redo | no |
| +4 | Stop this track | no |
| +5 | Clear | hold one second |
| +6 | Play, always | no |

So the audio tracks land here:

| Track | Notes |
|---|---|
| Track 1 | 0 to 6 |
| Track 2 | 12 to 18 |
| Track 3 | 24 to 30 |
| Track 4 | 36 to 42 |
| Track 5 | 48 to 54 |

Notes 60 to 71 are reserved and do nothing. The instrument tracks (LOOM's own synth, drum machine and sampler) take the next octaves: 72 to 78, 84 to 90, 96 to 102 and 108 to 114. The global commands sit at 120 to 125.

### One footswitch per track gets you a long way

The `+0` note is not a dedicated record button. It does what the ring button on that track's strip does, which depends on the track's state:

- On an empty track, it records. If the transport is stopped, it starts the transport first.
- While recording, it closes the loop.
- While playing, it starts an overdub.
- While overdubbing, it punches out.
- On a stopped track that holds a loop, it plays the loop again.

{% blogshot "/images/blog/live-looping-mac-midi-foot-controller/track-strip.png", "A LOOM track strip whose ring reads EMPTY with RECORD as its next action, above MUTE, SOLO, STOP @ LOOP, UNDO, REDO and CLEAR", "The ring says what the next press does. On an empty track, it records." %}

That last case matters on stage: a switch that always meant "record" would record over the loop you just stopped.

If you prefer switches that do exactly one thing, use `+1` (always overdub) and `+6` (always play). You can mix both approaches on the same board.

## Watch out for octave numbering

This is the mistake that costs people an evening. LOOM matches raw MIDI note numbers, 0 to 127. Controllers and DAWs disagree about what to call those numbers, by a whole octave:

| Raw note | Arturia, Akai and Ableton call it | Scientific pitch calls it |
|---|---|---|
| 0 | C-2 | C-1 |
| 12 | C-1 | C0 |
| 60 | C3 | C4 |
| 120 | C8 | C9 |

Type "C-1" into an editor that uses the Arturia naming and you get note 12, which is track 2's ring button. Nothing errors. A different track simply responds.

## Put LOOM's commands on their own MIDI channel

LOOM's commands listen on one channel, the command channel. It is 16 by default. Notes on any other channel never reach the commands; they go to whichever instrument track is listening on that channel.

This is what lets one controller do two jobs. Put the pads or footswitches on channel 16 and leave the keys on channel 1. The pads run the looper, and the keys play a synth on an instrument track.

<div class="grid grid-cols-1 sm:grid-cols-2 gap-x-6 items-start">{% blogshot "/images/blog/live-looping-mac-midi-foot-controller/midi-channel.png", "The side panel's MIDI settings: MIDI CH set to 16 and MIDI MAP set to 1.x layout", "MIDI CH: the channel LOOM's commands listen on." %}{% blogshot "/images/blog/live-looping-mac-midi-foot-controller/instrument-channel.png", "An instrument track's tab: a synth listening to any device on channel 1", "An instrument track playing from channel 1." %}</div>

If your controller can only transmit on one channel, do it the other way round: leave the controller where your instrument needs it and change LOOM's command channel to one you can spare. Set `MIDI CH` in the side panel's `GLOBAL` tab. It takes effect immediately and is saved per Mac, not per song.

## Planning a pedalboard layout

You do not need a switch for every command. If you have room for three switches per track, these are the three to map:

- **The ring button** (`+0`): record, close the loop, overdub and play, all from one switch.
- **Stop** (`+4`): stops that one track.
- **Clear** (`+5`): erases the track, after a one-second hold.

After those, add **undo** (`+2`) for the tracks you overdub most. `+2` and `+3` act on the track the note names, not the track that has focus, so a pedal can undo track 3 while you are looking at track 5.

Keep room for the global commands as well. In a live looping set these are the ones I reach for all the time:

- **ALL START** (note 120) starts every included track, and starts the transport if it is stopped.
- **ALL STOP** (note 121) stops every track but leaves the transport running and the click sounding.
- **ALL CLEAR** (note 122) erases every track, after a one-second hold.

LOOM has one more stop, and it is easy to confuse with ALL STOP. TRANSPORT STOP (note 124) stops the transport and every track with it. If you stomp 121 expecting silence, you get silent tracks over a click that is still going. Use 121 to drop out for a section and 124 to end the song. Its partner, TRANSPORT START (note 123), starts the clock and click without starting any tracks, which gives you an empty bar to count in over.

If you draw arrangements in LOOM's arrange view, note 125 is worth a switch too. It plays the arrangement from bar 1, from any view. More on that in [arranging a live looping song in advance](/blog/arrange-live-looping-song-in-advance/).

### Clear needs a one-second hold

The Clear command (`+5`) and ALL CLEAR (note 122) only fire after you hold the switch for a full second, and a tap does nothing. Clearing cannot be undone, so a stray foot should not cost you a loop. If you still hear the track playing, letting go is safe.

## Check your controller before you trust it

LOOM's bottom rail has a `MIDI` readout in every view. It shows the last message received:

```
MIDI  16 · N36 · 100 ✓
```

That reads as channel 16, note 36, velocity 100, and the `✓` means LOOM matched it to a command and acted on it. A `·` at the end means LOOM heard it and did nothing with it. If the readout shows only a dash, nothing has arrived since LOOM started.

Use it like this:

- **Still a dash after you press a switch?** LOOM is not receiving from that device. Check the cable, power and the controller's mode. Changing note numbers will not help.
- **Ends in `·`?** Read the channel and the note. Wrong channel means the switch is not on the command channel. Wrong note usually means you are an octave out.
- **Ends in `✓`?** It worked. Still check it is the note you meant, because an octave error often lands on another track's cluster, which also ends in `✓`.

The readout shows one message at a time. For a list of every message and what LOOM did with each one, open **View › MIDI Mapping** (`⇧⌘M`). Its monitor shows every message LOOM receives, newest first, marked `BUILT-IN` when the built-in layout acted on it, `UNBOUND` when nothing listens to it, or `REFUSED` with the reason when something matched but could not act.

{% blogshot "/images/blog/live-looping-mac-midi-foot-controller/midi-readout.png", "The MIDI readout on LOOM's bottom rail reading 1 · N36 · 37 followed by a dot", "Note 36 on channel 1 at velocity 37. It ends in a dot because channel 1 is not the command channel, which is how a note played into an instrument track reads.", 412 %}

## A worked example with a pad controller

The manual walks through an Arturia MiniLab: in MIDI Control Center, set pads 1 to 7 to send notes 0 to 6 (`C-2` upward in Arturia's naming) on channel 16, and leave the keys on channel 1 for a synth. Press pad 1 and you want the readout to show `16 · N0 · 100 ✓`. If it shows `N12`, you are an octave out. The same steps apply to a foot controller; only the editor changes.

## Map a switch that sends control changes

Some foot controllers send a control change from each switch and cannot send notes. Others make you dig through menus to change a note number. In both cases, leave the controller as it is and map the switches in LOOM instead:

1. Open **View › MIDI Mapping**, or press `⇧⌘M`.
2. Press `+ ADD MAPPING`.
3. In the chooser, scroll to the `MAPPING ONLY` group at the end of the first column and choose `COMMANDS`. Then choose the track, and the command, such as `RING` for the ring button.
4. LOOM starts listening. Press the footswitch.
5. LOOM shows what it heard and proposes a type. For a footswitch that springs back, that is `BUTTON`. Press `USE`.

{% blogshot "/images/blog/live-looping-mac-midi-foot-controller/map-commands.png", "The Map a control chooser with MAPPING ONLY › COMMANDS chosen, TRACK 3 selected, and its RING, OVERDUB, UNDO, REDO, STOP, CLEAR and PLAY commands listed, each with a LISTEN button", "The built-in layout's commands, ready to map to a switch of your own.", 470 %}

Repeat for each switch. Every command in the built-in layout is there, for every audio track and instrument track, plus the six global commands. The mapping works in every song on this Mac, and the built-in layout keeps working on every message you did not map.

`MAPPING ONLY` has two more groups that suit a pedalboard. `FOCUS` steps the focused track forward and back, and `FOCUSED TRACK` runs the ring, play, stop, undo, redo and clear on whichever track has the focus. With those, a board of six or so switches can run every track: two to choose the track, and the rest to work it. The [MIDI mapping tutorial](/blog/midi-learn-map-controller-looper-mac/) walks through the whole window.

## Light your pads with MIDI OUT

If your controller has lit pads or switches, LOOM can light them for you. Open the side panel and set `MIDI OUT`, under `MIDI`, to your controller. LOOM then sends each track's state back on the notes of the built-in layout, so a pad can show whether its track is recording, playing or stopped. It sends the state of your own mappings too, on their own messages.

How a pad shows a velocity depends on the controller. The manual's [MIDI feedback section](/loom/manual/midi-mapping/#midi-feedback) lists the velocity LOOM sends for each state. For a ready-made example, the free [TouchOSC layout for iPad](/blog/ipad-midi-controller-live-looping-touchosc/) colours its pads with it.

## Expression pedals and faders

The built-in layout also answers control changes on the command channel, for the mixer: CC 20 to 29 for track levels, 40 to 49, 50 to 59 and 70 to 79 for the CUE, FX 1 and FX 2 sends, 80 to 89 for the mutes, and 102 to 104 for the click and the master level. An expression pedal set to CC 20 on channel 16 rides track 1's level with no setup in LOOM.

To put a pedal on anything else, such as a filter cutoff or a delay's feedback, map it in the MIDI Mapping window as a `CONTROLLER`. In LOOM's default `PICKUP` mode, when the pedal is not where LOOM's control is, the control waits until the pedal reaches it rather than jumping. The tutorial covers that too.

## What LOOM's MIDI control does not do

It is better to know these before you plan a rig:

- LOOM does not follow incoming MIDI clock, and there is no MTC or MMC. It does send MIDI clock, with `CLOCK OUT` in the side panel, so a drum machine or sequencer can follow LOOM's tempo.
- LOOM cannot learn pitch bend. Mappings take notes, control changes, and the MIDI Start, Continue and Stop that some controllers' transport buttons send.

If your controller is programmed for LOOM 1.0's layout, switch `MIDI MAP` in the side panel to `1.0 layout`. LOOM still offers it, but it is going away, so reprogram your controller for the 1.x layout when you can.

Once your feet are running the looper, the next thing to sort out is capturing the set. See [how to record a live looping set as separate tracks](/blog/record-live-looping-set-separate-stems/).

## Frequently asked questions

### Which MIDI notes does LOOM use for track 1?

Notes 0 to 6 in the default layout. Note 0 is the ring button, 1 is overdub, 2 is undo, 3 is redo, 4 is stop, 5 is clear (hold one second) and 6 is play. Each later track is 12 notes higher.

### What MIDI channel does LOOM listen on?

Channel 16 by default. You can change it to any channel from 1 to 16 with `MIDI CH` in the side panel. Notes on other channels go to the instrument tracks, not the looper commands.

### Can I use CC messages from my foot controller?

Yes. Map each switch to a command in the MIDI Mapping window (**View › MIDI Mapping**), under `MAPPING ONLY › COMMANDS`. The built-in layout also answers control changes for track levels, sends, mutes, the click and the master level, with no mapping.

### Does LOOM have MIDI learn?

Yes, since LOOM 1.5. In the MIDI Mapping window, choose a control in LOOM, then press or move the control on your hardware. LOOM shows what it heard and proposes how to use it. See the [MIDI mapping tutorial](/blog/midi-learn-map-controller-looper-mac/).

### Can LOOM light the pads on my controller?

Yes. Set `MIDI OUT` in the side panel to your controller, and LOOM sends each track's state on the notes of the built-in layout.

### Do I need to restart LOOM after plugging in a controller?

No. LOOM connects to a newly plugged controller within about a frame and confirms it on the notice row.
