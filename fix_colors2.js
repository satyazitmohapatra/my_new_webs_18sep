const fs = require('fs');
let css = fs.readFileSync('app/globals.css', 'utf8');

css = css.replace('--accent: #0B1F3A;', '--accent: #FACC15;');
css = css.replace('--accent-fg: #FFFFFF;', '--accent-fg: #0A0A0A;');
css = css.replace('--background: #050505;', '--background: #0A0A0A;');
css = css.replace('--muted: #0A0A0A;', '--muted: #1A1A1A;');

fs.writeFileSync('app/globals.css', css);

