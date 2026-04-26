---
name: score
description: Score a draft or completed application against a16z speedrun criteria. Use this on answers the founder already wrote, imported drafts, or to re-score after edits. Returns a weighted score table and prioritized fix list.
---

Invoke the `eval-answers` skill.

Accept input as:
- Current session draft (if /apply was run earlier in this session)
- Pasted answers (founder pastes their existing draft)
- File path to a previously exported `a16z-application-*.md`

Run the full eval-answers scoring protocol:
- Five dimensions per field (specificity, velocity, earned secret, team proof, voice)
- Weighted composite score per field
- Summary table + detailed breakdown for any field < 7.5
- Revised draft for any field < 7.0

After scoring, display the export gate status:
- All fields >= 6.0: offer to run `/apply` export stage
- Any field < 6.0: block export, list required fixes

Offer to run `/sharpen` on the lowest-scoring field immediately.
