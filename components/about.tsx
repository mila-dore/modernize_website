import { Users, MapPin, BadgeCheck, CalendarClock } from "lucide-react"

const stats = [
  { icon: Users, value: "1100+", label: "collaborateurs" },
  { icon: MapPin, value: "10", label: "sites en Suisse romande" },
  { icon: BadgeCheck, value: "6", label: "certifications" },
  { icon: CalendarClock, value: "+50", label: "ans d'activité" },
]

export function About() {
  return (
    <section id="apropos" className="scroll-mt-28 px-4 py-24 sm:px-6 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            À propos
          </p>
          <h2 className="mt-3 text-balance font-heading text-3xl font-bold text-primary sm:text-4xl lg:text-5xl">
            50 ans d&apos;engagement : services, industrie, inclusion
          </h2>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-foreground/70">
            La Fondation Polyval conjugue performance industrielle et mission
            sociale depuis un demi-siècle. Découvrez une organisation où chaque
            projet contribue à une cause qui compte.
          </p>
        </div>

        <dl className="mt-16 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-start rounded-2xl bg-card p-6 ring-1 ring-border sm:p-8"
            >
              <span className="grid size-11 place-items-center rounded-xl bg-secondary text-primary">
                <s.icon className="size-5" />
              </span>
              <dt className="mt-5 font-heading text-4xl font-bold text-primary sm:text-5xl">
                {s.value}
              </dt>
              <dd className="mt-1 text-sm text-foreground/60">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
