import { defineConfigWithTheme } from "vitepress";
import baseConfig from '@vue/theme/config'
import { nav } from "./nav";
import { sidebar } from "./sidebar";
// https://vitepress.dev/reference/site-config
export default defineConfigWithTheme({
  extends: baseConfig,
  title: "一个很有知识的网站",
  srcDir: "./src",
  description: "A site of manual for fduers",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav,
    sidebar,

    socialLinks: [
      { icon: "github", link: "https://github.com/karlsbeard/fduer-manual" },
    ],
  },
  vite: {
    server: {
      port: 3000,
    }
  }
});
