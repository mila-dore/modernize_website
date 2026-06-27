import { ArrowRight } from "lucide-react"
import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"

const columns = [
  {
    title: "Prestations aux entreprises",
    links: [
      "Blanchisserie professionnelle RABC",
      "Cartonnage / Packaging",
      "Conditionnement pharmaceutique",
      "Espaces verts",
      "Mécanique générale",
      "Multiservice / Co-packing",
    ],
  },
  {
    title: "Intégration sociale",
    links: [
      "Ateliers adaptés",
      "Mesures de réadaptation & réinsertion",
      "Coaching & stages en entreprise",
      "Formation & apprentissage",
    ],
  },
  {
    title: "Liens utiles",
    links: ["E-Shop", "La Perle Bare", "Café Maongo", "Restaurants", "Le NPS"],
  },
]

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 rounded-3xl bg-white/5 p-8 ring-1 ring-white/10 lg:grid-cols-2 lg:items-center lg:p-10">
          <div>
            <h2 className="font-heading text-2xl font-bold sm:text-3xl">
              Newsletter
            </h2>
            <p className="mt-2 text-primary-foreground/75">
              Restez au courant de nos dernières actualités.
            </p>
          </div>
          <form className="flex flex-col gap-3 sm:flex-row">
            <label htmlFor="newsletter" className="sr-only">
              Votre e-mail
            </label>
            <input
              id="newsletter"
              type="email"
              placeholder="vous@exemple.ch"
              className="w-full rounded-xl border-0 bg-white/10 px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/40 ring-1 ring-white/15 focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <Button
              type="submit"
              className="shrink-0 rounded-xl bg-accent text-accent-foreground hover:bg-accent/90"
            >
              M&apos;inscrire
              <ArrowRight className="size-4" />
            </Button>
          </form>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div>
            <Logo className="[&_span:last-child]:text-primary-foreground [&_span:first-child]:bg-primary-foreground [&_span:first-child]:text-primary" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-primary-foreground/65">
              Fondation Polyval — 50 ans d&apos;engagement pour l&apos;industrie
              et l&apos;inclusion en Suisse romande.
            </p>
            <p className="mt-4 text-sm text-primary-foreground/65">
              Rte des Dragons 9
              <br />
              1033 Cheseaux-sur-Lausanne
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-primary-foreground/90">
                {col.title}
              </h3>
              <ul className="mt-4 flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-primary-foreground/65 transition-colors hover:text-primary-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-primary-foreground/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Fondation Polyval. Tous droits réservés.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-primary-foreground">
              Politique de confidentialité
            </a>
            <a href="#" className="transition-colors hover:text-primary-foreground">
              Conditions générales
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
