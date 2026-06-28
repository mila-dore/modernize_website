// components/prestations/service-hero.tsx

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

type ServiceHeroProps = {
  eyebrow?: string
  title: string
  subtitle?: string
  description: string
  image: string

  primaryCta?: {
    label: string
    href: string
  }

  secondaryCta?: {
    label: string
    href: string
  }
}

export function ServiceHero({
  eyebrow = "Prestations aux entreprises",
  title,
  subtitle,
  description,
  image,
  primaryCta,
  secondaryCta,
}: ServiceHeroProps) {
  return (
    <section className="px-4 pt-36 pb-24 sm:px-6">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center">

        {/* TEXT */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            {eyebrow}
          </p>

          <h1 className="mt-3 text-4xl font-bold text-primary sm:text-5xl">
            {title}
          </h1>

          {subtitle && (
            <p className="mt-3 text-lg text-foreground/70">
              {subtitle}
            </p>
          )}

          <p className="mt-5 text-foreground/70 leading-relaxed">
            {description}
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-wrap gap-3">
            {primaryCta && (
            <Button
                render={<Link href={primaryCta.href} />}
                nativeButton={false}
            >
                {primaryCta.label}
                <ArrowRight className="ml-2 size-4" />
            </Button>
            )}

            {secondaryCta && (
            <Button
                variant="outline"
                render={<Link href={secondaryCta.href} />}
                nativeButton={false}
            >
                {secondaryCta.label}
            </Button>
            )}
          </div>
        </div>

        {/* IMAGE */}
          <div className="relative h-80 overflow-hidden rounded-3xl lg:h-[420px]">
            {image.endsWith(".mp4") ? (
              <video
                className="absolute inset-0 h-full w-full object-contain"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src={image} type="video/mp4" />
              </video>
            ) : (
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover"
                priority
              />
            )}
            {/* Overlay sombre global */}
            <div className="absolute inset-0 bg-black/15" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />

          </div>
      </div>
    </section>
  )
}