"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BackgroundPaths } from "./ui/background-paths";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { Typewriter } from "./ui/Typewriter";
import { useEffect, useState } from "react";

export default function Hero() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? resolvedTheme === "dark" : false;

  return (
    <section id="inicio" className="w-full relative">
      <BackgroundPaths 
        title="" // Dejamos el título vacío para usar nuestro Typewriter personalizado dentro de children si es necesario, o modificamos BackgroundPaths
      >
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <h1 className={cn(
            "text-4xl sm:text-6xl md:text-8xl font-display font-bold mb-6 sm:mb-8 tracking-tighter transition-colors duration-500 leading-[1.1]", 
            isDark ? "text-white" : "text-slate-900"
          )}>
            <Typewriter 
              text="Ideas que conectan, resultados que brillan" 
              speed={70}
              delay={500}
            />
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 3.5 }}
            className={cn(
              "text-base sm:text-xl max-w-2xl mb-10 sm:mb-12 font-medium transition-colors duration-500 leading-relaxed", 
              isDark ? "text-white/50" : "text-slate-600"
            )}
          >
            Soluciones integrales diseñadas para potencializar tu marca y conectar con tu público real en la era digital.
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            {/* CTA Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 4 }}
              className={cn(
                "inline-block group relative p-px rounded-2xl backdrop-blur-lg overflow-hidden shadow-2xl transition-all duration-300",
                isDark ? "bg-white/10" : "bg-slate-200"
              )}
            >
              <Link 
                href="#servicios"
                className={cn(
                  "inline-flex h-full w-full items-center justify-center rounded-[1.15rem] px-8 py-5 sm:px-10 sm:py-6 text-base sm:text-lg font-bold transition-all duration-300 group-hover:-translate-y-0.5 border shadow-xl",
                  isDark 
                    ? "bg-black text-white border-white/10 hover:shadow-neutral-800/50" 
                    : "bg-white text-slate-900 border-slate-200 hover:shadow-slate-200"
                )}
              >
                <span className="opacity-90 group-hover:opacity-100 transition-opacity">
                  Conoce nuestros servicios
                </span>
                <ArrowRight className="ml-3 w-5 h-5 opacity-70 group-hover:opacity-100 group-hover:translate-x-1.5 transition-all duration-300" />
              </Link>
            </motion.div>

            {/* CTA Meeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 4.2 }}
            >
              <Link
                href="#contacto"
                className={cn(
                  "flex items-center gap-3 px-10 py-5 sm:px-12 sm:py-6 rounded-full font-black text-base sm:text-lg transition-all backdrop-blur-md border shadow-xl active:scale-95",
                  isDark 
                    ? "bg-white/5 hover:bg-white/10 text-white border-white/20 hover:border-dfc-teal/50" 
                    : "bg-dfc-navy hover:bg-dfc-navy/90 text-white border-transparent hover:scale-105"
                )}
              >
                Agenda una reunión
              </Link>
            </motion.div>
          </div>
        </div>
      </BackgroundPaths>
    </section>
  );
}
