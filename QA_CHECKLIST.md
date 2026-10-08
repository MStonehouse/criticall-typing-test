# QA Checklist

Verified 2026-10-08 for the difficulty-level rebuild (headless Chromium + Node checks).

- Scenarios: 80 valid (`node tools/validate-scenarios.js`); 5,200+ distinct sentences, none repeated across scenarios.
- Generator: 10,000 passages and headers generated with no unfilled placeholders, `undefined`/`NaN`, or non-ASCII characters; all 80 scenarios used.
- Passage length (words): Easy median 484 (min ~450), Moderate ~530, Hard ~590, Expert ~575; every passage outlasts five minutes at 85+ WPM.
- Difficulty rises by level: share of digits/capitals/symbols 2.2% / 3.7% / 6.0% / 8.4% (Easy to Expert), plus longer headers.
- 5-Minute Test: no duration selector; 05:00 countdown; controls locked while running; ends at 5:00; run length capped at 5:00.
- Pass rules: full accurate run = PASS; accuracy below 95% = NOT YET with the metric flagged; stopped early = INCOMPLETE.
- Source pane scrolls steadily with typing progress (unchanged algorithm).
- Timer toggle hides the countdown during a run and is remembered.
- Header Practice: Easy shows Name / Address / City / Postal Code; Expert shows a full letter header; both auto-complete when typed.
- Error review compares only up to where typing stopped.
- History page labels new runs (e.g. "5-Minute Test · Hard") and still shows runs saved by older versions.
- Phone width (390px): no horizontal overflow.
