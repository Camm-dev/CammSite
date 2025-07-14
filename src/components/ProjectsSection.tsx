import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Star, GitFork } from "lucide-react";

const ProjectsSection = () => {
  // Sample GitHub projects - replace with real data or API integration
  const projects = [
    {
      name: "React Portfolio",
      description: "A modern, responsive portfolio website built with React and TypeScript. Features smooth animations and a calm design aesthetic.",
      language: "TypeScript",
      stars: 127,
      forks: 23,
      topics: ["react", "typescript", "portfolio", "tailwind"],
      homepage: "https://camm-portfolio.dev",
      html_url: "https://github.com/camm/react-portfolio"
    },
    {
      name: "Discord Bot Framework",
      description: "A powerful and extensible Discord bot framework with built-in command handling, database integration, and modular architecture.",
      language: "JavaScript",
      stars: 89,
      forks: 15,
      topics: ["discord", "bot", "framework", "nodejs"],
      homepage: null,
      html_url: "https://github.com/camm/discord-bot-framework"
    },
    {
      name: "AI Chat Interface",
      description: "A sleek chat interface for AI assistants with real-time messaging, markdown support, and customizable themes.",
      language: "Vue",
      stars: 203,
      forks: 34,
      topics: ["ai", "chat", "vue", "websockets"],
      homepage: "https://ai-chat.camm.dev",
      html_url: "https://github.com/camm/ai-chat-interface"
    },
    {
      name: "Task Manager API",
      description: "RESTful API for task management with authentication, real-time updates, and comprehensive documentation.",
      language: "Python",
      stars: 56,
      forks: 12,
      topics: ["api", "python", "fastapi", "mongodb"],
      homepage: null,
      html_url: "https://github.com/camm/task-manager-api"
    },
    {
      name: "Component Library",
      description: "A comprehensive React component library with accessibility features, extensive documentation, and Storybook integration.",
      language: "TypeScript",
      stars: 178,
      forks: 28,
      topics: ["components", "react", "storybook", "accessibility"],
      homepage: "https://components.camm.dev",
      html_url: "https://github.com/camm/component-library"
    },
    {
      name: "Weather Dashboard",
      description: "Beautiful weather dashboard with interactive maps, detailed forecasts, and location-based recommendations.",
      language: "JavaScript",
      stars: 91,
      forks: 19,
      topics: ["weather", "dashboard", "maps", "api"],
      homepage: "https://weather.camm.dev",
      html_url: "https://github.com/camm/weather-dashboard"
    }
  ];

  const getLanguageColor = (language: string) => {
    const colors: Record<string, string> = {
      TypeScript: "bg-blue-500",
      JavaScript: "bg-yellow-500",
      Vue: "bg-green-500",
      Python: "bg-blue-600",
      React: "bg-cyan-500"
    };
    return colors[language] || "bg-gray-500";
  };

  return (
    <section className="py-24 px-6 bg-gradient-calm" id="projects">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">GitHub Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A collection of my open-source projects and contributions. Each project represents 
            a journey of learning, experimentation, and passion for clean code.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={project.name}
              className="group hover:shadow-calm transition-all duration-500 hover:scale-105 animate-fade-in-up bg-card/50 backdrop-blur-sm border-border/50"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">
                    {project.name}
                  </CardTitle>
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0 hover:bg-primary/10"
                      asChild
                    >
                      <a
                        href={project.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.name} on GitHub`}
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                    {project.homepage && (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 hover:bg-primary/10"
                        asChild
                      >
                        <a
                          href={project.homepage}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View ${project.name} live demo`}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Language and stats */}
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${getLanguageColor(project.language)}`} />
                    <span className="text-muted-foreground">{project.language}</span>
                  </div>
                  <div className="flex items-center gap-4 text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      <span>{project.stars}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <GitFork className="w-3 h-3" />
                      <span>{project.forks}</span>
                    </div>
                  </div>
                </div>

                {/* Topics */}
                <div className="flex flex-wrap gap-1">
                  {project.topics.slice(0, 3).map((topic) => (
                    <Badge 
                      key={topic} 
                      variant="secondary" 
                      className="text-xs px-2 py-0.5"
                    >
                      {topic}
                    </Badge>
                  ))}
                  {project.topics.length > 3 && (
                    <Badge variant="outline" className="text-xs px-2 py-0.5">
                      +{project.topics.length - 3}
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* GitHub profile link */}
        <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
          <Button 
            size="lg" 
            className="bg-gradient-primary hover:shadow-glow transition-all duration-300 hover:scale-105"
            asChild
          >
            <a
              href="https://github.com/camm"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3"
            >
              <Github className="w-5 h-5" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;