
import React, { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

// Achievement images
const achievementImages = [
  "/lovable-uploads/3c08aa64-bae9-406d-a9f7-8fa00fb9aedc.png",
  "/lovable-uploads/9f81e61a-3daf-4b21-8fc3-ac7f3eec8055.png",
  "/lovable-uploads/e5fb25ae-c7d7-479c-bf72-3c25ae2add97.png",
  "/lovable-uploads/48c77b23-a4a3-40e8-8c97-c2a0f022c877.png",
  "/lovable-uploads/3bac5a40-36ad-47ae-81f3-21e2d8dc9ea5.png"
];

interface MarqueeSliderProps {
  className?: string;
}

const MarqueeSlider: React.FC<MarqueeSliderProps> = ({ className }) => {
  const marqueeRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const checkIfHovered = () => {
      const marquee = marqueeRef.current;
      if (!marquee) return;
      
      marquee.addEventListener("mouseenter", () => {
        marquee.style.animationPlayState = "paused";
      });
      
      marquee.addEventListener("mouseleave", () => {
        marquee.style.animationPlayState = "running";
      });
    };
    
    checkIfHovered();
    
    return () => {
      const marquee = marqueeRef.current;
      if (!marquee) return;
      
      marquee.removeEventListener("mouseenter", () => {});
      marquee.removeEventListener("mouseleave", () => {});
    };
  }, []);

  return (
    <div className={cn("w-full overflow-hidden", className)}>
      <div className="flex w-fit">
        <div
          ref={marqueeRef}
          className="flex items-center justify-around gap-4 animate-marquee"
        >
          {achievementImages.map((image, index) => (
            <div 
              key={index} 
              className="w-64 h-60 md:w-96 md:h-72 flex-shrink-0 rounded-2xl overflow-hidden shadow-lg"
            >
              <img
                src={image}
                alt={`Achievement ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          
          {/* Duplicate images for seamless loop */}
          {achievementImages.map((image, index) => (
            <div 
              key={`duplicate-${index}`} 
              className="w-64 h-60 md:w-96 md:h-72 flex-shrink-0 rounded-2xl overflow-hidden shadow-lg"
            >
              <img
                src={image}
                alt={`Achievement ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarqueeSlider;
