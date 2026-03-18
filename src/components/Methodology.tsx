"use client";

import { motion } from "framer-motion";
import { Search, Lightbulb, Users, MapPin, Calendar, Quote } from "lucide-react";
import SectionTitle from "./ui/SectionTitle";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

const steps = [
  {
    title: "Investigación de mercado",
    description: "Entendemos tu industria y competencia a profundidad.",
    icon: Search,
    color: "bg-dfc-gold",
  },
  {
    title: "Propuesta de valor",
    description: "Definimos qué te hace único y por qué elegirte.",
    icon: Lightbulb,
    color: "bg-dfc-teal",
  },
  {
    title: "Customer Journey",
    description: "Mapeamos cada punto de contacto de la experiencia de tu cliente.",
    icon: Users,
    color: "bg-dfc-sky",
  },
  {
    title: "Stakeholders",
    description: "Identificamos y priorizamos tus audiencias clave.",
    icon: MapPin,
    color: "bg-dfc-navy",
  },
  {
    title: "Cronograma de acciones",
    description: "Plan ejecutable con métricas claras y resultados medibles.",
    icon: Calendar,
    color: "bg-dfc-gold",
  },
];

export default function Methodology() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <section id="metodologia" className={cn("py-16 sm:py-24 md:py-32 bg-transparent overflow-hidden relative border-t transition-colors duration-500", 
        isDark ? "border-white/5" : "border-black/5")}>
      {/* Decorative BG elements */}
      <div className={cn("absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 blur-[80px] sm:blur-[120px] rounded-full transition-opacity duration-500", isDark ? "bg-dfc-gold/5 opacity-100" : "bg-dfc-gold/10 opacity-30")} />
      <div className={cn("absolute bottom-0 left-0 w-64 sm:w-96 h-64 sm:h-96 blur-[80px] sm:blur-[120px] rounded-full transition-opacity duration-500", isDark ? "bg-dfc-teal/5 opacity-100" : "bg-dfc-teal/10 opacity-30")} />

      <div className="container px-6 mx-auto relative z-10">
        <SectionTitle
          title="Nuestra Metodología"
          subtitle="Un proceso estratégico diseñado para conectar marcas con propósitos reales."
        />

        <div className="mt-12 sm:mt-20 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-6 text-center">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Connection Line (Desktop) */}
              {index < steps.length - 1 && (
                <div className={cn("absolute top-12 left-1/2 w-full h-[1px] hidden lg:block overflow-hidden transition-colors", isDark ? "bg-white/10" : "bg-slate-200")}>
                   <motion.div 
                     initial={{ x: "-100%" }}
                     whileInView={{ x: "100%" }}
                     transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                     className="w-full h-full bg-gradient-to-r from-transparent via-dfc-gold to-transparent"
                   />
                </div>
              )}

              <div className="relative z-10 flex flex-col items-center">
                <div className={cn(
                  "w-16 h-16 sm:w-20 sm:h-20 rounded-[1.5rem] sm:rounded-[2rem] flex items-center justify-center mb-4 sm:mb-6 transition-all duration-500 md:group-hover:scale-110 md:group-hover:-rotate-12 shadow-2xl border backdrop-blur-sm",
                  step.color,
                  isDark ? "border-white/10" : "border-white shadow-xl shadow-black/5"
                )}>
                  <step.icon className={cn("w-6 h-6 sm:w-8 sm:h-8", step.color === "bg-dfc-navy" ? "text-white" : "text-black")} strokeWidth={2} />
                </div>
                
                <span className={cn("font-display font-black text-lg sm:text-xl mb-1 sm:mb-2 transition-colors duration-500", isDark ? "text-white/20" : "text-slate-300")}>0{index + 1}</span>
                <h3 className={cn("text-base sm:text-lg font-display font-bold mb-2 sm:mb-3 px-2 transition-colors duration-500", isDark ? "text-white md:group-hover:text-dfc-gold" : "text-slate-900 md:group-hover:text-dfc-navy")}>{step.title}</h3>
                <p className={cn("text-xs leading-relaxed px-2 font-medium transition-colors duration-500", isDark ? "text-white/40" : "text-slate-500")}>
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mt-24 sm:mt-40">
          <SectionTitle
            title="Lo que dicen de nosotros"
            subtitle="Confianza construida a través de resultados tangibles."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-10 sm:mt-16 text-left">
            {[
              { 
                text: "DFC Group transformó nuestra comunicación interna. Ahora el equipo está más alineado que nunca.",
                author: "Gerente de RRHH",
                company: "Multinacional Logística"
              },
              { 
                text: "La gestión de crisis fue impecable. Su equipo reaccionó en tiempo récord protegiendo nuestra reputación.",
                author: "Director de Comunicaciones",
                company: "Sector Energético"
              },
              { 
                text: "Nuestra pauta digital nunca había tenido un ROI tan alto. Son verdaderos expertos en resultados.",
                author: "CEO",
                company: "Retail Colombia"
              }
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={cn("backdrop-blur-xl p-8 sm:p-10 rounded-[2rem] sm:rounded-[2.5rem] border relative group transition-all duration-500", 
                    isDark ? "bg-white/[0.03] border-white/10 md:hover:border-dfc-gold/30" : "bg-white/80 border-slate-200 md:hover:border-dfc-navy/30 shadow-sm shadow-black/5")}
              >
                <Quote className={cn("absolute top-6 right-6 sm:top-8 sm:right-8 w-10 h-10 sm:w-12 sm:h-12 transition-all opacity-10 md:group-hover:opacity-20", isDark ? "text-dfc-gold" : "text-dfc-navy")} />
                <p className={cn("italic mb-8 sm:mb-10 relative z-10 text-sm sm:text-base leading-relaxed transition-colors duration-500", isDark ? "text-white/70" : "text-slate-700")}>"{testimonial.text}"</p>
                <div className="flex flex-col">
                  <span className={cn("font-bold text-base sm:text-lg transition-colors", isDark ? "text-dfc-gold" : "text-dfc-navy")}>{testimonial.author}</span>
                  <span className={cn("text-[10px] uppercase tracking-[0.2em] mt-1 font-black transition-colors", isDark ? "text-white/30" : "text-slate-400")}>{testimonial.company}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
