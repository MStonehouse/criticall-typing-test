# CritiCall Typing Practice

A dependency-free CritiCall-style typing simulator plus a high-volume, informal transcription trainer.

## Features

- 100 built-in formal practice letters (preserved as the benchmark simulator)
- 360 additional trainer passages across 9 categories
- Random 2, 3, 4, or 5 minute trainer runs
- Trainer timer is completely hidden while typing
- Trainer categories: Easy Flow, Formal, Dispatch Narrative, Numbers & Dates, Names & Addresses, Punctuation, Awkward Words, Email & Memo, and Mixed
- Expanded post-run trainer statistics
- 5-minute timed tests
- 40 WPM / 95% practice threshold
- No live WPM or accuracy feedback during a run
- Character-level accuracy scoring using edit distance
- Spellcheck, autocorrect, autocapitalization, paste, and drag/drop disabled
- Automatic source-pane scrolling based on typing progress
- Shuffled 100-letter deck so every letter is seen once before the pool reshuffles
- No frameworks, packages, build tools, tracking, or external services
- Works locally and on GitHub Pages

## Run locally

Open `index.html` directly, or serve the folder locally:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Publish with GitHub Pages

1. Create a new GitHub repository.
2. Put the contents of this folder at the repository root.
3. Commit and push to the `main` branch.
4. In GitHub, open **Settings → Pages**.
5. Under **Build and deployment**, choose **GitHub Actions**.
6. The included workflow will deploy the site automatically after each push to `main`.

The site uses only relative paths, so it works on both a user/organization Pages domain and a project Pages URL.

## Repository layout

- `index.html` — page markup
- `styles.css` — presentation
- `app.js` — timer, scrolling, input controls, and scoring
- `letters.js` — 100-letter formal benchmark library
- `trainer-passages.js` — 360-passage high-volume trainer library
- `.github/workflows/pages.yml` — GitHub Pages deployment
- `.nojekyll` — tells GitHub Pages to serve the static files directly

## Scoring note

Gross WPM uses the conventional five-characters-per-word calculation over the five-minute test. Newline characters are excluded from WPM credit. Accuracy uses character-level edit distance against the corresponding source text. Trailing spaces at line or paragraph ends are ignored; meaningful spaces, punctuation, capitalization, omissions, insertions, substitutions, and paragraph structure still affect accuracy.

This is an independent practice simulator, not official CritiCall software. An employer's CritiCall configuration may use a different scoring method.


## Training records

- `TRAINING_STATE.md` — current strengths, priorities, preferences, and study state
- `TRAINING_LOG.md` — chronological benchmark scores and notable practice results
- `CRITICALL_RULES.md` — stable practice rules and the Decision Making classification key
