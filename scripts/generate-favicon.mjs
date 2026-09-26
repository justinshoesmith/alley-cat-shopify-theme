import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

// Rebuild assets after a logo change:
// node scripts/generate-favicon.mjs
// npx svgo assets/alley-cat-favicon.svg --output assets/alley-cat-favicon.svg --precision 1 --multipass
// npx sharp-cli -i assets/alley-cat-favicon.svg -o assets/alley-cat-favicon.png resize 128 128

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const source = readFileSync(join(root, 'assets', 'alley-cat-trading-stacked.svg'), 'utf8');
const start = source.indexOf('<g transform="translate(90.00000000000001 83.8365257595773) scale(0.85)">');
const end = source.indexOf('</g></g>', start);

if (start < 0 || end < 0) {
  throw new Error('Approved cat mark was not found in the stacked logo.');
}

const cat = source.slice(start, end + '</g></g>'.length);
const favicon = `<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="280 16 640 640">
  <title>Alley Cat Trading</title>
  <rect x="280" y="16" width="640" height="640" fill="#FAF9F5"/>
  <rect x="292" y="28" width="616" height="616" fill="none" stroke="#B75B38" stroke-width="22"/>
  ${cat}
</svg>
`;

writeFileSync(join(root, 'assets', 'alley-cat-favicon.svg'), favicon);
