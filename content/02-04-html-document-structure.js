section({
  unit: "Unit 2: Intro to Computer Science",
  title: "Section 4: HTML Document Structure",

  slides: [
    {
      title: "Elements, tags, and attributes",
      body: `<p>HTML marks up content with <b>elements</b>. Most have an opening tag, content, and a closing tag:</p>
<pre>&lt;p&gt;This is a paragraph.&lt;/p&gt;
 ↑        ↑                ↑
opening  content        closing</pre>
<p>Some are <b>void elements</b> with no content and no closing tag: <code>&lt;img&gt;</code>, <code>&lt;br&gt;</code>, <code>&lt;hr&gt;</code>, <code>&lt;input&gt;</code>, <code>&lt;meta&gt;</code>.</p>
<p><b>Attributes</b> add information inside the opening tag:</p>
<pre>&lt;a href="about.html" class="nav-link"&gt;About&lt;/a&gt;
&lt;img src="cat.jpg" alt="A ginger cat"&gt;</pre>
<p>Elements <b>nest</b> and must close in reverse order. <code>&lt;b&gt;&lt;i&gt;text&lt;/i&gt;&lt;/b&gt;</code> is correct; <code>&lt;b&gt;&lt;i&gt;text&lt;/b&gt;&lt;/i&gt;</code> is not.</p>`
    },
    {
      title: "The skeleton of every page",
      body: `<pre>&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
  &lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;
    &lt;title&gt;My Page&lt;/title&gt;
    &lt;link rel="stylesheet" href="css/style.css"&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Hello&lt;/h1&gt;
    &lt;p&gt;Welcome to my page.&lt;/p&gt;
    &lt;script src="js/main.js"&gt;&lt;/script&gt;
  &lt;/body&gt;
&lt;/html&gt;</pre>
<p>Memorise this shape. Every page you ever write starts here.</p>`
    },
    {
      title: "&lt;!DOCTYPE html&gt; and &lt;html&gt;",
      body: `<p><b>&lt;!DOCTYPE html&gt;</b> is the first line of the file. It is not a tag — it tells the browser to use modern standards mode.</p>
<p>Leave it out and browsers fall back to <b>quirks mode</b>, emulating 1990s bugs for compatibility. Your layout will break in strange ways.</p>
<p><b>&lt;html&gt;</b> is the <b>root element</b>. Everything else lives inside it, and it contains exactly two children: <code>&lt;head&gt;</code> and <code>&lt;body&gt;</code>.</p>
<p>The <code>lang="en"</code> attribute declares the page language. Screen readers use it to choose the correct pronunciation, and translation tools use it to detect the source language.</p>`
    },
    {
      title: "The &lt;head&gt;: information about the page",
      body: `<p><b>&lt;head&gt;</b> holds <b>metadata</b> — information <i>about</i> the document. Almost nothing here is displayed on the page itself.</p>
<ul>
  <li><code>&lt;meta charset="UTF-8"&gt;</code> — character encoding. Omit it and accented characters and emoji turn to garbage.</li>
  <li><code>&lt;meta name="viewport" ...&gt;</code> — makes the page scale properly on phones. Without it, mobile browsers render a desktop-width page zoomed out.</li>
  <li><code>&lt;title&gt;</code> — text in the browser tab, the bookmark name, and the headline in search results. The one head element users actually see.</li>
  <li><code>&lt;link rel="stylesheet"&gt;</code> — attaches CSS</li>
  <li><code>&lt;meta name="description"&gt;</code> — the summary snippet search engines display</li>
  <li><code>&lt;link rel="icon"&gt;</code> — the favicon</li>
</ul>`
    },
    {
      title: "The &lt;body&gt;: what the user sees",
      body: `<p><b>&lt;body&gt;</b> contains all visible content — text, images, links, buttons, forms, video.</p>
<p>Common content elements:</p>
<ul>
  <li><code>&lt;h1&gt;</code> through <code>&lt;h6&gt;</code> — headings, most to least important</li>
  <li><code>&lt;p&gt;</code> — paragraph</li>
  <li><code>&lt;a href="..."&gt;</code> — link (the "anchor" element)</li>
  <li><code>&lt;img src="..." alt="..."&gt;</code> — image</li>
  <li><code>&lt;ul&gt;</code> / <code>&lt;ol&gt;</code> with <code>&lt;li&gt;</code> — unordered and ordered lists</li>
  <li><code>&lt;table&gt;</code>, <code>&lt;tr&gt;</code>, <code>&lt;th&gt;</code>, <code>&lt;td&gt;</code> — tables</li>
  <li><code>&lt;form&gt;</code>, <code>&lt;input&gt;</code>, <code>&lt;button&gt;</code> — user input</li>
  <li><code>&lt;div&gt;</code> and <code>&lt;span&gt;</code> — generic containers with no meaning of their own</li>
</ul>
<p>Use <b>one <code>&lt;h1&gt;</code> per page</b> and do not skip heading levels — <code>&lt;h1&gt;</code> then <code>&lt;h3&gt;</code> confuses screen readers and search engines. Headings convey outline, not font size; CSS handles size.</p>`
    },
    {
      title: "Semantic HTML",
      body: `<p><b>Semantic</b> elements describe what content <i>is</i>, not how it looks. They replace a page built from anonymous <code>&lt;div&gt;</code>s.</p>
<ul>
  <li><code>&lt;header&gt;</code> — introductory content, logo, site title</li>
  <li><code>&lt;nav&gt;</code> — navigation links</li>
  <li><code>&lt;main&gt;</code> — the primary content, one per page</li>
  <li><code>&lt;section&gt;</code> — a thematic grouping</li>
  <li><code>&lt;article&gt;</code> — content that stands alone, like a blog post</li>
  <li><code>&lt;aside&gt;</code> — related but secondary content, a sidebar</li>
  <li><code>&lt;footer&gt;</code> — closing content, copyright, contact</li>
</ul>
<p>Why it matters: screen readers let users jump straight to <code>&lt;main&gt;</code> or <code>&lt;nav&gt;</code>; search engines understand the page better; and the code is far easier for humans to read than nested <code>&lt;div class="wrapper-inner-2"&gt;</code>.</p>`
    },
    {
      title: "Accessibility essentials",
      body: `<p>Small habits that make a page usable by everyone:</p>
<ul>
  <li><b>alt text on every image.</b> Describe the meaning, not the file. <code>alt="Sales rose 30% in 2024"</code> beats <code>alt="chart"</code>. Purely decorative images get <code>alt=""</code> so screen readers skip them.</li>
  <li><b>Meaningful link text.</b> "Read the enrolment guide" tells a screen-reader user what the link does; "click here" does not.</li>
  <li><b>Labels on form inputs</b>, tied with <code>&lt;label for="email"&gt;</code> matching <code>&lt;input id="email"&gt;</code>.</li>
  <li><b>Real buttons and links</b> — <code>&lt;button&gt;</code> and <code>&lt;a&gt;</code> are keyboard-operable for free. A clickable <code>&lt;div&gt;</code> is not.</li>
  <li><b>Enough colour contrast</b>, and never colour alone to convey meaning.</li>
</ul>`
    },
    {
      title: "Where scripts and styles go",
      body: `<p>Position matters for how fast a page appears.</p>
<ul>
  <li><b>CSS in the <code>&lt;head&gt;</code></b> — so the page is styled before it is painted, avoiding a flash of unstyled content.</li>
  <li><b>JavaScript at the end of the <code>&lt;body&gt;</code></b>, or in the head with the <code>defer</code> attribute. A plain <code>&lt;script&gt;</code> in the head blocks HTML parsing while it downloads and runs, delaying everything the user sees.</li>
</ul>
<pre>&lt;script src="js/main.js" defer&gt;&lt;/script&gt;</pre>
<p>Two other tools you will use constantly:</p>
<ul>
  <li><code>id="something"</code> — unique on the page; one element only</li>
  <li><code>class="something"</code> — reusable; many elements may share a class</li>
</ul>
<p>CSS and JavaScript both use these to target elements. Validate finished pages with the W3C validator, and inspect them with the browser's developer tools (F12).</p>`
    }
  ],

  questions: [
    {
      q: "What is the purpose of `<!DOCTYPE html>`?",
      choices: [
        "It imports the HTML library so that tags like <p> and <img> become available",
        "It switches the browser into modern standards mode instead of quirks mode",
        "It is a comment left for other developers",
        "It defines the title shown in the browser tab"
      ],
      answer: 1
    },
    {
      q: "Which two elements are the direct children of `<html>`?",
      choices: [
        "<header> and <footer>",
        "<title> and <body>",
        "<head> and <body>",
        "<meta> and <main>"
      ],
      answer: 2
    },
    {
      q: "Where does content that the user actually sees on the page go?",
      choices: [
        "Inside <head>",
        "Inside <body>",
        "Inside <title>",
        "Inside <meta>"
      ],
      answer: 1
    },
    {
      q: "What does `<meta charset=\"UTF-8\">` do?",
      choices: [
        "Sets the page width on mobile devices",
        "Declares the character encoding so text displays correctly",
        "Links the stylesheet in css/style.css to the page",
        "Sets the default text colour to match the operating system theme"
      ],
      answer: 1
    },
    {
      q: "Which head element's content is visible to the user?",
      choices: [
        "<meta charset>, shown at the top of the page",
        "<link rel=\"stylesheet\">, displayed as a link the user can click",
        "<title>, shown in the browser tab",
        "None of them are ever visible anywhere"
      ],
      answer: 2
    },
    {
      q: "Which of these is a void element (no closing tag)?",
      choices: [
        "<p>",
        "<div>",
        "<img>",
        "<h1>"
      ],
      answer: 2
    },
    {
      q: "Why use semantic elements like `<nav>` and `<main>` instead of `<div>` everywhere?",
      choices: [
        "They load faster than divs because the browser caches them",
        "They describe what the content is, not how it looks",
        "They apply built-in colours and fonts to matching content automatically",
        "Divs are deprecated and no longer work in modern browsers"
      ],
      answer: 1
    },
    {
      q: "What is the correct use of the `alt` attribute on an image?",
      choices: [
        "The filename of the image, so the browser knows which file to load",
        "A description of the image's meaning, read by screen readers",
        "The image's width and height in pixels",
        "A caption that is always displayed beneath the image on the page"
      ],
      answer: 1
    },
    {
      q: "How many `<h1>` elements should a typical page have?",
      choices: [
        "One",
        "One per paragraph",
        "At least six",
        "As many as needed for large text"
      ],
      answer: 0
    },
    {
      q: "What is the difference between `id` and `class`?",
      choices: [
        "`id` is unique to one element; `class` can be shared by many",
        "`class` must be unique; `id` can be reused on many elements",
        "They are identical and completely interchangeable",
        "`id` is only usable from CSS and `class` is only usable from JavaScript"
      ],
      answer: 0
    },
    {
      q: "Why is a plain `<script>` tag in the `<head>` often a problem?",
      choices: [
        "Scripts are not allowed inside the head",
        "It blocks HTML parsing while it downloads and runs",
        "It causes the browser to ignore all CSS loaded before the script",
        "The browser will run the same script twice"
      ],
      answer: 1
    },
    {
      q: "Which nesting is correct?",
      choices: [
        "<b><i>text</b></i>",
        "<b><i>text</i></b>",
        "<b>text<i></b></i>",
        "<i><b>text<b></i>"
      ],
      answer: 1
    }
  ]
});
