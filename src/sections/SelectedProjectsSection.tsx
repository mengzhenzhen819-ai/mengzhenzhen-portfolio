import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router";

const projects = [
  {
    id: "waiyanshe",
    title: "外研社英语学习机",
    subtitle: "基础教育学段学生一站式英语学习平板",
    icon: "/images/icon-waiyanshe.png",
    image: "/images/project-1.png",
    description: "为外研社设计的一站式英语学习平板产品，覆盖校内同步、分级阅读、听说读写专项提升等全场景。",
    cta: "查看项目详情",
  },
  {
    id: "jingzhun",
    title: "外研精准学",
    subtitle: "AI驱动的个性化英语学习产品",
    icon: "/images/icon-jingzhun.png",
    image: "/images/project-2.png",
    description: "基于学生能力评估，精准定位知识薄弱点，智能推荐针对性练习内容。",
    cta: "查看项目详情",
  },
  {
    id: "feishu",
    title: "飞书招聘",
    subtitle: "提高人才库利用率",
    icon: "/images/icon-feishu.png",
    image: "/images/project-3.png",
    description: "负责飞书招聘平台的人才激活功能设计，DAU同比增长200%。",
    cta: "查看项目详情",
  },
  {
    id: "longxin",
    title: "龙信 v5.0",
    subtitle: "龙湖集团办公协同平台",
    icon: "/images/icon-longxin.png",
    image: "/images/project-4.png",
    description: "龙湖集团办公协同平台v5.0整体升级设计，赋能高效工作。",
    cta: "查看项目详情",
  },
];

const spring = { type: "spring" as const, stiffness: 300, damping: 30, mass: 1 };

export default function SelectedProjectsSection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selected = projects.find((p) => p.id === selectedId);

  return (
    <section
      id="projects"
      className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{
        backgroundImage: "radial-gradient(circle, #d4d4d4 0.8px, transparent 0.8px)",
        backgroundSize: "20px 20px",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="text-center mb-20"
      >
        <div className="section-tag justify-center mb-3">我的项目</div>
        <h2 className="text-4xl sm:text-5xl font-black text-[#1a1a1a]">精选项目</h2>
      </motion.div>

      {/* Icons Row */}
      <div className="relative max-w-6xl mx-auto flex items-center justify-center gap-10 sm:gap-16 lg:gap-24 z-20">
        {projects.map((project) => {
          const isHovered = hoveredId === project.id;
          const isOtherHovered = hoveredId !== null && !isHovered;
          const isSelected = selectedId === project.id;
          const isOtherSelected = selectedId !== null && !isSelected;
          const isOther = isOtherHovered || isOtherSelected;

          return (
            <div
              key={project.id}
              className="flex flex-col items-center cursor-pointer"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => setSelectedId(project.id)}
            >
              <motion.div
                className={`relative w-44 h-44 sm:w-52 sm:h-52 lg:w-60 lg:h-60 rounded-[2.2rem] overflow-hidden transition-all duration-300 ${
                  isOther
                    ? "backdrop-blur-2xl bg-white/50 border border-white/80 shadow-[0_8px_32px_rgba(0,0,0,0.08),inset_0_0_0_1px_rgba(255,255,255,0.6)]"
                    : "shadow-[0_8px_32px_rgba(0,0,0,0.1)]"
                }`}
                animate={{
                  scale: isHovered && !selectedId ? 1.1 : isOther ? 0.92 : 1,
                  y: isHovered && !selectedId ? -8 : 0,
                }}
                transition={spring}
              >
                <img
                  src={project.icon}
                  alt={project.title}
                  className={`w-full h-full object-cover transition-all duration-300 ${
                    isOther ? "blur-[3px]" : "opacity-100"
                  }`}
                />
                {isOther && (
                  <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/20 to-transparent backdrop-blur-md" />
                )}
              </motion.div>
              <motion.span
                className={`mt-5 text-sm font-medium ${isOther ? "text-gray-400" : "text-gray-600"}`}
                animate={{ opacity: isOther ? 0.5 : 1 }}
                transition={{ duration: 0.3 }}
              >
                {project.title}
              </motion.span>
            </div>
          );
        })}
      </div>

      {/* Expanded Overlay */}
      <AnimatePresence>
        {selected && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-30 backdrop-blur-2xl bg-white/40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              onClick={() => setSelectedId(null)}
            />

            {/* Expanded Card */}
            <div className="fixed inset-0 z-40 flex items-center justify-center p-4 sm:p-8 pointer-events-none">
              <motion.div
                className="relative w-full max-w-4xl bg-white/85 backdrop-blur-2xl rounded-[2.5rem] shadow-2xl overflow-hidden pointer-events-auto"
                style={{
                  boxShadow: "0 40px 100px rgba(0,0,0,0.12), 0 0 0 1px rgba(255,255,255,0.6) inset",
                }}
                initial={{ scale: 0.85, y: 40 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.85, y: 40 }}
                transition={spring}
              >
                <div className="grid md:grid-cols-[1fr_1.2fr] min-h-[400px]">
                  {/* Left - Mockup */}
                  <div className="relative flex items-center justify-center p-8 md:p-12 bg-gradient-to-br from-gray-50/80 to-white/60">
                    <motion.div
                      className="relative w-44 h-72 sm:w-52 sm:h-80 rounded-[2rem] overflow-hidden shadow-2xl border-[5px] border-white"
                      style={{
                        transform: "perspective(1000px) rotateY(-10deg) rotateX(3deg)",
                        boxShadow: "0 25px 50px rgba(0,0,0,0.18)",
                      }}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 30 }}
                      transition={{ delay: 0.1, ...spring }}
                    >
                      <img src={selected.image} alt={selected.title} className="w-full h-full object-cover" />
                    </motion.div>

                    <motion.div
                      className="absolute bottom-6 right-6 w-28 h-40 rounded-xl overflow-hidden shadow-lg border-4 border-white hidden md:block"
                      style={{ transform: "perspective(800px) rotateY(6deg)" }}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ delay: 0.25, ...spring }}
                    >
                      <img src={selected.icon} alt="" className="w-full h-full object-cover" />
                    </motion.div>
                  </div>

                  {/* Right - Content */}
                  <div className="flex flex-col justify-center p-8 md:p-12 relative">
                    <motion.button
                      className="absolute top-5 right-5 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                      onClick={(e) => { e.stopPropagation(); setSelectedId(null); }}
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.5 }}
                      transition={{ delay: 0.2, ...spring }}
                    >
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M3 3L11 11M11 3L3 11" stroke="#666" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </motion.button>

                    <motion.p
                      className="text-xs text-gray-400 tracking-widest uppercase mb-3"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 12 }}
                      transition={{ delay: 0.15, ...spring }}
                    >
                      {selected.subtitle}
                    </motion.p>

                    <motion.h3
                      className="text-3xl sm:text-4xl font-black text-[#1a1a1a] mb-4 leading-tight"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 15 }}
                      transition={{ delay: 0.2, ...spring }}
                    >
                      {selected.title}
                    </motion.h3>

                    <motion.p
                      className="text-gray-500 text-base leading-relaxed mb-8 max-w-md"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 15 }}
                      transition={{ delay: 0.25, ...spring }}
                    >
                      {selected.description}
                    </motion.p>

                    <Link to={`/project/${selected.id}`}>
                      <motion.span
                        className="inline-block px-8 py-3 bg-[#1a1a1a] text-white rounded-full text-sm font-medium hover:bg-[#333] transition-colors cursor-pointer"
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 15 }}
                        transition={{ delay: 0.3, ...spring }}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        {selected.cta}
                      </motion.span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
