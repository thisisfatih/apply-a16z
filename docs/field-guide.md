# Application Field Guide
# Verified: 2026-04-26 via live DOM snapshot of speedrun.a16z.com/apply/form (SR007)

The form is shorter than most founders expect. Three sections, brutal word limits. There are no standalone fields for earned secrets, competitors, market size, why now, or video pitch. All narrative depth lives in four 100-word fields + your pitch deck.

**Application writing process endorsed by a16z team:**
1. Write raw — all thoughts, unfiltered
2. Run through AI to compress and clarify
3. Rewrite in your own voice
4. Verify: sounds like a strategy memo, not a pitch?

---

## Section 1: Team

### Full-time or part-time?
Radio: Full-time / Part-time. If part-time, you're at a disadvantage — acknowledge it and explain the transition plan.

### Number of Full-Time Founders
Radio: 0–5. "Founders are individuals with over 10% equity." If part-time or not yet incorporated, enter 0 and add co-founders in the founder block.

### Total FTE Employees
Number. Include founders. Part-time staff counted proportionally (2 × half-time = 1 FTE).

### Relevant experience (per founder)
**Limit: 100 words. Required.**

Prompt: "In a few sentences, highlight your most relevant professional, startup, or industry experience. Focus on track record, domain expertise, and past wins."

This is your only bio field. 100 words = 3–5 sentences. Every word must pull weight.

**What to include:**
- Specific outputs: "shipped X to Y users", "sold $Z in contracts", "built and exited to [acquirer]"
- Domain tenure with proof: "7 years in [domain], including [specific role/output]"
- Technical proof if applicable: GitHub, OSS project with stars, systems you built at scale

**What to cut:**
- Employer logos without outputs ("ex-Google, ex-McKinsey")
- Education credentials (there's a separate field for that)
- Anything vague ("10+ years of experience in the space")

**Apply the Dinner Party Jerk test (Andrew Chen):** Push until the bio feels uncomfortably self-promotional. That's approximately correct.

### Technical enough to build end-to-end?
Yes/No. If No, explain in Team Description how this gap is covered.

### LinkedIn URL (required), GitHub, X, Portfolio (optional)
LinkedIn required for all founders. GitHub highly recommended for technical founders — it's a credibility signal reviewers check.

### Tell us more about the team
**Limit: 100 words. Required.**

Prompt: "How does the team know each other? Is there anyone else on the team? Why is this the best team to win? Do you have any key advisors?"

**What to include:**
- How long you've worked together and what you shipped together
- Complementary split: who builds, who sells, how it's proven
- Prior co-founder relationship that survived adversity
- Named advisors with specific domain relevance (not "serial entrepreneur" — name what they've built)

**What to cut:**
- Generic praise ("incredible team")
- Advisor walls (list one, make them count)

---

## Section 2: Startup Details

### Startup Name
Text input. Name only.

### One-liner
**Limit: 10 WORDS. Required.**

Prompt: "What do you do and for whom? E.g. 'AI-powered therapist for Gen Z'"

Ten words. That's it. This is your first impression — make it concrete, not clever.

**SR006 pattern:** The most effective one-liners name: (1) what you do, (2) who for, and optionally (3) a traction signal if you have one.

**Examples:**
- "AI underwriting for commercial insurance brokers" (7 words, clear)
- "Automates commercial loan processing — $680K ARR, 5 weeks" (8 words, traction signal)
- "AI therapist for Gen Z — 41K waitlist" (8 words, traction signal)

**Forbidden:** Starting with "We", "Building", "A platform that", "Disrupting"

**Mistake:** Trying to be clever or poetic. Be obvious.

### Startup Description
**Limit: 100 words. Required.**

Prompt: "What problem are you solving? What are you building?"

This is your most important field. 100 words must carry: the specific problem, your solution, why it works now, your earned insight, and ideally a traction signal. There is no "why now" field, no "earned secret" field, no "competitors" field. Everything compresses here.

**Structure (Claim → Evidence → So-what):**
1. The problem, stated with specificity (not "companies struggle with X" — who, exactly, loses what, exactly)
2. What you built and how it works (mechanism, not features)
3. The non-obvious thing you know that makes this work (earned insight)
4. Traction or validation signal (numbers beat words)

**Apply SCQA (Fareed Mosavat's framework):**
Situation → Complication → Question → Answer, compressed to a paragraph.

**Mistake:** Describing the market instead of the problem. Using adjectives. Passive voice.

### Primary Category (required) / Secondary Category (optional)
- B2B / Enterprise Applications
- Consumer Applications
- Deep Tech
- Gaming / Entertainment Studio
- Infrastructure / Dev Tools
- Healthcare
- GovTech
- Crypto
- Other

Pick the most accurate primary. Secondary is optional — only add if genuinely dual-category.

### Build location, Founded date, Company Website
Logistics fields. Fill accurately.

### Anything else we should know?
**Limit: 100 words. Optional.**

Use this for: reapplication context ("Since our last application: [specific delta]"), unusual team structure explanations, or anything that doesn't fit elsewhere. Don't pad it — if you don't need it, leave it blank.

**Reapplication note:** 30% of SR005 cohort was previously rejected. If reapplying, use this field to state the delta explicitly: "Applied SR006. Since then: [specific changes — revenue, product, team]." Reapplication is expected and respected.

---

## Section 3: Additional Information

### Pitch Deck (PDF) — Optional but critical

This is the primary narrative vehicle. Everything the 100-word fields can't hold lives here.

**Deck structure (Josh Lu prefers 7 slides, max 15):**
1. Problem — specific, with a named customer or stat
2. User — who exactly, what they currently do instead
3. Solution — what you built, how it works
4. What's built — demo, screenshots, current state
5. Traction — numbers, timeline, growth rate
6. Market — bottom-up sizing, not top-down %
7. Team — output-based bios

**Avoid:** Advisor slides, Harvey Ball competitive matrices (feature checkbox tables), dense text slides, stock photos.

**Deck link must be publicly accessible.** Private links = reviewers skip it.

### Traction — Optional but high-signal

Check this section if you have any of these numbers. Leaving it empty when you have data is a missed opportunity.

**Structured revenue metrics:**
- ARR (USD) — annual recurring revenue from subscriptions/contracts, exclude one-time
- Avg. ACV (USD) — average annual contract value per customer
- Net Dollar Retention % — revenue retained after churn + expansion
- Monthly revenue growth rate %

**Structured usage metrics:**
- DAU / WAU / MAU — daily/weekly/monthly active users
- Monthly user growth rate %
- Bounded retention: D1, D7, D30 (% who return exactly at that interval)
- M1 retention (% who return exactly 1 month after signup)

**Traction notes (100 words):** Narrative context for the numbers. Explain velocity, quality of customers, or pre-revenue validation.

**SR006 revenue velocity benchmarks (use as calibration):**
- $4.5M cARR in 4 weeks (Straia)
- $710K cARR in 5 weeks (Bota)
- $680K ARR in 5 weeks (Bilrost)
- $800K ARR in 3 months (August)
- $210K ARR in 3 months (Concorda)
- $201K cARR in 3 months (Cascade)

If below these: don't skip the section. Frame around velocity, customer quality, and depth of conviction.

### Funding History — Fill if raised

Total raised, post-money valuation, last round date, burn rate, runway, investor list. Accurate numbers only.

### Active Fundraising Round — Fill if currently raising

Target amount, start date, any hard deadlines. Helps a16z understand if their check size fits.

### Referral — Fill if you have one

Name, email, LinkedIn of the referrer. A warm intro from a portfolio founder or a16z network contact is a meaningful signal.

### Where did you learn about speedrun? (Required)

Dropdown + freetext. Be specific — name the post, person, or event.

---

## Field completion checklist

Before submitting each text field, verify:
- [ ] Contains at least one specific number, name, or date
- [ ] No forbidden phrases (see `docs/a16z-speedrun-criteria.md`)
- [ ] Answers the question asked, not an easier version
- [ ] Could not have been written by someone without direct customer contact
- [ ] One-liner is exactly ≤10 words
- [ ] All text fields are ≤100 words (form enforces this)
- [ ] Pitch deck URL is publicly accessible (no sign-in required)
- [ ] Traction section filled with every number you have
