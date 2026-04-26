import { motion } from "framer-motion";
import { Download } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="bg-white rounded-3xl overflow-hidden shadow-xl"
      >
        <div className="grid lg:grid-cols-2">
          {/* Left - Avatar */}
          <div className="bg-[#faf8f5] flex items-center justify-center p-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="/images/hero-avatar.png"
                alt="孟珍珍"
                className="w-64 h-auto object-contain"
              />
            </motion.div>
          </div>

          {/* Right - Contact Info */}
          <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#5B6CF9]/10 text-xs tracking-[0.2em] text-[#5B6CF9] uppercase mb-6 w-fit">
              EAGER TO JOIN
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-[#1a1a1a] mb-8">
              期待与您合作
            </h2>

            <div className="grid grid-cols-2 gap-x-8 gap-y-6 mb-8">
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">姓名</p>
                <p className="text-lg font-bold text-[#1a1a1a]">韩笑</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">联系方式</p>
                <p className="text-lg font-bold text-[#1a1a1a]">15323257185</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">微信号</p>
                <p className="text-lg font-bold text-[#1a1a1a]">840245937</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Email</p>
                <p className="text-lg font-bold text-[#1a1a1a]">840245937@qq.com</p>
              </div>
            </div>

            <button className="inline-flex items-center gap-2 px-8 py-4 bg-[#5B6CF9] text-white rounded-full font-medium hover:bg-[#4a5be0] transition-colors w-fit">
              <Download className="w-5 h-5" />
              下载简历
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
