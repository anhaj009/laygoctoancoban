import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Tiến độ học tập được lưu bằng COOKIE ở phía trình duyệt
// nên không cần plugin API/server lưu state nữa.
export default defineConfig({
  base: './',
  build: {
    outDir: 'docs',
    emptyOutDir: true
  },
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,
    allowedHosts: true
  },
  preview: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,
    allowedHosts: true
  }
});
