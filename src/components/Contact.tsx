"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Instagram, Facebook, Send } from "lucide-react";
import SectionTitle from "./ui/SectionTitle";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

export default function Contact() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <section id="contacto" className={cn("py-16 sm:py-24 md:py-32 bg-transparent relative overflow-hidden border-t transition-colors duration-500", 
        isDark ? "border-white/5" : "border-black/5")}>
      {/* Decorative Glow */}
      <div className={cn("absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none transition-opacity duration-500", 
          isDark ? "bg-[radial-gradient(circle_at_center,rgba(232,184,48,0.03)_0%,transparent_70%)]" : "bg-[radial-gradient(circle_at_center,rgba(232,184,48,0.08)_0%,transparent_70%)]")} />

      <div className="container px-6 mx-auto relative z-10">
        <SectionTitle
          title="Hablemos de tu marca"
          subtitle="¿Listo para hacer brillar tu proyecto? Nuestro equipo está listo para diseñar tu próxima gran estrategia."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 mt-10 sm:mt-16 text-left">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-10 sm:space-y-12"
          >
            <div className={cn("backdrop-blur-xl p-8 sm:p-10 rounded-[2rem] sm:rounded-[2.5rem] border transition-all duration-500 shadow-xl",
                isDark ? "bg-white/[0.03] border-white/10" : "bg-white/80 border-slate-200 shadow-black/5")}>
              <h3 className={cn("text-xl sm:text-2xl font-display font-bold mb-6 sm:mb-8 transition-colors", isDark ? "text-white" : "text-slate-900")}>Información Estratégica</h3>
              <div className="space-y-6 sm:space-y-8">
                <div className="flex items-start gap-4 sm:gap-5 group">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-dfc-gold/10 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 border border-dfc-gold/20 group-hover:bg-dfc-gold group-hover:border-transparent transition-all duration-500">
                    <Phone className="text-dfc-gold w-5 h-5 sm:w-6 sm:h-6 group-hover:text-dfc-navy transition-colors" />
                  </div>
                  <div>
                    <p className={cn("text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] mb-1 transition-colors", isDark ? "text-white/30" : "text-slate-400")}>Director Ejecutivo</p>
                    <p className={cn("text-base sm:text-lg font-bold transition-colors", isDark ? "text-white" : "text-slate-900")}>Yeferson Diaz Falla</p>
                    <p className="text-dfc-gold font-medium text-sm sm:text-base">+57 318 577 8918</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 sm:gap-5 group">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-dfc-teal/10 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 border border-dfc-teal/20 group-hover:bg-dfc-teal group-hover:border-transparent transition-all duration-500">
                    <Mail className="text-dfc-teal w-5 h-5 sm:w-6 sm:h-6 group-hover:text-dfc-navy transition-colors" />
                  </div>
                  <div>
                    <p className={cn("text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] mb-1 transition-colors", isDark ? "text-white/30" : "text-slate-400")}>Correos Corporativos</p>
                    <p className={cn("text-sm sm:text-base font-medium transition-colors break-all", isDark ? "text-white/70" : "text-slate-700")}>y.diaz@dfcgroup.com.co</p>
                    <p className={cn("text-xs sm:text-sm transition-colors", isDark ? "text-white/40" : "text-slate-400")}>dfpublicidadcol@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 sm:gap-5 group">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-dfc-sky/10 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 border border-dfc-sky/20 group-hover:bg-dfc-sky group-hover:border-transparent transition-all duration-500">
                    <MapPin className="text-dfc-sky w-5 h-5 sm:w-6 sm:h-6 group-hover:text-dfc-navy transition-colors" />
                  </div>
                  <div>
                    <p className={cn("text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] mb-1 transition-colors", isDark ? "text-white/30" : "text-slate-400")}>Sedes principales</p>
                    <p className={cn("text-sm sm:text-base font-medium transition-colors", isDark ? "text-white/70" : "text-slate-700")}>Calle 19 # 3-67 / Calle 18 # 4-64</p>
                    <p className={cn("text-xs sm:text-sm transition-colors", isDark ? "text-white/40" : "text-slate-400")}>Barrio San Nicolás, Cali, Colombia</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-2 sm:px-4">
              <h3 className={cn("text-xs sm:text-sm font-display font-black uppercase tracking-[0.3em] mb-6 transition-colors", isDark ? "text-white/20" : "text-slate-300")}>Nuestra Presencia Digital</h3>
              <div className="flex gap-4">
                {[
                  { icon: Instagram, label: "Instagram", color: "hover:bg-dfc-gold" },
                  { icon: Facebook, label: "Facebook", color: "hover:bg-dfc-teal" },
                ].map((social, i) => (
                  <a key={i} href="#" className={cn("w-12 h-12 border rounded-xl flex items-center justify-center transition-all duration-300", 
                      isDark ? "bg-white/5 border-white/10 text-white" : "bg-white border-slate-200 text-slate-900 shadow-sm shadow-black/5", 
                      social.color, "hover:text-dfc-navy hover:border-transparent hover:-translate-y-1")}>
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={cn("backdrop-blur-2xl p-6 sm:p-10 rounded-[2.5rem] sm:rounded-[3rem] border shadow-2xl relative group transition-all duration-500",
                isDark ? "bg-white/[0.02] border-white/10" : "bg-white/90 border-slate-200 shadow-black/5")}
          >
            <form className="relative z-10 space-y-5 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 text-left">
                <div className="space-y-2">
                  <label className={cn("text-[9px] sm:text-[10px] font-black uppercase tracking-widest ml-2 transition-colors", isDark ? "text-white/40" : "text-slate-500")}>Nombre Completo</label>
                  <input
                    type="text"
                    placeholder="Ej. Juan Pérez"
                    className={cn("w-full px-5 py-3.5 sm:px-6 sm:py-4 rounded-xl sm:rounded-2xl border outline-none transition-all duration-300 text-sm", 
                        isDark ? "bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:border-dfc-gold/50 focus:bg-white/10" : "bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-dfc-navy/50 focus:bg-white")}
                  />
                </div>
                <div className="space-y-2">
                  <label className={cn("text-[9px] sm:text-[10px] font-black uppercase tracking-widest ml-2 transition-colors", isDark ? "text-white/40" : "text-slate-500")}>Email Corporativo</label>
                  <input
                    type="email"
                    placeholder="juan@empresa.com"
                    className={cn("w-full px-5 py-3.5 sm:px-6 sm:py-4 rounded-xl sm:rounded-2xl border outline-none transition-all duration-300 text-sm", 
                        isDark ? "bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:border-dfc-gold/50 focus:bg-white/10" : "bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-dfc-navy/50 focus:bg-white")}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 text-left">
                <div className="space-y-2">
                  <label className={cn("text-[9px] sm:text-[10px] font-black uppercase tracking-widest ml-2 transition-colors", isDark ? "text-white/40" : "text-slate-500")}>Teléfono</label>
                  <input
                    type="tel"
                    placeholder="+57"
                    className={cn("w-full px-5 py-3.5 sm:px-6 sm:py-4 rounded-xl sm:rounded-2xl border outline-none transition-all duration-300 text-sm", 
                        isDark ? "bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:border-dfc-gold/50 focus:bg-white/10" : "bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-dfc-navy/50 focus:bg-white")}
                  />
                </div>
                <div className="space-y-2">
                  <label className={cn("text-[9px] sm:text-[10px] font-black uppercase tracking-widest ml-2 transition-colors", isDark ? "text-white/40" : "text-slate-500")}>Servicio de Interés</label>
                  <div className="relative">
                    <select className={cn("w-full px-5 py-3.5 sm:px-6 sm:py-4 rounded-xl sm:rounded-2xl border outline-none transition-all duration-300 appearance-none cursor-pointer text-sm",
                        isDark ? "bg-white/5 border-white/10 text-white focus:border-dfc-gold/50" : "bg-slate-50 border-slate-200 text-slate-900 focus:border-dfc-navy/50")}>
                        <option className={isDark ? "bg-zinc-900 text-white" : "bg-white text-slate-900"}>Comunicación Estratégica</option>
                        <option className={isDark ? "bg-zinc-900 text-white" : "bg-white text-slate-900"}>Relaciones Públicas</option>
                        <option className={isDark ? "bg-zinc-900 text-white" : "bg-white text-slate-900"}>Marketing y Branding</option>
                        <option className={isDark ? "bg-zinc-900 text-white" : "bg-white text-slate-900"}>Comunicación Digital</option>
                    </select>
                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none opacity-20">
                        <svg width="10" height="6" viewBox="0 0 12 8" fill="none"><path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-2 text-left">
                <label className={cn("text-[9px] sm:text-[10px] font-black uppercase tracking-widest ml-2 transition-colors", isDark ? "text-white/40" : "text-slate-500")}>Breve descripción del reto</label>
                <textarea
                  rows={4}
                  placeholder="Cuéntanos sobre tu proyecto..."
                  className={cn("w-full px-5 py-3.5 sm:px-6 sm:py-4 rounded-xl sm:rounded-2xl border outline-none transition-all duration-300 resize-none text-sm", 
                      isDark ? "bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:border-dfc-gold/50 focus:bg-white/10" : "bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-dfc-navy/50 focus:bg-white")}
                ></textarea>
              </div>

              <button className={cn("w-full group/btn relative overflow-hidden py-4 sm:py-5 rounded-xl sm:rounded-2xl font-display font-black text-xs sm:text-sm uppercase tracking-[0.2em] flex items-center justify-center gap-3 transition-all hover:scale-[1.02] active:scale-95",
                  isDark ? "bg-white text-black shadow-white/10 shadow-xl" : "bg-dfc-navy text-white shadow-dfc-navy/20 shadow-xl")}>
                <div className="absolute inset-0 bg-gradient-to-r from-dfc-gold via-transparent to-dfc-teal opacity-0 group-hover/btn:opacity-30 transition-opacity duration-500" />
                <span className="relative z-10 flex items-center gap-3">
                    Enviar Estrategia
                    <Send size={14} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                </span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
