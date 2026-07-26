# a16z Speedrun Application Fields
# Last verified: 2026-07-26 via live form at speedrun.a16z.com/apply/form (DOM snapshot, all sections expanded,
# founder cleared the email+reCAPTCHA gate manually and handed control back for automation)
# SR007 closed May 17, 2026 (Summer/Fall cohort: July 27–Oct 11, 2026, now in review).
# SR008 (late Jan–Apr 2027, SF) is the upcoming cohort — this snapshot is the live SR008-era form.
#
# BREAKING CHANGE vs prior cache (was dated 2026-04-26, SR007): limits are CHARACTER-based, shown in the
# UI as live "X / N" counters — not word-based. Every "100 words" / "10 WORDS" rule in older plugin docs
# undercounted or overcounted room relative to the real constraint. Numbers below are read directly off
# the counters, not estimated.

---

## Form structure

Single scrollable page, three anchored sections (#team, #startup-details, #additional-information).
reCAPTCHA on the email gate — must be solved manually before the form loads. Automation takes over after
CAPTCHA is cleared and the founder confirms the form is open.

---

## Section 1: Team

| Field | Type | Limit | Required |
|---|---|---|---|
| Full-time or part-time? | Radio | — | ✓ |
| Number of FT Founders | Radio (0–5) | — | ✓ |
| Total FTE Employees | Number | — | ✓ |

### Founder block (repeatable — starts with CEO, "add co-founder" button for additional)

| Field | Type | Limit | Required |
|---|---|---|---|
| First name | Text | — | ✓ |
| Last name | Text | — | ✓ |
| Email | Text | — | ✓ |
| Phone | Text | — | — |
| Relevant experience ("Founder experience") | Textarea | **1000 characters** | ✓ |
| Country | Dropdown | — | ✓ |
| City | Text | — | ✓ |
| Citizenship | Dropdown | — | ✓ |
| College / University | Text | — | ✓ |
| Highest education | Dropdown | — | — (explicitly marked OPTIONAL) |
| Years of experience | Number | — | ✓ |
| Technical enough to build end-to-end? | Radio Yes/No | — | ✓ |
| LinkedIn URL | URL | — | ✓ |
| GitHub URL | URL | — | — |
| X (Twitter) URL | URL | — | — |
| Portfolio URL | URL | — | — |

**Relevant experience prompt:** "In a few sentences, highlight your most relevant professional, startup, or industry experience. Focus on track record, domain expertise, and past wins."

### Team description (shared field, not per-founder)

| Field | Type | Limit | Required |
|---|---|---|---|
| Tell us more about the team | Textarea | **1000 characters** | ✓ |

**Prompt:** "How does the team know each other? Is there anyone else on the team? Why is this the best team to win? Do you have any key advisors? Etc"

---

## Section 2: Startup Details

| Field | Type | Limit | Required |
|---|---|---|---|
| Startup Name | Text | — | ✓ |
| One-liner ("Pitch your startup in one sentence.") | Text | **100 characters** | ✓ |
| Startup Description | Textarea | **800 characters** | ✓ |
| Primary Category | Radio | — | ✓ |
| Secondary Category | Checkboxes | — | — |
| Build location (country + city) | Dropdown + Text | — | ✓ |
| Founded (year + month) | Dropdowns | — | ✓ |
| Company Website | URL | — | — |
| Anything else we should know? | Textarea | **1000 characters** | — |

**One-liner prompt:** "What do you do and for whom? E.g. 'AI-powered therapist for Gen Z'"
**Limit is 100 characters — not 10 words.** 100 chars is roughly 15–18 words depending on word length; count characters, not words, when drafting.

**Startup Description prompt:** "What problem are you solving? What are you building?"
**This 800-character field must carry: problem + solution + earned insight + why now + traction signal.** ~800 chars is roughly 120–140 words — looser than the old 100-word assumption, but still tight.

**Primary categories (unchanged):**
- B2B / Enterprise Applications
- Consumer Applications
- Deep Tech
- Gaming / Entertainment Studio
- Infrastructure / Dev Tools
- Healthcare
- GovTech
- Crypto
- Other

---

## Section 3: Additional Information (all optional, collapsed by default — click to expand)

### Pitch Deck (PDF)
File upload. Optional but critical — this is the primary vehicle for earned secrets, competitive analysis, market insight, why now, financials. Everything the text fields can't hold.

### Traction (check to expand)

| Field | Type | Limit | Required if section open |
|---|---|---|---|
| Product Launch Date (year + month) | Dropdowns | — | ✓ |
| Traction notes ("Any general commentary on your traction?") | Textarea | **1000 characters** | — (optional even with section open) |

Only Product Launch Date is required once you check "Traction" — the notes field and both metrics toggles below are optional add-ons.

**Share Revenue toggle** — structured numeric inputs:
- Annual Recurring Revenue (USD) — "total predictable revenue per year from subscriptions or contracts, exclude one-time fees"
- Avg. Annual Contract Value (USD) — "average yearly revenue per customer"
- Net Dollar Retention % — "revenue retained from existing customers after churn and expansion"
- Monthly growth rate % — month-over-month revenue growth

**Share Usage Metrics toggle** — structured numeric inputs:
- Daily Active Users
- Weekly Active Users
- Monthly Active Users
- Monthly growth rate % (users)
- D1 retention % — "% of users who return exactly 1 day after signup"
- D7 retention % — "% of users who return exactly 7 days after signup"
- D30 retention % — "% of users who return exactly 30 days after signup"
- M1 retention % — "% of users who return exactly 1 month after signup"

### Funding History (check to expand)

| Field | Type |
|---|---|
| Total Funding Raised (USD) | Number |
| Post-Money Valuation (USD) | Number |
| Last round date | Date * |
| Monthly Burn Rate (USD) | Number |
| Runway (months) | Number |
| Investors (repeatable): name/firm *, email *, amount raised | Text + Number |

### Active Fundraising Round (check to expand)

| Field | Type |
|---|---|
| Target amount (USD) | Number * |
| Start date | Date * |
| Fundraising deadlines (optional) | Text |

### Referral (check to expand)

| Field | Type |
|---|---|
| Referrer name | Text * |
| Referrer email | Text * |
| Referrer LinkedIn URL | URL * |

### Discovery (required, always visible)

| Field | Type |
|---|---|
| Where did you learn about speedrun? | Dropdown * |
| Additional info (name, handle, post, event) | Text |

---

## Fields that do NOT exist as standalone inputs

Commonly assumed to exist — they don't:
- Earned secret / market insight field
- Why now field
- Competitors / differentiation field
- Market size / TAM field
- Business model field
- Revenue model field
- Video pitch / Loom link field
- "What have you built" field (separate from Startup Description)
- Traction narrative field (only structured numbers + a 1000-character notes field)

**All narrative depth compresses into:**
1. **One-liner** — 100 characters. The only "hook" the form gives you.
2. **Startup Description** — 800 characters. Problem + solution + insight + timing + traction signal.
3. **Relevant Experience** — 1000 characters per founder. Output-based bio, domain proof, past wins.
4. **Team Description** — 1000 characters. Relationship depth, why this team wins.
5. **Pitch deck PDF** — unbounded. Where all the narrative lives: earned secrets, market, competition, why now, financial projections.
6. **Traction notes** — 1000 characters, optional. Context for the numbers.

---

## Form-filler automation notes (for form-filler agent)

- reCAPTCHA on page 1 (email gate) — stop and ask founder to complete manually
- After CAPTCHA: navigate to /apply/form, automation proceeds
- Traction section: click "Traction" label to expand, then toggle "Share Revenue" and/or "Share Usage Metrics" labels
- Co-founders: click "add co-founder" button to append additional founder blocks
- All Additional Information sections collapsed by default — click label to expand before filling
- **Character** count limits enforced by form (displayed live as "X / N", e.g. "0/800") — stay under. Do not count words.
- One-liner enforced at 100 characters — draft must count characters, not words, before filling
