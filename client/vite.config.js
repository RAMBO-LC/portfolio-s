import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react()],
  assetsInclude: ["**/*.glb"],
  build: {
    chunkSizeWarningLimit: 600,
    modulePreload: {
      // Don't preload the lazy three.js chunk on first paint: it's only
      // needed once the hero 3D scenes resolve. Saves ~1.1MB (gzip) upfront.
      resolveDependencies: (filename, deps) =>
        deps.filter((dep) => !dep.includes("three-")),
    },
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [
            // three.js + react-three ecosystem is ~3MB: isolate it so the
            // initial chunk stays small and browsers cache it separately
            { name: "three", test: /node_modules\/(three|@react-three|meshline)/ },
            { name: "vendor", test: /node_modules\/(react|react-dom|react-router-dom|scheduler)/ },
          ],
        },
      },
    },
  },
});
