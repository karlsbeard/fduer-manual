import { defineConfigWithTheme } from "vitepress";
import type { Config as ThemeConfig } from '@vue/theme'
import baseConfig from '@vue/theme/config'

const nav: ThemeConfig['nav'] = [
  {
    text: "在校准备", link: "/in-school/pre",
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
        text: "银行", link: "/experience/finance/management-trainee",
      },
      {
        text: "杂谈", link: "/experience/others/pre",
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
  ],
  "experience/others": [
    {
      text: '杂谈', items: [
        {
          text: '写在前面', link: "/experience/others/pre",
        },
        {
          text: '结构化面试', link: "/experience/others/struct",
        },
        {
          text: '无领导小组讨论/辩论赛', link: "/experience/others/group",
        },
        {
          text: '主管面', link: "/experience/others/manager",
        },
      ],
    } 
  ],
  "in-school": [
    {
      text: '准备', items: [
        {
          text: '写在前面', link: "/in-school/pre",
        },
        {
          text: '成绩与评优', link: "/in-school/gpa",
        },
        {
          text: '实习', link: "/in-school/practice",
        },
        {
          text: '科研论文', link: "/in-school/conference",
        },
        {
          text: '竞赛', link: "/in-school/competition",
        },
        {
          text: '综合发展', link: "/in-school/synthesized",
        },
        {
          text: '信息差', link: "/in-school/earn-message",
        },
      ],
    }
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
