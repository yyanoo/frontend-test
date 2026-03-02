import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 为 GitHub Pages 部署设置 base path
  base: '/frontend-test/',
});
