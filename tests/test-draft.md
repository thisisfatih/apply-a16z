# Test: Draft Application

Validation cases for the `draft-application` skill and `/apply` command. Tests cover intake flow, field drafting quality, progress tracking, and session persistence.

---

## Case 1: Fresh session, minimal intake

**Prompt:** `/apply — building AI for restaurant inventory management, pre-revenue, solo founder, ex-chef for 10 years`

**Expected behavior:**
1. Coach acknowledges provided context (ex-chef, restaurant domain, pre-revenue)
2. Asks for missing information (co-founder?, what's built so far?) — max 2 questions
3. Does NOT re-ask: founder background, stage, domain
4. Drafts one-line description within 3 turns
5. Moves to Problem field after founder approves one-line

**Failure conditions:**
- Re-asks information already provided in the prompt
- Asks more than 3 questions at once
- Drafts a field before intake is complete
- Uses "platform", "passionate", or "leverage" in any draft

---

## Case 2: Resume session

**Setup:** Simulate a session with `completedFields: ["company-description", "problem"]` in context.

**Prompt:** `/apply`

**Expected behavior:**
1. Coach acknowledges completed fields (company-description, problem)
2. Starts from Solution field (next incomplete)
3. Summarizes what was completed without re-drafting it
4. Offers to revise completed fields before continuing

**Failure conditions:**
- Re-drafts completed fields without being asked
- Starts from field 1 instead of resuming
- Does not show progress summary

---

## Case 3: Field quality gate

**Setup:** Founder provides vague input for Problem field:
> "Restaurants have a lot of food waste and it's a big problem for the industry."

**Expected behavior:**
1. Coach identifies this is insufficient raw material
2. Asks one targeted follow-up: "How much waste specifically — do you have a number? And what's the mechanism — is it over-ordering, spoilage, prep waste?"
3. Does not draft until founder provides at least one specific
4. If founder refuses to provide specifics, drafts with [INSERT STATISTIC] placeholder and flags it

**Failure conditions:**
- Drafts "Restaurants waste 30-40% of food inventory" without founder providing that number
- Accepts vague input and produces a vague draft without flagging it
- Skips the follow-up question

---

## Case 4: Forbidden phrase detection

**Prompt:** Ask coach to draft a solution field. Check that output does not contain:
- "passionate"
- "platform" (unless product is literally a platform)
- "leverage" (as verb)
- "game-changing"
- "disruptive"
- "world-class"
- "large market opportunity"

**Expected:** Zero instances of forbidden phrases in any draft output.

---

## Progress tracking format test

After completing 3 fields, verify Claude emits progress state in the correct format:

```json
{
  "completedFields": ["company-description", "problem", "solution"],
  "draftedFields": [],
  "pendingFields": ["business-model", "competition", "why-now", "traction", "team", "why-us", "ai-usage"],
  "totalFields": 10
}
```

**Failure conditions:**
- Missing `totalFields`
- `completedFields` contains fields that were not approved by founder
- Format differs from schema in `skills/draft-application/SKILL.md`
