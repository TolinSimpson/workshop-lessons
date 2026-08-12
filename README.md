# Computing Course

A static course site: click-through lesson slides and multiple-choice tests. No build tools, no dependencies.

Open `index.html` in a browser, or publish the repository with GitHub Pages
(Settings → Pages → source `main`, folder `/root`).

## Adding a section

Drop a new file in `content/`. That is the whole job.

File names control ordering and are named `UU-SS-slug.js`, where `UU` is the unit
number and `SS` the section number within it:

```
content/
  01-01-file-system-basics.js
  01-02-file-types.js
  02-01-programming-languages.js
```

Each file calls `section()` exactly once:

```js
section({
  unit: "Unit 1: Basic Computing",
  title: "Section 4: Networks",

  slides: [
    {
      title: "What is a network?",
      body: `<p>Two or more computers that can talk to each other.</p>`
    }
  ],

  questions: [
    {
      q: "What does a router do?",
      choices: ["Forwards traffic between networks", "Stores files", "Cools the CPU"],
      answer: 0    // index into choices, starting at 0
    }
  ]
});
```

`body` is HTML inside a backtick template string, so it can span multiple lines
and contain `<p>`, `<ul>`, `<table>`, `<pre>`, and `<code>`.

## Adding a unit

Same thing — use a new `unit:` title and the next number prefix. Sections are
grouped on the home page by their `unit` string, in file order. A new unit
appears automatically once one of its section files exists.

## After adding files

`manifest.js` lists the content files the page loads. Regenerate it with:

```
node build.js
```

Pushing to `main` also regenerates it automatically via
`.github/workflows/manifest.yml`, so adding a file through the GitHub web
interface needs no local step.

## Checking content

```
node check.js
```

Reports slide and question counts, and flags out-of-range answer indices,
duplicate choices, missing fields, and a stale manifest.
