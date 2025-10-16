import { useRef } from "react";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Portfolio() {
  const heroRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (id: string) => {
    const refs: Record<string, React.RefObject<HTMLDivElement>> = {
      hero: heroRef,
      skills: skillsRef,
      projects: projectsRef,
      experience: experienceRef,
      contact: contactRef,
    };

    const ref = refs[id];
    if (ref?.current) {
      const yOffset = -80;
      const y = ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <Navigation scrollToSection={scrollToSection} />
      
      <main>
        <div ref={heroRef}>
          <Hero scrollToSection={scrollToSection} />
        </div>
        
        <div ref={skillsRef}>
          <Skills />
        </div>
        
        <div ref={projectsRef}>
          <Projects />
        </div>
        
        <div ref={experienceRef}>
          <Experience />
        </div>
        
        <div ref={contactRef}>
          <Contact />
        </div>
      </main>

      <Footer scrollToSection={scrollToSection} />
    </div>
  );
}
