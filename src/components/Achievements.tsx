
import React from "react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import MarqueeSlider from "./MarqueeSlider";
import { BarChart3, TrendingUp, Users } from "lucide-react";

const Achievements: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const metrics = [
    {
      icon: <TrendingUp className="h-10 w-10 text-highlight" />,
      value: "250%",
      label: "Average ROI",
      description: "For clients across Meta & Google Ads campaigns"
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-highlight" />,
      value: "70%",
      label: "Conversion Rate Increase",
      description: "Through optimized funnel strategies"
    },
    {
      icon: <Users className="h-10 w-10 text-highlight" />,
      value: "100+",
      label: "Happy Clients",
      description: "Across various industries and markets"
    }
  ];

  const caseStudy = {
    title: "E-commerce Growth Case Study",
    challenge: "An e-commerce brand struggling with high ad costs and low conversion rates.",
    solution: "Implemented a comprehensive strategy involving funnel optimization, audience refinement, and retargeting campaigns.",
    results: [
      "Reduced cost per acquisition by 45%",
      "Increased ROAS by 230%",
      "Scaled monthly ad spend from $5,000 to $30,000 profitably"
    ]
  };

  return (
    <section
      id="achievements"
      ref={ref}
      className="py-24 section-padding relative bg-dark text-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="mb-2 inline-block">
            <span className="px-3 py-1 rounded-full bg-highlight/20 text-highlight text-xs font-medium">
              My Track Record
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight font-display">
            Proven <span className="text-highlight">Results</span> & Achievements
          </h2>
          
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Data-driven results that speak for themselves. Here's how I've helped businesses grow.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className={cn(
                "glass rounded-2xl p-6 text-center transition-all duration-500 ease-out",
                inView 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-10",
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="h-20 w-20 rounded-full bg-highlight/10 flex items-center justify-center mx-auto mb-4">
                {metric.icon}
              </div>
              
              <h3 className="text-3xl font-bold mb-1 text-white">{metric.value}</h3>
              <h4 className="text-lg font-medium mb-2 text-highlight">{metric.label}</h4>
              <p className="text-white/70 text-sm">{metric.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-8 text-center">Success Showcase</h3>
          <MarqueeSlider />
        </div>
        
        <div 
          className={cn(
            "glass rounded-2xl p-8 max-w-3xl mx-auto transition-all duration-500 ease-out transform",
            inView ? "opacity-100 scale-100" : "opacity-0 scale-95"
          )}
          style={{ transitionDelay: "500ms" }}
        >
          <h3 className="text-2xl font-bold mb-4">{caseStudy.title}</h3>
          
          <div className="mb-4">
            <h4 className="text-sm font-medium text-highlight mb-1">THE CHALLENGE</h4>
            <p className="text-white/80">{caseStudy.challenge}</p>
          </div>
          
          <div className="mb-4">
            <h4 className="text-sm font-medium text-highlight mb-1">THE SOLUTION</h4>
            <p className="text-white/80">{caseStudy.solution}</p>
          </div>
          
          <div>
            <h4 className="text-sm font-medium text-highlight mb-2">THE RESULTS</h4>
            <ul className="space-y-2">
              {caseStudy.results.map((result, index) => (
                <li key={index} className="flex items-start">
                  <span className="h-5 w-5 rounded-full bg-highlight/20 flex items-center justify-center text-highlight mr-2 flex-shrink-0">
                    ✓
                  </span>
                  <span className="text-white/80">{result}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
