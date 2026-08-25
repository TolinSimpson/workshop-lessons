section({
  unit: "Unit 2: Intro to Computer Science",
  title: "Section 1: Programming Languages",

  slides: [
    {
      title: "What a programming language is",
      body: `<p>A processor only executes <b>machine code</b> — raw binary instructions. Writing that by hand is unbearable.</p>
<p>A <b>programming language</b> is a human-readable notation with strict rules. A translator program turns it into machine code.</p>
<p>Languages sit on a spectrum:</p>
<ul>
  <li><b>Low-level</b> (Assembly, C) — close to the hardware, you manage memory yourself, maximum control and speed</li>
  <li><b>High-level</b> (Python, JavaScript) — close to human thinking, memory managed for you, faster to write</li>
</ul>
<p>Higher level generally means faster to develop and slower to run. Lower level means the reverse.</p>`
    ,
      teach: "Say: We're crossing from using computers to instructing them. A language is just strict notation a translator turns into machine code.\nAsk: Why can't we just write instructions in English?\nExtend: Show one line of assembly next to one line of Python for shock value."
    },
    {
      title: "Compiled languages",
      body: `<p>A <b>compiler</b> translates your entire source file into machine code <i>before</i> the program is ever run. The output is an executable — a <code>.exe</code> on Windows — that runs on its own.</p>
<pre>source code  →  [compiler]  →  executable  →  run</pre>
<p><b>Advantages</b></p>
<ul>
  <li>Fast at run time — translation already happened</li>
  <li>Many errors are caught at compile time, before users see them</li>
  <li>Ships without the source code, and without needing the language installed</li>
</ul>
<p><b>Disadvantages</b></p>
<ul>
  <li>You must recompile after every change — slower edit-test cycle</li>
  <li>The executable is platform-specific; a Windows build will not run on macOS</li>
</ul>
<p>Examples: <b>C, C++, Rust, Go, Swift</b></p>`
    ,
      teach: "Say: Compiled means translated fully in advance — like publishing a book.\nAsk: Why would translation-in-advance make the program fast?\nExtend: If you know C, compile hello.c live and show the .exe runs alone."
    },
    {
      title: "Interpreted languages",
      body: `<p>An <b>interpreter</b> reads and executes the source code line by line, at run time. There is no separate build step.</p>
<pre>source code  →  [interpreter reads and runs it]</pre>
<p><b>Advantages</b></p>
<ul>
  <li>Instant edit-and-run cycle; excellent for experimenting</li>
  <li>The same source runs anywhere the interpreter exists — good portability</li>
  <li>Flexible at run time</li>
</ul>
<p><b>Disadvantages</b></p>
<ul>
  <li>Slower — translation happens repeatedly while running</li>
  <li>Errors like typos in a rarely-used branch surface only when that line finally runs</li>
  <li>The user needs the interpreter installed, and receives your source code</li>
</ul>
<p>Examples: <b>Python, JavaScript, Ruby, PHP</b></p>`
    ,
      teach: "Say: Interpreted means translated live, line by line — like a live interpreter at a speech.\nAsk: What's the trade? (Fast to change, slower to run, needs the interpreter installed.)\nExtend: Run two lines of Python in a REPL to show the instant edit-run loop."
    },
    {
      title: "Language use cases",
      body: `<table>
  <tr><th>Language</th><th>Model</th><th>Typical use</th></tr>
  <tr><td>Python</td><td>Interpreted</td><td>Data science, AI, automation, scripting — and the language AI tools most often write for you</td></tr>
  <tr><td>JavaScript</td><td>Interpreted</td><td>The only language browsers run natively; also servers via Node.js</td></tr>
  <tr><td>C / C++</td><td>Compiled</td><td>Operating systems, game engines, anything performance-critical</td></tr>
  <tr><td>Java / C#</td><td>In between</td><td>Enterprise systems, Android apps / Windows apps, Unity games</td></tr>
  <tr><td>SQL</td><td>Query language</td><td>Asking databases for data</td></tr>
  <tr><td>Swift / Kotlin</td><td>Compiled</td><td>iOS apps / Android apps</td></tr>
</table>
<p>There is no "best language" — only the right tool for the constraints. For this course's path, the two that matter are <b>JavaScript</b> (it runs in every browser) and <b>Python</b> (the default for automation and AI work).</p>`
    ,
      teach: "Say: There is no best language — the table is a map of what tools fit what jobs.\nAsk: Given our course path — websites and AI — which two rows matter most to us?\nExtend: Share what languages your own projects or industry actually use and why."
    },
    {
      title: "Markup is not programming",
      body: `<p>A common exam trap. <b>HTML and CSS are not programming languages.</b></p>
<ul>
  <li><b>HTML</b> is a <b>markup language</b> — it describes structure and meaning. It has no logic, no variables, no loops, no decisions.</li>
  <li><b>CSS</b> is a <b>style sheet language</b> — it describes appearance.</li>
  <li><b>JavaScript</b> <i>is</i> a programming language — it has variables, conditions, loops, and functions, so it can compute and decide.</li>
</ul>
<p>The dividing line is the ability to express logic and computation.</p>`
    ,
      teach: "Say: HTML is structure, CSS is looks, JavaScript is behaviour — only one of these is a programming language.\nAsk: What can JavaScript do that HTML can't? (Decide, repeat, calculate.)\nExtend: A classic exam trap worth drilling; advanced groups can discuss whether SQL counts."
    },
    {
      title: "Syntax, source code, and errors",
      body: `<p><b>Source code</b> is what you write. <b>Syntax</b> is the grammar the language demands.</p>
<p>Three error types you will meet constantly:</p>
<ul>
  <li><b>Syntax error</b> — the code is not valid in the language, like a missing bracket. Caught before or at the moment of running.</li>
  <li><b>Runtime error</b> — valid code that fails while executing, like dividing by zero or opening a file that does not exist. The program crashes.</li>
  <li><b>Logic error</b> — the code runs perfectly and produces the wrong answer. No error message appears. The hardest kind to find.</li>
</ul>
<p>Compiled languages catch more mistakes at compile time. Interpreted languages tend to find them when the user does.</p>`
    ,
      teach: "Say: Three kinds of broken: won't run, crashes while running, runs but wrong. The last is the sneakiest.\nAsk: Which error type has no error message at all?\nExtend: Show one of each live in a browser console if the group is ready."
    }
  ],

  questions: [
    {
      q: "Generally, what is the trade-off between low-level and high-level languages?",
      choices: [
        "Low-level is faster to write but slower to run than high-level code",
        "High-level is faster to write but generally slower to run",
        "There is no real difference between them other than syntax",
        "High-level languages cannot be used for real applications"
      ],
      answer: 1
    },
    {
      q: "What does a compiler do?",
      choices: [
        "Translates all source code into machine code before the program runs",
        "Executes the source code one line at a time, translating each line while the program runs",
        "Formats the code so it is easier to read",
        "Compresses source code into a smaller file"
      ],
      answer: 0
    },
    {
      q: "Which set contains only compiled languages?",
      choices: [
        "Python, JavaScript, Ruby",
        "C, C++, Rust, Go",
        "HTML, CSS, SQL",
        "PHP, Python, Perl"
      ],
      answer: 1
    },
    {
      q: "Why can't you take a Windows `.exe` and run it directly on macOS?",
      choices: [
        "The file is compressed differently",
        "macOS blocks all downloaded files",
        "The executable is machine code targeted at a different platform",
        "The file extension is wrong; simply renaming `.exe` to `.app` would let macOS run it"
      ],
      answer: 2
    },
    {
      q: "Which is a genuine advantage of interpreted languages?",
      choices: [
        "They always run faster than compiled programs because no translation step is needed",
        "Instant edit-and-run cycle with no separate build step",
        "They never produce errors",
        "They hide your source code from the user"
      ],
      answer: 1
    },
    {
      q: "Which task is Python most commonly chosen for?",
      choices: [
        "Writing an operating system kernel that talks directly to hardware",
        "Firmware for a microcontroller with 2 KB of memory",
        "Data science, machine learning, and automation",
        "Styling web pages"
      ],
      answer: 2
    },
    {
      q: "Which language do web browsers run natively?",
      choices: [
        "Python",
        "Java (through browser applets)",
        "C++",
        "JavaScript"
      ],
      answer: 3
    },
    {
      q: "Is HTML a programming language?",
      choices: [
        "Yes — it runs in the browser",
        "No — it is a markup language with no logic, variables, or loops",
        "Yes — it is compiled into machine code before being sent to the browser",
        "No — it is a style sheet language"
      ],
      answer: 1
    },
    {
      q: "Your program runs with no error message but calculates the average wrongly. What kind of error is this?",
      choices: [
        "Syntax error",
        "Runtime error",
        "Logic error",
        "Compile error"
      ],
      answer: 2
    }
  ]
});
