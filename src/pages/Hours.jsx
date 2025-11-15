export default function Hours() {
  const hours = [
    { day: 'Monday', time: '9:00 – 18:00' },
    { day: 'Tuesday', time: '9:00 – 18:00' },
    { day: 'Wednesday', time: '9:00 – 18:00' },
    { day: 'Thursday', time: '9:00 – 18:00' },
    { day: 'Friday', time: '9:00 – 18:00' },
    { day: 'Saturday', time: '9:00 – 16:00' },
    { day: 'Sunday', time: 'Closed' },
  ]

  return (
    <main className="pt-24 bg-gradient-to-b from-green-50 to-white min-h-screen">
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-semibold text-green-900">Opening Hours</h1>
        <div className="mt-8 grid sm:grid-cols-2 gap-4">
          {hours.map((h) => (
            <div key={h.day} className="p-4 rounded-lg border border-green-900/10 bg-white">
              <p className="font-medium text-green-900">{h.day}</p>
              <p className="text-green-900/70">{h.time}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
