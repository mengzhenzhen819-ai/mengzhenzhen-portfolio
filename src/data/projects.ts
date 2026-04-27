export interface Project {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  highlight: string;
  image: string;
  description: string;
  gallery: string[];
  pdfUrl?: string;
}

export const projects: Project[] = [
  {
    id: "waiyanshe",
    title: "外研社英语学习机",
    subtitle: "基础教育学段学生一站式英语学习平板",
    duration: "历时6个月",
    highlight: "从0-1搭建",
    image: "/images/project-1.png",
    description: "为外研社设计的一站式英语学习平板产品，覆盖校内同步、分级阅读、听说读写专项提升、文化素养、课外拓展等全场景。从0到1完成产品设计，统筹13个核心功能模块的设计规划与落地，半年内完成2000+张设计图交付。",
    gallery: [],
    pdfUrl: "/images/project-1.png",
  },
  {
    id: "waiyanjingzhun",
    title: "外研精准学",
    subtitle: "精准定位薄弱点，推荐针对性学练内容",
    duration: "2025年3月-2025年6月",
    highlight: "",
    image: "/images/project-2.png",
    description: "AI驱动的个性化英语学习产品。基于学生能力评估，精准定位知识薄弱点，智能推荐针对性练习内容，帮助学生高效提升英语能力。",
    gallery: [],
    pdfUrl: "/images/project-2.png",
  },
  {
    id: "feishuzhaopin",
    title: "提高人才库利用率",
    subtitle: "飞书招聘-人才激活项目",
    duration: "",
    highlight: "角色：产品设计师",
    image: "/images/project-3.png",
    description: "负责飞书招聘平台的人才激活功能设计，基于对业务/产品/竞品的深入学习和理解，从0到1配合产品输出交互原型/UI设计稿，DAU比2021年同期增长200%。",
    gallery: [],
    pdfUrl: "/images/project-3.png",
  },
  {
    id: "longxin",
    title: "龙信 v5.0",
    subtitle: "赋能你我 · 高效工作",
    duration: "",
    highlight: "龙湖集团办公协同平台",
    image: "/images/project-4.png",
    description: "龙湖集团办公协同平台v5.0整体升级设计。负责日常产品培训分享、需求评审，进行工作分配、审核等日常管理工作。获得字节内部 Spot Bonus 2次。",
    gallery: [],
    pdfUrl: "/images/project-4.png",
  },
];

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}
