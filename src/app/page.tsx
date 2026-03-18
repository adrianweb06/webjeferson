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

  // Aseguramos que el componente esté montado para evitar Hydration Mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? resolvedTheme === "dark" : false;

  return (
    <main className={cn(
      "min-h-screen relative transition-colors duration-500", 
      mounted ? (isDark ? "bg-black" : "bg-white") : "bg-white"
    )}>
      {/* Fondo de alto rendimiento */}
      <PerformanceBackground />
      
      <Navbar />
      <Hero />
      
      {/* Contenido en capas transparentes sobre el fondo fijo */}
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
