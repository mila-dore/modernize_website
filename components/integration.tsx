import Image from "next/image"
import { HeartHandshake, Compass, GraduationCap, Check } from "lucide-react"

const points = [
  {
    icon: Compass,
    title: "Réadaptation & réinsertion",
    desc: "Des mesures concrètes pour retrouver un rythme et une voie professionnelle.",
  },
  {
    icon: GraduationCap,
    title: "Stages & formation pratique",
    desc: "Des stages en entreprise et des formations adaptées à votre parcours.",
  },
  {
    icon: HeartHandshake,
    title: "Accompagnement personnalisé",
    desc: "Un soutien collaboratif et bienveillant à chaque étape.",
  },
]

export function Integration() {
  return (
    <section
      id="integration"
      className="bg-primary px-4 py-24 text-primary-foreground sm:px-6 lg:py-32"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <div className="relative order-2 lg:order-1">
          <div className="overflow-hidden rounded-[2rem] shadow-2xl ring-1 ring-white/10">
            <Image
              src="/integration-support.png"
              alt="Un accompagnant et un stagiaire travaillant ensemble dans un espace de formation Polyval"
              width={820}
              height={760}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            Nos prestations d&apos;intégration sociale
          </p>
          <h2 className="mt-3 text-balance font-heading text-3xl font-bold sm:text-4xl lg:text-5xl">
            Trouvez votre voie professionnelle avec notre soutien
          </h2>
          <p className="mt-5 text-pretty leading-relaxed text-primary-foreground/75">
            Animés par des valeurs humanistes, nous vous accueillons dans nos
            ateliers adaptés pour reconsidérer votre avenir professionnel en
            toute sérénité. Votre future intégration est assurée par notre
            accompagnement, à chaque étape.
          </p>

          <ul className="mt-8 flex flex-col gap-4">
            {points.map((p) => (
              <li
                key={p.title}
                className="flex gap-4 rounded-2xl bg-white/5 p-5 ring-1 ring-white/10"
              >
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-accent text-accent-foreground">
                  <p.icon className="size-5" />
                </span>
                <div>
                  <h3 className="font-heading text-lg font-semibold">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-primary-foreground/70">
                    {p.desc}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-primary-foreground/80">
            {["Ateliers adaptés", "Coaching & stages", "Formation & apprentissage"].map(
              (item) => (
                <span key={item} className="inline-flex items-center gap-2">
                  <Check className="size-4 text-accent" />
                  {item}
                </span>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
