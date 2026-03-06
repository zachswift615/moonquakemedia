---
title: "Bluetooth Foot Pedal Setup for Hands-Free Performing"
date: 2026-03-01
description: "How to set up a Bluetooth foot pedal with GigScroll for hands-free teleprompter control on iPad. Works with AirTurn pedals and generic Bluetooth keyboards."
tags:
  - how-to
  - foot-pedal
  - gigscroll
excerpt: "If you perform with lyrics or charts on an iPad, you have probably had that moment — mid-song, hands busy, and you need to scroll or skip to the next tune."
ogImage: /images/og-gigscroll.png
---

If you perform with lyrics or charts on an iPad, you have probably had that moment — mid-song, hands busy, and you need to scroll or skip to the next tune. Reaching over to tap the screen breaks your flow. It looks awkward. And depending on your setup, it might not even be physically possible.

A Bluetooth foot pedal solves this. You keep your hands on your instrument and control the teleprompter with your feet.

[GigScroll](https://apps.apple.com/us/app/gigscroll/id6753904306) added foot pedal support recently, and this post walks through how to set it up.

## What Devices Work

GigScroll does not require a specific brand of pedal. It works with any device that connects as a Bluetooth keyboard and sends standard key events. That includes:

- **AirTurn pedals** — the most popular option among gigging musicians. GigScroll's default key mappings match AirTurn Mode 2 out of the box.
- **Generic Bluetooth foot pedals** — the inexpensive ones you find online. Most of these send arrow key or page key events, and you can remap them in GigScroll.
- **Bluetooth keyboards and numeric keypads** — useful for testing at home or as a backup. Any key can be mapped to any action.

If it pairs with your iPad as a Bluetooth device and sends key presses, it will work.

## Pairing Your Device

This part happens in iPadOS, not in GigScroll:

1. Turn on your foot pedal and put it in pairing mode (check your pedal's instructions — usually a long press on a button)
2. Open **Settings** on your iPad
3. Go to **Bluetooth**
4. Find your pedal in the list and tap to connect

Once paired, the pedal reconnects automatically when you turn it on near your iPad.

## Enabling Foot Pedal Controls

Open GigScroll and go to **Settings**, then tap **Foot Pedal**. Toggle the foot pedal controls on.

That is it. The default mappings are ready to use immediately.

## The Five Mappable Actions

You get five actions you can assign to any key:

- **Play / Pause** — starts or stops the teleprompter scroll
- **Speed Up** — increases scroll speed by 0.1x
- **Speed Down** — decreases scroll speed by 0.1x
- **Next Song** — jumps to the next song in your setlist
- **Previous Song** — goes back to the previous song

These cover the things you actually need during a performance. Speed adjustments are small and incremental, so you can fine-tune your scroll rate without overshooting.

## Default Key Mappings

The defaults match AirTurn Mode 2, which is probably the most common pedal setup for musicians:

| Key | Action |
|-----|--------|
| Space | Play / Pause |
| Down Arrow | Speed Up |
| Up Arrow | Speed Down |
| Right Arrow | Next Song |
| Left Arrow | Previous Song |

If you are using an AirTurn pedal in Mode 2, you can skip the remapping step entirely.

## Remapping Keys

If your pedal sends different keys, remapping is straightforward:

1. Go to **Settings**, then tap **Foot Pedal**
2. Tap the action you want to remap
3. Press the button on your foot pedal
4. GigScroll captures the key and assigns it

If the key you press is already assigned to a different action, GigScroll resolves the conflict automatically — the old assignment gets cleared. No need to manually unassign anything first.

If you want to start over, there is a **Reset to Defaults** option that puts everything back to the AirTurn Mode 2 mappings.

## A Few Behavior Details

Some things worth knowing about how foot pedal input works during a performance:

- **Key repeat is suppressed.** If you hold down a pedal button, it fires once. This prevents accidental rapid-fire speed changes or song skips.
- **Speed changes are quiet.** Adjusting speed with the pedal does not reveal the on-screen controls. The speed changes happen in the background so nothing distracts from your lyrics or charts.
- **The pedal pauses while the jog wheel is open.** If you open the jog wheel to manually scrub through a song, pedal input is ignored until you close it. This avoids conflicting inputs.

## Practical Tips

**Test during soundcheck.** Pair your pedal, run through a few songs, and make sure the speed feels right before the audience shows up. This is also a good time to check that your pedal reconnects reliably after being turned off and on.

**Disable the toggle when you are not performing.** If you use a Bluetooth keyboard with your iPad for everyday typing, leave the foot pedal controls turned off in GigScroll settings. Otherwise, pressing Space or arrow keys while typing could trigger teleprompter actions. Flip it on when you are setting up for a gig, flip it off when you are done.

## Getting Started

If you want more detail on GigScroll's performance features, the [user guide](/guides/gigscroll/) covers everything. You can download [GigScroll on the App Store](https://apps.apple.com/us/app/gigscroll/id6753904306).

For related guides, see [how to use your iPad as a lyrics teleprompter on stage](/blog/how-to-use-ipad-lyrics-teleprompter-on-stage/) or [choosing fonts, themes, and sizes for stage readability](/blog/setting-up-perfect-stage-display-fonts-themes-sizes/).
