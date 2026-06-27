// components/workshop/workshop-benefits.tsx

import {
  Coins,
  HeartHandshake,
  Users,
  TrendingUp,
  Smile,
  Sparkles,
} from "lucide-react"

const items = [
  { icon: Coins, title: "Activité rémunérée" },
  { icon: HeartHandshake, title: "Accompagnement personnalisé" },
  { icon: TrendingUp, title: "Développement des compétences" },
  { icon: Users, title: "Vie sociale et cadre structurant" },
  { icon: Smile, title: "Rythme adapté" },
  { icon: Sparkles, title: "Environnement inclusif" },
]

export function WorkshopBenefits() {
  return (
    <section className="px-4 py-24 sm:px-6 bg-secondary/20">
      <div className="mx-auto max-w-6xl">

        <h2 className="text-3xl font-bold text-primary">
          Pourquoi rejoindre un atelier ?
        </h2>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl bg-card p-6 ring-1 ring-border"
            >
              <item.icon className="size-5 text-primary" />
              <h3 className="mt-4 font-semibold text-primary">
                {item.title}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}