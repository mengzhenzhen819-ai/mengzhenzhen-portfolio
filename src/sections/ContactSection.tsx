import { motion } from "framer-motion";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-[#1a1a1a] rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#5B6CF9]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#5B6CF9]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
               let's 合作
            </h2>
            <p className="text-white/60 text-lg mb-8 leading-relaxed">
              如果你对 AI 产品体验设计、增长设计、全链路设计有需求，或者想聊聊设计相关的话题，欢迎随时联系我。
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="mailto:mengzhenzhen.design@gmail.com"
              className="group flex items-center gap-3 px-6 py-4 bg-white/10 rounded-2xl hover:bg-white/20 transition-all duration-300"
            >
              <Mail className="w-5 h-5 text-[#5B6CF9]" />
              <span className="text-white font-medium">mengzhenzhen.design@gmail.com</span>
              <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-white transition-colors" />
            </a>
            <div className="flex items-center gap-3 px-6 py-4 bg-white/5 rounded-2xl">
              <MapPin className="w-5 h-5 text-[#5B6CF9]" />
              <span className="text-white/60 font-medium">北京，中国</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-12 pt-8 border-t border-white/10"
          >
            <p className="text-white/40 text-sm">
              目前就职于字节跳动 · 抖音体验设计团队，也可接设计咨询与项目合作。
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
