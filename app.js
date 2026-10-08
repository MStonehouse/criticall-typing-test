// CritiCall typing practice.
//
// Two modes:
//   test   - five-minute transcription test, pass at 40 WPM AND 95% accuracy
//   header - untimed header practice; ends automatically when the header is typed
// Both use passages built by generator.js at the selected difficulty.

const TEST_SECONDS = 300;
const PASS_WPM = 40;
const PASS_ACCURACY = 95;

const $ = id => document.getElementById(id);
const sourceEl = $('sourceLetter');
const entryEl = $('entry');
const timerEl = $('timer');
const startBtn = $('start');
const newBtn = $('newLetter');
const statusEl = $('status');
const resultsEl = $('results');
const grossWpmEl = $('grossWpm');
const accuracyEl = $('accuracy');
const charsTypedEl = $('charsTyped');
const passFailEl = $('passFail');
const runLengthEl = $('runLength');
const correctCharsEl = $('correctChars');
const errorsEl = $('errors');
const marginEl = $('margin');
const resultNoteEl = $('resultNote');
const testModeBtn = $('testMode');
const headerModeBtn = $('headerMode');
const levelBtns = Array.from(document.querySelectorAll('.level-switch .level'));
const levelBadge = $('levelBadge');
const kindBadge = $('kindBadge');
const infoText = $('infoText');
const sourceHeader = $('sourceHeader');
const timerToggleBtn = $('timerToggle');
const appEl = $('app');
const copyResultsBtn = $('copyResults');
const reviewErrorsBtn = $('reviewErrors');
const errorReviewEl = $('errorReview');

function setAppState(state) {
  appEl.dataset.state = state;
}

// ---------- Saved preferences, history and recently seen scenarios ----------

const PREFS_KEY = 'criticall.prefs';
const HISTORY_KEY = 'criticall.history';
const RECENT_KEY = 'criticall.recentScenarios';
const HISTORY_LIMIT = 500;
// Scenarios seen recently are skipped so subjects don't come back too soon.
// There are 80 scenarios; skipping the last 50 keeps rotation varied.
const RECENT_LIMIT = Math.min(50, Math.max(0, (PassageGen.scenarioCount || 0) - 10));

function readJson(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function writeJson(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* storage unavailable */ }
}

function loadPrefs() {
  const p = readJson(PREFS_KEY, {}) || {};
  const validLevel = [1, 2, 3, 4, 'mixed'].includes(p.level) ? p.level : 1;
  return { level: validLevel, showTimer: p.showTimer !== false };
}

let prefs = loadPrefs();

function savePrefs() {
  writeJson(PREFS_KEY, prefs);
}

function loadHistory() {
  const list = readJson(HISTORY_KEY, []);
  return Array.isArray(list) ? list : [];
}

function addHistoryEntry(entry) {
  const list = loadHistory();
  list.push(entry);
  writeJson(HISTORY_KEY, list.slice(-HISTORY_LIMIT));
}

function recentScenarios() {
  const list = readJson(RECENT_KEY, []);
  return Array.isArray(list) ? list : [];
}

function rememberScenario(id) {
  if (!id) return;
  const list = recentScenarios().filter(x => x !== id);
  list.push(id);
  writeJson(RECENT_KEY, list.slice(-RECENT_LIMIT));
}

// ---------- Run state ----------

let mode = 'test';
let passage = null; // { text, level, levelName, kind, scenarioId, title }
let runSeconds = TEST_SECONDS;
let remaining = TEST_SECONDS;
let interval = null;
let running = false;
let startedAt = null;
let endReason = null;

const KIND_LABELS = {
  letter: 'Letter', email: 'Email', memo: 'Memo', report: 'Report',
  notice: 'Public Notice', article: 'Newsletter Article', record: 'Address Record'
};

function currentText() {
  return passage ? passage.text : '';
}

function normalizeForScoring(text) {
  return String(text || '').replace(/[ \t]+(?=\n)/g, '').replace(/[ \t]+$/g, '');
}

function formatTime(total) {
  const seconds = Math.max(0, Math.floor(total));
  return String(Math.floor(seconds / 60)).padStart(2, '0') + ':' + String(seconds % 60).padStart(2, '0');
}

function setControlsDisabled(disabled) {
  newBtn.disabled = disabled;
  testModeBtn.disabled = disabled;
  headerModeBtn.disabled = disabled;
  levelBtns.forEach(b => { b.disabled = disabled; });
}

// Keeps the source text in view by scrolling it in step with typing progress.
function syncSourceToTypingProgress() {
  if (!running) return;
  const source = currentText();
  const typed = normalizeForScoring(entryEl.value);
  if (!source.length) return;
  const progress = Math.max(0, Math.min(1, typed.length / source.length));
  const max = Math.max(0, sourceEl.scrollHeight - sourceEl.clientHeight);
  sourceEl.scrollTo({ top: max * progress - sourceEl.clientHeight * 0.18, behavior: 'smooth' });
}

// ---------- Timer display ----------

function renderTimerIdle() {
  if (mode === 'header') {
    timerEl.textContent = 'NO LIMIT';
    timerEl.classList.remove('hidden');
    return;
  }
  timerEl.textContent = formatTime(TEST_SECONDS);
  timerEl.classList.remove('hidden');
}

function renderTimerRunning() {
  if (mode === 'header') {
    timerEl.textContent = 'NO LIMIT';
    timerEl.classList.remove('hidden');
  } else if (prefs.showTimer) {
    timerEl.textContent = formatTime(remaining);
    timerEl.classList.remove('hidden');
  } else {
    timerEl.textContent = 'TIME HIDDEN';
    timerEl.classList.add('hidden');
  }
}

function renderTimerToggle() {
  timerToggleBtn.textContent = prefs.showTimer ? 'Timer: Shown' : 'Timer: Hidden';
  timerToggleBtn.setAttribute('aria-pressed', String(prefs.showTimer));
}

// ---------- Passage selection ----------

function renderLevelButtons() {
  levelBtns.forEach(b => {
    const v = b.dataset.level === 'mixed' ? 'mixed' : Number(b.dataset.level);
    b.classList.toggle('active', v === prefs.level);
    b.setAttribute('aria-pressed', String(v === prefs.level));
  });
}

function renderInfoStrip() {
  if (!passage) return;
  levelBadge.textContent = prefs.level === 'mixed' ? `Mixed · ${passage.levelName}` : passage.levelName;
  levelBadge.dataset.level = String(passage.level);
  kindBadge.textContent = KIND_LABELS[passage.kind] || 'Passage';
  infoText.textContent = mode === 'header'
    ? 'Untimed · ends automatically when the header is complete'
    : `Five minutes · pass at ${PASS_WPM} WPM and ${PASS_ACCURACY}% accuracy`;
}

function choosePassage() {
  if (running) return;
  const opts = { level: prefs.level, avoid: recentScenarios() };
  passage = mode === 'header' ? PassageGen.generateHeader(opts) : PassageGen.generate(opts);
  rememberScenario(passage.scenarioId);

  sourceEl.textContent = currentText();
  sourceEl.scrollTop = 0;
  entryEl.value = '';
  resultsEl.classList.remove('show');
  passFailEl.className = 'verdict-badge';
  errorReviewEl.hidden = true;
  setAppState('idle');
  runSeconds = mode === 'header' ? 0 : TEST_SECONDS;
  renderTimerIdle();
  renderInfoStrip();
  statusEl.textContent = mode === 'header'
    ? 'Choose Start when ready. Type the header exactly as shown.'
    : 'Choose Start when ready. You will have five minutes.';
}

// ---------- Scoring ----------

function levenshtein(a, b) {
  const n = a.length, m = b.length;
  if (!n) return m;
  if (!m) return n;
  let prev = new Uint32Array(m + 1), curr = new Uint32Array(m + 1);
  for (let j = 0; j <= m; j++) prev[j] = j;
  for (let i = 1; i <= n; i++) {
    curr[0] = i;
    const ca = a.charCodeAt(i - 1);
    for (let j = 1; j <= m; j++) {
      const cost = ca === b.charCodeAt(j - 1) ? 0 : 1;
      curr[j] = Math.min(curr[j - 1] + 1, prev[j] + 1, prev[j - 1] + cost);
    }
    [prev, curr] = [curr, prev];
  }
  return prev[m];
}

function calculateStats() {
  const typed = normalizeForScoring(entryEl.value);
  const source = normalizeForScoring(currentText());
  const expected = source.slice(0, Math.max(typed.length, 0));
  const distance = levenshtein(typed, expected);
  const correctLike = Math.max(0, typed.length - distance);
  const accuracy = typed.length ? Math.max(0, Math.min(100, (correctLike / typed.length) * 100)) : 0;
  // Actual elapsed time, not the nominal run length: this stays correct whether
  // the run finished naturally, hit its timer, or was stopped early by hand.
  const elapsedSeconds = Math.max(1, Math.min(
    mode === 'test' ? TEST_SECONDS : Infinity,
    (Date.now() - startedAt) / 1000
  ));
  const elapsedMinutes = elapsedSeconds / 60;
  const charsTyped = typed.replace(/\n/g, '').length;
  const grossWpm = (charsTyped / 5) / elapsedMinutes;
  return { typed, source, distance, correctLike, accuracy, elapsedSeconds, grossWpm };
}

function signed(n, digits = 1) {
  return (n >= 0 ? '+' : '') + n.toFixed(digits);
}

function showResults() {
  const stats = calculateStats();
  const speedOk = stats.grossWpm >= PASS_WPM;
  const accuracyOk = stats.accuracy >= PASS_ACCURACY;
  // A test only counts as a pass if it ran the full five minutes.
  const fullRun = mode === 'header' || endReason === 'time';
  const passed = speedOk && accuracyOk && fullRun;

  grossWpmEl.textContent = stats.grossWpm.toFixed(1);
  accuracyEl.textContent = stats.accuracy.toFixed(1) + '%';
  grossWpmEl.classList.toggle('below', !speedOk);
  accuracyEl.classList.toggle('below', !accuracyOk);
  charsTypedEl.textContent = entryEl.value.length;
  runLengthEl.textContent = formatTime(stats.elapsedSeconds);
  correctCharsEl.textContent = stats.correctLike;
  errorsEl.textContent = stats.distance;
  marginEl.textContent = `${signed(stats.grossWpm - PASS_WPM)} WPM · ${signed(stats.accuracy - PASS_ACCURACY)}% accuracy`;

  let verdict;
  if (passed) verdict = 'PASS';
  else if (!fullRun) verdict = 'INCOMPLETE';
  else verdict = 'NOT YET';
  passFailEl.textContent = verdict;
  passFailEl.className = 'verdict-badge ' + (passed ? 'pass' : 'fail');

  const misses = [];
  if (!speedOk) misses.push(`speed is ${(PASS_WPM - stats.grossWpm).toFixed(1)} WPM short of ${PASS_WPM}`);
  if (!accuracyOk) misses.push(`accuracy is ${(PASS_ACCURACY - stats.accuracy).toFixed(1)} points short of ${PASS_ACCURACY}%`);
  const levelLabel = `${passage.levelName} ${(KIND_LABELS[passage.kind] || 'passage').toLowerCase()}`;
  if (mode === 'header') {
    resultNoteEl.textContent = `Header practice (${passage.levelName}). ` +
      (misses.length ? `To pass: ${misses.join('; ')}.` : 'Both targets met.');
  } else if (!fullRun) {
    resultNoteEl.textContent = `Stopped at ${formatTime(stats.elapsedSeconds)}. A pass requires the full five minutes at ${PASS_WPM} WPM and ${PASS_ACCURACY}% accuracy. Scores above are for the time you typed.`;
  } else {
    resultNoteEl.textContent = `${levelLabel}: ` + (misses.length
      ? `not yet — ${misses.join('; ')}.`
      : `passed both targets (${PASS_WPM} WPM and ${PASS_ACCURACY}% accuracy).`);
  }

  resultsEl.classList.add('show');
  errorReviewEl.hidden = true;
  errorReviewEl.innerHTML = '';
  reviewErrorsBtn.textContent = 'Review errors';

  addHistoryEntry({
    ts: Date.now(),
    mode,
    level: passage.level,
    levelName: passage.levelName,
    kind: passage.kind,
    grossWpm: Number(stats.grossWpm.toFixed(1)),
    accuracy: Number(stats.accuracy.toFixed(1)),
    pass: passed,
    complete: fullRun,
    runLength: Number((stats.elapsedSeconds / 60).toFixed(2))
  });
}

// ---------- Run lifecycle ----------

function endTest(reason = 'time') {
  if (!running) return;
  clearHeaderIdleTimer();
  endReason = reason;
  running = false;
  if (interval) clearInterval(interval);
  interval = null;
  entryEl.disabled = true;
  setControlsDisabled(false);
  setAppState('complete');
  startBtn.textContent = 'Start';
  startBtn.classList.remove('stop');
  showResults();
  timerEl.classList.remove('hidden');
  if (mode === 'header') {
    timerEl.textContent = reason === 'manual' ? 'STOPPED' : 'COMPLETE';
    statusEl.textContent = reason === 'manual'
      ? 'Stopped early. Statistics are shown below.'
      : 'Header complete. Statistics are shown below.';
  } else if (reason === 'manual') {
    statusEl.textContent = 'Stopped early. Statistics are shown below.';
    timerEl.textContent = formatTime(remaining);
  } else {
    statusEl.textContent = 'Time expired. Test complete.';
    timerEl.textContent = formatTime(0);
  }
}

function startTest() {
  if (running || !currentText()) return;
  clearHeaderIdleTimer();
  running = true;
  endReason = null;
  startedAt = Date.now();
  remaining = runSeconds;
  entryEl.value = '';
  entryEl.disabled = false;
  entryEl.focus();
  sourceEl.scrollTop = 0;
  setControlsDisabled(true);
  setAppState('running');
  startBtn.textContent = 'Stop';
  startBtn.classList.add('stop');
  resultsEl.classList.remove('show');
  statusEl.textContent = mode === 'header' ? 'Type the header exactly as shown.' : 'Test in progress.';
  renderTimerRunning();
  if (mode === 'header') return;
  interval = setInterval(() => {
    const elapsed = Math.floor((Date.now() - startedAt) / 1000);
    remaining = Math.max(0, runSeconds - elapsed);
    renderTimerRunning();
    if (remaining <= 0) endTest('time');
  }, 250);
}

// ---------- Header practice auto-finish ----------

let headerIdleTimer = null;

function clearHeaderIdleTimer() {
  if (headerIdleTimer) {
    clearTimeout(headerIdleTimer);
    headerIdleTimer = null;
  }
}

function headerInputCheck() {
  if (!running || mode !== 'header') return;
  clearHeaderIdleTimer();
  const typed = normalizeForScoring(entryEl.value);
  const source = normalizeForScoring(currentText());
  if (!source.length) return;
  if (typed === source) { endTest('complete'); return; }

  // Tolerance for the fast path: a handful of typos in an otherwise
  // full-length entry ends the run immediately.
  const typoTolerance = Math.max(2, Math.round(source.length * 0.08));
  // Tolerance for treating a *short* entry as finished: only ever a character
  // or two, so normal mid-passage typing is never mistaken for "done".
  const undershootAllowance = Math.min(2, Math.max(1, Math.round(source.length * 0.02)));

  if (typed.length >= source.length) {
    const distance = levenshtein(typed, source);
    if (distance <= typoTolerance) { endTest('complete'); return; }
    // More mistakes than the fast path allows, but the full length has been
    // typed. Treat a short pause as "finished" instead of waiting forever.
    headerIdleTimer = setTimeout(() => {
      headerIdleTimer = null;
      if (running && mode === 'header' && normalizeForScoring(entryEl.value).length >= source.length) {
        endTest('complete');
      }
    }, 900);
    return;
  }

  if (typed.length >= source.length - undershootAllowance) {
    // Within a character or two of the end (likely a single skipped
    // character). Require a longer, unambiguous pause before ending, so this
    // never fires while typing is still genuinely in progress.
    headerIdleTimer = setTimeout(() => {
      headerIdleTimer = null;
      if (!running || mode !== 'header') return;
      const stillClose = normalizeForScoring(entryEl.value).length >= source.length - undershootAllowance;
      if (stillClose) endTest('complete');
    }, 1400);
  }
}

// ---------- Mode and difficulty ----------

function setMode(next) {
  if (running || mode === next) return;
  mode = next;
  testModeBtn.classList.toggle('active', mode === 'test');
  headerModeBtn.classList.toggle('active', mode === 'header');
  sourceHeader.textContent = mode === 'test' ? 'Source Passage' : 'Header';
  choosePassage();
}

function setLevel(next) {
  if (running) return;
  prefs.level = next;
  savePrefs();
  renderLevelButtons();
  choosePassage();
}

// ---------- Events ----------

entryEl.addEventListener('input', () => {
  syncSourceToTypingProgress();
  headerInputCheck();
});
entryEl.addEventListener('paste', e => e.preventDefault());
entryEl.addEventListener('drop', e => e.preventDefault());
entryEl.addEventListener('beforeinput', e => { if (!running) e.preventDefault(); });
startBtn.addEventListener('click', () => {
  if (running) {
    endTest('manual');
  } else {
    startTest();
  }
});
newBtn.addEventListener('click', choosePassage);
testModeBtn.addEventListener('click', () => setMode('test'));
headerModeBtn.addEventListener('click', () => setMode('header'));
levelBtns.forEach(b => b.addEventListener('click', () => {
  setLevel(b.dataset.level === 'mixed' ? 'mixed' : Number(b.dataset.level));
}));
timerToggleBtn.addEventListener('click', () => {
  prefs.showTimer = !prefs.showTimer;
  savePrefs();
  renderTimerToggle();
  if (running) renderTimerRunning();
});

copyResultsBtn.addEventListener('click', async () => {
  const summary = [
    `CritiCall Typing Practice — ${passFailEl.textContent}`,
    `Mode: ${mode === 'header' ? 'Header Practice' : '5-Minute Test'} (${passage ? passage.levelName : ''})`,
    `Gross WPM: ${grossWpmEl.textContent}`,
    `Accuracy: ${accuracyEl.textContent}`,
    `Characters Typed: ${charsTypedEl.textContent}`,
    `Run Length: ${runLengthEl.textContent}`,
    `Correct-like Chars: ${correctCharsEl.textContent}`,
    `Errors: ${errorsEl.textContent}`,
    `Against target: ${marginEl.textContent}`
  ].join('\n');
  const original = copyResultsBtn.textContent;
  try {
    await navigator.clipboard.writeText(summary);
    copyResultsBtn.textContent = 'Copied';
  } catch {
    copyResultsBtn.textContent = 'Copy failed';
  }
  setTimeout(() => { copyResultsBtn.textContent = original; }, 1600);
});

document.addEventListener('keydown', e => {
  if (e.key === 'Enter' && (e.metaKey || e.ctrlKey) && !startBtn.disabled) {
    e.preventDefault();
    if (running) {
      endTest('manual');
    } else {
      startTest();
    }
  }
});

// ---------- Error review (computed on demand, after a run ends) ----------

function diffAlign(typed, source) {
  const n = typed.length, m = source.length;
  const dp = new Uint16Array((n + 1) * (m + 1));
  const at = (i, j) => i * (m + 1) + j;
  for (let j = 0; j <= m; j++) dp[at(0, j)] = j;
  for (let i = 0; i <= n; i++) dp[at(i, 0)] = i;
  for (let i = 1; i <= n; i++) {
    const ca = typed.charCodeAt(i - 1);
    for (let j = 1; j <= m; j++) {
      const cost = ca === source.charCodeAt(j - 1) ? 0 : 1;
      const diag = dp[at(i - 1, j - 1)] + cost;
      const del = dp[at(i - 1, j)] + 1;
      const ins = dp[at(i, j - 1)] + 1;
      dp[at(i, j)] = Math.min(diag, del, ins);
    }
  }
  const ops = [];
  let i = n, j = m;
  while (i > 0 || j > 0) {
    const cur = dp[at(i, j)];
    if (i > 0 && j > 0 && typed[i - 1] === source[j - 1] && cur === dp[at(i - 1, j - 1)]) {
      ops.push({ type: 'match', ch: source[j - 1] }); i--; j--;
    } else if (i > 0 && j > 0 && cur === dp[at(i - 1, j - 1)] + 1) {
      ops.push({ type: 'sub', typed: typed[i - 1], source: source[j - 1] }); i--; j--;
    } else if (j > 0 && cur === dp[at(i, j - 1)] + 1) {
      ops.push({ type: 'miss', source: source[j - 1] }); j--;
    } else if (i > 0 && cur === dp[at(i - 1, j)] + 1) {
      ops.push({ type: 'extra', typed: typed[i - 1] }); i--;
    } else {
      break;
    }
  }
  ops.reverse();
  return ops;
}

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function buildDiffHtml(typed, source) {
  if (!source.length) return '<p class="diff-empty">No source available to compare.</p>';
  if (!typed.length) return '<p class="diff-empty">Nothing was typed during this run.</p>';
  const ops = diffAlign(typed, source);
  let body = '';
  for (const op of ops) {
    if (op.type === 'match') {
      body += escapeHtml(op.ch);
    } else if (op.type === 'sub') {
      const shown = op.typed === '\n' ? '↵' : op.typed;
      body += `<span class="diff-sub" title="you typed: ${escapeHtml(shown)}">${escapeHtml(op.source)}</span>`;
    } else if (op.type === 'miss') {
      body += `<span class="diff-miss">${escapeHtml(op.source)}</span>`;
    } else if (op.type === 'extra') {
      const shown = op.typed === '\n' ? '↵' : op.typed;
      body += `<span class="diff-extra">${escapeHtml(shown)}</span>`;
    }
  }
  return (
    '<div class="diff-legend">' +
      '<span class="diff-sub">wrong</span>' +
      '<span class="diff-miss">skipped</span>' +
      '<span class="diff-extra">extra</span>' +
    '</div>' +
    `<div class="diff-text">${body}</div>`
  );
}

reviewErrorsBtn.addEventListener('click', () => {
  if (errorReviewEl.hidden) {
    const typed = normalizeForScoring(entryEl.value);
    // Compare against only the part of the source the typist reached (plus a
    // little slack), so the untyped remainder isn't reported as "skipped".
    const fullSource = normalizeForScoring(currentText());
    const source = fullSource.slice(0, Math.min(fullSource.length, typed.length + 20));
    errorReviewEl.innerHTML = buildDiffHtml(typed, trimToReached(typed, source));
    errorReviewEl.hidden = false;
    reviewErrorsBtn.textContent = 'Hide review';
  } else {
    errorReviewEl.hidden = true;
    reviewErrorsBtn.textContent = 'Review errors';
  }
});

// Cut the source back to the point that best matches where typing stopped.
function trimToReached(typed, source) {
  if (!typed.length) return source.slice(0, 0);
  let best = typed.length, bestScore = Infinity;
  const tail = typed.slice(-12);
  for (let end = Math.max(0, typed.length - 20); end <= source.length; end++) {
    const score = levenshtein(tail, source.slice(Math.max(0, end - tail.length), end));
    if (score < bestScore || (score === bestScore && Math.abs(end - typed.length) < Math.abs(best - typed.length))) {
      bestScore = score;
      best = end;
    }
  }
  return source.slice(0, best);
}

// ---------- Initial state ----------

entryEl.disabled = true;
setControlsDisabled(false);
renderLevelButtons();
renderTimerToggle();
setAppState('idle');
choosePassage();
