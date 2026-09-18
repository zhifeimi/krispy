import Header from '@/sections/Header.tsx'
import Hero from '@/sections/Hero.tsx'
import Marquee from '@/sections/Marquee.tsx'
import Manifesto from '@/sections/Manifesto.tsx'
import MenuSection from '@/sections/MenuSection.tsx'
import Gallery from '@/sections/Gallery.tsx'
import Story from '@/sections/Story.tsx'
import Locations from '@/sections/Locations.tsx'
import Footer from '@/sections/Footer.tsx'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Marquee />
      <Manifesto />
      <MenuSection />
      <Gallery />
      <Story />
      <Locations />
      <Footer />
    </main>
  )
}
