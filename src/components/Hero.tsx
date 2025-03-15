
import React from "react";
import { ArrowRight, Award, BarChart3, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center pt-20 section-padding relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="mb-2 inline-block">
            <span className="px-3 py-1 rounded-full bg-highlight/10 text-highlight text-xs font-medium animate-fade-in">
              Performance Marketing Specialist
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight font-display max-w-4xl animate-fade-in animate-delay-100">
            <span className="text-gradient">Scaling Brands</span> with{" "}
            <span className="relative">
              Data-Driven
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-highlight/50 rounded-full"></span>
            </span>{" "}
            Marketing Strategies
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mb-8 animate-fade-in animate-delay-200">
            Performance Marketer | Growth Specialist | Automation & Data Insights Expert
          </p>
          
          <p className="text-base md:text-lg max-w-2xl mb-12 animate-fade-in animate-delay-300">
            With over 7 years of expertise in digital marketing, I craft data-driven strategies that deliver measurable growth across multiple channels and platforms.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
          {[
            {
              icon: <Calendar className="h-6 w-6 text-highlight mb-2" />,
              label: "7+ Years Experience",
              description: "Proven expertise across diverse industries and markets"
            },
            {
              icon: <Award className="h-6 w-6 text-highlight mb-2" />,
              label: "Expert in Meta & Google Ads",
              description: "Optimized campaigns for maximum ROI and performance"
            },
            {
              icon: <BarChart3 className="h-6 w-6 text-highlight mb-2" />,
              label: "Proven ROI Growth",
              description: "Consistent results with measurable business impact"
            }
          ].map((metric, index) => (
            <div 
              key={index} 
              className={cn(
                "glass dark:glass-dark p-6 rounded-2xl text-center transform transition-all duration-500",
                "hover:translate-y-[-5px] hover:shadow-lg",
                `animate-fade-in animate-delay-${index + 3}00`
              )}
            >
              <div className="flex flex-col items-center">
                {metric.icon}
                <h3 className="font-medium text-lg mb-1">{metric.label}</h3>
                <p className="text-sm text-foreground/70">{metric.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center animate-fade-in animate-delay-500">
          <a 
            href="https://calendly.com/schedule-growth-call"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center bg-highlight hover:bg-highlight/90 text-darkText font-medium py-3 px-6 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
          >
            Schedule Your Growth Call
            <ArrowRight className="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll to About section">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5L12 19M12 19L19 12M12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
