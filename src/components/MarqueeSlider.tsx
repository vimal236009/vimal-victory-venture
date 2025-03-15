
import React, { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

// Placeholder achievement images
const achievementImages = [
  "/images/achievement1.jpg",
  "/images/achievement2.jpg",
  "/images/achievement3.jpg",
  "/images/achievement4.jpg",
  "/images/achievement5.jpg"
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
