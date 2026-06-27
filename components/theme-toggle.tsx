"use client"

import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = resolvedTheme === "dark"

  function toggle() {
    if (!mounted) return

    const root = document.documentElement

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      root.classList.add("theme-transition")
      window.setTimeout(() => root.classList.remove("theme-transition"), 450)
    }

    setTheme(isDark ? "light" : "dark")
  }

  // IMPORTANT: éviter mismatch SSR/client
  if (!mounted) {
    return (
      <button
        type="button"
        className={cn(
          "grid size-10 place-items-center rounded-full ring-1 ring-border",
          className,
        )}
        aria-hidden="true"
      />
    )
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Activer le mode clair" : "Activer le mode sombre"}
      className={cn(
        "relative grid size-10 place-items-center rounded-full text-primary ring-1 ring-border transition-colors hover:bg-secondary",
        className,
      )}
    >
      <Sun
        className={cn(
          "size-5 transition-all duration-300",
          isDark ? "scale-0 -rotate-90 opacity-0" : "scale-100 rotate-0 opacity-100",
        )}
      />

      <Moon
        className={cn(
          "absolute size-5 transition-all duration-300",
          isDark ? "scale-100 rotate-0 opacity-100" : "scale-0 rotate-90 opacity-0",
        )}
      />
    </button>
  )
}