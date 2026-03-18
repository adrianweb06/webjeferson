"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from '@/components/ui/card'
import { Shield, Users, Zap, Award } from 'lucide-react'
import SectionTitle from "./ui/SectionTitle";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

export default function About() {
    const { resolvedTheme } = useTheme();
    const isDark = resolvedTheme === "dark";

    return (
        <section id="nosotros" className={cn("bg-transparent py-16 sm:py-24 md:py-32 overflow-hidden border-t transition-colors duration-500", 
            isDark ? "border-white/5" : "border-black/5")}>
            <div className="container mx-auto px-6">
                <SectionTitle 
                    title="¿Quiénes somos?" 
                    subtitle="Un equipo de profesionales multidisciplinarios dedicados a potencializar tu marca a través de soluciones integrales en comunicación y publicidad."
                />
                
                <div className="mx-auto max-w-3xl lg:max-w-6xl mt-10 sm:mt-16">
                    <div className="relative">
                        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 sm:gap-6">
                            {/* Card 1: 100% Commitment */}
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="sm:col-span-2 lg:col-span-2"
                            >
                                <Card className={cn("relative h-full flex overflow-hidden border transition-all duration-500 backdrop-blur-md", 
                                    isDark ? "bg-white/5 border-white/10" : "bg-white/80 border-slate-200 shadow-sm shadow-black/5")}>
                                    <CardContent className="relative m-auto size-fit py-10 sm:pt-12 flex flex-col items-center">
                                        <div className="relative flex h-20 sm:h-24 w-48 sm:w-56 items-center">
                                            <svg className={cn("absolute inset-0 size-full transition-colors", isDark ? "text-dfc-gold/20" : "text-dfc-gold/40")} viewBox="0 0 254 104" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M112.891 97.7022C140.366 97.0802 171.004 94.6715 201.087 87.5116C210.43 85.2881 219.615 82.6412 228.284 78.2473C232.198 76.3179 235.905 73.9942 239.348 71.3124C241.85 69.2557 243.954 66.7571 245.555 63.9408C249.34 57.3235 248.281 50.5341 242.498 45.6109C239.033 42.7237 235.228 40.2703 231.169 38.3054C219.443 32.7209 207.141 28.4382 194.482 25.534C184.013 23.1927 173.358 21.7755 162.64 21.2989C161.376 21.3512 160.113 21.181 158.908 20.796C158.034 20.399 156.857 19.1682 156.962 18.4535C157.115 17.8927 157.381 17.3689 157.743 16.9139C158.104 16.4588 158.555 16.0821 159.067 15.8066C160.14 15.4683 161.274 15.3733 162.389 15.5286C179.805 15.3566 196.626 18.8373 212.998 24.462C220.978 27.2494 228.798 30.4747 236.423 34.1232C240.476 36.1159 244.202 38.7131 247.474 41.8258C254.342 48.2578 255.745 56.9397 251.841 65.4892C249.793 69.8582 246.736 73.6777 242.921 76.6327C236.224 82.0192 228.522 85.4602 220.502 88.2924C205.017 93.7847 188.964 96.9081 172.738 99.2109C153.442 101.949 133.993 103.478 114.506 103.79C91.1468 104.161 67.9334 102.97 45.1169 97.5831C36.0094 95.5616 27.2626 92.1655 19.1771 87.5116C13.839 84.5746 9.1557 80.5802 5.41318 75.7725C-0.54238 67.7259 -1.13794 59.1763 3.25594 50.2827C5.82447 45.3918 9.29572 41.0315 13.4863 37.4319C24.2989 27.5721 37.0438 20.9681 50.5431 15.7272C68.1451 8.8849 86.4883 5.1395 105.175 2.83669C129.045 0.0992292 153.151 0.134761 177.013 2.94256C197.672 5.23215 218.04 9.01724 237.588 16.3889C240.089 17.3418 242.498 18.5197 244.933 19.6446C246.627 20.4387 247.725 21.6695 246.997 23.615C246.455 25.1105 244.814 25.5605 242.63 24.5811C230.322 18.9961 217.233 16.1904 204.117 13.4376C188.761 10.3438 173.2 8.36665 157.558 7.52174C129.914 5.70776 102.154 8.06792 75.2124 14.5228C60.6177 17.8788 46.5758 23.2977 33.5102 30.6161C26.6595 34.3329 20.4123 39.0673 14.9818 44.658C12.9433 46.8071 11.1336 49.1622 9.58207 51.6855C4.87056 59.5336 5.61172 67.2494 11.9246 73.7608C15.2064 77.0494 18.8775 103.79"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                            <span className="mx-auto block w-fit text-5xl sm:text-6xl font-display font-black text-dfc-gold">100%</span>
                                        </div>
                                        <h3 className={cn("mt-6 sm:mt-8 text-center text-xl sm:text-2xl font-display font-bold transition-colors duration-500", isDark ? "text-white" : "text-slate-900")}>Compromiso</h3>
                                        <p className={cn("text-center text-xs sm:text-sm mt-2 transition-colors duration-500", isDark ? "text-white/60" : "text-slate-600")}>Dedicación total a tu éxito.</p>
                                    </CardContent>
                                </Card>
                            </motion.div>

                            {/* Card 2: Strategic Shield */}
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="sm:col-span-1 lg:col-span-2"
                            >
                                <Card className={cn("relative h-full overflow-hidden border transition-all duration-500 backdrop-blur-md", 
                                    isDark ? "bg-white/5 border-white/10" : "bg-white/80 border-slate-200 shadow-sm shadow-black/5")}>
                                    <CardContent className="py-10 sm:pt-12">
                                        <div className="relative mx-auto flex aspect-square size-24 sm:size-32 rounded-full border border-dfc-teal/20 before:absolute before:-inset-2 before:rounded-full before:border before:border-dfc-teal/10">
                                            <Shield className="m-auto size-10 sm:size-12 text-dfc-teal" strokeWidth={1.5} />
                                        </div>
                                        <div className="relative z-10 mt-6 sm:mt-8 space-y-2 text-center">
                                            <h3 className={cn("text-lg sm:text-xl font-display font-bold transition-colors duration-500", isDark ? "text-white" : "text-slate-900")}>Estrategia Segura</h3>
                                            <p className={cn("text-xs sm:text-sm transition-colors duration-500", isDark ? "text-white/60" : "text-slate-600")}>Protegemos y fortalecemos tu reputación corporativa con diagnósticos precisos.</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>

                            {/* Card 3: Zap Animation */}
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="sm:col-span-1 lg:col-span-2"
                            >
                                <Card className={cn("relative h-full overflow-hidden border transition-all duration-500 backdrop-blur-md", 
                                    isDark ? "bg-white/5 border-white/10" : "bg-white/80 border-slate-200 shadow-sm shadow-black/5")}>
                                    <CardContent className="py-10 sm:pt-12 px-6">
                                        <div className="flex flex-col items-center">
                                            <div className="w-full h-24 sm:h-32 flex items-center justify-center">
                                                <Zap className="size-12 sm:size-16 text-dfc-gold animate-pulse" />
                                            </div>
                                            <div className="relative z-10 mt-4 space-y-2 text-center">
                                                <h3 className={cn("text-lg sm:text-xl font-display font-bold transition-colors duration-500", isDark ? "text-white" : "text-slate-900")}>Resultados Reales</h3>
                                                <p className={cn("text-xs sm:text-sm transition-colors duration-500", isDark ? "text-white/60" : "text-slate-600")}>Acompañamiento en tiempo real para decisiones basadas en datos y métricas.</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>

                            {/* Card 4: Multidisciplinary Team */}
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="sm:col-span-2 lg:col-span-3"
                            >
                                <Card className={cn("relative h-full overflow-hidden border transition-all duration-500 backdrop-blur-md", 
                                    isDark ? "bg-white/5 border-white/10" : "bg-white/80 border-slate-200 shadow-sm shadow-black/5")}>
                                    <CardContent className="grid py-10 sm:pt-12 sm:grid-cols-2 h-full">
                                        <div className="relative z-10 flex flex-col justify-between space-y-6 sm:space-y-8">
                                            <div className={cn("relative flex aspect-square size-12 sm:size-14 rounded-2xl border transition-colors", isDark ? "bg-dfc-navy border-white/10" : "bg-dfc-navy border-black/5")}>
                                                <Users className="m-auto size-6 sm:size-7 text-white" strokeWidth={1.5} />
                                            </div>
                                            <div className="space-y-3">
                                                <h3 className={cn("text-xl sm:text-2xl font-display font-bold transition-colors duration-500", isDark ? "text-white" : "text-slate-900")}>Equipo Experto</h3>
                                                <p className={cn("text-xs sm:text-sm transition-colors duration-500", isDark ? "text-white/60" : "text-slate-600")}>Somos generadores de experiencias memorables y resultados medibles en Cali.</p>
                                            </div>
                                        </div>
                                        <div className="relative mt-8 sm:mt-0 sm:ml-6 flex items-center justify-center">
                                            <div className="grid grid-cols-2 gap-2">
                                                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-dfc-gold/10 flex items-center justify-center border border-dfc-gold/20">
                                                    <Award className="text-dfc-gold size-6 sm:size-8" />
                                                </div>
                                                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-dfc-teal/10 flex items-center justify-center border border-dfc-teal/20">
                                                    <Users className="text-dfc-teal size-6 sm:size-8" />
                                                </div>
                                                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-dfc-sky/10 flex items-center justify-center border border-dfc-sky/20">
                                                    <Zap className="text-dfc-sky size-6 sm:size-8" />
                                                </div>
                                                <div className={cn("w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center border transition-colors", isDark ? "bg-white/5 border-white/10" : "bg-slate-50 border-slate-200")}>
                                                    <Shield className={cn("size-6 sm:size-8 opacity-50 transition-colors", isDark ? "text-white" : "text-slate-900")} />
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>

                            {/* Final Text Block */}
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                className="sm:col-span-2 lg:col-span-3 flex items-center"
                            >
                                <div className="py-8 sm:p-12">
                                    <p className={cn("text-lg sm:text-xl font-display font-medium leading-relaxed italic transition-colors duration-500", isDark ? "text-white/90" : "text-slate-800")}>
                                        "Nos enfocamos en diseñar estrategias creativas que fortalezcan su identidad, adaptándola a las exigencias del mercado actual con procesos innovadores."
                                    </p>
                                    <div className="mt-6 flex items-center gap-4">
                                        <div className="h-px w-8 sm:w-12 bg-dfc-gold" />
                                        <span className={cn("text-[10px] sm:text-sm font-bold uppercase tracking-widest transition-colors duration-500", isDark ? "text-white/40" : "text-slate-400")}>DFC Group Team</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
