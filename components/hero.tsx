import { ArrowRight, Mail } from 'lucide-react'

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-heading" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,oklch(1_0_0/5%)_1px,transparent_1px),linear-gradient(to_bottom,oklch(1_0_0/5%)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]"
      />
      <div className="relative mx-auto max-w-5xl px-6 pb-20 pt-20 md:pb-28 md:pt-32">
        <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 font-mono text-xs text-muted-foreground">
          <span className="size-1.5 rounded-full bg-foreground" aria-hidden="true" />
          Computer Information Technology Student
        </p>
        <h1 id="hero-heading" className="text-balance text-5xl font-semibold tracking-tight sm:text-6xl md:text-7xl">
          Faizan Mohammed
        </h1>
        <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
          Computer Information Technology student interested in IT, networking, and cybersecurity.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href="mailto:mohammedfaizanf@dupage.edu"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            <Mail className="size-4" aria-hidden="true" />
            Get in touch
          </a>
          <a
            href="#about"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-border px-5 text-sm font-medium transition-colors hover:bg-accent"
          >
            About me
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
