
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      '@': path.resolve(__dirname, './src'),
      // Alias para la imagen de Figma (usado en App.tsx)
      'figma:asset/967e5f1635da1bc24af4f7afe620e6aedc144bdf.png': path.resolve(__dirname, './src/assets/967e5f1635da1bc24af4f7afe620e6aedc144bdf.png'),
    },
  },
  build: {
    target: 'esnext',
    outDir: 'build',
  },
  server: {
    port: 3000,
    open: true,
  },
});