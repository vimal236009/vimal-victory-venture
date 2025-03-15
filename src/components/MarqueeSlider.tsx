
import React, { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

// Achievement images
const achievementImages = [
  "/lovable-uploads/220dae60-383f-4167-b352-62c80e398b6e.png",
  "/lovable-uploads/1cd2dea5-bee8-4f6c-8b93-1b696082e01e.png",
  "/lovable-uploads/156e7396-f6a8-4599-9308-c26111ad9bcb.png",
  "/lovable-uploads/c7550178-b9c0-47ff-a738-c89f2bdca8e8.png",
  "/lovable-uploads/2be012ed-9b11-46de-81e8-adc1477b8873.png",
  "/lovable-uploads/ece37dc1-41ac-4c16-96fd-2ce53d01e8a0.png"
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
              className="w-64 h-60 md:w-72 md:h-64 flex-shrink-0 rounded-2xl overflow-hidden shadow-lg"
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
              className="w-64 h-60 md:w-72 md:h-64 flex-shrink-0 rounded-2xl overflow-hidden shadow-lg"
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
