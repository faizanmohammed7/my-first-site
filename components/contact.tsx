import { ArrowUpRight, Mail } from 'lucide-react'
import { Section } from '@/components/section'

const email = 'mohammedfaizanf@dupage.edu'

export function Contact() {
  return (
    <Section id="contact" index="04" title="Contact">
      <p className="mb-6 text-base leading-relaxed text-muted-foreground md:text-lg">
        The best way to reach me is by email.
      </p>
      <a
        href={`mailto:${email}`}
        className="group flex items-center justify-between gap-4 rounded-lg border border-border bg-card p-5 transition-colors hover:border-foreground/40"
      >
        <span className="flex min-w-0 items-center gap-4">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <Mail className="size-5" aria-hidden="true" />
          </span>
          <span className="min-w-0">
            <span className="block font-mono text-xs uppercase tracking-wider text-muted-foreground">Email</span>
            <span className="block truncate font-medium sm:text-lg">{email}</span>
          </span>
        </span>
        <ArrowUpRight
          className="size-5 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
          aria-hidden="true"
        />
      </a>
    </Section>
  )
}
