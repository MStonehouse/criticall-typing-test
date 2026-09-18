# QA Checklist

Build verified from the known-good formal/trainer baseline.

- Formal library: 100 passages; initial passage renders; New Passage changes passage; 5:00 timer shown.
- Typing Trainer: 500 passages; 2/3/4/5 minute selector shown only in trainer mode; timer hidden while running.
- Header Practice: 100 records; proper capitalization; fields are Name / Address / City / Postal Code; untimed; auto-completes on exact entry and displays statistics.
- Mode switching: Formal / Trainer / Header all switch before a run and reset the passage.
- Input: paste/drop blocked; typing disabled until Start; controls disabled during a run.
- Results: WPM, accuracy, characters, run length, correct-like characters, errors, margin, and result populate.
- JavaScript syntax checks passed for app.js, letters.js, trainer-passages.js, and header-practice.js.
- Browser-level smoke test executed against an inline bundle in Chromium: initial render, mode switches, header completion, trainer duration change, trainer start/end, formal render, and New Passage all passed.
