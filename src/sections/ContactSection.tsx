import { motion } from "framer-motion";

const contacts = [
  { icon: "📱", label: "手机", value: "15291968365" },
  { icon: "📧", label: "Email", value: "15291968365@163.com" },
  { icon: "📍", label: "目前居住地", value: "北京" },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-32 px-4 sm:px-6 lg:px-8 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="section-tag mb-3 flex items-center gap-3 text-sm text-gray-500">
            <span className="text-white/60">——</span> CONTACT
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
            期待加入一个真正<br />
            重视产品体验、<br />
            AI 创新和业务价值的团队
          </h2>
          <p className="text-gray-400 mb-2">
            求职意向：产品体验设计师 / AI 产品体验设计
          </p>
          <p className="text-gray-400">
            工作经验 7 年，欢迎直接联系沟通。
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="space-y-6"
        >
          {contacts.map((c) => (
            <div
              key={c.label}
              className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10"
            >
              <span className="text-2xl">{c.icon}</span>
              <div>
                <div className="text-xs text-gray-500">{c.label}</div>
                <div className="text-white font-medium">{c.value}</div>
              </div>
            </div>
          ))}
          <div className="flex gap-4 pt-4">
            <a
              href="tel:15291968365"
              className="flex-1 py-3 bg-white text-[#1a1a1a] rounded-full text-center text-sm font-medium hover:bg-gray-100 transition-colors"
            >
              电话联系
            </a>
            <a
              href="mailto:15291968365@163.com"
              className="flex-1 py-3 border border-white/20 text-white rounded-full text-center text-sm font-medium hover:bg-white/5 transition-colors"
            >
              发送邮件
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
