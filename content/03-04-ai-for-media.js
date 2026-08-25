section({
  unit: "Unit 3: Using AI Tools",
  title: "Section 4: AI for Images, Audio, and Video",

  slides: [
    {
      title: "Images from a description",
      body: `<p>Image generators turn a written description into a picture in seconds. The big chatbots have this built in (ChatGPT, Gemini, Copilot can all generate images), and dedicated tools like <b>Midjourney</b> go further on artistic quality.</p>
<p>Like text generation, the first result is a draft. Expect to generate several variations, pick the closest, and refine — "same image, but at sunset", "remove the text from the sign".</p>`
    ,
      teach: "Say: Now pictures from sentences. Same loop as text: draft, judge, refine.\nAsk: What would you make first if a description became an image in ten seconds?\nExtend: Generate something live from a class suggestion — misfires are as instructive as successes."
    },
    {
      title: "Describing the picture you want",
      body: `<p>An image prompt works like a text prompt: every detail you specify is a guess the tool no longer makes. Cover four things:</p>
<ul>
  <li><b>Subject</b> — what is in the picture ("a red bicycle leaning on a brick wall")</li>
  <li><b>Style</b> — photo, watercolor, cartoon, flat illustration, pencil sketch</li>
  <li><b>Mood and lighting</b> — warm morning light, dramatic shadows, soft pastel</li>
  <li><b>Framing</b> — close-up, wide shot, from above, centered with empty space for text</li>
</ul>
<p><i>"A watercolor of a red bicycle against a brick wall, soft morning light, wide shot"</i> beats <i>"a bike"</i> every time.</p>
<p>One persistent weakness: <b>text inside images</b> often comes out garbled. Generate the picture, add the words yourself in an editor.</p>`
    ,
      teach: "Say: Subject, style, mood, framing — every unstated detail is the tool's guess.\nAsk: Upgrade 'a bike' together into a full prompt on the board.\nExtend: Run the weak and strong prompt side by side; note the garbled-text weakness with a sign or logo attempt."
    },
    {
      title: "Editing photos with AI",
      body: `<p>AI is also inside photo editing, working on <i>real</i> photos:</p>
<ul>
  <li><b>Remove objects</b> — strangers, wires, litter vanish and the background fills in</li>
  <li><b>Extend backgrounds</b> — grow a photo beyond its original edges</li>
  <li><b>Cut out subjects</b> — one click instead of careful tracing</li>
  <li><b>Upscale</b> — enlarge a small image while keeping it sharp</li>
</ul>
<p>These features are in phone photo apps, free editors, and professional tools alike — often labeled "magic" something.</p>`
    ,
      teach: "Say: AI is also inside photo editing — remove, extend, cut out, upscale, on REAL photos.\nAsk: Where's the line between fixing a photo and faking one?\nExtend: Demo object removal on a phone or editor if available — the wow moment of this section."
    },
    {
      title: "Audio: voice and transcription",
      body: `<p>Two directions, both useful for content:</p>
<ul>
  <li><b>Text to speech</b> — modern AI voices read a script naturally enough for video narration, podcasts, and audiobooks. Tools like ElevenLabs lead here; some can clone a voice from a sample (only ever your own, or with clear permission).</li>
  <li><b>Speech to text (transcription)</b> — record a meeting, interview, or voice memo and get accurate written text back. Often the fastest way to "write" is to talk, transcribe, then have a chatbot clean it up.</li>
</ul>
<p>AI music generators also exist — describe a mood and genre, get a track for background use.</p>`
    ,
      teach: "Say: Two directions: text to speech, and speech to text. Both are workhorses.\nAsk: Talk-then-transcribe versus type: when would dictating win?\nExtend: Play a modern AI voice sample; raise the voice-cloning consent rule here — it previews the deepfake lesson."
    },
    {
      title: "Video",
      body: `<p>The newest and fastest-moving area:</p>
<ul>
  <li><b>Generation</b> — tools like OpenAI's Sora and Google's Veo produce short clips from a text description. Impressive, still imperfect: watch for warped hands, morphing objects, and inconsistent details between shots.</li>
  <li><b>AI-assisted editing</b> — this is the quietly practical part: auto-generated captions, cutting silences and filler words, editing video by editing its transcript, translating a voice track.</li>
</ul>
<p>For most creators today, AI's biggest video win is the editing help, not full generation.</p>`
    ,
      teach: "Say: Video generation is impressive and imperfect; AI EDITING is the quiet workhorse — captions, silence-cutting, transcript edits.\nAsk: Where have you already seen AI video without labeling it that? (Auto-captions.)\nExtend: Show a generated clip and hunt for artifacts together — hands, physics, continuity."
    },
    {
      title: "Files, formats, and originals",
      body: `<p>Unit 1's file knowledge applies directly to AI output:</p>
<ul>
  <li>Generated images usually download as <b>PNG</b> or <b>JPEG</b> — same trade-offs as before: JPEG small for photos, PNG lossless with transparency support</li>
  <li>Voice and music come out as <b>MP3</b> or <b>WAV</b>; video as <b>MP4</b></li>
  <li><b>Keep your originals.</b> Save the full-size first download and the prompt that made it; every re-export and re-compression loses quality (lossy compression, Unit 1)</li>
</ul>
<p>Name files so future-you can find them: <code>logo-draft-3-blue.png</code>, not <code>image(7).png</code>.</p>`
    ,
      teach: "Say: Unit 1 pays off: formats, quality loss, originals. Keep the first full-size download and the prompt.\nAsk: Why does re-exporting a JPEG or MP3 repeatedly damage it? (Callback: lossy compression.)\nExtend: Show your own file-naming scheme for generated assets — boring, priceless."
    },
    {
      title: "A content workflow, end to end",
      body: `<p>Putting the unit together — one person making a short video:</p>
<ol>
  <li><b>Chatbot</b> — brainstorm topics, then tighten one into a script</li>
  <li><b>Image generator</b> — thumbnail and illustration images</li>
  <li><b>Text to speech</b> — narrate the script (or record yourself and let AI clean the audio)</li>
  <li><b>Video editor</b> — assemble; AI adds captions and cuts the dead air</li>
  <li><b>Chatbot again</b> — title options and description for upload</li>
</ol>
<p>Each step is a tool assisting a decision <i>you</i> make. The taste — what to make, what to keep, what to cut — never stops being your job.</p>`
    ,
      teach: "Say: The whole pipeline: script, images, voice, assembly, packaging — AI assists each step, you decide each step.\nAsk: Which step would AI help YOU most with? Which would you never delegate?\nExtend: If time allows, run a micro-project: 30-second video plan through every step as a class."
    }
  ],

  questions: [
    {
      q: "What does an image generator need from you?",
      choices: [
        "A rough sketch drawn with the mouse",
        "A written description of the picture you want",
        "A photograph of a similar scene taken by someone else",
        "The name of a professional artist to imitate"
      ],
      answer: 1
    },
    {
      q: "Which prompt gives an image generator the most to work with?",
      choices: [
        "\"A watercolor of a red bicycle against a brick wall, soft morning light, wide shot\"",
        "\"A very high quality picture, the absolute best you can possibly make, with no mistakes\"",
        "\"A bike, and make sure it looks really good this time\"",
        "\"Something nice for my presentation, you decide what\""
      ],
      answer: 0
    },
    {
      q: "What is a known weakness of image generators?",
      choices: [
        "They cannot produce pictures of animals",
        "They only work in black and white",
        "Text inside images often comes out garbled",
        "They refuse to draw outdoor scenes in the dark"
      ],
      answer: 2
    },
    {
      q: "AI object removal in a photo editor does what?",
      choices: [
        "Deletes the photo file securely from the disk",
        "Blurs the entire photo except one selected subject in the foreground",
        "Converts the photo into a pencil drawing",
        "Erases something and fills in the background behind it"
      ],
      answer: 3
    },
    {
      q: "What is transcription?",
      choices: [
        "Turning recorded speech into written text",
        "Turning written text into a natural-sounding voice",
        "Translating text between two languages",
        "Compressing an audio file to a smaller size"
      ],
      answer: 0
    },
    {
      q: "When is cloning a voice acceptable?",
      choices: [
        "Whenever the result is clearly labeled as a parody",
        "Only for voices of people who are famous",
        "Only your own voice, or with the person's clear permission",
        "Whenever the resulting clone is used for less than one minute of finished audio"
      ],
      answer: 2
    },
    {
      q: "What visual flaws are typical of AI-generated video today?",
      choices: [
        "Warped hands, morphing objects, inconsistent details between shots",
        "Output only in black and white at low resolution",
        "A visible watermark permanently covering the center of every generated frame",
        "Sound permanently out of sync by several seconds"
      ],
      answer: 0
    },
    {
      q: "For most creators today, AI's biggest video win is:",
      choices: [
        "Generating entire feature-length films from a single one-sentence prompt",
        "Editing help — captions, cutting silences, transcript-based edits",
        "Replacing the camera for all live footage",
        "Automatically uploading videos to every platform"
      ],
      answer: 1
    },
    {
      q: "Why keep the first full-size download of a generated image?",
      choices: [
        "Generators charge to download the same image twice",
        "The first download carries the legal ownership record",
        "Files shrink automatically after thirty days",
        "Every re-export and re-compression loses quality"
      ],
      answer: 3
    },
    {
      q: "Which format would a generated narration most likely download as?",
      choices: ["PNG", "MP3", "TXT", "ZIP"],
      answer: 1
    },
    {
      q: "In the end-to-end workflow, what stays the human's job throughout?",
      choices: [
        "Typing the captions by hand for accuracy",
        "The taste — deciding what to make, keep, and cut",
        "Rendering the final video file on their own computer",
        "Drawing each illustration before the AI colors it"
      ],
      answer: 1
    }
  ]
});
