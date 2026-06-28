import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Service } from "@/data/services/types"

type ServiceCTAProps = {
  data: NonNullable<Service["cta"]>
}

export function ServiceCTA({ data }: ServiceCTAProps) {
  return (
    <section className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-4xl">

        <div className="rounded-3xl bg-primary px-6 py-14 text-center text-primary-foreground shadow-xl">

          {data.title && (
            <h2 className="text-3xl font-bold sm:text-4xl">
              {data.title}
            </h2>
          )}

          {data.description && (
            <p className="mt-4 text-primary-foreground/80">
              {data.description}
            </p>
          )}

          <div className="mt-8 flex flex-wrap justify-center gap-3">

            {data.primary && (
              <Button
                  render={<Link href={data.primary.href} />}
                  nativeButton={false}
                >
                  {data.primary.label}
                  <ArrowRight className="ml-2 size-4" />
              </Button>
            )}

            {data.secondary && (
              <Button
                variant="outline"
                render={<Link href={data.secondary.href} />}
                nativeButton={false}
              >
                {data.secondary.label}
              </Button>
            )}

          </div>

        </div>

      </div>
    </section>
  )
}