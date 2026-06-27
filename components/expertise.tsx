import Image from "next/image"
import {
  Package,
  Cog,
  Pill,
  Shirt,
  Boxes,
  Wrench,
  ArrowUpRight,
} from "lucide-react"

const services = [
  {
    icon: Package,
    title: "Cartonnage & Packaging",
    desc: "Fabrication, mise sous pli et solutions d'emballage sur mesure.",
  },
  {
    icon: Boxes,
    title: "Multiservice & Co-packing",
    desc: "Conditionnement, assemblage et logistique flexibles.",
  },
  {
    icon: Cog,
    title: "Mécanique de précision",
    desc: "Usinage et montage avec un parc de machines automatisées.",
  },
  {
    icon: Pill,
    title: "Conditionnement pharmaceutique",
    desc: "Process certifiés répondant aux exigences du secteur.",
  },
  {
    icon: Shirt,
    title: "Blanchisserie RABC",
    desc: "Traitement du linge selon les normes d'hygiène RABC.",
  },
  {
    icon: Wrench,
    title: "Solutions sur mesure",
    desc: "De la production en série aux commandes spécifiques.",
  },
]

export function Expertise() {
  return (
    <section id="entreprises" className="px-4 py-24 sm:px-6 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-end gap-6 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">
              Nos prestations aux entreprises
            </p>
            <h2 className="mt-3 text-balance font-heading text-3xl font-bold text-primary sm:text-4xl lg:text-5xl">
              Une expertise industrielle, un partenariat gagnant-gagnant
            </h2>
          </div>
          <p className="text-pretty leading-relaxed text-foreground/70">
            Nos ateliers modernes et nos parcs de machines automatisées
            répondent à une large gamme de besoins industriels — production en
            série comme commandes sur mesure. Chacune de vos demandes donne un
            sens à notre travail.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="relative h-full min-h-80 overflow-hidden rounded-[2rem] shadow-xl shadow-primary/10 ring-1 ring-border">
            <Image
              src="/expertise-precision.png"
              alt="Mains réalisant un assemblage mécanique de précision dans un atelier Polyval"
              width={720}
              height={900}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {services.map((s) => (
              <div
                key={s.title}
                className="group flex flex-col rounded-2xl bg-card p-6 ring-1 ring-border transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 hover:ring-primary/20"
              >
                <span className="grid size-11 place-items-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  <s.icon className="size-5" />
                </span>
                <h3 className="mt-4 font-heading text-lg font-semibold text-primary">
                  {s.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-foreground/65">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            En savoir plus sur nos services
            <ArrowUpRight className="size-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
