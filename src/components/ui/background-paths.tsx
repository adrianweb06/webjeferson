"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useMemo } from "react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

function FloatingPaths({ position }: { position: number }) {
    const [mounted, setMounted] = useState(false);
    const { resolvedTheme } = useTheme();
    const isDark = resolvedTheme === "dark";
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setMounted(true);
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const paths = useMemo(() => {
        const count = 24;
        const spacing = isMobile ? 5 : 10;
        const vSpacing = isMobile ? 4 : 8;

        return Array.from({ length: count }, (_, i) => ({ 
            id: i,
            d: `M-${380 - i * spacing * position} -${189 + i * vSpacing}C-${
                380 - i * spacing * position
            } -${189 + i * vSpacing * 1.5} -${312 - i * spacing * position} ${216 - i * vSpacing * 1.5} ${
                152 - i * spacing * position
            } ${343 - i * vSpacing * 1.5}C${616 - i * spacing * position} ${470 - i * vSpacing * 1.5} ${
                684 - i * spacing * position
            } ${875 - i * vSpacing * 1.5} ${684 - i * spacing * position} ${875 - i * vSpacing * 1.5}`,
            width: (isMobile ? 0.65 : 0.6) + i * 0.04,
            duration: 20 + (i % 8) * 2,
        }));
    }, [position, isMobile]);

    if (!mounted) return null;

    return (
        <div className="absolute inset-0 pointer-events-none transform-gpu">
            <svg
                className={cn("w-full h-full transition-colors duration-700", isDark ? "text-white" : "text-slate-900")}
                viewBox="0 0 696 316"
                fill="none"
                preserveAspectRatio="xMidYMid slice"
            >
                <title>Background Paths</title>
                {paths.map((path) => (
                    <motion.path
                        key={path.id}
                        d={path.d}
                        stroke="currentColor"
                        strokeWidth={path.width}
                        strokeOpacity={isDark 
                            ? 0.04 + (path.id * 0.01) 
                            : 0.06 + (path.id * 0.01)}
                        initial={{ pathLength: 0.3, opacity: 0.6 }}
                        animate={{
                            pathLength: 1,
                            opacity: isDark ? [0.2, 0.4, 0.2] : [0.1, 0.2, 0.1],
                            pathOffset: [0, 1],
                        }}
                        transition={{
                            duration: path.duration,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    />
                ))}
            </svg>
        </div>
    );
}

export function BackgroundPaths({
    title = "",
    subtitle = "",
    children = null
}: {
    title?: string;
    subtitle?: string;
    children?: React.ReactNode;
}) {
    const words = title ? title.split(" ") : [];
    const { resolvedTheme } = useTheme();
    const isDark = resolvedTheme === "dark";
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="relative min-h-[100dvh] w-full flex items-center justify-center overflow-hidden bg-transparent transition-colors duration-500">
            <div className="absolute inset-0 z-0">
                <FloatingPaths position={1} />
                <FloatingPaths position={-1} />
            </div>

            <div className="relative z-10 container mx-auto px-6 py-20 text-center">
                {children ? children : (
                  <div className="max-w-4xl mx-auto flex flex-col items-center">
                      <h1 className={cn("text-4xl sm:text-6xl md:text-8xl font-display font-bold mb-6 sm:mb-8 tracking-tighter transition-colors duration-500 leading-[1.1]", 
                          isDark ? "text-white" : "text-slate-900")}>
                          {words.map((word, wordIndex) => (
                              <span key={wordIndex} className="inline-block mr-3 sm:mr-4 last:mr-0">
                                  {word.split("").map((letter, letterIndex) => (
                                      <motion.span
                                          key={`${wordIndex}-${letterIndex}`}
                                          initial={{ y: 20, opacity: 0 }}
                                          animate={{ y: 0, opacity: 1 }}
                                          transition={{
                                              delay: wordIndex * 0.1 + letterIndex * 0.02,
                                              duration: 0.5,
                                              ease: "easeOut"
                                          }}
                                          className="inline-block"
                                      >
                                          {letter}
                                      </motion.span>
                                  ))}
                              </span>
                          ))}
                      </h1>

                      {subtitle && (
                          <motion.p
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 0.8, delay: 1 }}
                              className={cn("text-base sm:text-xl max-w-2xl mb-10 sm:mb-12 font-medium transition-colors duration-500 leading-relaxed", 
                                  isDark ? "text-white/50" : "text-slate-600")}
                          >
                              {subtitle}
                          </motion.p>
                      )}
                  </div>
                )}
            </div>
        </div>
    );
}
