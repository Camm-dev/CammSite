import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MessageCircle, Coffee } from "lucide-react";

const ContactSection = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      description: "Drop me a line for collaborations or just to say hello.",
      action: "Send Email",
      href: "mailto:hello@camm.dev"
    },
    {
      icon: MessageCircle,
      title: "Let's Chat",
      description: "Available for freelance projects and interesting conversations.",
      action: "Start Conversation",
      href: "https://cal.com/camm"
    },
    {
      icon: Coffee,
      title: "Coffee Chat",
      description: "Always up for a virtual coffee and tech discussions.",
      action: "Schedule Coffee",
      href: "https://cal.com/camm/coffee"
    }
  ];

  return (
    <section className="py-24 px-6" id="contact">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I'm always excited to connect with fellow developers, designers, and dreamers. 
            Whether you have a project in mind or just want to chat about tech, feel free to reach out.
          </p>
        </div>

        {/* Contact methods */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <Card 
              key={method.title}
              className="group hover:shadow-calm transition-all duration-500 hover:scale-105 animate-fade-in-up bg-gradient-calm border-0"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-primary mx-auto mb-6 flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                  <method.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{method.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{method.description}</p>
                <Button 
                  variant="outline" 
                  className="w-full group-hover:border-primary transition-all duration-300"
                  asChild
                >
                  <a
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {method.action}
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Footer quote */}
        <div className="text-center animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          <blockquote className="text-lg italic text-muted-foreground max-w-2xl mx-auto">
            "The best way to predict the future is to create it. Let's build something amazing together."
          </blockquote>
          <p className="text-sm text-muted-foreground mt-4">— Camm</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;