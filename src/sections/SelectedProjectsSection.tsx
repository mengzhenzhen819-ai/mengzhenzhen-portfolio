import { useCallback, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router";
import { allProjects, tabs, springTransition } from "../data/projects";
import type { CardProject } from "../data/projects";

const byteSubtabs = [
  { id: "growth", label: "体验优化与用户增长", projectId: "waiyanshe" },
  { id: "platform", label: "中台能力建设与规范搭建", projectId: "qiandao" },
  { id: "collab", label: "跨团队协作与流程优化", projectId: "dengta" },
];

function ProjectCard({
  project,
  hoveredId,
  setHoveredId,
  enableTilt,
}: {
  project: CardProject;
  hoveredId: string | null;
  setHoveredId: (id: string | null) => void;
  enableTilt: boolean;
}) {
  const isHovered = hoveredId === project.id;
  const isOtherHovered = hoveredId !== null && !isHovered;
  const isPlaceholder = project.id.includes("-ph");
  const isFeaturedByteCard = project.id === "waiyanshe";
  const featuredTiltEnabled = enableTilt && isFeaturedByteCard;
  const standardTiltEnabled = enableTilt && !isFeaturedByteCard;
  const tiltRef = useRef<HTMLDivElement>(null);
  const [tiltTransform, setTiltTransform] = useState(
    "perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"
  );
  const [spotlightPos, setSpotlightPos] = useState({ x: 50, y: 50 });
  const [isTilting, setIsTilting] = useState(false);

  const handlePointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (!enableTilt) return;
      const element = tiltRef.current;
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;
      const tiltLimit = 8;
      const xRot = (py - 0.5) * -(tiltLimit * 2);
      const yRot = (px - 0.5) * tiltLimit * 2;

      setTiltTransform(
        `perspective(1200px) rotateX(${xRot}deg) rotateY(${yRot}deg) scale3d(1.02, 1.02, 1.02)`
      );
      setSpotlightPos({ x: px * 100, y: py * 100 });
    },
    [enableTilt]
  );

  const handlePointerEnter = useCallback(() => {
    if (!enableTilt) return;
    setIsTilting(true);
  }, [enableTilt]);

  const handlePointerLeave = useCallback(() => {
    if (!enableTilt) return;
    setTiltTransform("perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
    setSpotlightPos({ x: 50, y: 50 });
    setIsTilting(false);
  }, [enableTilt]);

  const cardContent = (
    <motion.div
      className={`proj-card transition-all duration-300 ${isHovered ? "hover-active" : ""} ${isPlaceholder ? "opacity-60" : ""} ${isFeaturedByteCard ? "proj-card-featured" : ""}`}
      animate={{
        scale: isHovered ? 1.01 : isOtherHovered ? 0.985 : 1,
        y: isHovered ? -3 : 0,
      }}
      transition={springTransition}
      style={{
        boxShadow: "0 2px 8px rgba(0,0,0,0.05), 0 8px 28px rgba(0,0,0,0.06)",
      }}
      onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
        e.currentTarget.style.transform = "translateY(-3px)";
        e.currentTarget.style.boxShadow = "0 6px 18px rgba(0,0,0,0.07), 0 18px 40px rgba(0,0,0,0.08)";
      }}
      onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
        if (!isHovered) {
          e.currentTarget.style.transform = "";
          e.currentTarget.style.boxShadow = "";
        }
      }}
    >
      <div
        ref={standardTiltEnabled ? tiltRef : undefined}
        className={`proj-card-tilt-layer ${standardTiltEnabled ? "tilt-enabled" : ""}`}
        onPointerEnter={standardTiltEnabled ? handlePointerEnter : undefined}
        onPointerMove={standardTiltEnabled ? handlePointerMove : undefined}
        onPointerLeave={standardTiltEnabled ? handlePointerLeave : undefined}
        style={
          standardTiltEnabled
            ? {
                transform: tiltTransform,
                transition: isTilting ? "transform 120ms ease-out" : "transform 260ms ease-out",
                transformStyle: "preserve-3d",
              }
            : undefined
        }
      >
        <div
          className="pc-cover"
          style={
            isFeaturedByteCard
              ? { backgroundImage: `url(${project.image})` }
              : { backgroundColor: project.color }
          }
        >
          {isPlaceholder && (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl font-bold text-gray-400">即将上线</span>
            </div>
          )}
        </div>
        <div className={`pc-body ${isOtherHovered ? "bg-white/50" : "bg-white"} ${isFeaturedByteCard ? "pc-body-featured" : ""}`}>
          <div className="pc-num">{isFeaturedByteCard ? `${project.num} / ${project.subtitle}` : project.num}</div>
          <div className="pc-title" style={{ fontFamily: "inherit" }}>
            {project.title}
          </div>
          <div className="pc-desc">{project.description}</div>
          <div className="pc-tags">
            {project.tags.map((tag, i) => (
              <span key={i} className="pc-tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
        {standardTiltEnabled && (
          <div
            className="proj-card-spotlight"
            style={{ opacity: isTilting ? 1 : 0, transition: "opacity 220ms ease" }}
          >
            <div
              className="proj-card-spotlight-glow"
              style={{ left: `${spotlightPos.x}%`, top: `${spotlightPos.y}%` }}
            />
          </div>
        )}
      </div>
    </motion.div>
  );

  const cardWithTilt =
    featuredTiltEnabled ? (
      <div
        ref={tiltRef}
        className="proj-card-featured-tilt-shell"
        onPointerEnter={handlePointerEnter}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        style={{
          transform: tiltTransform,
          transition: isTilting ? "transform 120ms ease-out" : "transform 260ms ease-out",
          transformStyle: "preserve-3d",
        }}
      >
        {cardContent}
        <div
          className="proj-card-spotlight"
          style={{ opacity: isTilting ? 1 : 0, transition: "opacity 220ms ease" }}
        >
          <div
            className="proj-card-spotlight-glow"
            style={{ left: `${spotlightPos.x}%`, top: `${spotlightPos.y}%` }}
          />
        </div>
      </div>
    ) : (
      cardContent
    );

  if (isPlaceholder) {
    return (
      <div
        key={project.id}
        className="block cursor-default"
        onMouseEnter={() => setHoveredId(project.id)}
        onMouseLeave={() => setHoveredId(null)}
      >
        {cardWithTilt}
      </div>
    );
  }

  return (
    <Link
      key={project.id}
      to={`/project/${project.id}`}
      className={`block cursor-pointer ${isFeaturedByteCard ? "featured-card-link" : ""}`}
      onMouseEnter={() => setHoveredId(project.id)}
      onMouseLeave={() => setHoveredId(null)}
    >
      {cardWithTilt}
    </Link>
  );
}

export default function SelectedProjectsSection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("字节项目");
  const [activeByteSubtab, setActiveByteSubtab] = useState(byteSubtabs[0].id);

  const currentProjects =
    activeTab === "字节项目"
      ? allProjects.filter(
          (p) => p.id === byteSubtabs.find((item) => item.id === activeByteSubtab)?.projectId
        )
      : allProjects.filter((p) => p.tab === activeTab);

  return (
    <section
      id="projects"
      className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{
        backgroundImage: "radial-gradient(circle, #d4d4d4 0.8px, transparent 0.8px)",
        backgroundSize: "20px 20px",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-left mb-12 max-w-3xl"
        >
          <div className="content-section-tag mb-3">
            <span className="content-section-tag-line">——</span>
            <span>我的项目</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-[#1a1a1a]">精选项目</h2>
        </motion.div>

        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-8">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-2xl sm:text-3xl transition-colors duration-200 ${
                  activeTab === tab
                    ? "font-black text-[#1a1a1a]"
                    : "font-semibold text-gray-400 hover:text-[#1a1a1a]"
                }`}
                style={{ fontFamily: "inherit" }}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {activeTab === "字节项目" && (
          <div className="max-w-5xl mb-10">
            <div className="project-subtabs">
              {byteSubtabs.map((subtab) => (
                <button
                  key={subtab.id}
                  onClick={() => setActiveByteSubtab(subtab.id)}
                  className={`project-subtab ${activeByteSubtab === subtab.id ? "is-active" : ""}`}
                >
                  {subtab.label}
                </button>
              ))}
            </div>
          </div>
        )}

        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeTab}-${activeByteSubtab}`}
            className="proj-grid"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {currentProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                hoveredId={hoveredId}
                setHoveredId={setHoveredId}
                enableTilt={index === 0}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
