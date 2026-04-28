import { motion } from "framer-motion";

const stats = [
  { num: "7+", label: "年设计经验" },
  { num: "3家", label: "大厂互联网公司" },
  { num: "亿+", label: "用户规模覆盖" },
  { num: "硕士", label: "设计艺术学" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="section-tag mb-4 flex items-center gap-3 text-sm text-gray-500">
            <span className="text-[#1a1a1a]">——</span> AI时代体验设计师
          </div>
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-[#1a1a1a] leading-none mb-4">
            孟珍珍
          </h1>
          <div className="text-3xl sm:text-4xl text-gray-400 font-light mb-8">
            体验设计师 × AI 时代
          </div>
          <p className="text-lg text-gray-600 max-w-xl mb-8 leading-relaxed">
            Hi，我是Magic ，一名资深产品体验设计师，先后经历滴滴 · 阿里 · 字节跳动。具备大型 ToC / ToB 项目全链路设计经验，横跨 B 端数据平台、C 端增长激励，正向 AI Native 体验设计方向探索转型
          </p>
          <div className="flex gap-4 mb-12">
            <a
              href="#projects"
              className="px-6 py-3 bg-[#1a1a1a] text-white rounded-full text-sm font-medium hover:bg-black transition-colors"
            >
              查看项目 →
            </a>
            <a
              href="#about"
              className="px-6 py-3 border border-gray-200 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors"
            >
              了解我
            </a>
          </div>
          <div className="flex gap-12">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-black text-[#1a1a1a]">{s.num}</div>
                <div className="text-sm text-gray-500 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center"
        >
          <div className="relative w-full max-w-md aspect-[3/4] rounded-3xl overflow-hidden bg-gradient-to-br from-amber-50 to-orange-50 shadow-2xl">
            <img
              src="/images/hero-avatar.png"
              alt="孟珍珍"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
