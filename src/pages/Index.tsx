import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import RainEffect from "@/components/RainEffect";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <RainEffect />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};

export default Index;
