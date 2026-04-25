import { motion } from "framer-motion";
import { Briefcase, TrendingUp, Users, Layers } from "lucide-react";

const experiences = [
  {
    icon: TrendingUp,
    title: "增长设计",
    description: "主导抖音激励端核心增长体系玩法优化，通过精细化设计策略带动LT有效增长，搭建中台能力系统降低开发成本45%。",
  },
  {
    icon: Users,
    title: "用户研究",
    description: "深度解读BI数据工具使用场景及用户画像，运用全链路设计思维辅助业务指标提升，挖掘业务策略机会点。",
  },
  {
    icon: Layers,
    title: "系统设计",
    description: "0-1搭建激励中台能力系统与设计规范，管理外包团队，制定设计策略并推动全链路体验升级。",
  },
  {
    icon: Briefcase,
    title: "跨端协作",
    description: "具备大型ToC/ToB项目设计经验，熟练参与多端场景设计，具备项目管理能力与跨团队复用效率提升经验。",
  },
];

export default function ProjectExperienceSection() {
  return (
    <section id="design" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-16"
      >
        <h2 className="text-4xl sm:text-5xl font-black text-[#1a1a1a] mb-6">
          项目经历
        </h2>
        <p className="text-gray-500 text-lg max-w-2xl">
          从B端企业级数据产品到C端亿级用户规模产品，横跨多种产品形态，积累深厚的设计方法论与项目实战经验。
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {experiences.map((exp, idx) => (
          <motion.div
            key={exp.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:border-gray-200 transition-all duration-300 group"
          >
            <div className="w-12 h-12 rounded-xl bg-[#5B6CF9]/10 flex items-center justify-center mb-4 group-hover:bg-[#5B6CF9]/20 transition-colors">
              <exp.icon className="w-6 h-6 text-[#5B6CF9]" />
            </div>
            <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">{exp.title}</h3>
            <p className="text-sm text-gray-500 leading-relaxed">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
