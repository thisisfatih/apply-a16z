# Test: Score Application

Validation cases for the `score-application` skill and `/score` command. Each case has a known input and expected score band. Use these to verify scoring calibration when changing rubric weights or criteria.

---

## Case 1: Strong application (expected: 85+)

**Input:** `examples/sample-application/application.md`

**Expected output:**
- Overall score: 88-95
- Band: "Submit now"
- No field below 4/5
- Traction, Team, and Why Now all at 5/5

**Failure condition:** Any field scores below 4/5, or overall score below 85.

---

## Case 2: Weak application (expected: <55)

**Input:**
```
Company: Synergize Pro
One-line: We are building a platform for enterprise digital transformation.
Problem: Companies struggle with inefficient workflows and outdated processes.
Solution: Our AI-powered platform leverages machine learning to streamline operations.
Team: Our world-class team has 30+ years of combined experience across Fortune 500 companies.
Traction: We have strong early interest and are in conversations with potential customers.
Why now: AI is transforming every industry and the time is now to act.
```

**Expected output:**
- Overall score: 35-50
- Band: "Rethink framing"
- Multiple fields at 1/5 (solution, team, traction, why now)
- Fatal flaw from vc-critic: no specific insight, no traction numbers, team answer is credential-only

**Failure condition:** Score above 55, or any of the flagged fields score above 2/5.

---

## Case 3: Mixed application (expected: 60-75)

**Input:**
```
Company: FleetOps
One-line: FleetOps helps trucking companies track driver compliance — we have 40 paying customers.
Problem: DOT compliance violations cost trucking companies $11K per incident. Our founders spent 3 years managing compliance at a regional carrier.
Solution: Real-time driver log monitoring with automated violation alerts. Integrates with ELDs.
Team: Two founders, both ex-operators. No software engineering background — we contracted the first version.
Traction: 40 customers, $120K ARR. Not tracking churn or growth rate yet.
Why now: ELD mandates are driving digitization across the industry.
```

**Expected output:**
- Overall score: 62-72
- Band: "Significant revision needed"
- Team field flagged (no engineering depth, contracted build)
- Traction field flagged (no churn/growth data)
- Problem and one-line score 4-5

**Failure condition:** Score outside 55-80 range, or problem/one-line score below 3/5.

---

## Rubric calibration notes

If scores drift from expected ranges, check:
1. Field weight assignments in `docs/scoring-rubric.md`
2. Whether "named customer" alone is being given too much weight on traction
3. Whether the team field is penalizing contracted builds appropriately (should be 2-3, not 1)
