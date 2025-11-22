import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: false,
    minify: "esbuild",
    cssMinify: true,
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Vendor chunks - ensure React is always available first
          if (id.includes('node_modules')) {
            // React core must be in its own chunk and loaded first
            if (id.includes('react/') || id.includes('react-dom/') || id === 'react' || id === 'react-dom') {
              return 'vendor-react';
            }
            // React Router depends on React, keep together
            if (id.includes('react-router')) {
              return 'vendor-react';
            }
            // React-dependent UI libraries
            if (id.includes('@radix-ui')) {
              return 'vendor-ui';
            }
            // Animation library
            if (id.includes('framer-motion')) {
              return 'vendor-animation';
            }
            // Query library
            if (id.includes('@tanstack')) {
              return 'vendor-query';
            }
            // React-dependent packages that need React available
            if (id.includes('react-helmet') || id.includes('next-themes') || id.includes('react-hook-form')) {
              return 'vendor-react';
            }
            // Other node_modules
            return 'vendor';
          }
        },
        // Optimize chunk file names
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
      },
    },
    chunkSizeWarningLimit: 1000,
    // Optimize for production
    target: 'es2015',
    reportCompressedSize: false,
  },
  base: "/",
}));
