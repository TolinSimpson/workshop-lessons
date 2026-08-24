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
    },
    {
      title: "The middle ground: bytecode and JIT",
      body: `<p>The compiled/interpreted split is a useful simplification, not a hard law. Most modern languages sit in between.</p>
<p><b>Java</b> and <b>C#</b> compile to <b>bytecode</b> — an intermediate form for a virtual machine (the JVM or .NET runtime), which then executes it. This buys compile-time checking plus "write once, run anywhere".</p>
<p><b>JIT (just-in-time) compilation</b> goes further: the runtime compiles hot code paths to machine code <i>while the program runs</i>. Modern JavaScript engines do this, which is why browser JavaScript is far faster than a naive line-by-line interpreter would be.</p>
<p>The honest statement: <b>compilation is a property of an implementation, not of a language.</b> There are C interpreters and Python compilers.</p>`
    },
    {
      title: "Language use cases",
      body: `<table>
  <tr><th>Language</th><th>Model</th><th>Typical use</th></tr>
  <tr><td>C / C++</td><td>Compiled</td><td>Operating systems, game engines, embedded devices, anything performance-critical</td></tr>
  <tr><td>Rust</td><td>Compiled</td><td>Systems work with memory safety enforced by the compiler</td></tr>
  <tr><td>Go</td><td>Compiled</td><td>Cloud services, networking tools, backend APIs</td></tr>
  <tr><td>Python</td><td>Interpreted</td><td>Data science, machine learning, automation, scripting, backends</td></tr>
  <tr><td>JavaScript</td><td>Interpreted / JIT</td><td>The only language browsers run natively; also servers via Node.js</td></tr>
  <tr><td>Java</td><td>Bytecode + JIT</td><td>Large enterprise systems, Android apps</td></tr>
  <tr><td>C#</td><td>Bytecode + JIT</td><td>Windows applications, Unity games, business backends</td></tr>
  <tr><td>SQL</td><td>Query language</td><td>Asking databases for data</td></tr>
  <tr><td>Swift / Kotlin</td><td>Compiled</td><td>iOS apps / Android apps</td></tr>
</table>
<p>There is no "best language" — only the right tool for the constraints. Firmware on a chip with 2 KB of memory rules out Python; a one-off data cleanup script rules out C++.</p>`
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
    }
  ],

  questions: [
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
      q: "Java and C# compile to bytecode. What does that mean?",
      choices: [
        "The code becomes an intermediate form that a virtual machine executes",
        "The code is encrypted so that nobody without a secret key can ever read or run it",
        "The code is converted directly to a Windows executable",
        "The code is compressed into a ZIP archive to save space"
      ],
      answer: 0
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
      q: "Your program runs with no error message but calculates the average wrongly. What kind of error is this?",
      choices: [
        "Syntax error",
        "Runtime error",
        "Logic error",
        "Compile error"
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
      q: "What does JIT (just-in-time) compilation do?",
      choices: [
        "Compiles the whole program before shipping it to users",
        "Compiles hot code paths to machine code while the program runs",
        "Prevents the program from ever needing to be compiled",
        "Converts already-compiled machine code back into the original source code"
      ],
      answer: 1
    },
    {
      q: "Generally, what is the trade-off between low-level and high-level languages?",
      choices: [
        "Low-level is faster to write but slower to run than high-level code",
        "High-level is faster to write but generally slower to run",
        "There is no real difference between them other than syntax",
        "High-level languages cannot be used for real applications"
      ],
      answer: 1
    }
  ]
});
