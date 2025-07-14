import { Card, CardContent } from "@/components/ui/card";
import { Code, Palette, Rocket } from "lucide-react";

const AboutSection = () => {
  const skills = [
    {
      icon: Code,
      title: "Development",
      description: "Full-stack development with modern technologies and best practices.",
      items: ["React", "TypeScript", "Node.js", "Python"]
    },
    {
      icon: Palette,
      title: "Design",
      description: "Creating beautiful and intuitive user experiences.",
      items: ["UI/UX", "Figma", "Adobe Creative Suite", "Prototyping"]
    },
    {
      icon: Rocket,
      title: "Innovation",
      description: "Building solutions that make a difference.",
      items: ["Problem Solving", "Product Strategy", "Team Leadership", "Mentoring"]
    }
  ];

  return (
    <section className="py-24 px-6" id="about">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm passionate about creating digital experiences that blend functionality with beauty. 
            With a focus on clean code and thoughtful design, I bring ideas to life.
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <Card 
              key={skill.title}
              className="group hover:shadow-calm transition-all duration-500 hover:scale-105 animate-fade-in-up bg-gradient-calm border-0"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-primary mx-auto mb-6 flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                  <skill.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{skill.title}</h3>
                <p className="text-muted-foreground mb-6">{skill.description}</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {skill.items.map((item) => (
                    <span 
                      key={item}
                      className="px-3 py-1 bg-secondary rounded-full text-sm text-secondary-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;