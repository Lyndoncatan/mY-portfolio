
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight, ExternalLink } from "lucide-react";

interface Tool {
  name: string;
  category: "Design" | "Prototyping" | "Development" | "Other";
  icon: string;
  description: string;
  proficiency: number;
}

export default function TechStack() {
  const [filter, setFilter] = useState<string>("All");
  
  const tools: Tool[] = [
    {
      name: "Figma",
      category: "Design",
      icon: "F",
      description: "My primary tool for UI design, prototyping, and design systems.",
      proficiency: 95
    },
    {
      name: "Adobe XD",
      category: "Design",
      icon: "XD",
      description: "Used for UI/UX design, wireframing, and interactive prototypes.",
      proficiency: 90
    },
    {
      name: "Photoshop",
      category: "Design",
      icon: "PS",
      description: "Image editing, manipulation, and compositing.",
      proficiency: 85
    },
    {
      name: "Illustrator",
      category: "Design",
      icon: "AI",
      description: "Vector graphics and illustrations for UI elements and logos.",
      proficiency: 80
    },
    {
      name: "Sketch",
      category: "Design",
      icon: "SK",
      description: "Interface design for web and mobile applications.",
      proficiency: 75
    },
    {
      name: "InVision",
      category: "Prototyping",
      icon: "IV",
      description: "Creating interactive prototypes and collecting feedback.",
      proficiency: 85
    },
    {
      name: "Principle",
      category: "Prototyping",
      icon: "PR",
      description: "Advanced animations and interactive user interfaces.",
      proficiency: 70
    },
    {
      name: "Framer",
      category: "Prototyping",
      icon: "FM",
      description: "High-fidelity interactive prototypes with advanced animations.",
      proficiency: 75
    },
    {
      name: "HTML/CSS",
      category: "Development",
      icon: "</> ",
      description: "Frontend development and implementation of designs.",
      proficiency: 80
    },
    {
      name: "JavaScript",
      category: "Development",
      icon: "JS",
      description: "Creating interactive elements and functionality.",
      proficiency: 65
    },
    {
      name: "React",
      category: "Development",
      icon: "⚛️",
      description: "Building user interfaces for web applications.",
      proficiency: 60
    },
    {
      name: "Miro",
      category: "Other",
      icon: "M",
      description: "Collaborative whiteboarding and UX flow mapping.",
      proficiency: 85
    }
  ];
  
  const categories = ["All", "Design", "Prototyping", "Development", "Other"];
  
  const filteredTools = filter === "All" 
    ? tools 
    : tools.filter(tool => tool.category === filter);
  
  return (
    <main className="pt-24 pb-16 min-h-screen">
      <div className="container max-w-6xl">
        <div className="flex flex-col items-start gap-4 mb-12 animate-fade-in">
          <div className="flex items-center gap-2">
            <div className="h-1 w-10 bg-primary rounded-full"></div>
            <span className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
              My Toolkit
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Tech & Design Stack
          </h1>
          <p className="text-xl text-muted-foreground">
            The tools and technologies I use to bring ideas to life
          </p>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          {categories.map(category => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(category)}
              className="transition-all duration-300"
            >
              {category}
            </Button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredTools.map((tool, index) => (
            <div 
              key={tool.name}
              className="glass p-6 rounded-xl animate-fade-in"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 bg-secondary rounded-lg font-mono font-bold">
                    {tool.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{tool.name}</h3>
                    <span className="text-xs text-muted-foreground">
                      {tool.category}
                    </span>
                  </div>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-4">
                {tool.description}
              </p>
              
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs font-medium">Proficiency</span>
                  <span className="text-xs font-medium">{tool.proficiency}%</span>
                </div>
                <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                    style={{ 
                      width: `${tool.proficiency}%`,
                      transitionDelay: `${0.5 + index * 0.1}s`
                    }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="glass p-8 rounded-xl mb-16 animate-fade-in" style={{ animationDelay: "0.8s" }}>
          <h2 className="text-2xl font-bold mb-6">Design Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Research",
                description: "Understanding user needs, business goals, and industry context."
              },
              {
                step: "02",
                title: "Ideation",
                description: "Exploring concepts, brainstorming solutions, and sketching ideas."
              },
              {
                step: "03",
                title: "Prototyping",
                description: "Creating wireframes, mockups, and interactive prototypes."
              },
              {
                step: "04",
                title: "Testing",
                description: "User testing, gathering feedback, and iterating on designs."
              }
            ].map((process, i) => (
              <div key={i} className="relative">
                <div className="text-4xl font-bold text-primary/20 mb-2">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{process.title}</h3>
                <p className="text-muted-foreground">{process.description}</p>
                {i < 3 && (
                  <div className="hidden md:block absolute top-8 right-0 w-16 h-[1px] bg-border"></div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center animate-fade-in" style={{ animationDelay: "1s" }}>
          <h2 className="text-2xl font-bold mb-6">Looking to Start a Project?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            With my technical skillset and design expertise, I can help bring your ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg">
              <Link to="/projects">
                View My Projects
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="mailto:lyndon@example.com">
                Get In Touch
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
