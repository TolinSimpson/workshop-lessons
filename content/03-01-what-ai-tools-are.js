section({
  unit: "Unit 3: Using AI Tools",
  title: "Section 1: What AI Tools Are",
  video: { id: "LPZh9BOjkQs", title: "Large Language Models Explained Briefly — 3Blue1Brown (8 min)" },

  slides: [
    {
      title: "What \"AI\" means here",
      body: `<p>The AI tools in this unit are built on <b>large language models</b> (LLMs): programs trained on enormous amounts of text until they become very good at predicting what text should come next. Ask a question, and the model generates a fluent answer word by word.</p>
<p>That is all that is happening. The model is not looking things up in a database of facts, and it is not thinking the way a person does. Keeping that in mind explains both its strengths and its failures.</p>`
    ,
      teach: "Say: Everything in this unit rests on one idea: these tools predict text. Not databases, not minds — prediction. Hold onto that.\nAsk: If it's 'just' predicting the next word, why does it feel so smart?\nExtend: Sketch next-word prediction on the board: 'The cat sat on the ___' — then scale the idea up."
    },
    {
      title: "The tools by name",
      body: `<p>The big general-purpose chatbots all work the same way — type a message, get a reply:</p>
<ul>
  <li><b>ChatGPT</b> — from OpenAI</li>
  <li><b>Claude</b> — from Anthropic</li>
  <li><b>Gemini</b> — from Google, built into Google's products</li>
  <li><b>Copilot</b> — from Microsoft, built into Windows and Office</li>
</ul>
<p>Each has a free tier that is enough for learning and everyday use. Skills learned in one carry directly to the others — they differ in details, not in kind.</p>`
    ,
      teach: "Say: Four names, one idea. Whichever tool your class can actually access, use that one for every demo.\nAsk: Who has used any of these? For what?\nExtend: Open your preferred tool live and show the blank chat — this is home base for the whole unit."
    },
    {
      title: "What they are good at",
      body: `<p>Language models excel at tasks where the answer is <i>made of language</i> and there are many acceptable answers:</p>
<ul>
  <li>Drafting — emails, letters, posts, plans, scripts</li>
  <li>Rewriting — shorter, friendlier, more formal, simpler</li>
  <li>Summarizing long text into key points</li>
  <li>Explaining a topic at whatever level you ask for</li>
  <li>Translating between languages</li>
  <li>Brainstorming names, ideas, and alternatives</li>
</ul>
<p>Notice the pattern: in every one of these, <i>you</i> can judge whether the result is good just by reading it.</p>`
    ,
      teach: "Say: Notice the pattern in this list — tasks where YOU can judge the output by reading it.\nAsk: Why does that make these tasks safe territory?\nExtend: Live-demo one: paste a clumsy paragraph and ask for a rewrite."
    },
    {
      title: "What they are bad at",
      body: `<p>The same design causes predictable weaknesses:</p>
<ul>
  <li><b>Precise facts</b> — dates, statistics, quotes, citations, prices. The model produces <i>plausible</i> text, which is not the same as <i>true</i> text.</li>
  <li><b>Recent events</b> — training ends at some cutoff date. Some tools can search the web to compensate; many answers still come from memory.</li>
  <li><b>Counting and careful arithmetic</b> — it predicts text, it does not calculate. Simple math is usually fine; do not trust it with your accounts.</li>
  <li><b>Knowing what it does not know</b> — it rarely says "I am not sure" on its own.</li>
</ul>`
    ,
      teach: "Say: Same design, predictable weaknesses — facts, freshness, arithmetic, and false confidence.\nAsk: Which of these four would bite hardest in schoolwork? In a job?\nExtend: Ask the tool live for something past its training cutoff and inspect the answer together."
    },
    {
      title: "Hallucination",
      body: `<p>When a model confidently states something false — a book that does not exist, a fake statistic, a made-up court case — that is called a <b>hallucination</b>. It is not a rare glitch; it is a direct consequence of how the model works. Plausible-sounding text is exactly what it is built to produce, and false claims can sound just as plausible as true ones.</p>
<p>The working rule for this whole unit: <b>anything that matters gets verified before you rely on it or publish it.</b> Names, numbers, dates, quotes, links — check them against a real source.</p>`
    ,
      teach: "Say: Hallucination is the word of the unit — confident, fluent, wrong. Not a rare glitch; a design consequence.\nAsk: Why is a WRONG answer that sounds RIGHT more dangerous than an obvious error?\nExtend: Try eliciting one live (ask for citations on an obscure topic) — verify a couple on the spot."
    },
    {
      title: "How a chat works",
      body: `<p>A few mechanics worth knowing:</p>
<ul>
  <li>Within one chat, the model can see everything said so far — you can say "make it shorter" and it knows what "it" is.</li>
  <li>A <b>new chat starts blank</b>. The model does not remember other conversations unless the tool has an explicit memory feature.</li>
  <li>You can usually <b>edit your message</b> and resend it, or ask the model to try again — useful when the first answer misses the point.</li>
  <li>Long chats drift. When switching topics, start a fresh chat.</li>
</ul>`
    ,
      teach: "Say: Mechanics matter: memory within a chat, blank slate between chats, edit and regenerate.\nAsk: Why would a long, wandering chat give worse answers than a fresh one?\nExtend: Demonstrate 'make it shorter' referencing an earlier answer — the within-chat memory in action."
    },
    {
      title: "Beyond the chatbot",
      body: `<p>Chat is only one shape AI tools take. The same models now sit inside software you may already use:</p>
<ul>
  <li>Email programs that draft replies</li>
  <li>Word processors and office suites that rewrite or summarize (Copilot in Office, Gemini in Google Docs)</li>
  <li>Photo editors that remove objects or extend backgrounds</li>
  <li>Meeting tools that transcribe and summarize calls</li>
</ul>
<p>Separate from chatbots, there are <b>generators</b> for images, voices, music, and video — covered later in this unit.</p>`
    ,
      teach: "Say: Chat is one doorway — the same models are inside email, docs, editors, and meeting tools already.\nAsk: Where have you already met AI without opening a chatbot?\nExtend: Show an AI feature inside a tool your class already uses (Docs, Office, phone photos)."
    },
    {
      title: "Free vs paid",
      body: `<p>Free tiers use somewhat weaker models and limit how many messages you can send. Paid plans (roughly $20/month) buy a stronger model, higher limits, and extra features like file uploads or image generation.</p>
<p>Sensible path: <b>start free</b>. Learn the skills — they are identical on every tier. Pay only when you hit the limits often enough to feel them, and for the tool you actually use, not all of them.</p>`
    ,
      teach: "Say: Free tiers are enough for this whole course — skills transfer, subscriptions don't.\nAsk: What would make paying worth it for you personally?\nExtend: Show the current limits/pricing of your chosen tool — they change often, so check the day you teach."
    }
  ],

  questions: [
    {
      q: "What does a large language model fundamentally do?",
      key: true,
      choices: [
        "Looks up answers in a curated database of verified facts",
        "Predicts what text should come next, word by word",
        "Searches the internet and copies the best result",
        "Runs logical rules written by human experts"
      ],
      answer: 1
    },
    {
      q: "ChatGPT, Claude, Gemini, and Copilot are best described as:",
      choices: [
        "Different chatbots built on the same underlying idea, so skills transfer between them",
        "Completely unrelated technologies, each of which must be learned separately from scratch",
        "The same product sold under four different names",
        "Search engines with a chat-shaped interface bolted on"
      ],
      answer: 0
    },
    {
      q: "Which task plays to a language model's strengths?",
      choices: [
        "Quoting the exact current price of a stock",
        "Counting the words in a long legal contract precisely",
        "Reporting this morning's breaking news from memory",
        "Rewriting an email to sound more formal"
      ],
      answer: 3
    },
    {
      q: "Why can models be unreliable about recent events?",
      choices: [
        "Recent events are legally excluded from AI products",
        "Their training data ends at a cutoff date",
        "News sites block AI companies from reading them",
        "They can only discuss events the user witnessed"
      ],
      answer: 1
    },
    {
      q: "What is a hallucination?",
      key: true,
      choices: [
        "When the model refuses to answer a question it finds too hard",
        "When the model repeats the same answer twice in one chat",
        "When the model confidently states something false",
        "When the model answers in the wrong language by mistake"
      ],
      answer: 2
    },
    {
      q: "Why do hallucinations happen?",
      choices: [
        "The model is built to produce plausible text, and false claims can sound plausible",
        "Hackers secretly insert false answers into the training data faster than companies can remove them",
        "The model runs out of memory during long conversations",
        "Free tiers intentionally give wrong answers to push upgrades"
      ],
      answer: 0
    },
    {
      q: "Which kind of output should you verify against a real source before relying on it?",
      choices: [
        "A brainstormed list of possible names for a pet you just adopted from the shelter",
        "A statistic the model cites in a report you plan to publish",
        "A friendlier rewording of a message you wrote yourself",
        "A packing list it suggested for a weekend trip"
      ],
      answer: 1
    },
    {
      q: "What does a brand-new chat know about your previous conversations?",
      key: true,
      choices: [
        "Everything, because all chats share one continuous memory",
        "Only conversations from the last thirty days",
        "Nothing, unless the tool has an explicit memory feature",
        "Only the chats you have marked as favorites"
      ],
      answer: 2
    },
    {
      q: "Within a single ongoing chat, what can the model see?",
      choices: [
        "Only your most recent message and nothing before it",
        "Your messages but not its own earlier replies",
        "Everything said so far in that conversation",
        "Only messages shorter than a fixed length"
      ],
      answer: 2
    },
    {
      q: "What is the sensible way to start with paid AI plans?",
      choices: [
        "Subscribe to every major tool so nothing is missed",
        "Avoid paying ever, since free and paid are identical",
        "Pay immediately, because free tiers are useless for learning",
        "Start free, and pay only when you regularly hit the limits"
      ],
      answer: 3
    }
  ]
});
