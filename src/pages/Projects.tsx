
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronRight, ExternalLink } from "lucide-react";

// Project type definition
interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  imagePath: string;
  link: string;
  year: string;
}

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  
  // Sample projects data
  const projects: Project[] = [
    {
      id: 1,
      title: "Redesign of Financial App",
      category: "UI Design",
      description: "A complete redesign of a financial management application focusing on simplifying complex data visualization and improving user navigation.",
      imagePath: "/lovable-uploads/e82a2001-bf0b-4233-9e10-64ae714a8790.png",
      link: "#",
      year: "2023"
    },
    {
      id: 2,
      title: "E-commerce User Experience",
      category: "UX Research",
      description: "In-depth UX research and redesign for an e-commerce platform, increasing conversion rates and improving overall customer satisfaction.",
      imagePath: "/lovable-uploads/e82a2001-bf0b-4233-9e10-64ae714a8790.png",
      link: "#",
      year: "2022"
    },
    {
      id: 3,
      title: "Healthcare Portal",
      category: "UI/UX",
      description: "Design of a patient-centered healthcare portal that simplifies appointment scheduling and access to medical records.",
      imagePath: "/lovable-uploads/e82a2001-bf0b-4233-9e10-64ae714a8790.png",
      link: "#",
      year: "2022"
    },
    {
      id: 4,
      title: "Travel App Concept",
      category: "UI Design",
      description: "Conceptual design for a travel planning application with focus on visual appeal and intuitive itinerary management.",
      imagePath: "/lovable-uploads/e82a2001-bf0b-4233-9e10-64ae714a8790.png",
      link: "#",
      year: "2021"
    },
    {
      id: 5,
      title: "Music Streaming Redesign",
      category: "UI/UX",
      description: "Redesign of a music streaming service interface with improved content discovery and personalization features.",
      imagePath: "/lovable-uploads/e82a2001-bf0b-4233-9e10-64ae714a8790.png",
      link: "#",
      year: "2021"
    },
    {
      id: 6,
      title: "Productivity Tool",
      category: "UX Research",
      description: "User research and interface design for a productivity application focused on task management and time tracking.",
      imagePath: "/lovable-uploads/e82a2001-bf0b-4233-9e10-64ae714a8790.png",
      link: "#",
      year: "2020"
    }
  ];
  
  // Extract unique categories
  const categories = ["All", ...new Set(projects.map(project => project.category))];
  
  // Filter projects by selected category
  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);
  
  return (
    <main className="pt-24 pb-16 min-h-screen">
      <div className="container max-w-6xl">
        <div className="flex flex-col items-start gap-4 mb-12 animate-fade-in">
          <div className="flex items-center gap-2">
            <div className="h-1 w-10 bg-primary rounded-full"></div>
            <span className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
              My Work
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Selected Projects
          </h1>
          <p className="text-xl text-muted-foreground">
            A showcase of my design work across various industries and platforms
          </p>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          {categories.map(category => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className="transition-all duration-300"
            >
              {category}
            </Button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="glass overflow-hidden rounded-xl group hover:shadow-md transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={project.imagePath} 
                  alt={project.title}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <span className="text-xs font-medium text-muted-foreground">
                      {project.category} • {project.year}
                    </span>
                    <h3 className="text-xl font-semibold mt-1 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>
                <Button asChild variant="ghost" size="sm" className="group/btn">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    View Project 
                    <ExternalLink className="ml-2 h-3 w-3 transition-transform group-hover/btn:translate-x-1" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center animate-fade-in" style={{ animationDelay: "0.8s" }}>
          <h2 className="text-2xl font-bold mb-6">Want to Work Together?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
          </p>
          <Button asChild size="lg">
            <Link to="/about">
              Learn More About Me
              <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
