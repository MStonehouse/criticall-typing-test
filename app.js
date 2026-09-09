const TEST_SECONDS = 300;

const sourceEl = document.getElementById('sourceLetter');
const entryEl = document.getElementById('entry');
const timerEl = document.getElementById('timer');
const startBtn = document.getElementById('start');
const newBtn = document.getElementById('newLetter');
const statusEl = document.getElementById('status');
const resultsEl = document.getElementById('results');
const grossWpmEl = document.getElementById('grossWpm');
const accuracyEl = document.getElementById('accuracy');
const charsTypedEl = document.getElementById('charsTyped');
const passFailEl = document.getElementById('passFail');

let currentLetterIndex = -1;
let letterDeck = [];

function refillLetterDeck() {
  letterDeck = Array.from({ length: LETTERS.length }, (_, i) => i);
  for (let i = letterDeck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [letterDeck[i], letterDeck[j]] = [letterDeck[j], letterDeck[i]];
  }
  if (letterDeck.length > 1 && letterDeck[letterDeck.length - 1] === currentLetterIndex) {
    [letterDeck[0], letterDeck[letterDeck.length - 1]] = [letterDeck[letterDeck.length - 1], letterDeck[0]];
  }
}
let remaining = TEST_SECONDS;
let interval = null;
let running = false;
let startedAt = null;



function normalizeForScoring(text) {
  // Ignore incidental trailing spaces/tabs at line or paragraph ends,
  // while preserving meaningful spaces, punctuation, capitalization,
  // and paragraph structure.
  return text
    .replace(/[ \t]+(?=\n)/g, '')
    .replace(/[ \t]+$/g, '');
}

function syncSourceToTypingProgress() {
  if (!running) return;
  const source = LETTERS[currentLetterIndex] || '';
  const typed = entryEl.value || '';
  if (!source.length) return;

  // Track progress mainly by how far through the source the user has typed.
  // Use normalized text so incidental trailing spaces do not affect scrolling.
  const typedNorm = normalizeForScoring(typed);
  const progress = Math.max(0, Math.min(1, typedNorm.length / source.length));

  const maxScroll = Math.max(0, sourceEl.scrollHeight - sourceEl.clientHeight);

  // Keep the active region slightly above center so upcoming text stays visible.
  const target = Math.max(0, Math.min(maxScroll, maxScroll * progress - sourceEl.clientHeight * 0.18));
  sourceEl.scrollTo({ top: target, behavior: 'smooth' });
}

function chooseLetter() {
  if (running) return;
  if (!letterDeck.length) refillLetterDeck();
  currentLetterIndex = letterDeck.pop();
  sourceEl.textContent = LETTERS[currentLetterIndex];
  sourceEl.scrollTop = 0;
  entryEl.value = '';
  timerEl.textContent = '05:00';
  statusEl.textContent = `Choose Start Test when ready. ${LETTERS.length} letters available.`;
  resultsEl.classList.remove('show');
}

function formatTime(total) {
  const m = Math.floor(total / 60);
  const s = total % 60;
  return String(m).padStart(2, '0') + ':' + String(s).padStart(2, '0');
}

function levenshtein(a, b) {
  const n = a.length, m = b.length;
  if (n === 0) return m;
  if (m === 0) return n;
  let prev = new Uint32Array(m + 1);
  let curr = new Uint32Array(m + 1);
  for (let j = 0; j <= m; j++) prev[j] = j;
  for (let i = 1; i <= n; i++) {
    curr[0] = i;
    const ca = a.charCodeAt(i - 1);
    for (let j = 1; j <= m; j++) {
      const cost = ca === b.charCodeAt(j - 1) ? 0 : 1;
      curr[j] = Math.min(
        curr[j - 1] + 1,
        prev[j] + 1,
        prev[j - 1] + cost
      );
    }
    [prev, curr] = [curr, prev];
  }
  return prev[m];
}

function endTest() {
  if (!running) return;
  running = false;
  clearInterval(interval);
  interval = null;
  remaining = 0;
  timerEl.textContent = '00:00';
  entryEl.disabled = true;
  startBtn.disabled = false;
  newBtn.disabled = false;

  const typedRaw = entryEl.value;
  const sourceRaw = LETTERS[currentLetterIndex];

  const typed = normalizeForScoring(typedRaw);
  const source = normalizeForScoring(sourceRaw);

  // Compare against a source window matching the amount attempted.
  // A small buffer allows insertions/deletions to align properly.
  const windowLen = Math.min(source.length, typed.length + 30);
  const expected = source.slice(0, windowLen);
  const distance = levenshtein(typed, expected);
  const correctLike = Math.max(0, typed.length - distance);
  const accuracy = typed.length === 0 ? 0 : Math.max(0, Math.min(100, (correctLike / typed.length) * 100));

  const elapsedMinutes = TEST_SECONDS / 60;
  // Newline characters are excluded from WPM credit, but normal spaces and punctuation count.
  const wpmChars = typed.replace(/\n/g, '').length;
  const grossWpm = (wpmChars / 5) / elapsedMinutes;

  grossWpmEl.textContent = grossWpm.toFixed(1);
  accuracyEl.textContent = accuracy.toFixed(1) + '%';
  charsTypedEl.textContent = typedRaw.length;

  const passed = grossWpm >= 40 && accuracy >= 95;
  passFailEl.textContent = passed ? 'PASS' : 'NOT YET';
  passFailEl.className = 'value ' + (passed ? 'pass' : 'fail');

  statusEl.textContent = 'Time expired. Test complete.';
  resultsEl.classList.add('show');
}

function startTest() {
  if (running) return;
  running = true;
  remaining = TEST_SECONDS;
  startedAt = Date.now();
  entryEl.value = '';
  entryEl.disabled = false;
  entryEl.focus();
  startBtn.disabled = true;
  newBtn.disabled = true;
  resultsEl.classList.remove('show');
  statusEl.textContent = 'Test in progress.';
  timerEl.textContent = formatTime(remaining);

  interval = setInterval(() => {
    const elapsed = Math.floor((Date.now() - startedAt) / 1000);
    remaining = Math.max(0, TEST_SECONDS - elapsed);
    timerEl.textContent = formatTime(remaining);
    if (remaining <= 0) endTest();
  }, 250);
}


entryEl.addEventListener('input', syncSourceToTypingProgress);

entryEl.addEventListener('paste', (e) => e.preventDefault());
entryEl.addEventListener('drop', (e) => e.preventDefault());
entryEl.addEventListener('beforeinput', (e) => {
  if (!running) e.preventDefault();
});

startBtn.addEventListener('click', startTest);
newBtn.addEventListener('click', chooseLetter);

chooseLetter();
