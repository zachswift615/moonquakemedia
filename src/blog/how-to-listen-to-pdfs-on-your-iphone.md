---
title: "How to Listen to PDFs on Your iPhone"
date: 2026-03-03
updated: 2026-11-25T15:00:00-06:00
description: "How to have a PDF read aloud on iPhone. Listen2 turns research papers, reports and scanned documents into clean spoken text with word highlighting, offline."
tags:
  - how-to
  - pdf
  - listen2
excerpt: "You have a 40-page PDF sitting in your inbox. You know you should read it. You also know you are not going to stare at a screen for an hour. Here is how to listen to it instead."
ogImage: /images/listen2-og.png
---

You have a 40-page PDF sitting in your inbox. Maybe it is a research paper, a textbook chapter, or a report your boss needs you to review by tomorrow. You know you should read it. You also know you are not going to sit and stare at a screen for an hour.

PDFs are everywhere, and they were designed for printing, not for reading on a phone. The text is small, the layout is fixed, and you end up pinching and dragging to follow a single paragraph.

What if you could just listen to it instead?

## Why Reading a PDF Aloud Usually Goes Badly

Your iPhone has a Speak Screen feature in the Accessibility settings. Swipe down with two fingers and it reads whatever is on screen. Try it on a PDF and you will hear the trouble quickly. It reads page numbers and running headers as if they were sentences. In a two-column paper it can read straight across both columns. A word split across two lines with a hyphen comes out as two half-words. And it does not remember where you stopped.

None of that is the voice's fault. A PDF stores where each piece of text sits on the page, not what order a person would read it in. An app has to work that out before any voice can do a good job.

## How Listen2 Handles a PDF

[Listen2](/apps/listen2/) does that work when you import the file. It does not show you the PDF page. It pulls the text out, puts it in reading order, and shows it as clean text you can resize, with each word highlighted as it is spoken.

{% blogshot "/images/blog/how-to-listen-to-pdfs-on-your-iphone/page-and-reader.png", "On the left, the first page of a two-column research paper as it appears in the PDF, with small print and a diagram. On the right, the same paper in Listen2: large text in a single column, with one word highlighted in blue and playback controls at the bottom", "The same paper as a PDF page and in Listen2. The text is put in reading order and shown at a size you can read.", 620 %}

During import, Listen2:

- reads two-column pages in the right order,
- leaves out footnotes and other page furniture that interrupts a sentence,
- re-joins words that were hyphenated across a line break,
- removes bracket citations such as [1] or [24, 55] from the body text, so a research paper does not stop every other sentence. If you want them read, you can turn that off in Settings under PDF Import.

A word of honesty here. Reading a PDF is as much craft as science. There are thousands of ways to lay out a page, and working out the columns, or joining a sentence that runs from one page onto the next, is a best effort. Most documents come out clean. Some come out with a heading in the wrong place or a stray line from a table. When that happens, there is a second way to import the same file.

## Two Ways to Import, and Why to Try Both

On iOS 26 or later, the import screen lets you choose how the PDF is read:

- **Standard** is the default. It runs on VoxPDF, a PDF engine we wrote ourselves on top of PDFium, the open-source library behind Chrome's PDF viewer. It does far more than copy the text out. It works out the columns and the reading order, tells body text from footnotes and page furniture, and does all the cleanup described above. It is fast, and it is right for most documents.
- **AI Vision** looks at each page the way you would, as a picture, and uses Apple's on-device layout analysis to decide what order things go in. It can do better on complicated pages: several columns, unusual formatting, text that wraps around figures.

Neither one wins every time. If a document sounds wrong with one method, import it again with the other and compare. It takes a minute, and for a long paper or a book it is worth it.

## Found a PDF That Came Out Wrong?

If neither method gets a document right, I would like to see it. Send the PDF, or just the page that went wrong, to [support@moonquakemedia.com](mailto:support@moonquakemedia.com) with a line about what you expected. Every layout I have fixed so far started with a file somebody sent me. Only send something you are comfortable sharing.

## Step by Step

1. Open Listen2 and tap the **+** button, then **Import File**.
2. Pick your PDF from the Files app. That includes iCloud Drive and any other storage you have connected there.
3. Watch the progress bar. It moves page by page, and there is a Cancel button if you picked the wrong file.
4. Press play.

You can also send a PDF to Listen2 from another app with the share sheet.

Once it is in your library, Listen2 keeps your place. Lock the phone and it keeps reading. Come back tomorrow and it starts where you stopped. Drag the progress bar to jump anywhere in a long document, and if the PDF has chapters, they appear in the table of contents.

## Follow Along, or Just Listen

Each word is highlighted as it is spoken. If your attention drifts, your eyes can find the place again at a glance. You can highlight by word or by sentence, or turn highlighting off and just listen.

## It Works Offline, and Your Documents Stay Put

Every voice in Listen2 runs on your iPhone. The phone turns the text into speech itself, so it works on a plane or in the subway, and the document is never sent anywhere. That matters if the PDF is a contract, a medical record or anything else you would not upload to a stranger's server. There is more about this in [the offline text-to-speech post](/blog/best-offline-text-to-speech-app-iphone-2026/).

## Scanned PDFs

Some PDFs are not really text. They are photographs of pages inside a PDF file, and there is nothing in them for a voice to read.

Listen2 notices this during import and offers to read the pages with text recognition instead. On iOS 26 or later, the recognition keeps the layout, so tables and two-column pages come out in the right order. On earlier versions of iOS it reads top to bottom, and the app tells you about that limit before you confirm.

If a PDF has text but it comes out as gibberish, which happens with unusual fonts, there is a third choice on the same import screen, Vision OCR, which ignores the stored text and reads the pages as images.

One limit to know about: password-protected PDFs cannot be imported. Remove the password in another app first.

## Pictures and Charts

A voice cannot read a chart. Listen2 can describe one. When you import a PDF that contains images, it offers to write a short description of each, and it reads the description aloud when you reach that point. This also runs on the phone, after a one-time download of about 350 MB.

{% blogshot "/images/blog/how-to-listen-to-pdfs-on-your-iphone/figure-description.png", "On the left, a book cover illustration shown in Listen2: Alice in Wonderland by Lewis Carroll. On the right, the description Listen2 wrote for it, in large text, beginning The image is the cover of a book titled Alice in Wonderland, with a note underneath that says AI-generated description, may be inaccurate", "A picture in a document, and the description Listen2 reads aloud for it.", 560 %}

The descriptions are written by a model, and they can be wrong. Listen2 says so on the screen.

## Not Only PDFs

Listen2 also reads EPUB books, Word documents, DAISY books, plain text and Markdown. You can paste text from the clipboard or share an article from Safari. If you read a lot on the web, see how to [turn saved articles into a personal podcast](/blog/turn-saved-articles-into-personal-podcast/).

## Try It With Your Own PDF

The best test is the document you have been putting off. [Listen2](https://apps.apple.com/us/app/listen-2-reader/id6755753624) is free to try for seven days, and after that it is a single purchase of $24.99 with no subscription.
