section({
  unit: "Unit 2: Intro to Computer Science",
  title: "Section 3: Website File Structure",

  slides: [
    {
      title: "A website is just files",
      body: `<p>A website is a folder of files sitting on a computer that is always on and connected to the internet. That computer is a <b>web server</b>.</p>
<p>When you visit a page, your browser asks the server for a file over <b>HTTP</b>, the server sends it back, and the browser renders it.</p>
<p>The three core file types:</p>
<ul>
  <li><b>.html</b> — structure and content</li>
  <li><b>.css</b> — appearance</li>
  <li><b>.js</b> — behaviour and interactivity</li>
</ul>`
    },
    {
      title: "The three-layer separation",
      body: `<p>A well-built page keeps the three concerns in separate files:</p>
<table>
  <tr><th>Layer</th><th>File</th><th>Job</th><th>Analogy</th></tr>
  <tr><td>Structure</td><td>HTML</td><td>What content exists and what it means</td><td>The skeleton</td></tr>
  <tr><td>Presentation</td><td>CSS</td><td>Colours, spacing, fonts, layout</td><td>The clothes</td></tr>
  <tr><td>Behaviour</td><td>JavaScript</td><td>Reacting to clicks, fetching data, changing the page</td><td>The muscles</td></tr>
</table>
<p>Why bother: one CSS file restyles a thousand pages at once, and the browser caches it after the first download.</p>`
    },
    {
      title: "index.html is special",
      body: `<p><b>index.html</b> is the default file a web server sends when a visitor requests a directory rather than a specific file.</p>
<pre>example.com/          → serves  /index.html
example.com/about/    → serves  /about/index.html</pre>
<p>This is a server convention, not an HTML rule. It is why nearly every site's homepage is named <code>index.html</code>, and why GitHub Pages requires one at the top of your repository.</p>
<p>Without an index file, a server either shows a bare directory listing or returns a 404.</p>`
    },
    {
      title: "A typical project layout",
      body: `<pre>my-site/
├── index.html          ← homepage
├── about.html
├── contact.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── images/
│   ├── logo.svg
│   └── hero.jpg
└── assets/
    └── brochure.pdf</pre>
<p>Conventions worth following:</p>
<ul>
  <li>Group by type — <code>css/</code>, <code>js/</code>, <code>images/</code></li>
  <li><b>Lowercase names, hyphens instead of spaces.</b> <code>my-page.html</code>, never <code>My Page.html</code> — spaces become <code>%20</code> in URLs and look broken</li>
  <li>Keep every file inside the project folder so relative links survive being moved or deployed</li>
</ul>`
    },
    {
      title: "Linking files together",
      body: `<p>Files reference each other with paths, exactly like a file system.</p>
<pre>&lt;link rel="stylesheet" href="css/style.css"&gt;
&lt;script src="js/main.js"&gt;&lt;/script&gt;
&lt;img src="images/logo.svg" alt="Company logo"&gt;
&lt;a href="about.html"&gt;About us&lt;/a&gt;</pre>
<p>Path forms:</p>
<ul>
  <li><code>css/style.css</code> — relative: from this file's folder</li>
  <li><code>../images/logo.svg</code> — up one folder, then into images</li>
  <li><code>/css/style.css</code> — root-relative: from the site root</li>
  <li><code>https://example.com/x.css</code> — absolute: another site entirely</li>
</ul>
<p>Two classic bugs: <b>case sensitivity</b> — <code>Logo.svg</code> works on your Windows machine and 404s on the Linux server — and using <code>C:\\Users\\me\\photo.jpg</code>, which only exists on your own computer.</p>`
    },
    {
      title: "Static vs dynamic sites",
      body: `<table>
  <tr><th></th><th>Static</th><th>Dynamic</th></tr>
  <tr><td>What the server does</td><td>Sends pre-written files as they are</td><td>Builds the page per request, often from a database</td></tr>
  <tr><td>Everyone sees</td><td>The same page</td><td>Personalised content</td></tr>
  <tr><td>Speed and cost</td><td>Very fast, very cheap</td><td>Slower, needs more server resources</td></tr>
  <tr><td>Security surface</td><td>Small</td><td>Larger — server code and a database to attack</td></tr>
  <tr><td>Examples</td><td>Portfolios, docs, blogs, this course site</td><td>Facebook, Amazon, online banking</td></tr>
</table>
<p><b>GitHub Pages hosts static sites only.</b> It serves files; it will not run PHP or a database for you. Dynamic-feeling behaviour is still possible by using JavaScript in the browser to call an external API.</p>`
    },
    {
      title: "Front end and back end",
      body: `<ul>
  <li><b>Front end (client-side)</b> — everything running in the visitor's browser: HTML, CSS, JavaScript. Fully visible to anyone who presses F12.</li>
  <li><b>Back end (server-side)</b> — code running on the server: databases, authentication, payments. Hidden from the user.</li>
</ul>
<p>Critical consequence: <b>never put secrets in front-end code.</b> API keys and passwords in JavaScript are readable by every visitor. "Hidden" fields and disabled buttons are trivially bypassed. All real validation must happen on the server.</p>`
    }
  ],

  questions: [
    {
      q: "Which file does a web server send by default when someone requests a directory?",
      choices: [
        "main.html",
        "index.html",
        "home.html",
        "default.css"
      ],
      answer: 1
    },
    {
      q: "Which layer is responsible for the appearance of a page?",
      choices: [
        "HTML",
        "CSS",
        "JavaScript",
        "HTTP"
      ],
      answer: 1
    },
    {
      q: "Why should web file names avoid spaces and capital letters?",
      choices: [
        "Spaces become %20 in URLs, and servers are usually case-sensitive so `Logo.svg` will 404",
        "Browsers refuse to load files longer than 8 characters",
        "It reduces file size",
        "Capital letters are reserved for CSS files"
      ],
      answer: 0
    },
    {
      q: "What does the path `../images/logo.svg` mean?",
      choices: [
        "Look in an images folder at the site root",
        "Go up one folder, then into the images folder",
        "Download the file from another website",
        "Look in a hidden folder"
      ],
      answer: 1
    },
    {
      q: "Which is the correct tag to link an external stylesheet?",
      choices: [
        "<script src=\"css/style.css\"></script>",
        "<style href=\"css/style.css\">",
        "<link rel=\"stylesheet\" href=\"css/style.css\">",
        "<css src=\"css/style.css\">"
      ],
      answer: 2
    },
    {
      q: "What defines a static website?",
      choices: [
        "It has no images or animation",
        "The server sends pre-written files as they are, the same for every visitor",
        "It cannot be viewed on mobile devices",
        "It must be rebuilt from a database on every request"
      ],
      answer: 1
    },
    {
      q: "Why must you never put an API key or password in front-end JavaScript?",
      choices: [
        "It would slow the page down",
        "JavaScript cannot store text values",
        "Front-end code is fully visible to every visitor who opens developer tools",
        "Browsers automatically delete them"
      ],
      answer: 2
    },
    {
      q: "Your page works locally but images break once uploaded to a Linux server. Most likely cause?",
      choices: [
        "The server does not support images",
        "A filename case mismatch — `Logo.svg` referenced as `logo.svg` or vice versa",
        "Images must always be JPEG on servers",
        "The HTML file is too large"
      ],
      answer: 1
    },
    {
      q: "Which of these can GitHub Pages NOT do?",
      choices: [
        "Serve HTML, CSS, and JavaScript files",
        "Host a static portfolio site",
        "Run server-side PHP with a database",
        "Serve images and PDFs"
      ],
      answer: 2
    },
    {
      q: "What is the main practical benefit of putting CSS in a separate file rather than inside each page?",
      choices: [
        "It makes the CSS run faster on the server",
        "One file restyles every page at once, and the browser caches it after the first download",
        "It is required by HTML5",
        "It encrypts the styles"
      ],
      answer: 1
    }
  ]
});
