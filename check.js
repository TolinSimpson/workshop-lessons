// Sanity check for the course content. Run: node check.js
const fs = require('fs');

const files = fs.readdirSync('content').filter(f => f.endsWith('.js')).sort();
const SECTIONS = [];
let current = '';
global.section = s => SECTIONS.push({ ...s, id: current });
for (const f of files) {
  current = f;
  eval(fs.readFileSync('content/' + f, 'utf8'));
}

const manifest = fs.existsSync('manifest.js')
  ? eval(fs.readFileSync('manifest.js', 'utf8') + ';MANIFEST') : [];
console.assert(
  JSON.stringify(manifest) === JSON.stringify(files),
  'manifest.js is stale — run `node build.js`');

let questions = 0, slides = 0;
for (const s of SECTIONS) {
  console.assert(s.unit, `${s.id}: missing unit`);
  console.assert(s.title, `${s.id}: missing title`);
  console.assert(s.slides && s.slides.length, `${s.id}: no slides`);
  s.slides.forEach((sl, i) => console.assert(sl.title && sl.body, `${s.id} slide ${i + 1}: missing title/body`));
  s.questions.forEach((q, i) => {
    console.assert(q.choices.length >= 2, `${s.id} q${i + 1}: needs 2+ choices`);
    console.assert(Number.isInteger(q.answer) && q.choices[q.answer] !== undefined,
      `${s.id} q${i + 1}: answer index out of range`);
    console.assert(new Set(q.choices).size === q.choices.length, `${s.id} q${i + 1}: duplicate choices`);
  });
  slides += s.slides.length;
  questions += s.questions.length;
  console.log(`${s.id.padEnd(40)} ${String(s.slides.length).padStart(2)} slides  ${String(s.questions.length).padStart(2)} questions`);
}
console.log(`\n${SECTIONS.length} sections, ${slides} slides, ${questions} questions`);
