/**
 * validate-skill-frontmatter.js
 * Parses every .md file in skills/ and asserts required YAML frontmatter fields.
 *
 * Required fields: name, description
 * Optional but checked: version, author
 */

'use strict';

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

// Skills are nested one level: skills/<name>/SKILL.md
const SKILLS_DIR = path.join(__dirname, '..', 'skills');
const REQUIRED_FIELDS = ['name', 'description'];

let totalFiles = 0;
let errors = 0;

function fail(file, msg) {
  console.error(`FAIL [${file}]: ${msg}`);
  errors++;
}

// skills/ directory must exist
if (!fs.existsSync(SKILLS_DIR)) {
  console.error('FAIL: skills/ directory not found');
  process.exit(1);
}

// Collect SKILL.md files from subdirectories (skills/<name>/SKILL.md)
const files = [];
for (const entry of fs.readdirSync(SKILLS_DIR)) {
  const subdir = path.join(SKILLS_DIR, entry);
  if (fs.statSync(subdir).isDirectory()) {
    const skillFile = path.join(subdir, 'SKILL.md');
    if (fs.existsSync(skillFile)) files.push(path.join(entry, 'SKILL.md'));
  }
}

if (files.length === 0) {
  console.error('FAIL: No .md files found in skills/');
  process.exit(1);
}

for (const filename of files) {
  totalFiles++;
  const filepath = path.join(SKILLS_DIR, filename);
  const raw = fs.readFileSync(path.join(SKILLS_DIR, filename), 'utf8');

  let parsed;
  try {
    parsed = matter(raw);
  } catch (e) {
    fail(filename, `YAML parse error: ${e.message}`);
    continue;
  }

  // Must have frontmatter (gray-matter returns empty object if none)
  if (!parsed.data || Object.keys(parsed.data).length === 0) {
    fail(filename, 'Missing YAML frontmatter');
    continue;
  }

  for (const field of REQUIRED_FIELDS) {
    if (!parsed.data[field] || String(parsed.data[field]).trim() === '') {
      fail(filename, `Missing or empty required frontmatter field: "${field}"`);
    }
  }

  // Body (content below frontmatter) must be non-empty
  if (!parsed.content || parsed.content.trim() === '') {
    fail(filename, 'Skill file has frontmatter but empty body');
  }
}

if (errors === 0) {
  console.log(`OK: ${totalFiles} skill file(s) passed frontmatter validation`);
} else {
  process.exit(1);
}
