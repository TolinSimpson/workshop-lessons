section({
  unit: "Unit 1: Basic Computing",
  title: "Section 4: Cybersecurity Fundamentals",

  slides: [
    {
      title: "What are we protecting?",
      body: `<p>Security professionals use three goals, the <b>CIA triad</b>:</p>
<ul>
  <li><b>Confidentiality</b> â€” only the right people can read your data</li>
  <li><b>Integrity</b> â€” the data has not been secretly altered</li>
  <li><b>Availability</b> â€” you can still get at it when you need it</li>
</ul>
<p>Ransomware attacks availability. A data breach attacks confidentiality. A tampered download attacks integrity.</p>`
    },
    {
      title: "What makes a password strong",
      body: `<p>Attackers guess passwords with automated programs testing billions of options. Two properties defeat them:</p>
<ul>
  <li><b>Length</b> â€” matters far more than complexity. Every extra character multiplies the work.</li>
  <li><b>Unpredictability</b> â€” not a dictionary word, name, date, or keyboard pattern.</li>
</ul>
<p><code>P@ssw0rd1!</code> looks complex but is one of the first things cracking tools try â€” substituting <code>@</code> for <code>a</code> and <code>0</code> for <code>o</code> is a known trick.</p>
<p>A passphrase of four random unrelated words, like <code>correct-battery-lamp-staple</code>, is longer, far harder to guess, and easier to remember.</p>`
    },
    {
      title: "The real danger: password reuse",
      body: `<p>The single worst password habit is <b>using the same password on more than one site</b>.</p>
<p>When any one site is breached, attackers take the stolen email-and-password list and try it automatically on hundreds of other sites â€” banks, email, social media. This is called <b>credential stuffing</b>.</p>
<p>Your strongest password is worthless if the site that leaked it was a forum you forgot about in 2014.</p>
<p><b>Rule: every account gets its own unique password.</b></p>`
    },
    {
      title: "Password managers",
      body: `<p>Nobody can memorize 100 unique random passwords. A <b>password manager</b> does it for you.</p>
<p>It generates long random passwords, stores them encrypted, and fills them in automatically. You memorize exactly one strong master password.</p>
<p>A bonus security feature: a password manager fills in credentials only on the <b>correct domain</b>. If a phishing site looks identical to your bank but the address is <code>bank-secure-login.com</code>, the manager stays silent â€” a useful warning your eyes might miss.</p>
<p>Never store passwords in a plain text file or on a sticky note on the monitor.</p>`
    },
    {
      title: "Two-factor authentication (2FA)",
      body: `<p>Authentication factors come in three kinds:</p>
<ul>
  <li><b>Something you know</b> â€” a password or PIN</li>
  <li><b>Something you have</b> â€” a phone, a hardware key</li>
  <li><b>Something you are</b> â€” fingerprint, face</li>
</ul>
<p><b>Two-factor authentication</b> requires two different kinds. A password plus a second password is not 2FA â€” both are "something you know".</p>
<p>Why it works: a stolen password alone is no longer enough to get in.</p>`
    },
    {
      title: "2FA methods, weakest to strongest",
      body: `<table>
  <tr><th>Method</th><th>Strength</th><th>Weakness</th></tr>
  <tr><td>SMS text code</td><td>Weak but better than nothing</td><td>SIM swapping â€” an attacker convinces the phone carrier to move your number to their SIM</td></tr>
  <tr><td>Email code</td><td>Weak</td><td>Useless if the email account itself is compromised</td></tr>
  <tr><td>Authenticator app (TOTP)</td><td>Strong</td><td>Codes generated on your device, offline; still phishable if you type a code into a fake site</td></tr>
  <tr><td>Push approval</td><td>Strong</td><td>"MFA fatigue" â€” spamming prompts until you tap approve out of annoyance</td></tr>
  <tr><td>Hardware key / passkey (FIDO2)</td><td>Strongest</td><td>Cryptographically bound to the real domain, so phishing sites cannot use it. Can be lost.</td></tr>
</table>
<p>Save your <b>backup recovery codes</b> somewhere safe and offline when you enable 2FA. Losing your phone without them can lock you out permanently.</p>`
    },
    {
      title: "Malware: the family tree",
      body: `<p><b>Malware</b> is the umbrella term for malicious software. "Virus" is only one branch of it.</p>
<table>
  <tr><th>Type</th><th>What defines it</th></tr>
  <tr><td><b>Virus</b></td><td>Attaches to a file or program; spreads when a person runs that file</td></tr>
  <tr><td><b>Worm</b></td><td>Self-replicating; spreads across a network with no human action at all</td></tr>
  <tr><td><b>Trojan</b></td><td>Disguised as something useful; you install it yourself</td></tr>
  <tr><td><b>Ransomware</b></td><td>Encrypts your files and demands payment for the key</td></tr>
  <tr><td><b>Spyware / keylogger</b></td><td>Silently records activity, keystrokes, passwords</td></tr>
  <tr><td><b>Adware</b></td><td>Forces unwanted ads, hijacks search and browser settings</td></tr>
  <tr><td><b>Rootkit</b></td><td>Hides deep in the system to stay invisible and persistent</td></tr>
  <tr><td><b>Botnet client</b></td><td>Turns the machine into a remote-controlled node for attacks or spam</td></tr>
</table>`
    },
    {
      title: "How infections actually happen",
      body: `<p>Most infections need a human to do something. Common routes:</p>
<ul>
  <li>Opening an email attachment or enabling macros in a document</li>
  <li>Downloading pirated software, cracks, and key generators â€” a classic trojan delivery method</li>
  <li>Clicking a fake "Your computer is infected!" popup or a fake update button</li>
  <li>Installing a browser extension with excessive permissions</li>
  <li>Plugging in an unknown USB drive</li>
  <li><b>Drive-by downloads</b> â€” an unpatched browser exploited just by visiting a page</li>
</ul>
<p>Signs of infection: sudden slowness, new toolbars or homepages, unknown programs at startup, disabled antivirus, fans running hard while idle, contacts receiving messages you never sent.</p>`
    },
    {
      title: "Antivirus: how it detects things",
      body: `<p>Antivirus (more accurately <b>anti-malware</b>) software uses several methods together:</p>
<ul>
  <li><b>Signature detection</b> â€” compares files against a database of known malware fingerprints. Fast and accurate, but blind to brand-new threats. This is why definition updates matter.</li>
  <li><b>Heuristic analysis</b> â€” flags code that <i>looks</i> like malware structurally.</li>
  <li><b>Behavioural monitoring</b> â€” watches what a running program does. Rapidly encrypting thousands of files is stopped regardless of whether that program was ever seen before.</li>
  <li><b>Sandboxing</b> â€” runs a suspicious file in an isolated environment to observe it safely.</li>
</ul>
<p>A <b>false positive</b> is a harmless file wrongly flagged. A <b>false negative</b> â€” real malware missed â€” is the more dangerous failure.</p>`
    },
    {
      title: "Using antivirus sensibly",
      body: `<ul>
  <li>Windows ships with <b>Microsoft Defender</b>, which is genuinely good. You do not need to buy extra protection to be reasonably safe.</li>
  <li><b>Do not run two real-time antivirus programs at once.</b> They fight each other, cause crashes, and can leave you less protected than one working alone.</li>
  <li>Keep <b>real-time protection</b> on â€” scanning files as they are opened beats occasional manual scans.</li>
  <li>Keep definitions and the operating system updated. Most successful attacks exploit holes that were patched months ago.</li>
</ul>
<p>Antivirus is one layer, not a force field. The other layers: patched software, backups, a firewall, and skepticism.</p>
<p><b>Backups beat everything.</b> Follow the <b>3-2-1 rule</b> â€” 3 copies, on 2 different media, 1 stored offsite or offline. Ransomware cannot encrypt a backup drive that is unplugged.</p>`
    },
    {
      title: "Safe downloading",
      body: `<ul>
  <li>Download from the <b>official source</b> â€” the vendor's own site or an official app store. Not the top sponsored ad in a search result, which is a common malware channel.</li>
  <li>Check the address bar carefully. <code>micros0ft.com</code> and <code>arnazon.com</code> exist to catch fast readers.</li>
  <li><b>HTTPS means encrypted in transit, not trustworthy.</b> Criminals get certificates too. The padlock says nobody is eavesdropping; it says nothing about who owns the site.</li>
  <li>Be suspicious of executable extensions: <code>.exe</code>, <code>.msi</code>, <code>.bat</code>, <code>.cmd</code>, <code>.scr</code>, <code>.vbs</code>, <code>.ps1</code>, and <code>.js</code>.</li>
  <li>Uncheck the bundled extras in installers â€” toolbars and "helpers" hidden behind the Express option.</li>
  <li>Scan anything unfamiliar. <b>VirusTotal</b> checks one file against dozens of engines at once.</li>
</ul>`
    },
    {
      title: "Email threats: phishing",
      body: `<p><b>Phishing</b> is a fake message engineered to make you hand over credentials or run malware. It is the most common way real accounts are compromised.</p>
<p>Variants worth naming:</p>
<ul>
  <li><b>Spear phishing</b> â€” personalised to you specifically, using real details</li>
  <li><b>Whaling</b> â€” aimed at executives</li>
  <li><b>Smishing</b> / <b>vishing</b> â€” the same attack by SMS or voice call</li>
  <li><b>Business email compromise</b> â€” an urgent request for a wire transfer, apparently from your boss</li>
</ul>`
    },
    {
      title: "Spotting a phishing email",
      body: `<p>Red flags, in rough order of usefulness:</p>
<ul>
  <li><b>Manufactured urgency or fear</b> â€” "Your account will be closed in 24 hours." Panic is the entire mechanism; it stops you checking.</li>
  <li><b>A mismatched link.</b> Hover over it (long-press on mobile) and read the real destination before clicking.</li>
  <li><b>A lookalike sender domain</b> â€” <code>support@paypa1.com</code>, or a display name that does not match the actual address.</li>
  <li><b>Unexpected attachments</b>, especially ones asking you to "enable content" or "enable macros".</li>
  <li><b>Requests for credentials, codes, or payment.</b> Legitimate organisations never ask for your password or your 2FA code.</li>
  <li>Generic greetings, odd grammar, a signature block that does not match the sender.</li>
</ul>
<p><b>The reliable defence:</b> do not use links or numbers from the message. Open a new tab, type the site's address yourself, and log in there. If it was real, the notice will be waiting in your account.</p>`
    },
    {
      title: "If something goes wrong",
      body: `<p>You clicked, and you think you were caught. Act in this order:</p>
<ol>
  <li><b>Disconnect from the network</b> â€” pull the Wi-Fi or cable. This stops data leaving and ransomware spreading to shared drives.</li>
  <li><b>Change the password</b> for the affected account, <b>from a different, clean device</b>.</li>
  <li><b>Revoke active sessions</b> and check for 2FA devices, forwarding rules, or recovery emails you did not add â€” attackers add these to keep access after a password change.</li>
  <li><b>Run a full scan</b> with updated antivirus.</li>
  <li><b>Change that password everywhere else it was reused</b>, worst first: email, then banking.</li>
  <li><b>Tell someone</b> â€” your IT department, your bank. Fast reporting is what limits the damage.</li>
</ol>
<p>Note that your <b>email account is the master key</b>: whoever controls it can reset the password on everything else. Protect it with the strongest password and the strongest 2FA you have.</p>`
    }
  ],

  questions: [
    {
      q: "Which factor makes a password hardest to crack?",
      choices: [
        "Length and unpredictability",
        "Replacing letters with lookalike symbols, like @ for a",
        "Adding a number to the end",
        "Changing it every single week"
      ],
      answer: 0
    },
    {
      q: "Why is reusing one password across many sites so dangerous?",
      choices: [
        "It makes each site load more slowly",
        "One site's breach lets attackers automatically try that email and password on hundreds of other sites â€” credential stuffing",
        "Websites can detect it and will ban your account",
        "It uses more storage in your browser"
      ],
      answer: 1
    },
    {
      q: "Which of these is genuinely two-factor authentication?",
      choices: [
        "A password plus a security question",
        "A password plus a PIN",
        "A password plus a code from an authenticator app on your phone",
        "A very long password"
      ],
      answer: 2
    },
    {
      q: "Why is SMS the weakest common form of 2FA?",
      choices: [
        "Text messages cost money to send",
        "Attackers can perform SIM swapping to take over your phone number",
        "SMS codes never expire",
        "Phones cannot receive texts while offline"
      ],
      answer: 1
    },
    {
      q: "What distinguishes a worm from a virus?",
      choices: [
        "A worm self-replicates across a network with no human action; a virus needs someone to run an infected file",
        "A worm only affects mobile phones",
        "A worm encrypts files while a virus never does",
        "A virus spreads by itself; a worm must be installed manually"
      ],
      answer: 0
    },
    {
      q: "A program disguised as a useful free tool that you install yourself is called a:",
      choices: [
        "Worm",
        "Trojan",
        "Rootkit",
        "Firewall"
      ],
      answer: 1
    },
    {
      q: "Signature-based antivirus detection has which key limitation?",
      choices: [
        "It slows the computer to a halt",
        "It only works on text files",
        "It cannot recognise brand-new malware that is not yet in its database",
        "It deletes files without asking"
      ],
      answer: 2
    },
    {
      q: "Why should you avoid running two real-time antivirus programs at once?",
      choices: [
        "It doubles your protection but costs more money",
        "They conflict with each other, causing crashes and potentially worse protection than one alone",
        "Antivirus programs are illegal to run in pairs",
        "The second one will always be disabled automatically with no effect"
      ],
      answer: 1
    },
    {
      q: "A site has a padlock and HTTPS in the address bar. What does that guarantee?",
      choices: [
        "The site is legitimate and safe to trust",
        "The site has been scanned for malware",
        "Only that the connection is encrypted â€” criminals can obtain certificates too",
        "The site is owned by the company shown in its logo"
      ],
      answer: 2
    },
    {
      q: "What is the most reliable response to an urgent email claiming your bank account will be closed?",
      choices: [
        "Click the link and log in quickly before the deadline",
        "Reply asking whether the message is genuine",
        "Ignore the links, open a new tab, type the bank's address yourself, and check your account there",
        "Forward it to your contacts as a warning"
      ],
      answer: 2
    },
    {
      q: "What does the 3-2-1 backup rule state?",
      choices: [
        "3 passwords, 2 devices, 1 antivirus",
        "3 copies of the data, on 2 different media, with 1 stored offsite or offline",
        "Scan 3 times a day, 2 times a week, 1 time a month",
        "3 firewalls, 2 routers, 1 network"
      ],
      answer: 1
    },
    {
      q: "You realise you just entered your password into a phishing site. What should you do FIRST?",
      choices: [
        "Delete the email",
        "Restart the computer",
        "Disconnect from the network, then change that password from a clean device",
        "Wait to see whether anything bad happens"
      ],
      answer: 2
    },
    {
      q: "Why is your email account described as the 'master key'?",
      choices: [
        "It stores every file you have ever downloaded",
        "Whoever controls it can trigger password resets on all your other accounts",
        "It is the only account that cannot use 2FA",
        "Email providers store your other passwords for you"
      ],
      answer: 1
    },
    {
      q: "Which download habit is safest?",
      choices: [
        "Taking the top sponsored search result",
        "Getting software from the vendor's official site or an official app store",
        "Using a cracked version to avoid registration",
        "Downloading from whichever mirror is fastest"
      ],
      answer: 1
    },
    {
      q: "Ransomware primarily attacks which part of the CIA triad?",
      choices: [
        "Confidentiality",
        "Integrity",
        "Availability",
        "Authentication"
      ],
      answer: 2
    }
  ]
});
