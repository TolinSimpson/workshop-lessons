section({
  unit: "Unit 2: Intro to Computer Science",
  title: "Section 5: How Networks Work",
  video: { id: "KjD3KANH-xc", title: "How Does the Internet Work? Data Packets — PowerCert (6 min)" },

  slides: [
    {
      title: "What a network is",
      body: `<p>A <b>network</b> is two or more computers connected so they can exchange data. The connection can be a cable, Wi-Fi, or fibre — the idea is the same.</p>
<ul>
  <li><b>LAN</b> (local area network) — the devices in one home, office, or school, connected through one router.</li>
  <li><b>WAN</b> (wide area network) — networks joined across cities and countries.</li>
  <li><b>The internet</b> — the global network of networks. No company owns it; thousands of independent networks agree to pass each other's traffic.</li>
</ul>
<p>Everything in the next section — websites, hosting, domains — is built on top of this plumbing, so it is worth seeing how the plumbing works first.</p>`
    ,
      teach: "Say: A network is computers that can talk; the internet is networks agreeing to pass each other's messages. Nobody owns it.\nAsk: What's the smallest network you own? (Phone + laptop hotspot counts.)\nExtend: Sketch your building's actual network on the board — devices, router, ISP."
    },
    {
      title: "IP addresses and packets",
      body: `<p>Every device on a network gets an <b>IP address</b> — a numeric label like <code>192.168.1.42</code> — so traffic can find it, the way post finds a house number.</p>
<p>Data does not travel as one big lump. It is chopped into <b>packets</b>: small chunks, each stamped with the sender's and receiver's IP addresses.</p>
<ol>
  <li>Your device splits the data into packets.</li>
  <li><b>Routers</b> pass each packet hop by hop toward its destination — different packets may even take different routes.</li>
  <li>The receiver reassembles them in order and asks for any that went missing.</li>
</ol>
<p>This is why the internet is resilient: if a route fails, packets simply flow around it.</p>`
    ,
      teach: "Say: Data travels as packets — addressed envelopes that may take different roads and reassemble at the end.\nAsk: Why does chopping data into packets make the internet hard to break?\nExtend: Run tracert/traceroute to a famous site live and read the hops."
    },
    {
      title: "Clients and servers",
      body: `<p>Most of the internet runs on the <b>client–server</b> model:</p>
<ul>
  <li>A <b>server</b> is a program (and usually a dedicated machine) that waits for requests and answers them. It is always on and reachable.</li>
  <li>A <b>client</b> is the program that sends requests — your browser, your mail app, a game on your phone.</li>
</ul>
<p>The conversation is always request → response: the client asks, the server answers. Servers never call you first.</p>
<p>Examples: browser ↔ web server, mail app ↔ mail server, game ↔ game server.</p>
<p>"Server" describes a <i>role</i>, not special hardware — any computer can act as one. The same machine can be a server for one conversation and a client in another.</p>
<p>The other model, worth one line: <b>peer-to-peer</b> has no central server — every participant talks directly to the others. File sharing and cryptocurrencies work this way. The web does not: it is client–server, and <b>hosting</b> — the next section — is the business of providing the server.</p>`
    ,
      teach: "Say: Client asks, server answers — that's most of the internet. 'Server' is a role, not special hardware.\nAsk: In this classroom, right now, name three client-server conversations happening.\nExtend: The P2P aside can grow here if the class asks about torrents or crypto."
    },
    {
      title: "Ports and protocols",
      body: `<p>An IP address gets a packet to the right <i>machine</i>. A <b>port</b> — a number stamped on the packet — gets it to the right <i>program</i> on that machine, like a flat number inside a building. Web traffic uses port <b>80</b> (HTTP) or <b>443</b> (HTTPS); email and games use others.</p>
<p>A <b>protocol</b> is the agreed language both ends speak once connected — <b>HTTP</b> for web pages, <b>HTTPS</b> for the encrypted version.</p>
<p>So "visit <code>https://example.com</code>" really means: look up the IP for <code>example.com</code>, connect to it on port 443, and speak HTTPS.</p>`
    ,
      teach: "Say: IP finds the machine, the port finds the program, the protocol is the language spoken.\nAsk: So what three things happen when you visit https://example.com?\nExtend: Show netstat or the browser's network tab for real ports in action."
    },
    {
      title: "From your sofa to the internet",
      body: `<p>How a home network actually connects:</p>
<ol>
  <li>Your devices connect to your <b>router</b> over Wi-Fi or cable.</li>
  <li>The router gives each device a <b>private IP</b> (usually <code>192.168.x.x</code>) that only works inside your home.</li>
  <li>Your <b>ISP</b> (internet service provider) gives the router one <b>public IP</b> that the rest of the internet sees.</li>
  <li>The router translates between the two — so all your devices share that one public address.</li>
</ol>
<p>Two consequences worth noticing:</p>
<ul>
  <li>Your public IP usually <b>changes</b> from time to time — your ISP reassigns it.</li>
  <li>Machines out on the internet <b>cannot reach into</b> your home network uninvited; the router only lets in replies to conversations you started.</li>
</ul>
<p>Both are good for safety — and both are exactly why serving a website from home is painful, as the next section explains.</p>`
    ,
      teach: "Say: Home networks share one public address; the router translates. That's also a safety wall.\nAsk: Why can't a stranger on the internet directly reach your laptop?\nExtend: Log into a real router admin page (yours, projected) — DHCP table, connected devices. Foreshadows why home hosting is painful."
    }
  ],

  questions: [
    {
      q: "What is the internet?",
      key: true,
      choices: [
        "One giant central supercomputer owned and operated by a single private company",
        "A global network of independent networks that pass each other's traffic",
        "Another name for the World Wide Web browser",
        "A type of Wi-Fi signal"
      ],
      answer: 1
    },
    {
      q: "How does data actually travel across a network?",
      key: true,
      choices: [
        "As one continuous unbroken stream that must follow a single path",
        "Split into packets that are routed independently and reassembled at the destination",
        "As physical copies mailed between data centres",
        "Only when both computers are made by the same manufacturer and run the same operating system"
      ],
      answer: 1
    },
    {
      q: "Why is the packet-based design resilient?",
      choices: [
        "Packets are encrypted so they cannot be lost",
        "If one route fails, packets can flow around it by other routes",
        "Each packet is stored permanently on every router",
        "Packets travel faster than the speed of electricity through copper wire"
      ],
      answer: 1
    },
    {
      q: "In the client–server model, which statement is true?",
      key: true,
      choices: [
        "The client waits for requests and the server sends them",
        "The client sends requests and the server answers them",
        "Both sides send requests to each other at random",
        "Servers can only serve one client at a time"
      ],
      answer: 1
    },
    {
      q: "What is a 'server'?",
      choices: [
        "A special kind of hardware that ordinary computers cannot imitate",
        "A program or machine that waits for requests and answers them",
        "Any computer that happens to have a large hard drive and lots of RAM",
        "The cable that connects a home to the internet"
      ],
      answer: 1
    },
    {
      q: "What defines a peer-to-peer network?",
      choices: [
        "All traffic must pass through one central, always-on server owned by the operator",
        "Each participant acts as both client and server, talking directly to others",
        "It only works over cables, never Wi-Fi",
        "It requires a paid subscription"
      ],
      answer: 1
    },
    {
      q: "Websites, email, and banking apps use which model?",
      choices: [
        "Client–server",
        "Peer-to-peer",
        "Neither — they work without networks",
        "Both at once, always"
      ],
      answer: 0
    },
    {
      q: "An IP address gets a packet to the right machine. What gets it to the right program on that machine?",
      choices: [
        "The domain name",
        "A port number",
        "The Wi-Fi password",
        "The file extension"
      ],
      answer: 1
    },
    {
      q: "Which port and protocol pair serves encrypted web pages?",
      choices: [
        "HTTP on port 80, the unencrypted web",
        "HTTPS on port 443",
        "SMTP on port 25",
        "DNS on port 53"
      ],
      answer: 1
    },
    {
      q: "What is a protocol?",
      choices: [
        "The agreed language both ends of a connection speak, like HTTP",
        "A brand of router",
        "The physical copper or fibre cable that carries signals between two computers",
        "A law about internet usage"
      ],
      answer: 0
    },
    {
      q: "Why do all the devices in your home appear to the internet as one address?",
      choices: [
        "They take turns being connected",
        "The router holds the one public IP and translates for the private ones",
        "The ISP assigns every single device in the home its own permanent public IP",
        "Wi-Fi merges the devices into one computer"
      ],
      answer: 1
    }
  ]
});
