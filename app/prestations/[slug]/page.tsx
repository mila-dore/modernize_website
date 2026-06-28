import { notFound } from "next/navigation"

import { ServiceHero } from "@/components/prestations/service-hero"
import { ServiceIntro } from "@/components/prestations/service-intro"
import { ServiceHighlights } from "@/components/prestations/service-highlights"
import { ServiceProcess } from "@/components/prestations/service-process"
import { ServiceCTA } from "@/components/prestations/service-cta"

// services
import { blanchisserie } from "@/data/services/blanchisserie"

const services = {
  [blanchisserie.slug]: blanchisserie,
}

export default function ServicePage({
  params,
}: {
  params: { slug: string }
}) {
  const service = services[params.slug]

  if (!service) {
    return notFound()
  }

  return (
    <main>

      {/* HERO */}
      <ServiceHero {...service.hero} />

      {/* INTRO */}
      {service.intro && (
        <ServiceIntro data={service.intro} />
      )}

      {/* HIGHLIGHTS */}
      {service.highlights && (
        <ServiceHighlights data={service.highlights} />
      )}

      {/* PROCESS */}
      {service.process && (
        <ServiceProcess data={service.process} />
      )}

      {/* CTA */}
      {service.cta && (
        <ServiceCTA data={service.cta} />
      )}

    </main>
  )
}