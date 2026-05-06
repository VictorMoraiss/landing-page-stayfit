"use client"

const avaliacoes = [
  {
    name: "Amanda R.",
    initial: "A",
    quote: "Emagreci 12kg em 5 meses e hoje não consigo mais imaginar minha rotina sem academia. Professores incríveis!",
    stars: 5,
  },
  {
    name: "Lucas M.",
    initial: "L",
    quote: "Vim pelo Muay Thai e fiquei pelo ambiente incrível.A estrutua é ótima e os instrutores são super atenciosos.",
    stars: 5,
  },
  {
    name: "Carla P.",
    initial: "C",
    quote: "Faço Pilates e Fit Dance. e me apaixonei!Nunca pensei que ia gostar tanto de academia. Super recomendo.",
    stars: 5,
  },
]

function StarIcon() {
  return (
    <svg
      className="w-5 h-5 text-primary"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )
}

export function Avaliacoes() {
  return (
    <section id="avaliacoes" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-6xl text-foreground mb-4">
            O QUE DIZEM <span className="text-primary">NOSSOS ALUNOS</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Histórias reais de pessoas que transformaram suas vidas na Stay Fit.
          </p>
        </div>

        {/* Cards - Horizontal Scroll on Mobile */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-4 -mx-4 px-4 md:mx-0 md:px-0 md:grid md:grid-cols-3 md:overflow-visible scrollbar-hide">
          {avaliacoes.map((avaliacao, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[85%] md:w-auto snap-center bg-surface border border-border rounded-2xl p-6 relative"
            >
              {/* Orange Top Border */}
              <div className="absolute top-0 left-6 right-6 h-1 bg-primary rounded-b-full" />

              {/* Stars */}
              <div className="flex gap-1 mb-4 pt-2">
                {[...Array(avaliacao.stars)].map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground text-lg mb-6 leading-relaxed">
                {'"'}{avaliacao.quote}{'"'}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="font-display text-xl text-primary">{avaliacao.initial}</span>
                </div>
                <span className="text-muted-foreground font-medium">{avaliacao.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
