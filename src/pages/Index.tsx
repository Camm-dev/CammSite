import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import SnowflakeEffect from "@/components/SnowflakeEffect";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <SnowflakeEffect />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};

export default Index;
