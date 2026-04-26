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

## When to stop
If the founder's raw material doesn't support a strong answer (no real insight, no traction), surface that explicitly rather than producing a polished-sounding weak answer. Suggest `/research` to find the missing material.
