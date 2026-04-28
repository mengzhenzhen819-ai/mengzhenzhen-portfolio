export interface Project {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  highlight: string;
  image: string;
  description: string;
  gallery: string[];
  pdfUrl: string;
}

export const projectsDetail: Project[] = [
  {
    id: "waiyanshe",
    title: "提签到连签率流程优化升级",
    subtitle: "签到玩法体验优化",
    duration: "历时6个月",
    highlight: "从0-1搭建",
    image: "/images/waiyanshe-cover.jpg",
    description: "从用户行为数据出发，重构签到核心流程与奖励感知，带动留存指标有效提升。",
    gallery: ["/images/waiyanshe-1.jpg", "/images/waiyanshe-2.jpg"],
    pdfUrl: "",
  },
  {
    id: "qiandao",
    title: "签到玩法体验优化",
    subtitle: "签到流程重构",
    duration: "历时4个月",
    highlight: "留存提升",
    image: "/images/project-1.png",
    description: "从用户行为数据出发，重构签到核心流程与奖励感知，带动留存指标有效提升。",
    gallery: ["#E8F0FE", "#D4E4D1"],
    pdfUrl: "",
  },
  {
    id: "dengta",
    title: "灯塔专业版 App 整体改版",
    subtitle: "全链路体验升级",
    duration: "历时5个月",
    highlight: "获奖项目",
    image: "/images/project-2.png",
    description: "主导全链路体验升级，挖掘业务策略机会点，提升用户满意度，获激励奖励。",
    gallery: ["#F5E6D3", "#E2D5F0"],
    pdfUrl: "",
  },
];

export interface CardProject {
  id: string;
  tab?: string;
  title: string;
  subtitle: string;
  icon: string;
  image: string;
  description: string;
  cta: string;
  coverLabel: string;
  coverLabel2: string;
  num: string;
  color: string;
  tags: string[];
}

export const allProjects: CardProject[] = [
  {
    id: "waiyanshe",
    tab: "字节项目",
    title: "激励增长体系体验设计",
    subtitle: "签到玩法体验优化",
    icon: "/images/icon-waiyanshe.png",
    image: "/images/waiyanshe-cover.jpg",
    description: "覆盖签到、宝箱等核心激励玩法全链路体验设计，开发成本降低 45%。",
    cta: "查看项目详情",
    coverLabel: "B端",
    coverLabel2: "企业协作",
    num: "01",
    color: "#96B58A",
    tags: ["增长设计", "激励体系"],
  },
  {
    id: "qiandao",
    tab: "字节项目",
    title: "签到玩法体验优化",
    subtitle: "签到流程重构",
    icon: "/images/icon-waiyanshe.png",
    image: "/images/project-1.png",
    description: "从用户行为数据出发，重构签到核心流程与奖励感知，带动留存指标有效提升。",
    cta: "查看项目详情",
    coverLabel: "字节跳动",
    coverLabel2: "激励玩法",
    num: "02",
    color: "#8AAABF",
    tags: ["激励玩法", "留存"],
  },
  {
    id: "dengta",
    tab: "字节项目",
    title: "灯塔专业版 App 整体改版",
    subtitle: "全链路体验升级",
    icon: "/images/icon-jingzhun.png",
    image: "/images/project-2.png",
    description: "主导全链路体验升级，挖掘业务策略机会点，提升用户满意度，获激励奖励。",
    cta: "查看项目详情",
    coverLabel: "阿里巴巴",
    coverLabel2: "影视数据",
    num: "03",
    color: "#C4956A",
    tags: ["全链路改版", "获奖"],
  },
  {
    id: "ph-ali-1",
    tab: "阿里项目",
    num: "01",
    color: "#E5E7EB",
    title: "项目占位",
    subtitle: "占位项目",
    icon: "",
    image: "",
    description: "项目内容待补充，敬请期待。",
    cta: "查看详情",
    coverLabel: "阿里",
    coverLabel2: "占位",
    tags: ["待补充"],
  },
  {
    id: "ph-ali-2",
    tab: "阿里项目",
    num: "02",
    color: "#D1D5DB",
    title: "项目占位",
    subtitle: "占位项目",
    icon: "",
    image: "",
    description: "项目内容待补充，敬请期待。",
    cta: "查看详情",
    coverLabel: "阿里",
    coverLabel2: "占位",
    tags: ["待补充"],
  },
  {
    id: "ph-ali-3",
    tab: "阿里项目",
    num: "03",
    color: "#9CA3AF",
    title: "项目占位",
    subtitle: "占位项目",
    icon: "",
    image: "",
    description: "项目内容待补充，敬请期待。",
    cta: "查看详情",
    coverLabel: "阿里",
    coverLabel2: "占位",
    tags: ["待补充"],
  },
  {
    id: "ph-didi-1",
    tab: "滴滴项目",
    num: "01",
    color: "#E5E7EB",
    title: "项目占位",
    subtitle: "占位项目",
    icon: "",
    image: "",
    description: "项目内容待补充，敬请期待。",
    cta: "查看详情",
    coverLabel: "滴滴",
    coverLabel2: "占位",
    tags: ["待补充"],
  },
  {
    id: "ph-didi-2",
    tab: "滴滴项目",
    num: "02",
    color: "#D1D5DB",
    title: "项目占位",
    subtitle: "占位项目",
    icon: "",
    image: "",
    description: "项目内容待补充，敬请期待。",
    cta: "查看详情",
    coverLabel: "滴滴",
    coverLabel2: "占位",
    tags: ["待补充"],
  },
  {
    id: "ph-didi-3",
    tab: "滴滴项目",
    num: "03",
    color: "#9CA3AF",
    title: "项目占位",
    subtitle: "占位项目",
    icon: "",
    image: "",
    description: "项目内容待补充，敬请期待。",
    cta: "查看详情",
    coverLabel: "滴滴",
    coverLabel2: "占位",
    tags: ["待补充"],
  },
  {
    id: "ph-other-1",
    tab: "其他项目",
    num: "01",
    color: "#E5E7EB",
    title: "项目占位",
    subtitle: "占位项目",
    icon: "",
    image: "",
    description: "项目内容待补充，敬请期待。",
    cta: "查看详情",
    coverLabel: "其他",
    coverLabel2: "占位",
    tags: ["待补充"],
  },
  {
    id: "ph-other-2",
    tab: "其他项目",
    num: "02",
    color: "#D1D5DB",
    title: "项目占位",
    subtitle: "占位项目",
    icon: "",
    image: "",
    description: "项目内容待补充，敬请期待。",
    cta: "查看详情",
    coverLabel: "其他",
    coverLabel2: "占位",
    tags: ["待补充"],
  },
  {
    id: "ph-other-3",
    tab: "其他项目",
    num: "03",
    color: "#9CA3AF",
    title: "项目占位",
    subtitle: "占位项目",
    icon: "",
    image: "",
    description: "项目内容待补充，敬请期待。",
    cta: "查看详情",
    coverLabel: "其他",
    coverLabel2: "占位",
    tags: ["待补充"],
  },
];

export const tabs = ["字节项目", "阿里项目", "滴滴项目", "其他项目"];

export const springTransition = {
  type: "spring" as const,
  stiffness: 300,
  damping: 30,
  mass: 1,
};
