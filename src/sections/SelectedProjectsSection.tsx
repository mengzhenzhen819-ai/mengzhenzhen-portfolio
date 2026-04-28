import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { allProjects, tabs, springTransition } from "@/data/projects";
import type { CardProject } from "@/data/projects";

function ProjectCard({
  project,
  hoveredId,
  setHoveredId,
}: {
  project: CardProject;
  hoveredId: string | null;
  setHoveredId: (id: string | null) => void;
}) {
  const isHovered = hoveredId === project.id;
  const isOtherHovered = hoveredId !== null && !isHovered;
  const isPlaceholder = project.id.includes("-ph");

  const cardContent = (
    <motion.div
      className={`proj-card transition-all duration-300 ${isHovered ? "hover-active" : ""} ${isPlaceholder ? "opacity-60" : ""}`}
      animate={{
        scale: isHovered ? 1.02 : isOtherHovered ? 0.97 : 1,
        y: isHovered ? -5 : 0,
      }}
      transition={springTransition}
      style={{
        boxShadow: "0 2px 8px rgba(0,0,0,0.05), 0 8px 28px rgba(0,0,0,0.06)",
      }}
      onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
        e.currentTarget.style.transform = "translateY(-5px)";
        e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.08), 0 24px 56px rgba(0,0,0,0.10)";
      }}
      onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
        if (!isHovered) {
          e.currentTarget.style.transform = "";
          e.currentTarget.style.boxShadow = "";
        }
      }}
    >
      <div className="pc-cover" style={{ backgroundColor: project.color }}>
        {isPlaceholder && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-bold text-gray-400">即将上线</span>
          </div>
        )}
      </div>
      <div className={`pc-body ${isOtherHovered ? "bg-white/50" : "bg-white"}`}>
        <div className="pc-num">{project.num}</div>
        <div className="pc-title" style={{ fontFamily: "inherit" }}>
          {project.title}
        </div>
        <div className="pc-desc">{project.description}</div>
        <div className="pc-tags">
          {project.tags.map((tag, i) => (
            <span key={i} className="pc-tag">{tag}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );

  if (isPlaceholder) {
    return (
      <div
        key={project.id}
        className="block cursor-default"
        onMouseEnter={() => setHoveredId(project.id)}
        onMouseLeave={() => setHoveredId(null)}
      >
        {cardContent}
      </div>
    );
  }

  return (
    <Link
      key={project.id}
      to={`/project/${project.id}`}
      className="block cursor-pointer"
      onMouseEnter={() => setHoveredId(project.id)}
      onMouseLeave={() => setHoveredId(null)}
    >
      {cardContent}
    </Link>
  );
}

export default function SelectedProjectsSection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("字节项目");

  const currentProjects = allProjects.filter((p) => p.tab === activeTab);

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
          <div className="section-tag mb-3 flex items-center gap-3">
            <span className="text-[#1a1a1a]">——</span> 我的项目 <span className="text-[#1a1a1a]">——</span>
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
                    : "font-normal text-gray-400 hover:text-gray-600"
                }`}
                style={{ fontFamily: "inherit" }}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="proj-grid"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {currentProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                hoveredId={hoveredId}
                setHoveredId={setHoveredId}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
