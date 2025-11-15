export default function Services() {
  const services = [
    { title: 'Consultation', desc: 'Personalized plant and garden advice, tailored to your space and style.' },
    { title: 'Planting', desc: 'Professional planting service for lasting growth and healthy roots.' },
    { title: 'Delivery', desc: 'Careful delivery of plants and decor directly to your home.' },
  ]
  return (
    <main className="pt-24 bg-gradient-to-b from-green-50 to-white min-h-screen">
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-semibold text-green-900">Services</h1>
        <p className="mt-4 text-green-900/80">From expert advice to full-service planting and delivery.</p>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="p-6 rounded-xl border border-green-900/10 bg-white">
              <p className="font-medium text-green-900">{s.title}</p>
              <p className="text-green-900/70 mt-2 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
