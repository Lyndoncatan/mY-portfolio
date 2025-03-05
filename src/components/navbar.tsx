
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ui/theme-toggle";
import { Home, User, Folder, Code } from "lucide-react";

interface NavLinkProps {
  to: string;
  label: string;
  icon: React.ReactNode;
  isActive: boolean;
}

const NavLink = ({ to, label, icon, isActive }: NavLinkProps) => (
  <Link
    to={to}
    className={cn(
      "relative flex items-center gap-2 px-4 py-2 transition-all duration-300 rounded-lg",
      isActive 
        ? "text-foreground bg-secondary" 
        : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
    )}
  >
    {icon}
    <span className="font-medium">{label}</span>
    {isActive && (
      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary rounded-full transform" />
    )}
  </Link>
);

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links: { path: string; label: string; icon: React.ReactNode }[] = [
    { path: "/", label: "Home", icon: <Home className="w-4 h-4" /> },
    { path: "/about", label: "About", icon: <User className="w-4 h-4" /> },
    { path: "/projects", label: "Projects", icon: <Folder className="w-4 h-4" /> },
    { path: "/tech-stack", label: "Tech Stack", icon: <Code className="w-4 h-4" /> },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        scrolled 
          ? "py-3 bg-background/80 backdrop-blur-lg border-b border-border/50 shadow-sm" 
          : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <Link 
          to="/" 
          className="text-xl font-medium tracking-tight transition-colors hover:text-primary"
        >
          <span className="font-bold">Lyndon</span> Catan
        </Link>
        
        <nav className="hidden md:flex items-center space-x-1">
          {links.map(({ path, label, icon }) => (
            <NavLink
              key={path}
              to={path}
              label={label}
              icon={icon}
              isActive={pathname === path}
            />
          ))}
        </nav>
        
        <div className="flex items-center gap-2">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
