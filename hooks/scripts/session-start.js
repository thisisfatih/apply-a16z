#!/usr/bin/env node
/**
 * session-start.js
 * Runs at SessionStart. Loads saved application progress from disk so Claude
 * can resume mid-draft without losing context between sessions.
 */

const fs = require("fs");
const path = require("path");
const os = require("os");

const PROGRESS_DIR = path.join(os.homedir(), ".apply-a16z");
const PROGRESS_FILE = path.join(PROGRESS_DIR, "progress.json");

if (!fs.existsSync(PROGRESS_DIR)) {
  fs.mkdirSync(PROGRESS_DIR, { recursive: true });
}

if (fs.existsSync(PROGRESS_FILE)) {
  const progress = JSON.parse(fs.readFileSync(PROGRESS_FILE, "utf8"));
  const lastSaved = new Date(progress.savedAt).toLocaleString();
  process.stdout.write(
    `[apply-a16z] Resumed application in progress (last saved: ${lastSaved}). ` +
    `Completed fields: ${progress.completedFields?.length ?? 0} / ${progress.totalFields ?? 20}. ` +
    `Run /apply to continue or /score to evaluate current draft.\n`
  );
} else {
  process.stdout.write(
    `[apply-a16z] No application in progress. Run /apply to start your a16z speedrun application.\n`
  );
}
