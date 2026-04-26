---
name: fill
description: Auto-fill the a16z speedrun application form in your browser using approved answers. Requires Playwright MCP and a completed /apply session. Never submits — founder clicks Submit after reviewing.
---

Invoke the `form-filler` agent to fill the live a16z speedrun application form.

## Requirements before running

This command requires:
1. **Playwright MCP installed** — `claude plugin install playwright@anthropic`
2. **Completed /apply session** — answers drafted and scored, founder approved
3. **Founder's email** — used to unlock the form gate

If /apply hasn't been run yet, redirect to `/apply` first.

## Pre-fill confirmation

Before opening the browser, confirm with the founder:

```
Ready to fill the form. Before I start:

  Email to use for the form gate: [ask if not known]

  Fields I'll fill automatically: [N fields]
  Fields to fill manually: [list any gaps]

  I will STOP before Submit. You review and submit yourself.

  Open the browser now? (yes / no)
```

Only proceed on explicit "yes".

## Execution

1. Invoke `form-filler` agent with:
   - Answer set from current session
   - Founder's email
   - Any field-specific overrides the founder mentioned

2. Monitor for:
   - Truncation warnings → surface to founder immediately
   - Unmapped fields → pause and ask founder
   - CAPTCHA → stop and export remaining answers
   - Any error → stop, report, offer copy-paste fallback

## After fill completes

Report summary and remind founder:
```
Form filled. Review everything in the browser.
When satisfied — click Submit yourself.

Backup saved to: ./application-backup.txt
```

## Fallback: manual copy-paste

If browser fill fails for any reason, output all answers formatted
for manual copy-paste. The fill should never leave a founder worse
off than before they ran it.
