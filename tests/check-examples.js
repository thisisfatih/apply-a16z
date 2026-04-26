/**
 * check-examples.js
 * Asserts examples/ directory exists, is non-empty, and each file has content.
 *
 * An empty example file is a broken example — catch it early.
 */

'use strict';

const fs = require('fs');
const path = require('path');

const EXAMPLES_DIR = path.join(__dirname, '..', 'examples');
const MIN_FILE_BYTES = 50; // anything under 50 bytes is suspiciously empty

let errors = 0;

function fail(msg) {
  console.error(`FAIL: ${msg}`);
  errors++;
}

// 1. Directory exists
if (!fs.existsSync(EXAMPLES_DIR)) {
  fail('examples/ directory not found — add at least one example output');
  process.exit(1);
}

// 2. Collect files recursively (examples may be in subdirectories)
function collectFiles(dir) {
  const result = [];
  for (const entry of fs.readdirSync(dir)) {
    const full = path.join(dir, entry);
    const stat = fs.statSync(full);
    if (stat.isFile()) result.push(full);
    else if (stat.isDirectory()) result.push(...collectFiles(full));
  }
  return result;
}
const allFiles = collectFiles(EXAMPLES_DIR);

if (allFiles.length === 0) {
  fail('examples/ directory is empty — add at least one example output file');
  process.exit(1);
}

// 3. Each file is non-trivially non-empty
for (const filepath of allFiles) {
  const rel = path.relative(EXAMPLES_DIR, filepath);
  const stat = fs.statSync(filepath);

  if (stat.size === 0) {
    fail(`examples/${rel} is empty (0 bytes)`);
  } else if (stat.size < MIN_FILE_BYTES) {
    fail(`examples/${rel} is suspiciously small (${stat.size} bytes) — looks like a placeholder`);
  }
}

if (errors === 0) {
  console.log(`OK: examples/ has ${allFiles.length} non-empty file(s)`);
} else {
  process.exit(1);
}
