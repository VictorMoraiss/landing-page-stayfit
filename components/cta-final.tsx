const WHATSAPP_LINK = "https://wa.me/5511947916160?text=Olá! Gostaria de saber mais sobre a Stay Fit Academia."

export function CTAFinal() {
  return (
    <section className="py-20 md:py-24 bg-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display text-4xl md:text-6xl text-primary-foreground mb-8">
          PRONTO PARA COMEÇAR?
        </h2>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-10 py-4 bg-background text-foreground font-semibold text-lg rounded-lg hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(0,0,0,0.3)] transition-all duration-200"
        >
          FALAR NO WHATSAPP
        </a>
      </div>
    </section>
  )
}
