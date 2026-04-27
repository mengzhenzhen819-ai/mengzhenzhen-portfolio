import { Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#5B6CF9] text-white py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-white/70" />
            <div>
              <p className="text-xs text-white/60">Email</p>
              <p className="text-sm font-medium">840245937@qq.com</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-white/70" />
            <div>
              <p className="text-xs text-white/60">联系方式</p>
              <p className="text-sm font-medium">15323257185</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 text-sm text-white/80">
          <span>Created by</span>
          <a href="https://www.kimi.com/agent" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
          >
            <span className="w-5 h-5 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-[10px] font-bold text-white">K</span>
            Kimi Agent
          </a>
        </div>
      </div>
    </footer>
  );
}
