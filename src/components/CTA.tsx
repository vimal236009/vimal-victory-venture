
import React from "react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { ArrowRight, Calendar, MessageCircle, Zap } from "lucide-react";

const CTA: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="contact"
      ref={ref}
      className="py-24 section-padding relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-highlight/5 to-transparent z-0"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div 
          className={cn(
            "glass dark:glass-dark rounded-3xl p-10 md:p-16 text-center relative overflow-hidden transition-all duration-1000 ease-out transform",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          )}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-highlight/5 via-transparent to-transparent z-0"></div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-40 h-40 bg-highlight/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-60 h-60 bg-highlight/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <div className="mb-2 inline-block">
              <span className="px-3 py-1 rounded-full bg-highlight/20 text-highlight text-xs font-medium">
                Ready to Scale?
              </span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight font-display">
              Let's Drive Your Business <span className="text-gradient">Growth Together!</span>
            </h2>
            
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto mb-10">
              Book a free strategy call to uncover data-driven opportunities for your brand. 
              No obligations, just actionable insights you can implement immediately.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
              {[
                {
                  icon: <Calendar className="h-10 w-10 text-highlight" />,
                  title: "30-Min Strategy Call",
                  description: "Quick, focused discussion about your business goals"
                },
                {
                  icon: <Zap className="h-10 w-10 text-highlight" />,
                  title: "Actionable Insights",
                  description: "Get immediate value and implementable strategies"
                },
                {
                  icon: <MessageCircle className="h-10 w-10 text-highlight" />,
                  title: "Zero Obligation",
                  description: "No pressure, just honest advice for your growth"
                }
              ].map((feature, index) => (
                <div 
                  key={index} 
                  className={cn(
                    "bg-background/50 backdrop-blur-sm p-6 rounded-2xl transition-all duration-500 ease-out transform",
                    "hover:translate-y-[-5px] hover:shadow-lg",
                    inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  )}
                  style={{ transitionDelay: `${index * 100 + 300}ms` }}
                >
                  <div className="h-16 w-16 rounded-full bg-highlight/10 flex items-center justify-center mx-auto mb-4">
                    {feature.icon}
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-foreground/70 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
            
            <a 
              href="https://calendly.com/schedule-growth-call"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "group inline-flex items-center bg-highlight hover:bg-highlight/90 text-darkText font-medium py-4 px-8 rounded-full",
                "transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg text-lg",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: "700ms" }}
            >
              BOOK A CALL
              <ArrowRight className="ml-2 h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            
            <p 
              className={cn(
                "mt-4 text-sm text-foreground/60",
                inView ? "opacity-100" : "opacity-0"
              )}
              style={{ transitionDelay: "800ms" }}
            >
              Limited spots available each week. Secure yours now!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
