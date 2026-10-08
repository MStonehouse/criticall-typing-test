# Scenario authoring spec — CritiCall typing practice

You are writing source material for a typing test that simulates the CritiCall
transcription test (used to hire 911 call-takers and dispatchers in Canada). A
candidate sees a passage and types it for 5 minutes. A program assembles each
passage from a SCENARIO you write: it picks one variant of each section, fills
placeholders, and adds a header and sign-off itself.

The current material is badly repetitive (the same 37 paragraphs reused
everywhere). Your job is to write genuinely varied, specific, natural English.

## What to produce

Each scenario is one object in the `SCENARIOS` array in `scenarios.js`:

```json
{
  "id": "c03-warranty-repair",
  "kind": "letter",
  "title": "Warranty repair on a dishwasher",
  "orgs": ["{city} Appliance Centre", "Island Home Appliance Service"],
  "senderTitles": ["Service Manager", "Customer Care Coordinator"],
  "subjects": ["Warranty repair, file {ref}", "Your service request {ref}"],
  "sections": [
    ["variant A of section 1", "variant B of section 1"],
    ["variant A of section 2", "variant B of section 2"],
    "... exactly 8 sections ..."
  ],
  "details": ["dense sentence 1", "... exactly 8 ..."]
}
```

- `id`: a theme letter (a-h) + two-digit number + short slug, e.g. `c03-warranty-repair`. Must be unique.
- `kind`: one of `letter`, `email`, `memo`, `report`, `notice`, `article` (voice rules below).
- `orgs`: 2 fictional organisation names that SEND this document (may use `{city}`). No real businesses.
- `senderTitles`: 2-3 plausible job titles for the person writing it.
- `subjects`: 2 short subject/headline lines (may use placeholders, keep under 10 words).
- `sections`: EXACTLY 8 sections in logical reading order (opening, development, closing).
  Each section has EXACTLY 2 variants. Either variant must read naturally after
  either variant of the previous section, so do not refer back to specifics that
  only exist in one variant. The two variants serve the same purpose in the
  document but must be written differently with different concrete details,
  not paraphrases of each other.
  - Each variant: ONE paragraph, 50 to 80 words.
  - Plain, clear, everyday English at roughly a grade 8-10 reading level. This
    is the EASY baseline; harder difficulty is added by the program, so do not
    pack sections with numbers. Use 0-3 placeholders per variant (average ~1.5).
  - Do NOT include a salutation ("Dear ...") or sign-off ("Sincerely ...") or
    header lines; the program adds those. The first section starts the body.
- `details`: EXACTLY 8 standalone sentences (20-45 words each) for HARD
  difficulty. These get appended to random paragraphs, so each must make sense
  on its own anywhere in the body. Make them dense and awkward to type the way
  real records are: several placeholders (3-6), proper nouns, semicolons,
  parentheses, colons, quoted labels, abbreviations like "approx.", "ext.",
  "No.", "e.g.", hyphenated terms, unusual but real words. Still grammatical.

## Voice by kind

- `letter`: from someone at the org to one individual recipient. May address
  the reader as "you" and may use `{r_title}` (e.g. "Ms. Sullivan") sparingly.
- `email`: like a letter but a little less formal.
- `memo`: internal, to staff/team/members of the org. "staff", "the team", "we".
- `report`: third-person factual record (incident, inspection, occurrence,
  call narrative). No "you". Past tense mostly. Note what was observed vs what
  was reported by others, like a real dispatch or inspection record.
- `notice`: public notice to residents, customers, members, parents, etc.
- `article`: newsletter / community-paper feature; informative, a bit of colour.

## Placeholders (use ONLY these, exactly as written, lower case)

People (each passage gets consistent random people; genders are random so
use the pronoun placeholders, never hard-code he/she for them):
- `{p1}` `{p2}` `{p3}` full name, e.g. "Daniel Okafor"
- `{p1_first}` `{p1_last}` first / last name (same for p2, p3)
- `{p1_title}` courtesy title + last name, e.g. "Ms. Okafor" (same for p2, p3)
- `{p1_he}` he/she, `{p1_him}` him/her, `{p1_his}` his/her (same for p2, p3).
  At the start of a sentence use a capital P: `{P1_he}`, `{P2_his}` etc.
- `{r_title}` the recipient's title + last name (letter/email only)
- `{sender}` the writer's full name

Places and organisations:
- `{city}` `{city2}` Vancouver Island / BC towns (e.g. Courtenay, Nanaimo)
- `{street}` `{street2}` street address, e.g. "418 Alderwood Crescent"
- `{org}` the sending organisation (one of your `orgs`)
- `{company}` `{company2}` some other business involved (supplier, contractor,
  carrier...). Introduce it with a role so any name fits: "our contractor, {company},"

Dates, times, quantities (formats get harder at higher difficulty):
- `{date}` `{date2}` `{date3}` calendar dates, always chronological date < date2 < date3.
  Render like "March 4" up to "Tuesday, March 4, 2026". Write "on {date}", "by {date2}".
- `{time}` `{time2}` clock times, time < time2. e.g. "9:30 a.m.". Write "at {time}".
- `{amount}` `{amount2}` dollar amounts INCLUDING the $ sign: "a fee of {amount}".
- `{number}` `{number2}` a small count (2 to ~60), written as a word or digits: "{number} volunteers".
- `{bignumber}` a large count (hundreds to thousands): "{bignumber} households".
- `{percent}` a percentage including the % sign: "an increase of {percent}".
- `{km}` a distance including the unit: "about {km} north of town".
- `{ref}` `{ref2}` a file/reference/case code, e.g. "A-2041" or "CV-2026-04173". Write "file {ref}".
- `{phone}` a phone number. `{email}` an email address (the sender's).

## Writing rules

- Canadian spelling (centre, neighbourhood, licence, colour, cheque, kilometres).
- PLAIN ASCII ONLY. Straight quotes ' and ". No em/en dashes (use commas,
  colons or " - " sparingly), no ellipsis character, no accented letters.
- Concrete and specific: real-sounding things, actions, objects and reasons.
  Avoid vague filler like "the situation was handled" or "details can be missed".
- Vary sentence length and structure; no stock phrases repeated across
  scenarios. Each scenario must be on a clearly different subject from the existing ones.
- Fictional organisations only. Nothing graphic, gory or upsetting; incidents
  are realistic but non-graphic (no deaths, no detailed injuries).
- Do not mention typing tests, CritiCall, or that this is practice material.

## Validate

Run: `node tools/validate-scenarios.js` (checks every scenario in scenarios.js)
Fix everything it reports, then re-run until it prints OK.
