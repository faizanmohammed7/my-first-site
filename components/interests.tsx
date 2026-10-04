import { Cpu, Network, ShieldCheck, Terminal, FlaskConical, Trophy } from 'lucide-react'
import { Section } from '@/components/section'

const interests = [
  { icon: Network, title: 'Networking', description: 'Building my skills in how networks are designed and connected.' },
  { icon: ShieldCheck, title: 'Cybersecurity', description: 'Building my skills in protecting systems and data.' },
  { icon: Cpu, title: 'Computer Systems', description: 'Building my skills in how computer systems work.' },
  { icon: Terminal, title: 'Scripting', description: 'Building my skills in writing scripts for IT tasks.' },
  { icon: Trophy, title: 'Cybersecurity Challenges', description: 'Enjoying hands-on cybersecurity challenges.' },
  { icon: FlaskConical, title: 'PC Hardware & Home Labs', description: 'Enjoying PC hardware and home networking labs.' },
]

export function Interests() {
  return (
    <Section id="interests" index="02" title="Technical Interests">
      <ul className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">
        {interests.map(({ icon: Icon, title, description }) => (
          <li key={title} className="flex gap-4 bg-background p-5 transition-colors hover:bg-card">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-md border border-border bg-card">
              <Icon className="size-5" aria-hidden="true" />
            </div>
            <div>
              <h3 className="font-medium">{title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{description}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  )
}
