section({
  unit: "Unit 4: Digital Marketing",
  title: "Section 2: Web SEO",
  video: { id: "MYE6T_gd7H0", title: "SEO in 5 Minutes — Simplilearn (5 min)" },

  slides: [
    {
      title: "What SEO is",
      body: `<p><b>SEO — search engine optimization</b> — is making your site the best answer to questions your audience is already asking, in a form search engines can recognize.</p>
<p>You know the machinery from Unit 1: crawlers fetch pages, an index catalogs them, ranking orders them by hundreds of signals. SEO is working <i>with</i> that machinery.</p>
<p>One reframe kills most bad SEO: you are not optimizing for a robot, you are competing to <b>satisfy a searcher</b>. Google's systems are built to detect satisfaction — content written for readers ranks; content written to game rankings gets filtered. Every tactic that follows serves that principle.</p>`
    ,
      teach: "Say: One reframe kills bad SEO: you're not optimizing for a robot, you're competing to satisfy a searcher.\nAsk: Callback to Unit 1: what were the three steps — crawl, index, rank?\nExtend: Search a term live and dissect why the top result deserves its spot."
    },
    {
      title: "Keywords are questions",
      body: `<p>A <b>keyword</b> is just what someone types into search. Behind each is an <b>intent</b>:</p>
<ul>
  <li><b>Informational</b> — "how to fix a leaking tap" — wants a guide</li>
  <li><b>Commercial</b> — "best cordless drill 2026" — wants a comparison</li>
  <li><b>Transactional</b> — "buy dewalt drill" — wants a product page</li>
  <li><b>Navigational</b> — "screwfix opening hours" — wants a specific site</li>
</ul>
<p>Match the page type to the intent — a product page cannot rank for a how-to search, no matter how well made.</p>
<p>Beginner strategy: skip giant head terms ("fitness") and target <b>long-tail keywords</b> — longer, specific phrases ("kettlebell workout for lower back pain"). Less traffic each, far less competition, and the visitor is exactly who you want. Google's own autocomplete, "People also ask" boxes, and an AI chatbot are all free keyword research tools.</p>`
    ,
      teach: "Say: Keywords are questions, and each carries an intent — guide, comparison, purchase, or destination.\nAsk: Classify these four searches by intent, quickly, as a group.\nExtend: Demo free keyword research live: autocomplete, People Also Ask, and a chatbot brainstorm."
    },
    {
      title: "E-E-A-T: why 'why you?' matters",
      body: `<p>Google evaluates content quality using a framework its own quality-rater guidelines call <b>E-E-A-T</b>:</p>
<ul>
  <li><b>Experience</b> — first-hand use: you actually did the thing, with photos and details to prove it</li>
  <li><b>Expertise</b> — real knowledge of the subject</li>
  <li><b>Authoritativeness</b> — others reference and recommend you</li>
  <li><b>Trustworthiness</b> — accurate, honest, transparent about who you are</li>
</ul>
<p>The first E was added precisely because generic, researched-from-other-articles content became infinite and cheap — especially with AI. What can't be faked at scale is first-hand experience: your tests, your photos, your results, your mistakes. Say who wrote the page and why they're credible. This is the "why you?" from Section 1, made into a ranking factor.</p>`
    ,
      teach: "Say: E-E-A-T — the first E is Experience, added exactly because generic AI content became infinite.\nAsk: Two identical articles, one with original photos and test results — which do YOU trust?\nExtend: Show a page that oozes first-hand experience vs a generic listicle on the same topic."
    },
    {
      title: "On-page basics",
      body: `<p>Unit 2's HTML knowledge becomes marketing here. For each page:</p>
<ul>
  <li><b><code>&lt;title&gt;</code></b> — the headline searchers see in results. Put the topic in naturally; make it worth clicking; keep it under ~60 characters so it doesn't truncate.</li>
  <li><b>Meta description</b> — the snippet under the headline. Doesn't affect ranking directly, but it's your ad copy for the click.</li>
  <li><b>One <code>&lt;h1&gt;</code>, logical <code>&lt;h2&gt;</code>/<code>&lt;h3&gt;</code> structure</b> — headings that let a scanner (human or machine) grasp the page in seconds.</li>
  <li><b>Answer first.</b> Open with a direct, few-sentence answer to the query, then expand. Readers and AI systems both reward pages that don't bury the answer.</li>
  <li><b>Descriptive alt text and file names</b> for images; <b>readable URLs</b> (<code>/kettlebell-back-pain</code>, not <code>/p?id=482</code>).</li>
  <li><b>Internal links</b> between your related pages, with descriptive link text — never "click here".</li>
</ul>`
    ,
      teach: "Say: Unit 2's HTML is now marketing: title tag, meta description, one h1, answer first, real URLs, internal links.\nAsk: Which of these did we already learn as 'good HTML'? (Nearly all.)\nExtend: View-source a well-optimized page and find each element together."
    },
    {
      title: "Technical basics and links",
      body: `<p><b>Technical SEO</b> — the plumbing that makes everything else count:</p>
<ul>
  <li><b>Speed</b> — slow pages lose visitors and rank worse. Compress images (Unit 1: right format, right size) — the #1 beginner speed win.</li>
  <li><b>Mobile</b> — most searches are on phones; Google ranks the mobile version of your page.</li>
  <li><b>HTTPS</b> — required, and free (Unit 2: hosting).</li>
  <li>Register with <b>Google Search Console</b> — free, shows exactly which searches bring people to you and flags problems.</li>
</ul>
<p><b>Backlinks</b> — links from other sites to yours — remain a heavyweight signal: each is a vote of confidence, weighted by the voter's own authority. They're earned by being worth linking to: original data, genuinely useful tools and guides, being cited by people in your niche. Buying links or joining link schemes violates Google's policies and gets sites penalized.</p>`
    ,
      teach: "Say: Technical basics gate everything: speed, mobile, HTTPS, Search Console. Backlinks are earned votes.\nAsk: Why does buying links backfire while earning them compounds?\nExtend: Run a live PageSpeed or Lighthouse test on a site the class picks."
    },
    {
      title: "Search is changing: AI answers",
      body: `<p>The biggest shift since this unit's playbook was written: search engines now often <b>answer directly</b>, with AI-generated summaries (Google's AI Overviews) above the traditional links — and many people ask ChatGPT-style assistants instead of searching at all. When an AI answer appears, far fewer people click through to websites.</p>
<p>The emerging response is called <b>GEO — generative engine optimization</b>: being the source the AI systems quote and cite.</p>
<ul>
  <li>Structure content so it's <b>quotable</b>: a clear, self-contained answer near the top of the page, clean headings, one topic per page</li>
  <li>Include facts worth citing: statistics, first-hand results, expert quotes</li>
  <li>Be a <b>named, consistent entity</b> — same name and description across your site and profiles, so AI systems know who you are</li>
</ul>
<p>The good news: GEO is mostly E-E-A-T under a new name. Clear, credible, experience-backed content wins in both worlds.</p>`
    ,
      teach: "Say: The ground is shifting — AI answers sit above the links now. GEO means being the source the AI quotes.\nAsk: When did you last click past an AI summary? What made you click?\nExtend: Ask a chatbot a question in your niche and see who it cites — that's the new results page."
    },
    {
      title: "What NOT to do",
      body: `<p>Every SEO shortcut has been tried, detected, and penalized. Avoid:</p>
<ul>
  <li><b>Keyword stuffing</b> — repeating the phrase unnaturally. Detected for two decades; reads terribly.</li>
  <li><b>Buying links</b> or link-exchange schemes.</li>
  <li><b>Publishing mass AI content unreviewed.</b> Google's spam policies target scaled content made to manipulate rankings regardless of how it was made. AI as a drafting assistant is fine; AI as a hundred-page unedited content farm is how sites get wiped out in a core update.</li>
  <li><b>Copying competitors' content</b> — duplicated content ranks behind the original.</li>
  <li><b>Chasing algorithms instead of readers</b> — tricks decay every update; satisfied readers compound.</li>
</ul>
<p>SEO timelines are honest: months, not days. It compounds — a page that ranks can bring visitors every day for years, which is why it's worth doing properly.</p>`
    ,
      teach: "Say: Every shortcut has been tried and penalized — stuffing, bought links, unreviewed AI mass content. Months, not days; then it compounds.\nAsk: Why does content written for readers survive every algorithm update?\nExtend: A tale of a site wiped out by a core update makes this concrete — bring one from the SEO press."
    }
  ],

  questions: [
    {
      q: "What is the core principle behind all effective SEO?",
      key: true,
      choices: [
        "Repeat the target keyword as often as possible",
        "Satisfy the searcher — write for readers, not robots",
        "Publish more pages than every competitor",
        "Update the site every single day so that crawlers keep coming back often"
      ],
      answer: 1
    },
    {
      q: "Someone searches \"best cordless drill 2026\". What intent is this?",
      choices: [
        "Commercial — they want a comparison before buying",
        "Navigational — they want a specific website",
        "Informational — they want to learn how drills work",
        "Transactional — they are ready to pay right now"
      ],
      answer: 0
    },
    {
      q: "Why target long-tail keywords as a beginner?",
      key: true,
      choices: [
        "They are the only keywords AI systems can read",
        "Google charges less for long search phrases",
        "Less competition, and visitors match your niche exactly",
        "Longer phrases automatically rank higher than short ones"
      ],
      answer: 2
    },
    {
      q: "What does the first E in E-E-A-T stand for, and why was it added?",
      choices: [
        "Efficiency — because slow-loading sites were flooding the top of the search results",
        "Engagement — because likes became a ranking factor",
        "Excellence — because quality needed a formal score",
        "Experience — because generic researched content became cheap to mass-produce"
      ],
      answer: 3
    },
    {
      q: "What is the job of the meta description?",
      choices: [
        "It is the ad copy that persuades searchers to click your result",
        "It is the single strongest direct ranking factor anywhere on the page",
        "It tells the crawler which pages not to index",
        "It sets the fonts and colors of the search listing"
      ],
      answer: 0
    },
    {
      q: "Which URL is best for search?",
      choices: [
        "/page?id=482&cat=7&ref=x2",
        "/kettlebell-back-pain",
        "/FINAL-draft-2-USE-THIS-ONE",
        "/p/000482"
      ],
      answer: 1
    },
    {
      q: "What is the #1 beginner win for page speed?",
      choices: [
        "Buying a more expensive and memorable domain name",
        "Removing all headings from the page",
        "Compressing images to the right format and size",
        "Switching the site's text to a lighter font"
      ],
      answer: 2
    },
    {
      q: "What makes backlinks valuable?",
      key: true,
      choices: [
        "They make pages load faster for visitors",
        "Each link is a vote of confidence, weighted by the linker's own authority",
        "Google counts the raw total and nothing else",
        "They prevent competitors from copying your content and outranking you with it"
      ],
      answer: 1
    },
    {
      q: "What is GEO (generative engine optimization)?",
      choices: [
        "Targeting search results to specific countries",
        "Optimizing page load times for mobile networks",
        "A paid placement program for appearing inside AI-generated summaries",
        "Making your content the source AI answers quote and cite"
      ],
      answer: 3
    },
    {
      q: "How do you make content quotable by AI search systems?",
      choices: [
        "A clear, self-contained answer near the top, with clean headings",
        "Hide extra keywords in the page's background color",
        "Split every answer across many pages to maximize clicks",
        "Write in long unbroken paragraphs so nothing can be extracted out of context"
      ],
      answer: 0
    },
    {
      q: "Which use of AI content risks a Google penalty?",
      choices: [
        "Drafting an article with AI, then editing in your own experience",
        "Using AI to brainstorm topic ideas for the site",
        "Mass-publishing unreviewed AI pages to manipulate rankings",
        "Asking AI to summarize your page for a meta description"
      ],
      answer: 2
    },
    {
      q: "What is a realistic timeline for SEO results?",
      choices: [
        "Months — and rankings then compound for years",
        "24 to 48 hours after publishing",
        "Instantly, if the keyword appears in the title",
        "SEO no longer produces results for anyone"
      ],
      answer: 0
    }
  ]
});
