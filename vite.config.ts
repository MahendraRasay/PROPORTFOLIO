import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  root: "client",
  server: {
    port: 8080
  },
  resolve: {
    alias: [
      {
        find: "@",
        replacement: "/src"
      }
    ]
  }
});
