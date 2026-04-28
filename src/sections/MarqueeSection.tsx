export default function MarqueeSection() {
  return (
    <section className="pt-14 overflow-hidden" aria-hidden="true">
      <div
        className="flex gap-6 mb-20 text-[#11131a] whitespace-nowrap animate-marquee"
        style={{
          fontFamily: '"Impact", "Arial Narrow", sans-serif',
          fontSize: "clamp(64px, 9vw, 148px)",
          lineHeight: 1,
          letterSpacing: 0,
          width: "max-content",
        }}
      >
        <span className="block shrink-0">
          AI EXPERIENCE · INTERACTION · STRATEGY · GROWTH · SYSTEM ·
        </span>
        <span className="block shrink-0">
          AI EXPERIENCE · INTERACTION · STRATEGY · GROWTH · SYSTEM ·
        </span>
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
