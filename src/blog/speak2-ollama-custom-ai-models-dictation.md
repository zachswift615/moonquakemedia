---
title: "Using Speak2 with Ollama: Custom AI Models for Domain-Specific Dictation"
date: 2026-03-06
description: "How to connect Speak2 to Ollama for local AI dictation cleanup with custom models and prompts. Full setup walkthrough."
tags:
  - how-to
  - dictation
  - ollama
  - speak2
excerpt: "Speak2 has a built-in AI model that cleans up dictated text, and it works well for most people. But if you want more control — over the model, the prompt, or the output format — you can point Speak2 at Ollama instead."
ogImage: /images/og-speak2.png
---

Speak2 has a built-in AI model that cleans up dictated text, and it works well for most people. But if you want more control — over the model, the prompt, or the output format — you can point Speak2 at Ollama instead.

[Ollama](https://ollama.com) is a tool for running large language models locally on your computer. You download a model, run it on your hardware, and interact with it through a local API. No cloud. No API keys. No usage fees. If you are already using Ollama for coding or writing tasks, connecting it to Speak2 takes about two minutes.

## Why Ollama for Dictation

The built-in mode in [Speak2](https://github.com/zachswift615/speak2) uses a small, fast model (Qwen 2.5 1.5B) that handles general cleanup — removing filler words, false starts, and verbal noise. It is a good default.

Ollama opens up more options. You can choose from hundreds of models, including ones fine-tuned for specific domains. You can write a custom prompt that formats the output exactly how you want it. And everything still stays on your machine.

## Setup Walkthrough

Here is how to get Speak2 and Ollama working together.

### 1. Install Ollama

Download and install Ollama from [ollama.com](https://ollama.com). It runs as a background service on your Mac.

### 2. Pull a Model

Open Terminal and run:

```
ollama pull gemma3:4b
```

This downloads the Gemma 3 4B model, which is about 2.5 GB. It is a good starting point — fast enough for real-time dictation cleanup and capable enough to follow detailed prompts.

### 3. Configure Speak2

In Speak2, go to **Settings > AI Refine > External Server**. Enter the following:

- **Server URL:** `http://localhost:11434` (this is the default)
- **Model name:** `gemma3:4b`

### 4. Test the Connection

Click **Test Connection**. You should see "Connected — got response." If you get an error, make sure Ollama is running. You can check by opening Terminal and running `ollama list`.

That is it. The next time you dictate, Speak2 will send the transcribed text to your Ollama model for cleanup.

## Custom Prompts: Where It Gets Interesting

The default prompt tells the AI to remove filler words and return clean text. That covers the basics. But you can replace this prompt with anything you want in the prompt field under **Settings > AI Refine**.

Here are three prompts I have found useful.

### Meeting Notes

```
Clean up this dictated text. Format it as bullet-pointed meeting notes
with action items marked with [ACTION]. Remove filler words.
```

This turns a rambling dictation into something you can paste directly into a shared document. The [ACTION] tags make it easy to search for tasks later.

### Code Documentation

```
Clean up this dictated text into a technical documentation paragraph.
Use present tense. Remove filler words and verbal artifacts.
```

Useful when you are dictating comments or documentation while reading through code. The output comes back in a style that fits a README or docstring.

### Email Draft

```
Clean up this dictated text into a professional email. Keep the tone
friendly but professional. Remove filler words and false starts.
```

You dictate your thoughts loosely, and the output is ready to send — or at least close to it.

## Model Recommendations

If you are not sure which model to try, here are some starting points:

- **gemma3:4b** — Good general purpose model. Fast on Apple Silicon. This is what I would start with.
- **llama3.2:3b** — Another solid option in the same size range.
- **Larger models (7B and up)** — Better at following complex prompts and producing polished output, but slower. Whether the tradeoff is worth it depends on your hardware and patience.
- **Domain-specific models** — If you can find a model fine-tuned for medical, legal, or technical language, it will handle specialized vocabulary better than a general model.

You can switch models anytime by changing the model name in Speak2's settings. No need to restart anything.

## The Honest Tradeoff

Ollama mode requires more setup than the built-in option. You need to install Ollama, download a model, and manage it yourself. If something breaks, you are troubleshooting two pieces of software instead of one.

For most people, the built-in mode is the better choice. It works out of the box, runs on-device, and handles everyday dictation well.

But if you want to pick your own model, write a prompt that formats output as bullet points or applies specific style rules, or keep everything running through tools you already control — Ollama mode is there. It is the same local-first approach, just with more knobs to turn.

For the full setup details, see the AI Text Refinement section in the [user guide](/guides/speak2/). If you have not installed Speak2 yet, the [setup guide](/blog/set-up-ai-dictation-mac-without-cloud/) covers getting started from scratch. For a comparison of the built-in refinement mode versus Ollama, see [how to clean up dictated text automatically](/blog/clean-up-dictated-text-automatically-local-ai/).
