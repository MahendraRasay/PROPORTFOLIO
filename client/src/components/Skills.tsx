import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { skills } from "@/data/portfolioData";
import * as Icons from "lucide-react";
import { LucideIcon } from "lucide-react";

type SkillCategory = "all" | "frontend" | "backend" | "tools";

const iconMap: Record<string, LucideIcon> = {
  react: Icons.Atom,
  code: Icons.Code,
  braces: Icons.Braces,
  palette: Icons.Palette,
  wind: Icons.Wind,
  triangle: Icons.Triangle,
  component: Icons.Component,
  "refresh-cw": Icons.RefreshCw,
  server: Icons.Server,
  zap: Icons.Zap,
  database: Icons.Database,
  leaf: Icons.Leaf,
  plug: Icons.Plug,
  hexagon: Icons.Hexagon,
  snake: Icons.Workflow,
  "git-branch": Icons.GitBranch,
  container: Icons.Container,
  cloud: Icons.Cloud,
  workflow: Icons.Workflow,
  package: Icons.Package,
  "test-tube": Icons.TestTube,
  figma: Icons.Figma,
};

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>("all");

  const filteredSkills = activeCategory === "all" 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  const categories = [
    { id: "all" as SkillCategory, label: "All Skills" },
    { id: "frontend" as SkillCategory, label: "Frontend" },
    { id: "backend" as SkillCategory, label: "Backend" },
    { id: "tools" as SkillCategory, label: "Tools" },
  ];

  return (
    <section
      id="skills"
      className="py-20 md:py-32 bg-background"
      data-testid="section-skills"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            Skills & Technologies
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className="toggle-elevate"
              data-state={activeCategory === category.id ? "on" : "off"}
              data-testid={`button-filter-${category.id}`}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filteredSkills.map((skill, index) => {
            const IconComponent = iconMap[skill.icon] || Icons.Code;
            
            return (
              <Card
                key={skill.id}
                className="hover-elevate active-elevate-2 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
                data-testid={`card-skill-${skill.id}`}
              >
                <CardContent className="p-6 space-y-4">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center" data-testid={`icon-skill-${skill.id}`}>
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>

                  {/* Name */}
                  <h3 className="text-lg font-semibold text-foreground" data-testid={`text-skill-name-${skill.id}`}>
                    {skill.name}
                  </h3>

                  {/* Category Badge */}
                  <Badge variant="secondary" className="text-xs" data-testid={`badge-category-${skill.id}`}>
                    {skill.category}
                  </Badge>

                  {/* Proficiency Bar */}
                  <div className="space-y-2">
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-chart-2 rounded-full transition-all duration-500"
                        style={{ width: `${skill.proficiency}%` }}
                        data-testid={`progress-skill-${skill.id}`}
                      />
                    </div>
                    <p className="text-xs text-muted-foreground text-right">
                      {skill.proficiency}%
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
