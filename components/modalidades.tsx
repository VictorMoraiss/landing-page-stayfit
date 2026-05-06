"use client"

const modalidades = [
  {
    name: "Fit Dance",
    image: "https://images.pexels.com/photos/7894541/pexels-photo-7894541.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    name: "Musculação",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80",
  },
  {
    name: "Spinning",
    image: "https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    name: "Pilates",
    image: "https://images.pexels.com/photos/3768593/pexels-photo-3768593.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Ritmos",
    image: "https://pratiquefitness.com.br/wp-content/uploads/2019/02/Aula-de-ritmos-em-academia-3.jpg",
  },
  {
    name: "CrossFit",
    image: "https://images.pexels.com/photos/6389075/pexels-photo-6389075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Jiu-Jitsu",
    image: "https://images.pexels.com/photos/8611422/pexels-photo-8611422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Jump",
    image: "https://www.acessoriosparaacademia.com.br/blog/wp-content/uploads/2021/01/As-10-principais-d%C3%BAvidas-sobre-mini-jump.png",
  },
  {
    name: "Muay Thai",
    image: "https://images.pexels.com/photos/5424531/pexels-photo-5424531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Sertanejo",
    image: "https://images.pexels.com/photos/6339345/pexels-photo-6339345.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    name: "Alongamento",
    image: "https://images.pexels.com/photos/9004779/pexels-photo-9004779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Step",
    image: "https://images.pexels.com/photos/13896897/pexels-photo-13896897.jpeg?cs=srgb&dl=pexels-jonathanborba-13896897.jpg&fm=jpg",
  },
  {
    name: "Cross Light",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&q=80",
  },
]

export function Modalidades() {
  return (
    <section id="modalidades" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-6xl text-foreground mb-4">
            NOSSAS <span className="text-primary">MODALIDADES</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            13 modalidades para você escolher e transformar seu corpo do jeito que você quiser.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {modalidades.map((modalidade, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-surface border border-border hover:border-primary transition-all duration-300 cursor-pointer"
            >
              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={modalidade.image}
                  alt={modalidade.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              </div>

              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="font-display text-lg md:text-xl text-foreground group-hover:text-primary transition-colors">
                  {modalidade.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
