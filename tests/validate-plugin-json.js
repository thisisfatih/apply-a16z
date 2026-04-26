/**
 * validate-plugin-json.js
 * Asserts plugin.json exists, is valid JSON, and contains required fields.
 */

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
// Plugin manifest lives in .claude-plugin/ per Claude Code plugin spec
const PLUGIN_PATH = path.join(ROOT, '.claude-plugin', 'plugin.json');

// "skills" is optional — plugin may register skills via commands/ or agents/ dirs
const REQUIRED_FIELDS = ['name', 'version', 'description'];

let errors = 0;

function fail(msg) {
  console.error(`FAIL: ${msg}`);
  errors++;
}

// 1. File exists
if (!fs.existsSync(PLUGIN_PATH)) {
  fail('plugin.json not found');
  process.exit(1);
}

// 2. Valid JSON
let plugin;
try {
  plugin = JSON.parse(fs.readFileSync(PLUGIN_PATH, 'utf8'));
} catch (e) {
  fail(`plugin.json is not valid JSON: ${e.message}`);
  process.exit(1);
}

// 3. Required top-level fields
for (const field of REQUIRED_FIELDS) {
  if (plugin[field] === undefined) {
    fail(`plugin.json missing required field: "${field}"`);
  }
}

// 4. Version follows semver-ish (x.y.z)
if (plugin.version && !/^\d+\.\d+\.\d+/.test(plugin.version)) {
  fail(`plugin.json version "${plugin.version}" does not look like semver`);
}

// 5. If skills field present, must be non-empty array
if (plugin.skills !== undefined) {
  if (!Array.isArray(plugin.skills) || plugin.skills.length === 0) {
    fail('plugin.json "skills" must be a non-empty array when present');
  }
}

if (errors === 0) {
  console.log('OK: plugin.json is valid');
} else {
  process.exit(1);
}
