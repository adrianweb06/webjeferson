"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import MissionVision from "@/components/MissionVision";
import Values from "@/components/Values";
import Services from "@/components/Services";
import Methodology from "@/components/Methodology";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";
import PerformanceBackground from "@/components/ui/PerformanceBackground";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export default function Home() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Mientras no esté montado, forzamos un fondo negro para que coincida con el defaultTheme="dark"
  // Esto evita el "flicker" o la mezcla de temas al cargar por primera vez
  if (!mounted) {
    return (
      <main className="min-h-screen bg-black" aria-hidden="true" />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <main className={cn(
      "min-h-screen relative transition-colors duration-500", 
      isDark ? "bg-black" : "bg-white"
    )}>
      <PerformanceBackground />
      
      <Navbar />
      <Hero />
      
      <div className="relative z-10">
        <About />
        <MissionVision />
        <Values />
        <Services />
        <Methodology />
        <Contact />
      </div>
      
      <Footer />
      <WhatsAppFAB />
    </main>
  );
}
