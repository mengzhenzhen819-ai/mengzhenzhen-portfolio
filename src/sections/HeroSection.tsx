import { motion } from "framer-motion";

const stats = [
  { num: "7+", label: "年设计经验" },
  { num: "3家", label: "大厂互联网公司" },
  { num: "亿+", label: "用户规模覆盖" },
  { num: "硕士", label: "设计艺术学" },
];

function TypewriterText({
  text,
  speed = 80,
  delay = 0,
  cursor = false,
}: {
  text: string;
  speed?: number;
  delay?: number;
  cursor?: boolean;
}) {
  const totalDelay = delay / 1000;
  const charDelay = speed / 1000;
  const finalDelay = totalDelay + text.length * charDelay;

  return (
    <span aria-label={text}>
      {text.split("").map((char, idx) => (
        <motion.span
          key={`${char}-${idx}`}
          className="hero-ripple-char"
          initial={{
            opacity: 0,
            y: 18,
            scale: 0.86,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.7,
            delay: totalDelay + idx * charDelay,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
      {cursor && (
        <motion.span
          className="cursor-blink"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: finalDelay, duration: 0.01 }}
        >
          |
        </motion.span>
      )}
    </span>
  );
}

export default function HeroSection() {
  return (
    <section className="hero-section" id="top">
      <div className="hero-layout">
        <motion.div
          className="hero-inner"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="section-tag">AI时代体验设计师</div>

          <h1 className="hero-name">孟珍珍</h1>

          <p className="hero-title">
            <TypewriterText text="体验设计师" speed={80} delay={1200} />
          </p>
          <p className="hero-subtitle">
            <TypewriterText text="× AI 时代" speed={80} delay={1800} />
          </p>

          <p className="hero-bio">
            <TypewriterText
              text="Hi，我是Magic ，一名资深产品体验设计师，先后经历滴滴 · 阿里 · 字节跳动。具备大型 ToC / ToB 项目全链路设计经验，横跨 B 端数据平台、C端增长激励，正向 AI Native 体验设计方向探索转型"
              speed={40}
              delay={2400}
              cursor
            />
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
            <img src="/images/hero-main-figure.png" alt="孟珍珍 3D 形象" className="hero-media-image" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
