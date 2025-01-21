import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Use repository name for GitHub Pages
export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/codespaces-react/' : '/', // Adjust for GitHub Pages
  plugins: [react()],
}));
