import { motion } from "framer-motion";

const projects = [
  {
    title: "AI 设计工具探索",
    desc: "基于 LLM 的界面生成与视觉优化方案",
    bg: "bg-gradient-to-br from-violet-600 to-indigo-800",
    image: "/images/hero-avatar.png",
  },
  {
    title: "智能设计系统",
    desc: "AI 驱动的组件库与自动化设计流程",
    bg: "bg-gradient-to-br from-sky-400 to-blue-600",
    image: "/images/hero-avatar.png",
  },
];

export default function OtherProjectsSection() {
  return (
    <section id="design" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="section-tag mb-3">AI探索项目</div>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-4xl sm:text-5xl font-black text-[#1a1a1a] mb-8"
      >
        在工作流中熟练使用 AI 工具，<br />探索 AI Native 设计方案
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className={`${project.bg} rounded-3xl overflow-hidden h-[280px] relative group cursor-pointer hover:shadow-2xl transition-shadow duration-300`}
          >
            <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-40 transition-opacity">
              <img src={project.image} alt={project.title} className="w-48 h-48 object-contain" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-xl font-bold text-white">{project.title}</h3>
              <p className="text-white/70 text-sm mt-1">{project.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
