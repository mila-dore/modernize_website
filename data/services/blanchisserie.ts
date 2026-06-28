// data/services/blanchisserie.ts

import type { Service } from "./types"
import { ShieldCheck, Droplets, Clock } from "lucide-react"

export const blanchisserie: Service = {
  slug: "blanchisserie-rabc",

  hero: {
    eyebrow: "Prestations aux entreprises",
    title: "Blanchisserie professionnelle RABC",
    subtitle: "Hygiène, traçabilité et qualité industrielle",
    description:
      "Un service conforme aux normes RABC pour les secteurs exigeants comme la santé et l’hôtellerie.",
    image: "/images/blanchisserie.mp4",
    primaryCta: {
      label: "Nous contacter",
      href: "/#contact",
    },
    secondaryCta: {
      label: "Voir tous les services",
      href: "/#entreprises",
    },
  },

    intro: {
        title: "Un service industriel maîtrisé de bout en bout",
        description:
            "La blanchisserie RABC garantit un traitement du linge conforme aux normes d’hygiène les plus strictes pour les secteurs sensibles.",
        bullets: [
            "Traçabilité complète du linge",
            "Processus certifiés RABC",
            "Équipes formées aux normes sanitaires",
        ],
        image: "/images/blanchisserie.mp4",
    },

    highlights: {
        title: "Les atouts de notre blanchisserie",
        items: [
            {
            icon: ShieldCheck,
            title: "Normes RABC",
            description: "Respect strict des standards d’hygiène.",
            },
            {
            icon: Droplets,
            title: "Process maîtrisé",
            description: "Traçabilité complète du linge.",
            },
            {
            icon: Clock,
            title: "Délais fiables",
            description: "Organisation industrielle optimisée.",
            },
        ],
    },

    equipment: {
        title: "Des équipements adaptés aux exigences professionnelles",

        items: [
            {
            title: "Ligne de traitement conforme RABC",
            description:
                "Une organisation répondant aux exigences de la méthode RABC afin de garantir un traitement du linge conforme aux normes d'hygiène.",
            },
            {
            title: "Organisation en zones séparées",
            description:
                "Les flux de linge propre et de linge sale sont physiquement séparés afin de limiter tout risque de contamination croisée.",
            },
            {
            title: "Identification et traçabilité RFID",
            description:
                "Le marquage RFID permet d'assurer le suivi des textiles tout au long de leur cycle de traitement.",
            },
            {
            title: "Équipements industriels modernes",
            description:
                "Des installations professionnelles adaptées aux volumes des établissements de santé, des EMS, de l'hôtellerie et des entreprises.",
            },
            {
            title: "Contrôle qualité",
            description:
                "Chaque étape fait l'objet d'un contrôle afin de garantir une qualité constante avant la livraison.",
            },
         ],
    },

    process: {
        title: "Comment fonctionne notre service",
        steps: [
            {
            title: "Réception du linge",
            description: "Collecte et tri selon les catégories.",
            },
            {
            title: "Lavage industriel",
            description: "Traitement conforme aux normes RABC.",
            },
            {
            title: "Contrôle qualité",
            description: "Vérification avant livraison.",
            },
        ],
    },

    cta: {
        title: "Vous avez un besoin en blanchisserie industrielle ?",
        description:
            "Notre équipe vous accompagne pour définir une solution adaptée à vos contraintes.",
        primary: {
            label: "Nous contacter",
            href: "/#contact",
        },
        secondary: {
            label: "Voir tous les services",
            href: "/#entreprises",
        },
    },
}