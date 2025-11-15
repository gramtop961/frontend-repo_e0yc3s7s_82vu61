export default function Contact() {
  return (
    <main className="pt-24 bg-white min-h-screen">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid lg:grid-cols-2 gap-12">
        <div>
          <h1 className="text-4xl font-semibold text-green-900">Contact</h1>
          <p className="mt-2 text-green-900/80">We’re here to help with any questions.</p>
          <form className="mt-8 grid grid-cols-1 gap-4">
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
      </section>
    </main>
  )
}
