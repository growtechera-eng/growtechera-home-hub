import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Sparkles, Cpu, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-64 h-64 bg-cyan/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-magenta/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="text-center space-y-8">
          <div className="inline-block">
            <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm border border-primary/30 rounded-full px-6 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-primary animate-glow-pulse" />
              <span className="text-sm font-medium text-foreground">Grow Up For Digital E-RA</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-cyber bg-clip-text text-transparent leading-tight">
            Master the Future of
            <br />
            Technology
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Learn AI, Computer Science, and Electronics through hands-on projects with industry experts
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Link to="/auth">
              <Button variant="cyber" size="lg" className="group">
                Start Learning
                <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="border-primary/50 hover:border-primary hover:bg-primary/10">
              Explore Courses
            </Button>
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-16 max-w-4xl mx-auto">
            <div className="group p-6 bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl hover:border-primary/50 hover:shadow-cyan transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-cyber rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Cpu className="w-6 h-6 text-background" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">AI & Machine Learning</h3>
              <p className="text-muted-foreground text-sm">Master cutting-edge AI technologies and build intelligent systems</p>
            </div>

            <div className="group p-6 bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl hover:border-primary/50 hover:shadow-cyan transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-cyber rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6 text-background" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Electronics & IoT</h3>
              <p className="text-muted-foreground text-sm">Build smart devices with Arduino and modern electronics</p>
            </div>

            <div className="group p-6 bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl hover:border-primary/50 hover:shadow-cyan transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-cyber rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Sparkles className="w-6 h-6 text-background" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Industry Experts</h3>
              <p className="text-muted-foreground text-sm">Learn from professionals with real-world experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
