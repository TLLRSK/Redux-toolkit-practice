import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Esto asegura que los módulos TypeScript se resuelvan correctamente
      'react-dom': 'react-dom',
      'react-dom/server': 'react-dom/server',
    },
  },
  optimizeDeps: {
    // Esto asegura que las dependencias de TypeScript sean optimizadas correctamente
    include: ['@babel/preset-env', 'react', 'react-dom'],
  },
  server: {
    // Esto permite que Vite sirva correctamente las páginas al navegar con rutas React
    fs: {
      allow: ['..'],
    },
  },
});
