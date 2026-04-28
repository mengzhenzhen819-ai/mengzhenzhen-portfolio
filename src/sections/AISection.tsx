import { motion } from "framer-motion";

const items = [
  {
    title: "AI 设计工具探索",
    desc: "基于 LLM 的界面生成与视觉优化方案",
    gradient: "from-purple-500 to-blue-600",
  },
  {
    title: "智能设计系统",
    desc: "AI 驱动的组件库与自动化设计流程",
    gradient: "from-blue-400 to-cyan-400",
  },
];

export default function AISection() {
  return (
    <section id="ai-explore" className="py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="section-tag mb-3 flex items-center gap-3 text-sm text-gray-500">
            <span className="text-[#1a1a1a]">——</span> AI探索项目
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1a1a1a] max-w-2xl">
            在工作流中熟练使用 AI 工具，探索 AI Native 设计方案
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative rounded-3xl p-8 bg-gradient-to-br ${item.gradient} text-white overflow-hidden min-h-[280px] flex flex-col justify-end`}
            >
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-white/80 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
