# Sample Application — Dispatch AI

> Fictional company. Illustrates a strong a16z speedrun application.
> Annotations in `[▸ WHY THIS WORKS]` blocks — strip before submitting your own.
> Overall score: 92/100.

---

## Company name
Dispatch AI

---

## One-line description
Dispatch AI helps mid-market logistics companies replace manual freight auditing — cutting invoice errors by 60% in 30 days.

[▸ WHY THIS WORKS]
Specific user (mid-market logistics), specific outcome (60%), specific timeline (30 days).
No adjectives. No buzzwords. Passes the "could this be said about 50 other companies?" test — no.
SR006 pattern: would be even stronger with ARR embedded ("$22K ARR in 8 weeks").

---

## What does your company do?
Logistics companies overpay freight invoices by 3-8% annually due to manual auditing — a 2-person job that scales linearly with shipment volume. Dispatch AI automatically reconciles carrier invoices against rate cards and shipment records, flags discrepancies, and disputes them with carriers on behalf of shippers. First customer: Werner Transport (1,200 shipments/month), recovered $140K in overcharges in Q1. We process invoices faster than a human auditor reviews a single page.

[▸ WHY THIS WORKS]
SCQA structure: Situation (overpay 3-8%) → Complication (scales linearly, no solution for mid-market) → Answer (Dispatch AI + mechanism). Named customer. Specific number. Vivid compression at the end. Total: 4 sentences. No filler.
Emily Bennett test: immediately clear what it does, who wants it, what's been built.

---

## What is the problem?
The logistics industry processes $900B in freight invoices annually, and an estimated 3-8% contain billing errors — overcharges the shipper never catches. Mid-market companies (50-500 trucks) can't afford dedicated freight audit teams, so they either overpay or hire third-party auditors who charge 25-30% of recovered amounts. We discovered this through a founder's prior role as VP Ops at a regional 3PL — we audited invoices manually for 4 years and saw exactly where the process breaks.

[▸ WHY THIS WORKS]
Last sentence is everything. "We discovered this through a founder's prior role" = earned access signal. Fareed Mosavat's test: "if you're an outsider, what we want to see is that you've done the work." This answers it. The founder didn't read about this — she lived it.

---

## What is your solution?
Dispatch AI ingests carrier invoices (EDI, PDF, email), parses rate card terms, and reconciles line items against actual shipment data. Discrepancies above threshold auto-generate dispute letters via carrier APIs. No human in the loop for standard audits. Shippers pay 10% of recovered overcharges — no recovery, no fee. Average ROI in pilot: 14x in first 90 days.

[▸ WHY THIS WORKS]
Mechanism is specific (EDI, PDF, email → parse → reconcile → dispute via carrier APIs). Business model embedded ("no recovery, no fee" = removes friction). ROI quantified with timeline. Not a feature list — a workflow.

---

## Business model
Success-fee on recovered overcharges: 10% of disputed amounts recovered. Average recovery per customer: $80-150K/yr. Targeting $6K-15K ARR per customer. At 100 customers: $750K ARR. Moving toward platform fee ($500/mo) + success-fee hybrid in Q3 as customers validate ROI.

[▸ WHY THIS WORKS]
Unit economics are explicit. Path to scale is bottom-up (100 customers × $7.5K = $750K), not top-down TAM. Transition plan to platform fee shows they understand the model evolution. Sam Shank test: "one sentence" — success-fee, 10%, $80-150K recovery per customer.

---

## Why now?
Three things converged in the past 18 months: (1) LLMs can now parse unstructured PDF invoices at >95% accuracy — previously impossible without expensive OCR + rules engines; (2) major carriers (FedEx, UPS, XPO) opened dispute APIs in 2024, enabling programmatic filing; (3) freight audit software incumbents (Cass, CT Logistics) are 20-year-old EDI systems with no AI layer — greenfield opportunity at the mid-market they never served.

[▸ WHY THIS WORKS]
Three concrete enabling factors. Each is falsifiable and specific. Named carriers. Named incumbents. Named the technical threshold (>95% accuracy). This is the opposite of "AI is transforming every industry." Passes the "why not 3 years ago?" test — carrier APIs weren't open, LLM accuracy wasn't there.

---

## Traction
- 3 paying customers, $22K ARR
- Werner Transport: $140K recovered in Q1 (pilot, converting to paid)
- 0 churn, all three expanded scope after month 1
- $180K in disputes filed, $95K recovered (53% recovery rate, improving weekly)
- Week-over-week dispute accuracy improving 4% as models fine-tune on customer data

[▸ WHY THIS WORKS]
Every metric has a denominator or context. "0 churn" and "all three expanded" = quality validation, not just quantity. Named customer. The accuracy improvement line is the moat explanation. Josh Lu's hierarchy: this hits #1 (recurring revenue) + #2 (named customers).

---

## Who are your competitors and how are you different?
Cass Information Systems and CT Logistics serve enterprises at $500K+/yr contracts — we serve mid-market at 1/10th the price with a no-upfront-cost model. Flexport Audit offers AI-assisted auditing but only for Flexport-brokered shipments. Manual freight audit firms (25-30% fee) are our most common displacement — converting one per month.

[▸ WHY THIS WORKS]
Named competitors. Specific price points. Structural reason for the gap (enterprise-only contracts, captive to Flexport). "Converting one per month" = real displacement proof, not theoretical positioning. Josh Lu test: founder is "maniacal about understanding competition and why they'll fail." This shows it.

---

## Why are you the right team?
Sarah Chen (CEO): 6 years VP Ops at Atlas 3PL — personally audited 50,000+ freight invoices, knows every carrier billing scheme. James Park (CTO): built freight EDI integration systems at project44 for 4 years; shipped integrations with 40 carriers. We have the domain depth to know what the models get wrong, and the engineering depth to fix it.

[▸ WHY THIS WORKS]
Biographical not credential. "Personally audited 50,000+ invoices" is not a job title — it's output. "Shipped integrations with 40 carriers" is specific. Last sentence is the earned-access statement. Andrew Chen's "Dinner Party Jerk" test: uncomfortable level of specificity — that's correct. Emily Bennett: "if there are 50 teams trying to tackle this, you are the one that's going to unlock it" — this answers it.

---

## What do you want from a16z beyond capital?
Introductions to CFOs at mid-market logistics companies (50-500 trucks) for pilot conversations. Specifically interested in a16z's portfolio companies with logistics exposure. Would value introductions to Flexport and project44 for potential distribution partnerships.

[▸ WHY THIS WORKS]
Specific. Not "mentorship and guidance." Named targets (Flexport, project44). Shows they've researched the a16z portfolio. Sam Shank: "make sure you don't bury the lead" — leads with the most urgent ask (pilot intros).

---

## How are you using AI?
Claude claude-sonnet-4-6 for invoice parsing and dispute letter generation. Fine-tuned on 50,000 historical invoices from pilot customers — accuracy 94% and improving. GPT-4o for rate card term extraction (lower latency, good enough for structured data). AI reduces audit time from 4 hours/invoice to 8 seconds. The accuracy improvement curve is the moat — every invoice processed trains the model on new carrier billing patterns.

[▸ WHY THIS WORKS]
Specific models named. Accuracy number. Improvement direction. The moat explanation is the most important sentence: proprietary data flywheel from every invoice processed. This is not "we use AI to improve efficiency."

---

## Score

| Field | Score | Signal |
|---|---|---|
| One-liner | 5/5 | Specific, measurable, no adjectives |
| What you do | 5/5 | SCQA, named customer, mechanism, 4 sentences |
| Problem | 5/5 | Founder-lived, earned access explicit |
| Solution | 4/5 | Mechanism clear; could name one more structural differentiator |
| Business model | 4/5 | Unit economics clear, scale path bottom-up |
| Why now | 5/5 | Three named enabling factors, falsifiable |
| Traction | 5/5 | Revenue + named customer + 0 churn + moat signal |
| Competition | 4/5 | Named, priced, structural gap; could add "why they can't fix it" |
| Team | 5/5 | Biographical, specific outputs, domain + technical pair |
| AI usage | 5/5 | Model + accuracy + improvement + moat in 5 sentences |

**Overall: 92/100 — Submit now.**

Fields scoring 4/5 have targeted sharpening suggestions above.
