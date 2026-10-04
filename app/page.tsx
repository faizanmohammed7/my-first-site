import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Interests } from '@/components/interests'
import { Certifications } from '@/components/certifications'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Interests />
        <Certifications />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
