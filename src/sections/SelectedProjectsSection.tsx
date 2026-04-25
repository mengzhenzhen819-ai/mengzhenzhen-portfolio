import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "外研社英语学习机",
    subtitle: "基础教育学段学生一站式英语学习平板",
    duration: "历时6个月",
    highlight: "从0-1搭建",
    image: "/images/project-1.png",
  },
  {
    title: "外研精准学",
    subtitle: "精准定位薄弱点，推荐针对性学练内容",
    duration: "2025年3月-2025年6月",
    highlight: "",
    image: "/images/project-2.png",
  },
  {
    title: "提高人才库利用率",
    subtitle: "飞书招聘-人才激活项目",
    duration: "",
    highlight: "角色：产品设计师",
    image: "/images/project-3.png",
  },
  {
    title: "龙信 v5.0",
    subtitle: "赋能你我 · 高效工作",
    duration: "",
    highlight: "龙湖集团办公协同平台",
    image: "/images/project-4.png",
  },
];

function StackedCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.6, 1, 1, 0.8]);

  return (
    <div ref={cardRef} className="h-[80vh] sticky top-0">
      <motion.div
        style={{ scale, opacity }}
        className="h-full w-full p-3 sm:p-4 lg:p-6 flex items-center justify-center"
      >
        <div className="relative w-full max-w-5xl h-full max-h-[60vh] rounded-3xl overflow-hidden shadow-2xl group cursor-pointer">
          <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12">
            <div className="flex items-end justify-between gap-4">
              <div>
                {project.duration && (
                  <p className="text-white/70 text-sm mb-2 font-medium tracking-wide">{project.duration}</p>
                )}
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-3 leading-tight">{project.title}</h3>
                <p className="text-white/80 text-lg max-w-xl">{project.subtitle}</p>
              </div>
              {project.highlight && (
                <div className="hidden sm:block text-right">
                  <p className="text-white/60 text-sm">{project.highlight}</p>
                </div>
              )}
            </div>
          </div>
          <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <span className="text-white font-bold text-sm">{index + 1}</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function SelectedProjectsSection() {
  return (
    <section id="projects" className="relative">
      <div className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-5xl font-black text-[#1a1a1a]"
        >
          精选项目
        </motion.h2>
      </div>
      <div className="relative">
        {projects.map((project, idx) => (
          <StackedCard key={project.title} project={project} index={idx} />
        ))}
      </div>
      <div className="py-20 flex justify-center">
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-10 py-4 border-2 border-[#5B6CF9] text-[#5B6CF9] rounded-full font-semibold text-lg hover:bg-[#5B6CF9] hover:text-white transition-colors duration-300"
        >
          查看所有项目
        </motion.button>
      </div>
    </section>
  );
}
