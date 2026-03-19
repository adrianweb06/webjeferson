"use client";

import React from "react";
import { Home, User, Briefcase, Settings, Mail } from 'lucide-react'
import { NavBar } from "@/components/ui/tubelight-navbar"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const { resolvedTheme } = useTheme();
  // page.tsx ya garantiza que Navbar solo se renderiza cuando está montado
  const isDark = resolvedTheme === "dark";

  const navItems = [
    { name: 'Inicio', url: '#inicio', icon: Home },
    { name: 'Nosotros', url: '#nosotros', icon: User },
    { name: 'Servicios', url: '#servicios', icon: Briefcase },
    { name: 'Metodología', url: '#metodologia', icon: Settings },
    { name: 'Contacto', url: '#contacto', icon: Mail }
  ]

  return (
    <>
      {/* Tubelight Navbar Central */}
      <NavBar items={navItems} />

      {/* Header flotante superior */}
      <div className="fixed top-0 left-0 w-full z-[60] px-4 py-4 sm:px-8 sm:py-6 flex items-center justify-between pointer-events-none">
        <div className="pointer-events-auto">
          <Link href="#inicio">
            <Image
              src={isDark ? "/logofondonegro.png" : "/LOGOS_DFC-06.png"}
              alt="DFC Group"
              width={85}
              height={28}
              priority
              className={cn(
                "object-contain transition-all duration-500 w-16 sm:w-20", 
                isDark ? "brightness-110 contrast-125" : "brightness-100"
              )}
            />
          </Link>
        </div>

        <div className="flex items-center gap-2 sm:gap-4 pointer-events-auto">
          <ThemeToggle className="scale-90 sm:scale-100 shadow-lg" />
          <Link 
            href="#contacto"
            className={cn(
              "px-4 py-2 sm:px-6 sm:py-2.5 text-[9px] sm:text-[11px] font-bold rounded-full transition-all duration-300 uppercase tracking-widest shadow-xl active:scale-95",
              isDark 
                ? "text-dfc-navy bg-dfc-gold hover:bg-white shadow-dfc-gold/20" 
                : "text-white bg-dfc-navy hover:bg-dfc-gold hover:text-dfc-navy shadow-dfc-navy/20"
            )}
          >
            <span className="hidden xs:inline">Cotizar Proyecto</span>
            <span className="xs:hidden">Cotizar</span>
          </Link>
        </div>
      </div>
    </>
  );
}
