const fs = require('node:fs');
const html = fs.readFileSync('index.html', 'utf8');
if (!html.includes('<link rel="canonical" href="https://jneato-art.github.io/shortlist-stage-f-fixture/">')) process.exit(1);
