const FORMAL_SECONDS = 300;
const TRAINER_DURATIONS = [120, 180, 240, 300];

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
const formalModeBtn = $('formalMode');
const trainerModeBtn = $('trainerMode');
const headerModeBtn = $('headerMode');
const trainerStrip = $('trainerStrip');
const categoryBadge = $('categoryBadge');
const sourceHeader = $('sourceHeader');
const durationSelect = $('trainerDuration');
const appEl = $('app');
const copyResultsBtn = $('copyResults');
const reviewErrorsBtn = $('reviewErrors');
const errorReviewEl = $('errorReview');
const historyBtn = $('historyBtn');
const settingsBtn = $('settingsBtn');
const settingsBar = $('settingsBar');
const thresholdWpmInput = $('thresholdWpm');
const thresholdAccInput = $('thresholdAcc');
const resetThresholdBtn = $('resetThreshold');
const practiceViewEl = $('practiceView');
const historyViewEl = $('historyView');
const closeHistoryBtn = $('closeHistory');
const clearHistoryBtn = $('clearHistory');
const historyListEl = $('historyList');
const histCountEl = $('histCount');
const histAvgWpmEl = $('histAvgWpm');
const histAvgAccEl = $('histAvgAcc');
const histPassRateEl = $('histPassRate');

function setAppState(state) {
  appEl.dataset.state = state;
}

const DEFAULT_SETTINGS = { wpm: 40, accuracy: 95 };
const SETTINGS_KEY = 'criticall.settings';
const HISTORY_KEY = 'criticall.history';
const HISTORY_LIMIT = 500;

function loadSettings() {
  try {
    const raw = localStorage.getItem(SETTINGS_KEY);
    if (!raw) return { ...DEFAULT_SETTINGS };
    const parsed = JSON.parse(raw);
    return {
      wpm: Number.isFinite(parsed.wpm) ? parsed.wpm : DEFAULT_SETTINGS.wpm,
      accuracy: Number.isFinite(parsed.accuracy) ? parsed.accuracy : DEFAULT_SETTINGS.accuracy
    };
  } catch {
    return { ...DEFAULT_SETTINGS };
  }
}

function saveSettings(next) {
  try { localStorage.setItem(SETTINGS_KEY, JSON.stringify(next)); } catch { /* storage unavailable */ }
}

let settings = loadSettings();

function loadHistory() {
  try {
    const raw = localStorage.getItem(HISTORY_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveHistory(list) {
  try { localStorage.setItem(HISTORY_KEY, JSON.stringify(list.slice(-HISTORY_LIMIT))); } catch { /* storage unavailable */ }
}

function addHistoryEntry(entry) {
  const list = loadHistory();
  list.push(entry);
  saveHistory(list);
}

let mode = 'formal';
let currentIndex = -1;
let deck = [];
let runSeconds = FORMAL_SECONDS;
let remaining = FORMAL_SECONDS;
let interval = null;
let running = false;
let startedAt = null;

function pool() {
  if (mode === 'formal') return LETTERS;
  if (mode === 'trainer') return TRAINER_PASSAGES;
  return HEADER_PRACTICE;
}

function textFromItem(item) {
  if (typeof item === 'string') return item;
  return item && typeof item.text === 'string' ? item.text : '';
}

function currentText() {
  const p = pool();
  return currentIndex >= 0 && currentIndex < p.length ? textFromItem(p[currentIndex]) : '';
}

function refillDeck() {
  const p = pool();
  deck = Array.from({ length: p.length }, (_, i) => i);
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  if (deck.length > 1 && deck[deck.length - 1] === currentIndex) {
    [deck[0], deck[deck.length - 1]] = [deck[deck.length - 1], deck[0]];
  }
}

function normalizeForScoring(text) {
  return String(text || '').replace(/[ \t]+(?=\n)/g, '').replace(/[ \t]+$/g, '');
}

function formatTime(total) {
  const seconds = Math.max(0, Math.floor(total));
  return String(Math.floor(seconds / 60)).padStart(2, '0') + ':' + String(seconds % 60).padStart(2, '0');
}

function setControlsDisabled(disabled) {
  startBtn.disabled = disabled;
  newBtn.disabled = disabled;
  formalModeBtn.disabled = disabled;
  trainerModeBtn.disabled = disabled;
  headerModeBtn.disabled = disabled;
  durationSelect.disabled = disabled;
  historyBtn.disabled = disabled;
  settingsBtn.disabled = disabled;
}

function syncSourceToTypingProgress() {
  if (!running) return;
  const source = currentText();
  const typed = normalizeForScoring(entryEl.value);
  if (!source.length) return;
  const progress = Math.max(0, Math.min(1, typed.length / source.length));
  const max = Math.max(0, sourceEl.scrollHeight - sourceEl.clientHeight);
  sourceEl.scrollTo({ top: max * progress - sourceEl.clientHeight * 0.18, behavior: 'smooth' });
}

function choosePassage() {
  if (running) return;
  const p = pool();
  if (!p.length) {
    currentIndex = -1;
    sourceEl.textContent = '';
    statusEl.textContent = 'No passages are available for this mode.';
    return;
  }
  if (!deck.length) refillDeck();
  currentIndex = deck.pop();
  sourceEl.textContent = currentText();
  sourceEl.scrollTop = 0;
  entryEl.value = '';
  resultsEl.classList.remove('show');
  passFailEl.className = 'verdict-badge';
  setAppState('idle');

  if (mode === 'formal') {
    runSeconds = FORMAL_SECONDS;
    timerEl.textContent = formatTime(FORMAL_SECONDS);
    timerEl.classList.remove('hidden');
    categoryBadge.textContent = 'Formal';
    statusEl.textContent = `Choose Start when ready. ${p.length} formal letters available.`;
  } else if (mode === 'trainer') {
    runSeconds = Number(durationSelect.value);
    timerEl.textContent = 'TIME HIDDEN';
    timerEl.classList.add('hidden');
    const item = p[currentIndex];
    categoryBadge.textContent = item && item.category ? item.category : 'Mixed';
    statusEl.textContent = `Choose Start when ready. ${p.length} trainer passages available.`;
  } else {
    runSeconds = 0;
    timerEl.textContent = 'NO LIMIT';
    timerEl.classList.remove('hidden');
    categoryBadge.textContent = 'Header';
    statusEl.textContent = `Choose Start when ready. ${p.length} header records available.`;
  }
}

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
  const elapsedSeconds = mode === 'header'
    ? Math.max(1, (Date.now() - startedAt) / 1000)
    : runSeconds;
  const elapsedMinutes = elapsedSeconds / 60;
  const charsTyped = typed.replace(/\n/g, '').length;
  const grossWpm = (charsTyped / 5) / elapsedMinutes;
  return { typed, source, distance, correctLike, accuracy, elapsedSeconds, grossWpm };
}

function showResults() {
  const stats = calculateStats();
  const passed = stats.grossWpm >= settings.wpm && stats.accuracy >= settings.accuracy;
  grossWpmEl.textContent = stats.grossWpm.toFixed(1);
  accuracyEl.textContent = stats.accuracy.toFixed(1) + '%';
  charsTypedEl.textContent = entryEl.value.length;
  runLengthEl.textContent = mode === 'header' ? `${(stats.elapsedSeconds / 60).toFixed(2)} min` : `${runSeconds / 60} min`;
  correctCharsEl.textContent = stats.correctLike;
  errorsEl.textContent = stats.distance;
  marginEl.textContent = (stats.grossWpm >= settings.wpm ? '+' : '') + (stats.grossWpm - settings.wpm).toFixed(1) + ' WPM';
  passFailEl.textContent = passed ? 'PASS' : 'NOT YET';
  passFailEl.className = 'verdict-badge ' + (passed ? 'pass' : 'fail');
  resultNoteEl.textContent = mode === 'header'
    ? 'Header practice complete. No time limit; statistics are shown automatically.'
    : mode === 'trainer'
      ? `Trainer category: ${TRAINER_PASSAGES[currentIndex].category}. The timer stayed hidden during the run.`
      : `Formal benchmark: five minutes, ${settings.wpm} WPM / ${settings.accuracy}% practice threshold.`;
  resultsEl.classList.add('show');
  errorReviewEl.hidden = true;
  errorReviewEl.innerHTML = '';
  reviewErrorsBtn.textContent = 'Review errors';

  addHistoryEntry({
    ts: Date.now(),
    mode,
    category: mode === 'trainer' && TRAINER_PASSAGES[currentIndex] ? TRAINER_PASSAGES[currentIndex].category : null,
    grossWpm: Number(stats.grossWpm.toFixed(1)),
    accuracy: Number(stats.accuracy.toFixed(1)),
    pass: passed,
    runLength: mode === 'header' ? Number((stats.elapsedSeconds / 60).toFixed(2)) : runSeconds / 60
  });
}

function endTest(reason = 'time') {
  if (!running) return;
  clearHeaderIdleTimer();
  running = false;
  if (interval) clearInterval(interval);
  interval = null;
  entryEl.disabled = true;
  setControlsDisabled(false);
  setAppState('complete');
  showResults();
  if (mode === 'header') {
    timerEl.textContent = 'COMPLETE';
    statusEl.textContent = 'Header complete. Statistics are shown below.';
  } else if (reason === 'complete') {
    statusEl.textContent = 'Passage complete. Statistics are shown below.';
    timerEl.textContent = formatTime(remaining);
  } else {
    statusEl.textContent = mode === 'trainer' ? 'Run complete. Nice work—go again when ready.' : 'Time expired. Test complete.';
    timerEl.textContent = formatTime(0);
  }
  if (mode === 'trainer') timerEl.classList.add('hidden');
}

function startTest() {
  if (running || !currentText()) return;
  clearHeaderIdleTimer();
  running = true;
  startedAt = Date.now();
  remaining = runSeconds;
  entryEl.value = '';
  entryEl.disabled = false;
  entryEl.focus();
  setControlsDisabled(true);
  setAppState('running');
  resultsEl.classList.remove('show');
  statusEl.textContent = mode === 'header' ? 'Type the header exactly as shown.' : mode === 'trainer' ? 'Trainer run in progress. Keep moving.' : 'Formal test in progress.';
  if (mode === 'header') {
    timerEl.textContent = 'NO LIMIT';
    timerEl.classList.remove('hidden');
    return;
  }
  if (mode === 'trainer') {
    timerEl.textContent = 'TIME HIDDEN';
    timerEl.classList.add('hidden');
  } else {
    timerEl.textContent = formatTime(remaining);
  }
  interval = setInterval(() => {
    const elapsed = Math.floor((Date.now() - startedAt) / 1000);
    remaining = Math.max(0, runSeconds - elapsed);
    if (mode === 'formal') timerEl.textContent = formatTime(remaining);
    if (remaining <= 0) endTest('time');
  }, 250);
}

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

  // Allow the run to end once the entry is essentially complete, even with a
  // small misspelling or two, instead of requiring a character-perfect match.
  const tolerance = Math.max(2, Math.round(source.length * 0.08));
  const nearEnd = typed.length >= source.length - tolerance;
  if (!nearEnd) return;

  const distance = levenshtein(typed, source);
  if (distance <= tolerance || typed.length >= source.length + tolerance) {
    endTest('complete');
    return;
  }

  // The entry has reached the expected length but has more mistakes than the
  // instant-match tolerance allows. Rather than wait forever for a cleaner
  // match that will never come, treat a short pause here as "finished typing"
  // so the run always ends on its own.
  headerIdleTimer = setTimeout(() => {
    headerIdleTimer = null;
    if (!running || mode !== 'header') return;
    if (normalizeForScoring(entryEl.value).length >= source.length - tolerance) {
      endTest('complete');
    }
  }, 900);
}

function setMode(next) {
  if (running || mode === next) return;
  mode = next;
  currentIndex = -1;
  deck = [];
  formalModeBtn.classList.toggle('active', mode === 'formal');
  trainerModeBtn.classList.toggle('active', mode === 'trainer');
  headerModeBtn.classList.toggle('active', mode === 'header');
  trainerStrip.classList.toggle('show', mode !== 'formal');
  sourceHeader.textContent = mode === 'formal' ? 'Source Letter' : mode === 'trainer' ? 'Practice Passage' : 'Header';
  durationSelect.classList.toggle('show', mode === 'trainer');
  choosePassage();
}

entryEl.addEventListener('input', () => {
  syncSourceToTypingProgress();
  headerInputCheck();
});
entryEl.addEventListener('paste', e => e.preventDefault());
entryEl.addEventListener('drop', e => e.preventDefault());
entryEl.addEventListener('beforeinput', e => { if (!running) e.preventDefault(); });
startBtn.addEventListener('click', startTest);
newBtn.addEventListener('click', choosePassage);
formalModeBtn.addEventListener('click', () => setMode('formal'));
trainerModeBtn.addEventListener('click', () => setMode('trainer'));
headerModeBtn.addEventListener('click', () => setMode('header'));
durationSelect.addEventListener('change', () => { if (mode === 'trainer' && !running) choosePassage(); });

copyResultsBtn.addEventListener('click', async () => {
  const summary = [
    `CritiCall Typing Practice — ${passFailEl.textContent}`,
    `Gross WPM: ${grossWpmEl.textContent}`,
    `Accuracy: ${accuracyEl.textContent}`,
    `Characters Typed: ${charsTypedEl.textContent}`,
    `Run Length: ${runLengthEl.textContent}`,
    `Correct-like Chars: ${correctCharsEl.textContent}`,
    `Errors: ${errorsEl.textContent}`,
    `Passing Margin: ${marginEl.textContent}`
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
  if (e.key === 'Enter' && (e.metaKey || e.ctrlKey) && !running && !startBtn.disabled) {
    e.preventDefault();
    startTest();
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
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
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
    const source = normalizeForScoring(currentText());
    errorReviewEl.innerHTML = buildDiffHtml(typed, source);
    errorReviewEl.hidden = false;
    reviewErrorsBtn.textContent = 'Hide review';
  } else {
    errorReviewEl.hidden = true;
    reviewErrorsBtn.textContent = 'Review errors';
  }
});

// ---------- Settings (adjustable pass threshold) ----------

thresholdWpmInput.value = settings.wpm;
thresholdAccInput.value = settings.accuracy;

settingsBtn.addEventListener('click', () => settingsBar.classList.toggle('show'));

thresholdWpmInput.addEventListener('change', () => {
  const v = Number(thresholdWpmInput.value);
  if (Number.isFinite(v) && v >= 0) settings.wpm = v;
  thresholdWpmInput.value = settings.wpm;
  saveSettings(settings);
});

thresholdAccInput.addEventListener('change', () => {
  const v = Number(thresholdAccInput.value);
  if (Number.isFinite(v) && v >= 0 && v <= 100) settings.accuracy = v;
  thresholdAccInput.value = settings.accuracy;
  saveSettings(settings);
});

resetThresholdBtn.addEventListener('click', () => {
  settings = { ...DEFAULT_SETTINGS };
  thresholdWpmInput.value = settings.wpm;
  thresholdAccInput.value = settings.accuracy;
  saveSettings(settings);
});

// ---------- History ----------

function formatHistoryDate(ts) {
  return new Date(ts).toLocaleString(undefined, {
    month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit'
  });
}

function historyModeLabel(entry) {
  if (entry.mode === 'formal') return 'Formal Test';
  if (entry.mode === 'header') return 'Header Practice';
  return entry.category ? `Trainer · ${entry.category}` : 'Typing Trainer';
}

function renderHistory() {
  const list = loadHistory().slice().reverse();
  histCountEl.textContent = list.length;

  if (!list.length) {
    histAvgWpmEl.textContent = '—';
    histAvgAccEl.textContent = '—';
    histPassRateEl.textContent = '—';
    historyListEl.innerHTML = '<p class="history-empty">No runs saved yet. Finish a test to start building history.</p>';
    return;
  }

  const avgWpm = list.reduce((sum, r) => sum + r.grossWpm, 0) / list.length;
  const avgAcc = list.reduce((sum, r) => sum + r.accuracy, 0) / list.length;
  const passCount = list.filter(r => r.pass).length;
  histAvgWpmEl.textContent = avgWpm.toFixed(1);
  histAvgAccEl.textContent = avgAcc.toFixed(1) + '%';
  histPassRateEl.textContent = Math.round((passCount / list.length) * 100) + '%';

  historyListEl.innerHTML = list.map(r => `
    <div class="history-row">
      <span class="history-date">${escapeHtml(formatHistoryDate(r.ts))}</span>
      <span class="history-mode">${escapeHtml(historyModeLabel(r))}</span>
      <span class="history-wpm">${r.grossWpm.toFixed(1)} WPM</span>
      <span class="history-acc">${r.accuracy.toFixed(1)}%</span>
      <span class="history-result ${r.pass ? 'pass' : 'fail'}">${r.pass ? 'PASS' : 'NOT YET'}</span>
    </div>
  `).join('');
}

function setHistoryOpen(open) {
  practiceViewEl.hidden = open;
  historyViewEl.hidden = !open;
  setControlsDisabled(open);
  if (open) renderHistory();
}

historyBtn.addEventListener('click', () => { if (!running) setHistoryOpen(true); });
closeHistoryBtn.addEventListener('click', () => setHistoryOpen(false));
clearHistoryBtn.addEventListener('click', () => {
  if (confirm('Clear all saved practice history? This cannot be undone.')) {
    saveHistory([]);
    renderHistory();
  }
});

// Initial state.
entryEl.disabled = true;
setControlsDisabled(false);
durationSelect.classList.remove('show');
setAppState('idle');
choosePassage();
