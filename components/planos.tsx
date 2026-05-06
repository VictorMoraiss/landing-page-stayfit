"use client"

const WHATSAPP_LINK = "https://wa.me/5511947916160?text=Olá! Gostaria de saber mais sobre o plano "

const planos = [
  {
    name: "Mensal",
    price: "R$ 195,00",
    period: "/mês",
    details: "+ R$ 49,00 matrícula",
    badge: null,
    featured: false,
  },
  {
    name: "Trimestral",
    price: "R$ 487,00",
    period: "em 2x",
    details: "ou R$ 460,00 à vista",
    badge: null,
    featured: false,
  },
  {
    name: "Semestral",
    price: "R$ 904,00",
    period: "em 4x",
    details: "ou R$ 860,00 à vista",
    badge: "Mais Escolhido",
    featured: true,
  },
  {
    name: "Anual",
    price: "R$ 1.548,00",
    period: "em 10x",
    details: "ou R$ 1.458,00 à vista",
    badge: "30 dias de férias",
    featured: false,
  },
]

export function Planos() {
  return (
    <section id="planos" className="py-20 md:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-6xl text-foreground mb-4">
            ESCOLHA SEU <span className="text-primary">PLANO</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Planos flexíveis que cabem no seu bolso. Todos com acesso a todas as modalidades.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {planos.map((plano, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-6 transition-all duration-300 ${
                plano.featured
                  ? "bg-surface-2 border-2 border-primary shadow-[0_0_40px_rgba(255,94,0,0.2)] scale-105 lg:scale-110"
                  : "bg-surface-2 border border-border hover:border-primary/50"
              }`}
            >
              {/* Badge */}
              {plano.badge && (
                <div
                  className={`absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-sm font-semibold ${
                    plano.featured
                      ? "bg-primary text-primary-foreground"
                      : "bg-primary/20 text-primary"
                  }`}
                >
                  {plano.badge}
                </div>
              )}

              {/* Content */}
              <div className="text-center pt-4">
                <h3 className="font-display text-2xl text-foreground mb-4">{plano.name}</h3>
                <div className="mb-2">
                  <span className="font-display text-4xl md:text-5xl text-foreground">{plano.price}</span>
                  <span className="text-muted-foreground ml-1">{plano.period}</span>
                </div>
                <p className="text-muted-foreground text-sm mb-6">{plano.details}</p>

                {/* Features */}
                <ul className="text-left text-muted-foreground text-sm mb-6 space-y-2">
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Acesso a todas as modalidades
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Avaliação física inclusa
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Acompanhamento profissional
                  </li>
                </ul>

                {/* CTA */}
                <a
                  href={`${WHATSAPP_LINK}${encodeURIComponent(plano.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full inline-flex items-center justify-center px-6 py-3 font-semibold rounded-lg transition-all duration-200 ${
                    plano.featured
                      ? "bg-primary text-primary-foreground hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(255,94,0,0.4)]"
                      : "bg-surface border border-border text-foreground hover:border-primary hover:text-primary"
                  }`}
                >
                  QUERO ESSE
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
