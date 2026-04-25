export default function Footer() {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-gray-200">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img
            src="/images/hero-avatar.png"
            alt="孟珍珍"
            className="w-8 h-8 rounded-full object-cover"
          />
          <span className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} 孟珍珍 · 体验设计师
          </span>
        </div>
        <p className="text-xs text-gray-400">
          使用 React + Tailwind CSS 设计与开发
        </p>
      </div>
    </footer>
  );
}
