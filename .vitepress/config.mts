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

    footer: {
      // @ts-ignore
      message: `
      本站总访问量<span id="vercount_value_site_pv">Loading</span>次 总访客数<span id="vercount_value_site_uv">Loading</span>人
      <br>
      <a href="https://github.com/karlsbeard/fduer-manual/blob/main/LICENSE">MIT License</a> © 2025 EggCampus
      `,
      copyright: '<a href="https://beian.miit.gov.cn/" target="_blank">沪ICP备2022029133号-1</a>',
    }
  },
  head: [
    ['script', { defer: '', async: '', src: 'https://cn.vercount.one/js' }]
  ],
  vite: {
    server: {
      port: 3000,
    }
  }
});
