// app/participer-a-un-atelier/page.tsx

import { WorkshopHero } from "@/components/workshop/workshop-hero"
import { WorkshopEligibility } from "@/components/workshop/workshop-eligibility"
import { WorkshopBenefits } from "@/components/workshop/workshop-benefits"
import { WorkshopSites } from "@/components/workshop/workshop-sites"
import { WorkshopProcess } from "@/components/workshop/workshop-process"
import { WorkshopCTA } from "@/components/workshop/workshop-cta"
import { ContextSwitch } from "@/components/ui/context-switch"
// import Image from "next/image"

export default function Page() {
  return (
    <>

      <WorkshopHero />
      <ContextSwitch
          label="Vous cherchez un emploi ou un stage ?"
          cta="Voir les offres d'emploi"
          href="/offres-emploi" />
      <WorkshopEligibility />
      <WorkshopBenefits />
      <WorkshopSites />
      <WorkshopProcess />
      <WorkshopCTA />
    </>
  )
}

