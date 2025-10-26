// Frontend types for portfolio data

// Portfolio data types (client-side only, no database persistence needed)
export interface Skill {
  id: string;
  name: string;
  category: "frontend" | "backend" | "tools";
  icon: string;
  proficiency: number; // 0-100
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  logo?: string;
}
