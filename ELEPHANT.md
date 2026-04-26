---
> Team memory managed by [🐘 elephant](https://github.com/tonone-ai/elephant) — commit this file with your changes. Shared across sessions, repos, and teammates.
---

# ELEPHANT — apply-a16z project memory (newest first)

2026-04-26 22:12 : chore: bump version 0.1.0 → 0.9.1 — README badge + plugin.json updated together — @fatih
2026-04-26 22:12 : feat: pre-commit hook enforces README badge version == plugin.json version — blocks commit on mismatch — @fatih
2026-04-26 22:12 : rule: CLAUDE.md now documents version bump procedure (update both files in same commit) — @fatih
2026-04-26 21:41 : chore: add .reports/ to .gitignore — public repo, internal apex reports should not leak — @fatih
2026-04-26 21:40 : fix: hooks/hooks.json schema — wrapped event types under top-level "hooks" key; plugin was failing to load — @fatih
[!!] 2026-04-26 21:32 : apex takeover complete — 7 specialists, HTML report at .reports/apex-takeover-2026-04-26-0000.html — @fatih
[2026-04-26 21:32] CRITICAL: founder data plaintext at ~/.apply-a16z/progress.json, dir 755 (world-readable) — fix: mkdirSync mode 0o700
[2026-04-26 21:32] CRITICAL: skills/apply/SKILL.md:409–411 references missing docs (a16z-speedrun-fields.md, answer-examples.md) — dead paths, Stage 2 silently broken
[2026-04-26 21:32] HIGH: session-start.js JSON.parse no try-catch (crash on corrupt progress.json); session-end.js CLAUDE_APPLICATION_STATE unguarded (silent data loss)
[2026-04-26 21:32] prompt engineering 8.5/10 — rubric calibrated, sample scores 92/100, anti-hallucination guards solid — don't touch eval-answers rubric or vc-critic persona

[2026-04-26] a16z "Big Ideas" = their RFS equivalent. Published annually (parts 1-3 on a16z.com + speedrun.substack.com). Individual partners also post specific RFS threads (e.g. Jonathan Lai: "GUIs for Agents" — visual abstraction layer for agents).
[2026-04-26] SR006 (Winter/Spring 2026) currently active. SR007 apps close May 17 2026, cohort runs Jul 27–Oct 11 2026.

[2026-04-26] fix: created .claude-plugin/marketplace.json — without it `claude plugin marketplace add thisisfatih/apply-a16z` fails; now validated + pushed, install steps in README work.
[2026-04-26] Health check run. All tests pass, hooks lint clean, CI green. Ready to share publicly.
[2026-04-26] Two pre-ship fixups: (1) CLAUDE.md skill map stale — lists draft-application/research-founder/score-application which don't exist; (2) linkcheck exits 0 on dead links — CI false-green. Neither blocks users.
[2026-04-26] Intensive research complete. 4 parallel agents found: 250+ portfolio companies (SR001-SR006), verbatim partner quotes, confirmed application fields, acceptance rate <0.4% (19K apps / 60 spots in SR006). All saved to docs/.
[2026-04-26] Project structure built: skills/, agents/, hooks/, docs/, commands/, tests/, CI. All green. Conflict to resolve: Atlas's 4 lighter skills overlap Cortex's 5 primary ones — recommend deleting draft-application, research-founder, score-application.
[2026-04-26] User chose L (flagship). gstack already installed at ~/.claude/skills/gstack.
[2026-04-26] Building open-source Claude Code plugin for founders to apply to a16z speedrun. Skills + agents + hooks.
2026-04-26 14:48 : repo has no git history — /elephant takeover can't seed commits — @f
2026-04-26 14:58 : readme footer added — content unchanged — @f
[!!] 2026-04-26 15:12 : release 0.1.0 — 9 features, initial launch — @f
2026-04-26 15:34 : feat: initial release v0.1.0 — @fatih
2026-04-26 16:11 : feat: rewrite field map + drafting logic from live form DOM snapshot — @fatih
2026-04-26 16:14 : chore: gitignore playwright-mcp snapshots and backup files — @fatih
2026-04-26 18:22 : chore: add shields.io badges to README (version 0.1.0, MIT, Claude Code) — @fatih
2026-04-26 16:29 : fix: correct CLAUDE.md skill map and linkcheck reliability — @fatih
2026-04-26 20:29 : feat: add writing density rules + a16z RFS alignment check — @fatih
