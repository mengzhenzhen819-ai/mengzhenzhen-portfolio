import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import TypewriterText from "../components/TypewriterText";

const stats = [
  { num: "7+", label: "年设计经验" },
  { num: "3家", label: "大厂互联网公司" },
  { num: "亿+", label: "用户规模覆盖" },
  { num: "硕士", label: "设计艺术学" },
];

export default function HeroSection() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
        {/* Left Content */}
        <div>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
            <div className="section-tag mb-6">
              AI时代体验设计师
            </div>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }}
            className="text-6xl sm:text-7xl lg:text-8xl font-black text-[#1a1a1a] leading-[0.95] tracking-tight mb-2"
          >
            <TypewriterText text="孟珍珍" speed={0.12} delay={0.5} cursor={false} />
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.55 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-500 leading-[0.95] tracking-tight mb-2"
          >
            <TypewriterText text="体验设计师" speed={0.08} delay={1.2} cursor={false} />
          </motion.p>

          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-500 leading-[0.95] tracking-tight mb-8"
          >
            <TypewriterText text="× AI 时代" speed={0.08} delay={1.8} cursor={false} />
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.7 }} className="text-gray-600 mb-8 max-w-lg">
            <p className="text-base leading-relaxed">
              Hi，我是Magic ，一名资深产品体验设计师，先后经历滴滴 · 阿里 · 字节跳动。具备大型 ToC / ToB 项目全链路设计经验，横跨 B 端数据平台、C 端增长激励，正向 AI Native 体验设计方向探索转型
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }} className="flex items-center gap-4 mb-12">
            <button onClick={() => scrollTo("projects")}
              className="group flex items-center gap-2 px-8 py-4 bg-[#1a1a1a] text-white rounded-full font-medium hover:bg-[#333] transition-all"
            >
              查看项目 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button onClick={() => scrollTo("about")}
              className="px-8 py-4 bg-white text-[#1a1a1a] rounded-full font-medium border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all"
            >
              了解我
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-wrap gap-6 sm:gap-10"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl sm:text-4xl font-bold text-[#1a1a1a] mb-2">{stat.num}</p>
                <p className="text-sm text-gray-500">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right - 3D Character */}
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.3 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="w-72 h-96 sm:w-80 sm:h-[480px] lg:w-96 lg:h-[560px] rounded-3xl overflow-hidden bg-gradient-to-br from-amber-50 to-orange-50 shadow-2xl">
              <img src="/images/hero-avatar.png" alt="孟珍珍" className="w-full h-full object-cover object-top" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
