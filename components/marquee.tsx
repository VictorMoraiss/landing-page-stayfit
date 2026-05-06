const modalidades = [
  "FIT DANCE",
  "MUSCULAÇÃO",
  "SPINNING",
  "PILATES",
  "RITMOS",
  "CROSSFIT",
  "JIU-JITSU",
  "JUMP",
  "MUAY THAI",
  "SERTANEJO",
  "ALONGAMENTO",
  "STEP",
  "CROSS LIGHT",
]

export function Marquee() {
  return (
    <section className="bg-primary py-4 overflow-hidden">
      <div className="flex animate-marquee">
        {[...modalidades, ...modalidades].map((item, index) => (
          <span
            key={index}
            className="flex items-center text-primary-foreground font-semibold text-lg md:text-xl whitespace-nowrap"
          >
            {item}
            <span className="mx-6 text-primary-foreground/50">•</span>
          </span>
        ))}
      </div>
    </section>
  )
}
