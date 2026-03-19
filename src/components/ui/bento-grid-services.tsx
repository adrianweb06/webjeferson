"use client";

import { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

const BentoGrid = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[20rem] sm:auto-rows-[22rem] grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6",
        className,
      )}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
}: {
  name: string;
  className: string;
  background: ReactNode;
  Icon: any;
  description: string;
  href: string;
  cta: string;
}) => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <div
      key={name}
      className={cn(
        "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] transition-all duration-500",
        isDark 
          ? "bg-black border-white/10 shadow-xl" 
          : "bg-white border-slate-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_60px_-10px_rgba(0,0,0,0.12)]",
        "border transform-gpu",
        className,
      )}
    >
      {/* Background layer - Optimizado para modo claro */}
      <div className="absolute inset-0 z-0 overflow-hidden">
          <div className={cn(
            "absolute inset-0 transition-transform duration-1000 md:group-hover:scale-110",
            !isDark && "grayscale-[0.5] opacity-20 md:group-hover:grayscale-0 md:group-hover:opacity-40"
          )}>
              {background}
          </div>
          
          {/* Overlay de color dinámico */}
          <div className={cn(
            "absolute inset-0 transition-colors duration-500", 
            isDark 
              ? "bg-black/75 sm:bg-black/70 md:group-hover:bg-black/50" 
              : "bg-gradient-to-br from-white via-white/95 to-slate-50/90 md:group-hover:from-white/90"
          )} />
          
          {/* Acento de color en la esquina (Modo Claro) */}
          {!isDark && (
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-dfc-gold/5 blur-[60px] rounded-full group-hover:bg-dfc-gold/10 transition-colors duration-500" />
          )}
      </div>
      
      {/* Top Content */}
      <div className="relative z-10 flex flex-col gap-1 p-6 sm:p-8 transition-all duration-500 md:group-hover:-translate-y-2">
        <div className={cn(
          "w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl backdrop-blur-md flex items-center justify-center mb-3 sm:mb-4 border transition-all duration-500 md:group-hover:scale-110",
          isDark 
            ? "bg-white/10 border-white/10 md:group-hover:bg-dfc-gold md:group-hover:border-transparent" 
            : "bg-slate-50 border-slate-200 shadow-sm md:group-hover:bg-dfc-navy md:group-hover:border-dfc-navy"
        )}>
          <Icon className={cn("h-5 w-5 sm:h-6 sm:w-6 transition-all duration-300", 
            isDark ? "text-white md:group-hover:text-dfc-navy" : "text-dfc-navy md:group-hover:text-white")} />
        </div>
        
        <h3 className={cn("text-xl sm:text-2xl font-display font-bold transition-colors duration-300", 
            isDark ? "text-white md:group-hover:text-dfc-gold" : "text-slate-900 md:group-hover:text-dfc-navy")}>
          {name}
        </h3>
        
        <p className={cn("max-w-lg text-xs sm:text-sm font-medium leading-relaxed transition-colors duration-500", 
            isDark ? "text-white/60" : "text-slate-500")}>
          {description}
        </p>
      </div>

      {/* Bottom CTA */}
      <div
        className={cn(
          "relative z-20 p-6 sm:p-8 pt-0 transition-all duration-500",
          "md:opacity-0 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0",
          "opacity-100 translate-y-0"
        )}
      >
        <Button variant="ghost" asChild size="sm" className={cn(
          "pointer-events-auto font-bold rounded-full px-5 sm:px-6 py-4 sm:py-5 shadow-lg transition-all active:scale-95",
          isDark 
            ? "bg-dfc-gold text-dfc-navy hover:bg-white" 
            : "bg-white text-dfc-navy border border-slate-200 hover:bg-dfc-navy hover:text-white hover:border-dfc-navy"
        )}>
          <a href={href} className="flex items-center gap-2 text-xs sm:text-sm">
            {cta}
            <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          </a>
        </Button>
      </div>
      
      {/* Interactive Edge Glow (Solo Modo Oscuro) */}
      {isDark && (
        <div className="pointer-events-none absolute inset-0 rounded-[2.5rem] border border-white/0 group-hover:border-white/20 transition-all duration-500 z-30" />
      )}
    </div>
  );
};

export { BentoCard, BentoGrid };
