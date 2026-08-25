section({
  unit: "Unit 3: Using AI Tools",
  title: "Section 5: Agentic Coding with Claude and Zed",

  slides: [
    {
      title: "From chatbot to agent",
      body: `<p>Everything so far has been chat: you ask, the model answers, you copy the answer out. An <b>agent</b> goes further — you give it a goal, and it works toward that goal by itself: reading your files, writing code, running commands, seeing the errors, and fixing them, in a loop, until the job is done or it needs your input.</p>
<p>This is called <b>agentic coding</b>, and it is how software is increasingly built: you describe <i>what</i> you want, the agent handles most of the <i>how</i>, and you review and steer. Unit 2's knowledge — files, HTML, good code practices — is what lets you steer well.</p>`
    },
    {
      title: "Our tools: Claude and Zed",
      body: `<p>The setup this course uses:</p>
<ul>
  <li><b>Claude</b> — Anthropic's AI model family, currently the strongest at agentic coding. The chatbot at claude.ai is one way to use it; <b>Claude Code</b> is the agent version, which can work directly in your project folder.</li>
  <li><b>Zed</b> (zed.dev) — a fast, free code editor with an <b>Agent Panel</b> built in. Claude runs inside it, sees your project, and proposes changes you review right in the editor.</li>
</ul>
<p>Editor plus agent is the working pattern: the editor is where <i>you</i> read and adjust code; the agent panel is where you describe work and review what the agent did. Same skills apply in other editors (VS Code, Cursor) — the tools differ, the workflow doesn't.</p>`
    },
    {
      title: "Getting set up",
      body: `<ol>
  <li>Download Zed from <b>zed.dev</b> and install it (remember Unit 1: official source, check the domain).</li>
  <li>Open your project folder in Zed — <code>File → Open Folder</code>. The agent can only see what's inside the folder you opened.</li>
  <li>Open the <b>Agent Panel</b> and add Claude as the agent, signing in with your Claude account.</li>
  <li>Type what you want built or fixed, in plain language, and watch it work.</li>
</ol>
<p>Everything is a normal folder of normal files (Unit 1) — the agent edits the same <code>.html</code>, <code>.css</code>, and <code>.js</code> files you could open yourself. No magic location, no lock-in.</p>`
    },
    {
      title: "Describing the work",
      body: `<p>Everything from the prompting section applies, plus one big rule for agents: <b>give the full task up front</b>. Agents do their best work from one well-specified request, not twenty vague ones.</p>
<p>Weak: <i>"make a website"</i>. Strong:</p>
<p><i>"Build a one-page site for my bakery: name, opening hours, a photo gallery, and a contact section. Plain HTML/CSS/JS, no frameworks. Warm colors. Must look good on a phone."</i></p>
<p>Cover: <b>what</b> to build, <b>constraints</b> (tools, files, what not to touch), and <b>what done looks like</b>. When fixing a bug, paste the exact error message and say how to reproduce it — the same habit as searching an error, aimed at an agent that can actually fix it.</p>`
    },
    {
      title: "Reviewing what it did",
      body: `<p>The agent proposes changes; Zed shows every edit as a <b>diff</b> — old code and new code side by side — which you can accept or reject piece by piece. This review step is your job, and it is the whole difference between using an agent and being used by one:</p>
<ul>
  <li><b>Read the changes.</b> You don't have to understand every line, but you should understand what was changed and why — ask the agent to explain anything unclear.</li>
  <li><b>Run the result.</b> Open the page, click the buttons, try the edge cases (Unit 2: empty input, first and last item).</li>
  <li><b>Work in small steps.</b> One feature at a time, verified working, then the next — the same rhythm as Unit 2's good code practices, now with the agent doing the typing.</li>
</ul>`
    },
    {
      title: "When the agent gets stuck or it breaks",
      body: `<p>Agents are strong but not infallible. The debugging method from Unit 2 still runs the show — you just delegate the legwork:</p>
<ul>
  <li><b>Paste the evidence.</b> Error message, what you expected, what happened instead. "It doesn't work" gets guesses; evidence gets fixes.</li>
  <li><b>One change at a time.</b> If a big agent-written change broke things, ask it to undo and redo the work in smaller verified steps.</li>
  <li><b>Keep known-good versions.</b> Save or commit whenever the project works, so any experiment is one undo away. Agents make this <i>more</i> important, not less — they can change many files at once.</li>
  <li><b>Fresh start beats long argument.</b> A long, tangled agent session drifts, like a long chat. Start a new session and restate the task cleanly.</li>
</ul>`
    },
    {
      title: "Judgment, cost, and ownership",
      body: `<p>The Unit 3 rules, applied to code:</p>
<ul>
  <li><b>You own what ships.</b> Code you publish is yours, whoever typed it. If it leaks data or breaks for users, "the AI wrote it" is not a defense — review is not optional.</li>
  <li><b>Never paste secrets.</b> Passwords, API keys, and customer data don't go in prompts — and never into front-end code (Unit 2: everything in the browser is public).</li>
  <li><b>Agents cost money by the token.</b> Clear, complete requests that succeed on the first pass cost less than long flailing sessions. Specificity is now a budgeting skill.</li>
  <li><b>Understanding compounds.</b> Every diff you actually read teaches you the codebase. People who only accept-all stay dependent; people who read become the engineer the agent works for.</li>
</ul>`
    }
  ],

  questions: [
    {
      q: "What makes a coding agent different from a chatbot?",
      choices: [
        "It answers questions about code much faster than an ordinary general-purpose chatbot ever could",
        "It works toward a goal itself — reading files, editing, running, and fixing in a loop",
        "It only works on code and refuses all other questions",
        "It writes code that never contains any bugs"
      ],
      answer: 1
    },
    {
      q: "In our setup, what role does Zed play?",
      choices: [
        "It hosts the finished website on the internet once the agent finishes building it",
        "It is the AI model that writes the code",
        "It is the editor where you review code and run the agent in its Agent Panel",
        "It converts code between programming languages"
      ],
      answer: 2
    },
    {
      q: "What can the agent see when you open a project in Zed?",
      choices: [
        "The files inside the folder you opened",
        "Every file on your entire computer",
        "Only files you copy-paste into the chat",
        "Only files created by the agent itself"
      ],
      answer: 0
    },
    {
      q: "Which request will an agent handle best?",
      choices: [
        "\"Make a website\" followed by a stream of corrections as problems appear one by one",
        "\"Do your best, surprise me, you know what looks good\"",
        "Twenty separate one-line messages, one per detail",
        "One complete request covering the goal, constraints, and what done looks like"
      ],
      answer: 3
    },
    {
      q: "What is a diff?",
      choices: [
        "A side-by-side view of old code and new code showing what changed",
        "An error message produced when two programs try to change the same file at once",
        "The difference in price between AI coding tools",
        "A backup copy of the project made before each session"
      ],
      answer: 0
    },
    {
      q: "The agent finished a change. What should you do before asking for the next feature?",
      choices: [
        "Immediately publish the project while the change is fresh",
        "Read the changes and run the result to confirm it works",
        "Restart the computer to load the new code",
        "Delete the old files so they cannot conflict"
      ],
      answer: 1
    },
    {
      q: "A bug report to an agent works best when it includes:",
      choices: [
        "A polite apology for bothering it",
        "The words \"it doesn't work\" repeated for emphasis",
        "The exact error message and steps to reproduce the problem",
        "Your best guess about which line number is probably causing the whole problem"
      ],
      answer: 2
    },
    {
      q: "Why do known-good saved versions matter MORE with agents?",
      choices: [
        "Agents delete backups automatically as they work",
        "Saved versions make the agent generate code faster",
        "Agents refuse to start working in any project that has no version control set up",
        "An agent can change many files at once, so a safe undo point is essential"
      ],
      answer: 3
    },
    {
      q: "A long agent session has drifted and keeps making confused changes. Best move?",
      choices: [
        "Start a fresh session and restate the task cleanly",
        "Keep correcting it in the same session until it recovers",
        "Switch to writing all the code by hand permanently",
        "Ask the same question again in all capital letters"
      ],
      answer: 0
    },
    {
      q: "Why should API keys and passwords stay out of prompts and front-end code?",
      choices: [
        "Secrets make the code run measurably slower",
        "Prompts may be stored, and front-end code is visible to every visitor",
        "Agents are legally forbidden from reading passwords",
        "API keys expire immediately the moment any AI model has ever seen them"
      ],
      answer: 1
    },
    {
      q: "Who is responsible for AI-written code you publish?",
      choices: [
        "The AI company that trained the model",
        "Nobody — machine-written code carries no liability",
        "You — shipped code is yours regardless of who typed it",
        "The editor vendor whose tool actually applied the changes to disk"
      ],
      answer: 2
    }
  ]
});
