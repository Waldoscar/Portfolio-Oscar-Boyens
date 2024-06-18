import { defineConfig } from 'vite';
import path, { resolve } from 'path';
export default defineConfig({
    build: {
        outDir: 'dist',
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                footer: resolve(__dirname, 'footer.html'),
                klien: resolve(__dirname, 'klien.html'),
                impressum: resolve(__dirname,'impressum.html'), 
            
            }
        }
    },
});