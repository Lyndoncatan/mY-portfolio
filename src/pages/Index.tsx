
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight, MousePointer, ArrowDown } from "lucide-react";
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
              UI/UX Designer
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 leading-tight">
            <div className="overflow-hidden">
              <span 
                className="block opacity-0 animate-text-reveal" 
                style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
              >
                Hi, I'm Lyndon Domini Catan
              </span>
            </div>
            <div className="overflow-hidden mt-2">
              <span 
                className="block opacity-0 animate-text-reveal text-primary/80" 
                style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
              >
                Creating Interactive Experiences
              </span>
            </div>
          </h1>
          
          <p 
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-8 opacity-0 animate-fade-in" 
            style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}
          >
            I craft intuitive digital experiences through thoughtful UI/UX design, 
            focusing on clean aesthetics and seamless interactions.
          </p>
          
          <div 
            className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in" 
            style={{ animationDelay: "1s", animationFillMode: "forwards" }}
          >
            <Button asChild size="lg" className="group">
              <Link to="/projects">
                Explore Projects
                <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/about">
                Learn More About Me
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
          <span className="text-sm text-muted-foreground">Scroll Down</span>
          <ArrowDown className="h-4 w-4" />
        </Button>
      </div>
      
      <div className="h-screen bg-secondary flex flex-col items-center justify-center p-4">
        <div className="max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
            Creating <span className="text-primary/80">Human-Centered</span> Digital Experiences
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            I believe that great design goes beyond aesthetics—it solves real problems 
            and creates meaningful connections between people and technology.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "UI Design", 
                desc: "Creating intuitive visual interfaces with careful attention to every detail."
              },
              {
                title: "UX Research", 
                desc: "Understanding user needs and behaviors to inform meaningful design decisions."
              },
              {
                title: "Interaction", 
                desc: "Crafting seamless interactions that delight users and enhance functionality."
              }
            ].map((item, i) => (
              <div 
                key={i} 
                className="glass p-6 rounded-xl"
              >
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
