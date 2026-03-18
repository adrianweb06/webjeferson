"use client";

import Image from "next/image";
import Link from "next/link";
import { Instagram, Facebook, Mail, Phone } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

export default function Footer() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <footer className={cn("pt-24 pb-12 overflow-hidden relative border-t w-full transition-colors duration-500", 
        isDark ? "bg-[#000000] border-white/5 text-white" : "bg-white border-black/5 text-slate-900")}>
      <div className="container px-6 mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <Link href="#inicio" className="inline-block mb-8">
              <Image
                src={isDark ? "/logofondonegro.png" : "/LOGOS_DFC-06.png"}
                alt="DFC Group Logo"
                width={140}
                height={40}
                className={cn("transition-all duration-500", isDark ? "brightness-125 contrast-125" : "brightness-100")}
              />
            </Link>
            <p className={cn("mb-8 leading-relaxed text-sm font-medium transition-colors duration-500", isDark ? "text-white/50" : "text-slate-500")}>
              Ideas que conectan, resultados que brillan. La agencia de comunicación estratégica líder en la región.
            </p>
            <div className="flex gap-5 text-left">
               {[
                 { icon: Instagram, color: "hover:bg-dfc-gold" },
                 { icon: Facebook, color: "hover:bg-dfc-teal" },
               ].map((social, i) => (
                 <a key={i} href="#" className={cn("w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300", 
                     isDark ? "border-white/10 text-white" : "border-slate-200 text-slate-600 shadow-sm shadow-black/5", social.color, "hover:text-dfc-navy hover:border-transparent")}>
                   <social.icon size={18} />
                 </a>
               ))}
               <a href="#" className={cn("w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 hover:bg-dfc-sky hover:text-dfc-navy hover:border-transparent shadow-sm shadow-black/5",
                   isDark ? "border-white/10 text-white" : "border-slate-200 text-slate-600")}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .8.11V9.4a6.33 6.33 0 0 0-1 .14 6.34 6.34 0 0 0-5.46 6.34 6.34 6.34 0 0 0 11.23 4.09 6.31 6.31 0 0 0 1.25-3.66V8.69a8.21 8.21 0 0 0 5.3 1.84V7.08a4.8 4.8 0 0 1-1.74-.39Z" />
                  </svg>
               </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-left">
            <h4 className="text-sm font-display font-black uppercase tracking-[0.2em] mb-8 text-dfc-gold">Navegación</h4>
            <ul className="space-y-4">
              <li><Link href="#inicio" className={cn("hover:text-dfc-gold transition-colors text-sm font-bold", isDark ? "text-white/40" : "text-slate-400")}>Inicio</Link></li>
              <li><Link href="#nosotros" className={cn("hover:text-dfc-gold transition-colors text-sm font-bold", isDark ? "text-white/40" : "text-slate-400")}>¿Quiénes somos?</Link></li>
              <li><Link href="#servicios" className={cn("hover:text-dfc-gold transition-colors text-sm font-bold", isDark ? "text-white/40" : "text-slate-400")}>Servicios</Link></li>
              <li><Link href="#metodologia" className={cn("hover:text-dfc-gold transition-colors text-sm font-bold", isDark ? "text-white/40" : "text-slate-400")}>Metodología</Link></li>
              <li><Link href="#contacto" className={cn("hover:text-dfc-gold transition-colors text-sm font-bold", isDark ? "text-white/40" : "text-slate-400")}>Contacto</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="text-left">
            <h4 className="text-sm font-display font-black uppercase tracking-[0.2em] mb-8 text-dfc-teal">Contacto</h4>
            <ul className="space-y-6">
              <li className={cn("flex items-start gap-4 transition-colors", isDark ? "text-white/50" : "text-slate-500")}>
                <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors shadow-sm", isDark ? "bg-white/5 shadow-black/20" : "bg-white border border-slate-100 shadow-black/5")}>
                    <Phone size={14} className="text-dfc-teal" />
                </div>
                <span className={cn("text-sm font-medium transition-colors", isDark ? "text-white" : "text-slate-900")}>+57 318 577 8918</span>
              </li>
              <li className={cn("flex items-start gap-4 transition-colors", isDark ? "text-white/50" : "text-slate-500")}>
                <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors shadow-sm", isDark ? "bg-white/5 shadow-black/20" : "bg-white border border-slate-100 shadow-black/5")}>
                    <Mail size={14} className="text-dfc-teal" />
                </div>
                <span className={cn("text-sm font-medium break-all transition-colors", isDark ? "text-white" : "text-slate-900")}>y.diaz@dfcgroup.com.co</span>
              </li>
            </ul>
          </div>

          {/* Sedes */}
          <div className="text-left">
            <h4 className="text-sm font-display font-black uppercase tracking-[0.2em] mb-8 text-dfc-sky">Sedes Cali</h4>
            <ul className={cn("space-y-4 text-sm font-medium transition-colors", isDark ? "text-white/40" : "text-slate-400")}>
              <li className={cn("transition-colors", isDark ? "hover:text-white" : "hover:text-slate-900")}>Calle 19 # 3-67, B/ San Nicolás</li>
              <li className={cn("transition-colors", isDark ? "hover:text-white" : "hover:text-slate-900")}>Calle 18 # 4-64, B/ San Nicolás</li>
            </ul>
            <div className={cn("mt-10 p-5 rounded-2xl border italic text-xs leading-relaxed transition-all shadow-sm", 
                isDark ? "bg-white/[0.03] border-white/5 text-white/30 shadow-black/20" : "bg-slate-50 border-slate-200 text-slate-500 shadow-black/5")}>
              "El consumidor olvidará lo que dijiste, pero jamás olvidará lo que le has hecho sentir."
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={cn("pt-10 border-t flex flex-col md:flex-row justify-between items-center gap-6 transition-colors", 
            isDark ? "border-white/5" : "border-black/5")}>
          <p className={cn("text-[10px] uppercase tracking-widest font-black transition-colors", isDark ? "text-white/20" : "text-slate-300")}>
            © 2025 DFC Group. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-2">
             <div className="w-1 h-1 rounded-full bg-dfc-gold animate-pulse" />
             <p className={cn("text-[10px] uppercase tracking-widest font-black transition-colors", isDark ? "text-white/20" : "text-slate-300")}>
               Diseñado en Cali, Colombia.
             </p>
          </div>
        </div>
      </div>

      {/* Finishing Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-dfc-gold/20 to-transparent" />
    </footer>
  );
}
