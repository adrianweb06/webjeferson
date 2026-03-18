"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const BackgroundPaths = ({ className }: { className?: string }) => {
  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      <svg
        className="absolute w-full h-full opacity-20"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M0,50 Q25,30 50,50 T100,50"
          stroke="url(#grad1)"
          strokeWidth="0.1"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
        <motion.path
          d="M0,20 Q30,40 60,20 T100,20"
          stroke="url(#grad2)"
          strokeWidth="0.1"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear", delay: 2 }}
        />
        <motion.path
          d="M0,80 Q40,60 80,80 T100,80"
          stroke="url(#grad3)"
          strokeWidth="0.1"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: 5 }}
        />
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#E8B830" stopOpacity="0" />
            <stop offset="50%" stopColor="#E8B830" stopOpacity="1" />
            <stop offset="100%" stopColor="#E8B830" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3CC8B4" stopOpacity="0" />
            <stop offset="50%" stopColor="#3CC8B4" stopOpacity="1" />
            <stop offset="100%" stopColor="#3CC8B4" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7ECAE4" stopOpacity="0" />
            <stop offset="50%" stopColor="#7ECAE4" stopOpacity="1" />
            <stop offset="100%" stopColor="#7ECAE4" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};
