import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, CheckCircle2 } from "lucide-react";

const projects = [
  {
    num: "1",
    title: "外研通学习平板",
    details: [
      "项目背景：外研通学生平板是基于外研社品牌、内容、技术、渠道等优势，针对基础学段英语学习者打造的具备外研特色、家校互通的智慧学习平板产品。其核心定位是基础教育学段学生在家庭场景下的一站式英语学习平板，通过覆盖校内同步、分级阅读、听说读写专项提升、文化素养、课外拓展等全场景，提供每个模块测、学、练、评一站式学习流程的功能内容。",
      "项目职责：0-1 为项目输出UI 设计稿，独立完成各功能模块的产品设计方案；建立产品体验问题反馈库，不断优化用户体验。",
    ],
  },
  {
    num: "2",
    title: "云平台-数字教材（可互动大屏）",
    details: [
      "数字教材是课程信息化发展的重要组成部分，是推动课堂革命、提升师生数字素养的关键一环。教育部多份政策文件明确支持数字教材建设，包括《十四五普通高等教育本科国家级规划教材建设实施方案》《将数字教材作为重点任务，设专门评选赛道》、《义务教育课程方案（2022 年版）》《探索数字教材建设》、《十四五职业教育规划教材建设实施方案》《推动纸质教材数字化改造，形成可听、可视、可练、可互动的数字化教材》。新一代信息技术重塑教育形态，外研在线携手外研社整合优质资源与 AI 技术，服务院校特色课程建设，打造校本数字教材，助力高质量人才培养。",
      "项目职责：负责交互/UI设计的输出，制作教材内包含的游戏，互动答题的制作",
    ],
  },
  {
    num: "3",
    title: "知识图谱（英语知识点数据化）",
    details: [
      "外研 U 学产品中的知识图谱是围绕英语学科核心素养，遵循英语学习规律，整合教材、教程和读物等各类英语学习资源，搭建的义务教育阶段知识图谱的整体框架。",
      "项目职责：负责UI/交互设计图的输出",
    ],
  },
  {
    num: "4",
    title: "飞书招聘",
    details: [
      "负责飞书招聘的设计以及日常用户的卡点需求",
      "活水平台基于对业务/产品/竞品的深入学习和理解，从0到1配合产品输出交互原型/UI设计稿，DAU比2021年同期增长200%",
      "HR+2.0升级 基于用户反馈，优化迭代现有设计，同比增长38%",
    ],
  },
  {
    num: "5",
    title: "HR+",
    details: [
      "HR+2.0升级 基于用户反馈，优化迭代现有设计，同比增长38%",
    ],
  },
  {
    num: "6",
    title: "龙信（企业内部办公平台）",
    details: [
      "龙湖集团办公协同平台设计",
      "赋能你我 · 高效工作",
    ],
  },
];

export default function ProjectExperienceSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-[40%_60%] gap-12 lg:gap-16">
        {/* Left - Title */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <h2 className="text-4xl sm:text-5xl font-black text-[#1a1a1a] mb-4">项目经历</h2>
          <p className="text-gray-500 leading-relaxed">
            分别列举了在外研社，字节，龙湖的关键项目，涵盖C端，B端，数据类的项目
          </p>
        </motion.div>

        {/* Right - Accordion */}
        <div className="space-y-3">
          {projects.map((project, idx) => (
            <motion.div key={project.num} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.08 }}>
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-4 border-b border-gray-200 hover:bg-gray-50/50 transition-colors text-left"
              >
                <span className="text-lg font-semibold text-[#1a1a1a]">{project.num}. {project.title}</span>
                <motion.div animate={{ rotate: openIndex === idx ? 180 : 0 }} transition={{ duration: 0.3 }}>
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35 }} className="overflow-hidden">
                    <div className="p-4 pt-2 space-y-3">
                      {project.details.map((d, i) => (
                        <p key={i} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle2 className="w-4 h-4 text-[#5B6CF9] flex-shrink-0 mt-0.5" />
                          <span>{d}</span>
                        </p>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
