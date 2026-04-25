import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface TypewriterTextProps {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
  cursor?: boolean;
}

export default function TypewriterText({
  text,
  className = "",
  delay = 0,
  speed = 0.06,
  cursor = true,
}: TypewriterTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const characters = text.split("");

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: speed,
        delayChildren: delay,
      },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 20,
        stiffness: 300,
      },
    },
  };

  return (
    <span ref={ref} className={className}>
      {isInView ? (
        <motion.span variants={container} initial="hidden" animate="visible" aria-label={text}>
          {characters.map((char, index) => (
            <motion.span
              key={`${char}-${index}`}
              variants={child}
              className="inline-block"
              style={{ whiteSpace: char === " " ? "pre" : undefined }}
            >
              {char}
            </motion.span>
          ))}
          {cursor && (
            <motion.span
              className="inline-block w-[3px] h-[1em] bg-current ml-0.5 align-middle"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
            />
          )}
        </motion.span>
      ) : (
        <span className="opacity-0">{text}</span>
      )}
    </span>
  );
}
