"use client";

import { cn } from '@/lib/utils';
import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

type FeatureType = {
	title: string;
	icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
	description: string;
};

type FeatureCardProps = React.ComponentProps<'div'> & {
	feature: FeatureType;
};

export function FeatureCard({ feature, className, ...props }: FeatureCardProps) {
	const [pattern, setPattern] = useState<number[][]>([]);
    const { resolvedTheme } = useTheme();
    const isDark = resolvedTheme === "dark";

	useEffect(() => {
		setPattern(genRandomPattern());
	}, []);

	return (
		<div className={cn('relative overflow-hidden p-8 group', className)} {...props}>
			<div className="pointer-events-none absolute top-0 left-1/2 -mt-2 -ml-20 h-full w-full [mask-image:linear-gradient(white,transparent)]">
				<div className={cn("absolute inset-0 bg-gradient-to-r [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] opacity-100 transition-colors duration-500", 
                    isDark ? "from-white/5 to-transparent" : "from-black/5 to-transparent")}>
					<GridPattern
						width={20}
						height={20}
						x="-12"
						y="4"
						squares={pattern}
						className={cn("absolute inset-0 h-full w-full mix-blend-overlay transition-colors", 
                            isDark ? "fill-white/5 stroke-white/10" : "fill-black/5 stroke-black/10")}
					/>
				</div>
			</div>
			<div className="relative z-10">
				<feature.icon className="text-dfc-gold size-8 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3" strokeWidth={1.5} aria-hidden />
				<h3 className={cn("mt-10 text-xl font-display font-bold tracking-tight transition-colors duration-500", isDark ? "text-white" : "text-black")}>{feature.title}</h3>
				<p className={cn("relative z-20 mt-3 text-sm font-medium leading-relaxed transition-colors duration-500", isDark ? "text-white/50" : "text-black/60")}>{feature.description}</p>
			</div>
		</div>
	);
}

function GridPattern({
	width,
	height,
	x,
	y,
	squares,
	...props
}: React.ComponentProps<'svg'> & { width: number; height: number; x: string; y: string; squares?: number[][] }) {
	const patternId = React.useId();

	return (
		<svg aria-hidden="true" {...props}>
			<defs>
				<pattern id={patternId} width={width} height={height} patternUnits="userSpaceOnUse" x={x} y={y}>
					<path d={`M.5 ${height}V.5H${width}`} fill="none" />
				</pattern>
			</defs>
			<rect width="100%" height="100%" strokeWidth={0} fill={`url(#${patternId})`} />
			{squares && squares.length > 0 && (
				<svg x={x} y={y} className="overflow-visible">
					{squares.map(([x, y], index) => (
						<rect strokeWidth="0" key={index} width={width + 1} height={height + 1} x={x * width} y={y * height} className="fill-dfc-gold/10" />
					))}
				</svg>
			)}
		</svg>
	);
}

function genRandomPattern(length?: number): number[][] {
	length = length ?? 5;
	return Array.from({ length }, () => [
		Math.floor(Math.random() * 4) + 7,
		Math.floor(Math.random() * 6) + 1,
	]);
}
