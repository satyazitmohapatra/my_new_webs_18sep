const fs = require('fs');
let css = fs.readFileSync('app/globals.css', 'utf8');

css = css.replace('--accent: #FACC15;', '--accent: #0B1F3A;');
css = css.replace('--accent-fg: #0A0A0A;', '--accent-fg: #FFFFFF;');
css = css.replace('--background: #000000;', '--background: #050505;');
css = css.replace('--muted: #1A1A1A;', '--muted: #0A0A0A;');

fs.writeFileSync('app/globals.css', css);

