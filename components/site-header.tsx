"use client"

// import Link from "next/Link"
import { useEffect, useState } from "react"
import { ChevronDown, Menu, X } from "lucide-react"
import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { NavLink } from "@/components/navlink"
import { cn } from "@/lib/utils"

const navItems = [
  { label: "À propos", href: "/#apropos" },

  
  {
    label: "Nos prestations",
      children: [
        {
          label: "Services aux entreprises",
          href: "/#entreprises",
        },
        {
          label: "Intégration sociale",
          href: "/#integration",
        },
      ],
  },

  {
    label: "Travailler avec nous",
      children: [
        {
          label: "Participer à un atelier",
          href: "/participer-a-un-atelier",
        },
        {
          label: "Offres d'emploi et stages",
          href: "/offres-emploi",
        },
      ],
  },

  { label: "Nos soutiens", href: "/#soutiens" },
  { label: "Actualités", href: "/#actualites" },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // const isAnchor = (href: string) => href.startsWith("/#")

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:px-6">
      <div
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-300 sm:px-5",
          scrolled
            ? "bg-card/85 shadow-lg shadow-primary/5 backdrop-blur-md ring-1 ring-border"
            : "bg-transparent",
        )}
      >
        <a href="/#top" aria-label="Polyval, accueil">
          <Logo />
        </a>

      {/* Desktop */}
      <nav
        className="hidden items-center gap-1 lg:flex"
        aria-label="Navigation principale"
      >
        {navItems.map((item) =>
          item.children ? (
            <div key={item.label} className="relative group">
              <button
                type="button"
                className="flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-primary"
              >
                {item.label}
                <ChevronDown className="size-4" />
              </button>

              <div
                className="
                  invisible absolute left-0 top-full mt-2 w-64
                  rounded-xl bg-card p-2 shadow-xl ring-1 ring-border
                  opacity-0 transition-all duration-200
                  group-hover:visible
                  group-hover:opacity-100
                "
              >
                {item.children.map((child) => (
                  <NavLink
                    key={child.href}
                    href={child.href}
                    className="block rounded-lg px-3 py-2 text-sm text-foreground/80 transition-colors hover:bg-secondary hover:text-primary"
                  >
                    {child.label}
                  </NavLink>
                ))}
              </div>
            </div>
          ) : (
            <NavLink
              key={item.href}
              href={item.href}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-primary"
            >
              {item.label}
            </NavLink>
          )
        )}
      </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <ThemeToggle />

          <Button
            render={<a href="/#contact" />}
            nativeButton={false}
            className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90"
          >
            Nous contacter
          </Button>
        </div>

      {/* Mobile */}
      <div className="flex items-center gap-2 lg:hidden">
        <ThemeToggle />

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="grid size-10 place-items-center rounded-xl text-primary ring-1 ring-border"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="mx-auto mt-2 max-w-6xl rounded-2xl bg-card p-3 shadow-xl ring-1 ring-border lg:hidden">
          <nav className="flex flex-col" aria-label="Navigation mobile">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.children ? (
                  <>
                    <div className="px-4 py-3 text-base font-semibold text-foreground">
                      {item.label}
                    </div>

                    <div className="mb-2 ml-4 border-l border-border pl-3">
                      {item.children.map((child) => (
                        <NavLink
                          key={child.href}
                          href={child.href}
                          onClick={() => setOpen(false)}
                          className="block rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
                        >
                          {child.label}
                        </NavLink>
                      ))}
                    </div>
                  </>
                ) : (
                  <NavLink
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 text-base font-medium text-foreground/90 transition-colors hover:bg-secondary hover:text-primary"
                  >
                    {item.label}
                  </NavLink>
                )}
              </div>
            ))}

            <Button
              render={
                <NavLink
                  href="/#contact"
                  onClick={() => setOpen(false)}
                />
              }
              nativeButton={false}
              className="mt-2 rounded-xl bg-accent text-accent-foreground hover:bg-accent/90"
            >
              Nous contacter
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}