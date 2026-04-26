# apply-a16z

![version](https://img.shields.io/badge/version-0.1.0-green)
![license](https://img.shields.io/badge/license-MIT-green)
![platform](https://img.shields.io/badge/platform-Claude%20Code-blue)

A Claude Code plugin that helps founders write strong a16z speedrun applications — up to $1M in funding.

---

## What it does

The a16z speedrun program funds early-stage AI startups fast. The application is short-form. The bar is high. Most applications fail not because the company is weak, but because the answers are generic — vague problem descriptions, traction numbers without context, team sections that list credentials instead of outputs.

apply-a16z guides you through the application field-by-field. It asks the right questions to surface what makes your company specific and non-obvious, drafts answers from your raw material, scores every field against the criteria a16z reviewers actually use, and sharpens the weak ones before you submit.

The workflow: **research** your earned secrets → **draft** all fields → **score** the draft → **sharpen** the weak fields → **auto-fill the live form** → you click Submit.

---

## Install

```bash
claude plugin marketplace add thisisfatih/apply-a16z
claude plugin install apply-a16z@thisisfatih
```

Requires Claude Code. No API keys, no external services, no data leaves your machine.

**Optional — browser auto-fill** (fills the live form for you):
```bash
claude plugin install playwright@anthropic
```

---

## Commands

| Command | What it does |
|---------|-------------|
| `/apply` | Full pipeline — CV intake, questions, earned secrets, drafting, scoring |
| `/fill` | Auto-fill the live form in your browser (requires Playwright MCP) |
| `/score` | Score a draft or existing application against a16z criteria |
| `/sharpen` | Rewrite a specific field to score higher — shows before/after with annotations |
| `/research` | Surface your earned secrets and founder-market fit before drafting |

---

## How the scoring works

Every field is scored 1-5 on the rubric in `docs/scoring-rubric.md`. Fields are weighted by their a16z priority:

- Team / Why us: 25%
- Problem + Solution: 25%
- Traction: 20%
- Business model: 15%
- Why now + Competition: 15%

Overall score maps to a verdict: **Submit now** (85+), **Sharpen first** (70-84), **Major revision** (55-69), or **Rethink framing** (<55).

---

## Why this works

Strong a16z applications share a pattern: every answer contains something specific that could only come from a founder with earned access to the problem — a number, a named customer, a contrarian insight, a thing they built. Generic applications fail because they describe the market without revealing what the founder knows that others don't.

apply-a16z is built around extracting that specificity. The intake questions are designed to surface earned secrets, not just product descriptions. The rubric penalizes vague language and rewards concrete evidence. The sharpening loop doesn't accept polished-sounding weak answers — it asks for the real data.

---

## Sample output

See `examples/sample-application/` for a full annotated application (fictional company, score: 92/100) and a sample coach session showing the intake and sharpening loop.

---

## Contributing

See `CONTRIBUTING.md`. The highest-leverage contributions: better field templates, new sample applications with honest scoring, and rubric calibration based on real application outcomes.

---

## License

MIT — build on it, fork it, use it to fund your company.

---
> README maintained automatically by [🐘 elephant](https://github.com/tonone-ai/elephant) — keep your docs in sync without the manual work.
