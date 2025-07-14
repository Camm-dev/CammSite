import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Twitter, Mail, Music } from "lucide-react";
import profilePicture from "@/assets/profile-picture.png";

const HeroSection = () => {
  const socialLinks = [
    { icon: Mail, href: "mailto:camm.spraw@gmail.com", label: "Email" },
    { icon: Github, href: "https://github.com/Camm-dev", label: "GitHub" },
    { icon: Twitter, href: "https://x.com/Camfv_", label: "Twitter" },
    { icon: Music, href: "https://www.tiktok.com/@camfnbrr", label: "TikTok" },
    { icon: Music, href: "https://fortnitetracker.com/profile/all/Camm7x", label: "Fortnite Tracker" },
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-gradient-calm">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-primary opacity-10" />
      
      {/* Content */}
      <div className="text-center z-10 max-w-4xl mx-auto px-6">
        {/* Avatar */}
        <div className="animate-fade-in-up [animation-delay:0.2s] mb-8">
          <div className="w-48 h-48 rounded-full mx-auto mb-6 shadow-glow overflow-hidden">
            <img 
              src={profilePicture} 
              alt="Camm's profile picture" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Name and title */}
        <div className="animate-fade-in-up [animation-delay:0.4s] mb-8">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Camm
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-6">
            Developer • Creator • Player
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Crafting digital experiences with passion and precision. Welcome to my corner of the internet.
          </p>
        </div>

        {/* Social links */}
        <div className="animate-fade-in-up [animation-delay:0.6s] mb-12">
          <div className="flex flex-wrap gap-4 justify-center">
            {socialLinks.map((social, index) => (
              <Button
                key={social.label}
                variant="outline"
                size="lg"
                className="group relative overflow-hidden hover:shadow-glow transition-all duration-300 hover:scale-105"
                asChild
              >
                <a
                  href={social.href}
                  target={social.label === "Email" || social.label === "Fortnite Tracker" ? "_blank" : "_blank"}
                  rel="noopener noreferrer"
                  className="flex items-center gap-3"
                >
                  <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  <span className="hidden sm:inline">{social.label}</span>
                </a>
              </Button>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="animate-fade-in-up [animation-delay:0.8s]">
          <div className="animate-gentle-bounce">
            <ArrowDown className="w-6 h-6 text-muted-foreground mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;