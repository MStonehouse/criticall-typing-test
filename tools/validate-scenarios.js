#!/usr/bin/env node
// Validates scenario JSON files against SPEC.md.
// Usage: node tools/validate-scenarios.js   (checks scenarios.js; spec in tools/SCENARIO_SPEC.md)
const fs = require('fs');
const path = require('path');

const KINDS = ['letter', 'email', 'memo', 'report', 'notice', 'article'];
const PEOPLE = ['p1', 'p2', 'p3'];
const ALLOWED = new Set([
  'city', 'city2', 'street', 'street2', 'org', 'company', 'company2',
  'date', 'date2', 'date3', 'time', 'time2', 'amount', 'amount2',
  'number', 'number2', 'bignumber', 'percent', 'km', 'ref', 'ref2',
  'phone', 'email', 'r_title', 'sender'
]);
for (const p of PEOPLE) {
  for (const s of ['', '_first', '_last', '_title', '_he', '_him', '_his']) ALLOWED.add(p + s);
}

const words = s => s.trim().split(/\s+/).filter(Boolean).length;

function checkText(label, text, errs, { min, max }) {
  if (typeof text !== 'string' || !text.trim()) { errs.push(`${label}: empty or not a string`); return; }
  const w = words(text);
  if (min && w < min) errs.push(`${label}: ${w} words (min ${min})`);
  if (max && w > max) errs.push(`${label}: ${w} words (max ${max})`);
  if (/[^\x20-\x7E]/.test(text)) {
    const bad = [...new Set(text.match(/[^\x20-\x7E]/g))].map(c => JSON.stringify(c)).join(' ');
    errs.push(`${label}: non-ASCII or control characters ${bad}`);
  }
  if (/\n/.test(text)) errs.push(`${label}: contains a line break`);
  const ph = text.match(/\{[^}]*\}/g) || [];
  for (const raw of ph) {
    const inner = raw.slice(1, -1);
    const key = inner.charAt(0).toLowerCase() + inner.slice(1);
    if (!ALLOWED.has(key)) errs.push(`${label}: unknown placeholder ${raw}`);
    if (inner !== key && !/^P[123]_(he|him|his)$/.test(inner)) errs.push(`${label}: only pronoun placeholders may be capitalised (${raw})`);
  }
  if (/[{}]/.test(text.replace(/\{[^{}]*\}/g, ''))) errs.push(`${label}: stray brace`);
  if (/\b(Dear|Sincerely|Regards|Yours truly)\b/.test(text)) errs.push(`${label}: salutation/sign-off words are added by the program`);
  return ph.length;
}

function validateObj(obj, seenIds) {
  const errs = [];
  if (Array.isArray(obj) || typeof obj !== 'object') return ['file must hold one JSON object'];
  if (!/^[a-h]\d\d-[a-z0-9-]+$/.test(obj.id || '')) errs.push('id must look like "c03-warranty-repair"');
  if (seenIds.has(obj.id)) errs.push(`duplicate id ${obj.id}`);
  seenIds.add(obj.id);
  if (!KINDS.includes(obj.kind)) errs.push(`kind must be one of ${KINDS.join(', ')}`);
  if (typeof obj.title !== 'string' || !obj.title) errs.push('title missing');
  for (const key of ['orgs', 'senderTitles', 'subjects']) {
    if (!Array.isArray(obj[key]) || obj[key].length < 2) errs.push(`${key} needs at least 2 entries`);
    else obj[key].forEach((t, i) => checkText(`${key}[${i}]`, t, errs, { max: 12 }));
  }
  if (!Array.isArray(obj.sections) || obj.sections.length !== 8) errs.push('sections must have exactly 8 entries');
  else {
    let phTotal = 0, varTotal = 0;
    obj.sections.forEach((sec, i) => {
      if (!Array.isArray(sec) || sec.length !== 2) { errs.push(`sections[${i}] must have exactly 2 variants`); return; }
      sec.forEach((v, j) => { phTotal += checkText(`sections[${i}][${j}]`, v, errs, { min: 50, max: 80 }) || 0; varTotal++; });
      if (sec[0] === sec[1]) errs.push(`sections[${i}] variants are identical`);
    });
    if (varTotal && phTotal / varTotal > 3) errs.push(`sections average ${(phTotal / varTotal).toFixed(1)} placeholders per variant (keep near 1.5, max 3)`);
  }
  if (!Array.isArray(obj.details) || obj.details.length !== 8) errs.push('details must have exactly 8 sentences');
  else obj.details.forEach((d, i) => {
    const n = checkText(`details[${i}]`, d, errs, { min: 18, max: 50 }) || 0;
    if (n < 3) errs.push(`details[${i}]: needs at least 3 placeholders (has ${n})`);
  });
  if (obj.kind !== 'letter' && obj.kind !== 'email') {
    const all = JSON.stringify(obj.sections || []) + JSON.stringify(obj.details || []);
    if (all.includes('{r_title}')) errs.push('{r_title} is only for letter/email kinds');
  }
  return errs;
}

const scenarios = require(path.join(__dirname, '..', 'scenarios.js'));
const seen = new Set();
let bad = 0;
scenarios.forEach((obj, i) => {
  const errs = validateObj(obj, seen);
  if (errs.length) { bad++; console.log(`\n#${i} ${obj && obj.id}`); errs.forEach(e => console.log('  - ' + e)); }
});
if (bad) { console.log(`\nFAIL: ${bad} of ${scenarios.length} scenarios have problems.`); process.exit(1); }
console.log(`OK: ${scenarios.length} scenarios valid.`);
