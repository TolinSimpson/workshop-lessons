section({
  unit: "Unit 2: Intro to Computer Science",
  title: "Section 2: Good Code Practices",

  slides: [
    {
      title: "Code is read far more than it is written",
      body: `<p>A line of code is written once and then read dozens of times — by teammates, by graders, and mostly by <b>you in three weeks</b>, who remembers nothing.</p>
<p>So the goal is not "code that works". It is <b>code that works and can be understood</b>. Working-but-unreadable code is where bugs hide and projects stall.</p>
<p>The single cheapest readability win is <b>naming</b>:</p>
<pre>let x = 86400;                // what is this?
let secondsPerDay = 86400;    // ah.</pre>
<p>Name variables after what they <i>contain</i> (<code>playerScore</code>, not <code>data</code>) and functions after what they <i>do</i> (<code>calculateTotal</code>, not <code>doStuff</code>). If a thing is hard to name, that is often a hint the thing itself is confused.</p>`
    ,
      teach: "Say: Code is read far more than written — and mostly by future-you, who remembers nothing.\nAsk: Compare x = 86400 with secondsPerDay = 86400 — which one is kind?\nExtend: Share genuinely bad names you've met in real code (anonymized)."
    },
    {
      title: "Keep pieces small",
      body: `<p>A <b>function</b> should do one job, and its name should say what that job is. When a function does five jobs, understanding it means holding all five in your head at once — and a bug could be in any of them.</p>
<p>Useful rules of thumb (guidelines, not laws):</p>
<ul>
  <li>A function should <b>fit on one screen</b> — roughly 20–40 lines. Past that, look for a job inside it that deserves its own function.</li>
  <li>A file that takes minutes to scroll through wants splitting into a few focused files.</li>
  <li>If you struggle to name a function without using "and" — <code>loadAndSortAndDisplay</code> — it is three functions.</li>
</ul>
<p>Small pieces pay off when things break: a bug in a 10-line function has ten hiding places; in a 300-line function it has three hundred.</p>`
    ,
      teach: "Say: Small pieces, one job each, honest names. A bug in ten lines has ten hiding places.\nAsk: What does the name loadAndSortAndDisplay tell you is wrong?\nExtend: Refactor a deliberately bloated function on the projector if your group codes."
    },
    {
      title: "Don't repeat yourself (DRY)",
      body: `<p>If the same code is pasted in four places, every future change must be made four times — and the day someone updates three of them, the fourth becomes a lurking bug.</p>
<p><b>DRY — Don't Repeat Yourself</b>: when you notice real repetition, pull it into one function and call it from each place. One home, one fix.</p>
<p>The counterweight: <b>don't over-abstract</b>. Two things that merely <i>look</i> similar today may grow apart tomorrow, and code twisted to share what it shouldn't is worse than a little duplication. A common habit is the <b>rule of three</b>: copy once and note it; on the third copy, extract.</p>`
    ,
      teach: "Say: Copy-paste is a loan; DRY is paying it off. But over-abstracting is its own debt — hence the rule of three.\nAsk: You fixed a bug in three of four pasted copies. What happens next month?\nExtend: The tension between DRY and premature abstraction is a great senior-dev war-story slot."
    },
    {
      title: "Comments: why, not what",
      body: `<p>Bad comments narrate what the code already says:</p>
<pre>i = i + 1;  // add one to i     ← noise</pre>
<p>Good comments record what the code <b>cannot</b> say — the <i>why</i>:</p>
<pre>// Retry twice: the printer's Wi-Fi drops the
// first request about once an hour.
sendToPrinter(job, { retries: 2 });</pre>
<p>If a comment explains <i>what</i> tangled code does, the better fix is usually clearer code and no comment.</p>
<p>Related housekeeping: <b>delete dead code</b>. Commented-out blocks and never-called functions rot, confuse readers ("is this important?"), and version control already remembers everything you delete — that is what it is for.</p>`
    ,
      teach: "Say: Comments explain WHY, never WHAT — the code already says what.\nAsk: Which comment on this slide would you actually thank someone for?\nExtend: Show dead commented-out code from any real repo and discuss why version control makes it safe to delete."
    },
    {
      title: "Debugging is a method, not luck",
      body: `<p>Something is broken. The amateur move is changing random things and hoping. The method:</p>
<ol>
  <li><b>Reproduce it.</b> Find steps that make the bug happen every time. A bug you can't reproduce, you can't verify you've fixed.</li>
  <li><b>Read the error message. Actually read it.</b> It usually names the file, the line, and what went wrong. Half of debugging is people not reading it.</li>
  <li><b>Isolate.</b> Shrink the search space: cut the inputs in half, disable half the code — does the bug survive? Repeat. This is a binary search, and it corners a bug in a huge program in a handful of steps.</li>
  <li><b>Form a hypothesis.</b> "I think the total is wrong because the list is empty here." Then test <i>that</i>, not vibes.</li>
  <li><b>Change one thing at a time.</b> Change five things and the bug goes away — which one fixed it? Now you don't know, and four mystery changes remain in your code.</li>
</ol>
<p>And fix the <b>root cause</b>, not the symptom: forcing a negative total to zero hides the real bug that made it negative — it will be back wearing a different hat.</p>`
    ,
      teach: "Say: Debugging is a method, not luck — reproduce, read the error, isolate, hypothesize, change one thing.\nAsk: What's wrong with changing five things and the bug disappearing?\nExtend: Root-cause vs symptom deserves a story: the negative-total example, or one of your own."
    },
    {
      title: "The debugger's toolbox",
      body: `<p>Tools that make the method faster:</p>
<ul>
  <li><b>Print statements</b> — <code>console.log("total before tax:", total)</code>. Crude, universal, effective: print what a value <i>actually is</i> at a given moment, because the bug lives in the gap between what you assume and what is true.</li>
  <li><b>The browser console</b> (F12) — where JavaScript errors appear and your logs print. Rule from the HTML lessons onward: <b>develop with it open</b>; a blank console is how errors go unnoticed.</li>
  <li><b>"What changed?"</b> — code that worked yesterday and is broken today was changed. Diff against the last working version; the bug is in the diff. This is version control earning its keep.</li>
  <li><b>Rubber duck debugging</b> — explain the code, line by line, out loud, to anyone or anything (classically a rubber duck). Forcing the explanation forces you to check each assumption, and the bug surfaces mid-sentence surprisingly often.</li>
  <li><b>Search the exact error message</b> in quotes — as in the searching lesson. You are rarely the first.</li>
</ul>`
    ,
      teach: "Say: The toolbox: print statements, the console, diffs, the duck. Unglamorous, universal.\nAsk: Why does explaining code aloud to a rubber duck actually work?\nExtend: Demo F12 on a real site — errors, logs, the works. This console returns in every later web lesson."
    },
    {
      title: "Work in small steps",
      body: `<p>The riskiest way to build: write two hundred lines, run it once at the end, face an avalanche of errors with no idea which line caused what.</p>
<p>The professional rhythm is a loop: <b>write a little → run it → see it work → continue</b>. When something breaks, the culprit is in the last few lines — the smallest possible haystack.</p>
<ul>
  <li><b>Keep the program running.</b> Prefer many small changes that each keep it working over one heroic rewrite that breaks it for a week.</li>
  <li><b>Save known-good states.</b> Commit (or copy) whenever it works, so "undo to the last working version" is always one step away.</li>
  <li><b>Test the edges.</b> Code that handles the middle usually breaks at the ends: an empty list, zero, the very first and very last item, absurdly large input.</li>
</ul>
<p>All of this is one habit wearing different clothes: <b>never let the gap between "definitely works" and "hope it works" grow large.</b></p>`
    ,
      teach: "Say: Write a little, run it, repeat. Never let 'definitely works' drift far from 'hope it works'.\nAsk: You wrote 200 lines and ran them once — where's the bug? Contrast with 10-line steps.\nExtend: This is exactly the rhythm agents follow in Unit 3 — plant that seed now. Edge cases (empty list, zero) make good board examples."
    }
  ],

  questions: [
    {
      q: "Why does readable code matter if the program already works?",
      choices: [
        "It doesn't — working is all that counts",
        "Code is read many times after it is written; unreadable code is where bugs hide",
        "Readable code runs faster because the computer skips over well-named variables and tidy indentation while executing",
        "Compilers refuse to compile messy code and stop with a formatting error"
      ],
      answer: 1
    },
    {
      q: "Which variable name is best for storing the number of lives a player has left?",
      choices: [
        "x",
        "data",
        "livesRemaining",
        "myVariable2HoldingThePlayerNumber"
      ],
      answer: 2
    },
    {
      q: "A function is 250 lines long and its honest name would be `loadSortFilterAndDraw`. What does good practice suggest?",
      choices: [
        "Nothing — long functions are a sign of skill, since only experts can hold 250 lines of logic in their head at once",
        "Split it into smaller functions that each do one nameable job",
        "Remove the blank lines and comments so it looks shorter on screen",
        "Rename it to something vaguer so the four jobs are less obvious"
      ],
      answer: 1
    },
    {
      q: "Why are small functions easier to debug?",
      choices: [
        "They run faster",
        "A bug has few places to hide, and the one job is easy to check",
        "Small functions cannot contain bugs",
        "Debuggers only work on short functions and refuse to step through anything longer than one screen"
      ],
      answer: 1
    },
    {
      q: "What problem does DRY (Don't Repeat Yourself) prevent?",
      choices: [
        "Programs using too much memory, since every pasted copy doubles the RAM the program needs while running",
        "A change made in three of four pasted copies, leaving the fourth as a lurking bug",
        "Functions with long names",
        "Files being too small"
      ],
      answer: 1
    },
    {
      q: "What is the 'rule of three' about?",
      choices: [
        "Functions must have exactly three arguments",
        "Tolerate duplication at first; by the third copy, extract a shared function",
        "Every program needs exactly three files: one for input, one for logic, and one for output",
        "Bugs always come in threes"
      ],
      answer: 1
    },
    {
      q: "Which comment is actually useful?",
      choices: [
        "// add one to counter",
        "// loop over the list from the first element to the last element, one element at a time",
        "// Retry twice: the printer drops the first request about once an hour",
        "// this is a function"
      ],
      answer: 2
    },
    {
      q: "What should you do with a large block of commented-out code that has sat unused for months?",
      choices: [
        "Keep it forever in case it is needed, since code deleted from a file can never be recovered again",
        "Delete it — version control remembers it, and it only confuses readers",
        "Move it to the top of the file",
        "Uncomment it to see what happens"
      ],
      answer: 1
    },
    {
      q: "What is the FIRST step of methodical debugging?",
      choices: [
        "Rewrite the program from scratch",
        "Find steps that reproduce the bug reliably",
        "Change several things at once and re-run, hoping some combination of edits happens to fix it",
        "Blame the computer"
      ],
      answer: 1
    },
    {
      q: "Why change only one thing at a time while hunting a bug?",
      choices: [
        "Computers can only process one change",
        "If the bug disappears after five changes, you don't know which one fixed it",
        "It is faster to type",
        "Version control forbids committing more than one changed line at a time, so multiple edits get rejected"
      ],
      answer: 1
    },
    {
      q: "Your negative-price bug is 'fixed' by forcing any negative price to zero. Why is this bad?",
      choices: [
        "Zero is not a valid price, because every store is legally required to charge at least one cent",
        "It hides the symptom; the root cause of the negative price is still there",
        "It makes the code longer",
        "Negative prices are sometimes correct"
      ],
      answer: 1
    },
    {
      q: "Code worked yesterday and is broken today. The most efficient question is:",
      choices: [
        "'What changed since yesterday?' — diff against the last working version",
        "'Which computer is faulty?'",
        "'Should I rewrite it in another language?' — a fresh language guarantees yesterday's bug cannot follow",
        "'Can I ignore it?'"
      ],
      answer: 0
    },
    {
      q: "What is rubber duck debugging?",
      choices: [
        "A tool that automatically finds bugs by scanning your code and highlighting every faulty line for you",
        "Explaining your code aloud line by line, which forces you to check each assumption",
        "Testing software in the bath",
        "A type of antivirus scan"
      ],
      answer: 1
    },
    {
      q: "Why is 'write a little, run it, repeat' safer than writing 200 lines and running once?",
      choices: [
        "Long programs cannot be run once",
        "When something breaks, the cause is in the few lines you just wrote",
        "Running code frequently wears out the processor, so a program should only be run once when it is finished",
        "It isn't — one big run is always better"
      ],
      answer: 1
    },
    {
      q: "Where do bugs most often lurk in code that handles a list of items?",
      choices: [
        "Exactly in the middle of the list, where the computer's attention is weakest halfway through counting",
        "At the edges: an empty list, the first item, the last item, or huge input",
        "In the fifth item",
        "Nowhere, lists are always safe"
      ],
      answer: 1
    }
  ]
});
