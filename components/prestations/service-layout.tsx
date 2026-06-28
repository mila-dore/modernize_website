// components/prestations/service-layout.tsx

import { ReactNode } from "react"

type Props = {
  hero: ReactNode
  children: ReactNode
}

export function ServiceLayout({ hero, children }: Props) {
  return (
    <main className="flex flex-col">
      {/* HERO */}
      <div>{hero}</div>

      {/* CONTENT WRAPPER */}
      <div className="px-4 sm:px-6">
        <div className="mx-auto max-w-6xl py-20 space-y-24">
          {children}
        </div>
      </div>
    </main>
  )
}