import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@assets': path.resolve(__dirname, 'src/assets'),
            '@components': path.resolve(__dirname, 'src/components'),
            '@ui': path.resolve(__dirname, 'src/ui'),
            '@hooks': path.resolve(__dirname, 'src/hooks'),
            '@types': path.resolve(__dirname, 'src/types'),
            // Add other aliases as needed
        },
    },
});
