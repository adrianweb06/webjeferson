'use client';

import React, { useRef, useId, useEffect, CSSProperties, useState } from 'react';
import { animate, useMotionValue, AnimationPlaybackControls } from 'framer-motion';

interface ShadowOverlayProps {
    sizing?: 'fill' | 'stretch';
    color?: string;
    animation?: { scale: number; speed: number };
    noise?: { opacity: number; scale: number };
    style?: CSSProperties;
    className?: string;
    children?: React.ReactNode;
}

function mapRange(value: number, fromLow: number, fromHigh: number, toLow: number, toHigh: number): number {
    if (fromLow === fromHigh) return toLow;
    return toLow + ((value - fromLow) / (fromHigh - fromLow)) * (toHigh - toLow);
}

export function EtheralShadow({
    sizing = 'fill',
    color = 'rgba(255, 255, 255, 0.03)', // Luz blanca muy tenue para efecto niebla sobre negro
    animation = { scale: 80, speed: 20 },
    noise = { opacity: 0.1, scale: 1 },
    style,
    className,
    children
}: ShadowOverlayProps) {
    const id = useId().replace(/:/g, "");
    const feColorMatrixRef = useRef<SVGFEColorMatrixElement>(null);
    const hueRotateMotionValue = useMotionValue(0);
    const [mounted, setMounted] = useState(false);

    const displacementScale = mapRange(animation.scale, 1, 100, 30, 150);
    const animationDuration = mapRange(animation.speed, 1, 100, 20, 5); // Segundos para una rotación completa

    useEffect(() => {
        setMounted(true);
        const controls = animate(hueRotateMotionValue, 360, {
            duration: animationDuration,
            repeat: Infinity,
            ease: "linear",
            onUpdate: (value) => {
                if (feColorMatrixRef.current) {
                    feColorMatrixRef.current.setAttribute("values", String(value));
                }
            }
        });
        return () => controls.stop();
    }, [animationDuration, hueRotateMotionValue]);

    if (!mounted) return <div className={className} style={{backgroundColor: '#000', ...style}}>{children}</div>;

    return (
        <div className={className} style={{ overflow: "hidden", position: "relative", width: "100%", height: "100%", backgroundColor: "#000", ...style }}>
            {/* Fondo de sombras/luz animada */}
            <div style={{ position: "absolute", inset: -displacementScale, filter: `url(#filter-${id}) blur(60px)`, zIndex: 0, opacity: 0.8 }}>
                <svg style={{ position: "absolute", width: 0, height: 0 }}>
                    <defs>
                        <filter id={`filter-${id}`}>
                            <feTurbulence
                                type="turbulence"
                                baseFrequency={`${mapRange(animation.scale, 0, 100, 0.002, 0.001)},${mapRange(animation.scale, 0, 100, 0.005, 0.002)}`}
                                numOctaves="2"
                                seed="5"
                                result="undulation"
                            />
                            <feColorMatrix ref={feColorMatrixRef} type="hueRotate" values="0" in="undulation" />
                            <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="contrast" />
                            <feDisplacementMap in="SourceGraphic" in2="contrast" scale={displacementScale} />
                        </filter>
                    </defs>
                </svg>
                <div
                    style={{
                        backgroundColor: color,
                        maskImage: `url('https://framerusercontent.com/images/ceBGguIpUU8luwByxuQz79t7To.png')`,
                        maskSize: sizing === "stretch" ? "100% 100%" : "cover",
                        maskRepeat: "no-repeat",
                        maskPosition: "center",
                        width: "100%",
                        height: "100%"
                    }}
                />
            </div>

            {/* Ruido sutil (Texture) */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage: `url("https://framerusercontent.com/images/g0QcWrxr87K0ufOxIUFBakwYA8.png")`,
                    backgroundSize: "200px",
                    opacity: noise.opacity,
                    mixBlendMode: "overlay",
                    pointerEvents: "none",
                    zIndex: 1
                }}
            />

            {/* Contenido real */}
            <div className="relative z-10 w-full h-full">
                {children}
            </div>
        </div>
    );
}
