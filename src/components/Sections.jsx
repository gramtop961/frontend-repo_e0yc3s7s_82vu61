import { Leaf, Sprout, Truck, Handshake, Flower2, TreePine } from 'lucide-react'

export function IntroSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-semibold text-green-900">Rooted in Quality. Grown with Care.</h2>
            <p className="mt-4 text-green-800/80 leading-relaxed">
              We are a family-run garden center dedicated to premium plants, thoughtful design, and friendly advice. From garden makeovers to seasonal inspiration — we help you create spaces that thrive.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="p-4 bg-white rounded-lg border border-green-900/10">
                <Flower2 className="text-green-700" />
                <p className="mt-2 font-medium text-green-900">Premium Selection</p>
                <p className="text-sm text-green-900/70">Curated varieties for indoor and outdoor living.</p>
              </div>
              <div className="p-4 bg-white rounded-lg border border-green-900/10">
                <TreePine className="text-green-700" />
                <p className="mt-2 font-medium text-green-900">Sustainable</p>
                <p className="text-sm text-green-900/70">Responsibly sourced and grown with nature in mind.</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img className="rounded-lg h-48 object-cover" src="https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjMxNjc0NDN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" />
            <img className="rounded-lg h-64 object-cover" src="https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjMxNjc0NDN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" />
            <img className="rounded-lg h-64 object-cover" src="https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjMxNjc0NDN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" />
            <img className="rounded-lg h-48 object-cover" src="https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjMxNjc0NDN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" />
          </div>
        </div>
      </div>
    </section>
  )
}

export function ServicesSection() {
  const services = [
    { icon: Sprout, title: 'Consultation', desc: 'Personalized guidance for your garden vision.' },
    { icon: Handshake, title: 'Planting', desc: 'Professional planting for lasting growth.' },
    { icon: Truck, title: 'Delivery', desc: 'Fast, careful delivery to your door.' },
  ]
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-green-900 text-center">Services</h2>
        <p className="text-green-800/80 text-center mt-2">From idea to thriving garden — we’re here for every step.</p>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="p-6 rounded-xl border border-green-900/10 bg-gradient-to-br from-green-50 to-white">
              <Icon className="text-green-700" />
              <p className="mt-3 font-semibold text-green-900">{title}</p>
              <p className="text-sm text-green-900/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ProductsGrid() {
  const categories = [
    { key: 'outdoor', title: 'Outdoor' },
    { key: 'indoor', title: 'Indoor' },
    { key: 'seasonal', title: 'Seasonal' },
    { key: 'decor', title: 'Decor' },
    { key: 'supplies', title: 'Supplies' },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-semibold text-green-900">Products</h2>
            <p className="text-green-800/80">A curated selection for every season and space.</p>
          </div>
          <a href="/products" className="text-green-800 hover:text-green-900">View all</a>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {categories.map(({ key, title }) => (
            <a key={key} href={`/products?category=${key}`} className="group relative overflow-hidden rounded-xl shadow-sm">
              <img src={`https://source.unsplash.com/1200x800/?${key},plants,garden`} alt={title} className="h-56 w-full object-cover transition-transform group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-white font-medium">{title}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export function GallerySection() {
  const images = Array.from({ length: 9 }, (_, i) => `https://source.unsplash.com/800x600/?garden,plant,${i}`)
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-green-900 text-center">Gallery</h2>
        <p className="text-green-800/80 text-center mt-2">A glimpse into our world of green.</p>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src) => (
            <img key={src} src={src} className="rounded-lg h-48 w-full object-cover" />
          ))}
        </div>
      </div>
    </section>
  )
}

export function HoursSection() {
  const hours = [
    { day: 'Monday–Friday', time: '9:00 – 18:00' },
    { day: 'Saturday', time: '9:00 – 16:00' },
    { day: 'Sunday', time: 'Closed' },
  ]
  return (
    <section className="py-20 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-green-900 text-center">Opening Hours</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {hours.map((h) => (
            <div key={h.day} className="p-6 rounded-xl border border-green-900/10 bg-white">
              <p className="font-medium text-green-900">{h.day}</p>
              <p className="text-green-900/70">{h.time}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ContactSection() {
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  async function handleSubmit(e) {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())
    await fetch(`${baseUrl}/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
    alert('Thank you! We received your message.')
    e.currentTarget.reset()
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-semibold text-green-900">Contact</h2>
          <p className="text-green-800/80 mt-2">We’d love to hear from you.</p>
          <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-1 gap-4">
            <input name="name" required placeholder="Your name" className="border border-green-900/20 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600" />
            <input name="email" required type="email" placeholder="Email" className="border border-green-900/20 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600" />
            <input name="phone" placeholder="Phone (optional)" className="border border-green-900/20 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600" />
            <input name="subject" placeholder="Subject" className="border border-green-900/20 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600" />
            <textarea name="message" required rows="4" placeholder="Message" className="border border-green-900/20 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600" />
            <button className="bg-green-700 hover:bg-green-800 text-white rounded-md px-5 py-3">Send Message</button>
          </form>
        </div>
        <div>
          <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="Map"
              src="https://www.google.com/maps?q=Hilzingen&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="mt-6 p-4 bg-green-50 border border-green-900/10 rounded-lg">
            <p className="text-green-900 font-medium">Mauch Garten Hilzingen</p>
            <p className="text-green-900/80 text-sm">Dorfstraße 12, 78247 Hilzingen</p>
            <p className="text-green-900/80 text-sm">+49 7731 123456 — info@mauch-garten.de</p>
          </div>
        </div>
      </div>
    </section>
  )
}
