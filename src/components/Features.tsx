import { Code, BookOpen, Trophy, Users } from "lucide-react";

const Features = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-cyber bg-clip-text text-transparent mb-4">
            Learn By Doing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Theory meets practice in our interactive learning environment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="group p-8 bg-card/30 backdrop-blur-sm border border-primary/20 rounded-2xl hover:border-primary/50 hover:shadow-cyan transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-gradient-cyber rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Code className="w-7 h-7 text-background" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Hands-on Projects</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Build real applications with C, Python, and Arduino. Every concept is reinforced through practical projects.
                </p>
              </div>
            </div>
          </div>

          <div className="group p-8 bg-card/30 backdrop-blur-sm border border-primary/20 rounded-2xl hover:border-primary/50 hover:shadow-magenta transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-gradient-cyber rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <BookOpen className="w-7 h-7 text-background" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Practice Daily</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Consistent practice is key. Access quizzes, challenges, and coding exercises designed to sharpen your skills.
                </p>
              </div>
            </div>
          </div>

          <div className="group p-8 bg-card/30 backdrop-blur-sm border border-primary/20 rounded-2xl hover:border-primary/50 hover:shadow-cyan transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-gradient-cyber rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Trophy className="w-7 h-7 text-background" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Track Your Growth</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Monitor your progress with AI-powered tracking. Identify skill gaps and celebrate milestones.
                </p>
              </div>
            </div>
          </div>

          <div className="group p-8 bg-card/30 backdrop-blur-sm border border-primary/20 rounded-2xl hover:border-primary/50 hover:shadow-magenta transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-gradient-cyber rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Users className="w-7 h-7 text-background" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Community Support</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Join our vibrant community of learners. Share ideas, get help, and collaborate on projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
