// app/offre_emploi/page.tsx

import { WorkshopHero } from "@/components/workshop/workshop-hero"
import { WorkshopEligibility } from "@/components/workshop/workshop-eligibility"
import { WorkshopBenefits } from "@/components/workshop/workshop-benefits"
import { WorkshopSites } from "@/components/workshop/workshop-sites"
import { WorkshopProcess } from "@/components/workshop/workshop-process"
import { WorkshopCTA } from "@/components/workshop/workshop-cta"
import { ContextSwitch } from "@/components/ui/context-switch"

export default function Page() {
  return (
    <>
      <WorkshopHero />
      <ContextSwitch
        label="Vous cherchez un accompagnement en atelier d'insertion ?"
        cta="Participer à un atelier"
        href="/participer-a-un-atelier" />
      <WorkshopEligibility />
      <WorkshopBenefits />
      <WorkshopSites />
      <WorkshopProcess />
      <WorkshopCTA />
    </>
  )
}



