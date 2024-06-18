import { defineConfig } from 'vite';
import path, { resolve } from 'path';
export default defineConfig({
    build: {
        outDir: 'dist',
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                key: resolve(__dirname, 'klien.html'),
                path: resolve(__dirname,'impressum.html'),
            
            }
        }
    },
});