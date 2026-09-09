---
title: Privacy Policy - LOOM
slug: loom
appName: LOOM
backUrl: /loom/
lastUpdated: September 8, 2026
summary: "LOOM makes no network calls. It has no accounts, no analytics and no crash reporting, and it never sends us anything — including whether you have ever opened it. Buying a licence does involve data, because a payment does. Our checkout provider Polar handles the transaction, and we keep one line per sale so we can re-issue your licence file forever."
---

## The short version

Most privacy policies for a paid app describe what the app sends home. This one cannot, because
LOOM does not send anything home, and it is built so that it cannot start doing so by accident.

Buying it is a different matter. A payment involves a card, an email address and a merchant, and
this policy is mostly about that — because that is where the data actually is.

## The app makes no network calls

**LOOM contains no networking code at all.** Not disabled networking, not networking behind a
preference — none. A check in LOOM's build fails the build if any code LOOM writes reaches a
network entry point.

This is not primarily a privacy decision. It is a reliability one: a looper gets opened at a venue
on captive-portal WiFi, and captive-portal WiFi does not fail cleanly — it hangs. The only way to
guarantee that nothing hangs at soundcheck is for there to be no code that could. Privacy is what
that choice happens to buy you as well.

Concretely, LOOM does not:

- create an account or ask you to sign in
- check a licence server, at launch or ever
- collect analytics, usage statistics or telemetry
- send crash reports
- check for updates in the background
- contain any advertising or tracking code

**Two buttons hand an address to your web browser.** "Buy a licence" opens
[moonquakemedia.com/loom/buy](/loom/buy), and the version check opens
[moonquakemedia.com/loom/version](/loom/version). In both cases LOOM opens your browser and
**reads nothing back** — there is no response for it to read, because it never made the request.
Your browser did. If you never press either button, LOOM never causes a single network request in
its life.

## What LOOM stores on your Mac

Everything LOOM keeps is on your own computer, in your user Library:

- **Your licence file**, in LOOM's application-support folder. It contains the licence itself,
  which includes **the email address you bought with** — see below.
- **Your preferences, sessions and loops**, wherever you save them.
- **The start date of your trial**, in your macOS Keychain.

None of it is transmitted anywhere. Deleting LOOM's application-support folder removes it.

## Buying a licence

### Polar handles the payment

Checkout runs on **Polar**, which is the merchant of record for the sale. When you buy LOOM you
give your details to Polar, not to us: they process the card, calculate and remit tax, and issue
the receipt. What they collect and how long they keep it is governed by
[Polar's privacy policy](https://polar.sh/legal/privacy).

From that transaction we receive what any merchant's seller receives: your email address, the
order reference, the date, and the amount. We do not receive your card number.

### What our licence service records, and why

When your payment completes, a service we run turns that order into your licence file. It writes
**one line per sale** to a private log, containing exactly five fields:

- a **licence id** — a hash of the order reference, deliberately, so that a licence id pasted into
  a public support thread does not disclose your order
- the **Polar order reference**
- **your email address**
- the **date the licence was issued**
- a **checksum** of the licence contents

That line exists for one reason: it is what lets us hand you the **byte-for-byte identical** file
again, any number of times, years later, without minting you a second licence. It is also what
makes the "redeem" page work when you have lost your download. Without it, a licence lost is a
licence gone.

That log is not shared with anyone, is not used for marketing, and is not connected to any mailing
list. **We do not have an analytics product, an advertising account, or a customer-data platform
of any kind.**

### ⚠️ Your licence file contains your email address

Your `LOOM.loomlicence` file has your email address inside it, in readable text. It is there so
that a licence can be traced to a purchase during support.

**This matters if you share the file.** Sending someone your licence file — to demonstrate a
problem, say — discloses the address you bought with. It also does not let them use LOOM, because
a licence is tied to nothing about their machine and everything about it is public once shared;
please just don't.

## Support email

If you email <support@moonquakemedia.com> we keep the correspondence in an ordinary mailbox for as
long as it is useful, and we may keep the licence id involved so a future question can be answered
without asking you everything again.

## What we never do

We do not sell, rent or share your personal information. We do not build a profile of you. We do
not track you across sites. We run no advertising. We do not use your data to train anything.

## Children

LOOM is a music production tool and is not directed at children under 13, and we do not knowingly
collect information from them.

## Your choices

- **Get a copy of what we hold, or have it deleted.** Email <support@moonquakemedia.com>. What we
  hold is the one line described above; ask and we will show it to you or remove it. ⚠️ Removing it
  means we can no longer re-issue your licence file, and the "redeem" page will stop recognising
  your key — the licence you already hold keeps working forever either way, because LOOM verifies
  it offline and never asks anyone for permission.
- **For the payment record**, which is Polar's, contact Polar.
- **On your own Mac**, deleting LOOM's application-support folder removes everything it has stored.

## Changes to this policy

If this changes we will update the date at the top. LOOM's own no-network property is not a
policy we would change quietly: it is asserted by a test in the product's build, so a version
that phoned home would have to be a deliberate act, announced.

## Contact

Moonquake Media — <support@moonquakemedia.com>
