import { motion } from "framer-motion";

const skills = [
  {
    name: "Framer",
    desc: "搭建可交互的网站，实现无代码完成网站上线。",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0L4 8l8 8-8 8h8l8-8-8-8 8-8h-8z" />
      </svg>
    ),
  },
  {
    name: "Figma",
    desc: "日常最常用软件",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 38 57" fill="none">
        <path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" fill="#1ABCFE" />
        <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" fill="#0ACF83" />
        <path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" fill="#F24E1E" />
        <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" fill="#FF7262" />
        <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fill="#A259FF" />
      </svg>
    ),
  },
  {
    name: "Gemini",
    desc: "进行AI相关的活动",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5z" />
        <circle cx="12" cy="12" r="9" />
      </svg>
    ),
  },
];

export default function SkillsSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="mb-12">
        <h2 className="text-4xl sm:text-5xl font-black text-[#1a1a1a] mb-4">技能</h2>
        <p className="text-gray-500 text-lg">随着科技的发展，不断用工具武装自己</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* Left - Skills List */}
        <div className="space-y-4">
          {skills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-start gap-4 p-5 bg-white rounded-2xl shadow-sm border border-gray-100"
            >
              <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-[#1a1a1a]">
                {skill.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#1a1a1a] mb-1">{skill.name}</h3>
                <p className="text-gray-500 text-sm">{skill.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right - Character Image */}
        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          className="hidden md:flex justify-center"
        >
          <div className="w-72 h-80 rounded-3xl overflow-hidden shadow-xl bg-gradient-to-br from-amber-50 to-orange-50">
            <img src="/images/hero-avatar.png" alt="韩笑" className="w-full h-full object-cover object-top" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
