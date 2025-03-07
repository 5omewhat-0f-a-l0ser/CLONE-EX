import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/se_project_react/",   // add this field
  plugins: [react()],
  server: {
    port: 3010,
  },
});