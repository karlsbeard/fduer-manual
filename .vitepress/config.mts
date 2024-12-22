import { defineConfigWithTheme } from "vitepress";
import type { Config as ThemeConfig } from '@vue/theme'
import baseConfig from '@vue/theme/config'

const nav: ThemeConfig['nav'] = [
  {
    text: "在校准备",
    link: "/prepare-in-school",
  },
  {
    text: "校招经验",
    link: "/experience/internet",
  },
  { text: "择业指南", link: "/choose-career" },
  { text: "校友访谈", link: "/record" },
];

const sidebar: ThemeConfig['sidebar'] = {
  "/experience/": [
    {
      text: "互联网",
      items: [
        {
          text: 'java后端', link: "/experience/internet",
        }
      ]
    },
    {
      text: "泛体制",
      items: [
        {
          text: '金融行业', link: "/experience/system",
        }
      ]
     
    },
    {
      text: "其他行业",
      items: [
        {
          text: '其他行业', link: "/experience/other-industries",
        }
      ]
    },
    {
      text: "其他经验",
      items: [
        {
          text: '其他经验', link: "/experience/others",
        }
      ]
      
    },
  ],
};

// https://vitepress.dev/reference/site-config
export default defineConfigWithTheme({
  extends: baseConfig,
  title: "A Awesome Site",
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
