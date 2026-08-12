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
    },
    {
      title: "Types of hosting",
      body: `<table>
  <tr><th>Type</th><th>What you get</th><th>Suits</th></tr>
  <tr><td><b>Static hosting</b><br>(GitHub Pages, Netlify, Cloudflare Pages)</td><td>Serves files only; often free</td><td>Portfolios, docs, blogs, courses</td></tr>
  <tr><td><b>Shared hosting</b></td><td>One server split among many customers, cheap</td><td>Small business sites, WordPress</td></tr>
  <tr><td><b>VPS</b> (virtual private server)</td><td>Your own virtual machine with root access</td><td>Custom apps, full control</td></tr>
  <tr><td><b>Dedicated server</b></td><td>An entire physical machine</td><td>High-traffic or specialised workloads</td></tr>
  <tr><td><b>Cloud / serverless</b></td><td>Scales automatically, pay for what you use</td><td>Variable or spiky traffic</td></tr>
</table>
<p>A <b>CDN</b> (content delivery network) is a complementary layer: copies of your files cached in data centres worldwide, so a visitor in Tokyo is served from Tokyo rather than Virginia. Faster, and it absorbs traffic spikes.</p>`
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
    },
    {
      title: "HTTPS and certificates",
      body: `<p><b>HTTP</b> sends everything in plain text; anyone between you and the server can read it. <b>HTTPS</b> encrypts the connection using <b>TLS</b>.</p>
<p>An <b>SSL/TLS certificate</b> proves the server really is the one for that domain and enables the encryption. <b>Let's Encrypt</b> issues them free, and most hosts including GitHub Pages provision one automatically.</p>
<p>Use HTTPS on every site, not just ones handling payments. Browsers mark plain HTTP pages "Not secure", search engines rank them lower, and modern browser features refuse to run without it.</p>
<p>Remember the earlier lesson: the padlock proves the connection is encrypted and the domain matches the certificate. It does <b>not</b> prove the site is honest.</p>`
    },
    {
      title: "Deploying and maintaining",
      body: `<p>Getting files onto the server — oldest to newest:</p>
<ul>
  <li><b>FTP / SFTP</b> — manually dragging files across. Traditional, error-prone, still common on shared hosting.</li>
  <li><b>Git-based deploy</b> — push to a branch and the host rebuilds. What GitHub Pages, Netlify, and Vercel do.</li>
  <li><b>CI/CD pipeline</b> — an automated process runs tests then deploys on every commit.</li>
</ul>
<p>Ongoing responsibilities once a site is live:</p>
<ul>
  <li>Renew the domain — expiry silently takes the site down</li>
  <li>Keep any server software patched</li>
  <li>Keep backups; a host is not a backup</li>
  <li>Watch analytics and uptime</li>
</ul>
<p>Costs, roughly: domain £8–15 a year, static hosting free, shared hosting £3–10 a month, VPS £5–50 a month.</p>`
    }
  ],

  questions: [
    {
      q: "What does DNS do?",
      choices: [
        "Encrypts traffic between browser and server",
        "Translates a domain name into the server's IP address",
        "Compresses files before sending them",
        "Stores your website's files"
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
      q: "What does an HTTP 404 status code mean?",
      choices: [
        "The request succeeded",
        "The server's own code crashed",
        "The requested resource was not found at that path",
        "The page has permanently moved"
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
      q: "What type of site can GitHub Pages host?",
      choices: [
        "Static sites — HTML, CSS, JavaScript, and assets",
        "Any site including PHP and MySQL databases",
        "Only sites written in Python",
        "Only single-page sites with no images"
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
      choices: [
        "Proof that the website's content is truthful",
        "Encryption of the connection and proof that the server matches the domain",
        "Protection against all viruses",
        "Faster page loading through compression"
      ],
      answer: 1
    },
    {
      q: "What is a CDN?",
      choices: [
        "A type of domain name",
        "A network of servers worldwide that cache your files closer to visitors",
        "A programming language for servers",
        "A backup service for databases"
      ],
      answer: 1
    },
    {
      q: "Why is a home laptop a poor web server?",
      choices: [
        "Laptops cannot run server software",
        "It sleeps, has a changing IP address, slow upload speed, and exposes your home network to attack",
        "HTML files cannot be served from a laptop",
        "It is illegal in most countries"
      ],
      answer: 1
    },
    {
      q: "Do you own a domain name permanently once purchased?",
      choices: [
        "Yes, it is yours forever",
        "No — you rent it, usually yearly, and it can be taken if you let it expire",
        "Yes, but only if you also buy hosting",
        "No — domains are assigned randomly each year"
      ],
      answer: 1
    },
    {
      q: "Which hosting type gives you your own virtual machine with root access?",
      choices: [
        "Static hosting",
        "Shared hosting",
        "VPS",
        "CDN"
      ],
      answer: 2
    },
    {
      q: "How does deployment work on GitHub Pages after initial setup?",
      choices: [
        "You must upload files manually by FTP each time",
        "Every push to the configured branch redeploys the site automatically",
        "You email the files to GitHub support",
        "The site must be rebuilt from the Settings page by hand"
      ],
      answer: 1
    }
  ]
});
