# CLAUDE.md — apply-a16z plugin repo

Instructions for Claude when working in this repository.

## What this repo is

A Claude Code plugin that helps founders write strong a16z speedrun applications. The plugin provides four commands (`/apply`, `/score`, `/sharpen`, `/research`), four agents, and nine skills.

## Architecture

```
commands/                   slash commands — thin entry points that invoke skills
  apply.md                  full pipeline orchestrator
  score.md                  standalone eval
  sharpen.md                single-field rewrite
  research.md               pre-apply earned-secrets sprint

agents/
  application-coach.md      guides founders, warm but precise
  vc-critic.md              adversarial reviewer, surfaces fatal flaws
  a16z-field-agent.md       maintains current application field list (community cache + founder paste)
  reviewer-agent.md         cold-reads the full application as a skeptical reviewer

skills/
  apply/                    MASTER ORCHESTRATOR — runs full 5-stage pipeline
  pitch-narrative/          story architecture + earned-secrets → narrative framing + video script
  earned-secrets/           Socratic interview → insight taxonomy → moat statement
  eval-answers/             5-dimension weighted scoring → export gate
  export-application/       3-format export (MD review, TXT copy-paste, JSON version record)
  draft-application/        v0.1 field-by-field drafting (invoked by apply orchestrator)
  research-founder/         v0.1 founder background surfacing (invoked by /research)
  score-application/        v0.1 rubric scoring (invoked by /score)
  sharpen-answers/          v0.1 single-field rewrite (invoked by /sharpen)

docs/                       runtime reference — skills read these during execution
  a16z-speedrun-criteria.md what reviewers look for
  field-guide.md            application fields with guidance
  scoring-rubric.md         per-field rubric

examples/                   calibration artifacts — gold-standard application (must score 85+)
tests/                      validation cases for scoring and drafting behavior
hooks/                      session persistence (start: load progress, stop: save progress)
```

## Skill invocation map

| Command | Primary skill | Supporting skills/agents |
|---------|--------------|--------------------------|
| /apply | apply | → a16z-field-agent → earned-secrets → draft-application → eval-answers → export-application |
| /research | research-founder | → earned-secrets |
| /score | eval-answers | → vc-critic (adversarial pass) |
| /sharpen | sharpen-answers | → pitch-narrative (for narrative fields) |

## When making changes

### Adding or editing a skill
1. Edit the `SKILL.md` in the relevant skill directory.
2. If you add a new rubric dimension, update `docs/scoring-rubric.md` and `docs/a16z-speedrun-criteria.md` to stay consistent.
3. Add a test case in `tests/` if the skill has scoreable behavior.
4. Do not add skills without a clear trigger condition in the frontmatter `description`.

### Adding or editing a command
1. Commands in `commands/` are thin — they name the skill to invoke and set the interface contract.
2. Logic belongs in skills, not commands. If a command is getting long, extract to a skill.
3. Frontmatter `description` is what users see in `/help` — make it accurate and concrete.

### Editing the docs (criteria, rubric, field guide)
These are runtime references — skills read them during execution. Edits here affect scoring and drafting behavior immediately.
- `docs/a16z-speedrun-criteria.md` — what a16z looks for. Update when a16z updates their program.
- `docs/scoring-rubric.md` — per-field rubric. Update when calibration tests show drift.
- `docs/field-guide.md` — application fields. Update when the a16z form changes.

### Editing the sample application
`examples/sample-application/application.md` is the gold-standard calibration artifact. Its score must remain 85+ on the rubric. Do not make it weaker to match a broken rubric — fix the rubric.

## Code style

- All prose: short sentences. No filler. No hedging.
- Skill instructions: imperative voice. "Do X" not "You should do X."
- Forbidden phrases in plugin output (mirror the list the plugin enforces in founder answers):
  - "passionate", "leverage" (as verb), "game-changing", "world-class", "synergy"
- Test cases: include expected score ranges, not just qualitative descriptions.

## Hooks

`hooks/scripts/session-start.js` and `session-end.js` are Node.js scripts with no npm dependencies. Keep them dependency-free. They read/write `~/.apply-a16z/progress.json`.

If you modify the progress JSON schema, update both hook scripts and the progress tracking format in `skills/draft-application/SKILL.md`.

## Do not

- Do not write documentation that describes what code does instead of why decisions were made.
- Do not add fields to the scoring rubric without adding a corresponding test case.
- Do not fabricate a16z program details. If criteria are unclear, say so and flag for human review.
- Do not change the sample application score below 85 without updating the test that validates it.
