import {cp, mkdir, rm, readFile, writeFile} from 'node:fs/promises';
import {execFileSync} from 'node:child_process';
await rm('_site',{recursive:true,force:true});
await cp('dist','_site',{recursive:true});
for(const name of ['wirtschaftsordnung','jahrgangsstufentest7','jahrgangsstufentest10']) {
 await cp(`sites/${name}/dist`,`_site/${name}`,{recursive:true});
}
execFileSync(process.execPath,['node_modules/vite/bin/vite.js','build','--config','sites/smv/pages/vite.config.mjs'],{stdio:'inherit'});
await cp('sites/smv/pages-dist','_site/smv',{recursive:true});
for(const page of ['index.html','wirtschaft-recht/index.html','deutsch/index.html','englisch/index.html','schulleben/index.html']) {
 let html=await readFile(`_site/${page}`,'utf8');
 for(const name of ['wirtschaftsordnung','jahrgangsstufentest7','jahrgangsstufentest10','smv']) html=html.replaceAll(`https://${name}.daniel-zahnweh.de`,`/${name}/`);
 await writeFile(`_site/${page}`,html);
}
await writeFile('_site/.nojekyll','');
console.log('Alle Hauptseiten und vier Unterangebote wurden zusammengestellt.');
