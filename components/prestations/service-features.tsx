// components/prestations/service-features.tsx

import { cn } from "@/lib/utils"
import type { ServiceFeature } from "@/data/services/types"

type Props = {
  features: ServiceFeature[]
  className?: string
}

export function ServiceFeatures({ features, className }: Props) {
  return (
    <section className={cn("grid gap-6 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {features.map((feature) => (
        <div
          key={feature.title}
          className="group rounded-2xl bg-card p-6 ring-1 ring-border transition-all hover:-translate-y-1 hover:ring-primary/20 hover:shadow-lg"
        >
          <div className="flex flex-col gap-4">
            
            <div className="grid size-11 place-items-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
              <feature.icon className="size-5" />
            </div>

            <h3 className="text-lg font-semibold text-primary">
              {feature.title}
            </h3>

            <p className="text-sm leading-relaxed text-foreground/65">
              {feature.description}
            </p>
          </div>
        </div>
      ))}
    </section>
  )
}