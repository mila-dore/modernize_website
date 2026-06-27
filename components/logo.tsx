import { cn } from "@/lib/utils"

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <span
        aria-hidden="true"
        className="grid size-9 place-items-center rounded-xl bg-primary text-primary-foreground"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="size-5"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 19V6.5C6 5.11929 7.11929 4 8.5 4H13.5C16.2614 4 18.5 6.23858 18.5 9C18.5 11.7614 16.2614 14 13.5 14H9"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="font-heading text-xl font-bold tracking-tight text-primary">
        Polyval
      </span>
    </span>
  )
}
