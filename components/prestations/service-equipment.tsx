// components/prestations/service-equipment.tsx

import { Cog } from "lucide-react"
import type { Service } from "@/data/services/types"

type ServiceEquipmentProps = {
  data: NonNullable<Service["equipment"]>
}

export function ServiceEquipment({ data }: ServiceEquipmentProps) {
  return (
    <section>

      <div className="max-w-3xl">

        {data.title && (
          <h2 className="text-3xl font-bold text-primary sm:text-4xl">
            {data.title}
          </h2>
        )}

        {data.introduction && (
          <p className="mt-4 text-foreground/70 leading-relaxed">
            {data.introduction}
          </p>
        )}

      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">

        {data.items.map((item, index) => (
          <article
            key={index}
            className="rounded-2xl border border-border bg-card p-6 transition hover:border-primary/40 hover:shadow-sm"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-primary">
              <Cog className="h-6 w-6" />
            </div>

            <h3 className="text-lg font-semibold text-primary">
              {item.title}
            </h3>

            <p className="mt-3 text-sm leading-7 text-foreground/70">
              {item.description}
            </p>

          </article>
        ))}

      </div>

    </section>
  )
}