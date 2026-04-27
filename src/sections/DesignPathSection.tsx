import { motion } from "framer-motion";
import { Search, Lightbulb, FileCheck, BarChart3 } from "lucide-react";

const steps = [
  { num: "01", title: "研究与策略", desc: "深入了解业务、用户和项目目标。通过竞品分析、用户画像、制定设计策略，以引导整个设计过程。", icon: <Search className="w-6 h-6" />, bg: "bg-[#1a1a1a]", text: "text-white", descColor: "text-gray-400" },
  { num: "02", title: "概念与创意", desc: "在此阶段，会进行风格的探索与尝试，确立视觉方向。", icon: <Lightbulb className="w-6 h-6" />, bg: "bg-[#5B6CF9]", text: "text-white", descColor: "text-white/70" },
  { num: "03", title: "", desc: "", icon: null, bg: "", text: "", descColor: "", isImage: true },
  { num: "04", title: "交付设计", desc: "输出设计规范文档，进行设计走查，确保项目高质量。", icon: <FileCheck className="w-6 h-6" />, bg: "bg-[#5B6CF9]", text: "text-white", descColor: "text-white/70" },
  { num: "05", title: "设计验证", desc: "通过可用性测试、A/B测试、数据分析验证设计效果。", icon: <BarChart3 className="w-6 h-6" />, bg: "bg-[#1a1a1a]", text: "text-white", descColor: "text-gray-400" },
  { num: "06", title: "", desc: "", icon: null, bg: "", text: "", descColor: "", isImage: true },
];

export default function DesignPathSection() {
  return (
    <section id="design" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="mb-12">
        <h2 className="text-4xl sm:text-5xl font-black text-[#1a1a1a] mb-4">设计路径</h2>
        <p className="text-gray-500 text-lg max-w-2xl">
          我在工作中始终将策略思维与创意表达深度结合，以此应对各类设计挑战，制定贴合需求的解决方案
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {steps.map((step, idx) => (
          <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.08 }}
            className={`${step.isImage ? "" : step.bg} rounded-3xl p-6 sm:p-8 min-h-[220px] flex flex-col justify-between group hover:scale-[1.02] transition-transform duration-300 overflow-hidden`}
          >
            {step.isImage ? (
              <div className="w-full h-full min-h-[220px] rounded-3xl overflow-hidden bg-gradient-to-br from-amber-50 to-orange-50">
                <img src="/images/hero-avatar.png" alt="韩笑" className="w-full h-full object-cover" />
              </div>
            ) : (
              <>
                <div>
                  <div className="flex items-start justify-between mb-6">
                    <span className={`text-4xl font-black ${step.text} opacity-40`}>{step.num}</span>
                    <div className={`${step.text} opacity-60`}>{step.icon}</div>
                  </div>
                  <h3 className={`text-xl font-bold ${step.text} mb-3`}>{step.title}</h3>
                  <p className={`text-sm leading-relaxed ${step.descColor}`}>{step.desc}</p>
                </div>
              </>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
