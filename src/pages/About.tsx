
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { User, Mail, MapPin, Award, BookOpen, Clock } from "lucide-react";

export default function About() {
  return (
    <main className="pt-24 pb-16 min-h-screen">
      <div className="container max-w-4xl">
        <div className="flex flex-col items-start gap-4 mb-12 animate-fade-in">
          <div className="flex items-center gap-2">
            <div className="h-1 w-10 bg-primary rounded-full"></div>
            <span className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
              About Me
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Lyndon Domini Catan
          </h1>
          <p className="text-xl text-muted-foreground">
            UI/UX Designer with a passion for creating intuitive and engaging digital experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="col-span-2 space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <p className="text-lg leading-relaxed">
              I'm a UI/UX designer focused on creating digital products that are both beautiful and functional. With a background in visual design and user research, I strive to create experiences that not only look great but also solve real problems for users.
            </p>
            <p className="text-lg leading-relaxed">
              My approach combines aesthetic sensibility with a deep understanding of user needs. I believe that great design should be invisible, enabling users to accomplish their goals without friction or confusion.
            </p>
            <p className="text-lg leading-relaxed">
              When I'm not designing, you can find me exploring new design trends, learning new techniques, or seeking inspiration from the world around me.
            </p>
          </div>

          <div className="glass rounded-xl p-6 space-y-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center gap-3">
              <User className="w-5 h-5 text-primary" />
              <div>
                <div className="text-sm text-muted-foreground">Name</div>
                <div className="font-medium">Lyndon Domini Catan</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-primary" />
              <div>
                <div className="text-sm text-muted-foreground">Email</div>
                <div className="font-medium">lyndoncatan75@gmail.com</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-primary" />
              <div>
                <div className="text-sm text-muted-foreground">Location</div>
                <div className="font-medium">Metro Manila, Marikina CIty</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Award className="w-5 h-5 text-primary" />
              <div>
                <div className="text-sm text-muted-foreground">Specialization</div>
                <div className="font-medium">UI/UX Design</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <h2 className="text-2xl font-bold mb-6">Experience & Education</h2>
          
          <div className="space-y-8">
            <div className="relative pl-8 border-l border-border">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary"></div>
              <div className="flex items-center gap-2 mb-1">
                <Clock className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">2022 - Present</span>
              </div>
              <h3 className="text-xl font-semibold">UI/UX Designer</h3>
              <p className="text-muted-foreground">Digital Innovation Agency</p>
              <p className="mt-2">
                  Responsible for research, wireframing, 
               prototyping, and design system development.
              </p>
            </div>
            
            <div className="relative pl-8 border-l border-border">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-secondary"></div>
              <div className="flex items-center gap-2 mb-1">
                <Clock className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">2022 - 2023</span>
              </div>
              <h3 className="text-xl font-semibold">UI Designer</h3>
              <p className="text-muted-foreground">Creative</p>
              <p className="mt-2">
                Designed user interfaces for web and mobile applications. Collaborated with 
                development teams to ensure design implementation.
              </p>
            </div>
            
            <div className="relative pl-8 border-l border-border">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-secondary"></div>
              <div className="flex items-center gap-2 mb-1">
                <BookOpen className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">2023 - 2024</span>
              </div>
              <h3 className="text-xl font-semibold">Iam inevitable</h3>
              <p className="text-muted-foreground">ONGOING</p>
              <p className="mt-2">
                HELLO WORLD 
              </p>
            </div>
          </div>
        </div>

        <div className="text-center animate-fade-in" style={{ animationDelay: "0.8s" }}>
          <h2 className="text-2xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            I'm always looking for new challenges and opportunities to create meaningful design solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg">
              <Link to="/projects">
                View My Projects
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/tech-stack">
                Explore My Tech Stack
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
