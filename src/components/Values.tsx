"use client";

import React from 'react';
import { Lightbulb, Award, Handshake, Target, Sparkles, Zap } from 'lucide-react';
import { motion, useReducedMotion } from "framer-motion";
import { FeatureCard } from '@/components/ui/grid-feature-cards';
import SectionTitle from "./ui/SectionTitle";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

const values = [
	{
		title: 'Innovación',
		icon: Lightbulb,
		description: 'Búsqueda constante de nuevas formas y estrategias para mejorar la comunicación de tu marca.',
	},
	{
		title: 'Calidad',
		icon: Award,
		description: 'Soluciones estratégicas entregadas con los más altos estándares de profesionalismo.',
	},
	{
		title: 'Confianza',
		icon: Handshake,
		description: 'Fomentamos relaciones a largo plazo basadas en la integridad y el respeto mutuo.',
	},
	{
		title: 'Compromiso',
		icon: Zap,
		description: 'Responsabilidad total con los resultados y objetivos estratégicos de nuestros clientes.',
	},
	{
		title: 'Excelencia',
		icon: Sparkles,
		description: 'Cuidamos cada detalle para que tu marca brille con luz propia en el mercado.',
	},
	{
		title: 'Estrategia',
		icon: Target,
		description: 'Diagnósticos precisos para una ejecución efectiva en cada etapa del proceso.',
	},
];

export default function Values() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

	return (
		<section className={cn("bg-transparent py-16 sm:py-24 md:py-32 border-t overflow-hidden transition-colors duration-500", 
        isDark ? "border-white/5" : "border-black/5")}>
			<div className="mx-auto w-full max-w-7xl space-y-12 sm:space-y-16 px-6">
				<AnimatedContainer className="mx-auto max-w-3xl text-center">
					<SectionTitle 
                        title="Nuestros Valores" 
                        subtitle="Los pilares fundamentales que impulsan nuestra creatividad y rigor estratégico."
                        light={isDark}
                    />
				</AnimatedContainer>

				<AnimatedContainer
					delay={0.4}
					className={cn(
            "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-transparent border rounded-[2rem] sm:rounded-3xl overflow-hidden transition-all duration-500 shadow-xl",
            isDark ? "border-white/10 bg-white/5 shadow-black" : "border-slate-200 bg-slate-200/50 shadow-slate-200/50"
          )}
				>
					{values.map((value, i) => (
						<div key={i} className={cn(
              "transition-colors duration-500 h-full",
              isDark ? "bg-black/40 md:hover:bg-black/60" : "bg-white md:hover:bg-slate-50"
            )}>
              <FeatureCard feature={value} className="h-full py-10 sm:py-8" />
            </div>
					))}
				</AnimatedContainer>
			</div>
		</section>
	);
}

type ViewAnimationProps = {
	delay?: number;
	className?: string;
	children: React.ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
	const shouldReduceMotion = useReducedMotion();

	if (shouldReduceMotion) {
		return <div className={className}>{children}</div>;
	}

	return (
		<motion.div
			initial={{ filter: 'blur(4px)', translateY: 20, opacity: 0 }}
			whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
			viewport={{ once: true }}
			transition={{ delay, duration: 0.8 }}
			className={className}
		>
			{children}
		</motion.div>
	);
}
