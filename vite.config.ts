import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 为 GitHub Pages 部署设置 base path
  // 如果仓库名不是 username.github.io，需要设置为 '/repository-name/'
  base: process.env.CI ? '/frontend-test/' : '/',
});
