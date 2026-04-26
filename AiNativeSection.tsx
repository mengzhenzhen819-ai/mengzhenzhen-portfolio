import { motion } from "framer-motion";

// AI-Native Design Section v2

const aiProjects = [
  {
    title: "AI 设计工具探索",
    subtitle: "基于 LLM 的界面生成与视觉优化方案",
    gradient: "from-purple-600 to-indigo-800",
    image: "/images/hero-avatar.png",
  },
  {
    title: "智能设计系统",
    subtitle: "AI 驱动的组件库与自动化设计流程",
    gradient: "from-sky-400 to-blue-600",
    image: "/images/hero-avatar.png",
  },
];

export default function AiNativeSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-4xl sm:text-5xl font-black text-[#1a1a1a] mb-12"
      >
        探索AI-Native设计方案 
      </motion.h2>

      <div className="grid sm:grid-cols-2 gap-6">
        {aiProjects.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            className={`relative rounded-3xl overflow-hidden bg-gradient-to-br ${project.gradient} p-8 min-h-[280px] flex flex-col justify-end group cursor-pointer hover:shadow-xl transition-all duration-300`}
          >
            <div className="absolute inset-0 flex items-start justify-end p-6">
              <img
                src={project.image}
                alt={project.title}
                className="w-32 h-48 object-contain opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-300"
              />
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-white/70 text-sm">{project.subtitle}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
