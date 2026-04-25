import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const otherProjects = [
  {
    title: "灯塔专业版",
    category: "影视数据产品",
    description: "主导app整体改版升级，挖掘业务策略机会点，制定设计策略推动全链路体验升级。",
    tags: ["产品设计", "数据可视化", "用户研究"],
  },
  {
    title: "滴滴云 / BI数据产品",
    category: "B端企业级产品",
    description: "解读BI数据工具使用场景及用户画像，帮助产品体验提效，参与滴滴云项目设计。",
    tags: ["B端设计", "交互设计", "数据产品"],
  },
  {
    title: "Dipbit / Yeahtargeter",
    category: "区块链 / 广告平台",
    description: "区块链app UI设计与广告平台网站设计，荣获公司最佳工作新人荣誉称号。",
    tags: ["UI设计", "品牌设计", "网站设计"],
  },
  {
    title: "中兴手机系统",
    category: "系统设计",
    description: "负责手机桌面图标、系统设置等图标设计，参与系统界面设计与手机壁纸设计制作。",
    tags: ["图标设计", "系统设计", "视觉设计"],
  },
];

export default function OtherProjectsSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-16"
      >
        <h2 className="text-4xl sm:text-5xl font-black text-[#1a1a1a] mb-6">
          其他项目
        </h2>
        <p className="text-gray-500 text-lg max-w-2xl">
          涵盖影视数据、区块链、广告平台、系统界面等多领域的设计实践。
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-6">
        {otherProjects.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:border-gray-200 transition-all duration-300 group cursor-pointer"
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <p className="text-xs text-[#5B6CF9] font-semibold mb-1">{project.category}</p>
                <h3 className="text-xl font-bold text-[#1a1a1a] group-hover:text-[#5B6CF9] transition-colors">
                  {project.title}
                </h3>
              </div>
              <ExternalLink className="w-5 h-5 text-gray-300 group-hover:text-[#5B6CF9] transition-colors" />
            </div>
            <p className="text-sm text-gray-500 leading-relaxed mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-lg bg-gray-100 text-gray-500 text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
