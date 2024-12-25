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
        text: "互联网", link: "/experience/internet/backend/java",
      },
      {
        text: "泛体制", link: "/experience/system/three-oil",
      },
      {
        text: "其他行业", link: "/experience/finance/management-trainee",
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
          text: 'JavaScript', link: "/experience/internet/frontend/js",
        },
        {
          text: 'TypeScript', link: "/experience/internet/frontend/ts",
        }
      ]
    },
    {
      text: "算法",
      items: [
        {
          text: '美团算法', link: "/experience/internet/ai/index",
        },
      ]
    },
    {
      text: "产品",
      items: [
        {
          text: '佩琦', link: "/experience/internet/product/index",
        },
      ]
    },
  ],
  "/experience/system": [
    {
      text: '国央企', items: [
        {
          text: '三桶油', link: "/experience/system/three-oil",
        },
        {
          text: '国家电网', link: "/experience/system/state-grid",
        },
      ],
      
    },
    {
      text: '公务员', items: [
        {
          text: '公务员', link: "/experience/system/civil-servant",
        },
      ]
    }
  ],
  "experience/finance": [
    {
      text: '银行', items: [
        {
          text: '银行管培生', link: "/experience/finance/management-trainee",
        },
        {
          text: '银行数据中心', link: "/experience/finance/data-center",
        },
      ],
    },
   
  ]
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
