const partners = [
  "EMS",
  "Pharmalp",
  "AI VD",
  "CHUV",
  "Let's Go Fitness",
  "Realpac",
  "Ville de Lausanne",
  "État de Vaud",
]

export function Partners() {
  return (
    <section className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <p className="text-center text-sm font-semibold uppercase tracking-wider text-foreground/50">
          Ils nous font confiance
        </p>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {partners.map((name) => (
            <div
              key={name}
              className="flex h-20 items-center justify-center rounded-2xl bg-card px-4 ring-1 ring-border"
            >
              <span className="font-heading text-lg font-bold tracking-tight text-foreground/40">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
