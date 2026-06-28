// components/prestations/services-highlights.tsx

import { LucideIcon } from "lucide-react"
import type { Service } from "@/data/services/types"

type HighlightItem = {
  icon: LucideIcon
  title: string
  description: string
}

type ServiceHighlightsProps = {
  data: NonNullable<Service["highlights"]>
}

export function ServiceHighlights({ data }: ServiceHighlightsProps) {
  return (
    <section className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">

        {data.title && (
          <h2 className="text-3xl font-bold text-primary sm:text-4xl">
            {data.title}
          </h2>
        )}

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.items.map((item, i) => {
            const Icon = item.icon

            return (
              <div
                key={i}
                className="group rounded-2xl bg-card p-6 ring-1 ring-border transition hover:-translate-y-1 hover:ring-primary/30"
              >
                <div className="flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-xl bg-secondary text-primary group-hover:bg-accent group-hover:text-accent-foreground">
                    <Icon className="size-5" />
                  </span>

                  <h3 className="font-semibold text-primary">
                    {item.title}
                  </h3>
                </div>

                <p className="mt-3 text-sm text-foreground/70">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}