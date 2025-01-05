import type { Config as ThemeConfig } from '@vue/theme'

export const nav: ThemeConfig['nav'] = [
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
    { text: "择业指南", link: "/guidance/pre" },
    { text: "校友访谈", link: "/interviews/pre" },
  ];