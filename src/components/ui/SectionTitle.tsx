"use client";

import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
  light?: boolean;
}

export default function SectionTitle({
  title,
  subtitle,
  align = "center",
  className,
  light = false,
}: SectionTitleProps) {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <div
      className={cn(
        "mb-10 sm:mb-16 flex flex-col gap-3 sm:gap-4 transition-colors duration-500",
        align === "center" ? "items-center text-center" : align === "left" ? "items-start text-left" : "items-end text-right",
        className
      )}
    >
      <div className="flex items-center gap-2">
        <span className="h-[1.5px] sm:h-[2px] w-6 sm:w-8 bg-dfc-gold" />
        <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] text-dfc-teal transition-all">
          DFC Group
        </span>
        <span className="h-[1.5px] sm:h-[2px] w-6 sm:w-8 bg-dfc-sky" />
      </div>
      <h2
        className={cn(
          "text-2xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight transition-colors duration-500 leading-[1.15]",
          (light || isDark) ? "text-white" : "text-slate-900"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "max-w-2xl text-base sm:text-lg leading-relaxed transition-colors duration-500 font-medium",
            (light || isDark) ? "text-white/60" : "text-slate-500"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
