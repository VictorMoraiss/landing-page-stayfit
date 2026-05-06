"use client"

import { useEffect, useRef, useState } from "react"

const WHATSAPP_LINK = "https://wa.me/5511947916160?text=Olá! Gostaria de saber mais sobre a Stay Fit Academia."

function AnimatedCounter({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    requestAnimationFrame(animate)
  }, [isVisible, end, duration])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 grid-lines" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[150px] opacity-30" />
      <div className="grain-overlay" />
      
      {/* Diagonal Orange Accent */}
      <div className="absolute bottom-0 right-0 w-full h-32 bg-gradient-to-r from-transparent via-primary/10 to-primary/20 transform skew-y-3" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        <div className="text-center">
          {/* Main Headline */}
          <h1 className="animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <span className="block font-display text-[clamp(3rem,12vw,8rem)] leading-[0.9] text-foreground tracking-tight">
              MUDE SEU
            </span>
            <span className="block font-display text-[clamp(3.5rem,14vw,9rem)] leading-[0.9] text-primary italic tracking-tight">
              CORPO.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="mt-6 text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
            A academia perfeita no coração do Patriarca.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-semibold text-lg rounded-lg hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(255,94,0,0.5)] transition-all duration-200"
            >
              FALAR NO WHATSAPP
            </a>
            <a
              href="#planos"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border-2 border-foreground/20 text-foreground font-semibold text-lg rounded-lg hover:border-primary hover:text-primary transition-all duration-200"
            >
              VER PLANOS
            </a>
          </div>

          {/* Stats Row */}
          <div className="mt-16 grid grid-cols-3 gap-4 max-w-xl mx-auto animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div className="text-center">
              <div className="font-display text-3xl md:text-4xl text-primary">
                <AnimatedCounter end={13} />
              </div>
              <div className="text-muted-foreground text-sm mt-1">Modalidades</div>
            </div>
            <div className="text-center border-x border-border">
              <div className="font-display text-3xl md:text-4xl text-primary">
                <AnimatedCounter end={500} suffix="+" />
              </div>
              <div className="text-muted-foreground text-sm mt-1">Alunos</div>
            </div>
            <div className="text-center">
              <div className="font-display text-3xl md:text-4xl text-primary">
                <AnimatedCounter end={4} />
              </div>
              <div className="text-muted-foreground text-sm mt-1">Planos</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
