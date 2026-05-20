import { motion } from "framer-motion";

const contacts = [
  { icon: "📱", label: "手机", value: "15291968365" },
  { icon: "📧", label: "Email", value: "15291968365@163.com" },
  { icon: "📍", label: "目前居住地", value: "北京" },
];

export default function ContactSection() {
  return (
    <section id="contact" className="contact-root">
      <div className="contact-section-wrap">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="contact-left"
        >
          <div className="contact-eyebrow">Contact</div>
          <h2 className="contact-headline">
            期待加入一个真正<br />
            重视产品体验、<br />
            AI 创新和业务价值的团队
          </h2>
          <p className="contact-sub">
            求职意向：产品体验设计师 / AI 产品体验设计
            <br />
            工作经验 7 年，欢迎直接联系沟通。
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="contact-right"
        >
          <div className="contact-info-card">
            {contacts.map((c) => (
              <div key={c.label} className="ci-row">
                <div className="ci-icon">{c.icon}</div>
                <div>
                  <div className="ci-label">{c.label}</div>
                  <div className="ci-val">{c.value}</div>
                </div>
              </div>
            ))}
            <div className="contact-ctas">
              <a href="tel:15291968365" className="cta-white">
                联系我
              </a>
              <a href="mailto:15291968365@163.com" className="cta-outline">
                发送邮件
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
