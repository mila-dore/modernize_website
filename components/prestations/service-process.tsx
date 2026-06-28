import type { Service } from "@/data/services/types"

type ServiceProcessProps = {
  data: NonNullable<Service["process"]>
}

export function ServiceProcess({ data }: ServiceProcessProps) {
  return (
    <section className="px-4 py-20 sm:px-6 bg-secondary/30">
      <div className="mx-auto max-w-6xl">

        {data.title && (
          <h2 className="text-3xl font-bold text-primary sm:text-4xl">
            {data.title}
          </h2>
        )}

        <div className="mt-10 space-y-6">
          {data.steps.map((step, i) => (
            <div
              key={i}
              className="flex gap-5 rounded-2xl bg-card p-6 ring-1 ring-border"
            >
              {/* NUMBER */}
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-accent-foreground">
                {i + 1}
              </div>

              {/* CONTENT */}
              <div>
                <h3 className="font-semibold text-primary">
                  {step.title}
                </h3>
                <p className="mt-1 text-sm text-foreground/70">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}