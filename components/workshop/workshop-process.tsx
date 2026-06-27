import { PhoneCall, Building2, FileText, CheckCircle2 } from "lucide-react"

const steps = [
  {
    icon: PhoneCall,
    title: "Prise de contact",
    text: "Vous nous contactez par téléphone ou via le formulaire pour une première prise d'information.",
  },
  {
    icon: Building2,
    title: "Visite et rencontre",
    text: "Nous organisons une visite d’un atelier afin de découvrir l’environnement et les activités proposées.",
  },
  {
    icon: FileText,
    title: "Analyse du dossier",
    text: "Nous étudions votre situation avec les partenaires concernés (AI, ORP, services sociaux).",
  },
  {
    icon: CheckCircle2,
    title: "Début de l’activité",
    text: "Une fois la place validée, vous intégrez progressivement un atelier adapté à votre situation.",
  },
]

export function WorkshopProcess() {
  return (
    <section className="px-4 py-24 sm:px-6 bg-secondary/20">
      <div className="mx-auto max-w-6xl">

        <h2 className="text-3xl font-bold text-primary">
          Comment ça se passe ?
        </h2>

        <p className="mt-3 text-foreground/70">
          Le parcours d’intégration est simple, accompagné et progressif.
        </p>

        <div className="mt-12 grid gap-6 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative rounded-3xl bg-card p-6 ring-1 ring-border"
            >
              {/* numéro */}
              <div className="absolute -top-4 right-4 text-5xl font-bold text-primary/10">
                {String(index + 1).padStart(2, "0")}
              </div>

              <step.icon className="size-5 text-primary" />

              <h3 className="mt-4 font-semibold text-primary">
                {step.title}
              </h3>

              <p className="mt-2 text-sm text-foreground/70 leading-relaxed">
                {step.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}