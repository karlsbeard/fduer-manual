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
  { text: "择业指南", link: "/guidance/pre" },
  { text: "校友访谈", link: "/interviews/pre" },
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
        },
        {
          text: 'React', link: "/experience/internet/frontend/react",
        },
        {
          text: 'Vue', link: "/experience/internet/frontend/vue",
        },
        {
          text: 'Css', link: "/experience/internet/frontend/css",
        },
        {
          text: 'Html', link: "/experience/internet/frontend/html",
        },
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
  ],
  "interviews": [
    {
      text: '校友访谈', items: [
        {
          text: '写在前面', link: "/interviews/pre",
        },
        {
          text: '08届Google售后经理', link: "/interviews/08-google",
        },
        {
          text: '20届Nvidia开发', link: "/interviews/20-nvidia",
        },
        {
          text: '24届博-F-互联网大厂算法工程师', link: "/interviews/24-f-ai",
        },
        {
          text: '23届硕-崔女士-华为系统预研', link: '/interviews/23-c-hw',
        },
        {
          text: '97届本-某学长-一级市场股权投资', link: '/interviews/97-b-investment',
        },
        {
          text: '23届硕-佩奇-互联网大厂产品经理', link: '/interviews/23-p-product',
        },
        {
          text: '22届硕-司学长-某电池仿真公司技术销售', link: '/interviews/22-s-sales',
        },
        {
          text: '03届博-王真星-上海第二工业大学副教授', link: '/interviews/03-w-teacher',
        },
        {
          text: '23届硕-肖钒-腾讯音乐大模型算法工程师', link: '/interviews/23-x-music',
        },
        {
          text: '23届硕-肖杨-微软上海软件开发', link: '/interviews/23-x-ms',
        },
        {
          text: '22届硕-C-大模型公司AI Infra工程师', link: '/interviews/22-c-ai',
        },
        {
          text: '24届硕-陈学长-java后端工程师', link: '/interviews/24-c-java',
        },
        {
          text: '23届硕-陈学长-某国企后端开发工程师', link: '/interviews/23-c-state',
        },
        {
          text: '09届MSE-姜先生-招商门户创业', link: '/interviews/09-j-entrepreneur',
        },
        {
          text: '10届硕-李同学-某三甲医院', link: '/interviews/10-l-hospital',
        },
        {
          text: '23届硕-苏锐-某省直事业单位软件开发', link: '/interviews/23-s-system',
        },
        {
          text: '20届硕-王先生-某头部券商程序化研究员', link: '/interviews/20-w-research',
        },
        {
          text: '23届硕-许学长-地平线后台开发', link: '/interviews/23-x-horizon',
        },
        {
          text: '23届硕-张先生-某央企研究院', link: '/interviews/23-z-research',
        }
      ]
    }
  ],
  "guidance": [
    {
      text: '择业指南', items: [
        {
          text: '写在前面', link: "/guidance/pre",
        },
        {
          text: '互联网', link: "/guidance/internet",
        },
        {
          text: '金融业', link: "/guidance/finance",
        },
        {
          text: '央国企', link: "/guidance/state",
        },
        {
          text: '智能制造业', link: "/guidance/iot",
        },
        {
          text: '传媒业', link: "/guidance/news",
        },
        {
          text: '公务员&事业单位', link: "/guidance/system",
        },
        {
          text: '其他', link: "/guidance/other",
        }
      ]
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
