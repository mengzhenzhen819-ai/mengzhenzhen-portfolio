import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const navItems = [
  { label: "首页", href: "/" },
  { label: "关于我", href: "/#about" },
  { label: "我的项目", href: "/#projects" },
  { label: "AI 探索", href: "/#ai-explore" },
  { label: "联系我", href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-full flex items-center gap-8 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-lg border border-gray-100"
          : "bg-white/70 backdrop-blur-sm border border-gray-100"
      }`}
    >
      <Link to="/" className="flex items-center gap-2">
        <img src="/images/hero-avatar.png" alt="avatar" className="w-8 h-8 rounded-full" />
      </Link>
      {navItems.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className="text-sm font-medium text-gray-600 hover:text-[#1a1a1a] transition-colors"
        >
          {item.label}
        </a>
      ))}
    </motion.nav>
  );
}
