section({
  unit: "Unit 2: Intro to Computer Science",
  title: "Section 6: Hosting",

  slides: [
    {
      title: "What hosting means",
      body: `<p><b>Hosting</b> is renting space on a computer that is always powered on, always connected, and reachable from the public internet.</p>
<p>Your own laptop could technically serve a website, but it sleeps, its internet address changes, home upload speeds are slow, and exposing it invites attacks. So we pay someone with a data centre.</p>
<p>Three pieces make a live website:</p>
<ol>
  <li>The <b>files</b> — your HTML, CSS, JS</li>
  <li>The <b>server</b> — the always-on machine that sends them</li>
  <li>The <b>domain name</b> — the human-readable address that points to that server</li>
</ol>`
    ,
      teach: "Say: Hosting is renting a computer that never sleeps. Files, server, domain — three pieces, that's the whole product.\nAsk: Why not just serve the site from my laptop? Collect the reasons before revealing.\nExtend: Price out a real host live if you like — the numbers are surprisingly small."
    },
    {
      title: "Domains and DNS",
      body: `<p>Every server has an <b>IP address</b>, a numeric identifier like <code>93.184.216.34</code>. People cannot remember those, so we use <b>domain names</b>.</p>
<p><b>DNS</b> — the Domain Name System — is the internet's phone book, translating <code>example.com</code> into an IP address.</p>
<p>Reading a domain from right to left:</p>
<pre>blog.example.com
 ↑     ↑      ↑
 |     |      └── TLD (top-level domain)
 |     └───────── second-level domain (the bit you buy)
 └─────────────── subdomain</pre>
<p>You <b>rent</b> a domain from a registrar, typically yearly. You never own it outright, and letting it expire means someone else can take it.</p>
<p>DNS changes take time to spread worldwide — <b>propagation</b> — usually minutes to a few hours.</p>`
    ,
      teach: "Say: DNS is the phone book: names to numbers. You rent a domain, never own it.\nAsk: What happens if a business forgets to renew its domain?\nExtend: Run nslookup on a known site; read a domain right-to-left again (TLD, name, subdomain) — it echoes the URL lesson."
    },
    {
      title: "How a page load actually works",
      body: `<ol>
  <li>You type <code>example.com</code> into the browser.</li>
  <li>The browser asks <b>DNS</b> for the IP address of that domain.</li>
  <li>It opens a connection to that IP and sends an <b>HTTP GET request</b>.</li>
  <li>The server responds with a <b>status code</b> and the file.</li>
  <li>The browser parses the HTML and requests every CSS, JS, and image file it references.</li>
  <li>The page renders.</li>
</ol>
<p>Status codes you should recognise:</p>
<ul>
  <li><b>200</b> — OK</li>
  <li><b>301 / 302</b> — redirect, permanent or temporary</li>
  <li><b>404</b> — not found; the path is wrong</li>
  <li><b>403</b> — forbidden; you are not allowed</li>
  <li><b>500</b> — server error; the server's own code broke</li>
</ul>`
    ,
      teach: "Say: Walk the page-load steps in order — DNS, connect, request, response, render. Status codes are the server talking back.\nAsk: What's the difference between a 404 and a 500 — whose fault is each?\nExtend: Open the browser network tab and watch a real page load: every request, every code."
    },
    {
      title: "Types of hosting",
      body: `<table>
  <tr><th>Type</th><th>What you get</th><th>Suits</th></tr>
  <tr><td><b>Static hosting</b><br>(GitHub Pages, Netlify, Cloudflare Pages)</td><td>Serves files only; often free</td><td>Portfolios, docs, blogs, courses — the kind of site this course builds</td></tr>
  <tr><td><b>Shared hosting</b></td><td>One server split among many customers, cheap</td><td>Small business sites, WordPress</td></tr>
  <tr><td><b>Cloud servers</b></td><td>Rented machines, scale with demand</td><td>Apps with their own server code and databases</td></tr>
</table>
<p>A <b>CDN</b> (content delivery network) is a complementary layer: copies of your files cached in data centres worldwide, so a visitor in Tokyo is served from Tokyo rather than Virginia. Faster, and it absorbs traffic spikes.</p>`
    ,
      teach: "Say: The hosting menu, cheap to serious. For a folder of files, static hosting is free and enough.\nAsk: Which row fits the site this course builds? Which fits a bank?\nExtend: CDNs are a nice aside: why the same file loads fast in Tokyo and Toronto."
    },
    {
      title: "GitHub Pages",
      body: `<p><b>GitHub Pages</b> is free static hosting built into GitHub. It serves the files in a repository as a website.</p>
<p>Steps:</p>
<ol>
  <li>Create a repository and put your files in it, with <code>index.html</code> at the top.</li>
  <li>Repository <b>Settings → Pages</b>.</li>
  <li>Set the source branch (usually <code>main</code>) and folder (<code>/root</code>).</li>
  <li>Wait a minute; your site appears at <code>username.github.io/repo-name</code>.</li>
  <li>Every push to that branch redeploys automatically.</li>
</ol>
<p>Limits: static files only — no PHP, no server-side database. Public repositories on the free tier. A soft limit around 1 GB and 100 GB of bandwidth per month, which is far beyond a course site's needs.</p>`
    ,
      teach: "Say: GitHub Pages — the free path from folder to live URL. This is the slide their own site ships through.\nAsk: What must sit at the top of the repository for it to work?\nExtend: Deploy something live in class if accounts allow — nothing beats seeing a URL come alive."
    },
    {
      title: "HTTPS and certificates",
      body: `<p><b>HTTP</b> sends everything in plain text; anyone between you and the server can read it. <b>HTTPS</b> encrypts the connection using <b>TLS</b>.</p>
<p>An <b>SSL/TLS certificate</b> proves the server really is the one for that domain and enables the encryption. <b>Let's Encrypt</b> issues them free, and most hosts including GitHub Pages provision one automatically.</p>
<p>Use HTTPS on every site, not just ones handling payments. Browsers mark plain HTTP pages "Not secure", search engines rank them lower, and modern browser features refuse to run without it.</p>
<p>Remember the earlier lesson: the padlock proves the connection is encrypted and the domain matches the certificate. It does <b>not</b> prove the site is honest.</p>`
    ,
      teach: "Say: HTTPS everywhere — encryption plus proof you reached the right domain. Free now, so no excuses.\nAsk: Padlock on a scam site — possible? (Yes. Encrypted ≠ honest — callback to Unit 1.)\nExtend: Click a real certificate in the browser and read who issued it."
    },
    {
      title: "Deploying and maintaining",
      body: `<p>Getting files onto the server:</p>
<ul>
  <li><b>Git-based deploy</b> — push to a branch and the host updates the site. What GitHub Pages, Netlify, and Vercel do, and the way you will work.</li>
  <li><b>Manual upload (FTP)</b> — dragging files across yourself. Traditional, error-prone, still common on shared hosting.</li>
</ul>
<p>Ongoing responsibilities once a site is live:</p>
<ul>
  <li>Renew the domain — expiry silently takes the site down</li>
  <li>Keep any server software patched</li>
  <li>Keep backups; a host is not a backup</li>
  <li>Watch analytics and uptime</li>
</ul>
<p>Costs, roughly: domain £8–15 a year, static hosting free, shared hosting £3–10 a month.</p>`
    ,
      teach: "Say: Push to deploy is the modern loop; then the boring duties — renew the domain, patch, back up.\nAsk: Which of these duties kills the most real websites? (Expired domains and no backups.)\nExtend: Share a real 'site went down' story and which duty was skipped."
    }
  ],

  questions: [
    {
      q: "Why is a home laptop a poor web server?",
      choices: [
        "Laptop hardware is physically incapable of running any web server software",
        "It sleeps, its IP changes, and home upload is slow",
        "HTML files cannot be served from a laptop's hard drive",
        "It is illegal in most countries"
      ],
      answer: 1
    },
    {
      q: "What does DNS do?",
      key: true,
      choices: [
        "Encrypts all traffic between your browser and the destination server",
        "Translates a domain name into an IP address",
        "Compresses files before sending them to the browser",
        "Stores your website's HTML, CSS, and image files"
      ],
      answer: 1
    },
    {
      q: "In `blog.example.com`, which part is the TLD?",
      choices: [
        "blog",
        "example",
        "com",
        "blog.example"
      ],
      answer: 2
    },
    {
      q: "Do you own a domain name permanently once purchased?",
      choices: [
        "Yes, a one-time purchase makes it yours forever",
        "No — you rent it yearly and can lose it if it expires",
        "Yes, but only if you also purchase hosting from the same registrar",
        "No — domains are randomly reassigned to new owners every year"
      ],
      answer: 1
    },
    {
      q: "What does an HTTP 404 status code mean?",
      key: true,
      choices: [
        "The request succeeded and the file was returned",
        "The server's own code crashed while handling the request",
        "The requested resource was not found",
        "The page has permanently moved to a new address"
      ],
      answer: 2
    },
    {
      q: "Which status code indicates an error on the server's side?",
      choices: [
        "200",
        "301",
        "404",
        "500"
      ],
      answer: 3
    },
    {
      q: "What is a CDN?",
      choices: [
        "A type of domain name reserved for large companies",
        "A worldwide network of servers that cache your files",
        "A programming language used for writing server code",
        "A backup service that stores copies of your databases in the cloud"
      ],
      answer: 1
    },
    {
      q: "What type of site can GitHub Pages host?",
      choices: [
        "Static sites — HTML, CSS, and JavaScript",
        "Any site including PHP and MySQL databases",
        "Only sites written in the Python programming language",
        "Only single-page sites with no images, videos, or other media files"
      ],
      answer: 0
    },
    {
      q: "For a GitHub Pages site, which file must be at the top of the repository?",
      choices: [
        "main.html",
        "readme.md",
        "index.html",
        "config.json"
      ],
      answer: 2
    },
    {
      q: "What does an SSL/TLS certificate provide?",
      key: true,
      choices: [
        "Proof that the website's content is truthful",
        "Encryption and proof the server matches the domain",
        "Complete protection against all viruses and malware on the site",
        "Faster page loading through file compression"
      ],
      answer: 1
    },
    {
      q: "How does deployment work on GitHub Pages after initial setup?",
      choices: [
        "You must upload the files manually over FTP after every change",
        "Every push to the configured branch redeploys automatically",
        "You email the files to GitHub support",
        "The site must be rebuilt by hand from the Settings page after each change"
      ],
      answer: 1
    }
  ]
});
