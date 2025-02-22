import { Services } from '@/app/_components/services'
import { About } from './_components/about'
import { Hero } from './_components/hero'
import { Testimonials } from '@/app/_components/testimonials'
import { Footer } from '@/app/_components/footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Footer />
    </main>
  )
}
