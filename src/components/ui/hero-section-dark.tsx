"use client";

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { ChevronRight } from "lucide-react"

function FloatingPaths({ position }: { position: number }) {
    const paths = Array.from({ length: 36 }, (_, i) => ({
        id: i,
        d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
            380 - i * 5 * position
        } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
            152 - i * 5 * position
        } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
            684 - i * 5 * position
        } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
        color: `rgba(232,184,48,${0.05 + i * 0.01})`,
        width: 0.5 + i * 0.03,
    }));

    return (
        <div className="absolute inset-0 pointer-events-none z-0">
            <svg
                className="w-full h-full text-white/10"
                viewBox="0 0 696 316"
                fill="none"
            >
                <title>Background Paths</title>
                {paths.map((path) => (
                    <motion.path
                        key={path.id}
                        d={path.d}
                        stroke="currentColor"
                        strokeWidth={path.width}
                        strokeOpacity={0.1 + path.id * 0.02}
                        initial={{ pathLength: 0.3, opacity: 0.6 }}
                        animate={{
                            pathLength: 1,
                            opacity: [0.2, 0.4, 0.2],
                            pathOffset: [0, 1, 0],
                        }}
                        transition={{
                            duration: 20 + Math.random() * 10,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                        }}
                    />
                ))}
            </svg>
        </div>
    );
}

const RetroGrid = ({
  angle = 65,
  cellSize = 60,
  opacity = 0.3,
  lightLineColor = "rgba(232,184,48,0.1)",
  darkLineColor = "rgba(255,255,255,0.05)",
}) => {
  const gridStyles = {
    "--grid-angle": `${angle}deg`,
    "--cell-size": `${cellSize}px`,
    "--opacity": opacity,
    "--light-line": lightLineColor,
    "--dark-line": darkLineColor,
  } as React.CSSProperties

  return (
    <div
      className={cn(
        "pointer-events-none absolute size-full overflow-hidden [perspective:200px] z-0",
        `opacity-[var(--opacity)]`,
      )}
      style={gridStyles}
    >
      <div className="absolute inset-0 [transform:rotateX(var(--grid-angle))]">
        <div className="animate-grid [background-image:linear-gradient(to_right,var(--dark-line)_1px,transparent_0),linear-gradient(to_bottom,var(--dark-line)_1px,transparent_0)] [background-repeat:repeat] [background-size:var(--cell-size)_var(--cell-size)] [height:300vh] [inset:0%_0px] [margin-left:-200%] [transform-origin:100%_0_0] [width:600vw]" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent to-90%" />
    </div>
  )
}

interface HeroSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  subtitle?: {
    regular: string
    gradient: string
  }
  description?: string
  ctaText?: string
  ctaHref?: string
  bottomImage?: string
}

const HeroSection = React.forwardRef<HTMLDivElement, HeroSectionProps>(
  (
    {
      className,
      title = "DFC Group",
      subtitle = {
        regular: "Ideas que conectan, ",
        gradient: "resultados que brillan.",
      },
      description = "Soluciones integrales de comunicación estratégica y marketing para potencializar tu marca.",
      ctaText = "Conoce nuestros servicios",
      ctaHref = "#servicios",
      bottomImage = "/images/storystep1a_sequence_of_4_highen.png",
      ...props
    },
    ref,
  ) => {
    return (
      <div className={cn("relative bg-black min-h-screen overflow-hidden", className)} ref={ref} {...props}>
        {/* FONDOS HIBRIDOS */}
        <div className="absolute top-0 z-0 h-screen w-screen bg-[radial-gradient(ellipse_20%_80%_at_50%_-20%,rgba(232,184,48,0.1),rgba(0,0,0,0))]" />
        
        <div className="absolute inset-0 z-0">
          <FloatingPaths position={1} />
          <FloatingPaths position={-1} />
        </div>
        
        <RetroGrid opacity={0.2} />

        <section className="relative max-w-full mx-auto z-10">
          <div className="max-w-screen-xl mx-auto px-4 py-32 gap-12 md:px-8">
            <div className="space-y-8 max-w-4xl leading-0 lg:leading-5 mx-auto text-center flex flex-col items-center">
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-xs md:text-sm text-dfc-gold group font-display mx-auto px-6 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full w-fit tracking-widest uppercase"
              >
                {title}
                <ChevronRight className="inline w-4 h-4 ml-2 group-hover:translate-x-1 duration-300" />
              </motion.h1>

              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-5xl tracking-tighter font-display font-extrabold text-transparent bg-clip-text bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.5)_100%)] md:text-8xl leading-tight"
              >
                {subtitle.regular}
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-dfc-gold via-dfc-teal to-dfc-sky">
                  {subtitle.gradient}
                </span>
              </motion.h2>

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl"
              >
                {description}
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0 pt-4"
              >
                <span className="relative inline-block overflow-hidden rounded-full p-[1.5px]">
                  {/* Animación Spin Border */}
                  <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E8B830_0%,#3CC8B4_50%,#E8B830_100%)]" />
                  
                  <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-950 text-xs font-medium backdrop-blur-3xl">
                    <a
                      href={ctaHref}
                      className="inline-flex rounded-full text-center group items-center w-full justify-center bg-white/5 text-white hover:bg-white/10 transition-all sm:w-auto py-5 px-12 text-lg font-bold"
                    >
                      {ctaText}
                      <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </span>
              </motion.div>
            </div>

            {bottomImage && (
              <motion.div 
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="mt-32 mx-auto max-w-5xl relative z-10"
              >
                <div className="absolute inset-0 bg-dfc-gold/20 blur-[100px] rounded-full opacity-20" />
                <img
                  src={bottomImage}
                  className="w-full shadow-[0_0_50px_rgba(0,0,0,0.5)] rounded-2xl border border-white/10"
                  alt="Portfolio Preview"
                />
              </motion.div>
            )}
          </div>
        </section>
      </div>
    )
  },
)
HeroSection.displayName = "HeroSection"

export { HeroSection }
