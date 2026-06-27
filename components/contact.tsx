import { Phone, Mail, MapPin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Contact() {
  return (
    <section id="contact" className="px-4 py-24 sm:px-6 lg:py-32">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-primary text-primary-foreground ring-1 ring-primary/20">
        <div className="grid gap-10 p-8 sm:p-12 lg:grid-cols-2 lg:gap-16 lg:p-16">
          <div>
            <h2 className="text-balance font-heading text-3xl font-bold sm:text-4xl lg:text-5xl">
              Des questions sur nos prestations ?
            </h2>
            <p className="mt-5 max-w-md text-pretty leading-relaxed text-primary-foreground/75">
              Parlons de votre projet industriel ou de votre parcours
              d&apos;intégration. Notre équipe vous répond avec attention.
            </p>

            <ul className="mt-10 flex flex-col gap-5">
              <li className="flex items-center gap-4">
                <span className="grid size-11 place-items-center rounded-xl bg-white/10">
                  <Phone className="size-5 text-accent" />
                </span>
                <a href="tel:+41216427070" className="text-lg hover:underline">
                  +41 21 642 70 70
                </a>
              </li>
              <li className="flex items-center gap-4">
                <span className="grid size-11 place-items-center rounded-xl bg-white/10">
                  <Mail className="size-5 text-accent" />
                </span>
                <a href="mailto:info@polyval.ch" className="text-lg hover:underline">
                  info@polyval.ch
                </a>
              </li>
              <li className="flex items-center gap-4">
                <span className="grid size-11 place-items-center rounded-xl bg-white/10">
                  <MapPin className="size-5 text-accent" />
                </span>
                <span className="text-lg">
                  Rte des Dragons 9, 1033 Cheseaux-sur-Lausanne
                </span>
              </li>
            </ul>
          </div>

          <form className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Nom" id="name" placeholder="Votre nom" />
              <Field
                label="Entreprise"
                id="company"
                placeholder="Votre entreprise"
              />
            </div>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <Field
                label="E-mail"
                id="email"
                type="email"
                placeholder="vous@exemple.ch"
              />
              <Field
                label="Téléphone"
                id="phone"
                type="tel"
                placeholder="+41 ..."
              />
            </div>
            <div className="mt-4 flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-medium">
                Votre message
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Décrivez votre besoin..."
                className="w-full rounded-xl border-0 bg-white/10 px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/40 ring-1 ring-white/15 focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
            <Button
              type="submit"
              size="lg"
              className="mt-5 w-full rounded-xl bg-accent text-accent-foreground hover:bg-accent/90"
            >
              Envoyer ma demande
              <ArrowRight className="size-4" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  id,
  type = "text",
  placeholder,
}: {
  label: string
  id: string
  type?: string
  placeholder?: string
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-medium">
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl border-0 bg-white/10 px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/40 ring-1 ring-white/15 focus:outline-none focus:ring-2 focus:ring-accent"
      />
    </div>
  )
}
