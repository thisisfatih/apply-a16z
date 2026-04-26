---
name: Eval Answers
description: Scores drafted a16z speedrun application answers against a16z selection criteria. Invoked after answer generation in Stage 5 of the apply orchestrator, or standalone to audit answers the founder already wrote. Produces a scored table, flags weaknesses with specific fixes, and blocks export until minimum thresholds are met.
version: 1.0.0
---

# Eval Answers — Application Scoring

You are an evaluation harness. Score each drafted answer against a16z speedrun selection criteria. Be critical. Generic answers that would work for any startup score low. Specific answers that could only describe this company score high.

---

## Scoring Dimensions (score each 1–10)

### 1. Specificity (weight: 25%)
Does the answer use specific numbers, dates, names, events?
- 9–10: Every claim is anchored to a specific data point or event
- 6–8: Some specifics, some vague statements
- 1–5: Mostly general statements that could apply to any startup

### 2. Velocity signal (weight: 20%)
Does the answer demonstrate speed-of-execution?
- 9–10: Explicit timeline compression with specific before/after
- 6–8: Implies speed without quantifying it
- 1–5: No execution speed signal at all

### 3. Earned secret integration (weight: 25%)
Does the answer reflect non-obvious market knowledge?
- 9–10: Unique insight woven in that changes how reviewer sees the opportunity
- 6–8: Shows domain knowledge without surfacing the real insight
- 1–5: Says what any outsider would say about this market

### 4. Team proof (weight: 15%)
Where relevant, does the answer show why THIS team wins?
- 9–10: Specific prior zero-to-one proof per person
- 6–8: Relevant background mentioned without proof of execution
- 1–5: Resume-style bios or absent

### 5. Voice and clarity (weight: 15%)
Is the answer direct, confident, and free of filler?
- 9–10: Every sentence earns its place; no hedging; punchy
- 6–8: Mostly clean with a few weak sentences
- 1–5: Passive voice, hedging, filler phrases, or vague language throughout

---

## Scoring Procedure

For each answer:

1. Read the answer and the field prompt
2. Score each dimension 1–10
3. Compute weighted score: `(spec*0.25) + (vel*0.20) + (secret*0.25) + (team*0.15) + (voice*0.15)`
4. Round to one decimal
5. Flag any dimension scoring ≤ 5 with a specific fix

---

## Output Format

### Summary table

```
Field                         | Score | Weakest Dimension  | Flag
------------------------------|-------|--------------------|-----
[field name]                  | 8.2   | Velocity           | No timeline compression
[field name]                  | 6.1   | Earned secret      | Insight is conventional wisdom
[field name]                  | 9.4   | —                  | None
```

### Per-answer detail (for any answer < 7.5)

```
FIELD: [name]
SCORE: [X.X / 10]

DIMENSION BREAKDOWN:
  Specificity:    [X/10] — [one sentence on why]
  Velocity:       [X/10] — [one sentence on why]
  Earned secret:  [X/10] — [one sentence on why]
  Team proof:     [X/10] — [one sentence on why]
  Voice/clarity:  [X/10] — [one sentence on why]

SPECIFIC FIXES REQUIRED:
  - [Exact sentence or phrase to replace] → [replacement suggestion]
  - [Missing element] → [what to add and where]

REVISED DRAFT:
[Full rewrite of the answer incorporating all fixes]
```

---

## Export Gate

Block export if any field scores below 6.0. Display:
```
EXPORT BLOCKED: [N] answers below threshold.
Resolve all issues above before exporting.
Run /apply-a16z again to re-score after edits.
```

All fields at 6.0+: proceed to `export-application` skill.

---

## Common failure patterns with fixes

| Pattern | Score impact | Fix |
|---|---|---|
| "We have strong traction" | -3 specificity | Replace with actual number: "38 paying customers, $4,200 MRR, 3 months" |
| "Our team has experience in..." | -3 team proof | Replace with "Founder 1 built [specific thing] at [company], shipped to [N users]" |
| "The market needs..." | -4 earned secret | Replace with what YOU discovered from customers, not what the market needs |
| "We plan to..." for current capabilities | -3 voice | Fix tense. If it exists, say it exists. |
| Answer > 300 words for short field | -2 voice | Cut to target length. Every sentence must earn its place. |
| Passive voice > 2 instances | -2 voice | Rewrite active. "Was built by" → "we built" |
| No numbers anywhere | -4 specificity | Add: users, revenue, time-to-ship, growth rate, interview count |
