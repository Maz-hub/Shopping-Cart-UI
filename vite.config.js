// Import core Vite utilities and plugins
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

/**
 * Vite configuration file.
 * Defines build plugins and local development settings.
 */
export default defineConfig({
  /**
   * Plugins used by Vite:
   * - react(): enables React fast refresh and JSX support
   * - tailwindcss(): integrates Tailwind CSS for utility-first styling
   */
  plugins: [react(), tailwindcss()],

  /**
   * Development server configuration.
   * The proxy forwards API requests to the local JSON Server
   * to avoid CORS issues and simplify local fetch paths.
   */
  server: {
    proxy: {
      /**
       * Any request starting with "/api" is proxied to http://localhost:8000
       * Example: fetch("/api/products") → http://localhost:8000/products
       */
      "/api": {
        target: "http://localhost:8000",

        /**
         * Rewrites the request path by removing the `/api` prefix
         * before forwarding it to the target server.
         */
        rewrite: (path) => path.replace(/^\/api/, ""),

        /**
         * Ensures the Host header in the proxied request matches the target.
         * Prevents issues with some backend servers that require correct origin headers.
         */
        changeOrigin: true,
      },
    },
  },
});
