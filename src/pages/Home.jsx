import Hero from '../components/Hero'
import { IntroSection, ProductsGrid, ServicesSection, GallerySection, ContactSection, HoursSection } from '../components/Sections'

export default function Home() {
  return (
    <main className="bg-white text-green-900">
      <Hero />
      <IntroSection />
      <ProductsGrid />
      <ServicesSection />
      <GallerySection />
      <HoursSection />
      <ContactSection />
    </main>
  )
}
