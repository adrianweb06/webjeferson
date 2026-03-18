"use client";

import Image from "next/image";
import { 
  Megaphone, 
  Users, 
  Palette, 
  Globe
} from "lucide-react";
import SectionTitle from "./ui/SectionTitle";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid-services";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

const services = [
  {
    name: "Comunicación Estratégica",
    description: "Diseño e implementación de estrategias para fortalecer la cultura y reputación organizacional.",
    Icon: Megaphone,
    className: "md:col-span-2",
    background: (
      <div className="absolute inset-0">
        <Image
          src="/images/storystep1a_sequence_of_4_highen.png"
          alt="Comunicación Estratégica"
          fill
          sizes="(max-width: 768px) 100vw, 66vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 dark:opacity-80"
          loading="lazy"
        />
      </div>
    ),
    href: "#contacto",
    cta: "Potencializar marca",
  },
  {
    name: "Relaciones Públicas",
    description: "Conectamos tu marca con los medios y audiencias clave.",
    Icon: Users,
    className: "md:col-span-1",
    background: (
      <div className="absolute inset-0">
        <Image
          src="/images/storystep2a_sequence_of_4_highen.png"
          alt="Relaciones Públicas"
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 dark:opacity-80"
          loading="lazy"
        />
      </div>
    ),
    href: "#contacto",
    cta: "Gestionar medios",
  },
  {
    name: "Marketing y Branding",
    description: "Creamos identidades memorables y campañas de alto rendimiento.",
    Icon: Palette,
    className: "md:col-span-1",
    background: (
      <div className="absolute inset-0">
        <Image
          src="/images/storystep3a_sequence_of_4_highen.png"
          alt="Marketing y Branding"
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 dark:opacity-80"
          loading="lazy"
        />
      </div>
    ),
    href: "#contacto",
    cta: "Ver identidad",
  },
  {
    name: "Comunicación Digital",
    description: "Transformamos tu presencia online con desarrollo web y estrategias digitales.",
    Icon: Globe,
    className: "md:col-span-2",
    background: (
      <div className="absolute inset-0">
        <Image
          src="/images/storystep4a_sequence_of_4_highen.png"
          alt="Comunicación Digital"
          fill
          sizes="(max-width: 768px) 100vw, 66vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 dark:opacity-80"
          loading="lazy"
        />
      </div>
    ),
    href: "#contacto",
    cta: "Impulsar web",
  },
];

export default function Services() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <section id="servicios" className={cn("py-24 md:py-32 bg-transparent border-t overflow-hidden transition-colors duration-500", 
        isDark ? "border-white/5" : "border-black/5")}>
      <div className="container px-6 mx-auto">
        <SectionTitle
          title="¿Qué hacemos?"
          subtitle="Un ecosistema de soluciones integrales diseñadas para que tu marca brille con luz propia."
          light={isDark}
        />

        <div className="mt-16">
          <BentoGrid>
            {services.map((service) => (
              <BentoCard key={service.name} {...service} />
            ))}
          </BentoGrid>
        </div>
      </div>
    </section>
  );
}
