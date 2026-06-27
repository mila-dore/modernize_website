import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Expertise } from "@/components/expertise"
import { Integration } from "@/components/integration"
import { About } from "@/components/about"
import { News } from "@/components/news"
import { Partners } from "@/components/partners"
import { Contact } from "@/components/contact"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Expertise />
        <Integration />
        <About />
        <News />
        <Partners />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
