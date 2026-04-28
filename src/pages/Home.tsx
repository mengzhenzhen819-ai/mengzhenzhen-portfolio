import Navbar from "../sections/Navbar";
import HeroSection from "../sections/HeroSection";
import AboutSection from "../sections/AboutSection";
import MarqueeSection from "../sections/MarqueeSection";
import SelectedProjectsSection from "../sections/SelectedProjectsSection";
import AISection from "../sections/AISection";
import ContactSection from "../sections/ContactSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <MarqueeSection />
      <SelectedProjectsSection />
      <AISection />
      <ContactSection />
    </>
  );
}
