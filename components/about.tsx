"use client"

import { useEffect, useRef, useState } from "react"

function AnimatedCounter({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

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
    <div ref={ref} className="font-display text-[clamp(4rem,15vw,8rem)] text-primary leading-none">
      {count}
      {suffix}
    </div>
  )
}

const stats = [
  { value: 10, suffix: "+", label: "Modalidades" },
  { value: 4, suffix: "", label: "Planos" },
  { value: 500, suffix: "+", label: "Alunos" },
  { value: 100, suffix: "%", label: "Comprometidos" },
]

export function About() {
  return (
    <section id="sobre" className="py-20 md:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Counter */}
          <div className="text-center md:text-left">
            <AnimatedCounter end={500} suffix="+" />
            <p className="text-muted-foreground text-xl mt-2">Alunos transformados</p>
          </div>

          {/* Right - Content */}
          <div>
            <h2 className="font-display text-3xl md:text-5xl text-foreground mb-6 text-balance">
              Não é só uma academia.{" "}
              <span className="text-primary">É uma comunidade.</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              No coração da Cidade Patriarca, a Stay Fit Academia oferece 13 modalidades diferentes 
              para você alcançar seus objetivos. Desde musculação até artes marciais, de danças 
              animadas a treinos funcionais — aqui você encontra tudo que precisa para transformar 
              seu corpo e sua vida.
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-surface-2 border border-border rounded-xl p-6 text-center hover:border-primary/50 transition-colors"
            >
              <div className="font-display text-3xl md:text-4xl text-primary">
                {stat.value}
                {stat.suffix}
              </div>
              <div className="text-muted-foreground text-sm mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
