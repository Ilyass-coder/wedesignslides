"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface PortfolioSliderProps {
  className?: string;
  beforeImage: string;
  afterImage: string;
}

export function PortfolioSlider({ className, beforeImage, afterImage }: PortfolioSliderProps) {
  const [sliderPosition, setSliderPosition] = React.useState(50);
  const [isDragging, setIsDragging] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const handleMove = (event: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging || !containerRef.current) return;

    const { left, width } = containerRef.current.getBoundingClientRect();
    const clientX = "touches" in event ? event.touches[0].clientX : event.clientX;
    const position = ((clientX - left) / width) * 100;

    setSliderPosition(Math.min(100, Math.max(0, position)));
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  React.useEffect(() => {
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("touchend", handleMouseUp);
    return () => {
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchend", handleMouseUp);
    };
  }, []);

  return (
    <div className={className}>
      <div className="max-w-4xl mx-auto">
        <div
          ref={containerRef}
          className="relative w-full aspect-video rounded-xl overflow-hidden cursor-ew-resize border select-none shadow-2xl"
          onMouseMove={handleMove}
          onTouchMove={handleMove}
          onMouseDown={handleMouseDown}
          onTouchStart={handleMouseDown}
        >
          {/* After Image (Background) */}
          <div className="absolute inset-0 bg-zinc-900 flex items-center justify-center">
            <Image 
              src={afterImage} 
              alt="After" 
              fill 
              className="object-cover"
              priority
            />
            <div className="absolute top-4 right-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded shadow-md">AFTER</div>
          </div>

          {/* Before Image (Foreground - Clipped) */}
          <div
            className="absolute inset-0 bg-white overflow-hidden"
            style={{ width: `${sliderPosition}%` }}
          >
            <div className="relative w-full h-full">
                <Image 
                  src={beforeImage} 
                  alt="Before" 
                  fill 
                  className="object-cover"
                  priority
                />
            </div>
            <div className="absolute top-4 left-4 px-3 py-1 bg-zinc-200 text-zinc-800 text-xs font-bold rounded z-20 shadow-md">BEFORE</div>
          </div>

          {/* Slider Handle */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-30 shadow-[0_0_20px_rgba(0,0,0,0.5)]"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg text-black">
              <div className="flex gap-0.5">
                  <ChevronLeft size={16} />
                  <ChevronRight size={16} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
