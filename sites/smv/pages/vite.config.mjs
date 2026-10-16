import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import tailwind from '@tailwindcss/postcss';
import {fileURLToPath} from 'node:url';
const fromHere = p => fileURLToPath(new URL(p,import.meta.url));
export default defineConfig({
 root:fromHere('./'),base:'/smv/',publicDir:fromHere('../public'),
 resolve:{alias:{'@':fromHere('../')}},
 css:{postcss:{plugins:[tailwind()]}},
 plugins:[{name:'pages-paths',enforce:'pre',transform(code,id){
 if(!id.includes('/sites/smv/app/') || !id.endsWith('.tsx'))return;
 return code.replaceAll('fetch("/api/config")','fetch(import.meta.env.BASE_URL + "config.json")')
 .replaceAll('href="/datenschutz"','href={import.meta.env.BASE_URL + "datenschutz/"}')
 .replaceAll('href="/"','href={import.meta.env.BASE_URL}')
 .replaceAll('src="/sag-wappen.png"','src={import.meta.env.BASE_URL + "sag-wappen.png"}');
 }},react()],
 build:{outDir:fromHere('../pages-dist'),emptyOutDir:true,rollupOptions:{input:{main:fromHere('./index.html'),privacy:fromHere('./datenschutz/index.html')}}}
});
