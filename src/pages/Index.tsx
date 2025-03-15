
import React, { useEffect } from "react";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Achievements from "@/components/Achievements";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  // Smooth scroll implementation for anchor links
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href')?.substring(1);
        if (!targetId) return;
        
        const targetElement = document.getElementById(targetId);
        if (!targetElement) return;
        
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
        });
      });
    });
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <About />
          <Services />
          <Achievements />
          <CTA />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
