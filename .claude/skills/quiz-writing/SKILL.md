---
name: quiz-writing
description: Rules for writing or editing quiz questions in content/*.js — enforce answer-length balance (correct answer must not be guessable as the longest choice), slide-order question sequencing, and the check.js verification step. Use whenever adding, editing, or reviewing section questions or slides in this course.
---

# Quiz Writing Rules

Apply these rules whenever creating or editing `questions` arrays in `content/*.js`.

## 1. Length balance — the correct answer must not stand out

The natural failure mode: correct answers get written carefully and completely, wrong
answers get written lazily and short. Students then pass tests by picking the longest
option. Prevent it while writing, not after:

- After drafting each question, compare choice lengths. If the correct choice is the
  strictly longest, either **trim the correct answer** or **extend one distractor**
  past it. Prefer whichever keeps the question natural.
- Distractors must be plausible and grammatical at full length — pad with specificity
  ("...for every hundred views", "...in most countries"), never with filler nonsense.
- Do not overcorrect into always-shortest — that is the same tell reversed. Target:
  the correct answer's length rank is roughly uniform across a section.
- Do not let answer position cluster either — spread `answer` indexes across 0–3
  within each section.

## 2. Order questions to follow the slides

Questions are revision, and revision follows teaching order:

- Sequence each section's questions in the same order as the slides that teach them.
- Concept-definition questions come before application/scenario questions on the
  same concept.
- A question must never require material from a later slide or later section.

## 3. Sections build on each other

- Within a unit, a section may reference earlier sections (and earlier units), never
  later ones. If a new section is inserted, renumber titles AND check cross-references
  in other sections' slide text (grep the unit for "Section" and "previous section").
- Summary slides that enumerate a unit's sections must be updated when sections are
  added, removed, or reordered.

## 4. Always verify

After any content change, run from the repo root:

```
node build.js && node check.js
```

`check.js` enforces structure plus the bias limits: correct-is-strictly-longest must
be ≤50% per section and ≤30% across the whole course. If it fails, rebalance choices
per rule 1 — never raise the thresholds to make a failure pass.
