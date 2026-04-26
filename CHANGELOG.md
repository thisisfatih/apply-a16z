# Changelog

All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](https://semver.org) and [Keep a Changelog](https://keepachangelog.com).

## [Unreleased]

## [0.1.0] - 2026-04-26

### Added

- Initial release of apply-a16z — a Claude Code plugin that guides founders through the a16z speedrun application process
- Four slash commands: `/apply` (full pipeline orchestrator), `/score` (standalone rubric evaluation), `/sharpen` (single-field rewrite with before/after), `/research` (earned-secrets sprint before drafting)
- Four agents: application-coach (warm field-by-field guide), vc-critic (adversarial reviewer surfaces fatal flaws), a16z-field-agent (maintains current application field list), reviewer-agent (cold-reads full application as skeptical reviewer)
- Nine skills covering intake, earned-secrets extraction, pitch narrative, drafting, evaluation, export, scoring, and field sharpening
- Session hooks for progress persistence to `~/.apply-a16z/progress.json` — resume sessions across Claude Code restarts
- Documentation in `docs/`: a16z speedrun criteria, per-field scoring rubric, and field guide with guidance per question
- Sample application in `examples/` — fictional company with annotated answers, scoring 92/100 against the rubric
- Weighted scoring rubric: team/why-us (25%), problem+solution (25%), traction (20%), business model (15%), why-now+competition (15%)
- Research-backed a16z criteria derived from 250+ portfolio companies across SR001–SR006, including verbatim partner quotes and confirmed acceptance rate (<0.4%)

---
> Changelog maintained automatically by [🐘 elephant](https://github.com/tonone-ai/elephant) — keep your changelog up to date without the manual work.
