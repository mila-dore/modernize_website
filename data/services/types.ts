// data/services/types.ts

import { LucideIcon } from "lucide-react"

export type ServiceHighlight = {
  icon: LucideIcon
  title: string
  description: string
}

export type ServiceProcessStep = {
  title: string
  description: string
}

export type ServiceEquipmentItem = {
  title: string
  description: string
}

export type Service = {
  slug: string

  hero: {
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

  intro?: {
    title: string
    description: string
    bullets?: string[]
    image?: string
  }

  highlights?: {
    title?: string
    items: ServiceHighlight[]
  }

  process?: {
    title?: string
    steps: ServiceProcessStep[]
  }

  equipment?: {
    title?: string
    introduction?: string
    items: ServiceEquipmentItem[]
  }

  cta?: {
    title?: string
    description?: string
    primary?: {
      label: string
      href: string
    }
    secondary?: {
      label: string
      href: string
    }
  }
}