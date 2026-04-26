---
name: Export Application
description: Packages approved a16z speedrun application answers into submission-ready formats. Invoked after eval-answers confirms all fields pass threshold. Produces a Markdown review copy, a fill-ready plain-text file with field-by-field copy-paste blocks, and optionally a JSON record for version tracking.
version: 1.0.0
---

# Export Application

Produce the final export after all answers are approved and scored >= 6.0.

---

## Output 1 — Review Copy (`a16z-application-draft.md`)

Structure:
```markdown
# a16z Speedrun Application — [Company Name]
Generated: [date]
Eval score: [average score across all fields]

---

## [Field name]
**Character limit:** [limit if known]
**Score:** [X.X/10]

[Answer text]

---

[repeat for each field]
```

Save to: `./a16z-application-[company-slug]-[YYYY-MM-DD].md`

---

## Output 2 — Copy-Paste Sheet (`a16z-copypaste.txt`)

Plain text, no markdown. Each field block:
```
=== [FIELD NAME] ===
[Answer text — plain text only, no special chars that could break form inputs]

[blank line between fields]
```

Save to: `./a16z-copypaste-[company-slug]-[YYYY-MM-DD].txt`

---

## Output 3 — Version Record (`a16z-application.json`)

For tracking across application iterations:
```json
{
  "company": "[name]",
  "generated": "[ISO date]",
  "version": 1,
  "eval_average": [score],
  "fields": [
    {
      "field": "[field name]",
      "answer": "[answer text]",
      "score": [score],
      "char_count": [count]
    }
  ]
}
```

Save to: `./a16z-application-[company-slug].json` (overwrite on re-export, bump version integer).

---

## Post-export checklist

Display after export:

```
EXPORT COMPLETE

Files written:
  a16z-application-[slug]-[date].md     (review copy)
  a16z-copypaste-[slug]-[date].txt      (paste into form)
  a16z-application-[slug].json          (version record)

BEFORE YOU SUBMIT:
  [ ] Read every answer out loud. Fix anything that sounds like marketing copy.
  [ ] Verify every number is accurate. Do not submit estimates as facts.
  [ ] Check character limits on each field against the live form.
  [ ] Have one other person read the "why you" and "what's your insight" fields.
  [ ] Record your video pitch AFTER reading the script 3+ times. Cut anything that sounds rehearsed.

a16z reviews on a rolling basis. Submit now — do not wait for the "perfect" version.
```
