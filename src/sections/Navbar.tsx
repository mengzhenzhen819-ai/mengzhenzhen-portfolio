import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const navItems = [
  { label: "首页", href: "/#top", targetId: "top" },
  { label: "关于我", href: "/#about", targetId: "about" },
  { label: "我的项目", href: "/#projects", targetId: "projects" },
  { label: "AI 探索", href: "/#ai-explore", targetId: "ai-explore" },
];

const sectionMap = [
  { id: "about", label: "关于我" },
  { id: "projects", label: "我的项目" },
  { id: "ai-explore", label: "AI 探索" },
  { id: "contact", label: "联系我" },
];

export default function Navbar() {
  const [activeLabel, setActiveLabel] = useState("首页");

  const animateScrollTo = (targetTop: number) => {
    window.scrollTo({ top: targetTop });
  };

  const scrollToSection = (targetId: string) => {
    if (typeof window === "undefined") return;
    if (targetId === "top") {
      animateScrollTo(0);
      return;
    }

    const element = document.getElementById(targetId);
    if (!element) return;

    const navOffset = 120;
    const top = element.getBoundingClientRect().top + window.scrollY - navOffset;
    animateScrollTo(top);
  };

  useEffect(() => {
    const handleScroll = () => {
      const probe = window.scrollY + 180;
      let current = "首页";

      for (const section of sectionMap) {
        const element = document.getElementById(section.id);
        if (element && probe >= element.offsetTop) {
          current = section.label;
        }
      }

      setActiveLabel(current);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("hashchange", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", handleScroll);
    };
  }, []);

  return (
    <motion.header
      className="site-header"
      aria-label="主导航"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav className="nav-shell">
        <a className="nav-avatar" href="/" aria-label="回到首页">
          <img src="/images/hero-avatar.png" alt="头像" />
        </a>

        <div className="nav-links">
          {navItems.map((item) => {
            const isActive = activeLabel === item.label;
            return (
              <a
                key={item.label}
                className={`nav-link ${isActive ? "is-active" : ""}`}
                href={item.href}
                onMouseEnter={() => scrollToSection(item.targetId)}
                onFocus={() => scrollToSection(item.targetId)}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        <a
          className="contact-pill"
          href="/#contact"
          onMouseEnter={() => scrollToSection("contact")}
          onFocus={() => scrollToSection("contact")}
        >
          联系我
        </a>
      </nav>
    </motion.header>
  );
}
