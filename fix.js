const fs = require('fs');
let css = fs.readFileSync('app/globals.css', 'utf8');
css = css.replace('--navy: #0B1F3A;', '--accent: #FACC15;\n  --accent-fg: #0A0A0A;');
css = css.replace('--navy: #102A43;', '--accent: #102A43;\n  --accent-fg: #FFFFFF;');
css = css.replace('--color-navy: var(--navy);', '--color-accent: var(--accent);\n  --color-accent-fg: var(--accent-fg);');
css = css.replace('background: var(--navy);', 'background: var(--accent);');
css = css.replace('color: #FFFFFF;', 'color: var(--accent-fg);');
fs.writeFileSync('app/globals.css', css);

let nav = fs.readFileSync('components/Navigation.tsx', 'utf8');
nav = nav.replace(/navy/g, 'accent');
nav = nav.replace(/text-white/g, 'text-accent-fg');
fs.writeFileSync('components/Navigation.tsx', nav);

let page = fs.readFileSync('app/page.tsx', 'utf8');
page = page.replace(/navy/g, 'accent');
page = page.replace(/text-white/g, 'text-accent-fg');
fs.writeFileSync('app/page.tsx', page);

console.log('Replacements done!');

