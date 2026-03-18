"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { useTheme } from "next-themes"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

export function NavBar({ items, className }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0].name)
  const [isMobile, setIsMobile] = useState(false)
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  if (!mounted) return null

  const isDark = resolvedTheme === "dark"

  return (
    <div
      className={cn(
        "fixed bottom-0 sm:top-0 left-1/2 -translate-x-1/2 z-50 mb-6 sm:pt-6",
        className,
      )}
    >
      <div className={cn(
        "flex items-center gap-3 backdrop-blur-lg py-1 px-1 rounded-full shadow-lg border transition-all duration-500",
        isDark 
          ? "bg-black/20 border-white/10 shadow-black/40" 
          : "bg-white/80 border-slate-200 shadow-slate-200/50"
      )}>
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name

          return (
            <Link
              key={item.name}
              href={item.url}
              onClick={() => setActiveTab(item.name)}
              className={cn(
                "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-all duration-300",
                isActive 
                  ? (isDark ? "text-dfc-gold bg-white/5" : "text-dfc-navy bg-black/5")
                  : (isDark ? "text-white/60 hover:text-white" : "text-slate-600 hover:text-slate-900")
              )}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={18} strokeWidth={2.5} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className={cn(
                    "absolute inset-0 w-full rounded-full -z-10",
                    isDark ? "bg-dfc-gold/10" : "bg-dfc-navy/5"
                  )}
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className={cn(
                    "absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 rounded-t-full",
                    isDark ? "bg-dfc-gold" : "bg-dfc-navy"
                  )}>
                    <div className={cn(
                      "absolute w-12 h-6 rounded-full blur-md -top-2 -left-2",
                      isDark ? "bg-dfc-gold/20" : "bg-dfc-navy/20"
                    )} />
                    <div className={cn(
                      "absolute w-8 h-6 rounded-full blur-md -top-1",
                      isDark ? "bg-dfc-gold/20" : "bg-dfc-navy/20"
                    )} />
                    <div className={cn(
                      "absolute w-4 h-4 rounded-full blur-sm top-0 left-2",
                      isDark ? "bg-dfc-gold/20" : "bg-dfc-navy/20"
                    )} />
                  </div>
                </motion.div>
              )}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
