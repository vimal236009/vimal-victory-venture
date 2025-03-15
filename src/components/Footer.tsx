
import React from "react";
import { Instagram, Linkedin, Mail, MessageSquare, ArrowRight } from "lucide-react";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="py-12 px-6 md:px-12 lg:px-24 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          <div className="md:col-span-5">
            <h3 className="font-display text-xl font-bold mb-4">VIMAL BACHANI</h3>
            <p className="text-foreground/70 mb-4 max-w-xs">
              Performance Marketing Specialist helping brands scale with data-driven marketing strategies.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/bestdigitalmarketerinindia"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 flex items-center justify-center rounded-full bg-foreground/5 hover:bg-highlight/20 transition-colors duration-300 text-foreground hover:text-highlight"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://wa.me/917984795814"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 flex items-center justify-center rounded-full bg-foreground/5 hover:bg-highlight/20 transition-colors duration-300 text-foreground hover:text-highlight"
                aria-label="WhatsApp"
              >
                <MessageSquare className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/vimal-bachani"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 flex items-center justify-center rounded-full bg-foreground/5 hover:bg-highlight/20 transition-colors duration-300 text-foreground hover:text-highlight"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="mailto:schedule.vimal@gmail.com"
                className="h-10 w-10 flex items-center justify-center rounded-full bg-foreground/5 hover:bg-highlight/20 transition-colors duration-300 text-foreground hover:text-highlight"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="md:col-span-4">
            <h3 className="font-medium text-lg mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-foreground/70">
                <Mail className="h-4 w-4 mr-2" />
                <a href="mailto:schedule.vimal@gmail.com" className="hover:text-highlight transition-colors duration-300">
                  schedule.vimal@gmail.com
                </a>
              </li>
              <li className="flex items-center text-foreground/70">
                <MessageSquare className="h-4 w-4 mr-2" />
                <a href="https://wa.me/917984795814" className="hover:text-highlight transition-colors duration-300">
                  +91 7984 795 814
                </a>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-3">
            <div className="glass dark:glass-dark p-6 rounded-xl">
              <p className="text-sm mb-4 text-foreground/90 italic">
                "Are you ready to turn simple data into smart strategies that drive results and growth?"
              </p>
              <p className="text-xs mb-4 text-foreground/70">
                Don't wait—just click the button below and book your call now (It's Free)!
              </p>
              <a 
                href="https://calendly.com/schedule-growth-call"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-highlight/10 hover:bg-highlight/20 text-highlight font-medium py-2 px-4 rounded-full transition-all duration-300 ease-in-out text-sm w-full justify-center"
              >
                BOOK A CALL
                <ArrowRight className="ml-1 h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-6 border-t border-border/50 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-foreground/60 mb-4 md:mb-0">
            © {year} Vimal Bachani. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
