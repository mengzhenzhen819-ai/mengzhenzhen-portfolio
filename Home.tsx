import Navbar from "../sections/Navbar";
import HeroSection from "../sections/HeroSection";
import AboutSection from "../sections/AboutSection";
import SelectedProjectsSection from "../sections/SelectedProjectsSection";
import AiNativeSection from "../sections/AiNativeSection";
import ContactSection from "../sections/ContactSection";
import Footer from "../sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SelectedProjectsSection />
      <AiNativeSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
