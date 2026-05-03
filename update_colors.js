const fs = require('fs');
const file = 'src/app/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// FormalTitle Icon background
content = content.replace(/from-amber-400 to-amber-600/g, 'from-emerald-500 to-green-700');

// All cyan occurrences to emerald/green
content = content.replace(/cyan-50/g, 'emerald-50');
content = content.replace(/cyan-100/g, 'emerald-100');
content = content.replace(/cyan-200/g, 'emerald-200');
content = content.replace(/cyan-300/g, 'emerald-300');
content = content.replace(/cyan-400/g, 'emerald-400');
content = content.replace(/cyan-500/g, 'emerald-500');
content = content.replace(/cyan-600/g, 'emerald-600');
content = content.replace(/cyan-700/g, 'emerald-700');
content = content.replace(/cyan-800/g, 'emerald-800');
content = content.replace(/cyan-900/g, 'emerald-900');

// PageHeader text updates to Gold/Green
content = content.replace(/text-slate-400 uppercase">\{chapter\}/g, 'text-amber-600 uppercase">{chapter}');
content = content.replace(/text-slate-400 font-semibold/g, 'text-emerald-700 font-semibold');
content = content.replace(/border-slate-100/g, 'border-emerald-100');

fs.writeFileSync(file, content);
console.log("Colors updated!");
