// components/prestations/service-introduction.ts

// import Image from "next/image"
import { Check } from "lucide-react"
import type { Service } from "@/data/services/types"

type ServiceIntroProps = {
  data: NonNullable<Service["intro"]>
}

export function ServiceIntro({ data }: ServiceIntroProps) {
  return (
    <section className="px-4 py-20 sm:px-6">
    <div className="mx-auto max-w-6xl">
        
        <div className="max-w-3xl">
        <h2 className="text-3xl font-bold text-primary sm:text-4xl">
            {data.title}
        </h2>

        <p className="mt-4 text-foreground/70 leading-relaxed">
            {data.description}
        </p>

        {data.bullets && (
            <ul className="mt-6 space-y-3">
            {data.bullets.map((item, i) => (
                <li key={i} className="flex gap-2 text-foreground/80">
                <Check className="mt-1 size-4 text-accent" />
                {item}
                </li>
            ))}
            </ul>
        )}
        </div>

    </div>
    </section>
  )
}