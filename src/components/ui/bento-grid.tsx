"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { useTheme } from "next-themes";

export interface BentoItem {
    title: string;
    description: string;
    icon: React.ReactNode;
    status?: string;
    tags?: string[];
    meta?: string;
    cta?: string;
    colSpan?: number;
    hasPersistentHover?: boolean;
}

interface BentoGridProps {
    items: BentoItem[];
}

export function BentoGrid({ items }: BentoGridProps) {
    const { resolvedTheme } = useTheme();
    const isDark = resolvedTheme === "dark";

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 max-w-7xl mx-auto">
            {items.map((item, index) => (
                <div
                    key={index}
                    className={cn(
                        "group relative p-8 rounded-[2rem] overflow-hidden transition-all duration-500 backdrop-blur-xl border",
                        isDark 
                            ? "border-white/5 bg-white/[0.03] hover:border-white/20 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]" 
                            : "border-black/5 bg-black/[0.02] hover:border-black/10 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)]",
                        "hover:-translate-y-1 will-change-transform flex flex-col justify-between min-h-[320px]",
                        item.colSpan === 2 ? "md:col-span-2" : "col-span-1"
                    )}
                >
                    {/* Background Pattern */}
                    <div
                        className={`absolute inset-0 ${
                            item.hasPersistentHover
                                ? "opacity-100"
                                : "opacity-0 group-hover:opacity-100"
                        } transition-opacity duration-500`}
                    >
                        <div className={cn("absolute inset-0 bg-[length:12px_12px]", 
                            isDark ? "bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)]" : "bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.05)_1px,transparent_1px)]")} />
                    </div>

                    <div className="relative flex flex-col space-y-6 h-full">
                        <div className="flex items-center justify-between">
                            <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center border transition-all duration-500 group-hover:scale-110 group-hover:rotate-6",
                                isDark ? "bg-white/5 border-white/10" : "bg-black/5 border-black/10")}>
                                {item.icon}
                            </div>
                            {item.status && (
                                <span
                                    className={cn(
                                        "text-[10px] font-black px-3 py-1 rounded-full backdrop-blur-md uppercase tracking-[0.2em] transition-all duration-300",
                                        isDark ? "bg-white/5 text-white/40 border border-white/10 group-hover:bg-dfc-gold group-hover:text-dfc-navy" : "bg-black/5 text-black/40 border border-black/10 group-hover:bg-dfc-navy group-hover:text-white"
                                    )}
                                >
                                    {item.status}
                                </span>
                            )}
                        </div>

                        <div className="space-y-4 flex-grow">
                            <h3 className={cn("font-display font-bold tracking-tight text-3xl md:text-4xl transition-colors duration-500", isDark ? "text-white" : "text-black")}>
                                {item.title}
                                {item.meta && (
                                    <span className={cn("ml-3 text-sm font-medium tracking-widest uppercase", isDark ? "text-white/30" : "text-black/30")}>
                                        {item.meta}
                                    </span>
                                )}
                            </h3>
                            <p className={cn("text-base md:text-lg leading-relaxed font-medium transition-colors duration-500", isDark ? "text-white/60" : "text-black/60")}>
                                {item.description}
                            </p>
                        </div>

                        <div className="flex items-center justify-between mt-auto pt-6">
                            <div className="flex items-center space-x-2 text-xs">
                                {item.tags?.map((tag, i) => (
                                    <span
                                        key={i}
                                        className={cn("px-3 py-1 rounded-full border backdrop-blur-sm transition-all duration-300", 
                                            isDark ? "bg-white/5 text-white/60 border-white/5 hover:bg-white/10 hover:text-white" : "bg-black/5 text-black/60 border-black/5 hover:bg-black/10 hover:text-black")}
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                            <span className="text-sm font-bold text-dfc-gold opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0 flex items-center gap-2">
                                {item.cta || "Leer más"} 
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
                            </span>
                        </div>
                    </div>

                    <div
                        className={cn("absolute inset-0 -z-10 rounded-[2rem] p-px opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                            isDark ? "bg-gradient-to-br from-white/20 via-transparent to-transparent" : "bg-gradient-to-br from-black/10 via-transparent to-transparent")}
                    />
                </div>
            ))}
        </div>
    );
}
