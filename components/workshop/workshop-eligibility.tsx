// components/workshop/workshop-eliigibility.tsx

import { Users, BadgeCheck, Clock, Heart } from "lucide-react"

const items = [
  {
    icon: Users,
    title: "Être majeur",
    text: "Avoir 18 ans ou plus.",
  },
  {
    icon: BadgeCheck,
    title: "Mesure AI",
    text: "Bénéficier d’une mesure de l’assurance-invalidité.",
  },
  {
    icon: Clock,
    title: "Disponibilité",
    text: "Pouvoir travailler à partir de 50%.",
  },
  {
    icon: Heart,
    title: "Motivation",
    text: "Souhaiter intégrer une activité encadrée.",
  },
]

export function WorkshopEligibility() {
  return (
    <section className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">

        <h2 className="text-3xl font-bold text-primary">
          Est-ce fait pour moi ?
        </h2>

        <p className="mt-3 text-foreground/70">
          Quelques critères simples permettent de rejoindre un atelier.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl bg-card p-6 ring-1 ring-border"
            >
              <item.icon className="size-5 text-primary" />
              <h3 className="mt-4 font-semibold text-primary">
                {item.title}
              </h3>
              <p className="mt-1 text-sm text-foreground/70">
                {item.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}