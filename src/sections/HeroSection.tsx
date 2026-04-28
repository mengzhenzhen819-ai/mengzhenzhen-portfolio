import { motion } from "framer-motion";

const stats = [
  { num: "7+", label: "年设计经验" },
  { num: "3家", label: "大厂互联网公司" },
  { num: "亿+", label: "用户规模覆盖" },
  { num: "硕士", label: "设计艺术学" },
];

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-layout">
        <motion.div
          className="hero-inner"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="section-tag">AI时代体验设计师</div>

          <h1 className="hero-name">孟珍珍</h1>

          <p className="hero-title">体验设计师</p>
          <p className="hero-subtitle">× AI 时代</p>

          <p className="hero-bio">
            Hi，我是Magic ，一名资深产品体验设计师，先后经历滴滴 · 阿里 · 字节跳动。具备大型
            ToC / ToB 项目全链路设计经验，横跨 B 端数据平台、C 端增长激励，正向 AI Native
            体验设计方向探索转型
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn-primary">
              查看项目 →
            </a>
            <a href="#about" className="btn-secondary">
              了解我
            </a>
          </div>

          <div className="hero-stats">
            {stats.map((s) => (
              <div key={s.label} className="stat-item">
                <p className="stat-num">{s.num}</p>
                <p className="stat-label">{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="hero-media"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero-media-card">
            <img src="/images/hero-avatar.png" alt="孟珍珍 3D 形象" className="hero-media-image" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
