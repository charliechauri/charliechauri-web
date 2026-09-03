/// <reference types="vitest/config" />

import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react({ jsxRuntime: 'classic' })],
  resolve: {
    alias: {
      src: path.resolve(import.meta.dirname, 'src'),
      components: path.resolve(import.meta.dirname, 'src/components'),
      pages: path.resolve(import.meta.dirname, 'src/pages'),
      test: path.resolve(import.meta.dirname, 'src/test'),
      locales: path.resolve(import.meta.dirname, 'src/locales'),
      i18n: path.resolve(import.meta.dirname, 'src/i18n.tsx'),
      img: path.resolve(import.meta.dirname, 'src/img'),
      ThemeContext: path.resolve(import.meta.dirname, 'src/ThemeContext.tsx'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        loadPaths: [path.resolve(import.meta.dirname, 'src')],
      },
    },
  },
  build: {
    outDir: 'build',
    sourcemap: true,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
    coverage: {
      provider: 'v8',
      include: ['src/**/*.{ts,tsx}'],
      exclude: [
        'src/index.tsx',
        'src/serviceWorker.ts',
        'src/i18n.tsx',
        'src/test/**',
      ],
      thresholds: {
        branches: 90,
        functions: 90,
        lines: 90,
        statements: 90,
      },
    },
  },
});
