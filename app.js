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
  passFailEl.className = 'value';

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
  const passed = stats.grossWpm >= 40 && stats.accuracy >= 95;
  grossWpmEl.textContent = stats.grossWpm.toFixed(1);
  accuracyEl.textContent = stats.accuracy.toFixed(1) + '%';
  charsTypedEl.textContent = entryEl.value.length;
  runLengthEl.textContent = mode === 'header' ? `${(stats.elapsedSeconds / 60).toFixed(2)} min` : `${runSeconds / 60} min`;
  correctCharsEl.textContent = stats.correctLike;
  errorsEl.textContent = stats.distance;
  marginEl.textContent = (stats.grossWpm >= 40 ? '+' : '') + (stats.grossWpm - 40).toFixed(1) + ' WPM';
  passFailEl.textContent = passed ? 'PASS' : 'NOT YET';
  passFailEl.className = 'value ' + (passed ? 'pass' : 'fail');
  resultNoteEl.textContent = mode === 'header'
    ? 'Header practice complete. No time limit; statistics are shown automatically.'
    : mode === 'trainer'
      ? `Trainer category: ${TRAINER_PASSAGES[currentIndex].category}. The timer stayed hidden during the run.`
      : 'Formal benchmark: five minutes, 40 WPM / 95% practice threshold.';
  resultsEl.classList.add('show');
}

function endTest(reason = 'time') {
  if (!running) return;
  running = false;
  if (interval) clearInterval(interval);
  interval = null;
  entryEl.disabled = true;
  setControlsDisabled(false);
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
  running = true;
  startedAt = Date.now();
  remaining = runSeconds;
  entryEl.value = '';
  entryEl.disabled = false;
  entryEl.focus();
  setControlsDisabled(true);
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

function headerInputCheck() {
  if (!running || mode !== 'header') return;
  if (normalizeForScoring(entryEl.value) === normalizeForScoring(currentText())) endTest('complete');
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

// Initial state.
entryEl.disabled = true;
setControlsDisabled(false);
durationSelect.classList.remove('show');
choosePassage();
