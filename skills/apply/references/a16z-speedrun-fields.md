# a16z Speedrun Application Fields
# Source: a16z speedrun Substack (official), partner verbatim quotes, accepted founder accounts
# Last verified: 2026-04-26 (intensive research pass — see docs/field-guide.md for full sourcing)
# Status: BUNDLED CACHE — founder should confirm against live form at speedrun.a16z.com/apply
#
# CONFIRMED fields: verified from official a16z sources or multiple accepted founder accounts
# PROBABLE fields: mentioned by multiple sources but exact wording unverified
# No character limits are officially confirmed — treat all as soft limits

---

## Section: Company

- id: company_name
  name: Company Name
  type: short_text
  char_limit: 100
  required: true
  source: bundled
  notes: Legal name or operating name. No taglines.

- id: company_url
  name: Company Website / URL
  type: url
  char_limit: null
  required: false
  source: bundled
  notes: Demo link, repo, or landing page also accepted. If none, leave blank.

- id: one_liner
  name: One-Liner Description
  type: short_text
  char_limit: 150
  required: true
  source: bundled
  notes: "What does your company do?" in one sentence. a16z wants a verb + who + what outcome. Avoid "platform", "solution", "space".
    SR006 data: 32% of accepted companies embedded ARR directly in the one-liner.
    Pattern: "[Company] [does X for who] — $[ARR] in [timeframe]."
    Partners read this field immediately after email — it drives the first pass/continue decision.

- id: company_description
  name: What are you building and why?
  type: long_text
  char_limit: 1500
  required: true
  source: bundled
  notes: Core field. Reviewers read this first after the one-liner. Must contain earned secret + zero-to-one proof.

- id: stage
  name: Current Stage
  type: multiple_choice
  options: [Idea, Prototype, Beta, Revenue, Growth]
  required: true
  source: bundled
  notes: Be accurate. Reviewers will ask about this in the video call.

- id: incorporation_status
  name: Are you incorporated?
  type: multiple_choice
  options: [Yes, No, In progress]
  required: true
  source: bundled

---

## Section: Traction

- id: traction
  name: What traction do you have?
  type: long_text
  char_limit: 1000
  required: true
  source: bundled
  notes: Numbers required. Users, revenue, growth rate, pilots, LOIs. If zero: explain the strongest leading indicator you have.
    Josh Lu verbatim: "Traction is number one, two, and three. And then it's team. Then it's TAM."
    Traction hierarchy (best → worst): long-term recurring revenue > short contracts > design partnerships > strong user validation > viral waitlists > advisor names.
    SR006 velocity benchmarks: $4.5M cARR in 4 weeks (Straia), $680K ARR in 5 weeks (Bilrost), $210K ARR in 3 months (Concorda).
    Include timeline: "X in Y weeks" is more powerful than just "X total."
    Do NOT include: contact-book hacks, undeleted browser extensions, downloads from gimmicks.

- id: revenue
  name: Current Monthly Revenue (MRR)
  type: short_text
  char_limit: 100
  required: true
  source: bundled
  notes: Exact number. $0 is fine — do not estimate or project.

- id: user_count
  name: Number of Users / Customers
  type: short_text
  char_limit: 100
  required: true
  source: bundled
  notes: Distinguish paying vs. free vs. pilot.

---

## Section: Team

- id: founders
  name: Founder(s) — Name, Role, Background
  type: long_text
  char_limit: 1000
  required: true
  source: bundled
  notes: Most important team field. Each founder: name, role, the specific prior zero-to-one thing they did, and why that qualifies them for this. No resume prose.

- id: team_size
  name: Full Team Size (including founders)
  type: short_text
  char_limit: 50
  required: true
  source: bundled

- id: hiring_plan
  name: Who is your next hire and why?
  type: long_text
  char_limit: 500
  required: false
  source: bundled
  notes: Shows self-awareness about the team gap. Be specific about role, why now, and what you're looking for.

---

## Section: Market & Insight

- id: market_insight
  name: What insight do you have that others don't?
  type: long_text
  char_limit: 1000
  required: true
  source: bundled
  notes: THE MOST IMPORTANT FIELD after company description. This is where earned secrets live. Generic answers kill applications. Must be specific, falsifiable, and non-obvious.

- id: market_size
  name: Market Size
  type: long_text
  char_limit: 500
  required: true
  source: bundled
  notes: Don't just cite TAM. Explain the bottom-up logic: who is the buyer, how many of them, what do they pay today, what will they pay you.

- id: competitors
  name: Who are your main competitors and why will you win?
  type: long_text
  char_limit: 750
  required: true
  source: bundled
  notes: Name them. Explain the structural reason you have an advantage — not "we're faster" but why you can be faster that they can't replicate.

---

## Section: Execution

- id: what_have_you_built
  name: What have you built so far?
  type: long_text
  char_limit: 1000
  required: true
  source: bundled
  notes: Specific features, shipped dates, user reactions. Not vision, not roadmap — what exists today.

- id: velocity_proof
  name: What is an example of moving fast?
  type: long_text
  char_limit: 750
  required: true
  source: bundled
  notes: The story a16z reads to answer: "will these founders execute?" Give a specific timeline. Name what you skipped or compressed.

---

## Section: Fundraising

- id: raise_amount
  name: How much are you raising?
  type: short_text
  char_limit: 100
  required: true
  source: bundled
  notes: a16z speedrun invests up to $1M. Be specific.

- id: use_of_funds
  name: What will you do with the funding?
  type: long_text
  char_limit: 500
  required: true
  source: bundled
  notes: Specific: hire X, build Y, achieve Z milestone in N months. Not "product development and marketing."

- id: previous_funding
  name: Have you raised any funding?
  type: long_text
  char_limit: 300
  required: true
  source: bundled

---

## Section: Video Pitch

- id: video_pitch
  name: Video Pitch Link (2–3 minutes)
  type: url
  char_limit: null
  required: true
  source: bundled
  notes: Reviewers watch this. Not a polished production — authenticity over production value. Key: confident delivery, specific claims, no reading from notes. Script using the pitch-narrative skill output.

---

---

## Section: Links & Profiles

- id: linkedin_urls
  name: Founder LinkedIn URL(s)
  type: url
  char_limit: null
  required: true
  source: bundled
  notes: CONFIRMED field. Explicitly reviewed by partners. Missing LinkedIn = red flag.
    Update LinkedIn before applying. Partners use it as primary research tool on team.

- id: deck_link
  name: Pitch Deck Link
  type: url
  char_limit: null
  required: false
  source: bundled
  notes: Andrew Lee verbatim: "I don't know if I've scheduled any interviews where I didn't click the deck link."
    Must be PUBLIC — private links with access requests = reviewers skip it.
    Format: PDF preferred. 7–15 slides (Josh Lu prefers 7). Large font.
    Structure: Problem → User → Solution → Built → Traction → Market → Team → Vision.
    No advisor slides. No Harvey Ball competitive matrices.

- id: demo_link
  name: Product Demo / Video Link
  type: url
  char_limit: null
  required: false
  source: bundled
  notes: Working product preferred. Loom walkthrough acceptable. Keep short.
    Show the problem before the solution in any demo video.

---

## FOUNDER-CONFIRMED FIELDS
# (empty until founder updates via /apply field sync)
