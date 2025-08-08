import { Button } from "@/components/ui/button";
import profilePicture from "@/assets/profile-picture.png";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <img 
                src={profilePicture} 
                alt="Camm's profile picture" 
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Camm
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;