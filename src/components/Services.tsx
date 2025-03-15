
import React from "react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { BarChart3, Database, Search, Users, Target, Mail, MessageSquare, Lightbulb } from "lucide-react";

const Services: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: <Target className="h-10 w-10 text-highlight" />,
      title: "Performance Marketing",
      description: "Strategic Meta & Google Ads campaigns, funnel optimization, and conversion tracking to maximize your ROI.",
      delay: 0,
    },
    {
      icon: <Search className="h-10 w-10 text-highlight" />,
      title: "SEO & Retention Marketing",
      description: "Organic growth strategies, content optimization, and effective email/WhatsApp marketing campaigns.",
      delay: 100,
    },
    {
      icon: <Database className="h-10 w-10 text-highlight" />,
      title: "Data-Driven Solutions",
      description: "Custom data scraping, lead generation, in-depth data analysis, and automation workflows.",
      delay: 200,
    },
    {
      icon: <Users className="h-10 w-10 text-highlight" />,
      title: "Corporate Training",
      description: "Specialized workshops, strategy sessions, and tailored growth plans for teams and businesses.",
      delay: 300,
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-highlight" />,
      title: "WhatsApp Marketing",
      description: "Strategic messaging campaigns that drive engagement and conversions through personalized outreach.",
      delay: 400,
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-highlight" />,
      title: "Growth Consulting",
      description: "Strategic advice and actionable roadmaps to scale your business with data-driven marketing tactics.",
      delay: 500,
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-highlight" />,
      title: "Analytics & Reporting",
      description: "Comprehensive data analysis and clear reporting to track performance and guide strategic decisions.",
      delay: 600,
    },
    {
      icon: <Mail className="h-10 w-10 text-highlight" />,
      title: "Email Marketing",
      description: "Strategic email campaigns that nurture leads, build relationships, and drive consistent conversions.",
      delay: 700,
    },
  ];

  return (
    <section
      id="services"
      ref={ref}
      className="py-24 section-padding relative"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="mb-2 inline-block">
            <span className="px-3 py-1 rounded-full bg-highlight/10 text-highlight text-xs font-medium">
              My Services
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight font-display">
            Comprehensive <span className="text-gradient">Marketing Solutions</span>
          </h2>
          
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Strategic approaches tailored to your business needs, focused on delivering measurable results and sustainable growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={cn(
                "glass dark:glass-dark rounded-2xl p-6 transition-all duration-500 ease-out transform hover:translate-y-[-5px]",
                "group hover:shadow-lg",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: `${service.delay}ms` }}
            >
              <div className="h-14 w-14 rounded-xl bg-highlight/10 flex items-center justify-center mb-4 transition-all duration-300 ease-in-out group-hover:bg-highlight/20">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              
              <p className="text-foreground/70 text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
