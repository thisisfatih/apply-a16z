# Contributing to apply-a16z

Three high-leverage contribution types: **rubric calibration**, **field templates**, and **sample applications**. All three improve real outcomes for founders.

---

## Before you start

Read `CLAUDE.md` — it covers code style, architecture decisions, and what not to do. Read `docs/a16z-speedrun-criteria.md` so you understand the bar we're scoring against.

---

## 1. Rubric calibration

The scoring rubric in `docs/scoring-rubric.md` is a living document. It drifts when:
- The a16z speedrun program updates its criteria
- Test cases in `tests/test-score.md` show the rubric scoring weak applications too generously
- Real-world outcomes contradict rubric predictions (application scored 80+ but rejected)

**To contribute a rubric fix:**
1. Identify which field's rubric is miscalibrated and why.
2. Write a test case in `tests/test-score.md` that fails on the current rubric.
3. Update the field rubric in `docs/scoring-rubric.md`.
4. Verify the sample application at `examples/sample-application/application.md` still scores 85+.
5. Submit a PR with: the failing test, the rubric change, and a one-paragraph explanation of why the old rubric was wrong.

Do not change field weights without evidence. Weight changes are high-impact — they require a consensus discussion in the PR.

---

## 2. Field templates

The `docs/field-guide.md` defines what each field is asking and common mistakes. Contributors can:

- Add a new **common mistake** to an existing field (with a concrete example)
- Add a **field pattern** (a sentence structure that consistently scores well)
- Update field **character limits** if the a16z form changes

**To contribute a field template improvement:**
1. Edit `docs/field-guide.md` directly.
2. Add a concrete before/after example — not just a description of the improvement.
3. Verify no skills are hardcoding field behavior that conflicts with your change.

If the a16z form adds a new field, add it to `docs/field-guide.md`, create a rubric entry in `docs/scoring-rubric.md`, and update the `totalFields` constant referenced in `skills/draft-application/SKILL.md`.

---

## 3. Sample applications

`examples/sample-application/` contains one reference application and one coach session. More examples help calibrate the skills and give founders concrete targets.

**What makes a good sample application:**
- Fictional company (do not submit real companies without their explicit consent)
- Domain-specific enough to be useful — a logistics company example is more useful than a generic SaaS
- Honestly scored — if an example scores 72/100, say 72/100 and explain what's weak
- Covers a diverse range of verticals — we need samples beyond SaaS (hardware, biotech, marketplaces, dev tools)

**To contribute a sample:**
1. Create a new directory: `examples/[company-name]/`
2. Write `application.md` following the format in the existing sample
3. Include a score table at the bottom with honest per-field scores
4. Optionally add a `coach-session.md` showing 2-3 key intake or sharpening exchanges

Do not add samples that score below 70 without a corresponding `critique.md` explaining exactly why each weak field fails. Weak examples without annotation mislead founders.

---

## 4. Skills and agents

Significant changes to skills or agents require an ADR (Architecture Decision Record) in `docs/adr/`. Use this template:

```
# ADR-[number]: [Decision title]

## Status
Proposed | Accepted | Superseded by ADR-X

## Context
[Why is this decision needed? What constraint or problem drives it?]

## Decision
[What did we decide?]

## Alternatives considered
[What else was considered, and why was it rejected?]

## Consequences
[What does this decision make easier? What does it make harder?]
```

If your skill change affects the scoring rubric, update both together in the same PR.

---

## PR requirements

Every PR must include:
- [ ] What the change improves (one sentence)
- [ ] Evidence the change is needed (test case, real-world outcome, or a16z program update)
- [ ] Verification that `examples/sample-application/application.md` still scores 85+

PRs that only add documentation without a concrete improvement or test are unlikely to merge.

---

## What not to contribute

- Changes that make the scoring more lenient without evidence of miscalibration
- New commands that duplicate existing command behavior
- Sample applications for real companies without their consent
- Rubric changes that reflect personal opinion rather than observed a16z behavior
