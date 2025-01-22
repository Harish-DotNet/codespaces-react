import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/', // Hardcoded for custom domain deployment
  plugins: [react()],
});
