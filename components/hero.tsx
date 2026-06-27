import Image from "next/image"
import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/reveal"
import { CountUp } from "@/components/count-up"

export function Hero() {
  return (
    <section id="top" className="relative px-4 pt-28 sm:px-6 lg:pt-32"> 
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-12">
        <div className="flex flex-col">
          <Reveal>
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-primary">
              <Sparkles className="size-4 text-accent" />
              50 ans d'engagement en Suisse romande
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 text-pretty font-heading text-4xl font-bold leading-[1.05] text-primary sm:text-5xl lg:text-6xl">
              L'humanisme ne fait pas de différence entre les humains
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-foreground/70">
              Collaborons ensemble pour une différence qui compte. Une expertise
              industrielle de premier plan, au service d'une cause sociale
              noble : l'intégration professionnelle.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                render={<a href="/#entreprises" />}
                nativeButton={false}
                size="lg"
                className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90"
              >
                Nos prestations aux entreprises
                <ArrowRight className="size-4" />
              </Button>
              <Button
                render={<a href="#integration" />}
                nativeButton={false}
                size="lg"
                variant="outline"
                className="rounded-full border-primary/20 bg-transparent text-primary hover:bg-secondary"
              >
                Intégration sociale
              </Button>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-border pt-8">
              {[
                { value: 1100, suffix: "+", l: "collaborateurs" },
                { value: 10, suffix: "", l: "sites" },
                { value: 6, suffix: "", l: "certifications" },
              ].map((s) => (
                <div key={s.l}>
                  <dt className="font-heading text-3xl font-bold text-primary">
                    <CountUp value={s.value} suffix={s.suffix} />
                  </dt>
                  <dd className="mt-1 text-sm text-foreground/60">{s.l}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal delay={200} className="relative">
          <div className="relative overflow-hidden rounded-[2rem] shadow-2xl shadow-primary/10 ring-1 ring-border">
            <Image
              src="/hero-workshop.png"
              alt="Collaborateurs travaillant ensemble dans un atelier industriel moderne et lumineux de Polyval"
              width={20}
              height={1040}
              priority
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -left-3 hidden rounded-2xl bg-primary px-5 py-4 text-primary-foreground shadow-xl sm:block">
            <p className="font-heading text-2xl font-bold">+50</p>
            <p className="text-sm text-primary-foreground/75">ans d'activité</p>
          </div>
          </Reveal>
        </div>
    </section>
  )
}
