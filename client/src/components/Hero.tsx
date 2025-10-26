import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import myPhoto from "@/assets/myphoto.png";


interface HeroProps {
  scrollToSection: (id: string) => void;
}

export function Hero({ scrollToSection }: HeroProps) {
  const [typedText, setTypedText] = useState("");
  const roles = ["Full Stack Developer", "Machine Learning Specialist", "Student at Jain University", "Based in Bangalore"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (typedText.length < currentRole.length) {
            setTypedText(currentRole.slice(0, typedText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (typedText.length > 0) {
            setTypedText(typedText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, roleIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      data-testid="section-hero"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
      
      <div className="relative max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text Content */}
          <div className="space-y-8 animate-fade-in-up order-2 lg:order-1">
            <div className="space-y-4">
              <p className="text-muted-foreground text-base md:text-lg font-medium">
                Hi, I'm
              </p>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-display font-bold text-foreground leading-none">
                Mahendra Rasay
              </h1>
              <div className="h-12 md:h-16 flex items-center">
                <p className="text-2xl md:text-3xl lg:text-4xl font-display font-semibold text-primary">
                  {typedText}
                  <span className="inline-block w-0.5 h-8 md:h-10 bg-primary ml-1 animate-pulse" />
                </p>
              </div>
            </div>

            <p className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
              Crafting exceptional digital experiences with modern web technologies. 
              Passionate about building scalable applications and beautiful user interfaces.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="group"
                data-testid="button-view-projects"
              >
                View Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="bg-background/50 backdrop-blur-sm"
                data-testid="button-contact-me"
              >
                Contact Me
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/MahendraRasay"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
                data-testid="link-github"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/mahendra-rasay-9420b3308"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
                data-testid="link-linkedin"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:mahendra.qrs@gmail.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Email"
                data-testid="link-email"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Right: Professional Image */}
          <div className="relative animate-fade-in order-1 lg:order-2" style={{ animationDelay: "0.2s" }}>
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-chart-2/30 rounded-full blur-3xl opacity-50" />
              
              {/* Image container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                <img
                  src={myPhoto}
                  alt="Professional headshot"
                  className="w-full h-full object-cover"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full p-1">
          <div className="w-1.5 h-3 bg-muted-foreground rounded-full mx-auto" />
        </div>
      </div>
    </section>
  );
}
