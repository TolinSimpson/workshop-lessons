section({
  unit: "Unit 3: Using AI Tools",
  title: "Section 2: Prompting",

  slides: [
    {
      title: "A prompt is just instructions",
      body: `<p>The message you type to an AI tool is called a <b>prompt</b>. There are no magic words and no secret syntax — plain language is exactly what the model was trained on. If you can explain a task to a competent new assistant, you can prompt.</p>
<p>The skill is not phrasing. It is <b>deciding what the task actually is</b> before you type: what you want, who it is for, and what "good" looks like.</p>`
    },
    {
      title: "Vague in, vague out",
      body: `<p>"Write something about our bake sale" forces the model to guess the audience, length, tone, and purpose — and it guesses generic. Compare:</p>
<p><i>"Write a 3-sentence announcement for the school newsletter: bake sale, Saturday 10am, school gym, proceeds fund the library. Warm and casual."</i></p>
<p>Every detail you specify is a guess the model no longer has to make. State:</p>
<ul>
  <li><b>What</b> — the exact task and topic</li>
  <li><b>Who</b> — the audience</li>
  <li><b>How long</b> — sentences, words, or paragraphs</li>
  <li><b>What tone</b> — formal, friendly, playful, neutral</li>
</ul>`
    },
    {
      title: "Give it the material",
      body: `<p>The model knows only what is in the chat. It has not seen your email thread, your notes, or your draft — unless you paste them in. So paste them in:</p>
<p><i>"Here is the email I received: [paste]. Write a polite reply declining the invitation but suggesting next month."</i></p>
<p>Many tools also accept <b>file uploads</b> — a PDF, spreadsheet, or photo — and can answer questions about the contents. Working over material you supply also grounds the answer: summarizing <i>your</i> document leaves far less room to hallucinate than answering from memory.</p>`
    },
    {
      title: "Show an example",
      body: `<p>Some things are easier to show than describe. Style is the classic case: instead of finding words for how you write, paste a sample:</p>
<p><i>"Here are two product descriptions I wrote earlier: [paste]. Write one for a ceramic mug in the same style."</i></p>
<p>The same trick works for formats — show one filled-in row of the table, one entry of the list, one answered question, and ask it to continue the pattern.</p>`
    },
    {
      title: "It is a conversation, not a slot machine",
      body: `<p>The first answer is a first draft. Do not start over when it is close-but-wrong — steer it:</p>
<ul>
  <li>"Shorter — half the length."</li>
  <li>"Good structure, but drop the second paragraph."</li>
  <li>"Less formal. Read it out loud to a friend, not a board meeting."</li>
  <li>"Give me three more options for the opening line."</li>
</ul>
<p>Because the model sees the whole chat, each correction builds on the last. Two or three quick steers usually beat one elaborate prompt.</p>`
    },
    {
      title: "Ask for the shape you want",
      body: `<p>The model will happily answer in whatever structure you name:</p>
<ul>
  <li>"As a numbered list of steps."</li>
  <li>"As a table with columns for cost, time, and difficulty."</li>
  <li>"As a one-paragraph summary followed by bullet points."</li>
</ul>
<p>Two more useful instructions: <i>"Ask me questions before you start if anything is unclear"</i> — which surfaces details you forgot to give — and <i>"Explain it like I'm a complete beginner"</i>, which sets the level of every explanation in the chat.</p>`
    },
    {
      title: "Break big jobs into steps",
      body: `<p>"Write my whole newsletter" produces mush. Big tasks work better as a sequence, with you approving each stage:</p>
<ol>
  <li>"Suggest 5 possible topics for this month's newsletter." — pick one</li>
  <li>"Outline the article on topic 3." — adjust the outline</li>
  <li>"Write the first section from this outline." — edit, continue</li>
</ol>
<p>This keeps you in control of direction, and each step gives the model the context of the approved step before it.</p>`
    },
    {
      title: "When the answer is wrong",
      body: `<p>Three moves, in order of how wrong it is:</p>
<ul>
  <li><b>Slightly off</b> — say what specifically to change, as a follow-up.</li>
  <li><b>Misunderstood the task</b> — edit your original prompt and resend it, adding what was missing. Better than piling corrections on a bad start.</li>
  <li><b>Confidently wrong facts</b> — do not argue with it; the model may "apologize" and produce a different wrong answer. Check a real source.</li>
</ul>
<p>A model challenged on a correct answer will often cave and change it — its agreement is not evidence. Only a source is.</p>`
    }
  ],

  questions: [
    {
      q: "What is a prompt?",
      choices: [
        "A special programming language invented for controlling AI models precisely",
        "The instructions you type to an AI tool, in plain language",
        "A paid feature that unlocks better answers",
        "The model's first reply in a new conversation"
      ],
      answer: 1
    },
    {
      q: "Why does \"Write something about our bake sale\" get a generic result?",
      choices: [
        "Bake sales are too informal a topic for AI tools",
        "The prompt is too short for the model to process",
        "The model deliberately makes every guess as bland and generic as possible",
        "The model must guess the audience, length, tone, and purpose"
      ],
      answer: 3
    },
    {
      q: "You want a reply to an email you received. What should the prompt include?",
      choices: [
        "The pasted text of the email itself",
        "The date you received the email",
        "Your email password so the model can log in",
        "The name of your email provider"
      ],
      answer: 0
    },
    {
      q: "Why does summarizing a document you pasted leave less room for hallucination than answering from memory?",
      choices: [
        "Pasting a document switches the model into a special high-accuracy reading mode",
        "The answer is grounded in material sitting right there in the chat",
        "Summaries are always shorter, and short answers cannot be wrong",
        "Uploaded documents are checked by human reviewers first"
      ],
      answer: 1
    },
    {
      q: "What is the best way to get output matching your personal writing style?",
      choices: [
        "Describe your style at length using formal literary terminology",
        "Ask the model to guess your style from your name",
        "Paste samples of your writing and ask for the same style",
        "Use the longest and most detailed prompt possible"
      ],
      answer: 2
    },
    {
      q: "The first answer is close but too formal. Best next move?",
      choices: [
        "Start a brand-new chat and try different wording",
        "Send a follow-up like \"less formal, half the length\"",
        "Accept it, since the model gives one answer per task",
        "Switch to a different AI tool and ask again there"
      ],
      answer: 1
    },
    {
      q: "How do you get an answer as a table instead of paragraphs?",
      choices: [
        "Ask for a table and name the columns you want",
        "Tables require a spreadsheet program, not a chatbot",
        "Enable table mode in the tool's settings menu",
        "Type the prompt in all capital letters"
      ],
      answer: 0
    },
    {
      q: "Why is \"Ask me questions before you start\" a useful instruction?",
      choices: [
        "It doubles the message limit on free tiers",
        "It makes the model answer significantly faster",
        "Models refuse complex tasks unless it is included",
        "It surfaces details you forgot to include"
      ],
      answer: 3
    },
    {
      q: "What is the recommended approach for a big job like a whole newsletter?",
      choices: [
        "Write one giant prompt describing every possible detail up front in a single message",
        "Ask for ten full versions and pick the best one",
        "Break it into steps — topics, outline, sections — approving each",
        "Let the model choose the topic, length, and structure itself"
      ],
      answer: 2
    },
    {
      q: "The model completely misunderstood your task. Best fix?",
      choices: [
        "Edit the original prompt to add what was missing, and resend",
        "Repeat exactly the same prompt unchanged until the answer eventually improves",
        "Send an angry message so it takes the task seriously",
        "Report the conversation as a bug to the AI company"
      ],
      answer: 0
    },
    {
      q: "You challenge the model on a fact and it apologizes and changes its answer. What does that prove?",
      choices: [
        "The first answer was definitely wrong",
        "The second answer is definitely correct",
        "Nothing — models often cave when challenged; check a real source",
        "The model has now permanently learned the correct fact for future conversations"
      ],
      answer: 2
    }
  ]
});
