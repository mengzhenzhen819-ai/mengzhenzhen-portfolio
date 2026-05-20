import { useParams, Link } from "react-router";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { projectsDetail } from "../data/projects";

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = projectsDetail.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">项目未找到</h1>
          <Link to="/#projects" className="text-blue-600 hover:underline">
            返回首页
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f7f7f8]">
      <div className="sticky top-0 z-50 bg-[#f7f7f8]/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center">
          <Link
            to="/#projects"
            className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-[#1a1a1a] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            返回
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          {project.highlight && (
            <div className="mb-4">
              <span className="px-3 py-1 bg-amber-50 text-amber-600 rounded-full text-sm font-medium">
                {project.highlight}
              </span>
            </div>
          )}
          <h1 className="text-4xl sm:text-5xl font-black text-[#1a1a1a] mb-4">
            {project.title}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">{project.description}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8 p-6 bg-gray-50 rounded-2xl max-w-4xl"
        >
          <div style={{ display: "flex", alignItems: "flex-start", width: "fit-content" }}>
            <div style={{ width: "220px", marginRight: "40px", flex: "0 0 auto" }}>
              <div className="text-sm text-gray-500 mb-1">项目周期</div>
              <div className="font-medium text-[#1a1a1a]">{project.duration}</div>
            </div>
            <div style={{ width: "220px", flex: "0 0 auto" }}>
              <div className="text-sm text-gray-500 mb-1">角色</div>
              <div className="font-medium text-[#1a1a1a]">产品设计师</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-[20px] rounded-2xl overflow-hidden shadow-lg"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-auto object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            {project.gallery.map((item, gi) => (
              <div
                key={gi}
                className="rounded-2xl overflow-hidden shadow-lg border border-gray-100"
                style={{ marginTop: gi === 0 ? 0 : "20px" }}
              >
                {item.startsWith("#") ? (
                  <div
                    className="w-full rounded-2xl"
                    style={{ height: "500px", backgroundColor: item }}
                  />
                ) : (
                  <img
                    src={item}
                    alt={`${project.title} 作品 ${gi + 1}`}
                    className="w-full h-auto object-cover"
                  />
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
