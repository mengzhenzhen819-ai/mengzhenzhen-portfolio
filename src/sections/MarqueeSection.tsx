export default function MarqueeSection() {
  return (
    <section
      className="pt-14 overflow-hidden"
      aria-hidden="true"
    >
      <div
        className="flex gap-6 mb-20 text-[#11131a] whitespace-nowrap animate-marquee"
        style={{
          fontFamily: '"Impact", "Arial Narrow", sans-serif',
          fontSize: 'clamp(64px, 9vw, 148px)',
          lineHeight: 1,
          letterSpacing: 0,
          width: 'max-content',
        }}
      >
        <span className="block shrink-0">
          AI EXPERIENCE · INTERACTION · STRATEGY · GROWTH · SYSTEM ·
        </span>
        <span className="block shrink-0">
          AI EXPERIENCE · INTERACTION · STRATEGY · GROWTH · SYSTEM ·
        </span>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes marquee-scroll {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee-scroll 22s linear infinite;
          }
          @media (prefers-reduced-motion: reduce) {
            .animate-marquee { animation: none; }
          }
          @media (max-width: 680px) {
            .animate-marquee {
              font-size: 72px !important;
              gap: 18px !important;
              margin-bottom: 48px !important;
            }
          }
        `
      }} />
    </section>
  );
}
