import { useState } from "react";
import { motion } from "framer-motion";

type TabKey = "personal" | "work";

const workItems = [
  {
    company: "字节",
    desc: "核心负责 抖音app端 激励增长方向玩法体验优化，参与抖音系多端场景设计，通过精细化的设计策略带动了LT的有效增长；0-1搭建抖音激励中台能力系统，外线业务仅一个半月就上线了一整套激励能力，开发成本降低 45%，显著提升RD协作效率与跨团队复用效率；0-1制定设计规范标准，为上下游提效；主动优化项目合作中的流程问题，制定优化机制。",
  },
  {
    company: "阿里",
    desc: "主导灯塔专业版影视数据 app 整体改版升级",
  },
  {
    company: "滴滴",
    desc: "B端企业级数据 BI 产品设计 、部分滴滴云设计",
  },
  {
    company: "其他",
    desc: "虚拟货币类app设计",
  },
];

export default function AboutSection() {
  const [tab, setTab] = useState<TabKey>("personal");

  const tabs: { key: TabKey; label: string }[] = [
    { key: "personal", label: "个人优势" },
    { key: "work", label: "工作经历" },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-4xl sm:text-5xl font-black text-[#1a1a1a] mb-6">
            善于发现问题，用全链路<br />
            设计思维辅助业务指标提升
          </h2>
        </motion.div>

        <div className="flex items-center gap-8 mb-10">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`text-2xl sm:text-3xl transition-colors duration-200 ${
                tab === t.key
                  ? "font-black text-[#1a1a1a]"
                  : "font-normal text-gray-400 hover:text-gray-600"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <motion.div
          key={tab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {tab === "personal" && (
            <p className="text-gray-600 leading-relaxed">
              大厂体验设计师，先后经历滴滴、阿里、字节跳动，具备大型 ToC / ToB 项目设计经验，偏交互设计，善于发现问题用全链路设计思维辅助业务指标提升，驱动力目标力较强，有较高的审美眼界并具备成熟的设计方法论沉淀，同时具备一定项目管理能力
            </p>
          )}
          {tab === "work" && (
            <div className="space-y-8">
              {workItems.map((item) => (
                <div key={item.company} className="flex gap-6">
                  <div className="w-16 shrink-0">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-blue-50 text-blue-600 text-sm font-bold">
                      {item.company}
                    </span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          )}
        </motion.div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">亮点</h3>
          <p className="text-gray-600 leading-relaxed">
            职业路径横跨 B端到C端多种产品形态，既有复杂业务和平台型项目经验，也有直接面向用户增长方向与转化的项目经历，项目类型完整，并在工作流中熟练使用AI工具提效
          </p>
        </div>
      </div>
    </section>
  );
}
