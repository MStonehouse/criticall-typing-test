# CritiCall Typing Practice

A dependency-free, CritiCall-style five-minute transcription test with selectable difficulty, plus untimed header practice.

## Features

- **Every test is five minutes.** Pass mark is fixed at **40 WPM and 95% accuracy**; both must be met, and a run stopped early is marked *Incomplete*.
- **Four difficulty levels, plus Mixed:**
  - **Easy** - plain prose with a one-line "Dear ... at ..." opener (the same level as the original practice passages).
  - **Moderate** - dated letters, memos and emails with recipient blocks and sign-offs; fuller names, dates, dollar amounts and file numbers.
  - **Hard** - letterheads, phone numbers, "Our File" and "Re:" lines, cc lists, company names, and dense detail sentences in the body.
  - **Expert** - full business headers (fax, email, website, delivery method, "Your File"), unusual names, hyphenated and apostrophe surnames, long reference codes, extensions, 24-hour times and mixed date formats.
  - **Mixed** - a random level each passage.
- **Real variety.** Passages are generated from 80 hand-written scenarios (letters, emails, memos, incident and inspection reports, public notices and newsletter articles) across community life, workplace, customer service, public safety, municipal and health, general interest, occasions, and transport/utilities. Each scenario has two versions of every paragraph, and names, places, companies, dates and numbers are freshly generated every time. Recently seen scenarios are skipped so subjects don't repeat soon.
- **Header Practice** at the same difficulty levels. Easy is the classic four-line record (Name / Address / City / Postal Code); higher levels are the full headers used in the tests. Untimed, and ends automatically when the header is complete.
- The source text **scrolls slowly as you type** so your place stays in view.
- Timer can be shown or hidden while typing (Timer button; remembered).
- No live WPM or accuracy feedback during a run.
- Character-level accuracy using edit distance; error review shows wrong, skipped and extra characters up to where you stopped.
- Spellcheck, autocorrect, autocapitalisation, paste and drag/drop disabled.
- Practice history saved on this device (History page).
- No frameworks, packages, build tools, tracking or external services. Works locally and on GitHub Pages.

## Run locally

Open `index.html` directly, or serve the folder locally:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Publish with GitHub Pages

The included workflow (`.github/workflows/pages.yml`) deploys the site after every push to `main` when **Settings -> Pages -> Build and deployment** is set to **GitHub Actions**. The site uses only relative paths.

## Repository layout

- `index.html` - page markup
- `styles.css` - presentation
- `app.js` - modes, timer, scrolling, input controls, scoring and results
- `generator.js` - builds passages and headers from scenarios at each difficulty level
- `scenarios.js` - the 80 passage scenarios
- `history.html`, `history.js` - saved practice history
- `tools/validate-scenarios.js` - checks every scenario (`node tools/validate-scenarios.js`)
- `tools/SCENARIO_SPEC.md` - how to write a new scenario
- `.github/workflows/pages.yml` - GitHub Pages deployment

## Adding scenarios

Add an object to `SCENARIOS` in `scenarios.js` following `tools/SCENARIO_SPEC.md`, then run `node tools/validate-scenarios.js`. New scenarios are picked up automatically at every difficulty level.

## Scoring note

Gross WPM uses the conventional five-characters-per-word calculation over the time typed (five minutes for a completed test). Newline characters are excluded from WPM credit. Accuracy uses character-level edit distance against the corresponding source text. Trailing spaces at line or paragraph ends are ignored; meaningful spaces, punctuation, capitalisation, omissions, insertions, substitutions and paragraph structure still affect accuracy.

This is an independent practice simulator, not official CritiCall software. An employer's CritiCall configuration may use a different scoring method.

## Training records

- `TRAINING_STATE.md` - current strengths, priorities, preferences and study state
- `TRAINING_LOG.md` - chronological benchmark scores and notable practice results
- `CRITICALL_RULES.md` - stable practice rules and the Decision Making classification key
