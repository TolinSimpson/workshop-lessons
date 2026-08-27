const app = document.getElementById('app');
const crumb = document.getElementById('crumb');

// Every file in content/ calls section({...}) once. Its id is its filename.
const SECTIONS = [];
let loading = '';
function section(s) { SECTIONS.push({ ...s, id: loading }); }

// --- grade reporting & retake limits (teacher setup: see README) ---
// ponytail: all client-side (localStorage + student-reported grades) — GitHub Pages
// has no server; clearing browser data resets attempts. Move to a real backend if
// enforcement ever matters.
const GRADES = {
  maxAttempts: 2,   // attempts allowed per test; 0 = unlimited
  teacherEmail: '', // set to show an "Email result to teacher" button
  formUrl: '',      // Google Form ".../formResponse" URL; auto-sends grades to its Sheet
  fields: { name: 'entry.0', test: 'entry.0', score: 'entry.0', grade: 'entry.0', attempt: 'entry.0' }
};
const attempts = id => (JSON.parse(localStorage.getItem('attempts') || '{}')[id] || 0);
function bumpAttempts(id) {
  const a = JSON.parse(localStorage.getItem('attempts') || '{}');
  a[id] = (a[id] || 0) + 1;
  localStorage.setItem('attempts', JSON.stringify(a));
  return a[id];
}
function studentName() {
  let n = localStorage.getItem('studentName');
  if (!n) {
    n = (prompt('Your name (sent to the teacher with your grade):') || '').trim();
    if (n) localStorage.setItem('studentName', n);
  }
  return n || 'Unknown';
}
function reportGrade(r) {
  if (!GRADES.formUrl) return;
  const d = new FormData();
  d.append(GRADES.fields.name, r.name);
  d.append(GRADES.fields.test, r.test);
  d.append(GRADES.fields.score, `${r.score}/${r.total} (${r.pct}%)`);
  d.append(GRADES.fields.grade, r.grade);
  d.append(GRADES.fields.attempt, r.attempt);
  fetch(GRADES.formUrl, { method: 'POST', mode: 'no-cors', body: d }).catch(() => {});
}

// --- routing: #/  |  #/<section-id>/lesson/0  |  #/<section-id>/test ---
function parse() {
  const p = location.hash.replace(/^#\/?/, '').split('/').filter(Boolean);
  return { id: p[0], mode: p[1], index: parseInt(p[2] || '0', 10) };
}
function esc(s) { return String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c])); }

function units() {
  const list = [];
  for (const s of SECTIONS) {
    let u = list.find(u => u.title === s.unit);
    if (!u) list.push(u = { title: s.unit, sections: [] });
    u.sections.push(s);
  }
  return list;
}

function render() {
  const r = parse();
  if (r.id === 'unit') {
    const u = units()[+r.mode];
    return u ? unitTest(u) : home();
  }
  if (r.id === 'grades') return gradesPage();
  const section = SECTIONS.find(s => s.id === r.id);
  if (!section) return home();
  if (r.mode === 'test') return test(section);
  return lesson(section, isNaN(r.index) ? 0 : r.index);
}

function home() {
  crumb.textContent = 'Computing Course';
  let openUnits = [];
  try { openUnits = JSON.parse(localStorage.getItem('openUnits')) || []; } catch (e) {}
  app.innerHTML = units().map((u, ui) => `
    <details class="unit" data-title="${esc(u.title)}" ${openUnits.includes(u.title) ? 'open' : ''}>
      <summary>
        <span class="utitle">${esc(u.title)}</span>
        <span class="meta">${u.sections.length} sections</span>
      </summary>
      ${u.sections.map(s => `
        <div class="card">
          <div><b>${esc(s.title)}</b></div>
          <div class="meta">${s.slides.length} slides &middot; ${s.questions.length} questions</div>
          <div class="row">
            <a class="btn primary" href="#/${s.id}/lesson/0">Lesson</a>
            <a class="btn" href="#/${s.id}/test">Test</a>
          </div>
        </div>`).join('')}
      <div class="card">
        <div><b>Unit Test</b></div>
        <div class="meta">${u.sections.reduce((n, s) => n + s.questions.filter(q => q.key).length, 0)} key questions covering the whole unit</div>
        <div class="row">
          <a class="btn primary" href="#/unit/${ui}/test">Unit Test</a>
        </div>
      </div>
    </details>
  `).join('') + `
    <div class="row"><a class="btn" href="#/grades">My Grades</a></div>`;
  app.querySelectorAll('details.unit').forEach(d => d.addEventListener('toggle', () => {
    const open = [...app.querySelectorAll('details.unit[open]')].map(x => x.dataset.title);
    localStorage.setItem('openUnits', JSON.stringify(open));
  }));
}

function lesson(section, i) {
  // Optional per-section YouTube video, shown as an extra first slide.
  // Nothing is loaded from YouTube until Play is clicked (no cookies/tracking on page view).
  const slides = [].concat(section.video || []).map(v => ({
    title: 'Video: ' + v.title,
    video: v,
    body: `<p class="muted">Optional supplement — the same ideas in video form.</p>
<div class="yt" id="ytbox"><button class="btn primary" id="ytplay">&#9654; Play video</button></div>
<p class="muted"><a href="https://www.youtube.com/watch?v=${v.id}" target="_blank" rel="noopener">Open on YouTube</a> if the embed doesn't load.</p>`
  })).concat(section.slides);
  const n = slides.length;
  i = Math.max(0, Math.min(i, n - 1));
  const slide = slides[i];
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
      ${slides.map((_, k) =>
        `<button class="dot ${k === i ? 'on' : ''}" data-i="${k}">${k + 1}</button>`).join('')}
    </div>`;

  const play = document.getElementById('ytplay');
  if (play) play.onclick = () => {
    document.getElementById('ytbox').innerHTML =
      `<iframe src="https://www.youtube-nocookie.com/embed/${slide.video.id}?autoplay=1&rel=0&iv_load_policy=3" title="${esc(slide.video.title)}" allowfullscreen allow="autoplay; fullscreen; picture-in-picture"></iframe>`;
  };

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

function gradesPage() {
  crumb.textContent = 'My Grades';
  const res = Object.values(JSON.parse(localStorage.getItem('results') || '{}'));
  const name = localStorage.getItem('studentName') || '';
  app.innerHTML = `
    <h3>My Grades</h3>
    ${res.length ? `
    <div class="slide"><table>
      <tr><th>Test</th><th>Score</th><th>Grade</th><th>Attempt</th></tr>
      ${res.map(r => `<tr><td>${esc(r.test)}</td><td>${r.score}/${r.total} (${r.pct}%)</td><td>${r.grade}</td><td>${r.attempt}</td></tr>`).join('')}
    </table></div>
    <p class="muted">Latest result per test. Check your name below, then send — the email opens in your mail app for you to review and hit Send yourself.</p>
    <p><label>Name: <input id="gname" value="${esc(name)}"></label></p>` : `
    <p class="muted">No completed tests yet.</p>`}
    <div class="row">
      ${res.length ? `<a class="btn primary" id="sendgrades" href="#">Email grades to teacher</a>` : ''}
      <a class="btn" href="#/">Back to units</a>
    </div>`;
  const send = document.getElementById('sendgrades');
  if (send) send.onclick = () => {
    const n = (document.getElementById('gname').value.trim() || 'Unknown');
    localStorage.setItem('studentName', n);
    const body = n + '\n\n' + res.map(r =>
      `${r.test}: ${r.score}/${r.total} (${r.pct}%) — Grade ${r.grade}, attempt ${r.attempt}`).join('\n');
    send.href = `mailto:${GRADES.teacherEmail}?subject=${encodeURIComponent('Grades — ' + n)}&body=${encodeURIComponent(body)}`;
  };
  window.scrollTo(0, 0);
}

function test(section) {
  crumb.textContent = section.unit + ' — ' + section.title + ' — Test';
  quiz(section.title + ' — Test', section.questions, `#/${section.id}/lesson/0`, 'Review lesson', section.id);
}

function unitTest(u) {
  crumb.textContent = u.title + ' — Unit Test';
  quiz(u.title + ' — Unit Test', u.sections.flatMap(s => s.questions.filter(q => q.key)), '#/', 'Back to units', 'unit-' + u.title);
}

function quiz(title, qs, backHref, backLabel, testId) {
  document.onkeydown = null;
  const used = attempts(testId);
  if (GRADES.maxAttempts && used >= GRADES.maxAttempts && !window.TEACHER) {
    app.innerHTML = `
      <h3>${esc(title)}</h3>
      <p class="muted">No attempts left (${used} of ${GRADES.maxAttempts} used). Ask your teacher if you need a reset.</p>
      <div class="row"><a class="btn" href="${backHref}">${backLabel}</a></div>`;
    window.scrollTo(0, 0);
    return;
  }
  app.innerHTML = `
    <h3>${esc(title)}</h3>
    <p class="muted">${qs.length} multiple choice questions. Pick one answer each, then submit. Unanswered questions count as wrong.</p>
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
        <a class="btn" href="${backHref}">${backLabel}</a>
      </div>
    </form>
    <div id="result"></div>`;

  document.getElementById('quiz').onsubmit = e => {
    e.preventDefault();
    const form = e.target;
    let score = 0, unanswered = 0;
    qs.forEach((q, i) => {
      const picked = form[`q${i}`].value;
      const box = app.querySelector(`.q[data-i="${i}"]`);
      box.classList.add('graded');
      if (picked === '') { unanswered++; box.classList.add('blank'); }
      box.querySelectorAll('label').forEach(l => {
        const j = +l.dataset.j;
        l.querySelector('input').disabled = true;
        if (j === q.answer) l.classList.add('correct');
        else if (String(j) === picked) l.classList.add('wrong');
      });
      if (picked !== '' && +picked === q.answer) score++;
    });
    const pct = Math.round(score / qs.length * 100);
    const grade = pct >= 90 ? 'A' : pct >= 80 ? 'B' : pct >= 70 ? 'C' : pct >= 60 ? 'D' : 'F';
    let attempt = 0, mailBtn = '', attemptNote = '';
    if (!window.TEACHER) {
      attempt = bumpAttempts(testId);
      const results = JSON.parse(localStorage.getItem('results') || '{}');
      results[testId] = { test: title, score, total: qs.length, pct, grade, attempt };
      localStorage.setItem('results', JSON.stringify(results));
      const name = studentName();
      reportGrade({ name, test: title, score, total: qs.length, pct, grade, attempt });
      if (GRADES.teacherEmail) {
        const body = `${name}\n${title}\nScore: ${score}/${qs.length} (${pct}%) — Grade ${grade}\nAttempt ${attempt}`;
        mailBtn = `<a class="btn" href="mailto:${GRADES.teacherEmail}?subject=${encodeURIComponent('Grade: ' + title + ' — ' + name)}&body=${encodeURIComponent(body)}">Email result to teacher</a>`;
      }
      if (GRADES.maxAttempts) attemptNote = ` Attempt ${attempt} of ${GRADES.maxAttempts}.`;
    }
    const canRetake = window.TEACHER || !GRADES.maxAttempts || attempt < GRADES.maxAttempts;
    document.getElementById('result').innerHTML = `
      <div class="score">${score} / ${qs.length} &mdash; ${pct}% &mdash; Grade: ${grade}</div>
      <p class="muted">${unanswered ? unanswered + ' left blank (marked wrong). ' : ''}Green marks the correct answer, red marks your incorrect pick.${attemptNote}</p>
      <div class="row">
        ${canRetake ? '<button class="btn" onclick="render()">Retake</button>' : ''}
        ${mailBtn}
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
