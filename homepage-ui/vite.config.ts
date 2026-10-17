import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: { alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) } },
  build: {
    outDir: '../dist/subject-carousel', emptyOutDir: true,
    lib: { entry: 'src/main.tsx', formats: ['es'], fileName: () => 'subject-carousel.js', cssFileName: 'subject-carousel' },
    sourcemap: false,
    minify: true,
    rollupOptions: { output: { inlineDynamicImports: true } }
  },
  define: { 'process.env.NODE_ENV': JSON.stringify('production') }
});
