// Regenerates manifest.js from whatever .js files live in content/.
// Run `node build.js` after adding or renaming a section file.
// Files load in filename order, so the NN-NN- prefix controls unit/section order.
const fs = require('fs');

const files = fs.readdirSync('content').filter(f => f.endsWith('.js')).sort();
fs.writeFileSync('manifest.js', 'const MANIFEST = ' + JSON.stringify(files, null, 2) + ';\n');
console.log(`manifest.js written — ${files.length} section files`);
