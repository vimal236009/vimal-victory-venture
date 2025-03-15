
import React from "react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

const About: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="about"
      ref={ref}
      className="py-24 section-padding relative bg-secondary/50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div 
            className={cn(
              "transition-all duration-1000 ease-out",
              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            )}
          >
            <div className="relative">
              <div className="aspect-square w-full max-w-md mx-auto overflow-hidden rounded-2xl">
                <img
                  src="/lovable-uploads/6612232e-db38-4627-8033-622f87582f11.png"
                  alt="Vimal Bachani"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-highlight text-darkText px-6 py-3 rounded-xl font-medium">
                7+ Years Experience
              </div>
            </div>
          </div>
          
          <div 
            className={cn(
              "transition-all duration-1000 ease-out delay-300",
              inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            )}
          >
            <div className="mb-2 inline-block">
              <span className="px-3 py-1 rounded-full bg-highlight/10 text-highlight text-xs font-medium">
                About Me
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight font-display">
              Driving Business Growth Through<br />
              <span className="text-gradient">Data-Driven Marketing</span>
            </h2>
            
            <div className="space-y-4 text-foreground/80 mb-6">
              <p>
                I'm a Performance Marketing Specialist with a passion for leveraging data to drive measurable growth. Over the past 7+ years, I've helped businesses of all sizes scale their operations through strategic digital marketing initiatives.
              </p>
              <p>
                My approach combines analytical precision with creative strategy, ensuring that every marketing dollar is optimized for maximum ROI. I specialize in Meta & Google Ads, SEO, Retention Marketing, Data Scraping, Lead Generation, Data Analysis, Automation, and Corporate Training.
              </p>
              <p>
                What sets me apart is my ability to not just implement strategies, but to continuously optimize them based on real-time data and performance metrics. I don't just focus on vanity metrics – I'm committed to driving real business results that impact your bottom line.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-3 mt-8">
              {["Meta Ads", "Google Ads", "SEO", "Data Analysis", "Automation", "Lead Generation", "Email Marketing", "Conversion Optimization"].map((skill, index) => (
                <span 
                  key={index} 
                  className="px-4 py-2 bg-background/50 backdrop-blur-sm rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
