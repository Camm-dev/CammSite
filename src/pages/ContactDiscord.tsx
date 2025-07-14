import { Button } from "@/components/ui/button";
import { ArrowLeft, Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import SnowflakeEffect from "@/components/SnowflakeEffect";

const ContactDiscord = () => {
  const { toast } = useToast();
  const discordUsername = "za.cam_";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(discordUsername);
    toast({
      title: "Discord username copied!",
      description: "Discord username has been copied to your clipboard.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-calm relative flex items-center justify-center">
      <SnowflakeEffect />
      
      {/* Back button */}
      <Button
        variant="outline"
        className="absolute top-6 left-6 z-10"
        asChild
      >
        <a href="/">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </a>
      </Button>

      {/* Content */}
      <div className="text-center z-10 max-w-2xl mx-auto px-6">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-primary bg-clip-text text-transparent">
            Discord Contact
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            You can find me on Discord with this username
          </p>
          
          <div className="bg-card border border-border rounded-lg p-8 mb-8">
            <p className="text-2xl font-mono text-foreground mb-6">{discordUsername}</p>
            <Button
              variant="outline"
              onClick={copyToClipboard}
              className="mr-4"
            >
              <Copy className="w-4 h-4 mr-2" />
              Copy Username
            </Button>
            <Button asChild>
              <a
                href="https://discord.com/users/za.cam_"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open Discord Profile
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDiscord;