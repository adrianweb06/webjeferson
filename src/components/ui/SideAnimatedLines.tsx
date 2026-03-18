"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const SideLine = ({ side = "left", color = "#E8B830", delay = 0 }) => {
  return (
    <div 
      className={cn(
        "absolute top-0 bottom-0 w-24 pointer-events-none z-0 opacity-30",
        side === "left" ? "left-0" : "right-0"
      )}
    >
      <svg className="w-full h-full" preserveAspectRatio="none">
        <motion.path
          d={side === "left" 
            ? "M 20 0 Q 60 500 20 1000 T 20 2000 T 20 3000 T 20 4000" 
            : "M 80 0 Q 40 500 80 1000 T 80 2000 T 80 3000 T 80 4000"}
          stroke={color}
          strokeWidth="1.5"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: [0, 1, 1, 0], 
            opacity: [0, 1, 1, 0],
            pathOffset: [0, 0, 1, 1] 
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            delay: delay,
            ease: "linear"
          }}
        />
        <motion.path
          d={side === "left" 
            ? "M 40 0 Q 10 600 40 1200 T 40 2400 T 40 3600" 
            : "M 60 0 Q 90 600 60 1200 T 60 2400 T 60 3600"}
          stroke={color === "#E8B830" ? "#3CC8B4" : "#E8B830"}
          strokeWidth="0.8"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: [0, 1, 1, 0], 
            opacity: [0, 0.6, 0.6, 0],
            pathOffset: [0, 0, 1, 1] 
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            delay: delay + 2,
            ease: "linear"
          }}
        />
      </svg>
    </div>
  );
};

export default function SideAnimatedLines() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden h-full min-h-screen">
      {/* Left side lines */}
      <SideLine side="left" color="#E8B830" delay={0} />
      <SideLine side="left" color="#3CC8B4" delay={6} />
      
      {/* Right side lines */}
      <SideLine side="right" color="#3CC8B4" delay={3} />
      <SideLine side="right" color="#E8B830" delay={9} />
    </div>
  );
}
