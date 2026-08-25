---
name: section-writing
description: Rules for writing, inserting, or reordering lesson sections in content/*.js so units stay in a logical order where concepts build on each other. Use whenever creating a new section, adding a unit, renumbering sections, or restructuring a unit's flow.
---

# Section Writing Rules

Apply these rules whenever adding, moving, or restructuring sections (`content/UU-SS-slug.js`).

## 1. Prerequisites before dependents

Before writing a section, list the concepts it relies on. Every one must already be
taught — in an earlier section of the same unit, or an earlier unit. If a needed
concept isn't taught yet, either add it to an earlier section or open the new section
with a short plain-language introduction of it.

- Never use a term from a later section. If tempted, the order is wrong — move the
  section, not the term.
- Forward references are allowed only as one-line teasers ("covered in the next
  section"), never as load-bearing explanations.

## 2. Unit shape: concrete → abstract → applied

Order a unit's sections so each answers a question the previous one raised:

1. **Orientation** — what this thing is, in plain words, with everyday examples
2. **Mechanics** — how it works, the vocabulary, the moving parts
3. **Practice** — using it: workflows, tools, hands-on habits
4. **Judgment** — pitfalls, safety, ethics, when-not-to
5. **Synthesis** — a closing section (or closing slide) that assembles the unit into
   one system and recaps each section

The synthesis always comes **last**. If a new section is added after the synthesis
was written, either move the new section before it or update the synthesis to
include it — never leave a "summary of the unit" that omits a section.

## 3. Within a section, same discipline

- Slide 1 defines the thing and why the learner should care. No mechanics before the
  definition.
- Each slide builds on the previous; a slide may reference earlier slides freely,
  later slides only as a teaser.
- End practical sections with the habit or workflow the learner should walk away with.

## 4. Cross-linking is deliberate, backwards, and named

Tie new material to what the learner already has — "(Unit 1: file formats)",
"the debugging method from Unit 2" — it strengthens both. But:

- Link **backwards only**, and name the source ("Unit 2's good code practices"),
  don't vaguely gesture ("as we saw before").
- When teaching for a specific downstream goal (e.g. AI tools, marketing), every
  earlier unit's content should earn its place by being used later. If a concept is
  never referenced again and has no practical use, cut it (see the course's
  practical-usefulness bar).

## 5. Inserting or reordering sections — the checklist

Filenames control order (`UU-SS-slug.js`), and titles carry numbers, so both must move:

1. Rename files so `SS` matches the intended order (`git mv`, temp name if swapping).
2. Update each moved file's `title: "Section N: ..."` to match its filename.
3. Grep the unit for `Section`, `previous section`, `next section`, and unit-summary
   slide lists; fix every reference the move broke.
4. Questions stay with their section; check their order still follows the slides
   (see the quiz-writing skill).
5. Run `node build.js && node check.js` — the manifest is generated from filenames
   and must be rebuilt after any rename.

## 6. Naming and scope

- One topic per section, nameable in a few words; if the title needs "and" twice,
  split it.
- 5–10 slides per section, ~7 typical. Shorter is fine; past 10, split.
- File slug matches the title topic (`03-05-agentic-coding.js` →
  "Agentic Coding..."), lowercase, hyphens.
