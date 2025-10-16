import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";
import { experiences } from "@/data/portfolioData";
import * as Icons from "lucide-react";
import { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  rocket: Icons.Rocket,
  briefcase: Icons.Briefcase,
  sparkles: Icons.Sparkles,
  book: Icons.Book,
};

export function Experience() {
  const [expandedId, setExpandedId] = useState<string | null>(experiences[0].id);

  return (
    <section
      id="experience"
      className="py-20 md:py-32 bg-background"
      data-testid="section-experience"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            Work Experience
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey in software development
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-ml-px" />

          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const IconComponent = iconMap[exp.logo || "briefcase"] || Icons.Briefcase;
              
              return (
                <div
                  key={exp.id}
                  className={`relative animate-fade-in-up ${
                    index % 2 === 0 ? "md:text-right" : "md:text-left"
                  }`}
                  style={{ animationDelay: `${index * 0.15}s` }}
                  data-testid={`item-experience-${exp.id}`}
                >
                  {/* Timeline dot with logo */}
                  <div
                    className={`absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-card border-4 border-primary flex items-center justify-center shadow-lg ${
                      expandedId === exp.id ? "scale-110" : ""
                    } transition-transform duration-300`}
                    data-testid={`logo-${exp.id}`}
                  >
                    <IconComponent className="h-5 w-5 text-primary" />
                  </div>

                  {/* Content card */}
                  <div
                    className={`ml-20 md:ml-0 ${
                      index % 2 === 0 ? "md:mr-[calc(50%+3rem)]" : "md:ml-[calc(50%+3rem)]"
                    }`}
                  >
                    <Card
                      className={`hover-elevate active-elevate-2 cursor-pointer transition-all duration-300 ${
                        expandedId === exp.id ? "border-primary" : ""
                      }`}
                      onClick={() => setExpandedId(expandedId === exp.id ? null : exp.id)}
                    >
                      <CardContent className="p-6 space-y-3">
                        {/* Header */}
                        <div className="flex items-start justify-between gap-4">
                          <div className="space-y-1 flex-1">
                            <h3 className="text-xl font-display font-semibold text-foreground" data-testid={`text-role-${exp.id}`}>
                              {exp.role}
                            </h3>
                            <p className="text-base font-medium text-primary" data-testid={`text-company-${exp.id}`}>
                              {exp.company}
                            </p>
                            <p className="text-sm text-muted-foreground" data-testid={`text-period-${exp.id}`}>
                              {exp.period}
                            </p>
                          </div>
                          <ChevronDown
                            className={`h-5 w-5 text-muted-foreground transition-transform duration-300 flex-shrink-0 ${
                              expandedId === exp.id ? "rotate-180" : ""
                            }`}
                          />
                        </div>

                        {/* Expandable description */}
                        <div
                          className={`overflow-hidden transition-all duration-300 ${
                            expandedId === exp.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                          }`}
                        >
                          <p className="text-sm md:text-base text-muted-foreground leading-relaxed pt-2" data-testid={`text-description-${exp.id}`}>
                            {exp.description}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
