// /components/navlink.tsx

"use client"

import Link from "next/link"

type NavLinkProps = {
  href: string
  className?: string
  onClick?: () => void
  children: React.ReactNode
}

export function NavLink({
  href,
  className,
  onClick,
  children,
}: NavLinkProps) {
  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    if (href.startsWith("/#") && window.location.pathname === "/") {
      e.preventDefault()

      const id = href.replace("/#", "")

      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }

    onClick?.()
  }

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={className}
    >
      {children}
    </Link>
  )
}