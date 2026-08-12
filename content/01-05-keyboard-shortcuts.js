section({
  unit: "Unit 1: Basic Computing",
  title: "Section 5: Keyboard Shortcuts",

  slides: [
    {
      title: "Why bother",
      body: `<p>A keyboard shortcut does with one keypress what a menu takes three clicks to do. They work the same in almost every program, so learning a handful pays off everywhere, not just in one app.</p>
<p>Shortcuts are usually written as keys joined with <code>+</code>, meaning "hold the first, press the second": <code>Ctrl+C</code> means hold <b>Ctrl</b> and tap <b>C</b>.</p>`
    },
    {
      title: "Universal editing shortcuts",
      body: `<p>These work in almost any program that accepts text, on almost any website:</p>
<ul>
  <li><code>Ctrl+C</code> — copy</li>
  <li><code>Ctrl+X</code> — cut</li>
  <li><code>Ctrl+V</code> — paste</li>
  <li><code>Ctrl+Z</code> — undo</li>
  <li><code>Ctrl+Y</code> (or <code>Ctrl+Shift+Z</code>) — redo</li>
  <li><code>Ctrl+A</code> — select all</li>
  <li><code>Ctrl+S</code> — save</li>
  <li><code>Ctrl+F</code> — find on this page/document</li>
</ul>
<p>On a Mac, swap <code>Ctrl</code> for <code>Cmd</code> — the letters stay the same.</p>`
    },
    {
      title: "Windows: managing windows",
      body: `<p>Shortcuts for juggling open programs:</p>
<ul>
  <li><code>Alt+Tab</code> — hold Alt, tap Tab to cycle through open windows, release to switch</li>
  <li><code>Alt+F4</code> — close the current window</li>
  <li><code>Windows key</code> — open the Start menu (tap it, then type to search for a program)</li>
  <li><code>Windows+D</code> — show the desktop, hiding every window</li>
  <li><code>Windows+E</code> — open File Explorer</li>
  <li><code>Windows+L</code> — lock the computer</li>
</ul>`
    },
    {
      title: "Windows: snapping and virtual desktops",
      body: `<p>Arranging windows without dragging:</p>
<ul>
  <li><code>Windows+Left</code> / <code>Windows+Right</code> — snap the current window to one half of the screen</li>
  <li><code>Windows+Up</code> — maximize; <code>Windows+Down</code> — restore or minimize</li>
  <li><code>Windows+Tab</code> — open Task View, showing every window and virtual desktop</li>
  <li><code>Windows+Ctrl+D</code> — create a new virtual desktop (a separate blank desktop to spread work across)</li>
</ul>
<p>Snapping two windows side by side is the fastest way to compare or drag content between them.</p>`
    },
    {
      title: "Windows: when something freezes",
      body: `<p>Two shortcuts for when a program stops responding:</p>
<ul>
  <li><code>Ctrl+Shift+Esc</code> — open Task Manager directly, where a frozen program can be selected and ended</li>
  <li><code>Ctrl+Alt+Delete</code> — open a menu with Task Manager, Lock, and Sign out</li>
</ul>
<p><code>Ctrl+Shift+Esc</code> is faster since it skips straight to Task Manager instead of showing a menu first.</p>`
    },
    {
      title: "Browser: tabs",
      body: `<p>A browser tab is just a window inside the window, and it has its own shortcuts:</p>
<ul>
  <li><code>Ctrl+T</code> — open a new tab</li>
  <li><code>Ctrl+W</code> — close the current tab</li>
  <li><code>Ctrl+Shift+T</code> — reopen the tab you just closed (works repeatedly, for several closed tabs)</li>
  <li><code>Ctrl+Tab</code> / <code>Ctrl+Shift+Tab</code> — switch to the next / previous tab</li>
  <li><code>Ctrl+1</code>...<code>Ctrl+8</code> — jump straight to the tab in that position</li>
</ul>`
    },
    {
      title: "Browser: navigation",
      body: `<p>Moving around within and between pages:</p>
<ul>
  <li><code>Ctrl+L</code> (or <code>Alt+D</code>) — jump to the address bar, ready to type</li>
  <li><code>Alt+Left</code> / <code>Alt+Right</code> — back / forward, same as the arrow buttons</li>
  <li><code>F5</code> (or <code>Ctrl+R</code>) — reload the page</li>
  <li><code>Ctrl+F5</code> — hard reload, ignoring the cached copy (see cache, previous section)</li>
  <li><code>Ctrl+N</code> — new browser window</li>
  <li><code>Ctrl+Shift+N</code> — new private/incognito window</li>
</ul>`
    }
  ],

  questions: [
    {
      q: "What does the notation Ctrl+C mean?",
      choices: [
        "Press Ctrl, release it, then press C",
        "Hold Ctrl and tap C at the same time",
        "Press C three times",
        "Press either Ctrl or C"
      ],
      answer: 1
    },
    {
      q: "Which shortcut pastes previously copied content?",
      choices: ["Ctrl+C", "Ctrl+X", "Ctrl+V", "Ctrl+Z"],
      answer: 2
    },
    {
      q: "You just deleted a paragraph by mistake. Fastest fix?",
      choices: ["Ctrl+A", "Ctrl+Z", "Ctrl+S", "Alt+F4"],
      answer: 1
    },
    {
      q: "On a Mac, what replaces Ctrl in most shortcuts?",
      choices: ["Alt", "Shift", "Cmd", "Fn"],
      answer: 2
    },
    {
      q: "What does Alt+Tab do on Windows?",
      choices: [
        "Closes the current window",
        "Cycles between open windows",
        "Opens the Start menu",
        "Locks the computer"
      ],
      answer: 1
    },
    {
      q: "Which shortcut snaps the current window to fill the left half of the screen?",
      choices: ["Windows+D", "Windows+E", "Windows+Left", "Windows+L"],
      answer: 2
    },
    {
      q: "A program has stopped responding. Fastest way to open Task Manager and end it?",
      choices: ["Ctrl+Alt+Delete", "Ctrl+Shift+Esc", "Alt+F4", "Windows+D"],
      answer: 1
    },
    {
      q: "What does Windows+D do?",
      choices: [
        "Opens File Explorer",
        "Shows the desktop by hiding every window",
        "Deletes the selected file",
        "Opens a new virtual desktop"
      ],
      answer: 1
    },
    {
      q: "You closed a browser tab by accident. How do you get it back?",
      choices: ["Ctrl+T", "Ctrl+Shift+T", "Ctrl+W", "Ctrl+N"],
      answer: 1
    },
    {
      q: "Which shortcut jumps straight to the browser's address bar?",
      choices: ["Ctrl+F", "Ctrl+L", "Ctrl+T", "Ctrl+S"],
      answer: 1
    },
    {
      q: "A page looks broken because of a stale cached copy. Which reload forces a fresh one?",
      choices: ["F5", "Ctrl+R", "Ctrl+F5", "Ctrl+W"],
      answer: 2
    },
    {
      q: "What does Alt+Left do in a browser?",
      choices: [
        "Opens a new tab",
        "Goes back to the previous page",
        "Closes the current tab",
        "Moves the window left"
      ],
      answer: 1
    }
  ]
});
