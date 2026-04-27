import { useParams, useNavigate } from "react-router";
import { motion } from "framer-motion";
import { ArrowLeft, FileText, ImageIcon } from "lucide-react";
import { getProjectById } from "../data/projects";

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = getProjectById(id || "");

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-500 mb-4">项目未找到</p>
          <button
            onClick={() => navigate("/")}
            className="px-6 py-2 bg-[#1a1a1a] text-white rounded-full text-sm hover:bg-[#333] transition-colors"
          >
            返回首页
          </button>
        </div>
      </div>
    );
  }

  const hasGallery = project.gallery && project.gallery.length > 0;
  const hasPdf = !!project.pdfUrl;

  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-600 hover:text-[#1a1a1a] transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm font-medium">返回</span>
          </button>
        </div>
      </header>

      {/* Hero Banner */}
      <div className="relative h-[50vh] sm:h-[60vh] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 max-w-7xl mx-auto">
          {project.duration && (
            <p className="text-white/70 text-sm mb-2 tracking-wide">{project.duration}</p>
          )}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-3">
            {project.title}
          </h1>
          <p className="text-white/80 text-lg sm:text-xl max-w-2xl">{project.subtitle}</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">项目介绍</h2>
          <p className="text-gray-600 leading-relaxed text-base">{project.description}</p>
        </motion.div>

        {/* Gallery */}
        {hasGallery && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-12"
          >
            <div className="flex items-center gap-2 mb-6">
              <ImageIcon className="w-5 h-5 text-[#5B6CF9]" />
              <h2 className="text-2xl font-bold text-[#1a1a1a]">作品集</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.gallery.map((img, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow cursor-pointer group"
                >
                  <img
                    src={img}
                    alt={`作品 ${idx + 1}`}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* PDF */}
        {hasPdf && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12"
          >
            <div className="flex items-center gap-2 mb-6">
              <FileText className="w-5 h-5 text-[#5B6CF9]" />
              <h2 className="text-2xl font-bold text-[#1a1a1a]">项目文档</h2>
            </div>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#5B6CF9]/10 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-[#5B6CF9]" />
                </div>
                <div>
                  <p className="font-semibold text-[#1a1a1a]">{project.title} - 项目文档</p>
                  <p className="text-sm text-gray-400">PDF 文件</p>
                </div>
              </div>
              <a
                href={project.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-[#1a1a1a] text-white rounded-full text-sm font-medium hover:bg-[#333] transition-colors"
              >
                查看 PDF
              </a>
            </div>
          </motion.div>
        )}

        {/* Empty State - 提示用户上传 */}
        {!hasGallery && !hasPdf && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 p-12 text-center"
          >
            <ImageIcon className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 mb-2">暂无作品集图片</p>
            <p className="text-gray-400 text-sm">
              请将图片文件放入 public/images/ 文件夹，然后在代码中配置 gallery 字段
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
