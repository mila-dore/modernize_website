// app/prestations/blanchisserie/page.tsx

import { ServiceLayout } from "@/components/prestations/service-layout"
import { ServiceHero } from "@/components/prestations/service-hero"
import { ServiceIntro } from "@/components/prestations/service-introduction"
import { ServiceHighlights } from "@/components/prestations/service-highlights"
import { ServiceEquipment } from "@/components/prestations/service-equipment"
import { ServiceProcess } from "@/components/prestations/service-process"
import { ServiceCTA } from "@/components/prestations/service-cta"
import { blanchisserie } from "@/data/services/blanchisserie"


export default function Page() {
  return (
    <ServiceLayout hero={<ServiceHero {...blanchisserie.hero} />}>
      {blanchisserie.intro && (
        <ServiceIntro data={blanchisserie.intro} />
      )}

      {blanchisserie.highlights && (
        <ServiceHighlights data={blanchisserie.highlights} />
      )}

      {blanchisserie.process && (
        <ServiceProcess data={blanchisserie.process} />
      )}

      {/* ServiceEquipment */}
      {blanchisserie.equipment && (
        <ServiceEquipment data={blanchisserie.equipment} />
      )}

      {/* ServiceGallery */}

      {/* ServiceAvailability */}

      {/* ServiceCertifications */}

      {/* ServiceTestimonials */}

      {/* ServiceFAQ */}

      {blanchisserie.cta && (
        <ServiceCTA data={blanchisserie.cta} />
      )}
    </ServiceLayout>
  )
}