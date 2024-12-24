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
    items: [
      {
        text: "互联网", link: "/experience/internet",
      },
      {
        text: "泛体制", link: "/experience/system",
      },
      {
        text: "其他行业", link: "/experience/other-industries",
      },
      {
        text: "杂谈", link: "/experience/others",
      },
    ]
    
  },
  { text: "择业指南", link: "/choose-career" },
  { text: "校友访谈", link: "/record" },
];

const sidebar: ThemeConfig['sidebar'] = {
  "/experience/internet": [
    {
      text: "后端",
      items: [
        {
          text: '写在前面', link: "/experience/internet/backend/index",
        },
        {
          text: 'java', link: "/experience/internet/backend/java",
        },
        {
          text: 'cpp', link: "/experience/internet/backend/cpp",
        }
      ]
    },
    {
      text: "前端",
      items: [
        {
          text: '写在前面', link: "/experience/internet/frontend/index",
        },
        {
          text: 'JavaScript', link: "/experience/internet/frontend/js",
        },
        {
          text: 'TypeScript', link: "/experience/internet/frontend/ts",
        }
      ]
    },
  ],
};

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
