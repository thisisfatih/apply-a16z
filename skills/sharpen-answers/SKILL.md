---
name: Sharpen Answers
description: Activated when a founder asks to improve a specific application answer, or when /score identifies a field scoring below 3/5. Rewrites with annotated before/after and scores the revision.
version: 0.1.0
---

# Sharpen Answers Skill

## When this activates
- User runs `/sharpen`
- User asks "make this better", "rewrite this", "improve my answer" on an application field
- `/score` surfaces a field below 3/5 and offers to sharpen it

## Sharpening principles (in priority order)
1. **Specificity** — Replace every vague claim with a number, name, date, or named entity
2. **Insight** — Surface the non-obvious belief or finding. If none exists, ask the founder for it.
3. **Momentum** — Lead with what has already happened. Past > future for a16z.
4. **Economy** — Match or beat original word count. Every word must earn its place.
5. **Voice** — Preserve the founder's voice. Do not write like a press release.

## Writing density by field

Reviewers scan hundreds of applications. Match compression to field purpose:

| Field | Density | Rule |
|-------|---------|------|
| One-liner (10w) | **ultra** | Noun phrase only. No articles. Every word counts. |
| Relevant experience | **full** | Drop articles. Fragments OK. Outputs stacked, not narrated. |
| Team description | **full** | Drop articles. Facts + proof. No connective filler. |
| Startup description | **lite** | Keep sentences. Drop filler. SCQA flow must survive compression. |
| Traction notes | **full** | Numbers first. Context in fragments. Zero hedging. |
| Anything else | **lite** | Clear delta. Full sentences. No padding. |

**Density levels:**
- **ultra** — noun phrases, abbreviations, minimum viable words. ("AI underwriting, commercial brokers — $680K ARR")
- **full** — drop articles, fragments OK, no filler. ("Built fraud detection at Stripe. Shipped to 40K merchants.")
- **lite** — full sentences, zero filler/hedging, logic intact. ("We built X because Y was broken in a specific way.")

Apply the target density when rewriting. If upgrading to full/ultra causes ambiguity, step back to lite.

## Forbidden phrases (flag and remove)
- "passionate about" / "deeply passionate"
- "large market opportunity" / "massive TAM"
- "disruptive" / "revolutionary" / "game-changing"
- "world-class team"
- "best-in-class"
- "at the forefront of"
- "leverage" (as verb in business context)

## Output format
```
ORIGINAL:
[paste original]

REWRITE:
[rewrite]

CHANGES:
- "[word/phrase changed]" → "[replacement]" — [one-word rationale: specificity / insight / momentum / economy / voice]
```

## Iteration
Score the rewrite (1-5) immediately. If still below 4/5, offer a second pass. Name what's still missing before doing it — don't just rewrite again blindly.

## RFS alignment check (startup description field only)

When sharpening the Startup Description, check `docs/a16z-big-ideas.md`:
- If the startup maps to an active a16z Big Idea or partner RFS, weave that alignment into the rewrite
- A direct partner RFS match is strongest — the reviewer may literally be that partner
- Only do this if the alignment is real. Don't force-fit.

Example (before): "We build AI tools for enterprise data teams."
Example (after with alignment): "Enterprise data teams can't feed unstructured PDFs, videos, and contracts into AI reliably. We build the ingestion and structuring layer that makes this work — exactly the gap Jennifer Li (a16z) named as Big Idea #1 for 2026."

## When to stop
If the founder's raw material doesn't support a strong answer (no real insight, no traction), surface that explicitly rather than producing a polished-sounding weak answer. Suggest `/research` to find the missing material.
