import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import gteLogo from "@/assets/gte-logo.jpeg";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-primary/20 bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src={gteLogo}
              alt="GTE Logo"
              className="h-12 w-auto animate-glow-pulse"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="hover:text-primary">Home</Link>

            {/* Tracker Dropdown */}
            <div className="relative group">
              <span className="cursor-pointer hover:text-primary">
                Trackers
              </span>

              <div className="absolute top-full mt-3 w-64 rounded-xl bg-background border border-primary/20 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <Link
                  to="/cse-projects"
                  className="block px-4 py-3 hover:bg-primary/10"
                >
                  💻 Computer Science
                </Link>
                <Link
                  to="/ece-projects"
                  className="block px-4 py-3 hover:bg-primary/10"
                >
                  🔌 Electronics & Communication
                </Link>
                <Link
                  to="/ArtificialIntelligence-projects"
                  className="block px-4 py-3 hover:bg-primary/10"
                >
                  ⚙️ Artificial Intelligence
                </Link>
              </div>
            </div>

            <Link to="/projects" className="hover:text-primary">Projects</Link>
            <Link to="/about" className="hover:text-primary">About Us</Link>
            <Link to="/trainers" className="hover:text-primary">For Trainers</Link>

            <Link to="/auth">
              <Button variant="cyber">Login / Register</Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-3 border-t border-primary/20">
            <Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>

            <Link to="/cse-projects" onClick={() => setMobileMenuOpen(false)}>
              💻 CSE Projects
            </Link>

            <Link to="/ece-projects" onClick={() => setMobileMenuOpen(false)}>
              🔌 ECE Projects
            </Link>

            <Link to="/ArtificialIntelligence-projects" onClick={() => setMobileMenuOpen(false)}>
              ⚙️ Integrated Projects
            </Link>

            <Link to="/about" onClick={() => setMobileMenuOpen(false)}>
              About Us
            </Link>

            <Link to="/trainers" onClick={() => setMobileMenuOpen(false)}>
              For Trainers
            </Link>

            <Link to="/auth" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="cyber" className="w-full">
                Login / Register
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
