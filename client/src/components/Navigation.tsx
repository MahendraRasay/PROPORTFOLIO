import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";

interface NavigationProps {
  scrollToSection: (id: string) => void;
}

export function Navigation({ scrollToSection }: NavigationProps) {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", id: "hero" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Experience", id: "experience" },
    { name: "Contact", id: "contact" },
  ];

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-sm"
            : "bg-transparent"
        }`}
        data-testid="navigation-main"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <button
              onClick={() => scrollToSection("hero")}
              className="text-xl md:text-2xl font-display font-bold text-foreground hover-elevate active-elevate-2 px-3 py-1 rounded-md transition-colors"
              data-testid="button-logo"
            >
              Portfolio
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Button
                  key={link.id}
                  variant="ghost"
                  onClick={() => handleNavClick(link.id)}
                  className="text-sm font-medium"
                  data-testid={`button-nav-${link.id}`}
                >
                  {link.name}
                </Button>
              ))}
            </div>

            {/* Right side: Theme toggle + CTA */}
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="rounded-full"
                aria-label="Toggle theme"
                data-testid="button-theme-toggle"
              >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </Button>

              <Button
                onClick={() => scrollToSection("contact")}
                className="hidden md:flex"
                data-testid="button-cta-contact"
              >
                Get in Touch
              </Button>

              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden"
                aria-label="Toggle menu"
                data-testid="button-mobile-menu-toggle"
              >
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden bg-background/95 backdrop-blur-lg animate-fade-in"
          data-testid="mobile-menu-drawer"
        >
          <div className="flex flex-col items-center justify-center h-full gap-6 px-6">
            {navLinks.map((link, index) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="text-2xl font-display font-semibold text-foreground hover:text-primary transition-colors animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
                data-testid={`button-mobile-nav-${link.id}`}
              >
                {link.name}
              </button>
            ))}
            <Button
              onClick={() => handleNavClick("contact")}
              size="lg"
              className="mt-4 animate-fade-in-up"
              style={{ animationDelay: "0.5s" }}
              data-testid="button-mobile-cta-contact"
            >
              Get in Touch
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
