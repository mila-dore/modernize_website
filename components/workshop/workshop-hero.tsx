// components/workshop/workshop-hero.tsx

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function WorkshopHero() {
  return (
    <section className="px-4 pt-36 pb-24 sm:px-6">
      <div className="mx-auto max-w-6xl grid gap-10 lg:grid-cols-2 lg:items-center">
        
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            Participer à un atelier
          </p>

          <h1 className="mt-3 text-balance text-4xl font-bold text-primary sm:text-5xl">
            Une activité professionnelle adaptée à votre situation
          </h1>

          <p className="mt-5 text-lg text-foreground/70 leading-relaxed">
            Polyval propose des activités encadrées dans différents ateliers,
            permettant de développer des compétences dans un environnement
            inclusif et structuré.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            
            <Button render={<Link href="#ateliers" />} nativeButton={false}>
                Découvrir les ateliers
            </Button>

            <Button
                variant="outline"
                render={<Link href="/#contact" />}
                nativeButton={false}
                >
                Nous contacter
            </Button>
          </div>
        </div>

        <div className="relative h-80 overflow-hidden rounded-3xl ring-1 ring-border lg:h-[420px]">
            <Image
                src="/images/emplois_adaptes3.jpg"
                alt="Personne participant à un atelier Polyval"
                fill
                className="object-cover"
                priority
            />
        </div>
    </div>
    </section>
  )
}