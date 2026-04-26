# Scoring Rubric — a16z Speedrun Answer Eval
# Used by: eval-answers skill, score command

## Dimensions and weights

| Dimension      | Weight | What it measures |
|----------------|--------|-----------------|
| Specificity    | 25%    | Numbers, names, dates, events vs. vague language |
| Velocity       | 20%    | Execution speed proof — timeline compression |
| Earned secret  | 25%    | Non-obvious market insight woven into the answer |
| Team proof     | 15%    | Prior zero-to-one execution evidence per person |
| Voice/clarity  | 15%    | Direct, confident, no filler, no passive voice |

## Score bands

| Score | Meaning | Action |
|-------|---------|--------|
| 9.0–10 | Exceptional — rare, ready | Keep as-is |
| 7.5–8.9 | Strong — minor polish | Optional /sharpen pass |
| 6.0–7.4 | Acceptable — passes gate | Recommend sharpen before submit |
| 4.0–5.9 | Weak — fails gate | Required revision before export |
| 1.0–3.9 | Disqualifying | Rewrite from scratch |

## Export gate

All fields must score >= 6.0 before export is permitted.
Fields scoring 6.0–7.4 are flagged with recommendation to sharpen.

## Field weight multipliers

Not all fields are weighted equally in the overall application score.

| Field | Multiplier |
|-------|-----------|
| company_description | 1.5x |
| market_insight | 1.5x |
| founders | 1.3x |
| velocity_proof | 1.3x |
| traction | 1.2x |
| video_pitch | 1.2x |
| All others | 1.0x |

## Per-dimension scoring guide

### Specificity (1–10)
- 10: Every sentence anchored to a named data point
- 8: Most claims specific, 1–2 vague
- 6: Roughly half specific, half general
- 4: Mostly general with token numbers
- 2: No specific data anywhere

### Velocity (1–10)
- 10: Explicit "shipped X in Y days" with before/after context
- 8: Clear implication of speed with partial timeline
- 6: Speed mentioned but not quantified
- 4: No velocity signal in an answer where one is possible
- 2: Implies slowness ("we're planning to", "once we have...")

### Earned secret (1–10)
- 10: Unique insight that changes how reviewer sees the opportunity
- 8: Domain expertise that's above-average but not truly non-obvious
- 6: Shows knowledge of the space without surfacing real insight
- 4: Says what any informed outsider would say
- 2: Generic claims ("the market is large", "incumbents are slow")

### Team proof (1–10)
- 10: Specific prior zero-to-one per person with outcome
- 8: Clear relevant track record with some specifics
- 6: Background mentioned without execution proof
- 4: Resume-style description of experience
- 2: No team context where it was needed

### Voice/clarity (1–10)
- 10: Every sentence direct, active, no waste
- 8: Mostly clean with 1–2 weak spots
- 6: Some passive voice or hedging but generally readable
- 4: Multiple filler phrases or passive constructions
- 2: "We are passionate about", "unique opportunity", extensive hedging
