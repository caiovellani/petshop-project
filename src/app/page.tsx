import { Services } from '@/app/_components/services'
import { About } from './_components/about'
import { Hero } from './_components/hero'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
    </main>
  )
}
