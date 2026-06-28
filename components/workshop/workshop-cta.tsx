// components/workshop/workshop-cta.tsx

import { Button } from "@/components/ui/button"
import { Mail, Phone } from "lucide-react"
import Link from "next/link"

export function WorkshopCTA() {
  return (
    <section className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-4xl">

        <div className="rounded-3xl bg-accent/10 ring-1 ring-border p-10 text-center">

          <h2 className="text-3xl font-bold text-primary">
            Une question sur les ateliers ?
          </h2>

          <p className="mt-4 text-foreground/70 text-lg leading-relaxed">
            Notre équipe est disponible pour vous informer sur les conditions
            d’admission, les ateliers disponibles et les démarches à suivre.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">

            <Button
                render={<a href="tel:+41216427070" />}
                nativeButton={false}
                className="gap-2"
                >
                <Phone className="size-4" />
                Nous appeler
            </Button>

            <Button variant="outline" className="gap-2">
              <Mail className="size-4" />
              <Link href="/#contact">
                Nous contacter
              </Link>
            </Button>

          </div>

          <p className="mt-6 text-sm text-foreground/60">
            Réponse rapide • Accompagnement personnalisé • Sans engagement
          </p>

        </div>

      </div>
    </section>
  )
}