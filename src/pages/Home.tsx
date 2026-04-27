import Navbar from "../sections/Navbar";
import HeroSection from "../sections/HeroSection";
import AboutSection from "../sections/AboutSection";
import SelectedProjectsSection from "../sections/SelectedProjectsSection";
import MarqueeSection from "../sections/MarqueeSection";
import OtherProjectsSection from "../sections/OtherProjectsSection";
import ContactSection from "../sections/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f7f7f8]">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SelectedProjectsSection />
      <MarqueeSection />
      <OtherProjectsSection />
      <ContactSection />
    </div>
  );
}
