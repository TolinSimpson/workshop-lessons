const app = document.getElementById('app');
const crumb = document.getElementById('crumb');

// Every file in content/ calls section({...}) once. Its id is its filename.
const SECTIONS = [];
let loading = '';
function section(s) { SECTIONS.push({ ...s, id: loading }); }

// --- routing: #/  |  #/<section-id>/lesson/0  |  #/<section-id>/test ---
function parse() {
  const p = location.hash.replace(/^#\/?/, '').split('/').filter(Boolean);
  return { id: p[0], mode: p[1], index: parseInt(p[2] || '0', 10) };
}
function esc(s) { return String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c])); }

function render() {
  const r = parse();
  const section = SECTIONS.find(s => s.id === r.id);
  if (!section) return home();
  if (r.mode === 'test') return test(section);
  return lesson(section, isNaN(r.index) ? 0 : r.index);
}

function home() {
  crumb.textContent = 'Computing Course';
  const units = [];
  for (const s of SECTIONS) {
    let u = units.find(u => u.title === s.unit);
    if (!u) units.push(u = { title: s.unit, sections: [] });
    u.sections.push(s);
  }
  app.innerHTML = units.map(u => `
    <h2>${esc(u.title)}</h2>
    ${u.sections.map(s => `
      <div class="card">
        <div><b>${esc(s.title)}</b></div>
        <div class="meta">${s.slides.length} slides &middot; ${s.questions.length} questions</div>
        <div class="row">
          <a class="btn primary" href="#/${s.id}/lesson/0">Lesson</a>
          <a class="btn" href="#/${s.id}/test">Test</a>
        </div>
      </div>`).join('')}
  `).join('');
}

function lesson(section, i) {
  const n = section.slides.length;
  i = Math.max(0, Math.min(i, n - 1));
  const slide = section.slides[i];
  crumb.textContent = section.unit + ' — ' + section.title;
  const last = i === n - 1;
  app.innerHTML = `
    <h3>${esc(section.title)}</h3>
    <div class="slide">
      <h2>${slide.title}</h2>
      ${slide.body}
    </div>
    ${window.TEACHER && slide.teach ? `
    <div class="teach">
      <div class="tlabel">Teacher notes</div>
      ${slide.teach.split('\n').map(line => {
        const m = line.match(/^(Say|Ask|Extend):\s*(.*)$/);
        return m ? `<p><b>${m[1]}:</b> ${esc(m[2])}</p>` : `<p>${esc(line)}</p>`;
      }).join('')}
    </div>` : ''}
    <div class="navbar">
      <button class="btn" id="prev" ${i === 0 ? 'disabled' : ''}>&#8592; Back</button>
      ${last
        ? `<a class="btn primary" href="#/${section.id}/test">Take the test &#8594;</a>`
        : `<button class="btn primary" id="next">Next &#8594;</button>`}
      <span class="count">Slide ${i + 1} of ${n}</span>
    </div>
    <div class="dots">
      ${section.slides.map((_, k) =>
        `<button class="dot ${k === i ? 'on' : ''}" data-i="${k}">${k + 1}</button>`).join('')}
    </div>`;

  const go = k => { location.hash = `#/${section.id}/lesson/${k}`; };
  const prev = document.getElementById('prev');
  const next = document.getElementById('next');
  if (prev) prev.onclick = () => go(i - 1);
  if (next) next.onclick = () => go(i + 1);
  app.querySelectorAll('.dot').forEach(d => d.onclick = () => go(+d.dataset.i));

  document.onkeydown = e => {
    if (e.key === 'ArrowRight' && !last) go(i + 1);
    if (e.key === 'ArrowLeft' && i > 0) go(i - 1);
  };
  window.scrollTo(0, 0);
}

function test(section) {
  const qs = section.questions;
  crumb.textContent = section.unit + ' — ' + section.title + ' — Test';
  document.onkeydown = null;
  app.innerHTML = `
    <h3>${esc(section.title)} &mdash; Test</h3>
    <p class="muted">${qs.length} multiple choice questions. Pick one answer each, then submit.</p>
    <form id="quiz">
      ${qs.map((q, i) => `
        <div class="q" data-i="${i}">
          <div class="qtext">${i + 1}. ${esc(q.q)}</div>
          ${q.choices.map((c, j) => `
            <label data-j="${j}">
              <input type="radio" name="q${i}" value="${j}">${esc(c)}
            </label>`).join('')}
        </div>`).join('')}
      <div class="row">
        <button type="submit" class="btn primary">Submit answers</button>
        <a class="btn" href="#/${section.id}/lesson/0">Review lesson</a>
      </div>
    </form>
    <div id="result"></div>`;

  document.getElementById('quiz').onsubmit = e => {
    e.preventDefault();
    const form = e.target;
    let score = 0, unanswered = 0;
    qs.forEach((q, i) => {
      const picked = form[`q${i}`].value;
      if (picked === '') unanswered++;
      const box = app.querySelector(`.q[data-i="${i}"]`);
      box.classList.add('graded');
      box.querySelectorAll('label').forEach(l => {
        const j = +l.dataset.j;
        l.querySelector('input').disabled = true;
        if (j === q.answer) l.classList.add('correct');
        else if (String(j) === picked) l.classList.add('wrong');
      });
      if (+picked === q.answer) score++;
    });
    const pct = Math.round(score / qs.length * 100);
    document.getElementById('result').innerHTML = `
      <div class="score">${score} / ${qs.length} &mdash; ${pct}%${pct >= 80 ? ' ✓ Pass' : ''}</div>
      <p class="muted">${unanswered ? unanswered + ' left blank. ' : ''}Green marks the correct answer, red marks your incorrect pick.</p>
      <div class="row">
        <button class="btn" onclick="render()">Retake</button>
        <a class="btn" href="#/">Back to units</a>
      </div>`;
    document.getElementById('result').scrollIntoView({ behavior: 'smooth' });
  };
  window.scrollTo(0, 0);
}

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const el = document.createElement('script');
    el.src = src;
    el.onload = resolve;
    el.onerror = () => reject(new Error(src));
    document.head.appendChild(el);
  });
}

(async () => {
  try {
    for (const file of MANIFEST) {
      loading = file.replace(/\.js$/, '');
      await loadScript('content/' + file);
    }
  } catch (e) {
    app.innerHTML = `<p class="muted">Could not load <code>${esc(e.message)}</code>.
      It is listed in manifest.js but missing or broken — run <code>node build.js</code>.</p>`;
    return;
  }
  // Presenter sync: a teacher.html window broadcasts its route; student windows
  // in the same browser follow. Requires http(s) — file:// may block the channel.
  let sync = null;
  try { sync = new BroadcastChannel('course-sync'); } catch (e) {}
  if (sync) {
    if (window.TEACHER) {
      const broadcast = () => sync.postMessage(location.hash);
      window.addEventListener('hashchange', broadcast);
      broadcast();
    } else {
      sync.onmessage = e => { if (location.hash !== e.data) location.hash = e.data; };
    }
  }

  window.onhashchange = render;
  render();
})();
