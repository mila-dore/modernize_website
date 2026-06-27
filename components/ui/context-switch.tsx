//components/ui/context-switch.tsx

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

type ContextSwitchProps = {
  label: string
  cta: string
  href: string
  className?: string
}

export function ContextSwitch({
  label,
  cta,
  href,
  className,
}: ContextSwitchProps) {
  return (
    <div
    className={cn(
    "mx-auto mt-8 flex max-w-2xl items-center justify-between rounded-2xl border border-border bg-card px-5 py-4",
    className,
      // className={cn(
      //   "mt-6 flex items-center justify-between rounded-2xl border border-border bg-card px-5 py-4",
      //   className,
      )}
    >
      <p className="text-sm text-foreground/70">{label}</p>

      <Link
        href={href}
        className="flex items-center gap-2 text-sm font-medium text-primary hover:underline"
      >
        {cta}
        <ArrowRight className="size-4" />
      </Link>
    </div>
  )
}