"use client";

import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

export default function PerformanceBackground() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <div className={cn(
      "fixed inset-0 z-0 overflow-hidden pointer-events-none transform-gpu transition-colors duration-700",
      isDark ? "bg-black" : "bg-slate-50"
    )}>
      {/* Glow Blob 1 - Dorado */}
      <motion.div
        animate={{
          x: [0, 50, -25, 0],
          y: [0, 25, 50, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className={cn(
          "absolute -top-[10%] -left-[10%] w-[600px] h-[600px] blur-[120px] rounded-full will-change-transform transition-colors duration-700",
          isDark ? "bg-dfc-gold/5" : "bg-dfc-gold/10"
        )}
      />

      {/* Glow Blob 2 - Teal */}
      <motion.div
        animate={{
          x: [0, -40, 20, 0],
          y: [0, 60, -30, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className={cn(
          "absolute top-[30%] -right-[10%] w-[500px] h-[500px] blur-[130px] rounded-full will-change-transform transition-colors duration-700",
          isDark ? "bg-dfc-teal/5" : "bg-dfc-teal/10"
        )}
      />

      {/* Glow Blob 3 - Navy/Sky */}
      <motion.div
        animate={{
          x: [0, 25, -50, 0],
          y: [0, -50, 25, 0],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "linear",
        }}
        className={cn(
          "absolute -bottom-[10%] left-[20%] w-[700px] h-[700px] blur-[150px] rounded-full will-change-transform transition-colors duration-700",
          isDark ? "bg-dfc-sky/5" : "bg-dfc-sky/10"
        )}
      />

      {/* Textura de ruido ligera */}
      <div className={cn(
        "absolute inset-0 pointer-events-none mix-blend-overlay transition-opacity duration-700",
        isDark ? "opacity-[0.03]" : "opacity-[0.05]"
      )} style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }} />
    </div>
  );
}
