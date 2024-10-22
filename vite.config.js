import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Optional: Define where your build output goes
  build: {
    outDir: 'dist', // Default output directory
    rollupOptions: {
      // Specify your entry point if necessary (normally Vite will find this automatically)
      input: './public/index.html',
    },
  },
  // Optional: Set up server configurations
  server: {
    port: 3000, // You can change the dev server port here
    open: true, // Automatically opens the browser when running 'npm run dev'
  },
});