import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const navItems = [
  { label: "首页", href: "#hero" },
  { label: "关于我", href: "#about" },
  { label: "关于项目", href: "#projects" },
  { label: "关于设计", href: "#design" },
];

export default function Navbar() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [dotX, setDotX] = useState(0);
  const [dotOpacity, setDotOpacity] = useState(0);
  const itemsContainerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (hoveredIndex === null || !itemRefs.current[hoveredIndex] || !itemsContainerRef.current) {
      setDotOpacity(0);
      return;
    }
    const item = itemRefs.current[hoveredIndex];
    const container = itemsContainerRef.current;
    if (!item) {
      setDotOpacity(0);
      return;
    }
    const containerRect = container.getBoundingClientRect();
    const itemRect = item.getBoundingClientRect();
    const x = itemRect.left - containerRect.left + itemRect.width / 2;
    setDotX(x);
    setDotOpacity(1);
  }, [hoveredIndex]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white border-t border-gray-200"
    >
      <nav className="relative flex items-center justify-center px-4 py-2 max-w-4xl mx-auto">
        <button
          onClick={() => scrollTo("#hero")}
          className="absolute left-0 top-1/2 -translate-y-1/2 hover:opacity-80 transition-opacity"
        >
          <img src="/images/hero-avatar.png" alt="孟珍珍" className="w-10 h-10 rounded-full object-cover" />
        </button>
        <div ref={itemsContainerRef} className="relative flex items-center gap-0">
          {navItems.map((item, idx) => (
            <button
              key={item.href}
              ref={(el) => { itemRefs.current[idx] = el; }}
              onClick={() => scrollTo(item.href)}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`relative px-5 py-2 text-base font-normal transition-colors duration-200 ${
                hoveredIndex === idx ? "text-[#5B6CF9]" : "text-gray-500"
              }`}
            >
              {item.label}
            </button>
          ))}
          <motion.div
            className="absolute -bottom-1 left-0 w-5 h-5 rounded-full bg-[#5B6CF9] pointer-events-none"
            style={{ marginLeft: -10 }}
            animate={{
              x: dotX,
              opacity: dotOpacity,
              scale: dotOpacity > 0 ? 1 : 0.5,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 25,
              opacity: { duration: 0.15 },
            }}
          />
        </div>
        <button
          onClick={() => scrollTo("#contact")}
          className="absolute right-0 top-1/2 -translate-y-1/2 px-7 py-2.5 bg-[#1a1a1a] text-white text-base font-normal rounded-full hover:bg-[#5B6CF9] transition-colors duration-300"
        >
          Contact
        </button>
      </nav>
    </motion.header>
  );
}
