"use client";

import React from "react";
import { BentoGrid, type BentoItem } from "@/components/ui/bento-grid";
import { Target, Eye, Sparkles } from "lucide-react";
import SectionTitle from "./ui/SectionTitle";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

const missionVisionItems: BentoItem[] = [
    {
        title: "Nuestra Misión",
        meta: "Propósito",
        description: "Proveer soluciones de comunicación y marketing estratégico que impulsen el éxito organizacional, fortalezcan marcas sólidas y gestionen de manera eficiente la relación entre las empresas y sus públicos. Nos enfocamos en conectar con el mercado real, brindando soluciones creativas e innovadoras.",
        icon: <Target className="w-7 h-7 text-dfc-gold" />,
        status: "Enfoque 2025",
        tags: ["Estrategia", "Innovación", "Aliado"],
        colSpan: 2,
        cta: "Nuestra labor"
    },
    {
        title: "Visión",
        meta: "2029",
        description: "Ser una empresa líder en la región, guiando procesos de consultoría, capacitación e implementación de estrategias de marketing y comunicación corporativa. Ser el referente de innovación para las organizaciones.",
        icon: <Eye className="w-7 h-7 text-dfc-teal" />,
        status: "Meta Global",
        tags: ["Liderazgo", "Referente"],
        colSpan: 1,
        cta: "Nuestro futuro"
    }
];

export default function MissionVision() {
    const { resolvedTheme } = useTheme();
    const isDark = resolvedTheme === "dark";

    return (
        <section className={cn("bg-transparent py-16 sm:py-24 md:py-32 overflow-hidden border-t transition-colors duration-500", 
            isDark ? "border-white/5" : "border-black/5")}>
            <div className="container mx-auto px-6">
                <SectionTitle 
                    title="Propósito Estratégico" 
                    subtitle="Definimos el camino para que tu marca no solo sea visible, sino inolvidable."
                    light={isDark}
                />
                
                <div className="mt-10 sm:mt-16">
                    <BentoGrid items={missionVisionItems} />
                </div>

                {/* Decorative element */}
                <div className="max-w-7xl mx-auto px-0 sm:px-4 mt-8 sm:mt-12">
                    <div className={cn(
                      "p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] border flex flex-col sm:flex-row items-center justify-between gap-6 group transition-all duration-500",
                      isDark 
                        ? "bg-white/[0.02] border-white/5 md:hover:border-white/10 shadow-2xl shadow-black" 
                        : "bg-white border-slate-200 md:hover:border-slate-300 shadow-lg shadow-slate-200/50"
                    )}>
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-dfc-gold/20 flex items-center justify-center flex-shrink-0">
                                <Sparkles className="text-dfc-gold w-5 h-5" />
                            </div>
                            <p className={cn("text-xs sm:text-base font-medium transition-colors duration-500", isDark ? "text-white/40" : "text-slate-500")}>
                                "Ideas que conectan, resultados que brillan" — <span className={cn("italic font-display transition-colors duration-500", isDark ? "text-white/60" : "text-slate-800")}>El ADN de DFC Group.</span>
                            </p>
                        </div>
                        <div className={cn("hidden lg:block h-px flex-grow mx-8 transition-colors duration-500", isDark ? "bg-white/5" : "bg-slate-200")} />
                        <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.3em] text-dfc-gold opacity-50 md:group-hover:opacity-100 transition-opacity">
                            Cali, Colombia
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
