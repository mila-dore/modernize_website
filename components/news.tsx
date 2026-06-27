import { ArrowUpRight, CalendarDays } from "lucide-react"

const news = [
  {
    date: "17 février 2026",
    tag: "Événement",
    title: "Journée Portes Ouvertes — Site de Nyon",
    excerpt:
      "Rendez-vous le lundi 11 mai 2026 de 10h à 15h pour découvrir nos ateliers de Nyon.",
  },
  {
    date: "4 décembre 2025",
    tag: "Formation",
    title: "Remise des attestations FPra à nos stagiaires",
    excerpt:
      "Cérémonie de remise d'attestation de fin de formation pratique FPra du 24 novembre 2025.",
  },
  {
    date: "11 septembre 2025",
    tag: "Distinction",
    title: "Swiss Award Packaging 2025 — Polyval nominée",
    excerpt:
      "Polyval termine sur le podium aux côtés de deux autres nominés du secteur.",
  },
  {
    date: "21 août 2025",
    tag: "Entreprises",
    title: "Offrez un « Coffret Gourmand »",
    excerpt:
      "Un voyage aux saveurs 100% vaudoises, à offrir à vos collaborateurs et partenaires.",
  },
  {
    date: "19 mai 2025",
    tag: "Reconnaissance",
    title: "Polyval reçoit le label Vaud Ambassadeur",
    excerpt:
      "Une reconnaissance de notre ancrage et de notre engagement dans le canton de Vaud.",
  },
  {
    date: "2 juillet 2025",
    tag: "Publication",
    title: "Rapport annuel 2024",
    excerpt:
      "Retour sur une année d'activité, de projets et d'impact social et industriel.",
  },
]

export function News() {
  return (
    <section id="actualites" className="bg-secondary/60 px-4 py-24 sm:px-6 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">
              Actualités
            </p>
            <h2 className="mt-3 text-balance font-heading text-3xl font-bold text-primary sm:text-4xl lg:text-5xl">
              Ce qui fait vivre Polyval
            </h2>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-card px-5 py-2.5 text-sm font-medium text-primary ring-1 ring-border transition-colors hover:bg-card/70"
          >
            Toutes les actualités
            <ArrowUpRight className="size-4" />
          </a>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {news.map((item) => (
            <article
              key={item.title}
              className="group flex flex-col rounded-2xl bg-card p-6 ring-1 ring-border transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-primary">
                  {item.tag}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs text-foreground/50">
                  <CalendarDays className="size-3.5" />
                  {item.date}
                </span>
              </div>
              <h3 className="mt-4 text-balance font-heading text-lg font-semibold leading-snug text-primary">
                {item.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-foreground/65">
                {item.excerpt}
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
                Lire plus
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
