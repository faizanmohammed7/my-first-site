import { Section } from '@/components/section'

export function About() {
  return (
    <Section id="about" index="01" title="About Me">
      <div className="space-y-5 text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
        <p>
          I am a <span className="text-foreground">Computer Information Technology student</span> building my skills in
          networking, cybersecurity, computer systems, and scripting.
        </p>
        <p>
          I enjoy hands-on technology projects, cybersecurity challenges, PC hardware, and home networking labs. I am
          interested in developing practical IT skills and preparing for a career in technology.
        </p>
      </div>
    </Section>
  )
}
