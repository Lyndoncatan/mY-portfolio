
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight, MousePointer, ArrowDown, Palette, Monitor, Code } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Index() {
  const [isLoaded, setIsLoaded] = useState(false);
  const isMobile = useIsMobile();
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || isMobile) return;
      
      const { clientX, clientY } = e;
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;
      
      containerRef.current.style.transform = `
        perspective(1000px)
        rotateY(${x * 3}deg)
        rotateX(${-y * 3}deg)
        translateZ(10px)
      `;
    };
    
    const handleMouseLeave = () => {
      if (!containerRef.current) return;
      containerRef.current.style.transform = `
        perspective(1000px)
        rotateY(0)
        rotateX(0)
        translateZ(0)
      `;
    };
    
    const element = containerRef.current;
    if (element && !isMobile) {
      element.addEventListener("mousemove", handleMouseMove);
      element.addEventListener("mouseleave", handleMouseLeave);
    }
    
    return () => {
      if (element && !isMobile) {
        element.removeEventListener("mousemove", handleMouseMove);
        element.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [isMobile]);
  
  return (
    <main className="relative min-h-screen flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center pt-20 pb-10 px-4">
        <div 
          ref={containerRef}
          className="max-w-4xl w-full transition-transform duration-200 ease-out"
        >
          <div className="flex items-center gap-2 mb-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-accent">
              <MousePointer className="w-5 h-5 text-foreground/80" />
            </div>
            <span className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
              Virtual Design Studio
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 leading-tight">
            <div className="overflow-hidden">
              <span 
                className="block opacity-0 animate-text-reveal" 
                style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
              >
                Welcome to Lyndon's
              </span>
            </div>
            <div className="overflow-hidden mt-2">
              <span 
                className="block opacity-0 animate-text-reveal text-primary/80" 
                style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
              >
                Creative Virtual Studio
              </span>
            </div>
          </h1>
          
          <p 
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-8 opacity-0 animate-fade-in" 
            style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}
          >
            Explore my digital workspace where ideas come to life through immersive design experiences and interactive prototypes.
          </p>
          
          <div 
            className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in" 
            style={{ animationDelay: "1s", animationFillMode: "forwards" }}
          >
            <Button asChild size="lg" className="group">
              <Link to="/projects">
                Tour the Studio
                <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/about">
                Meet the Designer
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
      <div 
        className="flex justify-center pb-8 opacity-0 animate-fade-in"
        style={{ animationDelay: "1.2s", animationFillMode: "forwards" }}
      >
        <Button 
          variant="ghost" 
          size="sm" 
          className="flex flex-col items-center gap-2 animate-pulse-slow"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <span className="text-sm text-muted-foreground">Explore Further</span>
          <ArrowDown className="h-4 w-4" />
        </Button>
      </div>
      
      <div className="h-screen bg-secondary flex flex-col items-center justify-center p-4">
        <div className="max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
            Where <span className="text-primary/80">Design</span> Meets Innovation
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Step into my virtual studio space where creativity flows freely and digital experiences take shape through thoughtful design and cutting-edge technology.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Palette className="w-8 h-8 mb-4 text-primary/80" />,
                title: "Design Lab", 
                desc: "Explore prototypes, wireframes, and visual design concepts in an interactive environment."
              },
              {
                icon: <Monitor className="w-8 h-8 mb-4 text-primary/80" />,
                title: "Digital Showcase", 
                desc: "View finished projects in simulated environments to experience the final user interface."
              },
              {
                icon: <Code className="w-8 h-8 mb-4 text-primary/80" />,
                title: "Interaction Space", 
                desc: "Test functional prototypes and experience user flows with realistic interactions."
              }
            ].map((item, i) => (
              <div 
                key={i} 
                className="glass p-6 rounded-xl flex flex-col items-center"
              >
                {item.icon}
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
