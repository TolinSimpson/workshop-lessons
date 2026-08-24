section({
  unit: "Unit 1: Basic Computing",
  title: "Section 3: Web Browsing",

  slides: [
    {
      title: "Browser, search engine, internet — three different things",
      body: `<p>These get muddled constantly, so let's separate them:</p>
<ul>
  <li>The <b>internet</b> — the physical network connecting computers worldwide.</li>
  <li>A <b>browser</b> — the <i>program on your computer</i> that fetches and displays web pages: Chrome, Edge, Firefox, Safari.</li>
  <li>A <b>search engine</b> — a <i>website</i> that helps you find other websites: Google, Bing, DuckDuckGo.</li>
</ul>
<p>"Google" is not your browser, and Chrome is not the internet. You use a <b>browser</b> to visit a <b>search engine</b>, which searches the <b>web</b>.</p>
<p>Any browser can use any search engine — the default is just a setting.</p>`
    },
    {
      title: "Reading an address (URL)",
      body: `<p>Every page has a <b>URL</b> — its exact address. The parts:</p>
<pre>https://www.example.com/recipes/bread.html
  ↑            ↑              ↑
  |            |              └── path — which page on the site
  |            └───────────────── domain — which site
  └────────────────────────────── protocol — how to talk to it</pre>
<p>The <b>domain</b> is the part that matters for trust. <code>paypal.com</code> and <code>paypal-secure-login.com</code> are completely different sites owned by different people — more on that in the next section.</p>
<p>The address bar does double duty: type a URL and it goes there directly; type anything else and it sends your words to your default search engine. Knowing the difference saves a step — if you know the address, type it.</p>`
    },
    {
      title: "How a search engine works",
      body: `<p>A search engine does not search the live web when you hit Enter — that would take weeks. It searches its own pre-built copy:</p>
<ol>
  <li><b>Crawling</b> — automated programs follow links from page to page, fetching everything they find.</li>
  <li><b>Indexing</b> — each page is stored in a giant catalogue, organised by the words it contains.</li>
  <li><b>Ranking</b> — when you search, the engine pulls matching pages from the index and orders them by hundreds of signals: relevance, popularity, freshness, how many other sites link there.</li>
</ol>
<p>Consequences: brand-new pages may not be findable yet, deleted pages can linger in results for a while, and <b>no engine has the whole web</b> — pages behind logins or never linked from anywhere don't get crawled.</p>`
    },
    {
      title: "Searching well",
      body: `<p>Search quality is mostly query quality. Habits that help:</p>
<ul>
  <li><b>Use specific words.</b> "laptop won't turn on power light blinking" beats "computer broken".</li>
  <li><b>"Quotation marks"</b> — find that exact phrase, in that order.</li>
  <li><b>Minus sign</b> — <code>jaguar -car</code> drops results about the car.</li>
  <li><b><code>site:</code></b> — <code>site:bbc.co.uk floods</code> searches one site only.</li>
  <li><b>Add the year</b> for anything that changes: "best free video editor 2026".</li>
  <li><b>Search the error message</b>, in quotes, when tech breaks — someone has hit it before you.</li>
</ul>
<p>If the first attempt misses, don't scroll to page five — change the words. You are describing the page you hope exists.</p>`
    },
    {
      title: "Reading a results page",
      body: `<p>Not everything on a results page earned its position:</p>
<ul>
  <li><b>Sponsored results</b> — ads, marked "Sponsored" or "Ad", sit at the top because someone paid. They can be legitimate — or an impostor buying their way above the real site.</li>
  <li><b>Organic results</b> — pages that ranked on merit.</li>
  <li><b>AI summaries and snippet boxes</b> — the engine's paraphrase of other people's pages. Handy, but check the source for anything that matters; the paraphrase can be wrong.</li>
</ul>
<p>Before clicking, glance at the <b>domain under the headline</b> — it tells you who you are about to visit. Ranked high does not mean true: ranking rewards popularity and relevance, not accuracy. For anything important, compare a couple of independent sources.</p>`
    },
    {
      title: "Cookies",
      body: `<p>Websites have a problem: the server forgets you between page loads. Each request arrives fresh, with no memory of the last one.</p>
<p>A <b>cookie</b> is the fix — a small piece of text a website asks your browser to store. On every later visit to that site, the browser sends the cookie back, and the site recognises you.</p>
<p>That is how the useful things work:</p>
<ul>
  <li>Staying logged in instead of entering your password on every page</li>
  <li>A shopping basket that survives while you browse</li>
  <li>Remembered settings — language, dark mode</li>
</ul>
<p>Two lifespans: <b>session cookies</b> vanish when you close the browser; <b>persistent cookies</b> stay until an expiry date, which is why you are still logged in tomorrow.</p>
<p>A cookie is plain text, not a program — it cannot infect anything. The concern with cookies is not viruses, it is <i>tracking</i>.</p>`
    },
    {
      title: "Tracking and third-party cookies",
      body: `<p>Cookies set by the site you're visiting are <b>first-party</b> — mostly benign, they make the site work.</p>
<p>The controversial kind is <b>third-party</b>: set by <i>other companies</i> whose invisible content — ads, trackers — is embedded in the page. If the same ad network is embedded in thousands of sites, its one cookie lets it recognise you on all of them and assemble your browsing history into an interest profile. That is why a product you viewed once follows you around the web for a fortnight.</p>
<p>Those "Accept cookies?" banners exist because privacy law (GDPR) requires consent for exactly this. "Reject all" or "necessary only" keeps the site working — it declines the tracking, not the login cookie.</p>
<p>Modern browsers increasingly block third-party cookies by default, and you can clear or block cookies per-site in settings.</p>`
    },
    {
      title: "History, cache, and private browsing",
      body: `<p>Three things your browser keeps locally:</p>
<ul>
  <li><b>History</b> — the list of pages you've visited</li>
  <li><b>Cache</b> — saved copies of images, CSS, and scripts so revisited pages load fast (a stale cache is why "have you tried Ctrl+F5?" fixes weirdly broken pages)</li>
  <li><b>Cookies</b> — as above</li>
</ul>
<p><b>Private / incognito mode</b> opens a window that keeps none of these once closed: no history entry, cookies deleted on exit. Useful for a shared computer, checking prices without profile-based nudges, or logging into a second account.</p>
<p>What it does <b>not</b> do: make you anonymous. Your school or workplace network, your internet provider, and every website you visit still see the traffic exactly as before. Private mode wipes the local record — nothing more.</p>`
    }
  ],

  questions: [
    {
      q: "What is the difference between a browser and a search engine?",
      choices: [
        "A browser is a program that displays web pages; a search engine is a website that finds other websites",
        "They are two names for the same thing",
        "A search engine is a program installed on your computer; a browser is a website you visit to find other websites",
        "Browsers are free, search engines require a subscription"
      ],
      answer: 0
    },
    {
      q: "In `https://www.example.com/recipes/bread.html`, which part identifies WHO you are visiting?",
      choices: [
        "https",
        "example.com",
        "/recipes/bread.html",
        "bread.html"
      ],
      answer: 1
    },
    {
      q: "What happens when you type words that are not a web address into the address bar?",
      choices: [
        "The browser shows an error",
        "The browser sends them to your default search engine",
        "The browser opens the last page you visited",
        "Nothing happens, because the address bar only accepts complete web addresses"
      ],
      answer: 1
    },
    {
      q: "When you press Enter on a search, what does the engine actually search?",
      choices: [
        "The entire live web, checking every page one by one at the moment you search",
        "Its own pre-built index of pages its crawlers have visited",
        "Only websites that paid to be included",
        "Your browsing history"
      ],
      answer: 1
    },
    {
      q: "Why might a brand-new web page not appear in search results?",
      choices: [
        "New pages are banned for 30 days",
        "Crawlers have not found and indexed it yet",
        "It has no cookies",
        "Search engines only index pages ending in .com"
      ],
      answer: 1
    },
    {
      q: "Which search finds the exact phrase 'blue screen memory management'?",
      choices: [
        "blue screen memory management",
        "\"blue screen memory management\"",
        "site:blue screen memory management",
        "blue -screen -memory -management"
      ],
      answer: 1
    },
    {
      q: "What does `jaguar -car` do?",
      choices: [
        "Searches for jaguar and car together",
        "Searches for jaguar while excluding results about cars",
        "Searches only car websites",
        "Subtracts the word jaguar from your search history and past results"
      ],
      answer: 1
    },
    {
      q: "The result at the very top of the page is marked 'Sponsored'. What does that mean?",
      choices: [
        "It is the most accurate result",
        "Someone paid for that position — it may or may not be the site you want",
        "The search engine's editors reviewed it and officially endorse it as the best answer",
        "It is always a scam"
      ],
      answer: 1
    },
    {
      q: "What is a cookie?",
      choices: [
        "A small hidden program that websites secretly install and run on your computer's hard drive",
        "A small piece of text a website stores in your browser and reads back on later visits",
        "A type of computer virus",
        "A saved copy of a web page's images"
      ],
      answer: 1
    },
    {
      q: "How does a website keep you logged in as you move between its pages?",
      choices: [
        "It remembers your screen",
        "A cookie is sent back to the site with each request, identifying you",
        "Your password is typed automatically each time",
        "Every page on the site is downloaded to your computer in advance, so no login is needed"
      ],
      answer: 1
    },
    {
      q: "Why can an advert for a product you viewed once follow you around unrelated websites?",
      choices: [
        "Those websites all share one owner",
        "A third-party ad network embedded in many sites recognises its cookie on all of them",
        "Your browser automatically broadcasts your full browsing history to every website you visit",
        "It is a coincidence"
      ],
      answer: 1
    },
    {
      q: "What does clicking 'Reject all' on a cookie banner typically do?",
      choices: [
        "Blocks the site from loading until you change your mind and accept all cookies",
        "Declines tracking cookies while keeping the ones the site needs to function",
        "Deletes your account on that site",
        "Turns off cookies in every browser on the computer"
      ],
      answer: 1
    },
    {
      q: "What does private / incognito mode actually do?",
      choices: [
        "Hides your activity from websites and your internet provider",
        "Keeps no local history or cookies once the window closes",
        "Encrypts your connection like a VPN",
        "Makes you completely anonymous online, so no website or internet provider can tell who you are"
      ],
      answer: 1
    },
    {
      q: "A page you visit often looks broken — images missing, layout scrambled — but works on your phone. Likely first fix?",
      choices: [
        "Back up your files and completely reinstall the operating system from scratch",
        "Force-refresh to bypass the browser's stale cached copies (Ctrl+F5)",
        "Delete all your bookmarks",
        "Buy a new monitor"
      ],
      answer: 1
    }
  ]
});
