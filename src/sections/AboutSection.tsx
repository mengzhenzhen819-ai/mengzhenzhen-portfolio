import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X, CheckCircle2 } from "lucide-react";

const workExperiences = [
  {
    period: "2022/2-至今",
    company: "字节跳动",
    role: "抖音 app 体验设计",
    items: [
      {
        title: "",
        details: [
          "主导抖音app激励端核心增长体系玩法优化、推动玩法做体验升级，带动了LT的有效增长",
          "0-1搭建抖音app激励端中台能力系统与设计规范制定，提升增长效率与多端复用能力",
          "负责团队相关流程问题发现及治理工作，优化流程为团队提效",
          "因工作态度积极/表现突出获得涨薪激励",
        ],
      },
    ],
  },
  {
    period: "2020/3-2022/1",
    company: "阿里巴巴集团",
    role: "BtoC大型影视产品设计",
    items: [
      {
        title: "",
        details: [
          "主导灯塔专业版影视数据app产品改版：挖掘业务策略机会点，制定设计策略，制定设计策略并推动全链路体验升级，提升用户满意度，管理外包团队，工作成绩因突出获激励奖励",
        ],
      },
    ],
  },
  {
    period: "2019/4-2020/2",
    company: "滴滴出行",
    role: "B端企业级数据产品交互设计",
    items: [
      {
        title: "",
        details: [
          "企业级数据产品体验设计：解读BI数据工具的使用场景及用户画像，帮助产品体验提效，并参与滴滴云项目、带教实习生",
        ],
      },
    ],
  },
  {
    period: "2017/7-2019/3",
    company: "易点天下",
    role: "UI设计",
    items: [
      {
        title: "",
        details: [
          'Dipbit app区块链项目UI设计、Yeahtargete等项目网站设计，荣获公司"最佳工作新人"荣誉称号',
        ],
      },
    ],
  },
  {
    period: "2016/6-2017/6",
    company: "中兴通讯",
    role: "实习",
    items: [
      {
        title: "",
        details: [
          "负责手机桌面图标、系统设置等图标设计，并参与系统界面设计与手机壁纸设计制作",
        ],
      },
    ],
  },
];

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState<"advantages" | "experience">("advantages");
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleMouseEnter = (idx: number) => {
    setOpenIndexes((prev) => {
      if (prev.includes(idx)) return prev;
      return [...prev, idx];
    });

    const el = itemRefs.current[idx];
    if (!el) return;
    
    const contentWrapper = el.querySelector("[data-accordion-content]") as HTMLElement;
    if (!contentWrapper) return;
    
    requestAnimationFrame(() => {
      setTimeout(() => {
        const contentHeight = contentWrapper.scrollHeight;
        const elTop = el.getBoundingClientRect().top + window.scrollY;
        const navOffset = 80;
        const targetScroll = elTop - navOffset + contentHeight * 0.3;
        
        window.scrollTo({
          top: Math.min(targetScroll, document.body.scrollHeight - window.innerHeight),
          behavior: "smooth",
        });
      }, 380);
    });
  };

  return (
    <>
      <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="max-w-3xl">
        {/* Content */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="section-tag">关于我</div>
            <h2 className="text-4xl sm:text-5xl font-black text-[#1a1a1a] mb-6">
              善于发现问题，用全链路
              <span className="block mt-2">设计思维辅助业务指标提升</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {/* Tab Navigation - Plain text style */}
            <div className="flex items-center gap-14 mb-10">
              <button
                onMouseEnter={() => setActiveTab("advantages")}
                className={`text-2xl sm:text-3xl font-bold transition-colors duration-200 cursor-default ${
                  activeTab === "advantages" ? "text-[#1a1a1a]" : "text-gray-500 hover:text-[#5B6CF9]"
                }`}
              >
                个人优势
              </button>
              <button
                onMouseEnter={() => setActiveTab("experience")}
                className={`text-2xl sm:text-3xl font-bold transition-colors duration-200 cursor-default ${
                  activeTab === "experience" ? "text-[#1a1a1a]" : "text-gray-500 hover:text-[#5B6CF9]"
                }`}
              >
                工作经历
              </button>
            </div>
          </motion.div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            {activeTab === "advantages" && (
              <motion.div
                key="advantages"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35 }}
              >
                {/* Accordion style matching work experience */}
                <div className="border-t border-gray-200">
                  {/* 经历 */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.08 }}
                    className="border-b border-gray-200 group"
                  >
                    <button className="w-full flex items-start justify-between py-6 text-left cursor-default">
                      <div className="flex-1">
                        <span className="text-2xl sm:text-3xl font-bold text-gray-500 group-hover:text-[#1a1a1a] transition-colors duration-300">经历</span>
                      </div>
                    </button>
                    <div className="pb-6">
                      <p className="text-sm text-gray-500 group-hover:text-gray-600 leading-relaxed transition-colors duration-300">
                        大厂体验设计师，先后经历滴滴、阿里、字节跳动，具备大型 ToC / ToB 项目设计经验，偏交互设计，善于发现问题用全链路设计思维辅助业务指标提升，驱动力目标力较强，有较高的审美眼界并具备成熟的设计方法论沉淀，同时具备一定项目管理能力
                      </p>
                    </div>
                  </motion.div>

                  {/* 项目 */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.16 }}
                    className="border-b border-gray-200 group"
                  >
                    <button className="w-full flex items-start justify-between py-6 text-left cursor-default">
                      <div className="flex-1">
                        <span className="text-2xl sm:text-3xl font-bold text-gray-500 group-hover:text-[#1a1a1a] transition-colors duration-300">项目</span>
                      </div>
                    </button>
                    <div className="pb-6 space-y-4">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-16">
                          <span className="inline-flex items-center px-2.5 py-1 rounded-lg bg-[#5B6CF9]/10 text-[#5B6CF9] text-xs font-semibold">字节</span>
                        </div>
                        <p className="text-gray-500 group-hover:text-gray-600 text-sm leading-relaxed flex-1 transition-colors duration-300">核心负责 抖音app端 激励增长方向玩法体验优化，参与抖音系多端场景设计，通过精细化的设计策略带动了LT的有效增长；0-1搭建抖音激励中台能力系统，外线业务仅一个半月就上线了一整套激励能力，开发成本降低 45%，显著提升RD协作效率与跨团队复用效率；0-1制定设计规范标准，为上下游提效；主动优化项目合作中的流程问题，制定优化机制。</p>
                      </div>
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-16">
                          <span className="inline-flex items-center px-2.5 py-1 rounded-lg bg-[#5B6CF9]/10 text-[#5B6CF9] text-xs font-semibold">阿里</span>
                        </div>
                        <p className="text-gray-500 group-hover:text-gray-600 text-sm leading-relaxed flex-1 transition-colors duration-300">主导灯塔专业版影视数据 app 整体改版升级</p>
                      </div>
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-16">
                          <span className="inline-flex items-center px-2.5 py-1 rounded-lg bg-[#5B6CF9]/10 text-[#5B6CF9] text-xs font-semibold">滴滴</span>
                        </div>
                        <p className="text-gray-500 group-hover:text-gray-600 text-sm leading-relaxed flex-1 transition-colors duration-300">B端企业级数据 BI 产品设计 、部分滴滴云设计</p>
                      </div>
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-16">
                          <span className="inline-flex items-center px-2.5 py-1 rounded-lg bg-[#5B6CF9]/10 text-[#5B6CF9] text-xs font-semibold">其他</span>
                        </div>
                        <p className="text-gray-500 group-hover:text-gray-600 text-sm leading-relaxed flex-1 transition-colors duration-300">虚拟货币类app设计</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* 亮点 */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.24 }}
                    className="border-b border-gray-200 group"
                  >
                    <button className="w-full flex items-start justify-between py-6 text-left cursor-default">
                      <div className="flex-1">
                        <span className="text-2xl sm:text-3xl font-bold text-gray-500 group-hover:text-[#1a1a1a] transition-colors duration-300">亮点</span>
                      </div>
                    </button>
                    <div className="pb-6">
                      <p className="text-sm text-gray-500 group-hover:text-gray-600 leading-relaxed transition-colors duration-300">
                        职业路径横跨 B端到C端多种产品形态，既有复杂业务和平台型项目经验，也有直接面向用户增长方向与转化的项目经历，项目类型完整，并在工作流中熟练使用AI工具提效
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )}

            {activeTab === "experience" && (
              <motion.div
                key="experience"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35 }}
              >
                {/* Accordion - Hover expand with scroll */}
                <div className="border-t border-gray-200">
                  {workExperiences.map((exp, idx) => {
                    const isOpen = openIndexes.includes(idx);
                    return (
                      <motion.div
                        key={exp.company}
                        ref={(el) => { itemRefs.current[idx] = el; }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.08 }}
                        className="border-b border-gray-200 group"
                        onMouseEnter={() => handleMouseEnter(idx)}
                        onMouseLeave={() => setOpenIndexes((prev) => prev.filter((i) => i !== idx))}
                      >
                        <button
                          className="w-full flex items-start justify-between py-6 text-left cursor-default"
                        >
                          <div className="flex-1">
                            <span className="text-2xl sm:text-3xl font-bold text-gray-500 group-hover:text-[#1a1a1a] transition-colors duration-300">
                              {exp.period}：{exp.company}
                            </span>
                            {exp.role && (
                              <span className="text-lg text-gray-500 group-hover:text-[#1a1a1a] block mt-1 transition-colors duration-300">
                                {exp.role}
                              </span>
                            )}
                          </div>
                          <div className="flex-shrink-0 ml-4 mt-1">
                            <div
                              className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                                isOpen
                                  ? "border-[#1a1a1a] bg-[#1a1a1a] text-white"
                                  : "border-gray-300 text-gray-400 group-hover:border-gray-400 group-hover:text-gray-500"
                              }`}
                            >
                              {isOpen ? (
                                <X className="w-5 h-5" />
                              ) : (
                                <Plus className="w-5 h-5" />
                              )}
                            </div>
                          </div>
                        </button>

                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              data-accordion-content
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.35, ease: "easeInOut" }}
                              className="overflow-hidden"
                            >
                              <div className="pb-6 space-y-4">
                                {exp.items.map((item, i) => (
                                  <div key={i}>
                                    {item.title && (
                                      <h4 className="font-semibold text-[#1a1a1a] mb-2 text-sm">
                                        {item.title}
                                      </h4>
                                    )}
                                    <ul className="space-y-2.5">
                                      {item.details.map((d, j) => (
                                        <li
                                          key={j}
                                          className="flex items-start gap-2.5 text-sm text-gray-600 leading-relaxed"
                                        >
                                          <CheckCircle2 className="w-4 h-4 text-[#5B6CF9] flex-shrink-0 mt-0.5" />
                                          <span>{d}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
      <style>{`
        .section-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'DM Mono', monospace;
          font-size: 15px;
          color: #9C9A95;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          margin-bottom: 20px;
        }

        .section-tag::before {
          content: '';
          width: 18px;
          height: 1px;
          background: #9C9A95;
        }
      `}</style>
    </>
  );
}
