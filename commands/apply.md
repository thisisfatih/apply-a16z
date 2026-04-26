---
name: apply
description: Start or resume your a16z speedrun application. Runs the full pipeline — founder intake, field sync, earned-secrets extraction, answer drafting, eval scoring, and export.
---

Invoke the `apply` skill to run the full a16z speedrun application pipeline.

If the user provides context with the command (e.g., "/apply we're building X and have Y traction"), capture it as initial intake data and skip redundant intake questions for information already provided.

Pipeline stages (do not skip):
1. Stage 0 — Orientation: explain the process
2. Stage 1 — Founder intake: five question blocks, one block at a time
3. Stage 2 — Field sync: load fields via `a16z-field-agent`, let founder confirm/update
4. Stage 3 — Earned secrets: invoke `earned-secrets` skill
5. Stage 4 — Answer generation: draft all fields using intake + earned secret
6. Stage 5 — Eval + export: invoke `eval-answers`, then `export-application`

Track progress across stages. If resuming a session, detect what intake data already exists in context and skip completed stages.
