import type { ReactNode } from 'react'

type SectionProps = {
  id: string
  index: string
  title: string
  children: ReactNode
}

export function Section({ id, index, title, children }: SectionProps) {
  const headingId = `${id}-heading`
  return (
    <section id={id} aria-labelledby={headingId} className="scroll-mt-20 border-t border-border">
      <div className="mx-auto grid max-w-5xl gap-8 px-6 py-16 md:grid-cols-[200px_1fr] md:gap-12 md:py-24">
        <div className="flex items-baseline gap-3 md:flex-col md:gap-2">
          <span className="font-mono text-xs text-muted-foreground">{index}</span>
          <h2 id={headingId} className="text-xl font-semibold tracking-tight md:text-2xl">
            {title}
          </h2>
        </div>
        <div>{children}</div>
      </div>
    </section>
  )
}
