# Computing Course

A static course site: click-through lesson slides and multiple-choice tests. No build tools, no dependencies.

Open `index.html` in a browser, or publish the repository with GitHub Pages
(Settings → Pages → source `main`, folder `/root`).

**Teacher edition:** `teacher.html` renders the same lessons plus each slide's
`teach` notes (Say / Ask / Extend — read-aloud framing, a class discussion break,
and an insertion point for the teacher's own advanced material). It is not linked
from the student site; share the URL only with instructors. Note this is
obscurity, not security — the page is publicly reachable by anyone with the link.

## URLs

With GitHub Pages enabled on this repository:

| Page | URL |
|---|---|
| Student site | `https://tolinsimpson.github.io/workshop-lessons/` |
| Teacher edition | `https://tolinsimpson.github.io/workshop-lessons/teacher.html` |

Locally, serve the folder (`npx serve` or `python -m http.server`) and open
`http://localhost:PORT/` and `http://localhost:PORT/teacher.html`. Opening the
files directly (`file://`) also works, but presenter sync (below) may not.

## Teaching with a projector (HDMI)

Goal: the class sees the plain lesson on the projector; you see the same slide
plus the teaching prompts on your laptop screen.

1. Plug in HDMI, then set the projector as an **extended** display, not a
   mirror: press `Windows+P` and choose **Extend**.
2. Open **two browser windows** (same browser):
   - Window 1 — the **student** URL. Move it to the projector (`Windows+Shift+Right`
     until it lands there) and press `F11` for fullscreen.
   - Window 2 — the **teacher** URL (`teacher.html`), kept on your laptop screen.
3. Navigate only in the teacher window. **Presenter sync** makes the student
   window follow automatically — every slide change you make on your screen
   updates the projector. Arrow keys work for next/previous slide.

Sync details: it uses the browser's BroadcastChannel, so both windows must be in
the same browser and served from the same address (both on the Pages URL, or
both on the same localhost port). If sync isn't working — e.g. pages opened via
`file://` — just advance both windows manually; the student page is one
`ArrowRight` behind.

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
      body: `<p>Two or more computers that can talk to each other.</p>`,
      teach: "Say: A network is just computers talking.\nAsk: What's the smallest network you own?\nExtend: Sketch the classroom's network on the board."
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
