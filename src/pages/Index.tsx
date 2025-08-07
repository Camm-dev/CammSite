import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import SnowflakeEffect from "@/components/SnowflakeEffect";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-calm relative">
      <SnowflakeEffect />
      <HeroSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
};

export default Index;
