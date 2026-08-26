section({
  unit: "Unit 1: Basic Computing",
  title: "Section 2: File Types",
  video: { id: "3nym3fkHqyk", title: "Lossy vs Lossless Compression — Elegant Themes (3 min)" },

  slides: [
    {
      title: "Why file types exist",
      body: `<p>Every file is ultimately just a sequence of bytes. A <b>file format</b> is the agreed-upon rule for how to interpret those bytes.</p>
<p>The same number <code>72</code> could mean the letter "H", a shade of grey in a pixel, or a volume level in an audio sample. The format decides which.</p>
<p>Two big families:</p>
<ul>
  <li><b>Text files</b> — bytes represent readable characters. Openable in Notepad.</li>
  <li><b>Binary files</b> — bytes represent anything else. Opening one in Notepad shows garbage.</li>
</ul>`
    ,
      teach: "Say: Same bytes, different meaning — the format is the decoder ring.\nAsk: Open a photo in Notepad — what do you expect to see?\nExtend: Actually do it: rename a .jpg to .txt and open it. The garbage on screen makes the point instantly."
    },
    {
      title: "Compression",
      body: `<p><b>Compression</b> shrinks a file by finding repetition and describing it more briefly.</p>
<p>Example. A file containing the letter A twenty times takes 20 bytes — one byte per letter:</p>
<pre>AAAAAAAAAAAAAAAAAAAA   ← 20 bytes</pre>
<p>A compressor notices the repetition and stores a short <i>instruction</i> instead:</p>
<pre>repeat "A" 20 times    ← stored as ~3 bytes</pre>
<p>When the file is opened, the instruction is followed and all twenty A's come back exactly. Nothing was lost — the <b>description</b> got shorter, not the information.</p>
<p>Real files rarely repeat a single letter, but they are full of other repetition — the same words appearing again and again in a document, large patches of identical colour in an image. Compressors hunt for those patterns the same way.</p>
<p>Why bother: smaller files mean less disk space, faster downloads, and lower bandwidth costs. The trade-off is CPU time: something has to compress and decompress the data.</p>`
    ,
      teach: "Say: Compression sounds technical but the 'repeat A twenty times' example makes it click. Walk it slowly.\nAsk: What kinds of files do you think squeeze well? Text? Photos? Why?\nExtend: Zip a large text file live and compare sizes; deeper groups can hear about run-length encoding vs dictionary methods."
    },
    {
      title: "Lossless compression",
      body: `<p><b>Lossless</b> compression keeps every single bit. Decompressing gives you a file byte-for-byte identical to the original.</p>
<p><b>Use it when any change would break the file:</b> documents, spreadsheets, source code, program executables, logos and diagrams, archives.</p>
<p>Examples: <code>.zip</code>, <code>.png</code>, <code>.flac</code>, <code>.gif</code>, <code>.7z</code></p>
<p>Downside: the size reduction is limited. You cannot losslessly compress a photo to 5% of its size.</p>`
    ,
      teach: "Say: Lossless means every bit comes back — stress when that matters.\nAsk: What would happen if one letter changed in your saved essay? In a program?\nExtend: Contrast with a corrupted download story from your own experience."
    },
    {
      title: "Lossy compression",
      body: `<p><b>Lossy</b> compression permanently throws away data that humans are unlikely to notice — quiet sounds hidden behind loud ones, fine colour detail the eye skims over.</p>
<p>The discarded data is <b>gone forever</b>. Decompressing gives an approximation, not the original.</p>
<p>Examples: <code>.jpg</code>, <code>.mp3</code>, <code>.mp4</code>, <code>.aac</code>, <code>.webp</code> (lossy mode)</p>
<p><b>Generation loss:</b> every time you re-save a JPEG, it is compressed again and quality drops further. Editing and re-saving the same JPEG twenty times visibly destroys it. Lossless formats do not suffer from this.</p>`
    ,
      teach: "Say: Lossy throws data away forever — and mostly nobody notices. That's the trick.\nAsk: Why can music survive losing data but a spreadsheet can't?\nExtend: Play a heavily compressed vs original audio clip if you have speakers; generation loss demos well by re-saving a JPEG ten times."
    },
    {
      title: "Lossless vs lossy side by side",
      body: `<table>
  <tr><th></th><th>Lossless</th><th>Lossy</th></tr>
  <tr><td>Data kept</td><td>All of it</td><td>Some discarded permanently</td></tr>
  <tr><td>Reversible</td><td>Yes — exact original returns</td><td>No</td></tr>
  <tr><td>File size</td><td>Larger</td><td>Much smaller</td></tr>
  <tr><td>Re-saving repeatedly</td><td>Safe</td><td>Quality degrades each time</td></tr>
  <tr><td>Good for</td><td>Text, code, archives, logos, masters</td><td>Photos, music, video for delivery</td></tr>
  <tr><td>Formats</td><td>ZIP, PNG, FLAC, 7z</td><td>JPEG, MP3, MP4</td></tr>
</table>
<p>Rule of thumb: <b>edit in lossless, deliver in lossy.</b></p>`
    ,
      teach: "Say: This table is the takeaway — edit in lossless, deliver in lossy.\nAsk: Which column would you pick for wedding photos you're editing? For posting them?\nExtend: Relate to your own workflow — RAW photography, audio masters, video exports."
    },
    {
      title: "Raster vs vector images",
      body: `<p><b>Raster</b> images are a grid of pixels. Every image format below except SVG is raster.</p>
<ul><li>Great for photographs and anything with subtle detail</li>
<li>Blurry or blocky when enlarged past their native resolution</li></ul>
<p><b>Vector</b> images store mathematical shapes — lines, curves, fills.</p>
<ul><li>Scale to any size with perfect sharpness</li>
<li>Tiny file sizes for logos, icons, diagrams</li>
<li>Cannot represent a photograph well</li></ul>
<p>Scale a raster logo to a billboard and it turns to mush. Scale a vector logo and it stays crisp.</p>`
    ,
      teach: "Say: Pixels versus math — zoom is the tell.\nAsk: Why does a logo go blurry on a poster but a printed font never does?\nExtend: Zoom deep into a PNG and an SVG side by side in the browser."
    },
    {
      title: "Image formats and their uses",
      body: `<table>
  <tr><th>Format</th><th>Type</th><th>Transparency</th><th>Best for</th></tr>
  <tr><td>JPEG / JPG</td><td>Raster, lossy</td><td>No</td><td>Photographs</td></tr>
  <tr><td>PNG</td><td>Raster, lossless</td><td>Yes</td><td>Logos, screenshots, sharp text and lines</td></tr>
  <tr><td>GIF</td><td>Raster, lossless, 256 colours</td><td>Yes (on/off only)</td><td>Simple animation</td></tr>
  <tr><td>SVG</td><td>Vector (text-based)</td><td>Yes</td><td>Logos, icons, diagrams at any size</td></tr>
  <tr><td>WEBP</td><td>Raster, lossy or lossless</td><td>Yes</td><td>Modern web images — smaller than JPEG or PNG</td></tr>
</table>
<p>Quick picks: <b>photo on a website → JPEG or WEBP. Logo with transparent background → PNG or SVG. Screenshot of text → PNG</b> (JPEG makes text edges fuzzy).</p>`
    ,
      teach: "Say: This table answers the question everyone actually asks: which format do I pick?\nAsk: Screenshot of text — JPEG or PNG? Let them argue before revealing.\nExtend: Show a JPEG screenshot's fuzzy text edges at 200% zoom."
    },
    {
      title: "Text formats: plain text",
      body: `<p><b>Plain text</b> has no formatting at all — no bold, no fonts, no colours. Only characters.</p>
<p>Its virtues: readable by every program on every platform, tiny, and it will still open in fifty years.</p>
<ul>
  <li><code>.txt</code> — plain notes</li>
  <li><code>.csv</code> — comma-separated values; a spreadsheet as plain text</li>
  <li><code>.md</code> — Markdown; plain text with light markup like <code>**bold**</code> (AI chatbots write their answers in Markdown)</li>
  <li><code>.html</code>, <code>.css</code>, <code>.js</code> — source code, coming in Unit 2</li>
</ul>
<p>Character encoding matters here. <b>UTF-8</b> is the modern standard and covers every language and emoji. Wrong encoding is why you sometimes see <code>Ã©</code> where an <code>é</code> should be.</p>`
    ,
      teach: "Say: Plain text is the cockroach of file formats — it survives everything.\nAsk: Why do programmers keep notes in .txt and .md instead of Word?\nExtend: Open a .csv in both Notepad and a spreadsheet app to show one file, two views. The Ã© mojibake example is worth telling as a story."
    },
    {
      title: "Text formats: rich text and documents",
      body: `<table>
  <tr><th>Format</th><th>Nature</th><th>Use</th></tr>
  <tr><td>.rtf</td><td>Rich text, cross-program</td><td>Basic formatting that opens anywhere</td></tr>
  <tr><td>.docx</td><td>Binary (a ZIP of XML files)</td><td>Word processing — editable documents</td></tr>
  <tr><td>.pdf</td><td>Binary, fixed layout</td><td>Final documents that must look identical everywhere and print correctly</td></tr>
  <tr><td>.odt</td><td>Open document standard</td><td>Same role as .docx, open format</td></tr>
</table>
<p>Key distinction: <b>.docx is for editing, .pdf is for delivering.</b> A PDF preserves exact layout and fonts on every device; a .docx may re-flow differently if the reader lacks your font.</p>`
    ,
      teach: "Say: docx is for editing, pdf is for delivering — say it twice, it's on the test of life.\nAsk: Why do job applications ask for PDF resumes?\nExtend: Show the same document re-flowing badly on another machine if you have one handy."
    },
    {
      title: "ZIP files",
      body: `<p>A <b>ZIP file</b> bundles many files and folders into one file and compresses them. It is built into Windows and macOS — right-click a folder to make one; double-click a ZIP to open it.</p>
<p>Two things worth knowing:</p>
<ul>
  <li>ZIP is <b>lossless</b> — extract it and your files come back exactly.</li>
  <li>Zipping already-compressed files (JPEGs, MP4s) saves almost nothing — their redundancy is already gone. ZIP shines on documents, text, and folders of mixed small files.</li>
</ul>
<p>Common trap: some programs cannot open files that are still <i>inside</i> a ZIP. If a downloaded ZIP "doesn't work", extract it first, then use the extracted files.</p>
<p>You may also meet cousins — <code>.7z</code>, <code>.rar</code>, <code>.tar.gz</code> — which do the same job with different tools. Free programs like 7-Zip open all of them.</p>`
    ,
      teach: "Say: ZIP is the format everyone uses and nobody was taught.\nAsk: Who has double-clicked a ZIP and been confused why the program inside 'didn't work'?\nExtend: Demonstrate extract-first live; mention 7-Zip and password-protected archives if asked."
    }
  ],

  questions: [
    {
      q: "Which of these is a lossless format?",
      choices: [
        ".mp3",
        ".jpg",
        ".png",
        ".mp4"
      ],
      answer: 2
    },
    {
      q: "What is the defining feature of lossy compression?",
      key: true,
      choices: [
        "It permanently discards data, so the original cannot be restored",
        "It keeps every single bit and can always be reversed exactly to the original",
        "It only works on text files",
        "It makes files larger but faster to open"
      ],
      answer: 0
    },
    {
      q: "What happens if you open, edit, and re-save the same JPEG twenty times?",
      choices: [
        "Nothing — the quality stays identical",
        "Quality visibly degrades each save, because it is re-compressed",
        "The file converts itself to PNG",
        "The file becomes larger each time but keeps full quality, since JPEG never discards any data"
      ],
      answer: 1
    },
    {
      q: "What is the difference between a raster and a vector image?",
      key: true,
      choices: [
        "Raster stores a pixel grid; vector stores scalable shapes",
        "Vector stores a grid of pixels, while raster stores mathematical shapes that scale to any size",
        "Raster images are always lossless; vector images are always lossy",
        "There is no difference, only the file extension changes"
      ],
      answer: 0
    },
    {
      q: "You need a company logo that stays perfectly sharp on a business card and on a billboard. Which format?",
      choices: [
        "JPEG",
        "SVG",
        "GIF",
        "RAW"
      ],
      answer: 1
    },
    {
      q: "Why is JPEG a poor choice for a screenshot containing small text?",
      choices: [
        "JPEG files cannot be opened by web browsers without a separate plugin installed",
        "JPEG has a maximum size of 256 colours",
        "Lossy compression blurs the sharp edges of small text",
        "JPEG does not support rectangular images"
      ],
      answer: 2
    },
    {
      q: "Which image format supports a transparent background AND is lossless?",
      key: true,
      choices: [
        "JPEG",
        "PNG",
        "RAW",
        "MP3"
      ],
      answer: 1
    },
    {
      q: "Which text encoding is the modern standard that covers essentially every language and emoji?",
      choices: [
        "ASCII",
        "UTF-8",
        "RTF",
        "CSV"
      ],
      answer: 1
    },
    {
      q: "Which pair correctly matches the job?",
      choices: [
        ".docx for delivering a final fixed layout, .pdf for editing",
        ".pdf for delivering a final fixed layout, .docx for editing",
        "Both are plain text formats",
        "Both are lossy image formats"
      ],
      answer: 1
    },
    {
      q: "What does a ZIP file do?",
      choices: [
        "Bundles files into one and compresses them, losslessly",
        "Converts every file inside into plain text",
        "Permanently discards data to shrink files as far as possible",
        "Encrypts files so they can never be opened again"
      ],
      answer: 0
    },
    {
      q: "Why does zipping a folder full of JPEGs and MP4s save almost no space?",
      choices: [
        "ZIP cannot read media files, so it stores photos and videos completely untouched",
        "Those files are already compressed, so ZIP finds no redundancy",
        "ZIP only compresses files under 1 MB",
        "Media files are encrypted by default"
      ],
      answer: 1
    },
    {
      q: "A program refuses to open a file you downloaded inside a ZIP. Likely fix?",
      choices: [
        "Rename the ZIP so it ends in the file's own extension",
        "Extract the ZIP first, then open the extracted file",
        "Re-download the ZIP from a different website",
        "Compress the ZIP a second time to repair it"
      ],
      answer: 1
    }
  ]
});
