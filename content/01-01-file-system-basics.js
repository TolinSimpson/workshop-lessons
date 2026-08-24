section({
  unit: "Unit 1: Basic Computing",
  title: "Section 1: File System Basics",

  slides: [
    {
      title: "What is a file system?",
      body: `<p>A <b>file system</b> is how a computer organizes and keeps track of data on a storage device.</p>
<p>It answers three questions for every piece of data:</p>
<ul>
  <li><b>What is it called?</b> (the file name)</li>
  <li><b>Where does it live?</b> (the path)</li>
  <li><b>Where are its bytes physically stored?</b> (handled by the OS, hidden from you)</li>
</ul>
<p>Without a file system, a drive is just a very long row of numbered blocks with no names and no structure.</p>`
    },
    {
      title: "Directories (folders)",
      body: `<p>A <b>directory</b> — usually called a folder — is a container that holds files and other directories.</p>
<p>Directories nest inside each other, forming a <b>tree</b>:</p>
<pre>Documents/
├── School/
│   ├── essay.docx
│   └── notes.txt
└── Photos/
    └── vacation/
        └── beach.jpg</pre>
<p>The directory at the very top is the <b>root</b>. On Windows the root of a drive is <code>C:\\</code>. On macOS and Linux the root is <code>/</code>.</p>`
    },
    {
      title: "Paths: absolute vs relative",
      body: `<p>A <b>path</b> is the address of a file.</p>
<p><b>Absolute path</b> — starts at the root, works from anywhere:</p>
<pre>C:\\Users\\Alex\\Documents\\essay.docx
/home/alex/Documents/essay.docx</pre>
<p><b>Relative path</b> — starts from where you currently are:</p>
<pre>Documents\\essay.docx
../Photos/beach.jpg</pre>
<p>Two special names appear in every directory:</p>
<ul>
  <li><code>.</code> means "this directory"</li>
  <li><code>..</code> means "the parent directory" (one level up)</li>
</ul>
<p>Windows separates path parts with a backslash <code>\\</code>; macOS and Linux use a forward slash <code>/</code>.</p>`
    },
    {
      title: "Drives and volumes",
      body: `<p>A <b>drive</b> is a physical storage device. A <b>volume</b> (or partition) is a formatted section of a drive that the operating system presents as a place to store files.</p>
<p>One physical drive can be split into several volumes.</p>
<p><b>Windows</b> gives each volume a letter:</p>
<ul>
  <li><code>C:</code> — usually the main drive with the operating system</li>
  <li><code>D:</code>, <code>E:</code>, … — extra drives, USB sticks, external drives</li>
</ul>
<p><b>macOS and Linux</b> have no drive letters. Extra drives are <b>mounted</b> into the single tree, for example at <code>/Volumes/USB</code> or <code>/mnt/backup</code>.</p>`
    },
    {
      title: "Storage hardware: HDD vs SSD",
      body: `<table>
  <tr><th></th><th>HDD (hard disk drive)</th><th>SSD (solid state drive)</th></tr>
  <tr><td>How it works</td><td>Spinning magnetic platters, moving read/write head</td><td>Flash memory chips, no moving parts</td></tr>
  <tr><td>Speed</td><td>Slower</td><td>Much faster</td></tr>
  <tr><td>Durability</td><td>Damaged by drops and shocks</td><td>Handles shocks well</td></tr>
  <tr><td>Cost per GB</td><td>Cheaper</td><td>More expensive</td></tr>
  <tr><td>Typical use</td><td>Bulk storage, backups</td><td>Operating system, apps, everyday work</td></tr>
</table>
<p>Both are <b>non-volatile</b> — they keep data when the power is off. <b>RAM</b> is different: it is fast working memory that is wiped every time the machine powers down. RAM is not storage.</p>`
    },
    {
      title: "Measuring storage",
      body: `<p>Storage is measured in <b>bytes</b>. One byte is roughly one character of plain text.</p>
<table>
  <tr><th>Unit</th><th>Roughly</th><th>Example</th></tr>
  <tr><td>KB (kilobyte)</td><td>1,000 bytes</td><td>A short text file</td></tr>
  <tr><td>MB (megabyte)</td><td>1,000 KB</td><td>A photo or an MP3 song</td></tr>
  <tr><td>GB (gigabyte)</td><td>1,000 MB</td><td>A movie</td></tr>
  <tr><td>TB (terabyte)</td><td>1,000 GB</td><td>A whole drive of files</td></tr>
</table>
<p>Note the <b>bit vs byte</b> trap: 8 bits = 1 byte. Internet speeds are advertised in megabits per second (Mbps), while file sizes are in megabytes (MB). A 100 Mbps connection downloads about 12.5 MB per second.</p>`
    },
    {
      title: "File extensions",
      body: `<p>A <b>file extension</b> is the part of the name after the final dot.</p>
<pre>report.docx   →  extension is  .docx
photo.jpg     →  extension is  .jpg
archive.tar.gz → extension is  .gz</pre>
<p>The extension tells the operating system which program should open the file. It is a <b>label, not the content</b>.</p>
<p>Renaming <code>song.mp3</code> to <code>song.jpg</code> does not convert it. The bytes are unchanged — you have just mislabeled the file, and the image viewer will fail to open it.</p>
<p>What actually identifies a file's real type is its <b>magic number</b>: a short signature in the first few bytes. A PNG always begins with the bytes <code>89 50 4E 47</code>.</p>`
    },
    {
      title: "Hidden extensions and why it matters",
      body: `<p>Windows hides known file extensions by default. That is a security problem.</p>
<p>A file actually named <code>invoice.pdf.exe</code> displays as <b>invoice.pdf</b> — with a PDF-looking icon. Double-clicking it runs a program, not a document.</p>
<p><b>Turn extensions on.</b> In Windows File Explorer: View → Show → File name extensions.</p>
<p>Other things worth knowing:</p>
<ul>
  <li>Files and folders starting with a dot (<code>.gitignore</code>) are hidden on macOS and Linux.</li>
  <li>Windows file names cannot contain <code>\\ / : * ? " &lt; &gt; |</code></li>
  <li>Windows treats <code>Report.txt</code> and <code>report.txt</code> as the same name; Linux treats them as two different files.</li>
</ul>`
    }
  ],

  questions: [
    {
      q: "What does the file extension of a file actually do?",
      choices: [
        "It tells the operating system which program should open it",
        "It converts the file's data into that format",
        "It compresses the file to save space",
        "It determines which physical drive and sector the file's bytes are stored on"
      ],
      answer: 0
    },
    {
      q: "Which of these is an absolute path?",
      choices: [
        "..\\..\\Photos\\vacation\\summer-trip\\beach.jpg",
        "Documents\\essay.docx",
        "C:\\Users\\Alex\\Documents\\essay.docx",
        "./notes.txt"
      ],
      answer: 2
    },
    {
      q: "In a file path, what does `..` mean?",
      choices: [
        "The root of the drive",
        "The parent directory",
        "The current directory you are working in right now",
        "A hidden file"
      ],
      answer: 1
    },
    {
      q: "You rename `song.mp3` to `song.jpg`. What happens?",
      choices: [
        "The audio is converted into an image",
        "The file is deleted because the operating system rejects the invalid format",
        "Nothing inside the file changes — it is just mislabeled",
        "The file is automatically compressed"
      ],
      answer: 2
    },
    {
      q: "Which statement about SSDs versus HDDs is correct?",
      choices: [
        "SSDs have no moving parts and are faster, but cost more per gigabyte",
        "HDDs have no moving parts and are faster than SSDs",
        "SSDs lose all their data when the computer is turned off",
        "HDDs handle drops and physical shocks better than SSDs because their platters spin"
      ],
      answer: 0
    },
    {
      q: "On Windows, what is `C:` normally?",
      choices: [
        "A special folder inside the Documents directory of the main user account",
        "The drive letter of the volume holding the operating system",
        "The name of the file system format",
        "A temporary storage area cleared at shutdown"
      ],
      answer: 1
    },
    {
      q: "How many megabytes are in one gigabyte (using the common round numbers)?",
      choices: [
        "100",
        "512",
        "1,000",
        "1,000,000"
      ],
      answer: 2
    },
    {
      q: "Why is it recommended to turn on 'show file name extensions' in Windows?",
      choices: [
        "It makes files open faster",
        "It frees up disk space by removing extension data from every file name",
        "It reveals disguised files like `invoice.pdf.exe`",
        "It is required in order to save files to a USB drive"
      ],
      answer: 2
    },
    {
      q: "What is the directory at the very top of a file system tree called?",
      choices: [
        "The root",
        "The parent",
        "The volume",
        "The header"
      ],
      answer: 0
    },
    {
      q: "Which of these is NOT permanent storage?",
      choices: [
        "An SSD",
        "A hard disk drive",
        "A USB flash drive",
        "RAM"
      ],
      answer: 3
    }
  ]
});
