
import React, { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { cn } from "@/lib/utils";

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 20);
      
      const sections = ["home", "about", "services", "achievements", "contact"];
      
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop - 200) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "achievements", label: "Achievements" },
    { id: "contact", label: "Contact" }
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-4 px-6 md:px-12 lg:px-24",
        scrolled ? "bg-background/80 backdrop-blur-lg shadow-md" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a 
          href="#home" 
          className="font-display text-xl font-bold tracking-tight hover:opacity-80 transition-opacity"
          aria-label="Vimal Bachani - Home"
        >
          VIMAL BACHANI
        </a>
        
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ease-in-out relative",
                activeSection === item.id 
                  ? "text-foreground" 
                  : "text-foreground/70 hover:text-foreground"
              )}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-highlight rounded-full" />
              )}
            </a>
          ))}
        </nav>
        
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <a 
            href="https://calendly.com/schedule-growth-call"
            target="_blank"
            rel="noopener noreferrer" 
            className="hidden md:block bg-highlight hover:bg-highlight/90 text-darkText font-medium py-2 px-4 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Schedule Call
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
