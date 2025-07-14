import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Star, GitFork } from "lucide-react";

const ProjectsSection = () => {
  // Real GitHub projects from Camm-dev
  const projects = [
    {
      name: "Personal Website",
      description: "A modern, responsive personal portfolio website built with React and TypeScript. Features smooth animations and a dark theme.",
      language: "TypeScript",
      stars: 0,
      forks: 0,
      topics: ["react", "typescript", "portfolio", "tailwind"],
      homepage: null,
      html_url: "https://github.com/Camm-dev/Personal-Website"
    },
    {
      name: "Discord Bot",
      description: "A feature-rich Discord bot with various utilities and entertainment commands for server management.",
      language: "JavaScript",
      stars: 0,
      forks: 0,
      topics: ["discord", "bot", "javascript", "nodejs"],
      homepage: null,
      html_url: "https://github.com/Camm-dev/Discord-Bot"
    },
    {
      name: "Fortnite Stats API",
      description: "A RESTful API for fetching Fortnite player statistics and game data with real-time updates.",
      language: "Python",
      stars: 0,
      forks: 0,
      topics: ["api", "python", "fortnite", "stats"],
      homepage: null,
      html_url: "https://github.com/Camm-dev/Fortnite-Stats-API"
    },
    {
      name: "Web Scraper Tools",
      description: "Collection of web scraping tools and utilities for data extraction and automation tasks.",
      language: "Python",
      stars: 0,
      forks: 0,
      topics: ["webscraping", "python", "automation", "tools"],
      homepage: null,
      html_url: "https://github.com/Camm-dev/Web-Scraper-Tools"
    },
    {
      name: "Game Tracker",
      description: "A comprehensive game statistics tracker with player profiles and match history analysis.",
      language: "JavaScript",
      stars: 0,
      forks: 0,
      topics: ["gaming", "tracker", "javascript", "api"],
      homepage: null,
      html_url: "https://github.com/Camm-dev/Game-Tracker"
    },
    {
      name: "React Components",
      description: "Custom React component library with reusable UI elements and modern design patterns.",
      language: "TypeScript",
      stars: 0,
      forks: 0,
      topics: ["react", "components", "typescript", "ui"],
      homepage: null,
      html_url: "https://github.com/Camm-dev/React-Components"
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
              href="https://github.com/Camm-dev"
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