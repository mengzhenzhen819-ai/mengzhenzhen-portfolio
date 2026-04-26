import { Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#5B6CF9] py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 text-white/90">
            <Mail className="w-4 h-4" />
            <span className="text-sm">840245937@qq.com</span>
          </div>
          <div className="flex items-center gap-2 text-white/90">
            <Phone className="w-4 h-4" />
            <span className="text-sm">15323257185</span>
          </div>
        </div>
        <div className="flex items-center gap-2 text-white/60 text-sm">
          <span>Created by</span>
          <img
            src="/images/hero-avatar.png"
            alt="Kimi Agent"
            className="w-6 h-6 rounded-full object-cover"
          />
          <span>Kimi Agent</span>
        </div>
      </div>
    </footer>
  );
}
