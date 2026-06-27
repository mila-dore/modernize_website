// components/workshop/workshop-sites.tsx

import { MapPin } from "lucide-react"

const sites = [
  {
    name: "Cheseaux-sur-Lausanne",
    activities: [
      "Blanchisserie industrielle",
      "Cartonnage / packaging",
      "Logistique",
      "Mécanique",
      "Restauration",
      "Multiservice",
    ],
  },
  {
    name: "Le Mont-sur-Lausanne",
    activities: [
      "Restauration",
      "Espaces verts",
      "Conciergerie",
      "Multiservice",
      "Menuiserie",
    ],
  },
  {
    name: "Vevey",
    activities: [
      "Cuisine",
      "Service en restauration",
      "Conciergerie",
      "Multiservice",
    ],
  },
  {
    name: "Yverdon-les-Bains",
    activities: [
      "Multiservice",
      "Cafétéria",
      "Logistique",
      "Conditionnement pharmaceutique",
    ],
  },
  {
    name: "Nyon",
    activities: [
      "Conditionnement pharmaceutique",
      "Conciergerie",
      "Chauffeur-livreur",
      "Production",
    ],
  },
  {
    name: "Leysin",
    activities: [
      "Fabrication de ressorts",
      "Mécanique",
    ],
  },
  {
    name: "Sainte-Croix",
    activities: [
      "Multiservice",
    ],
  },
  {
    name: "Le Sentier",
    activities: [
      "Multiservice",
      "Mécanique",
      "Atelier occupationnel",
    ],
  },
]

export function WorkshopSites() {
  return (
    <section id="ateliers" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">

        <h2 className="text-3xl font-bold text-primary">
          Nos ateliers
        </h2>

        <p className="mt-3 text-foreground/70">
          Nos ateliers sont répartis dans le canton de Vaud et proposent des activités adaptées à chaque site.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {sites.map((site) => (
            <div
              key={site.name}
              className="rounded-3xl bg-card p-6 ring-1 ring-border"
            >
              <div className="flex items-center gap-2 text-primary">
                <MapPin className="size-4" />
                <h3 className="font-semibold">
                  {site.name}
                </h3>
              </div>

              <ul className="mt-5 space-y-2 text-sm text-foreground/70">
                {site.activities.map((a) => (
                  <li key={a} className="flex gap-2">
                    <span className="text-primary">•</span>
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}