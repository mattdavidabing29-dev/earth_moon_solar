import {defineConfig} from 'vite';
export default defineConfig({server:{watch:{ignored:['**/.vs/**']}},build:{rollupOptions:{input:{earth:'index.html',moon:'moon.html',solar:'solar.html'},output:{manualChunks:{three:['three']}}}}});
