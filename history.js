const HISTORY_KEY = 'criticall.history';

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
  try { localStorage.setItem(HISTORY_KEY, JSON.stringify(list)); } catch { /* storage unavailable */ }
}

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

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

function render() {
  const list = loadHistory().slice().reverse();
  const countEl = document.getElementById('histCount');
  const avgWpmEl = document.getElementById('histAvgWpm');
  const avgAccEl = document.getElementById('histAvgAcc');
  const passRateEl = document.getElementById('histPassRate');
  const listEl = document.getElementById('historyList');

  countEl.textContent = list.length;

  if (!list.length) {
    avgWpmEl.textContent = '—';
    avgAccEl.textContent = '—';
    passRateEl.textContent = '—';
    listEl.innerHTML = '<p class="history-empty">No runs saved yet. Finish a test to start building history.</p>';
    return;
  }

  const avgWpm = list.reduce((sum, r) => sum + r.grossWpm, 0) / list.length;
  const avgAcc = list.reduce((sum, r) => sum + r.accuracy, 0) / list.length;
  const passCount = list.filter(r => r.pass).length;
  avgWpmEl.textContent = avgWpm.toFixed(1);
  avgAccEl.textContent = avgAcc.toFixed(1) + '%';
  passRateEl.textContent = Math.round((passCount / list.length) * 100) + '%';

  listEl.innerHTML = list.map(r => `
    <div class="history-row">
      <span class="history-date">${escapeHtml(formatHistoryDate(r.ts))}</span>
      <span class="history-mode">${escapeHtml(historyModeLabel(r))}</span>
      <span class="history-wpm">${r.grossWpm.toFixed(1)} WPM</span>
      <span class="history-acc">${r.accuracy.toFixed(1)}%</span>
      <span class="history-result ${r.pass ? 'pass' : 'fail'}">${r.pass ? 'PASS' : 'NOT YET'}</span>
    </div>
  `).join('');
}

document.getElementById('clearHistory').addEventListener('click', () => {
  if (confirm('Clear all saved practice history? This cannot be undone.')) {
    saveHistory([]);
    render();
  }
});

render();
