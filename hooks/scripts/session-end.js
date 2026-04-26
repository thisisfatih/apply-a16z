#!/usr/bin/env node
/**
 * session-end.js
 * Runs at Stop. Persists the CLAUDE_APPLICATION_STATE env var (JSON) to disk
 * so progress survives across sessions. Claude writes this env var during /apply.
 */

const fs = require("fs");
const path = require("path");
const os = require("os");

const PROGRESS_DIR = path.join(os.homedir(), ".apply-a16z");
const PROGRESS_FILE = path.join(PROGRESS_DIR, "progress.json");

if (!fs.existsSync(PROGRESS_DIR)) {
  fs.mkdirSync(PROGRESS_DIR, { recursive: true });
}

const state = process.env.CLAUDE_APPLICATION_STATE;
if (state) {
  try {
    const parsed = JSON.parse(state);
    parsed.savedAt = new Date().toISOString();
    fs.writeFileSync(PROGRESS_FILE, JSON.stringify(parsed, null, 2));
    process.stdout.write(`[apply-a16z] Application progress saved.\n`);
  } catch {
    process.stdout.write(`[apply-a16z] Warning: could not parse application state — progress not saved.\n`);
  }
} else {
  process.stdout.write(`[apply-a16z] No application state to save.\n`);
}
