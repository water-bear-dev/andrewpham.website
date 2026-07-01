import fs from 'fs';

const filePath = '/Users/andrewpham/Documents/GitHub/andrewpham.website/src/App.tsx';
let content = fs.readFileSync(filePath, 'utf-8');

// Replace Work Projects layout
content = content.replace(
  '<div className="space-y-12 mb-16">\n                  {(cvData.projects as any[]).filter(p => p.type === \'work\').map((project, i) => (\n                    <div key={i} className="p-8 bg-zinc-900/50 border border-zinc-800 rounded-3xl hover:border-blue-500/30 transition-all">',
  '<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">\n                  {(cvData.projects as any[]).filter(p => p.type === \'work\').map((project, i) => (\n                    <div key={i} className="p-8 bg-zinc-900/50 border border-zinc-800 rounded-3xl hover:border-blue-500/30 transition-all flex flex-col h-full">'
);

// Replace Personal Projects layout
content = content.replace(
  '<div className="space-y-12">\n                  {(cvData.projects as any[]).filter(p => p.type === \'personal\').map((project, i) => (\n                    <div key={i} className="p-8 bg-zinc-900/50 border border-zinc-800 rounded-3xl hover:border-blue-500/30 transition-all">',
  '<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">\n                  {(cvData.projects as any[]).filter(p => p.type === \'personal\').map((project, i) => (\n                    <div key={i} className="p-8 bg-zinc-900/50 border border-zinc-800 rounded-3xl hover:border-blue-500/30 transition-all flex flex-col h-full">'
);

// Replace paragraph styles to flex-grow instead of max-w-3xl
content = content.replace(/className="text-zinc-400 text-base leading-relaxed mb-6 max-w-3xl"/g, 'className="text-zinc-400 text-base leading-relaxed mb-6 flex-grow"');

fs.writeFileSync(filePath, content);
console.log('App.tsx layout updated successfully');
