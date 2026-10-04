import { Award } from 'lucide-react'
import { Section } from '@/components/section'

export function Certifications() {
  return (
    <Section id="certifications" index="03" title="Certifications">
      <div className="flex flex-col items-start gap-4 rounded-lg border border-dashed border-border bg-card/40 p-6 sm:flex-row sm:items-center">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-md border border-border bg-card">
          <Award className="size-5" aria-hidden="true" />
        </div>
        <div>
          <h3 className="font-medium">Coming soon</h3>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
            Certifications will be listed here as I earn them.
          </p>
        </div>
      </div>
    </Section>
  )
}
