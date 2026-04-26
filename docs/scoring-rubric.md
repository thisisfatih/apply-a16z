# Scoring Rubric

Used by the `score-application` skill and `vc-critic` agent to evaluate draft applications field-by-field.

## Score scale

| Score | Meaning | Action |
|-------|---------|--------|
| 5 | Excellent — submit as-is | None |
| 4 | Good — minor polish only | Optional sharpen |
| 3 | Adequate — specific improvement needed | Sharpen before submit |
| 2 | Weak — missing core element | Major revision required |
| 1 | Failing — does not answer the question | Rewrite from scratch |

---

## Per-Field Rubrics

### One-line description
- 5: Specific, no adjectives, clear who/what/outcome in <100 chars
- 4: Clear but slightly wordy or missing outcome
- 3: Understandable but generic
- 2: Could apply to 10 other companies
- 1: Tagline, not description

### What does your company do?
- 5: Problem + mechanism + why-it-works-now in <3 sentences, fully specific
- 4: All elements present, one slightly vague
- 3: Clear what it does, not clear why it works or why now
- 2: Describes the market more than the product
- 1: Platform-speak with no concrete product description

### Problem
- 5: Lived-experience evidence + specific pain + named customers/users suffering it
- 4: Specific pain, no named evidence
- 3: Category pain with one specific example
- 2: Generic market problem description
- 1: "Companies struggle with X" with no specificity

### Solution
- 5: Clear mechanism, measurable outcome, named differentiator vs alternatives
- 4: Clear mechanism, outcome implied
- 3: What it does, not why it works
- 2: Feature list
- 1: "AI-powered platform" with no further specificity

### Business model
- 5: Named primary model, unit economics stated, path to $1M ARR visible
- 4: Model named, no unit economics
- 3: SaaS/usage implied but not specified
- 2: "Multiple revenue streams" — no primary named
- 1: No model described

### Competition
- 5: Honest landscape including real alternatives; differentiation is specific and defensible
- 4: Real competitors named, differentiation clear
- 3: Some real competitors, differentiation generic
- 2: Only strawman competitors or "we're unique"
- 1: "No competition" or no answer

### Why now
- 5: Specific enabling factor named (model, cost, regulation, distribution) + why this moment not 3 years ago
- 4: Enabling factor named, not fully explained
- 3: Timing claim without enabling factor
- 2: "AI is transforming X" — pure trend, no mechanism
- 1: No why-now answer

### Traction
- 5: Revenue or users with growth rate, denominator, and time period; named customers if B2B
- 4: Numbers present, no growth rate or denominator
- 3: Numbers present but no context (total signups, no retention or growth)
- 2: "Early traction" / "positive feedback" — no numbers
- 1: No traction section or "pre-product"

### Team / Why us
- 5: Biographical answer: specific things built/shipped/sold; unfair advantage named
- 4: Outputs mentioned, advantage implied not stated
- 3: Mix of credentials and outputs
- 2: Credentials only (degrees, employers)
- 1: "Passionate team with X years experience"

### AI usage
- 5: Specific model/approach named, concrete role in product, why AI enables something previously impossible
- 4: Concrete role, model not named
- 3: AI mentioned as component, not mechanism
- 2: "We use AI to improve efficiency" — generic
- 1: No AI usage described (disqualifying for speedrun)

---

## Overall score calculation

```
Score = (team_score * 0.25) +
        ((problem_score + solution_score) / 2 * 0.25) +
        (traction_score * 0.20) +
        (business_model_score * 0.15) +
        ((why_now_score + competition_score) / 2 * 0.15)

Scale: raw score is out of 5, multiply by 20 for 0-100
```

## Verdict bands

| Score | Band | Recommendation |
|-------|------|----------------|
| 85-100 | Strong | Submit now |
| 70-84 | Good | Sharpen 1-2 weak fields |
| 55-69 | Needs work | Revise 3+ fields before submitting |
| <55 | Not ready | Rethink framing; run /research |
